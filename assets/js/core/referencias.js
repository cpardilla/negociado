/* Live references: every citation in a text ("art. 140.1 LJV") becomes a link that opens the
 * literal text in force in a small window — only the cited apartado, at its natural height, with
 * "Ver artículo completo" (owner's rule: no scroll bars in small windows). It closes with Esc or
 * its ✕, never by clicking elsewhere (as in the owner's other apps). */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;
  let open = null; // { el, anchor }

  const norma = (id) => (Neg.catalogo.normas || []).find((n) => n.id === id);

  /** Wraps every citation found in the text nodes of `root` in a link (a.ref). `defaultLaw`: the
   *  law a bare "art. 7" belongs to (the resource's or the article's own). */
  function link(root, defaultLaw) {
    const alias = Neg.catalogo.alias || null;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement.closest("a, button, .ref, code, mark") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const nodes = [];
    for (let n = walker.nextNode(); n; n = walker.nextNode()) if (/art/i.test(n.nodeValue)) nodes.push(n);
    for (const node of nodes) {
      const text = node.nodeValue;
      const found = Neg.citas.find(text, { defaultLaw, alias }).filter((c) => c.law && norma(c.law) && c.refs.length);
      if (!found.length) continue;
      const frag = document.createDocumentFragment();
      let at = 0;
      for (const c of found) {
        let start = c.index;
        let end = c.index + c.length + c.lawLength;
        // A citation that is exactly a parenthesis, «(art. 201 CC)», takes its brackets into the
        // link: outside it they look detached from the tag.
        if (text[start - 1] === "(" && text[end] === ")" && start - 1 >= at) {
          start--;
          end++;
        }
        frag.append(text.slice(at, start));
        const r = c.refs[0];
        const a = document.createElement("a");
        a.className = "ref";
        a.textContent = text.slice(start, end);
        a.dataset.ley = c.law;
        a.dataset.art = r.art;
        if (r.apdo) a.dataset.apdo = r.apdo;
        a.href = norma(c.law).texto === "completa" ? Neg.href("ley", c.law, r.art) : `https://www.boe.es/buscar/act.php?id=${norma(c.law).boe}`;
        frag.append(a);
        at = end;
      }
      frag.append(text.slice(at));
      node.replaceWith(frag);
    }
  }

  function close(restoreFocus) {
    if (!open) return;
    const { el, anchor } = open;
    open = null;
    el.remove();
    if (restoreFocus && anchor.isConnected) anchor.focus();
  }

  /** Places the window under the link, or above it when there is no room below; inside the screen. */
  function place(el, anchor) {
    if (matchMedia("(max-width: 560px)").matches) return; // a sheet at the bottom (CSS)
    const r = anchor.getBoundingClientRect();
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const left = Math.min(Math.max(16, r.left), innerWidth - w - 16);
    const below = r.bottom + 8 + h <= innerHeight - 16;
    // Always inside the screen, even if the link has scrolled out of view.
    const top = Math.max(16, Math.min(below ? r.bottom + 8 : r.top - 8 - h, innerHeight - h - 16));
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
  }

  async function show(anchor) {
    close(false);
    const lawId = anchor.dataset.ley;
    const key = anchor.dataset.art;
    const apdo = anchor.dataset.apdo || null;
    const n = norma(lawId);
    const el = document.createElement("div");
    el.className = "popover";
    el.setAttribute("role", "dialog");
    el.tabIndex = -1;
    const sigla = (n && n.sigla) || lawId; // the law's name as the text writes it, not its file's
    const titulo = `Art. ${key}${apdo ? `.${apdo}` : ""} ${sigla}`;
    el.setAttribute("aria-label", titulo);
    const closeBtn = `<button class="btn" data-action="close-ref" aria-label="Cerrar">${Neg.icon("close")}</button>`;
    el.innerHTML = `<div class="popover-head"><div><strong>${esc(titulo)}</strong><span>Cargando…</span></div>${closeBtn}</div>`;
    document.body.appendChild(el);
    open = { el, anchor };
    place(el, anchor);

    let body;
    let foot;
    if (n && n.texto) {
      try {
        const law = await Neg.leyes.load(lawId);
        const a = law.articulos[key];
        if (!a) throw new Error("sin artículo");
        const paras = Neg.leyes.apartado(a, apdo);
        const whole = paras.length === a.p.length;
        body = `<div class="popover-head"><div><strong>Art. ${esc(Neg.leyes.label(law, key))}${apdo && !whole ? `.${esc(apdo)}` : ""} ${esc(sigla)}</strong><span>${esc(a.r || "")}</span></div>${closeBtn}</div>
          <div class="popover-body law-text">${a.x ? '<p><span class="tag t-aviso">Sin contenido</span></p>' : ""}${Neg.leyes.html(paras)}</div>`;
        const full = n.texto === "completa" ? `<a href="${Neg.href("ley", lawId, key)}" data-action="close-ref">${whole ? "Abrir en la ley" : "Ver artículo completo"} →</a>` : `<a href="${esc(Neg.leyes.boe(law, key))}" target="_blank" rel="noopener">Ver en el BOE ↗</a>`;
        foot = `<span>BOE consolidado a ${Neg.fecha(law.boe.fecha)}</span>${full}`;
      } catch {
        body = null;
      }
    }
    if (!body) {
      body = `<div class="popover-head"><div><strong>${esc(titulo)}</strong><span>${esc(n ? "" : "Norma no identificada")}</span></div>${closeBtn}</div>
        <div class="popover-body"><p>El texto de este artículo no está incluido en la aplicación.</p></div>`;
      foot = n ? `<span></span><a href="https://www.boe.es/buscar/act.php?id=${esc(n.boe)}" target="_blank" rel="noopener">Ver la norma en el BOE ↗</a>` : "<span></span>";
    }
    if (!open || open.el !== el) return; // closed or replaced while loading
    el.innerHTML = `${body}<div class="popover-foot">${foot}</div>`;
    place(el, anchor);
    el.focus();
  }

  document.addEventListener("click", (e) => {
    const ref = e.target.closest("a.ref[data-ley]");
    if (ref && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      show(ref);
      return;
    }
    if (e.target.closest('[data-action="close-ref"]')) close(!e.target.closest("a"));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && open) close(true);
  });
  // The window belongs to the place it was opened from.
  window.addEventListener("hashchange", () => close(false));
  document.addEventListener("scroll", () => open && place(open.el, open.anchor), true);
  window.addEventListener("resize", () => open && place(open.el, open.anchor));

  Neg.referencias = { link, close };
})();

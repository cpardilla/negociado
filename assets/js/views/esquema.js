/* Esquema view: #/esquema/<id> and #/esquema/<id>/<article> (opens that article's card).
 * Draws data/esquemas/<id>.js: sections with cards per article, notes, tables, normative
 * connections, participant columns and phases; filters by category and text; live references. */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;
  const state = {}; // per esquema: { q, cat, open: Set of card indexes }

  // Inline HTML in the data is a small subset written by the migration (strong, em, br, sup, sub,
  // code, u) over escaped text — checked by tests/data.test.js — so it is inserted as it is.
  const rich = (h) => h || "";

  // ── Blocks ───────────────────────────────────────────────────────────────

  const items = (list) => `<ul class="items">${list.map((it) => `<li>${rich(it.t)}${it.sub ? items(it.sub) : ""}</li>`).join("")}</ul>`;

  /** One block; consecutive normative connections, participant groups and phases are laid out
   *  together (grid, columns, numbered sequence). */
  function blocks(list, ctx) {
    let html = "";
    for (let i = 0; i < list.length; ) {
      const kind = ["norma", "grupo", "paso"].find((k) => list[i][k]);
      if (kind) {
        let j = i;
        while (j < list.length && list[j][kind]) j++;
        const run = list.slice(i, j).map((b) => b[kind]);
        if (kind === "norma") html += `<div class="norms">${run.map(norma).join("")}</div>`;
        if (kind === "grupo") html += `<div class="groups">${run.map(grupo).join("")}</div>`;
        if (kind === "paso") html += `<ol class="steps">${run.map(paso).join("")}</ol>`;
        i = j;
        continue;
      }
      html += block(list[i], ctx);
      i++;
    }
    return html;
  }

  function block(b, ctx) {
    if (b.tarjeta) return card(b.tarjeta, ctx);
    if (b.apartado) return `<div class="points">${b.apartado.titulo ? `<h4>${rich(b.apartado.titulo)}</h4>` : ""}${blocks(b.apartado.contenido, ctx)}</div>`;
    if (b.lista) return items(b.lista);
    if (b.nota) return `<div class="block ${b.nota.tono}">${b.nota.etiqueta ? `<span class="block-label">${rich(b.nota.etiqueta)}</span>` : ""}${rich(b.nota.texto)}</div>`;
    if (b.tabla) {
      const head = b.tabla.cabecera ? `<thead><tr>${b.tabla.cabecera.map((c) => `<th>${rich(c)}</th>`).join("")}</tr></thead>` : "";
      return `<div class="table-wrap"><table class="table">${head}<tbody>${b.tabla.filas.map((r) => `<tr>${r.map((c) => `<td>${rich(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    }
    if (b.p !== undefined) return `<p class="prose${b.estilo === "refs" ? " refs-line" : ""}">${rich(b.p)}</p>`;
    return "";
  }

  const norma = (n) => `<div class="norm" data-norma-ley="${esc(Neg.citas.normaLaw(n, Neg.catalogo.alias) || "")}"><div class="norm-law">${rich(n.ley)}</div>${n.titulo ? `<div class="norm-title">${rich(n.titulo)}</div>` : ""}${n.texto ? `<div class="norm-text">${rich(n.texto)}</div>` : ""}${n.etiqueta ? `<span class="tag ${n.tono}">${rich(n.etiqueta)}</span>` : ""}</div>`;
  const grupo = (g) => `<div class="group ${g.tono}"><h4>${rich(g.titulo)}</h4>${g.items ? items(g.items) : ""}</div>`;
  const paso = (p) => `<li class="step-item">${p.n ? `<span class="step-n">${esc(p.n)}</span>` : ""}<div><div class="step-title">${rich(p.titulo || "")}</div>${p.texto ? `<p>${rich(p.texto)}</p>` : ""}${p.items ? items(p.items) : ""}</div></li>`;

  // ── Cards ────────────────────────────────────────────────────────────────

  /** Article keys a card is about, from its badge ("Artículo 140", "Arts. 16–18"). */
  function cardArticles(c, ley) {
    const found = Neg.citas.find(c.articulo.replace(/^Art[íi]culos?/i, "art."), { defaultLaw: ley });
    return found.filter((f) => f.law === ley).flatMap((f) => f.refs.map((r) => r.art));
  }

  function card(c, ctx) {
    const i = ctx.cards.length;
    ctx.cards.push(c);
    const open = ctx.state.open.has(i);
    return `<article class="card ${c.tono}" data-card="${i}" data-cat="${esc(c.categoria)}" data-open="${open}">
      <div class="card-head">
        <div class="card-meta"><span class="card-art">${rich(c.articulo)}</span>${c.etiquetas.map((t) => `<span class="tag ${t.tono}">${esc(t.texto)}</span>`).join("")}</div>
        <h3>${rich(c.titulo)}</h3>
        ${c.resumen ? `<p class="card-summary">${rich(c.resumen)}</p>` : ""}
      </div>
      ${c.cuerpo.length ? `<div class="card-body">${blocks(c.cuerpo, ctx)}</div>` : ""}
      ${c.referencias.length ? `<div class="card-refs"><span class="label">Normas</span>${c.referencias.map((r) => `<span>${esc(r)}</span>`).join(" · ")}</div>` : ""}
      ${c.cuerpo.length ? `<button class="card-toggle" data-action="toggle" aria-expanded="${open}" aria-label="${open ? "Ocultar" : "Ver"} el contenido de ${esc(c.articulo)}"><span>${open ? "Ocultar contenido" : "Ver contenido"}</span>${Neg.icon("down")}</button>` : ""}
    </article>`;
  }

  // ── View ─────────────────────────────────────────────────────────────────

  function head(rec) {
    const rev =
      rec.revision.estado === "revisado"
        ? `<span class="tag t-ok">Revisado con el BOE a ${Neg.fecha(rec.revision.boe)}</span>`
        : `<span class="tag t-aviso" title="Contenido migrado tal cual de la versión anterior; su revisión jurídica está en curso.">Pendiente de revisión</span>`;
    return Neg.shell.head({
      crumbs: [["Esquemas"], [rec.ley], [rec.corto]],
      kicker: rec.cabecera.migas,
      title: rec.titulo,
      sub: (rec.cabecera.subtitulo || "").replace(/<[^>]+>/g, ""), // head() escapes it
      meta: rec.cabecera.etiquetas.map((t) => `<span class="tag">${esc(t)}</span>`).join("") + rev,
    });
  }

  function toolbar(rec, s) {
    const chips = rec.categorias.map((c) => `<button class="chip ${c.tono}" data-cat="${esc(c.id)}" aria-pressed="${s.cat === c.id}">${esc(c.nombre)}</button>`).join("");
    return `<div class="toolbar static">
      <div class="search">${Neg.icon("search")}<input type="search" value="${esc(s.q)}" placeholder="Buscar en el esquema…" aria-label="Buscar en el esquema" /></div>
      <span class="count" data-count></span>
      <span class="spacer"></span>
      <button class="btn" data-action="expand">Expandir todo</button>
      <button class="btn" data-action="collapse">Contraer todo</button>
      <button class="btn" data-action="print" aria-label="Imprimir">${Neg.icon("print")}<span class="btn-text">Imprimir</span></button>
      <div class="chips row" role="group" aria-label="Categorías">${chips}</div>
    </div>`;
  }

  function sectionsHtml(rec, ctx) {
    return rec.secciones
      .map((s, i) => {
        if (s.capitulo) return `<h2 class="chapter"><span>${esc(s.capitulo.numero)}</span> ${esc(s.capitulo.nombre)}</h2>`;
        const folded = ctx.state.folded.has(i);
        return `<section class="section esq-section" data-section="${i}">
          <button class="section-head" data-action="fold" aria-expanded="${!folded}"><h2>${esc(s.titulo)}</h2>${s.recuento ? `<span class="count">${esc(s.recuento)}</span>` : ""}${Neg.icon("down", "fold-icon")}</button>
          <div class="section-body"${folded ? " hidden" : ""}>${blocks(s.bloques, ctx)}</div>
        </section>`;
      })
      .join("");
  }

  /** Shows only the cards that match the category and every search word; hides sections left
   *  without cards (sections that never had cards stay, unless a search is on). */
  function filter(el, ctx) {
    const s = ctx.state;
    const words = Neg.fold(s.q).split(/\s+/).filter(Boolean);
    let shown = 0;
    el.querySelectorAll("[data-card]").forEach((node) => {
      const c = ctx.cards[Number(node.dataset.card)];
      const hay = node._hay || (node._hay = Neg.fold(`${node.textContent} ${c.claves || ""}`));
      const ok = (!s.cat || c.categoria === s.cat) && words.every((w) => hay.includes(w));
      node.hidden = !ok;
      if (ok) shown++;
    });
    const filtering = words.length > 0 || !!s.cat;
    el.querySelectorAll(".esq-section").forEach((sec) => {
      const cards = sec.querySelectorAll("[data-card]");
      sec.hidden = filtering && (!cards.length || ![...cards].some((c) => !c.hidden));
    });
    el.querySelectorAll(".chapter").forEach((h) => (h.hidden = filtering));
    el.querySelector("[data-count]").textContent = filtering ? `${shown} de ${ctx.cards.length} fichas` : "";
    let empty = el.querySelector(".esq-empty");
    if (filtering && !shown) {
      if (!empty) el.querySelector(".esq-body").insertAdjacentHTML("beforeend", `<div class="esq-empty">${Neg.message("Nada coincide", "Prueba con otras palabras o quita el filtro de categoría.")}</div>`);
    } else if (empty) empty.remove();
  }

  function setOpen(node, ctx, open) {
    const i = Number(node.dataset.card);
    open ? ctx.state.open.add(i) : ctx.state.open.delete(i);
    node.dataset.open = String(open);
    const btn = node.querySelector('[data-action="toggle"]');
    if (btn) {
      btn.setAttribute("aria-expanded", String(open));
      btn.querySelector("span").textContent = open ? "Ocultar contenido" : "Ver contenido";
      btn.setAttribute("aria-label", `${open ? "Ocultar" : "Ver"} el contenido de ${ctx.cards[i].articulo.replace(/<[^>]+>/g, "")}`);
    }
  }

  function render(el, rec, art) {
    const s = (state[rec.id] = state[rec.id] || { q: "", cat: null, open: new Set(), folded: null });
    if (!s.folded) s.folded = new Set(rec.secciones.map((x, i) => (x.plegada ? i : -1)).filter((i) => i >= 0));
    const ctx = { state: s, cards: [] };
    // An article in the address opens its card (and the section holding it).
    let target = null;
    if (art) {
      const probe = { state: { open: new Set(), folded: new Set() }, cards: [] };
      blocks(rec.secciones.flatMap((x) => x.bloques || []), probe);
      target = probe.cards.findIndex((c) => cardArticles(c, rec.ley).includes(art));
      if (target >= 0) s.open.add(target);
    }
    el.dataset.view = `esquema/${rec.id}`;
    el.innerHTML = head(rec) + toolbar(rec, s) + `<div class="esq-body">${sectionsHtml(rec, ctx)}${rec.pie ? `<p class="esq-foot">${rich(rec.pie)}</p>` : ""}</div>`;
    Neg.referencias.link(el.querySelector(".esq-body"), rec.ley);
    filter(el, ctx);

    el.querySelector(".toolbar input").addEventListener(
      "input",
      Neg.debounce((e) => {
        s.q = e.target.value;
        filter(el, ctx);
      }, 120)
    );
    // Listeners on the view's own nodes (redrawn each time), never on #view itself.
    const body = el.querySelector(".esq-body");
    const bar = el.querySelector(".toolbar");
    bar.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (chip) {
        s.cat = s.cat === chip.dataset.cat ? null : chip.dataset.cat;
        bar.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.cat === s.cat)));
        filter(el, ctx);
      }
      const act = e.target.closest("[data-action]");
      if (!act) return;
      if (act.dataset.action === "expand" || act.dataset.action === "collapse")
        body.querySelectorAll("[data-card]").forEach((n) => !n.hidden && n.querySelector(".card-body") && setOpen(n, ctx, act.dataset.action === "expand"));
      if (act.dataset.action === "print") window.print();
    });
    body.addEventListener("click", (e) => {
      const act = e.target.closest("[data-action]");
      if (!act) return;
      if (act.dataset.action === "toggle") {
        const node = act.closest("[data-card]");
        setOpen(node, ctx, node.dataset.open !== "true");
      }
      if (act.dataset.action === "fold") {
        const sec = act.closest("[data-section]");
        const i = Number(sec.dataset.section);
        const open = act.getAttribute("aria-expanded") !== "true";
        act.setAttribute("aria-expanded", String(open));
        sec.querySelector(".section-body").hidden = !open;
        open ? s.folded.delete(i) : s.folded.add(i);
      }
    });

    if (target != null && target >= 0) {
      const node = body.querySelector(`[data-card="${target}"]`);
      const sec = node.closest("[data-section]");
      if (sec && sec.querySelector(".section-body").hidden) sec.querySelector('[data-action="fold"]').click();
      node.classList.add("flash");
      requestAnimationFrame(() => node.scrollIntoView({ block: "start" }));
      document.title = `${rec.corto} (art. ${art}) · Negociado`;
    } else if (art) Neg.toast(`Este esquema no tiene una ficha propia del art. ${art}`);
  }

  Neg.view("esquema", async (el, [id, art]) => {
    if (!id) {
      const first = Neg.catalogo.esquemas[0];
      return first ? Neg.go("esquema", first.id) : (el.innerHTML = Neg.message("Aún no hay esquemas", ""));
    }
    if (!Neg.catalogo.esquemas.some((r) => r.id === id)) {
      el.innerHTML = Neg.message("No existe este esquema", `«${id}» no está entre los esquemas de la aplicación.`, true);
      document.title = "No encontrado · Negociado";
      return;
    }
    el.innerHTML = Neg.message("Cargando el esquema…");
    const rec = await Neg.data.load("esquema", id);
    render(el, rec, art || null);
  });
})();

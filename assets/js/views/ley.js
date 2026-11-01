/* Law view: #/ley/<ID> (index), #/ley/<ID>/<article> (index + article), #/ley/<ID>/mapa (mind map).
 * Index and map are drawn from the same data (data/leyes/<ID>.js), built from the BOE. */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;
  const state = {}; // per law: { open: Set of division indexes, q: search text }

  const st = (id) => (state[id] = state[id] || { open: new Set(), q: "" });

  // ── Index ────────────────────────────────────────────────────────────────

  /** Article and division matches for the search words (heading, number or text). */
  function matches(law, words) {
    const hits = new Map(); // key → "rubrica" | "texto"
    if (!words.length) return hits;
    for (const key of law.orden) {
      const a = law.articulos[key];
      const head = a._head || (a._head = Neg.fold(`art. ${key} articulo ${key} ${a.r}`));
      if (words.every((w) => head.includes(w))) hits.set(key, "rubrica");
      else {
        const text = a._text || (a._text = Neg.fold(a.p.map((p) => p[1]).join(" ")));
        if (words.every((w) => head.includes(w) || text.includes(w))) hits.set(key, "texto");
      }
    }
    return hits;
  }

  function highlighter(words) {
    if (!words.length) return esc;
    return (text) => {
      const folded = Neg.fold(text);
      const on = new Array(text.length).fill(false);
      for (const w of words) for (let i = folded.indexOf(w); i >= 0; i = folded.indexOf(w, i + 1)) for (let j = i; j < i + w.length; j++) on[j] = true;
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (on[i] && !on[i - 1]) out += "<mark>";
        out += esc(text[i]);
        if (on[i] && !on[i + 1]) out += "</mark>";
      }
      return out;
    };
  }

  function treeHtml(law, current, words) {
    const s = st(law.id);
    const hits = matches(law, words);
    const searching = words.length > 0;
    const mark = highlighter(words);
    const ancestors = new Set(current ? law._padres[current] || [] : []);
    let count = 0;
    const walk = (list, depth) =>
      list
        .map((x) => {
          if (typeof x === "string") {
            if (searching && !hits.has(x)) return "";
            count++;
            const a = law.articulos[x];
            const inText = hits.get(x) === "texto" ? ' <span class="tag">en el texto</span>' : "";
            return `<a class="tree-art${a.x ? " void" : ""}" href="${Neg.href("ley", law.id, x)}"${x === current ? ' aria-current="true"' : ""}>${mark(`Art. ${Neg.leyes.label(law, x)}.`)} ${mark(a.r || (a.x ? "(sin contenido)" : ""))}${inText}</a>`;
          }
          const inner = walk(x.h, depth + 1);
          if (searching && !inner) return "";
          const i = law._divisiones.indexOf(x);
          const open = searching || ancestors.has(x) || s.open.has(i);
          return `<button class="tree-div lvl-${depth}" data-div="${i}" aria-expanded="${open}">${Neg.icon("chev", "chev")}<span>${esc(x.num)}${x.t ? `. ${esc(x.t)}` : ""}</span></button><div class="tree-sub"${open ? "" : " hidden"}>${inner}</div>`;
        })
        .join("");
    const html = walk(law.estructura, 0);
    return { html: html || `<p class="tree-empty">Ningún artículo coincide con la búsqueda.</p>`, count };
  }

  function overviewHtml(law) {
    const top = law.estructura.map((d) => `<li><a href="${Neg.href("ley", law.id, d._arts[0])}">${esc(d.num)}${d.t ? `. ${esc(d.t)}` : ""}</a> <span class="count">arts. ${esc(Neg.leyes.label(law, d._arts[0]))}–${esc(Neg.leyes.label(law, d._arts[d._arts.length - 1]))}</span></li>`).join("");
    return `<article class="article">
      <div class="article-path">${esc(law.titulo)}</div>
      <h2>Estructura</h2>
      <ul class="overview">${top}</ul>
      <div class="article-foot"><span>Texto consolidado del BOE a ${Neg.fecha(law.boe.fecha)}. Solo el articulado (sin preámbulo ni disposiciones).</span><span class="spacer"></span><a class="btn" href="${esc(law.boe.url)}" target="_blank" rel="noopener">Ver en el BOE ${Neg.icon("out")}</a></div>
    </article>`;
  }

  /** "Lo citan": the other esquemas and guías whose text cites the article (data/citados.js), each
   *  linked to the card or step that cites it. Those with their own button above are left out. */
  function citedHtml(law, key, own) {
    const idx = Neg.data.get("catalogo", "citados");
    const list = ((idx && idx.leyes[law.id]) || {})[key] || [];
    const cat = Neg.catalogo;
    const items = list
      .filter(([k, id]) => !own.includes(`${k}:${id}`))
      .map(([k, id, loc]) => {
        const r = (k === "e" ? cat.esquemas : cat.guias).find((x) => x.id === id);
        if (!r) return "";
        const href = Neg.href(k === "e" ? "esquema" : "guia", id, loc || null);
        return `<a class="cited-link" href="${href}"><span class="tag ${k === "e" ? "c1" : "c3"}">${k === "e" ? "Esquema" : "Guía"}</span>${esc(r.ley)} · ${esc(r.corto)}</a>`;
      })
      .filter(Boolean);
    // The essential first: six, and the rest one click away, in place (no inner scroll).
    const SHOWN = 6;
    const more = items.length - SHOWN;
    const html = items.map((x, i) => (i < SHOWN ? x : x.replace('<a class="cited-link"', '<a class="cited-link" hidden'))).join("");
    return items.length ? `<div class="cited"><span class="cited-label">Lo citan</span>${html}${more > 0 ? `<button class="cited-more" data-action="cited-more">y ${more} más</button>` : ""}</div>` : "";
  }

  function articleHtml(law, key, words) {
    const a = law.articulos[key];
    if (!a) return Neg.message("Artículo no encontrado", `La ${law.id} no tiene artículo ${key}.`);
    const i = law.orden.indexOf(key);
    const prev = law.orden[i - 1];
    const next = law.orden[i + 1];
    const path = law._padres[key].map((d) => `${d.num}${d.t ? `. ${d.t}` : ""}`).join(" › ");
    const vigor = a.m
      ? `Redacción vigente desde ${Neg.fecha(a.v)}, dada por <a href="https://www.boe.es/buscar/act.php?id=${esc(a.m)}" target="_blank" rel="noopener">${esc(a.m)}</a>`
      : `Redacción original, vigente desde ${Neg.fecha(a.v)}`;
    const { esquemas, guias } = Neg.leyes.recursos(law.id, key);
    const links = [...esquemas.map((r) => `<a class="btn" href="${Neg.href("esquema", r.id, key)}">Esquema</a>`), ...guias.map((r) => `<a class="btn" href="${Neg.href("guia", r.id)}">Guía</a>`)].join("");
    const cited = citedHtml(law, key, [...esquemas.map((r) => `e:${r.id}`), ...guias.map((r) => `g:${r.id}`)]);
    return `<article class="article" id="articulo" tabindex="-1">
      <div class="article-path">${esc(law.id)} › ${esc(path)}</div>
      <h2>Artículo ${esc(Neg.leyes.label(law, key))}.${a.r ? ` <span class="rubric">${esc(a.r)}</span>` : ""}</h2>
      ${a.x ? '<p class="page-meta"><span class="tag t-aviso">Sin contenido</span></p>' : ""}
      ${a.c ? `<p class="page-meta"><span class="tag t-nota">Versión corregida</span> ${esc(a.c)}</p>` : ""}
      <div class="law-text">${Neg.leyes.html(a.p, words.length ? highlighter(words) : null)}</div>
      ${cited}
      <div class="article-foot">
        <span>${vigor}</span><span class="spacer"></span>
        ${links}
        <button class="btn" data-action="copy" title="Copia la ruta y el texto del artículo">${Neg.icon("copy")} Copiar</button>
        <button class="btn" data-action="vigencia" title="Pregunta al BOE si este artículo ha cambiado desde ${Neg.fecha(law.boe.fecha)}">${Neg.icon("check")} Comprobar vigencia</button>
        <a class="btn" href="${esc(Neg.leyes.boe(law, key))}" target="_blank" rel="noopener">BOE ${Neg.icon("out")}</a>
      </div>
      <div class="vigencia" data-vigencia role="status"></div>
      <nav class="article-nav" aria-label="Artículos contiguos">
        ${prev ? `<a class="btn" href="${Neg.href("ley", law.id, prev)}">${Neg.icon("back")} Art. ${esc(Neg.leyes.label(law, prev))}</a>` : "<span></span>"}
        ${next ? `<a class="btn" href="${Neg.href("ley", law.id, next)}">Art. ${esc(Neg.leyes.label(law, next))} ${Neg.icon("chev")}</a>` : "<span></span>"}
      </nav>
    </article>`;
  }

  // ── Checking the article against the BOE (only when asked: one request to its open-data API) ──

  /** The answer of "Comprobar vigencia", as blocks under the article. */
  function vigenciaHtml(law, key, r) {
    const a = law.articulos[key];
    const norma = (id) => (id === law.boe.id ? "la redacción original" : `<a href="https://www.boe.es/buscar/act.php?id=${esc(id)}" target="_blank" rel="noopener">${esc(id)}</a>`);
    const texto = (v, label) => `<details class="vigencia-text"><summary>${label}</summary><div class="law-text">${v.parrafos.map((t) => `<p>${esc(t)}</p>`).join("")}</div></details>`;
    const out = [];
    if (r.estado === "igual")
      out.push(`<div class="block t-ok"><span class="block-label">Vigente sin cambios</span>El BOE de hoy da la misma redacción que la aplicación: vigente desde ${Neg.fecha(r.actual.vigencia)}, ${norma(r.actual.norma)}.${a.c ? " Es la versión corregida que se indica arriba." : ""}</div>`);
    else if (r.estado === "posterior")
      out.push(`<div class="block t-aviso"><span class="block-label">Hay una redacción posterior</span>El BOE da otra redacción, vigente desde ${Neg.fecha(r.actual.vigencia)} (${norma(r.actual.norma)}). La de la aplicación es la vigente desde ${Neg.fecha(a.v)}.${texto(r.actual, "Ver la redacción del BOE")}</div>`);
    else
      out.push(`<div class="block t-nota"><span class="block-label">Misma versión, texto retocado</span>El BOE mantiene la versión vigente desde ${Neg.fecha(r.actual.vigencia)}, pero su texto ya no coincide palabra por palabra con el de la aplicación.${texto(r.actual, "Ver el texto del BOE")}</div>`);
    if (r.pendiente)
      out.push(`<div class="block t-plazo"><span class="block-label">Modificación publicada, aún no vigente</span>Entrará en vigor el ${Neg.fecha(r.pendiente.vigencia)} (${norma(r.pendiente.norma)}).${texto(r.pendiente, "Ver la redacción futura")}</div>`);
    return out.join("");
  }

  async function checkVigencia(el, law, key, btn) {
    const box = el.querySelector("[data-vigencia]");
    const a = law.articulos[key];
    btn.disabled = true;
    box.innerHTML = `<p class="vigencia-wait">Consultando el BOE…</p>`;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 15000);
    try {
      const res = await fetch(Neg.vigencia.url(law.boe.id, a.b), { headers: { Accept: "application/xml" }, signal: ctrl.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const today = new Date().toLocaleDateString("sv-SE").replace(/-/g, "");
      const r = Neg.vigencia.comparar(await res.text(), a, law.boe.id, today);
      if (Neg.where().args[1] !== key) return; // the reader moved to another article meanwhile
      box.innerHTML = vigenciaHtml(law, key, r);
    } catch (err) {
      if (Neg.where().args[1] !== key) return;
      box.innerHTML = `<div class="block t-nota"><span class="block-label">No se ha podido consultar el BOE</span>Sin conexión o servicio no disponible en este momento. El texto de la aplicación es el consolidado a ${Neg.fecha(law.boe.fecha)}.</div>`;
    } finally {
      clearTimeout(timer);
      btn.disabled = false;
      placeArticle(el, false);
    }
  }

  /** Pins the article beside the index only when it fits on screen (no inner scroll bars). */
  function placeArticle(el, scroll) {
    const art = el.querySelector(".law .article");
    const content = document.getElementById("content");
    if (!art || !content) return;
    const toolbar = el.querySelector(".toolbar");
    const top = (toolbar ? toolbar.offsetHeight : 0) + 16;
    const wide = getComputedStyle(el.querySelector(".law")).gridTemplateColumns.split(" ").length > 1;
    const fits = wide && art.offsetHeight + top + 16 <= content.clientHeight;
    art.classList.toggle("sticky", fits);
    art.style.top = fits ? `${top}px` : "";
    if (scroll && !fits) {
      const y = art.getBoundingClientRect().top - content.getBoundingClientRect().top + content.scrollTop - top;
      content.scrollTo({ top: Math.max(0, y) });
    }
  }

  function renderIndex(el, law, key) {
    const s = st(law.id);
    const words = Neg.fold(s.q).split(/\s+/).filter(Boolean);
    const same = el.dataset.view === `ley/${law.id}/indice`;
    if (key) for (const d of law._padres[key] || []) s.open.add(law._divisiones.indexOf(d));
    const tree = treeHtml(law, key, words);
    if (same) {
      // Same law already on screen: only the article and the index highlight change.
      el.querySelector(".tree").innerHTML = tree.html;
      el.querySelector(".law-main").innerHTML = key ? articleHtml(law, key, words) : overviewHtml(law);
    } else {
      el.dataset.view = `ley/${law.id}/indice`;
      el.innerHTML =
        head(law, key) +
        `<div class="toolbar">${modes(law, "indice")}
          <div class="search"><input type="search" value="${esc(s.q)}" placeholder="Buscar artículo, rúbrica o texto…" aria-label="Buscar en la ${esc(law.id)}" />${Neg.icon("search")}</div>
          <span class="count" data-count></span>
        </div>
        <div class="law"><nav class="tree" aria-label="Índice de la ${esc(law.id)}">${tree.html}</nav><div class="law-main">${key ? articleHtml(law, key, words) : overviewHtml(law)}</div></div>`;
      wire(el, law);
    }
    // "conforme al artículo 17": a link that shows that article without leaving this one.
    const text = el.querySelector(".law-main .law-text");
    if (text) Neg.referencias.link(text, law.id);
    const counter = el.querySelector("[data-count]");
    counter.textContent = words.length ? `${tree.count} artículo${tree.count === 1 ? "" : "s"}` : "";
    document.title = key ? `Art. ${Neg.leyes.label(law, key)} ${law.id} · Negociado` : `${law.nombre} · Negociado`;
    const cur = el.querySelector(".tree [aria-current]");
    if (cur && same) cur.scrollIntoView({ block: "nearest" });
    placeArticle(el, same && !!key);
  }

  function wire(el, law) {
    const s = st(law.id);
    el.querySelector(".tree").addEventListener("click", (e) => {
      const b = e.target.closest(".tree-div");
      if (!b) return;
      const open = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", String(open));
      b.nextElementSibling.hidden = !open;
      const i = Number(b.dataset.div);
      open ? s.open.add(i) : s.open.delete(i);
      placeArticle(el, false);
    });
    el.querySelector(".toolbar input").addEventListener(
      "input",
      Neg.debounce((e) => {
        s.q = e.target.value;
        const key = Neg.where().args[1];
        renderIndex(el, law, key && key !== "mapa" ? key : null);
      }, 150)
    );
    // On .law (redrawn with the view), never on #view itself: #view persists, and listeners
    // added to it on every visit would pile up.
    el.querySelector(".law").addEventListener("click", async (e) => {
      const more = e.target.closest('[data-action="cited-more"]');
      if (more) {
        more.parentElement.querySelectorAll(".cited-link[hidden]").forEach((a) => (a.hidden = false));
        more.remove();
        placeArticle(el, false);
        return;
      }
      const check = e.target.closest('[data-action="vigencia"]');
      if (check) return checkVigencia(el, law, Neg.where().args[1], check);
      if (!e.target.closest('[data-action="copy"]')) return;
      const key = Neg.where().args[1];
      const a = law.articulos[key];
      const ok = await Neg.copy(`${Neg.leyes.ruta(law, key)}\n\n${a.p.map((p) => p[1]).join("\n")}`);
      Neg.toast(ok ? "Copiado: ruta y texto del artículo" : "No se ha podido copiar");
    });
  }

  // ── Shared parts ─────────────────────────────────────────────────────────

  function head(law, key) {
    return Neg.shell.head({
      crumbs: [["Leyes"], [law.id, key ? Neg.href("ley", law.id) : null]],
      kicker: law.titulo.replace(/^(Ley[^,]*, de \d+ de \w+(?: de \d+)?).*/, "$1"),
      title: law.nombre,
      meta: `<span class="tag t-ley">BOE consolidado a ${Neg.fecha(law.boe.fecha)}</span><span class="tag">${law.orden.length} artículos</span>`,
    });
  }

  const modes = (law, mode) =>
    `<div class="segmented" role="group" aria-label="Vista"><a class="seg" href="${Neg.href("ley", law.id)}" aria-pressed="${mode === "indice"}">Índice</a><a class="seg" href="${Neg.href("ley", law.id, "mapa")}" aria-pressed="${mode === "mapa"}">Mapa</a></div>`;

  // ── Mind map ─────────────────────────────────────────────────────────────

  /** The law as a markmap tree: law → divisions → articles → apartados → sub-items. Text is
   *  escaped (markmap renders node content as HTML). Each top branch keeps its colour (payload.b). */
  function mapData(law) {
    const node = (content, children, b) => ({ content, children, payload: { b } });
    const article = (key, b) => {
      const a = law.articulos[key];
      const kids = [];
      let apdo = null;
      for (const [role, t] of a.p) {
        const n = node(esc(t), [], b);
        if (role === "a") {
          kids.push(n);
          apdo = n;
        } else if (apdo) apdo.children.push(n);
        else kids.push(n);
      }
      return node(`<strong>Artículo ${esc(Neg.leyes.label(law, key))}.${a.r ? ` ${esc(a.r)}` : ""}</strong>`, kids, b);
    };
    const walk = (list, b) => list.map((x, i) => (typeof x === "string" ? article(x, b) : node(`<strong>${esc(x.num)}${x.t ? `. ${esc(x.t)}` : ""}</strong>`, walk(x.h, b == null ? i : b), b == null ? i : b)));
    return node(`<strong>${esc(law.titulo)}</strong>`, walk(law.estructura, null), null);
  }

  async function renderMap(el, law) {
    el.dataset.view = `ley/${law.id}/mapa`;
    el.innerHTML = head(law) + `<div class="toolbar">${modes(law, "mapa")}<span class="count">Pulsa un nodo para desplegarlo o plegarlo; arrastra para moverte y usa la rueda para acercar.</span></div><div class="mindmap"><svg></svg></div>`;
    document.title = `${law.nombre} (mapa) · Negociado`;
    Neg.loadStyle("vendor/markmap/markmap-toolbar.css");
    await Neg.loadScript("vendor/markmap/d3.min.js");
    await Neg.loadScript("vendor/markmap/markmap-view.js");
    await Neg.loadScript("vendor/markmap/markmap-toolbar.js");
    if (el.dataset.view !== `ley/${law.id}/mapa`) return; // the user moved on while loading
    const css = getComputedStyle(document.documentElement);
    const palette = ["--c1", "--c2", "--c3", "--c4", "--c5", "--c6"].map((v) => css.getPropertyValue(v).trim());
    const neutral = css.getPropertyValue("--gold").trim();
    const box = el.querySelector(".mindmap");
    const mm = window.markmap.Markmap.create(box.querySelector("svg"), {
      maxWidth: 300, // owner's map: nodes no wider than 300 px
      initialExpandLevel: 2, // and only the first level open (markmap 0.18 counts the root as depth 1)
      duration: 300,
      color: (n) => (n.payload && n.payload.b != null ? palette[n.payload.b % palette.length] : neutral),
    }, mapData(law));
    // Zoom, fit and expand/fold; no brand, and no markmap theme button (the app's theme rules).
    const tb = new window.markmap.Toolbar();
    tb.showBrand = false;
    const titles = { zoomIn: "Acercar", zoomOut: "Alejar", fit: "Ajustar a la ventana", recurse: "Desplegar o plegar también lo que cuelga del nodo" };
    for (const [id, title] of Object.entries(titles)) tb.registry[id].title = title;
    tb.setItems(["zoomIn", "zoomOut", "fit", "recurse"]);
    tb.attach(mm);
    const tbEl = tb.render();
    tbEl.classList.add("mindmap-toolbar");
    box.appendChild(tbEl);
  }

  // ── Route ────────────────────────────────────────────────────────────────

  Neg.view("ley", async (el, [id, sub]) => {
    if (!id) {
      const first = Neg.catalogo.leyes[0];
      if (first) return Neg.go("ley", first.id);
    }
    // Only laws in the catalogue exist: an unknown one is answered without asking for a file.
    if (!Neg.catalogo.leyes.some((l) => l.id === id)) {
      el.innerHTML = Neg.message("No existe esta ley", `«${id}» no está entre las leyes de la aplicación.`, true);
      document.title = "No encontrado · Negociado";
      return;
    }
    if (!el.dataset.view || !el.dataset.view.startsWith(`ley/${id}/`)) el.innerHTML = Neg.message("Cargando la ley…");
    const law = await Neg.leyes.load(id);
    // Who cites each article ("Lo citan"): loaded once; without it the article simply has no list.
    await Neg.data.load("catalogo", "citados").catch(() => null);
    if (sub === "mapa") return renderMap(el, law);
    return renderIndex(el, law, sub || null);
  });

  // The map's colours are read when it is drawn: redraw it when the theme changes.
  document.addEventListener("neg:tema", () => {
    const el = document.getElementById("view");
    const m = el && /^ley\/(.+)\/mapa$/.exec(el.dataset.view || "");
    if (m) Neg.leyes.load(m[1]).then((law) => renderMap(el, law));
  });
})();

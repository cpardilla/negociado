// Runs inside a page of the current (pre-redesign) app through tools/run.js.
// Returns the page's visible structure as data: header, stats, filters,
// legend, footer and, for esquemas, every section with its cards, notes and
// tables. Inline formatting is kept as a small HTML subset (strong, em, br,
// sup, sub, code). Anything with text that the extractor did not capture is
// listed in `sinCapturar`, so nothing can be lost silently.

const INLINE = { STRONG: "strong", B: "strong", EM: "em", I: "em", SUP: "sup", SUB: "sub", CODE: "code", U: "u" };
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const captured = new Set();
const mark = (el) => (el && captured.add(el), el);
const norm = (s) => s.replace(/\s+/g, " ").trim();

/** Rich text of an element: inline subset kept, the rest flattened. */
function rt(el, skip) {
  let out = "";
  for (const n of el.childNodes) {
    if (n.nodeType === 3) out += esc(n.nodeValue);
    else if (n.nodeType === 1) {
      if (skip && skip(n)) continue;
      if (n.tagName === "BR") out += "<br>";
      else if (n.tagName === "SCRIPT" || n.tagName === "STYLE") continue;
      else if (INLINE[n.tagName]) out += `<${INLINE[n.tagName]}>${rt(n, skip)}</${INLINE[n.tagName]}>`;
      else out += rt(n, skip);
    }
  }
  return out.replace(/\s+/g, " ").replace(/\s*<br>\s*/g, "<br>").trim();
}
const txt = (el) => (el ? norm(el.textContent) : "");

function table(el) {
  mark(el);
  const rows = [...el.querySelectorAll("tr")].map((tr) => [...tr.children].map((c) => rt(c)));
  const head = el.querySelector("thead tr");
  return { tabla: { cabecera: head ? [...head.children].map((c) => rt(c)) : null, filas: rows.slice(head ? 1 : 0) } };
}

function note(el) {
  mark(el);
  const tipo = [...el.classList].find((c) => /-box$/.test(c) && c !== "note-box") || "";
  const label = el.querySelector(".note-box-label");
  const body = el.querySelector(".note-box-text");
  return { nota: { tipo: tipo.replace(/-box$/, ""), etiqueta: label ? rt(label) : "", texto: body ? rt(body) : rt(el, (n) => n === label) } };
}

function list(el) {
  mark(el);
  return {
    lista: [...el.children]
      .filter((li) => li.tagName === "LI")
      .map((li) => {
        const sub = [...li.children].filter((c) => c.tagName === "UL" || c.tagName === "OL");
        const item = { t: rt(li, (n) => sub.includes(n)) };
        if (sub.length) item.sub = sub.flatMap((s) => list(s).lista);
        return item;
      }),
    ordenada: el.tagName === "OL" || undefined,
  };
}

/** Generic block content of a container, in document order. */
function blocks(el) {
  const out = [];
  for (const c of el.children) {
    if (c.matches(".map-card")) out.push({ tarjeta: card(c) });
    else if (c.tagName === "TABLE") out.push(table(c));
    else if (c.matches(".note-box")) out.push(note(c));
    else if (c.tagName === "UL" || c.tagName === "OL") out.push(list(c));
    else if (c.matches(".inner-section")) out.push({ apartado: innerSection(c) });
    else if (c.tagName === "SCRIPT" || c.tagName === "STYLE" || c.tagName === "SVG" || c.tagName === "svg") continue;
    else if (c.querySelector("table, ul, ol, .note-box, .map-card, .inner-section, p, div")) out.push(...blocks(c));
    else if (txt(c)) {
      mark(c);
      out.push({ p: rt(c), clase: c.className || undefined });
    }
  }
  return out;
}

function innerSection(el) {
  mark(el);
  const head = el.querySelector(":scope > .inner-heading");
  if (head) mark(head);
  const body = [...el.children].filter((c) => c !== head);
  const content = body.flatMap((c) => (c.matches(".inner-body") ? (mark(c), blocks(c)) : blocks(wrap(c))));
  return { titulo: head ? rt(head, (n) => n.matches && n.matches(".dot")) : "", contenido: content };
}
// blocks() walks an element's children; a lone element is wrapped so that it is visited itself.
function wrap(el) {
  return { children: [el] };
}

function card(el) {
  mark(el);
  const q = (s) => mark(el.querySelector(s));
  const tags = [...el.querySelectorAll(".card-meta .status-tag, .card-top .status-tag")].map((t) => (mark(t), { texto: txt(t), clase: [...t.classList].filter((c) => c !== "status-tag").join(" ") }));
  const counters = el.querySelector(".card-counters");
  if (counters) mark(counters);
  const body = el.querySelector(".card-body");
  if (body) mark(body);
  const refs = el.querySelector(".card-refs");
  if (refs) mark(refs);
  const toggle = el.querySelector(".card-toggle-btn");
  if (toggle) mark(toggle);
  return {
    categoria: el.dataset.cat || "",
    articulo: txt(q(".art-badge")),
    etiquetas: tags,
    titulo: rt(q(".card-title") || document.createElement("i")),
    resumen: rt(q(".card-subtitle") || document.createElement("i")),
    contadores: counters ? [...counters.children].map((c) => (mark(c), txt(c))) : [],
    cuerpo: body ? blocks(body) : [],
    referencias: refs ? [...refs.children].map((r) => (mark(r), txt(r))) : [],
    claves: el.dataset.text || "",
  };
}

function header() {
  const h = document.querySelector(".site-header, header");
  if (!h) return null;
  mark(h);
  return {
    migas: txt(h.querySelector(".header-breadcrumb")),
    titulo: rt(h.querySelector(".header-title, h1") || h),
    subtitulo: rt(h.querySelector(".header-subtitle") || document.createElement("i")),
    etiquetas: [...h.querySelectorAll(".header-tag")].map(txt),
  };
}

function esquema() {
  const stats = [...document.querySelectorAll(".stat-item")].map((s) => (mark(s), { valor: txt(s.querySelector(".stat-value")), etiqueta: txt(s.querySelector(".stat-label")) }));
  const filtros = [...document.querySelectorAll(".pill")].map((p) => (mark(p), { categoria: p.dataset.cat, texto: txt(p) }));
  const leyenda = [...document.querySelectorAll(".legend-item")].map((l) => {
    mark(l);
    const sw = l.querySelector(".legend-swatch");
    return { texto: txt(l), color: sw ? sw.getAttribute("style") : "" };
  });
  const foot = document.querySelector(".legend-copy");
  if (foot) mark(foot);
  // Chapter headings (some esquemas) sit between sections: kept in document order.
  const secciones = [...document.querySelectorAll(".map-section, .chapter-heading")].map((s) => {
    mark(s);
    if (s.matches(".chapter-heading")) return { capitulo: { numero: txt(s.querySelector(".chapter-num")), nombre: txt(s.querySelector(".chapter-name")) } };
    const head = s.querySelector(".section-heading");
    if (head) mark(head);
    const body = s.querySelector(".section-body");
    return {
      id: body ? body.id : "",
      titulo: txt(head && head.querySelector(".section-heading-text")) || txt(head),
      recuento: txt(head && head.querySelector(".section-heading-count")),
      plegada: !!(body && body.classList.contains("collapsed")),
      contenido: body ? (mark(body), blocks(body)) : [],
    };
  });
  // Controls: their text is interface, not content.
  document.querySelectorAll(".controls-bar, .legend-title, .no-results, button").forEach(mark);
  return { estadisticas: stats, filtros, leyenda, pie: foot ? rt(foot) : "", secciones };
}

/** Text nodes with content that sit outside every captured element. */
function uncaptured() {
  const out = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const t = norm(n.nodeValue);
    if (!t) continue;
    let p = n.parentElement;
    let inside = false;
    while (p && !inside) {
      if (captured.has(p) || p.tagName === "SCRIPT" || p.tagName === "STYLE") inside = true;
      p = p.parentElement;
    }
    if (!inside) out.push(t);
  }
  return out;
}

const data = { titulo: norm(document.title), cabecera: header() };
if (document.querySelector(".map-card")) {
  Object.assign(data, esquema());
  data.sinCapturar = uncaptured();
}
data.texto = norm(
  [...document.body.querySelectorAll("*")]
    .filter((e) => !["SCRIPT", "STYLE"].includes(e.tagName))
    .map((e) => [...e.childNodes].filter((n) => n.nodeType === 3).map((n) => n.nodeValue).join(" "))
    .join(" ")
);
return data;

/* Search over the whole app (laws, esquemas, guías), from data/busqueda.js — an index built in
 * development by tools/build-index.js. Every word must match; accents and case are ignored. */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;
  const KINDS = [
    ["ley", "En las leyes"],
    ["esquema", "En los esquemas"],
    ["guia", "En las guías"],
  ];
  const LIMIT = 60; // per kind: enough to scan, short enough to read

  /** Text with every query word wrapped in <mark>, escaped. */
  function highlight(text, words) {
    const folded = Neg.fold(text);
    const marks = new Array(text.length).fill(false);
    for (const w of words) for (let i = folded.indexOf(w); i >= 0; i = folded.indexOf(w, i + 1)) for (let j = i; j < i + w.length; j++) marks[j] = true;
    let out = "";
    let open = false;
    for (let i = 0; i < text.length; i++) {
      if (marks[i] !== open) {
        out += marks[i] ? "<mark>" : "</mark>";
        open = marks[i];
      }
      out += esc(text[i]);
    }
    return out + (open ? "</mark>" : "");
  }

  Neg.view("buscar", async (el, args, query) => {
    const q = (query.get("q") || "").trim();
    const input = document.querySelector('#header input[name="q"]');
    if (input) input.value = q;
    el.innerHTML = Neg.shell.head({ crumbs: [["Búsqueda"]], title: q ? `Resultados de «${q}»` : "Búsqueda" }) + Neg.message("Buscando…");
    const index = await Neg.data.load("catalogo", "busqueda");
    const words = Neg.fold(q).split(/\s+/).filter(Boolean);
    if (!words.length) {
      el.querySelector(".message").outerHTML = Neg.message("Escribe qué buscar", "Por ejemplo: «conciliación», «art. 140», «caución», «emancipación».");
      return;
    }
    const hits = index.entradas.filter((e) => {
      const hay = e.f || (e.f = Neg.fold(`${e.t} ${e.d || ""}`)); // folded once, then reused
      return words.every((w) => hay.includes(w));
    });
    let html = "";
    for (const [kind, label] of KINDS) {
      const list = hits.filter((e) => e.k === kind);
      if (!list.length) continue;
      html += `<section class="section"><div class="section-head"><h2>${label}</h2><span class="count">${list.length}${list.length > LIMIT ? `, se muestran ${LIMIT}` : ""}</span></div><ul class="results">`;
      html += list
        .slice(0, LIMIT)
        .map((e) => `<li><a href="${esc(e.u)}"><strong>${highlight(e.t, words)}</strong>${e.d ? `<span>${highlight(e.d, words)}</span>` : ""}</a><small>${esc(e.c || "")}</small></li>`)
        .join("");
      html += "</ul></section>";
    }
    el.querySelector(".message").outerHTML = html || Neg.message("Sin resultados", "Prueba con otras palabras o con menos palabras.");
  });
})();

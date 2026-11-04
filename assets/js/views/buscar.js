/* The search results page. The search itself is in core/busqueda.js. */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;
  const { KINDS, palabras, buscar, marcar, cargar } = Neg.busqueda;
  const LIMIT = 60; // per kind: enough to scan, short enough to read

  Neg.view("buscar", async (el, args, query) => {
    const q = (query.get("q") || "").trim();
    const input = document.querySelector('#header input[name="q"]');
    if (input) input.value = q;
    el.innerHTML = Neg.shell.head({ crumbs: [["Búsqueda"]], title: q ? `Resultados de «${q}»` : "Búsqueda" }) + Neg.message("Buscando…");
    const index = await cargar();
    const words = palabras(q);
    if (!words.length) {
      el.querySelector(".message").outerHTML = Neg.message("Escribe qué buscar", "Por ejemplo: «conciliación», «art. 140», «caución», «emancipación».");
      return;
    }
    const hits = buscar(index, words);
    let html = "";
    for (const [kind, label] of KINDS) {
      const list = hits.filter((e) => e.k === kind);
      if (!list.length) continue;
      html += `<section class="section"><div class="section-head"><h2>${label}</h2><span class="count">${list.length}${list.length > LIMIT ? `, se muestran ${LIMIT}` : ""}</span></div><ul class="results">`;
      html += list
        .slice(0, LIMIT)
        .map((e) => `<li><a href="${esc(e.u)}"><strong>${marcar(e.t, words)}</strong>${e.d ? `<span>${marcar(e.d, words)}</span>` : ""}</a><small>${esc(e.c || "")}</small></li>`)
        .join("");
      html += "</ul></section>";
    }
    el.querySelector(".message").outerHTML = html || Neg.message("Sin resultados", "Prueba con otras palabras o con menos palabras.");
  });
})();

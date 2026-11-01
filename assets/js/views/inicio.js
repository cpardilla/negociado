/* Home: what the app contains, from the catalogue, and the legal-text date of each law; shortcuts
 * to the most used resources and to the last ones visited in this browser. */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;

  // The most used in the Negociado (decision 6 of the ROADMAP): esquema and guía share the id.
  const MAS_USADOS = ["lec-diligencias-preliminares", "lec-division-herencia", "ljv-conciliacion"];
  const KIND = { ley: ["Ley", "t-ley"], esquema: ["Esquema", "c1"], guia: ["Guía", "c3"] };

  Neg.view("inicio", (el) => {
    const cat = Neg.catalogo;
    const tile = (href, tag, tone, title, text) =>
      `<a class="tile" href="${href}"><span class="tag ${tone}">${esc(tag)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></a>`;
    const first = (list) => (list[0] ? Neg.href(list === cat.leyes ? "ley" : list === cat.esquemas ? "esquema" : "guia", list[0].id) : "#/");
    const fechas = cat.leyes.map((l) => `${l.id} a ${Neg.fecha(l.fecha)}`).join(", ");
    const find = (kind, id) => (kind === "ley" ? cat.leyes : kind === "esquema" ? cat.esquemas : cat.guias).find((r) => r.id === id);

    const usados = MAS_USADOS.map((id) => [id, find("esquema", id), find("guia", id)]).filter(([, e, g]) => e || g);
    const usadosHtml = usados.length
      ? `<section class="section"><div class="section-head"><h2>Más usados</h2></div><ul class="shortcuts">${usados
          .map(([id, e, g]) => {
            const r = e || g;
            const links = [e && `<a class="btn" href="${Neg.href("esquema", id)}">Esquema</a>`, g && `<a class="btn" href="${Neg.href("guia", id)}">Guía</a>`].filter(Boolean).join("");
            return `<li class="shortcut"><span class="shortcut-law">${esc(r.ley)}</span><span class="shortcut-title">${esc(r.corto)}</span><span class="shortcut-links">${links}</span></li>`;
          })
          .join("")}</ul></section>`
      : "";

    const recientes = Neg.recientes
      .list()
      .map(([kind, id]) => [kind, find(kind, id)])
      .filter(([kind, r]) => KIND[kind] && r);
    const recientesHtml = recientes.length
      ? `<section class="section"><div class="section-head"><h2>Últimos visitados</h2><span class="count">en este navegador</span><button class="btn btn-text-only" data-action="clear-recent">Vaciar</button></div><ul class="shortcuts">${recientes
          .map(([kind, r]) => {
            const [label, tone] = KIND[kind];
            const title = kind === "ley" ? r.nombre : r.corto;
            return `<li class="shortcut"><a class="shortcut-link" href="${Neg.href(kind, r.id)}"><span class="tag ${tone}">${esc(label)}</span><span class="shortcut-title">${esc(title)}</span><span class="shortcut-law">${esc(kind === "ley" ? r.id : r.ley)}</span></a></li>`;
          })
          .join("")}</ul></section>`
      : "";

    el.innerHTML =
      Neg.shell.head({
        crumbs: null,
        tab: "Negociado",
        kicker: "Material de apoyo para la tramitación",
        title: "Negociado",
        sub: "Leyes completas, esquemas por artículo y guías paso a paso de la Ley de Enjuiciamiento Civil y de la Ley de la Jurisdicción Voluntaria.",
      }) +
      `<div class="tiles">
        ${tile(first(cat.leyes), `${cat.leyes.length} leyes`, "t-ley", "Leyes completas", "Índice y mapa de cada ley, con el texto literal vigente de cada artículo.")}
        ${tile(first(cat.esquemas), `${cat.esquemas.length} esquemas`, "c1", "Esquemas interactivos", "Cada artículo explicado: competencia, plazos, resoluciones, recursos y conexiones.")}
        ${tile(first(cat.guias), `${cat.guias.length} guías`, "c3", "Guías de tramitación", "El expediente paso a paso: quién actúa, qué se decide y qué plazo corre.")}
      </div>
      ${usadosHtml}${recientesHtml}
      <div class="section"><div class="notice"><span aria-hidden="true">ⓘ</span><span>Material de apoyo, no fuente oficial. Texto legal tomado del BOE (legislación consolidada)${fechas ? `: ${esc(fechas)}` : ""}. Cada recurso indica la fecha con la que se revisó.</span></div></div>`;

    const clear = el.querySelector('[data-action="clear-recent"]');
    if (clear)
      clear.addEventListener("click", () => {
        Neg.recientes.clear();
        clear.closest(".section").remove();
      });
  });
})();

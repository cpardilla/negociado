/* Home: what the app contains, from the catalogue, and the legal-text date of each law. */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;

  Neg.view("inicio", (el) => {
    const cat = Neg.catalogo;
    const tile = (href, tag, tone, title, text) =>
      `<a class="tile" href="${href}"><span class="tag ${tone}">${esc(tag)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></a>`;
    const first = (list) => (list[0] ? Neg.href(list === cat.leyes ? "ley" : list === cat.esquemas ? "esquema" : "guia", list[0].id) : "#/");
    const fechas = cat.leyes.map((l) => `${l.id} a ${Neg.fecha(l.fecha)}`).join(", ");
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
      <div class="section"><div class="notice"><span aria-hidden="true">ⓘ</span><span>Material de apoyo, no fuente oficial. Texto legal tomado del BOE (legislación consolidada)${fechas ? `: ${esc(fechas)}` : ""}. Cada recurso indica la fecha con la que se revisó.</span></div></div>`;
  });
})();

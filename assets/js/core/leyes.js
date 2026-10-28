/* Law data helpers shared by the law view and the reference popover: loading with an index of
 * where each article sits, the article's label and path, and its text (whole or one apartado). */
(function () {
  "use strict";
  const Neg = window.Neg;
  const esc = Neg.esc;

  /** Adds, once, the parent divisions of every article (law._padres) and a flat list of divisions. */
  function index(law) {
    if (law._padres) return law;
    law._padres = {};
    law._divisiones = [];
    (function walk(list, trail) {
      for (const x of list) {
        if (typeof x === "string") law._padres[x] = trail;
        else {
          x._arts = [];
          law._divisiones.push(x);
          walk(x.h, [...trail, x]);
          x._arts = x.h.flatMap((y) => (typeof y === "string" ? [y] : y._arts));
        }
      }
    })(law.estructura, []);
    return law;
  }

  /** The article's number as the BOE writes it ("778 quáter", "42 bis a)"); the key otherwise. */
  const label = (law, key) => (law.articulos[key] && law.articulos[key].n) || key;

  Neg.leyes = {
    async load(id) {
      return index(await Neg.data.load("ley", id));
    },

    label,

    /** "LJV › TÍTULO IX. De la conciliación › Artículo 140. Competencia" (for copying). */
    ruta(law, key) {
      const a = law.articulos[key];
      return [law.id, ...law._padres[key].map((d) => `${d.num}${d.t ? `. ${d.t}` : ""}`), `Artículo ${label(law, key)}.${a.r ? ` ${a.r}` : ""}`].join(" › ");
    },

    /** Paragraphs of apartado `n` (all of them when the article has no such apartado). */
    apartado(art, n) {
      if (!n) return art.p;
      const start = art.p.findIndex(([role, t]) => role === "a" && t.startsWith(`${n}. `));
      if (start < 0) return art.p;
      const end = art.p.findIndex(([role], i) => i > start && role === "a");
      return art.p.slice(start, end < 0 ? undefined : end);
    },

    /** The text as HTML, each paragraph styled by its role (apartado, sub-item, table row). */
    html(paragraphs, highlight) {
      const cls = { a: "apdo", i: "sub", p: "", t: "fila" };
      return paragraphs.map(([role, t]) => `<p${cls[role] ? ` class="${cls[role]}"` : ""}>${highlight ? highlight(t) : esc(t)}</p>`).join("");
    },

    /** Address of the article in the BOE's consolidated text. */
    boe(law, key) {
      const a = law.articulos[key];
      return `${law.boe.url}${a && a.b ? `#${a.b}` : ""}`;
    },

    /** Esquemas and guías covering an article, from the catalogue. */
    recursos(lawId, key) {
      const cat = Neg.catalogo || { esquemas: [], guias: [] };
      const covers = (r) => r.ley === lawId && r.articulos.includes(key);
      return { esquemas: cat.esquemas.filter(covers), guias: cat.guias.filter(covers) };
    },
  };
})();

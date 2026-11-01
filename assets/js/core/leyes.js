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

  // ── Articles updated from the BOE in this browser ("Actualizar contenido") ──
  // negociado.leyes.actualizado = { <law>: { <key>: { v, m, p, fecha } } }. The app's own text stays
  // in a._orig, to go back to it. An update the app's data has caught up with is dropped.
  const PREF = "leyes.actualizado";
  const updates = () => Neg.prefs.get(PREF, {}) || {};
  const forget = (a) => {
    delete a._head;
    delete a._text;
  };

  function applyUpdate(law, key, u) {
    const a = law.articulos[key];
    if (!a) return;
    if (!a._orig) a._orig = { v: a.v, m: a.m, p: a.p, c: a.c };
    Object.assign(a, { v: u.v, m: u.m === law.boe.id ? undefined : u.m, p: u.p, c: undefined, u: u.fecha });
    forget(a);
  }

  function applyUpdates(law) {
    const all = updates();
    const mine = all[law.id] || {};
    let changed = false;
    for (const [key, u] of Object.entries(mine)) {
      const a = law.articulos[key];
      const base = a && (a._orig || a);
      if (!a || (base.v === u.v && (base.m || law.boe.id) === u.m)) {
        delete mine[key]; // the app's data already carries it (or the article is gone)
        changed = true;
      } else if (a.u !== u.fecha) applyUpdate(law, key, u);
    }
    if (changed) {
      if (Object.keys(mine).length) all[law.id] = mine;
      else delete all[law.id];
      Neg.prefs.set(PREF, Object.keys(all).length ? all : null);
    }
    return law;
  }

  Neg.leyes = {
    async load(id) {
      return applyUpdates(index(await Neg.data.load("ley", id)));
    },

    /** Replaces the article's text with the BOE's version in force (this browser only). */
    actualizar(law, key, version) {
      const today = new Date().toLocaleDateString("sv-SE").replace(/-/g, "");
      const u = { v: version.vigencia, m: version.norma, p: version.parrafos, fecha: today };
      const all = updates();
      (all[law.id] = all[law.id] || {})[key] = u;
      Neg.prefs.set(PREF, all);
      applyUpdate(law, key, u);
    },

    /** Back to the app's own text. */
    restaurar(law, key) {
      const a = law.articulos[key];
      if (a && a._orig) {
        Object.assign(a, a._orig, { u: undefined });
        delete a._orig;
        forget(a);
      }
      const all = updates();
      if (all[law.id]) {
        delete all[law.id][key];
        if (!Object.keys(all[law.id]).length) delete all[law.id];
      }
      Neg.prefs.set(PREF, Object.keys(all).length ? all : null);
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
      // (an apartado numbered in words, "Ocho.", carries its number: tools/build-law.js)
      const start = art.p.findIndex(([role, t, num]) => role === "a" && (num === n || t.startsWith(`${n}. `)));
      if (start < 0) return art.p;
      const end = art.p.findIndex(([role], i) => i > start && role === "a");
      return art.p.slice(start, end < 0 ? undefined : end);
    },

    /** The text as HTML, each paragraph styled by its role (apartado, sub-item, table row). */
    html(paragraphs, highlight) {
      const cls = { a: "apdo", i: "sub", p: "", t: "fila" };
      return paragraphs.map(([role, t]) => `<p${cls[role] ? ` class="${cls[role]}"` : ""}>${highlight ? highlight(t) : esc(t)}</p>`).join("");
    },

    /** The article in the BOE's consolidated text, at the version the app quotes:
     *  act.php?id=<law>&p=<consolidation date>&tn=1#<block> (the BOE's own article links). */
    boe(law, key) {
      const a = law.articulos[key];
      return `${law.boe.url}&p=${law.boe.fecha}&tn=1${a && a.b ? `#${a.b}` : ""}`;
    },

    /** Esquemas and guías covering an article, from the catalogue. */
    recursos(lawId, key) {
      const cat = Neg.catalogo || { esquemas: [], guias: [] };
      const covers = (r) => r.ley === lawId && r.articulos.includes(key);
      return { esquemas: cat.esquemas.filter(covers), guias: cat.guias.filter(covers) };
    },
  };
})();

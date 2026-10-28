/* Data registry and loader.
 *
 * Every data file (data/catalogo.js, data/leyes/LJV.js, data/esquemas/<id>.js…) is a classic
 * script that calls Neg.data.register(record). Files are loaded on demand by inserting a
 * <script>, which works from file:// (where fetch() of local files is refused) and on Pages. */
(function () {
  "use strict";
  const Neg = window.Neg;
  const records = { catalogo: {}, ley: {}, esquema: {}, guia: {} };
  const pending = new Map(); // "tipo/id" → Promise

  const FOLDERS = { catalogo: "", ley: "leyes/", esquema: "esquemas/", guia: "guias/" };

  // Data files are resolved against the app's own folder, whatever page loaded the scripts.
  const base = (() => {
    const me = document.currentScript && document.currentScript.src;
    return me ? me.replace(/assets\/js\/core\/data\.js(\?.*)?$/, "") : "";
  })();

  /** Loads a classic script of the app once (relative to the app's folder). */
  const scripts = new Map();
  Neg.loadScript = (rel) => {
    if (!scripts.has(rel))
      scripts.set(
        rel,
        new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = base + rel;
          s.onload = resolve;
          s.onerror = () => {
            scripts.delete(rel); // allow a retry
            reject(new Error(`No se ha podido cargar ${rel}`));
          };
          document.head.appendChild(s);
        })
      );
    return scripts.get(rel);
  };

  /** Adds a stylesheet of the app once (relative to the app's folder). */
  Neg.loadStyle = (rel) => {
    if (document.querySelector(`link[data-rel="${rel}"]`)) return;
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = base + rel;
    l.dataset.rel = rel;
    document.head.appendChild(l);
  };

  Neg.data = {
    /** Called by each data file. */
    register(record) {
      if (!records[record.tipo]) throw new Error(`Tipo de datos desconocido: ${record.tipo}`);
      records[record.tipo][record.id] = record;
    },

    get(tipo, id) {
      return records[tipo][id] || null;
    },

    /** Resolves with the record, loading its file once if needed. */
    load(tipo, id) {
      if (!records[tipo]) return Promise.reject(new Error(`Tipo de datos desconocido: ${tipo}`));
      if (records[tipo][id]) return Promise.resolve(records[tipo][id]);
      const key = `${tipo}/${id}`;
      if (!pending.has(key))
        pending.set(
          key,
          Neg.loadScript(`data/${FOLDERS[tipo]}${encodeURIComponent(id)}.js`).then(
            () => records[tipo][id] || Promise.reject(new Error(`${key}: el fichero no registra sus datos`)),
            (err) => {
              pending.delete(key);
              throw err;
            }
          )
        );
      return pending.get(key);
    },
  };
})();

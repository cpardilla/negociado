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
      if (records[tipo] && records[tipo][id]) return Promise.resolve(records[tipo][id]);
      const key = `${tipo}/${id}`;
      if (pending.has(key)) return pending.get(key);
      const p = new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = `${base}data/${FOLDERS[tipo]}${encodeURIComponent(id)}.js`;
        s.onload = () => (records[tipo][id] ? resolve(records[tipo][id]) : reject(new Error(`${key}: el fichero no registra sus datos`)));
        s.onerror = () => {
          pending.delete(key); // allow a retry
          reject(new Error(`No se ha podido cargar ${key}`));
        };
        document.head.appendChild(s);
      });
      pending.set(key, p);
      return p;
    },
  };
})();

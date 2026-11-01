/* Checking an article against the BOE today: its versions, read from the BOE open-data API
 * (…/texto/bloque/<block>), and how they compare with the text the app carries. Shared by the app
 * (Neg.vigencia: "Comprobar vigencia" in the law view) and the tests (require), so both read the
 * BOE answer the same way. The request itself is made by the app, only when the button is pressed. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else (root.Neg = root.Neg || {}).vigencia = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const API = "https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/";

  const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
  const decode = (s) =>
    s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) => {
      if (e[0] === "#") return String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
      return ENTITIES[e] !== undefined ? ENTITIES[e] : m;
    });
  // As tools/boe-fetch.js reads the BOE: tags out, entities decoded, single spaces, NFC.
  const text = (html) => decode(html.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "")).replace(/[ \t\r\n]+/g, " ").trim().normalize("NFC");
  const attrs = (tag) => {
    const out = {};
    tag.replace(/(\w+)="([^"]*)"/g, (m, k, v) => (out[k] = decode(v)));
    return out;
  };

  /** The article's paragraphs in one version, without its heading ("Artículo 5. …": the first
   *  paragraph only — a quoted article inside the text carries the same class) or the BOE's notes;
   *  table rows flattened cell by cell, as the snapshots do. */
  function paragraphs(body) {
    const out = [];
    let heading = false;
    const clean = body.replace(/<blockquote>[\s\S]*?<\/blockquote>/g, "");
    const re = /<p(\s[^>]*)?>([\s\S]*?)<\/p>|<table[\s\S]*?<\/table>/g;
    let m;
    while ((m = re.exec(clean))) {
      if (m[2] !== undefined) {
        const cls = attrs(m[1] || "").class || "";
        const t = text(m[2]);
        if (t && !(cls === "articulo" && !out.length && !heading)) out.push([cls, t]);
        else if (cls === "articulo") heading = true;
      } else {
        const rows = m[0].match(/<tr[\s\S]*?<\/tr>/g) || [];
        for (const row of rows) {
          const cells = (row.match(/<t[dh][^>]*>[\s\S]*?<\/t[dh]>/g) || []).map((c) => text(c.replace(/^<t[dh][^>]*>|<\/t[dh]>$/g, "")));
          if (cells.some(Boolean)) out.push(["tabla", cells.join(" | ")]);
        }
      }
    }
    return out;
  }

  // Role of each paragraph, as the app reads them (one definition, also used by tools/build-law.js):
  //   a  starts an apartado ("1. …")        i  a sub-item ("a) …", "1.º …", "Primero. …")
  //   p  other paragraph                    t  a table row
  const ORDINAL = /^(?:[a-zñ]\)|\d+\.?\s*[ºª°]|(?:primer[oa]|segund[oa]|tercer[oa]|cuart[oa]|quint[oa]|sext[oa]|s[eé]ptim[oa]|octav[oa]|noven[oa]|d[eé]cim[oa]|und[eé]cim[oa]|duod[eé]cim[oa])[.:])\s/i;
  function role([cls, text]) {
    if (cls === "tabla") return ["t", text];
    if (/^\d+\.\s/.test(text) && !/^\d+\.\s*[ºª°]/.test(text)) return ["a", text];
    if (ORDINAL.test(text)) return ["i", text];
    return ["p", text];
  }

  /** Every version of the block, as the BOE lists them; parrafos as the app keeps them ([role, text]). */
  function versions(xml) {
    const out = [];
    const re = /<version([^>]*)>([\s\S]*?)<\/version>/g;
    let m;
    while ((m = re.exec(xml))) {
      const a = attrs(m[1]);
      out.push({ norma: a.id_norma, publicada: a.fecha_publicacion || "", vigencia: a.fecha_vigencia || "", parrafos: paragraphs(m[2]).map(role) });
    }
    return out;
  }

  /** The version in force today: of those already in force, the one published last (the rule the
   *  app's corrections follow when the BOE lists versions out of order — ROADMAP, decision 17). */
  function actual(list, today) {
    let best = null;
    list.forEach((v, i) => {
      if (!v.vigencia || v.vigencia > today) return;
      const key = `${v.publicada}|${v.vigencia}|${String(i).padStart(4, "0")}`;
      if (!best || key > best.key) best = { key, v };
    });
    return best && best.v;
  }

  const same = (a, b) => a.length === b.length && a.every((t, i) => t === b[i]);
  const texts = (ps) => ps.map((p) => String(p[1]).normalize("NFC"));

  /** Compares the BOE's answer with the article the app carries.
   *  art: { v: vigencia, m: norma (absent when it is the law's own), p: [[role, text]], c: corrected }
   *  → { estado: "igual" | "posterior" | "texto", actual, pendiente } */
  function comparar(xml, art, lawBoeId, today) {
    const list = versions(xml);
    if (!list.length) throw new Error("El BOE no devuelve versiones de este artículo");
    const now = actual(list, today);
    if (!now) throw new Error("El BOE no da ninguna versión vigente de este artículo");
    const future = list.filter((v) => v.vigencia > today).pop() || null;
    const mine = { vigencia: art.v, norma: art.m || lawBoeId };
    let estado = "igual";
    if (now.vigencia !== mine.vigencia || now.norma !== mine.norma) estado = "posterior";
    // Same version, different words: the BOE retouched the text. Not looked at in a corrected
    // article, whose text carries the renaming of the LO 7/2015 that the BOE did not apply.
    else if (!art.c && !same(texts(now.parrafos), texts(art.p))) estado = "texto";
    return { estado, actual: now, pendiente: future };
  }

  const url = (lawBoeId, block) => `${API}${encodeURIComponent(lawBoeId)}/texto/bloque/${encodeURIComponent(block)}`;

  return { versions, actual, comparar, url, paragraphs, role };
});

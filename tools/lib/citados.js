// Every article that each esquema and guía cites, and where: the card (esquema) or the step (guía)
// whose text cites it. Shared by tools/build-index.js (data/citados.js: "Lo citan" in the law view)
// and tools/boe-diff.js (which resources a BOE change touches). Citations are read with the app's
// own parser (assets/js/core/citas.js), so this index cites exactly what the app links.

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const citas = require("../../assets/js/core/citas");
const boe = require("./boe");

const ROOT = path.join(__dirname, "..", "..");
const LEYES = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "leyes.json"), "utf8"));
const ALIAS = Object.fromEntries(LEYES.flatMap((l) => [[l.clave, l.clave], ...l.alias.map((a) => [a, l.clave])]));

const plain = (h) => String(h).replace(/<br>/g, " ").replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/\s+/g, " ");

function strings(v, out = []) {
  if (typeof v === "string") out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) if (k !== "revision" && k !== "origen" && k !== "claves") strings(x, out);
  return out;
}

function read(folder) {
  const dir = path.join(ROOT, "data", folder);
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".js"))
    .map((f) => {
      let rec;
      vm.runInNewContext(fs.readFileSync(path.join(dir, f), "utf8"), { Neg: { data: { register: (r) => (rec = r) } } });
      return rec;
    });
}

/** Article keys a text cites, as [law, key] (ranges expanded in the law's own order; only
 *  articles the law has, when its snapshot is there). */
function cited(text, defaultLaw) {
  const out = [];
  for (const c of citas.find(plain(text), { defaultLaw, alias: ALIAS })) {
    if (!c.law) continue;
    const law = boe.load(c.law);
    for (const r of c.refs) {
      const keys = r.hasta && law ? boe.range(law, r.art, r.hasta) || [r.art, r.hasta] : [r.art];
      for (const k of keys) {
        const key = k && (citas.articleKey(k) || k);
        // A number the law does not have is a citation of another law left implicit
        // ("(art. 1316)" in a paragraph on the Civil Code): not an article of this one.
        if (key && (!law || law.articulos.has(key))) out.push([c.law, key]);
      }
    }
  }
  return out;
}

/** The card's own article ("Artículo 139" → "139"), for the link to the card. */
function cardKey(card, ley) {
  const found = citas.find(plain(card.articulo).replace(/^Art[íi]culos?/i, "art."), { defaultLaw: ley, alias: ALIAS }).filter((f) => f.law === ley);
  return found.length ? found[0].refs[0].art : "";
}

/** law → article key → [{ k: "esquema" | "guia", id, loc }] (loc: card article or step id; "" for
 *  text outside cards and steps). One entry per resource and article: the first place citing it. */
function citados() {
  const index = {};
  const add = (law, art, k, id, loc) => {
    const list = ((index[law] = index[law] || {})[art] = index[law][art] || []);
    if (!list.some((x) => x.k === k && x.id === id)) list.push({ k, id, loc });
  };
  for (const r of read("esquemas")) {
    const inCards = new Set();
    (function walk(v) {
      if (Array.isArray(v)) return v.forEach(walk);
      if (!v || typeof v !== "object") return;
      if (v.tarjeta) {
        const loc = cardKey(v.tarjeta, r.ley);
        for (const s of strings(v.tarjeta)) {
          inCards.add(s);
          for (const [law, art] of cited(s, r.ley)) add(law, art, "esquema", r.id, loc);
        }
        return;
      }
      Object.values(v).forEach(walk);
    })(r.secciones);
    for (const s of strings({ cabecera: r.cabecera, secciones: r.secciones, pie: r.pie }))
      if (!inCards.has(s)) for (const [law, art] of cited(s, r.ley)) add(law, art, "esquema", r.id, "");
  }
  for (const r of read("guias")) {
    for (const [id, p] of Object.entries(r.pasos)) for (const s of strings(p)) for (const [law, art] of cited(s, r.ley)) add(law, art, "guia", r.id, id);
    for (const s of strings({ pie: r.pie, titulo: r.titulo })) for (const [law, art] of cited(s, r.ley)) add(law, art, "guia", r.id, "");
  }
  return index;
}

module.exports = { citados, read };

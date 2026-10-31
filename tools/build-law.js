#!/usr/bin/env node
// Builds the app's law data from the BOE snapshots: data/leyes/<CLAVE>.js.
//
// Usage: node tools/build-law.js [CLAVE ...]   (default: the laws marked "completa" in tools/leyes.json)
//        node tools/build-law.js --citadas    (the other laws: only the articles the content cites)
//
// The articulado only (owner's decision: no disposiciones nor preámbulo for now; `--disposiciones`
// is the switch kept for the future). Every paragraph gets its role once, here:
//   a  starts an apartado ("1. …")        i  a sub-item ("a) …", "1.º …", "Primero. …")
//   p  other paragraph                    t  a table row
// so the law view, the mind map and the reference popover all read the same structure.

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { load } = require("./lib/boe");
const citas = require("../assets/js/core/citas");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "data", "leyes");
const LEYES = JSON.parse(fs.readFileSync(path.join(__dirname, "leyes.json"), "utf8"));

const ORDINAL = /^(?:[a-zñ]\)|\d+\.?\s*[ºª°]|(?:primer[oa]|segund[oa]|tercer[oa]|cuart[oa]|quint[oa]|sext[oa]|s[eé]ptim[oa]|octav[oa]|noven[oa]|d[eé]cim[oa]|und[eé]cim[oa]|duod[eé]cim[oa])[.:])\s/i;

/** Paragraph → [role, text]. */
function role([cls, text]) {
  if (cls === "tabla") return ["t", text];
  if (/^\d+\.\s/.test(text) && !/^\d+\.\s*[ºª°]/.test(text)) return ["a", text];
  if (ORDINAL.test(text)) return ["i", text];
  return ["p", text];
}

/** One article as the app reads it. */
function article(law, key) {
  const a = law.articulos.get(key);
  return {
    ...(a.numero !== key ? { n: a.numero } : {}), // number as the BOE writes it, when not the key
    r: a.rubrica,
    b: a.bloque, // BOE anchor: …act.php?id=…&p=…&tn=1#<b>
    v: a.vigencia,
    ...(a.norma && a.norma !== law.id ? { m: a.norma } : {}),
    ...(a.sinContenido ? { x: 1 } : {}),
    ...(a.correccion ? { c: a.correccion.motivo } : {}), // the snapshot was corrected (sources/boe/correcciones.json)
    p: a.parrafos.slice(1).map(role),
  };
}

const head = (meta, law) => ({
  tipo: "ley",
  id: meta.clave,
  nombre: meta.nombre || law.titulo.replace(/\.$/, ""),
  titulo: law.titulo.replace(/\.$/, ""),
  boe: { id: law.id, fecha: law.fecha, url: `https://www.boe.es/buscar/act.php?id=${law.id}` },
});

function write(clave, record) {
  fs.mkdirSync(OUT, { recursive: true });
  const file = path.join(OUT, `${clave}.js`);
  fs.writeFileSync(file, `/* Generado por tools/build-law.js desde sources/boe/${clave}.json (BOE ${record.boe.id}, consolidado a ${record.boe.fecha}). No editar. */\nNeg.data.register(${JSON.stringify(record)});\n`);
  return file;
}

function build(clave) {
  const meta = LEYES.find((l) => l.clave === clave);
  const law = load(clave);
  if (!meta || !law) throw new Error(`${clave}: sin instantánea en sources/boe/`);

  // Structure: nested divisions, each listing its sub-divisions and its own articles, in order.
  // Walk the BOE blocks in order; divisions with no article (e.g. a "Disposiciones adicionales"
  // heading) are left out.
  const LEVEL = { libro: 1, titulo: 2, capitulo: 3, seccion: 4 };
  const root = { h: [] };
  const stack = [{ nivel: 0, node: root }];
  const order = new Set(law.orden);
  const divByBlock = new Map(law.divisiones.filter((x) => x.articulos.length).map((x) => [x.bloque, x]));
  const artByBlock = new Map([...law.articulos.values()].map((a) => [a.bloque, a.key]));
  const snap = JSON.parse(fs.readFileSync(path.join(ROOT, "sources", "boe", `${clave}.json`), "utf8"));
  for (const b of snap.bloques) {
    const div = divByBlock.get(b.id);
    if (div) {
      const lvl = LEVEL[div.nivel];
      const node = { n: div.nivel, num: div.numero, t: div.titulo, h: [] };
      while (stack[stack.length - 1].nivel >= lvl) stack.pop();
      stack[stack.length - 1].node.h.push(node);
      stack.push({ nivel: lvl, node });
    } else if (artByBlock.has(b.id) && order.has(artByBlock.get(b.id))) {
      stack[stack.length - 1].node.h.push(artByBlock.get(b.id));
    }
  }

  const articulos = {};
  for (const key of law.orden) articulos[key] = article(law, key);
  const file = write(clave, { ...head(meta, law), estructura: root.h, orden: law.orden, articulos });
  // Every article must sit somewhere in the structure, exactly once.
  const seen = [];
  (function walk(list) {
    for (const x of list) typeof x === "string" ? seen.push(x) : walk(x.h);
  })(root.h);
  const placed = new Set(seen).size;
  if (seen.length !== placed) throw new Error(`${clave}: artículos repetidos en la estructura`);
  console.log(`${clave}: ${law.orden.length} artículos (${placed} en la estructura), ${law.divisiones.length} divisiones → ${path.relative(ROOT, file)} (${(fs.statSync(file).size / 1024).toFixed(0)} KB)`);
  if (placed !== law.orden.length) throw new Error(`${clave}: ${law.orden.length - placed} artículos fuera de la estructura`);
}

// ── The other laws: only the articles the app cites ─────────────────────────
// For the live references to show their text (and link straight to the article in the BOE), each
// law the content cites gets a file with just the cited articles: those named in the esquemas, the
// guías and the text of the complete laws. Built after the content (run again when it changes).

function readData(folder) {
  const dir = path.join(ROOT, "data", folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".js"))
    .map((f) => {
      let rec;
      vm.runInNewContext(fs.readFileSync(path.join(dir, f), "utf8"), { Neg: { data: { register: (r) => (rec = r) } } });
      return rec;
    });
}
const plain = (h) => String(h).replace(/<br>/g, " ").replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
function strings(v, out = []) {
  if (typeof v === "string") out.push(plain(v));
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === "object") Object.values(v).forEach((x) => strings(x, out));
  return out;
}

function buildCited() {
  const alias = Object.fromEntries(LEYES.flatMap((l) => [[l.clave, l.clave], ...l.alias.map((a) => [a, l.clave])]));
  const cited = new Map(); // clave → Set of keys
  const note = (law, key) => key && (cited.get(law) || cited.set(law, new Set()).get(law)).add(key);
  const scan = (text, defaultLaw) => {
    for (const c of citas.find(text, { defaultLaw, alias })) for (const r of c.refs) [r.art, r.hasta].forEach((k) => c.law && note(c.law, k));
  };
  for (const rec of [...readData("esquemas"), ...readData("guias")]) strings(rec).forEach((t) => scan(t, rec.ley));
  for (const l of LEYES.filter((x) => x.completa)) {
    const law = load(l.clave);
    for (const key of law.orden) law.articulos.get(key).parrafos.forEach(([, t]) => scan(t, l.clave));
  }
  for (const meta of LEYES.filter((l) => !l.completa)) {
    const law = load(meta.clave);
    const keys = law.orden.filter((k) => cited.has(meta.clave) && cited.get(meta.clave).has(k));
    const file = write(meta.clave, { ...head(meta, law), parcial: true, estructura: [], orden: keys, articulos: Object.fromEntries(keys.map((k) => [k, article(law, k)])) });
    const asked = cited.has(meta.clave) ? cited.get(meta.clave).size : 0;
    console.log(`${meta.clave.padEnd(8)} ${keys.length} artículos citados${asked > keys.length ? ` (${asked - keys.length} citas a artículos que no existen: las señala el comprobador)` : ""} → ${path.relative(ROOT, file)} (${(fs.statSync(file).size / 1024).toFixed(0)} KB)`);
  }
}

const args = process.argv.slice(2);
if (args.includes("--citadas")) buildCited();
else {
  const wanted = args.filter((a) => !a.startsWith("--"));
  for (const clave of wanted.length ? wanted : LEYES.filter((l) => l.completa).map((l) => l.clave)) build(clave);
}

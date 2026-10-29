#!/usr/bin/env node
// Inventory of the current (pre-redesign) app: extracts the content of every
// resource into sources/actual/<id>.json, plus sources/actual/catalogo.json.
// It is the faithful record the migration and the content checks start from.
//
// Historical: the old HTML files were removed in phase 3 · 2. To run it again, check out the tag
// baseline-2026-10-28 (where they are) — sources/actual/ is the record it produced.
//
// Usage: node tools/extract-current.js [id ...]   (no arguments = everything)
//
// Ids: I-LEC, I-LJV (índices) · L-LEC, L-LJV (legislación completa) ·
//      E01–E28 (esquemas) · G01–G25 (guías), in the order of the folders.
// Esquemas and page headers are read from the rendered page (tools/extract/page.js
// in a headless browser); script data (guías, índices, markmap) from the source.

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { run } = require("./run");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "sources", "actual");
const SECTIONS = [
  { dir: "00 - Indices", kind: "indice", id: (f) => "I-" + (/LEC/.test(f) ? "LEC" : "LJV") },
  { dir: "01 - Legislación completa interactiva", kind: "legislacion", id: (f) => "L-" + (/Enjuiciamiento/.test(f) ? "LEC" : "LJV") },
  { dir: "02 - Esquemas interactivos", kind: "esquema", prefix: "E" },
  { dir: "03 - Guías de tramitación", kind: "guia", prefix: "G" },
];

function listHtml(dir) {
  const out = [];
  (function walk(d) {
    for (const f of fs.readdirSync(d).sort((a, b) => a.localeCompare(b, "es"))) {
      const p = path.join(d, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (f.endsWith(".html")) out.push(p);
    }
  })(path.join(ROOT, dir));
  return out;
}

function catalog() {
  const items = [];
  for (const s of SECTIONS) {
    listHtml(s.dir).forEach((file, i) => {
      const rel = path.relative(ROOT, file).replace(/\\/g, "/");
      items.push({ id: s.id ? s.id(rel) : s.prefix + String(i + 1).padStart(2, "0"), tipo: s.kind, ruta: rel });
    });
  }
  return items;
}

// ── Script literals ────────────────────────────────────────────────────────

/** End index (exclusive) of the expression starting at `i`: the first `;` (or
 *  newline after a complete expression) at bracket depth 0, outside strings and comments. */
function expressionEnd(src, i) {
  const begin = i;
  let depth = 0;
  let quote = null;
  for (; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      if (c === "\\") i++;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") quote = c;
    else if (c === "/" && src[i + 1] === "/") i = src.indexOf("\n", i) - 1;
    else if (c === "/" && src[i + 1] === "*") i = src.indexOf("*/", i) + 1;
    else if ("([{".includes(c)) depth++;
    else if (")]}".includes(c)) depth--;
    else if (depth === 0 && (c === ";" || c === ",")) return i;
    else if (depth === 0 && c === "\n" && !/^\s*[-+*/.?:|&]/.test(src.slice(i + 1, i + 40)) && /\S/.test(src.slice(begin, i))) return i;
    if (depth < 0) return i;
  }
  return i;
}

/** Index just past the bracket that closes the one at `open`. */
function closing(src, open) {
  let depth = 0;
  let quote = null;
  for (let i = open; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      if (c === "\\") i++;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") quote = c;
    else if ("([{".includes(c)) depth++;
    else if (")]}".includes(c) && --depth === 0) return i + 1;
  }
  return src.length;
}

/** Evaluates the initialiser of `const|let|var NAME = …` when it is plain data. */
function literal(src, name) {
  const m = new RegExp(`(?:const|let|var)\\s+${name}\\s*=\\s*`).exec(src);
  if (!m) return undefined;
  const start = m.index + m[0].length;
  const code = src.slice(start, expressionEnd(src, start));
  try {
    const value = vm.runInNewContext(`(${code})`, {}, { timeout: 2000 });
    return JSON.parse(JSON.stringify(value)); // plain data only (drops functions)
  } catch {
    return undefined;
  }
}

/** Every UPPERCASE top-level-looking constant whose value is plain data. */
function dataConstants(src) {
  const out = {};
  for (const m of src.matchAll(/(?:const|let|var)\s+([A-Z][A-Z0-9_]+)\s*=/g)) {
    if (m[1] in out) continue;
    const v = literal(src, m[1]);
    if (v !== undefined && v !== null && (typeof v === "string" ? v.length : Object.keys(v).length)) out[m[1]] = v;
  }
  return out;
}

/** The object literal that maps actor codes to labels, wherever it is declared. */
function actorLabels(src, codes) {
  let best = null;
  let bestScore = 0;
  for (const m of src.matchAll(/(?:[=(:,]|return)\s*\{/g)) {
    const open = m.index + m[0].length - 1;
    const end = closing(src, open);
    if (end - open > 6000) continue;
    let v;
    try {
      v = vm.runInNewContext(`(${src.slice(open, end)})`, {}, { timeout: 500 });
    } catch {
      continue;
    }
    if (!v || typeof v !== "object" || Array.isArray(v)) continue;
    const label = (x) => (typeof x === "string" ? x : x && typeof x === "object" ? Object.values(x).find((y) => typeof y === "string") : null);
    const hits = codes.filter((c) => label(v[c]));
    if (hits.length > bestScore) {
      bestScore = hits.length;
      best = Object.fromEntries(codes.filter((c) => label(v[c])).map((c) => [c, label(v[c])]));
    }
  }
  best = best || {};
  // Labels written as code: `if (ac === "laj") return "LAJ"; … return "LAJ / Juez";` (or ternaries).
  for (const c of codes) {
    if (best[c]) continue;
    const m =
      new RegExp(`===\\s*["']${c}["']\\s*\\)?\\s*(?:return|\\?)\\s*["']([^"']+)["']`).exec(src) ||
      new RegExp(`case\\s*["']${c}["']\\s*:\\s*return\\s*["']([^"']+)["']`).exec(src);
    if (m) best[c] = m[1];
  }
  const missing = codes.filter((c) => !best[c]);
  if (missing.length === 1) {
    // The fall-through after the if-chain or ternary chain (`return "…"` / `: "…";`) labels the one code left.
    const chain = new RegExp(`===\\s*["']${codes.find((c) => best[c])}["'][\\s\\S]{0,400}?(?:\\n\\s*return\\s*|:\\s*)["']([^"']+)["']\\s*;`).exec(src);
    if (chain) best[missing[0]] = chain[1];
  }
  return { etiquetas: best, sinEtiqueta: codes.filter((c) => !best[c]) };
}

function guia(src) {
  const datos = dataConstants(src);
  const name = "STEPS" in datos ? "STEPS" : "S";
  const pasos = name === "S" ? literal(src, "S") : datos.STEPS;
  delete datos[name];
  const codes = [...new Set(Object.values(pasos || {}).map((p) => p.ac).filter(Boolean))].sort();
  const start = (src.match(/let\s+cur\w*\s*=\s*["'](\w+)["']/) || [])[1] || (pasos && pasos.inicio ? "inicio" : null);
  return { inicio: start, actores: actorLabels(src, codes), pasos, otrosDatos: datos };
}

function legislacion(src) {
  const marker = "})(()=>window.markmap,null,";
  const i = src.lastIndexOf(marker);
  const [root, opciones] = JSON.parse("[" + src.slice(i + marker.length, src.lastIndexOf(")</script>")) + "]");
  const tags = {};
  let nodos = 0;
  (function walk(n) {
    nodos++;
    const t = (n.payload && n.payload.tag) || "?";
    tags[t] = (tags[t] || 0) + 1;
    (n.children || []).forEach(walk);
  })(root);
  // The law text itself is regenerated from the BOE (phase 2): only its shape is recorded.
  return { opciones, nodos, etiquetas: tags };
}

// ── Main ───────────────────────────────────────────────────────────────────

(async () => {
  const items = catalog();
  const wanted = process.argv.slice(2);
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, "catalogo.json"), JSON.stringify(items, null, 1) + "\n");
  let problems = 0;
  for (const item of items) {
    if (wanted.length && !wanted.includes(item.id)) continue;
    const src = fs.readFileSync(path.join(ROOT, item.ruta), "utf8");
    const record = { ...item };
    if (item.tipo !== "legislacion") {
      // Over http, as GitHub Pages serves it: several current paths exceed Windows' 260-character
      // limit and the browser cannot open them from file://.
      const report = await run({ page: item.ruta, script: path.join(__dirname, "extract", "page.js"), browser: "edge", http: true, wait: 300, arg: [] });
      // The missing favicon.ico (404) is not a fault of the page's content.
      const errors = [...report.exceptions, ...report.consoleErrors.filter((e) => !/favicon\.ico/.test(e))];
      if (errors.length) record.erroresPagina = errors;
      Object.assign(record, report.result || {});
    }
    if (item.tipo === "indice") record.indice = literal(src, "indice");
    if (item.tipo === "guia") Object.assign(record, guia(src));
    if (item.tipo === "legislacion") Object.assign(record, { titulo: (src.match(/<title>([^<]*)/) || [])[1] }, legislacion(src));

    const issues = [];
    if (record.erroresPagina) issues.push(`${record.erroresPagina.length} errores en la página`);
    if (record.sinCapturar && record.sinCapturar.length) issues.push(`${record.sinCapturar.length} textos sin capturar`);
    if (item.tipo === "guia" && !record.pasos) issues.push("sin grafo de pasos");
    if (item.tipo === "guia" && record.actores.sinEtiqueta.length) issues.push(`actores sin etiqueta: ${record.actores.sinEtiqueta.join(", ")}`);
    if (item.tipo === "indice" && !record.indice) issues.push("sin datos de índice");
    problems += issues.length;

    const size =
      item.tipo === "esquema" ? `${record.secciones.filter((s) => !s.capitulo).length} secciones, ${record.secciones.flatMap((s) => s.contenido || []).filter((b) => b.tarjeta).length} tarjetas`
      : item.tipo === "guia" ? `${Object.keys(record.pasos || {}).length} pasos, inicio «${record.inicio}»`
      : item.tipo === "indice" ? `${JSON.stringify(record.indice || []).match(/"texto"/g).length} entradas`
      : `${record.nodos} nodos`;
    console.log(`${item.id.padEnd(6)} ${size}${issues.length ? "  ⚠ " + issues.join("; ") : ""}`);
    fs.writeFileSync(path.join(OUT, `${item.id}.json`), JSON.stringify(record, null, 1) + "\n");
  }
  console.log(problems ? `\n${problems} avisos` : "\nSin avisos");
})();

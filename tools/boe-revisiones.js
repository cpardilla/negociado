#!/usr/bin/env node
// Looks for BOE consolidation errors in the version history of each law in tools/leyes.json.
//
// Usage: node tools/boe-revisiones.js [CLAVE ...] [--out=fichero.md]   (no arguments = every law)
//
// The snapshot (tools/boe-fetch.js) keeps only the latest version of each block, so an error
// in that version goes unnoticed. Known case: art. 781 LEC, whose version of 1-10-2015 (LO 7/2015,
// which only renamed «Secretario judicial») copies the text prior to Ley 26/2015. Two checks:
//   1. Terminology-only amendments (LO 7/2015) whose text differs from the previous version
//      in more than that renaming.
//   2. Reversions: a version that matches an older one but not the version right before it.
// Each finding is a candidate that needs human reading; nothing is corrected automatically.

"use strict";
const fs = require("fs");
const path = require("path");

const API = "https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/";
const LO_7_2015 = "BOE-A-2015-8167";

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
const decode = (s) => s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) =>
  e[0] === "#" ? String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : ENTITIES[e] ?? m);
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/(\w+)="([^"]*)"/g)].map((m) => [m[1], decode(m[2])]));

// Text of a version without the editorial notes (blockquote) that the BOE appends to each one.
const body = (html) => decode(html.replace(/<blockquote>[\s\S]*?<\/blockquote>/g, " ").replace(/<[^>]+>/g, " "))
  .replace(/\s+/g, " ").trim().normalize("NFC");

// Undo the LO 7/2015 renaming so that only real changes remain.
const RENAMES = [
  [/secretari[oa]s? judicial(es)?/giu, "LAJ"],
  [/letrad[oa]s? de la administración de justicia/giu, "LAJ"],
  [/secretaría judicial/giu, "LAJ"],
  [/\b(el|la|los|las|al|del) LAJ/giu, "_ LAJ"],
];
const plain = (s) => RENAMES.reduce((t, [re, to]) => t.replace(re, to), s).replace(/\s+([,.;:])/g, "$1").replace(/\s+/g, " ");

// Word-level diff (LCS): the fragments removed and added, enough to read the finding.
function diff(a, b) {
  const wa = a.split(" "), wb = b.split(" ");
  const n = wa.length, m = wb.length;
  const L = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = wa[i] === wb[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const del = [], add = [];
  let i = 0, j = 0, cd = [], ca = [];
  const flush = () => { if (cd.length) del.push(cd.join(" ")); if (ca.length) add.push(ca.join(" ")); cd = []; ca = []; };
  while (i < n || j < m) {
    if (i < n && j < m && wa[i] === wb[j]) { flush(); i++; j++; }
    else if (j < m && (i >= n || L[i][j + 1] >= L[i + 1][j])) ca.push(wb[j++]);
    else cd.push(wa[i++]);
  }
  flush();
  const short = (xs) => { const s = xs.map((x) => "«" + x + "»").join(" · "); return s.length > 300 ? s.slice(0, 300) + "…" : s; };
  return { antes: short(del), ahora: short(add) };
}

async function get(url) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { headers: { Accept: "application/xml" } });
      if (!res.ok) throw new Error(`HTTP ${res.status} en ${url}`);
      return await res.text();
    } catch (err) {
      if (attempt >= 4) throw err;
      await new Promise((r) => setTimeout(r, 2000 * 2 ** (attempt - 1)));
    }
  }
}

function scan(clave, xml) {
  const found = [];
  for (const b of xml.matchAll(/<bloque([^>]*)>([\s\S]*?)<\/bloque>/g)) {
    const { id, titulo } = attrs(b[1]);
    const vs = [...b[2].matchAll(/<version([^>]*)>([\s\S]*?)<\/version>/g)].map((v) => ({ ...attrs(v[1]), t: body(v[2]) }));
    // The BOE builds each version on the text published before it, but lists versions by entry
    // into force: when a law published later enters into force earlier (Ley 42/2015 after
    // LO 7/2015; Ley 26/2015, art. 781 LEC), the last version listed is not the complete one.
    // The complete one is the version in force published last.
    const last = vs[vs.length - 1];
    const today = new Date().toLocaleDateString("sv-SE").replace(/-/g, "");
    const complete = vs.filter((v) => v.fecha_vigencia <= today).reduce((a, v) => (v.fecha_publicacion >= a.fecha_publicacion ? v : a), vs[0] || {});
    if (last && complete !== last && last.fecha_vigencia <= today && plain(complete.t) !== plain(last.t))
      found.push({ clave, id, titulo: titulo || id, version: last.fecha_vigencia, norma: last.id_norma, ultima: true, fuerte: true, desorden: true,
        tipo: `desorden: la versión publicada en último lugar es la de ${complete.fecha_vigencia} (${complete.id_norma})`, ...diff(plain(last.t), plain(complete.t)) });
    for (let k = 1; k < vs.length; k++) {
      const prev = vs[k - 1], cur = vs[k];
      const where = { clave, id, titulo: titulo || id, version: cur.fecha_vigencia, norma: cur.id_norma, anterior: `${prev.fecha_vigencia} (${prev.id_norma})`, ultima: k === vs.length - 1 };
      if (plain(cur.t) === plain(prev.t)) continue;
      const older = vs.slice(0, k - 1).findIndex((o) => plain(o.t) === plain(cur.t));
      if (older >= 0) found.push({ ...where, fuerte: true, tipo: `vuelve a la versión de ${vs[older].fecha_vigencia} (${vs[older].id_norma})`, ...diff(plain(prev.t), plain(cur.t)) });
      else if (cur.id_norma === LO_7_2015) found.push({ ...where, fuerte: false, tipo: "LO 7/2015 con cambios de fondo", ...diff(plain(prev.t), plain(cur.t)) });
    }
  }
  return found;
}

(async () => {
  const args = process.argv.slice(2);
  const out = (args.find((a) => a.startsWith("--out=")) || "").slice(6);
  const wanted = args.filter((a) => !a.startsWith("--")).map((s) => s.toUpperCase());
  const leyes = JSON.parse(fs.readFileSync(path.join(__dirname, "leyes.json"), "utf8"));
  const all = [];
  for (const ley of leyes) {
    if (wanted.length && !wanted.includes(ley.clave.toUpperCase())) continue;
    try {
      const f = scan(ley.clave, await get(`${API}${ley.id}/texto`));
      console.log(`${ley.clave.padEnd(8)} ${f.length} candidatos · ${f.filter((x) => x.desorden).length} en desorden · ${f.filter((x) => x.fuerte && !x.desorden).length} reversiones (${f.filter((x) => x.fuerte && !x.desorden && x.ultima).length} en la versión vigente)`);
      all.push(...f);
    } catch (err) {
      console.error(`${ley.clave}: ${err.message}`);
      process.exitCode = 1;
    }
  }
  const lines = [`# Candidatos a errores de consolidación del BOE`, ``, `Generado por \`tools/boe-revisiones.js\` el ${new Date().toLocaleDateString("es-ES")}. Cada fila necesita lectura humana.`, ``,
    `| Ley | Bloque | Versión | Norma | Vigente | Tipo | Quita | Añade |`, `|---|---|---|---|---|---|---|---|`];
  all.sort((x, y) => (y.fuerte - x.fuerte) || (y.ultima - x.ultima));
  const cell = (s) => String(s).replace(/\|/g, "\\|");
  for (const f of all) lines.push(`| ${f.clave} | ${cell(f.titulo)} | ${f.version} | ${f.norma} | ${f.ultima ? "**sí**" : "no"} | ${cell(f.tipo)} | ${cell(f.antes)} | ${cell(f.ahora)} |`);
  if (out) fs.writeFileSync(out, lines.join("\n") + "\n");
  else console.log(lines.join("\n"));
})();

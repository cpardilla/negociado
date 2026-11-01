#!/usr/bin/env node
// Compares each law as the BOE gives it today with its snapshot in sources/boe/, and lists what
// changed since the snapshot's date: articles with a new version, versions published but not yet
// in force, blocks added or removed — and, for each, the esquemas and guías that cite it. That
// list is the work to do before updating the snapshots (tools/boe-fetch.js) and the content.
//
// Usage: node tools/boe-diff.js [CLAVE ...] [--desde=<folder>] [--out=<file.md>]
//   (no CLAVE)      every law in tools/leyes.json
//   --desde=dir     compare with the snapshots in that folder instead of downloading (offline, tests)
//   --out=file.md   also write the report as Markdown (e.g. docs/revision/boe-diff-<fecha>.md)
//
// Nothing in sources/ or data/ is changed. Development only.

"use strict";
const fs = require("fs");
const path = require("path");
const boe = require("./lib/boe");

const ROOT = path.join(__dirname, "..");
const LEYES = JSON.parse(fs.readFileSync(path.join(__dirname, "leyes.json"), "utf8"));

/** What changed in one law, block by block. */
function diff(oldSnap, newSnap) {
  const before = new Map(oldSnap.bloques.map((b) => [b.id, b]));
  const after = new Map(newSnap.bloques.map((b) => [b.id, b]));
  // Accents written decomposed (NFD) in older snapshots are the same text: compared in NFC.
  const text = (b) => JSON.stringify(b.parrafos || []).normalize("NFC");
  const cambios = [];
  for (const [id, n] of after) {
    const o = before.get(id);
    if (!o) {
      cambios.push({ bloque: id, tipo: "nuevo", titulo: n.titulo, ahora: n.vigencia, norma: n.norma });
      continue;
    }
    if (o.vigencia !== n.vigencia || o.norma !== n.norma || text(o) !== text(n))
      cambios.push({ bloque: id, tipo: "modificado", titulo: n.titulo, antes: o.vigencia, ahora: n.vigencia, norma: n.norma, soloTexto: o.vigencia === n.vigencia && o.norma === n.norma });
    const op = o.pendiente ? `${o.pendiente.vigencia} ${o.pendiente.norma}` : "";
    const np = n.pendiente ? `${n.pendiente.vigencia} ${n.pendiente.norma}` : "";
    if (np && np !== op) cambios.push({ bloque: id, tipo: "pendiente", titulo: n.titulo, ahora: n.pendiente.vigencia, norma: n.pendiente.norma });
  }
  for (const [id, o] of before) if (!after.has(id)) cambios.push({ bloque: id, tipo: "suprimido", titulo: o.titulo });
  return cambios;
}

/** Who cites each article: "LJV:140" → Set of "Esquema ljv-conciliacion", "Guía …" (the text's
 *  citations, tools/lib/citados.js, and each resource's own scope). */
function citing() {
  const { citados, read } = require("./lib/citados");
  const index = new Map();
  const add = (law, art, who) => {
    const k = `${law}:${art}`;
    if (!index.has(k)) index.set(k, new Set());
    index.get(k).add(who);
  };
  const LABEL = { esquema: "Esquema", guia: "Guía" };
  for (const [law, arts] of Object.entries(citados())) for (const [art, list] of Object.entries(arts)) for (const x of list) add(law, art, `${LABEL[x.k]} ${x.id}`);
  for (const [folder, k] of [["esquemas", "esquema"], ["guias", "guia"]]) for (const r of read(folder)) for (const a of r.articulos || []) add(r.ley, a, `${LABEL[k]} ${r.id}`);
  return index;
}

/** Article keys of each block of a law's stored snapshot ("a140" → ["140"]). */
function articlesOfBlocks(clave) {
  const law = boe.load(clave);
  const map = new Map();
  if (law) for (const a of law.articulos.values()) map.set(a.bloque, [...(map.get(a.bloque) || []), a.key]);
  return map;
}

const fecha = (d) => (d && d.length === 8 ? `${d.slice(6, 8)}-${d.slice(4, 6)}-${d.slice(0, 4)}` : d || "—");
const TIPOS = { modificado: "nueva versión", pendiente: "versión publicada, aún no vigente", nuevo: "bloque nuevo", suprimido: "bloque suprimido" };

/** The report of one law: its changes, each with the articles it holds and who cites them. */
function report(clave, oldSnap, newSnap, index) {
  const arts = articlesOfBlocks(clave);
  const cambios = diff(oldSnap, newSnap).map((c) => {
    const keys = arts.get(c.bloque) || [];
    const quien = [...new Set(keys.flatMap((k) => [...(index.get(`${clave}:${k}`) || [])]))].sort();
    return { ...c, articulos: keys, citan: quien };
  });
  return { clave, antes: oldSnap.fecha_actualizacion, ahora: newSnap.fecha_actualizacion, cambios };
}

function markdown(reports, hoy) {
  const out = [`# Cambios del BOE desde las instantáneas — ${fecha(hoy)}`, "", "Generado por `tools/boe-diff.js`. Lista de trabajo: revisar cada recurso citado frente al texto nuevo antes de actualizar `sources/boe/` (`tools/boe-fetch.js`) y los datos.", ""];
  const trabajo = new Map();
  for (const r of reports) {
    out.push(`## ${r.clave} · instantánea a ${fecha(r.antes)} → BOE a ${fecha(r.ahora)}`, "");
    if (!r.cambios.length) {
      out.push("Sin cambios.", "");
      continue;
    }
    out.push("| Bloque | Artículos | Cambio | Vigencia | Norma | Lo citan |", "|---|---|---|---|---|---|");
    for (const c of r.cambios) {
      const vig = c.tipo === "modificado" ? `${fecha(c.antes)} → ${fecha(c.ahora)}${c.soloTexto ? " (mismo texto de vigencia; cambia la redacción)" : ""}` : fecha(c.ahora);
      out.push(`| ${c.bloque} | ${c.articulos.join(", ") || c.titulo || "—"} | ${TIPOS[c.tipo]} | ${vig} | ${c.norma || "—"} | ${c.citan.join(", ") || "—"} |`);
      for (const w of c.citan) {
        if (!trabajo.has(w)) trabajo.set(w, []);
        trabajo.get(w).push(`${r.clave} ${c.articulos.join(", ") || c.bloque} (${TIPOS[c.tipo]})`);
      }
    }
    out.push("");
  }
  out.push("## Recursos que revisar", "");
  if (!trabajo.size) out.push("Ninguno: ningún cambio afecta a un artículo citado.");
  for (const [w, list] of [...trabajo].sort()) out.push(`- **${w}**: ${list.join("; ")}`);
  return out.join("\n") + "\n";
}

module.exports = { diff, citing, report, markdown };
if (require.main !== module) return;

(async () => {
  const args = process.argv.slice(2);
  const opt = (name) => (args.find((a) => a.startsWith(`--${name}=`)) || "").split("=").slice(1).join("=") || null;
  const wanted = args.filter((a) => !a.startsWith("--")).map((s) => s.toUpperCase());
  const desde = opt("desde");
  const hoy = new Date().toLocaleDateString("sv-SE").replace(/-/g, "");
  const index = citing();
  const reports = [];
  let failed = 0;
  for (const ley of LEYES) {
    if (wanted.length && !wanted.includes(ley.clave.toUpperCase())) continue;
    const stored = path.join(ROOT, "sources", "boe", `${ley.clave}.json`);
    if (!fs.existsSync(stored)) continue;
    try {
      const oldSnap = JSON.parse(fs.readFileSync(stored, "utf8"));
      let newSnap;
      if (desde) {
        const f = path.join(path.resolve(desde), `${ley.clave}.json`);
        if (!fs.existsSync(f)) continue;
        newSnap = JSON.parse(fs.readFileSync(f, "utf8"));
      } else newSnap = await require("./boe-fetch").snapshot(ley, hoy);
      const r = report(ley.clave, oldSnap, newSnap, index);
      reports.push(r);
      const citados = r.cambios.filter((c) => c.citan.length).length;
      console.log(`${ley.clave.padEnd(8)} ${fecha(r.antes)} → ${fecha(r.ahora)} · ${r.cambios.length} cambios${r.cambios.length ? `, ${citados} en artículos citados` : ""}`);
      for (const c of r.cambios.filter((x) => x.citan.length)) console.log(`         ${c.articulos.join(", ")}: ${TIPOS[c.tipo]} → ${c.citan.join(", ")}`);
    } catch (err) {
      failed++;
      console.error(`${ley.clave}: ${err.message}`);
    }
  }
  const out = opt("out");
  if (out) {
    fs.writeFileSync(path.resolve(out), markdown(reports, hoy));
    console.log(`→ ${path.relative(ROOT, path.resolve(out))}`);
  }
  process.exitCode = failed ? 1 : 0;
})();

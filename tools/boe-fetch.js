#!/usr/bin/env node
// Downloads the consolidated text of each law in tools/leyes.json from the
// BOE open-data API and stores a normalised snapshot in sources/boe/<CLAVE>.json.
//
// Usage: node tools/boe-fetch.js [CLAVE ...]   (no arguments = every law)
//
// For each block (article, heading…) the snapshot keeps the latest version
// already in force on the download date; a version published but not yet in
// force is kept apart (`pendiente`), because legal accuracy depends on it.
// The full version history is not stored: the BOE keeps it, and the snapshot
// only has to answer "what does the law say today".

"use strict";
const fs = require("fs");
const path = require("path");

const API = "https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/";
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "sources", "boe");

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
function decode(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) => {
    if (e[0] === "#") return String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENTITIES[e] ?? m;
  });
}
// NFC: some BOE texts carry decomposed accents, which would break every text comparison.
const text = (html) => decode(html.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "")).replace(/[ \t\r\n]+/g, " ").trim().normalize("NFC");
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/(\w+)="([^"]*)"/g)].map((m) => [m[1], decode(m[2])]));

async function get(url, accept) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { headers: { Accept: accept } });
      if (!res.ok) throw new Error(`HTTP ${res.status} en ${url}`);
      return await res.text();
    } catch (err) {
      if (attempt >= 4) throw err;
      await new Promise((r) => setTimeout(r, 2000 * 2 ** (attempt - 1)));
    }
  }
}

// A note of the BOE is a <blockquote>, with or without attributes (caduca="…", class="soloTexto",
// class="noDesde…", class="siempreSeVe"); class="sangrado" is the law's own indented text. Notes never
// go into the article's text, and those that have not expired are kept apart (`avisos`): the reader
// needs them. A note on the "inciso destacado" also says which one it is, or it would mean nothing:
// the BOE marks it only in bold.
function noteAlive(tag, today) {
  const a = attrs(tag || "");
  if (!a.class && !a.caduca) return false; // the BOE's plain history of amendments
  const until = (String(a.class).match(/noDesde(\d{8})/) || [])[1];
  return !(a.caduca && a.caduca <= today) && !(until && until <= today);
}

// One <version> → its paragraphs. Tables are flattened row by row (cells joined
// with " | "), so their text is searchable and comparable.
function parseVersion(body, today = new Date().toLocaleDateString("sv-SE").replace(/-/g, "")) {
  const parrafos = [];
  const notas = [];
  const avisos = [];
  const re = /<blockquote((?![^>]*sangrado)[^>]*)>([\s\S]*?)<\/blockquote>|<p(\s[^>]*)?>([\s\S]*?)<\/p>|<table[\s\S]*?<\/table>/g;
  for (const m of body.matchAll(re)) {
    if (m[2] !== undefined) {
      const ps = [...m[2].matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g)].map((p) => text(p[1]));
      notas.push(...ps);
      if (noteAlive(m[1], today)) {
        const bold = [...body.replace(/<blockquote[\s\S]*?<\/blockquote>/g, "").matchAll(/<strong>([\s\S]*?)<\/strong>/g)].map((b) => text(b[1])).join(" ");
        for (const t of ps) avisos.push(`${t.replace(/\s*Ref\. BOE-[\w#-]+\s*\.?/g, "")}${/inciso destacado/i.test(t) && bold ? ` Inciso: «${bold}».` : ""}`);
      }
    } else if (m[4] !== undefined) {
      const clase = attrs(m[3] || "").class || "";
      const t = text(m[4]);
      if (t) parrafos.push([clase, t]);
    } else {
      for (const row of m[0].matchAll(/<tr[\s\S]*?<\/tr>/g)) {
        const cells = [...row[0].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map((c) => text(c[1]));
        if (cells.some(Boolean)) parrafos.push(["tabla", cells.join(" | ")]);
      }
    }
  }
  return { parrafos, notas, ...(avisos.length ? { avisos } : {}) };
}

function parseLaw(xml, today) {
  const bloques = [];
  for (const b of xml.matchAll(/<bloque([^>]*)>([\s\S]*?)<\/bloque>/g)) {
    const { id, tipo, titulo } = attrs(b[1]);
    const versiones = [...b[2].matchAll(/<version([^>]*)>([\s\S]*?)<\/version>/g)].map((v) => ({ ...attrs(v[1]), body: v[2] }));
    const enVigor = versiones.filter((v) => v.fecha_vigencia <= today);
    const futuras = versiones.filter((v) => v.fecha_vigencia > today);
    const actual = enVigor[enVigor.length - 1];
    const bloque = { id, tipo, titulo: titulo || "" };
    if (actual) {
      Object.assign(bloque, { vigencia: actual.fecha_vigencia, norma: actual.id_norma, versiones: versiones.length }, parseVersion(actual.body));
    } else {
      bloque.parrafos = [];
      bloque.notas = [];
    }
    if (futuras.length) {
      const f = futuras[futuras.length - 1];
      bloque.pendiente = { vigencia: f.fecha_vigencia, norma: f.id_norma, ...parseVersion(f.body) };
    }
    bloques.push(bloque);
  }
  return bloques;
}

/** The snapshot of one law as the BOE gives it today, known consolidation errors corrected
 *  (sources/boe/correcciones.json). Nothing is written: tools/boe-diff.js compares it. */
async function snapshot({ clave, id }, today) {
  const meta = await get(`${API}${id}/metadatos`, "application/xml");
  const field = (name) => decode((meta.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`)) || [])[1] || "");
  const titulo = field("titulo");
  if (!titulo) throw new Error(`${clave}: el BOE no devuelve metadatos para ${id}`);
  const xml = await get(`${API}${id}/texto`, "application/xml");
  const bloques = parseLaw(xml, today);
  const snapshot = {
    clave,
    id,
    titulo,
    fecha_actualizacion: field("fecha_actualizacion").slice(0, 8),
    estado_consolidacion: field("estado_consolidacion"),
    derogada: field("estatus_derogacion") === "S",
    url: `https://www.boe.es/buscar/act.php?id=${id}`,
    bloques,
  };
  await require("./lib/boe-correcciones").corregir(snapshot);
  return snapshot;
}

async function fetchLaw(ley, today) {
  const snap = await snapshot(ley, today);
  const { clave, id, titulo, bloques } = snap;
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, `${clave}.json`), JSON.stringify(snap, null, 1) + "\n");
  const pendientes = bloques.filter((b) => b.pendiente).map((b) => b.id);
  console.log(
    `${clave.padEnd(8)} ${id.padEnd(17)} actualizada ${snap.fecha_actualizacion} · ${bloques.length} bloques` +
      (pendientes.length ? ` · ${pendientes.length} con versión aún no vigente: ${pendientes.join(", ")}` : "") +
      (snap.derogada ? " · DEROGADA" : "") +
      `\n         ${titulo}`
  );
}

module.exports = { get, parseVersion, snapshot, API };
if (require.main !== module) return;

(async () => {
  const leyes = JSON.parse(fs.readFileSync(path.join(__dirname, "leyes.json"), "utf8"));
  const wanted = process.argv.slice(2).map((s) => s.toUpperCase());
  const today = new Date().toLocaleDateString("sv-SE").replace(/-/g, ""); // local date, YYYYMMDD
  let failed = 0;
  for (const ley of leyes) {
    if (wanted.length && !wanted.includes(ley.clave.toUpperCase())) continue;
    try {
      await fetchLaw(ley, today);
    } catch (err) {
      failed++;
      console.error(`${ley.clave}: ${err.message}`);
    }
  }
  process.exitCode = failed ? 1 : 0;
})();

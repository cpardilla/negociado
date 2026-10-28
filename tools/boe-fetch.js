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
const text = (html) => decode(html.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "")).replace(/[ \t\r\n]+/g, " ").trim();
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

// One <version> → its paragraphs. Tables are flattened row by row (cells joined
// with " | "), so their text is searchable and comparable.
function parseVersion(body) {
  const parrafos = [];
  const notas = [];
  const re = /<blockquote>([\s\S]*?)<\/blockquote>|<p([^>]*)>([\s\S]*?)<\/p>|<table[\s\S]*?<\/table>/g;
  for (const m of body.matchAll(re)) {
    if (m[1] !== undefined) {
      for (const p of m[1].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)) notas.push(text(p[1]));
    } else if (m[2] !== undefined) {
      const clase = attrs(m[2]).class || "";
      const t = text(m[3]);
      if (t) parrafos.push([clase, t]);
    } else {
      for (const row of m[0].matchAll(/<tr[\s\S]*?<\/tr>/g)) {
        const cells = [...row[0].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map((c) => text(c[1]));
        if (cells.some(Boolean)) parrafos.push(["tabla", cells.join(" | ")]);
      }
    }
  }
  return { parrafos, notas };
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

async function fetchLaw({ clave, id }, today) {
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
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, `${clave}.json`), JSON.stringify(snapshot, null, 1) + "\n");
  const pendientes = bloques.filter((b) => b.pendiente).map((b) => b.id);
  console.log(
    `${clave.padEnd(8)} ${id.padEnd(17)} actualizada ${snapshot.fecha_actualizacion} · ${bloques.length} bloques` +
      (pendientes.length ? ` · ${pendientes.length} con versión aún no vigente: ${pendientes.join(", ")}` : "") +
      (snapshot.derogada ? " · DEROGADA" : "") +
      `\n         ${titulo}`
  );
}

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

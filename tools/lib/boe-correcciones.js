// Corrections to the BOE snapshots, listed in sources/boe/correcciones.json.
//
// The snapshot keeps, for each block, the latest version the BOE lists. Sometimes that version is
// wrong: the BOE lists versions out of order (arts. 14, 64… LEC: the LO 7/2015 version, in force
// from 1-10-2015, comes after the Ley 42/2015 one, in force from 7-10-2015), or builds a version
// on an outdated text (art. 781 LEC). Each correction names the version to keep instead
// (`version` = fecha de vigencia, `norma`), whether to apply the LO 7/2015 renaming of
// «Secretario judicial» (`terminologia`), the reason and the owner's decision. The block keeps
// the mark `correccion`, which the law view shows. Candidates come from tools/boe-revisiones.js.
//
// Used by tools/boe-fetch.js after each download and by tools/boe-correcciones.js on the stored
// snapshots.

"use strict";
const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "..", "sources", "boe", "correcciones.json");

// Disposición adicional primera de la LO 7/2015.
const RENAMES = [
  [/\bSecretarios judiciales\b/g, "Letrados de la Administración de Justicia"],
  [/\bsecretarios judiciales\b/g, "letrados de la Administración de Justicia"],
  [/\bSecretario judicial\b/g, "Letrado de la Administración de Justicia"],
  [/\bsecretario judicial\b/g, "letrado de la Administración de Justicia"],
  [/\bSecretario Judicial\b/g, "Letrado de la Administración de Justicia"],
];
const rename = (t) => RENAMES.reduce((s, [re, to]) => s.replace(re, to), t);

const lista = () => (fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, "utf8")).correcciones : []);

/** Applies the corrections of `snapshot.clave` in place; returns how many were applied. */
async function corregir(snapshot) {
  const mine = lista().filter((c) => c.ley === snapshot.clave);
  if (!mine.length) return 0;
  const { get, parseVersion, API } = require("../boe-fetch");
  const attrs = (tag) => Object.fromEntries([...tag.matchAll(/(\w+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
  for (const c of mine) {
    const b = snapshot.bloques.find((x) => x.id === c.bloque);
    if (!b) throw new Error(`${c.ley}: corrección de un bloque que no existe (${c.bloque})`);
    const xml = await get(`${API}${snapshot.id}/texto/bloque/${c.bloque}`, "application/xml");
    const v = [...xml.matchAll(/<version([^>]*)>([\s\S]*?)<\/version>/g)].map((m) => ({ ...attrs(m[1]), body: m[2] }))
      .find((x) => x.fecha_vigencia === c.version && x.id_norma === c.norma);
    if (!v) throw new Error(`${c.ley} ${c.bloque}: el BOE ya no tiene la versión ${c.version} (${c.norma}); revisar la corrección`);
    const { parrafos, notas, avisos } = parseVersion(v.body);
    Object.assign(b, {
      vigencia: c.version,
      norma: c.norma,
      parrafos: c.terminologia ? parrafos.map(([k, t]) => [k, rename(t)]) : parrafos,
      notas,
      ...(avisos ? { avisos } : {}),
      correccion: { motivo: c.motivo, decision: c.decision, sustituye: { vigencia: b.vigencia, norma: b.norma } },
    });
  }
  return mine.length;
}

module.exports = { corregir, lista };

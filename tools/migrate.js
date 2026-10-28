#!/usr/bin/env node
// Mechanical migration of the current esquemas (sources/actual/E*.json) to the app's data format
// (data/esquemas/<id>.js). Form only: not one word of content changes — the run fails unless every
// visible text of the original is in the new record, the same number of times.
//
// Usage: node tools/migrate.js [esquemas]
//
// Left out on purpose (interface, not content): the statistics bar ("40+ conexiones") and the
// counters on each card ("13 normas conexas") — hand-written figures nobody can check —, the
// legend (it repeats the category names), the "no results" message and the search keywords'
// duplicates. Widgets the extractor flattened (normative connections, participant columns,
// phases, flows, timelines) are rebuilt as typed blocks.

"use strict";
const fs = require("fs");
const path = require("path");
const { load, division } = require("./lib/boe");

const ROOT = path.join(__dirname, "..");
const ACTUAL = path.join(ROOT, "sources", "actual");
const { recursos } = JSON.parse(fs.readFileSync(path.join(__dirname, "migracion.json"), "utf8"));
const read = (id) => JSON.parse(fs.readFileSync(path.join(ACTUAL, `${id}.json`), "utf8"));
const strip = (h) => String(h).replace(/<br>/g, " ").replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

const lawOf = (invId) => (/^[EG]0[1-5]$/.test(invId) ? "LEC" : "LJV");
/** Articles of the law division a resource covers (from its folder and file names). */
function articlesOf(inv) {
  const law = load(lawOf(inv.id));
  const names = inv.ruta.split("/").slice(2).map((s) => s.replace(/\.html$/, "").replace(/^\d+\s*-\s*/, "").replace(/^(T[ÍI]TULO|CAP[ÍI]TULO)\s+[^-]+-\s*/i, ""));
  const div = division(law, names);
  return div ? div.articulos : [];
}

// ── Tones ──────────────────────────────────────────────────────────────────

const TAG_TONE = { "tag-info": "t-info", "tag-alert": "t-aviso", "tag-warn": "t-plazo", "tag-ok": "t-ok", "tag-gray": "t-nota", "tag-purple": "c4", "tag-amber": "c2", "tag-green": "c3" };
const tagTone = (cls) => {
  const c = String(cls || "").split(/\s+/).find((x) => /^tag-/.test(x));
  if (!c) return "t-nota";
  if (/^tag-c\d$/.test(c)) return toneOf(c.slice(4));
  return TAG_TONE[c] || "t-nota";
};
/** Six category tones (c1…c6); a seventh category takes the first tone again, and so on. */
const toneOf = (cat) => {
  const n = Number(String(cat).replace(/\D/g, ""));
  return n ? `c${((n - 1) % 6) + 1}` : "c6";
};
const NOTE_TONE = { info: "t-info", warn: "t-plazo", alert: "t-aviso", "": "t-nota" };

// ── Blocks ─────────────────────────────────────────────────────────────────

/** Inventory blocks → data blocks, rebuilding the widgets the extractor flattened. */
function blocks(list) {
  const out = [];
  let cur = null; // the widget being rebuilt: { norma } | { grupo } | { paso }
  const close = () => {
    if (cur) out.push(cur);
    cur = null;
  };
  for (const b of list) {
    const cls = b.p !== undefined ? b.clase || "" : null;
    if (cls === "no-results") continue;
    if (cls === "norm-law") {
      close();
      cur = { norma: { ley: b.p } };
    } else if (cls === "norm-title" && cur && cur.norma) cur.norma.titulo = b.p;
    else if (cls && cls.startsWith("norm-tag") && cur && cur.norma) {
      cur.norma.etiqueta = b.p;
      cur.norma.tono = tagTone(cls);
      close();
    } else if (cls && cls.startsWith("participant-col-head")) {
      close();
      const m = cls.match(/phead-(c\d)/);
      cur = { grupo: { titulo: b.p, tono: m ? toneOf(m[1]) : "c6", items: [] } };
    } else if (cls === "step-num" || cls === "flow-num") {
      close();
      cur = { paso: { n: b.p } };
    } else if ((cls === "flow-title" || cls === "") && cur && cur.paso && cur.paso.titulo === undefined) cur.paso.titulo = b.p;
    else if (cls === "flow-desc" && cur && cur.paso) cur.paso.texto = b.p;
    else if (cls === "flow-arrow" || cls === "tl-arrow") continue; // drawing only (the arrows between boxes)
    else if (cls === "tl-step") {
      close();
      out.push({ paso: { titulo: b.p } });
    } else if (cls === "tl-note") {
      close();
      out.push({ nota: { tono: "t-nota", etiqueta: "", texto: b.p } });
    } else if (cls === "info-box" || cls === "alert-box") {
      close();
      out.push({ nota: { tono: cls === "info-box" ? "t-info" : "t-aviso", etiqueta: "", texto: b.p } });
    } else if (b.lista && cur && (cur.grupo || cur.paso)) {
      (cur.grupo || cur.paso).items = b.lista;
      close();
    } else if (cls !== null && cur && cur.norma && !cur.norma.texto) cur.norma.texto = b.p;
    else {
      close();
      if (b.tarjeta) out.push({ tarjeta: card(b.tarjeta) });
      else if (b.apartado) out.push({ apartado: { titulo: b.apartado.titulo, contenido: blocks(b.apartado.contenido) } });
      else if (b.lista) out.push({ lista: b.lista, ...(b.ordenada ? { ordenada: true } : {}) });
      else if (b.nota) out.push({ nota: { tono: NOTE_TONE[b.nota.tipo] || "t-nota", etiqueta: b.nota.etiqueta, texto: b.nota.texto } });
      else if (b.tabla) out.push({ tabla: b.tabla });
      else if (cls !== null) out.push({ p: b.p, ...(cls === "card-refs" ? { estilo: "refs" } : {}) });
      else throw new Error(`Bloque desconocido: ${JSON.stringify(b).slice(0, 120)}`);
    }
  }
  close();
  return out;
}

let categoryTone = {};
function card(c) {
  return {
    articulo: c.articulo,
    categoria: c.categoria,
    tono: categoryTone[c.categoria] || toneOf(c.categoria),
    etiquetas: c.etiquetas.map((e) => ({ texto: e.texto, tono: tagTone(e.clase) })),
    titulo: c.titulo,
    resumen: c.resumen,
    cuerpo: blocks(c.cuerpo),
    referencias: c.referencias,
    ...(c.claves ? { claves: c.claves } : {}),
  };
}

function esquema(invId) {
  const inv = read(invId);
  const meta = recursos[invId];
  const ley = lawOf(invId);
  const categorias = inv.filtros.filter((f) => f.categoria !== "all").map((f) => ({ id: f.categoria, nombre: f.texto, tono: toneOf(f.categoria) }));
  categoryTone = Object.fromEntries(categorias.map((c) => [c.id, c.tono]));
  return {
    tipo: "esquema",
    id: meta.id,
    ley,
    ...(meta.grupo ? { grupo: meta.grupo } : {}),
    titulo: strip(inv.cabecera.titulo),
    corto: meta.corto,
    articulos: articlesOf(inv),
    revision: { estado: "sin revisar", boe: load(ley).fecha, origen: invId },
    cabecera: { migas: inv.cabecera.migas, subtitulo: inv.cabecera.subtitulo, etiquetas: inv.cabecera.etiquetas },
    categorias,
    secciones: inv.secciones.map((s) => (s.capitulo ? { capitulo: s.capitulo } : { titulo: s.titulo, ...(s.recuento ? { recuento: s.recuento } : {}), ...(s.plegada ? { plegada: true } : {}), bloques: blocks(s.contenido) })),
    ...(inv.pie ? { pie: inv.pie } : {}),
  };
}

// ── Fidelity ───────────────────────────────────────────────────────────────

/** Every visible text of a structure, keys of interface or data left aside. */
function texts(v, skip, out = []) {
  if (typeof v === "string") {
    const t = strip(v);
    if (t) out.push(t);
  } else if (Array.isArray(v)) v.forEach((x) => texts(x, skip, out));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) if (!skip.has(k)) texts(x, skip, out);
  return out;
}
const INV_SKIP = new Set(["clase", "categoria", "plegada", "id", "contadores", "claves", "ordenada", "tipo"]);
const NEW_SKIP = new Set(["categoria", "tono", "plegada", "id", "claves", "estilo", "ordenada"]);

function fidelity(inv, rec) {
  const before = [
    ...texts(inv.cabecera, INV_SKIP),
    ...inv.filtros.filter((f) => f.categoria !== "all").map((f) => strip(f.texto)),
    ...texts(
      inv.secciones.map((s) => (s.contenido ? { ...s, contenido: dropNoResults(s.contenido) } : s)),
      INV_SKIP
    ),
    ...texts(inv.pie || "", INV_SKIP),
  ];
  const after = [strip(rec.titulo), ...texts(rec.cabecera, NEW_SKIP), ...rec.categorias.map((c) => strip(c.nombre)), ...texts(rec.secciones, NEW_SKIP), ...texts(rec.pie || "", NEW_SKIP)];
  const count = (list) => list.reduce((m, t) => m.set(t, (m.get(t) || 0) + 1), new Map());
  const a = count(before);
  const b = count(after);
  const diff = [];
  for (const [t, n] of a) if (b.get(t) !== n) diff.push(`antes ×${n}, después ×${b.get(t) || 0}: «${t.slice(0, 90)}»`);
  for (const [t, n] of b) if (!a.has(t)) diff.push(`solo después ×${n}: «${t.slice(0, 90)}»`);
  return diff;
}
// Left out of the comparison: the "no results" message and the arrows drawn between diagram boxes.
const dropNoResults = (list) =>
  list
    .filter((b) => !(b.p !== undefined && ["no-results", "flow-arrow", "tl-arrow"].includes(b.clase)))
    .map((b) => (b.tarjeta ? { ...b, tarjeta: { ...b.tarjeta, cuerpo: dropNoResults(b.tarjeta.cuerpo) } } : b.apartado ? { ...b, apartado: { ...b.apartado, contenido: dropNoResults(b.apartado.contenido) } } : b));

// ── Main ───────────────────────────────────────────────────────────────────

function write(folder, rec, origin) {
  const dir = path.join(ROOT, "data", folder);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${rec.id}.js`);
  fs.writeFileSync(file, `/* Migrado por tools/migrate.js desde sources/actual/${origin}.json (contenido sin cambios; pendiente de revisión). */\nNeg.data.register(${JSON.stringify(rec, null, 1)});\n`);
  return file;
}

function main() {
  const what = process.argv[2] || "esquemas";
  let failed = 0;
  if (what === "esquemas") {
    for (const invId of Object.keys(recursos).filter((k) => /^E\d+$/.test(k))) {
      if (!recursos[invId].id) {
        console.log(`${invId}  —  no se migra: ${recursos[invId]._motivo}`);
        continue;
      }
      const inv = read(invId);
      const rec = esquema(invId);
      const diff = fidelity(inv, rec);
      if (diff.length) {
        failed++;
        console.log(`${invId} → ${rec.id}: ${diff.length} diferencias de texto\n  ${diff.slice(0, 8).join("\n  ")}`);
        continue;
      }
      const file = write("esquemas", rec, invId);
      const cards = JSON.stringify(rec.secciones).match(/"tarjeta":/g) || [];
      console.log(`${invId} → ${rec.id}: ${cards.length} tarjetas, ${rec.articulos.length} artículos de ámbito, texto idéntico (${(fs.statSync(file).size / 1024).toFixed(0)} KB)`);
    }
  }
  process.exitCode = failed ? 1 : 0;
}

module.exports = { blocks, esquema, fidelity, texts };
if (require.main === module) main();

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

// ── Guías ──────────────────────────────────────────────────────────────────
// The old option field `l` meant three things depending on the guía: a tone (ok/bad/warn/neutral),
// the option's letter (A, B… — the engine numbers options itself), or a short label of its own.

const OPT_TONE = { ok: "t-ok", bad: "t-aviso", warn: "t-plazo", neutral: "t-nota" };
const BLOCK = { i: "info", n: "nota", l: "ley", w: "aviso", d: "plazo" };
const isLetter = (s) => /^[A-Z]$/.test(s);

function option(o) {
  const tone = OPT_TONE[o.v] || OPT_TONE[o.l] || "t-nota";
  const label = o.l && !OPT_TONE[o.l] && !isLetter(o.l) ? o.l : null;
  return { texto: o.t, tono: tone, ...(label ? { nota: label } : {}), destino: o.n };
}

function stepBlocks(c) {
  return (c || []).map((b) => {
    if (b[0] === "cl" || b[0] === "ul") return { tipo: "lista", titulo: b[1], items: b[2], ...(b[0] === "cl" ? { marcar: true } : {}) };
    if (!BLOCK[b[0]]) throw new Error(`Bloque de guía desconocido: ${b[0]}`);
    return { tipo: BLOCK[b[0]], texto: b[1] };
  });
}

/** The sidebar footer (SB_FOOT): its text with line breaks, without the old wrapper markup. Some
 *  guías give it as HTML, one (G15) as a list of plain lines. */
const escHtml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const footer = (v) => {
  if (!v) return "";
  if (Array.isArray(v)) return v.map(escHtml).join("<br>");
  return v.replace(/<\/?div[^>]*>/g, "").replace(/<br\s*\/?>/g, "<br>").trim();
};

/** The guías' texts were raw HTML (inserted as such): normalised to the subset the esquemas use —
 *  text escaped, <b>→<strong>, <i>→<em>, <span> unwrapped, other tags dropped (content kept). */
const KEEP = { b: "strong", strong: "strong", i: "em", em: "em", br: "br", sup: "sup", sub: "sub", code: "code", u: "u" };
const ENT = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&nbsp;": " " };
function safe(s) {
  if (typeof s !== "string") return s;
  let out = "";
  for (const part of s.split(/(<\/?[a-z][a-z0-9]*\b[^>]*>)/i)) {
    const tag = part.match(/^<(\/?)([a-z][a-z0-9]*)\b[^>]*>$/i);
    if (tag) {
      const keep = KEEP[tag[2].toLowerCase()];
      if (keep === "br") out += "<br>";
      else if (keep) out += `<${tag[1]}${keep}>`;
    } else out += escHtml(part.replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (m) => ENT[m]));
  }
  return out;
}
const safeDeep = (v) => (typeof v === "string" ? safe(v) : Array.isArray(v) ? v.map(safeDeep) : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, ["destino", "actor", "tono", "siguiente", "fin", "tipo"].includes(k) ? x : safeDeep(x)])) : v);

function guia(invId) {
  const inv = read(invId);
  const esq = recursos[recursos[invId].esquema];
  const ley = lawOf(invId);
  const phases = (inv.otrosDatos.PHASES || []).map((p) => (typeof p === "string" ? p : p.name || p.label || p.t));
  const pasos = {};
  for (const [id, s] of Object.entries(inv.pasos)) {
    pasos[id] = safeDeep({
      fase: s.ph,
      titulo: s.t,
      actor: s.ac,
      bloques: stepBlocks(s.c),
      ...(s.q ? { pregunta: s.q } : {}),
      ...(s.opts ? { opciones: s.opts.map(option) } : {}),
      ...(s.nx ? { siguiente: s.nx } : {}),
      ...(s.end ? { fin: s.end } : {}),
    });
  }
  return {
    tipo: "guia",
    id: esq.id,
    ley,
    ...(esq.grupo ? { grupo: esq.grupo } : {}),
    titulo: strip(inv.cabecera ? inv.cabecera.titulo : inv.titulo).replace(/^[☰⚖\s]+/, ""),
    corto: esq.corto,
    articulos: articlesOf(inv),
    revision: { estado: "sin revisar", boe: load(ley).fecha, origen: invId },
    fases: phases.map(safe),
    actores: Object.fromEntries(Object.entries(inv.actores.etiquetas).map(([k, l]) => [k, safe(l)])),
    inicio: inv.inicio,
    pasos,
    ...(inv.otrosDatos.SB_FOOT ? { pie: safe(footer(inv.otrosDatos.SB_FOOT)) } : {}),
  };
}

function guiaFidelity(inv, rec) {
  const before = [];
  const after = [];
  const add = (list, s) => {
    const t = strip(s || "");
    if (t) list.push(t);
  };
  for (const s of Object.values(inv.pasos)) {
    add(before, s.t);
    add(before, s.q);
    for (const o of s.opts || []) {
      add(before, o.t);
      if (o.l && !OPT_TONE[o.l] && !isLetter(o.l)) add(before, o.l);
    }
    for (const b of s.c || []) b.slice(1).forEach((x) => (Array.isArray(x) ? x.forEach((y) => add(before, y)) : add(before, x)));
  }
  (inv.otrosDatos.PHASES || []).forEach((p) => add(before, typeof p === "string" ? p : p.name || p.label || p.t));
  Object.values(inv.actores.etiquetas).forEach((l) => add(before, l));
  add(before, footer(inv.otrosDatos.SB_FOOT));

  for (const s of Object.values(rec.pasos)) {
    add(after, s.titulo);
    add(after, s.pregunta);
    for (const o of s.opciones || []) {
      add(after, o.texto);
      add(after, o.nota);
    }
    for (const b of s.bloques) {
      add(after, b.titulo);
      add(after, b.texto);
      (b.items || []).forEach((y) => add(after, y));
    }
  }
  rec.fases.forEach((p) => add(after, p));
  Object.values(rec.actores).forEach((l) => add(after, l));
  add(after, rec.pie);

  const count = (list) => list.reduce((m, t) => m.set(t, (m.get(t) || 0) + 1), new Map());
  const a = count(before);
  const b = count(after);
  const diff = [];
  for (const [t, n] of a) if (b.get(t) !== n) diff.push(`antes ×${n}, después ×${b.get(t) || 0}: «${t.slice(0, 90)}»`);
  for (const [t, n] of b) if (!a.has(t)) diff.push(`solo después ×${n}: «${t.slice(0, 90)}»`);
  // The graph must not change either: same steps, same exits.
  for (const [id, s] of Object.entries(inv.pasos)) {
    const r = rec.pasos[id];
    const exits = (x) => [x.nx || x.siguiente, ...(x.opts || x.opciones || []).map((o) => o.n || o.destino)].filter(Boolean).join(",");
    if (!r || exits(s) !== exits(r) || (s.end || null) !== (r.fin || null) || s.ph !== r.fase) diff.push(`paso «${id}»: grafo distinto`);
  }
  return diff;
}

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
  if (what === "guias") {
    for (const invId of Object.keys(recursos).filter((k) => /^G\d+$/.test(k))) {
      const inv = read(invId);
      const rec = guia(invId);
      const diff = guiaFidelity(inv, rec);
      if (diff.length) {
        failed++;
        console.log(`${invId} → ${rec.id}: ${diff.length} diferencias\n  ${diff.slice(0, 8).join("\n  ")}`);
        continue;
      }
      const file = write("guias", rec, invId);
      console.log(`${invId} → ${rec.id}: ${Object.keys(rec.pasos).length} pasos, ${rec.fases.length} fases, texto y grafo idénticos (${(fs.statSync(file).size / 1024).toFixed(0)} KB)`);
    }
  }
  process.exitCode = failed ? 1 : 0;
}

module.exports = { blocks, esquema, fidelity, texts, guia, guiaFidelity };
if (require.main === module) main();

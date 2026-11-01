// Tests of the app's data files (data/): well formed, safe to insert, faithful to the original.
// Run: node --test tests/

"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const DATA = path.join(ROOT, "data");
const read = (folder) =>
  fs.existsSync(path.join(DATA, folder))
    ? fs
        .readdirSync(path.join(DATA, folder))
        .filter((f) => f.endsWith(".js"))
        .map((f) => {
          let rec;
          vm.runInNewContext(fs.readFileSync(path.join(DATA, folder, f), "utf8"), { Neg: { data: { register: (r) => (rec = r) } } });
          // Plain data of this realm (objects made inside vm have other prototypes: strict
          // comparisons would fail on that alone).
          return { file: f, rec: JSON.parse(JSON.stringify(rec)) };
        })
    : [];
const catalogo = read("").find((x) => x.file === "catalogo.js").rec;
const esquemas = read("esquemas");
const guias = read("guias");

/** Every string in a structure, with its path. */
function strings(v, where = "", out = []) {
  if (typeof v === "string") out.push([where, v]);
  else if (Array.isArray(v)) v.forEach((x, i) => strings(x, `${where}[${i}]`, out));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) strings(x, `${where}.${k}`, out);
  return out;
}

test("data: inline HTML is only the allowed subset over escaped text (safe to insert as is)", () => {
  const bad = [];
  for (const { file, rec } of [...esquemas, ...guias])
    for (const [where, s] of strings(rec)) {
      const tags = s.match(/<\/?([a-z0-9]+)[^>]*>/gi) || [];
      for (const t of tags) if (!/^<\/?(strong|em|br|sup|sub|code|u)>$/.test(t)) bad.push(`${file}${where}: ${t}`);
      if (/&(?!(amp|lt|gt|quot|#39);)/.test(s)) bad.push(`${file}${where}: «&» sin escapar`);
    }
  assert.deepEqual(bad.slice(0, 10), []);
});

test("data: ids unique, file names match ids, catalogue complete", () => {
  const ids = esquemas.map((x) => x.rec.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const { file, rec } of esquemas) assert.equal(file, `${rec.id}.js`);
  assert.deepEqual(catalogo.esquemas.map((e) => e.id).sort(), ids.sort(), "el catálogo lista exactamente los esquemas que hay");
  for (const e of catalogo.esquemas) assert.ok(e.articulos.length, `${e.id}: artículos de su ámbito`);
  // The side menu places each resource where the law's index places it (catalogo `ruta`).
  for (const r of [...catalogo.esquemas, ...catalogo.guias]) assert.ok(r.ruta && r.ruta.length, `${r.id}: sin ruta en el índice de la ley (menú lateral)`);
});

test("data: every card and block has what the view needs", () => {
  const TONES = /^(c[1-6]|t-(info|plazo|nota|aviso|ok|ley))$/;
  for (const { rec } of esquemas) {
    for (const c of rec.categorias) assert.match(c.tono, TONES, `${rec.id}: categoría ${c.id}`);
    (function walk(v) {
      if (Array.isArray(v)) return v.forEach(walk);
      if (!v || typeof v !== "object") return;
      if (v.tarjeta) {
        assert.match(v.tarjeta.tono, TONES, `${rec.id}: tarjeta ${v.tarjeta.articulo}`);
        assert.ok(rec.categorias.some((c) => c.id === v.tarjeta.categoria) || !v.tarjeta.categoria, `${rec.id}: categoría de ${v.tarjeta.articulo}`);
        v.tarjeta.etiquetas.forEach((e) => assert.match(e.tono, TONES));
      }
      // A list item is text: a note or a block put inside a list renders as an empty bullet.
      if (v.lista) v.lista.forEach((it, i) => assert.ok(typeof it.t === "string" && it.t.trim(), `${rec.id}: elemento ${i + 1} de una lista sin texto`));
      Object.values(v).forEach(walk);
    })(rec.secciones);
  }
});

test("guías: catalogue complete, every exit leads to an existing step, ends and tones known", () => {
  assert.deepEqual(catalogo.guias.map((g) => g.id).sort(), guias.map((g) => g.rec.id).sort());
  for (const { file, rec } of guias) {
    assert.equal(file, `${rec.id}.js`);
    assert.ok(rec.pasos[rec.inicio], `${rec.id}: inicio`);
    for (const [id, p] of Object.entries(rec.pasos)) {
      for (const to of [p.siguiente, ...(p.opciones || []).map((o) => o.destino)].filter(Boolean)) assert.ok(rec.pasos[to], `${rec.id}.${id} → ${to}`);
      if (p.fin) assert.match(p.fin, /^(success|error|warning|neutral)$/);
      (p.opciones || []).forEach((o) => assert.match(o.tono, /^t-(ok|aviso|plazo|nota)$/));
      assert.ok(p.fase >= 0 && p.fase < rec.fases.length, `${rec.id}.${id}: fase`);
      assert.ok(rec.actores[p.actor], `${rec.id}.${id}: actor «${p.actor}» con etiqueta`);
    }
  }
});

test("migration: every guía keeps every text and its graph", () => {
  const { guia, guiaFidelity } = require("../tools/migrate");
  const { recursos } = JSON.parse(fs.readFileSync(path.join(ROOT, "tools", "migracion.json"), "utf8"));
  for (const invId of Object.keys(recursos).filter((k) => /^G\d+$/.test(k))) {
    const inv = JSON.parse(fs.readFileSync(path.join(ROOT, "sources", "actual", `${invId}.json`), "utf8"));
    const fresh = guia(invId);
    assert.deepEqual(guiaFidelity(inv, fresh), [], `${invId}: texto y grafo idénticos`);
    const onDisk = guias.find((x) => x.rec.id === fresh.id).rec;
    if (onDisk.revision.estado === "sin revisar") assert.deepEqual(onDisk.pasos, JSON.parse(JSON.stringify(fresh.pasos)), `${invId}: fichero = migración`);
  }
});

test("migration: every esquema keeps every visible text of the original", () => {
  const { esquema, fidelity } = require("../tools/migrate");
  const { recursos } = JSON.parse(fs.readFileSync(path.join(ROOT, "tools", "migracion.json"), "utf8"));
  for (const invId of Object.keys(recursos).filter((k) => /^E\d+$/.test(k) && recursos[k].id)) {
    const inv = JSON.parse(fs.readFileSync(path.join(ROOT, "sources", "actual", `${invId}.json`), "utf8"));
    const fresh = esquema(invId);
    assert.deepEqual(fidelity(inv, fresh), [], `${invId}: texto idéntico`);
    // And the file on disk is what the migration produces (nobody edited it by hand unnoticed).
    const onDisk = esquemas.find((x) => x.rec.id === fresh.id).rec;
    if (onDisk.revision.estado === "sin revisar") assert.deepEqual(onDisk.secciones, JSON.parse(JSON.stringify(fresh.secciones)), `${invId}: fichero = migración`);
  }
});

test("data: titles carry no text from the old pages' toolbar", () => {
  for (const { rec } of [...esquemas, ...guias]) {
    assert.doesNotMatch(`${rec.titulo} ${rec.corto}`, /Mapa|Descargar|Reiniciar|\d+ ?%|⊞/, `${rec.id}: título con texto de la interfaz`);
  }
});

test("data: no references to the internal work (decisions, owner's criteria, resource codes) in what the app shows", () => {
  const INTERNAL = /decisi[oó]n\s*\d|criterio del (juzgado|propietario)|pendiente de criterio|\b[EG]\d{2}\b|roadmap|docs\//i;
  const bad = [];
  for (const { file, rec } of [...esquemas, ...guias])
    for (const [where, s] of strings(rec))
      // .revision is bookkeeping: the view shows only its state and BOE date.
      if (!where.startsWith(".revision") && INTERNAL.test(s)) bad.push(`${file}${where}: «${s.match(INTERNAL)[0]}»`);
  assert.deepEqual(bad.slice(0, 10), []);
});

test("BOE: every correction in sources/boe/correcciones.json is applied to its snapshot and reaches the law data", () => {
  const root = path.join(__dirname, "..");
  const { correcciones } = JSON.parse(fs.readFileSync(path.join(root, "sources", "boe", "correcciones.json"), "utf8"));
  for (const c of correcciones) {
    assert.ok(c.motivo && c.decision, `${c.ley} ${c.bloque}: sin motivo o sin decisión del propietario`);
    const snap = JSON.parse(fs.readFileSync(path.join(root, "sources", "boe", `${c.ley}.json`), "utf8"));
    const b = snap.bloques.find((x) => x.id === c.bloque);
    assert.ok(b && b.correccion, `${c.ley} ${c.bloque}: corrección sin aplicar (node tools/boe-correcciones.js)`);
    assert.equal(`${b.vigencia} ${b.norma}`, `${c.version} ${c.norma}`, `${c.ley} ${c.bloque}: versión distinta de la corrección`);
    const ley = path.join(root, "data", "leyes", `${c.ley}.js`);
    // Laws built with --citadas keep only the cited blocks: check the block only if it is there.
    const src = fs.existsSync(ley) ? fs.readFileSync(ley, "utf8") : "";
    if (src.includes(`"b":"${c.bloque}"`)) {
      assert.ok(src.includes(`"b":"${c.bloque}","v":"${c.version}","m":"${c.norma}"`), `${c.ley} ${c.bloque}: data/leyes sin regenerar (node tools/build-law.js)`);
    }
  }
});

test("citados: every entry points to an article of the law, an existing resource, and its card or step", () => {
  const citados = read("").find((x) => x.file === "citados.js").rec;
  const leyes = read("leyes");
  const bad = [];
  for (const [ley, arts] of Object.entries(citados.leyes)) {
    const law = leyes.find((l) => l.rec.id === ley).rec;
    for (const [art, list] of Object.entries(arts)) {
      if (!law.orden.includes(art)) bad.push(`${ley} ${art}: no es artículo de la ley`);
      for (const [k, id, loc] of list) {
        const rec = (k === "e" ? esquemas : guias).find((x) => x.rec.id === id);
        if (!rec) bad.push(`${ley} ${art}: ${k} ${id} no existe`);
        else if (k === "g" && loc && !rec.rec.pasos[loc]) bad.push(`${ley} ${art}: ${id} sin paso ${loc}`);
      }
    }
  }
  assert.deepEqual(bad.slice(0, 10), []);
  assert.ok(Object.keys(citados.leyes.LJV).length > 100, "el índice no está vacío");
});

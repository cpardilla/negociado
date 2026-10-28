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

/** Every string in a structure, with its path. */
function strings(v, where = "", out = []) {
  if (typeof v === "string") out.push([where, v]);
  else if (Array.isArray(v)) v.forEach((x, i) => strings(x, `${where}[${i}]`, out));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) strings(x, `${where}.${k}`, out);
  return out;
}

test("data: inline HTML is only the allowed subset over escaped text (safe to insert as is)", () => {
  const bad = [];
  for (const { file, rec } of esquemas)
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
      Object.values(v).forEach(walk);
    })(rec.secciones);
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

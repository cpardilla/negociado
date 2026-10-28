#!/usr/bin/env node
// Builds data/catalogo.js (what the app contains: laws, esquemas, guías — the menu and the home
// page read it) and data/busqueda.js (the search index), from the data files themselves, so they
// can never disagree with the content.
//
// Usage: node tools/build-index.js
//
// Esquemas and guías are ordered as the law orders the articles they cover; nothing is numbered by hand.

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const DATA = path.join(ROOT, "data");
const LEYES = JSON.parse(fs.readFileSync(path.join(__dirname, "leyes.json"), "utf8"));

/** Every record registered by the data files of one folder. */
function read(folder) {
  const dir = path.join(DATA, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".js"))
    .map((f) => {
      let record = null;
      vm.runInNewContext(fs.readFileSync(path.join(dir, f), "utf8"), { Neg: { data: { register: (r) => (record = r) } } }, { filename: f });
      if (!record) throw new Error(`${folder}/${f}: no registra datos`);
      if (`${record.id}.js` !== f) throw new Error(`${folder}/${f}: su id es «${record.id}»`);
      return record;
    });
}

const write = (name, record, note) => {
  const file = path.join(DATA, `${name}.js`);
  fs.writeFileSync(file, `/* Generado por tools/build-index.js — ${note}. No editar. */\nNeg.data.register(${JSON.stringify(record)});\n`);
  return `${path.relative(ROOT, file)} (${(fs.statSync(file).size / 1024).toFixed(0)} KB)`;
};

const leyes = read("leyes");
const esquemas = read("esquemas");
const guias = read("guias");
const lawById = new Map(leyes.map((l) => [l.id, l]));

/** Position of a resource in its law: the index of the first article it covers. */
function position(r) {
  const law = lawById.get(r.ley);
  const first = r.articulos && r.articulos[0];
  const i = law && first ? law.orden.indexOf(first) : -1;
  return [LEYES.findIndex((l) => l.clave === r.ley), i < 0 ? Infinity : i];
}
const byLaw = (a, b) => {
  const [la, ia] = position(a);
  const [lb, ib] = position(b);
  return la - lb || ia - ib || a.titulo.localeCompare(b.titulo, "es");
};
const entry = (r) => ({ id: r.id, ley: r.ley, grupo: r.grupo || "", titulo: r.titulo, corto: r.corto || r.titulo, articulos: r.articulos || [] });

const catalogo = {
  tipo: "catalogo",
  id: "catalogo",
  leyes: LEYES.filter((l) => lawById.has(l.clave)).map((l) => {
    const law = lawById.get(l.clave);
    return { id: law.id, nombre: law.nombre, titulo: law.titulo, fecha: law.boe.fecha, articulos: law.orden.length };
  }),
  esquemas: esquemas.sort(byLaw).map(entry),
  guias: guias.sort(byLaw).map(entry),
};

// Search index: k (kind) · t (title) · d (detail) · c (context) · u (address).
const entradas = [];
for (const law of leyes) {
  (function walk(list, trail) {
    for (const x of list) {
      if (typeof x === "string") {
        const a = law.articulos[x];
        entradas.push({ k: "ley", t: `Art. ${a.n || x}. ${a.r}`, c: [law.id, ...trail].join(" › "), u: `#/ley/${law.id}/${encodeURIComponent(x)}` });
      } else {
        entradas.push({ k: "ley", t: `${x.num}. ${x.t}`.replace(/\.\s*\.$/, "."), c: [law.id, ...trail].join(" › "), u: `#/ley/${law.id}/${encodeURIComponent(firstArticle(x))}` });
        walk(x.h, [...trail, x.num]);
      }
    }
  })(law.estructura, []);
}
function firstArticle(div) {
  for (const x of div.h) {
    if (typeof x === "string") return x;
    const a = firstArticle(x);
    if (a) return a;
  }
  return "";
}
for (const [kind, list] of [["esquema", esquemas], ["guia", guias]])
  for (const r of list) for (const e of r.busqueda || []) entradas.push({ k: kind, ...e, c: `${r.ley} · ${r.corto || r.titulo}` });

console.log(write("catalogo", catalogo, `${catalogo.leyes.length} leyes, ${catalogo.esquemas.length} esquemas, ${catalogo.guias.length} guías`));
console.log(write("busqueda", { tipo: "catalogo", id: "busqueda", entradas }, `${entradas.length} entradas`));

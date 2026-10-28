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
const citas = require("../assets/js/core/citas");

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
  // The menu's laws: the complete ones (the others carry only the articles the content cites).
  leyes: LEYES.filter((l) => lawById.has(l.clave) && !lawById.get(l.clave).parcial).map((l) => {
    const law = lawById.get(l.clave);
    return { id: law.id, nombre: law.nombre, titulo: law.titulo, fecha: law.boe.fecha, articulos: law.orden.length };
  }),
  esquemas: esquemas.sort(byLaw).map(entry),
  guias: guias.sort(byLaw).map(entry),
  // Every law the content may cite (tools/leyes.json), for the live references: its BOE page,
  // and whether the app carries its text (data/leyes/<id>.js: whole, or only the cited articles).
  normas: LEYES.map((l) => ({ id: l.clave, boe: l.id, texto: lawById.has(l.clave) ? (lawById.get(l.clave).parcial ? "citada" : "completa") : null })),
  alias: Object.fromEntries(LEYES.flatMap((l) => [[l.clave, l.clave], ...l.alias.map((a) => [a, l.clave])])),
};

// Search index: k (kind) · t (title) · d (detail) · c (context) · u (address).
const entradas = [];
for (const law of leyes.filter((l) => !l.parcial)) {
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
// Esquemas: every card (its article, title and summary), linked to the card itself.
const plain = (h) => String(h || "").replace(/<br>/g, " ").replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
for (const r of esquemas) {
  (function walk(v) {
    if (Array.isArray(v)) return v.forEach(walk);
    if (!v || typeof v !== "object") return;
    if (v.tarjeta) {
      const c = v.tarjeta;
      const found = citas.find(plain(c.articulo).replace(/^Art[íi]culos?/i, "art."), { defaultLaw: r.ley }).filter((f) => f.law === r.ley);
      const art = found.length ? found[0].refs[0].art : null;
      entradas.push({ k: "esquema", t: `${plain(c.articulo)} · ${plain(c.titulo)}`, d: plain(c.resumen).slice(0, 160), c: `${r.ley} · ${r.corto}`, u: `#/esquema/${r.id}${art ? `/${encodeURIComponent(art)}` : ""}` });
    }
    Object.values(v).forEach(walk);
  })(r.secciones);
}
// Guías: every step's title, linked to the step.
for (const r of guias)
  for (const [id, p] of Object.entries(r.pasos)) entradas.push({ k: "guia", t: plain(p.titulo), d: p.pregunta ? plain(p.pregunta).slice(0, 160) : "", c: `${r.ley} · ${r.corto}`, u: `#/guia/${r.id}/${encodeURIComponent(id)}` });

console.log(write("catalogo", catalogo, `${catalogo.leyes.length} leyes, ${catalogo.esquemas.length} esquemas, ${catalogo.guias.length} guías`));
console.log(write("busqueda", { tipo: "catalogo", id: "busqueda", entradas }, `${entradas.length} entradas`));

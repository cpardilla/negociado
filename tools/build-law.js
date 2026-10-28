#!/usr/bin/env node
// Builds the app's law data from the BOE snapshots: data/leyes/<CLAVE>.js.
//
// Usage: node tools/build-law.js [CLAVE ...]   (default: the laws marked "completa" in tools/leyes.json)
//
// The articulado only (owner's decision: no disposiciones nor preámbulo for now; `--disposiciones`
// is the switch kept for the future). Every paragraph gets its role once, here:
//   a  starts an apartado ("1. …")        i  a sub-item ("a) …", "1.º …", "Primero. …")
//   p  other paragraph                    t  a table row
// so the law view, the mind map and the reference popover all read the same structure.

"use strict";
const fs = require("fs");
const path = require("path");
const { load } = require("./lib/boe");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "data", "leyes");
const LEYES = JSON.parse(fs.readFileSync(path.join(__dirname, "leyes.json"), "utf8"));

const ORDINAL = /^(?:[a-zñ]\)|\d+\.?\s*[ºª°]|(?:primer[oa]|segund[oa]|tercer[oa]|cuart[oa]|quint[oa]|sext[oa]|s[eé]ptim[oa]|octav[oa]|noven[oa]|d[eé]cim[oa]|und[eé]cim[oa]|duod[eé]cim[oa])[.:])\s/i;

/** Paragraph → [role, text]. */
function role([cls, text]) {
  if (cls === "tabla") return ["t", text];
  if (/^\d+\.\s/.test(text) && !/^\d+\.\s*[ºª°]/.test(text)) return ["a", text];
  if (ORDINAL.test(text)) return ["i", text];
  return ["p", text];
}

function build(clave) {
  const meta = LEYES.find((l) => l.clave === clave);
  const law = load(clave);
  if (!meta || !law) throw new Error(`${clave}: sin instantánea en sources/boe/`);

  // Structure: nested divisions, each listing its sub-divisions and its own articles, in order.
  // Walk the BOE blocks in order; divisions with no article (e.g. a "Disposiciones adicionales"
  // heading) are left out.
  const LEVEL = { libro: 1, titulo: 2, capitulo: 3, seccion: 4 };
  const root = { h: [] };
  const stack = [{ nivel: 0, node: root }];
  const order = new Set(law.orden);
  const divByBlock = new Map(law.divisiones.filter((x) => x.articulos.length).map((x) => [x.bloque, x]));
  const artByBlock = new Map([...law.articulos.values()].map((a) => [a.bloque, a.key]));
  const snap = JSON.parse(fs.readFileSync(path.join(ROOT, "sources", "boe", `${clave}.json`), "utf8"));
  for (const b of snap.bloques) {
    const div = divByBlock.get(b.id);
    if (div) {
      const lvl = LEVEL[div.nivel];
      const node = { n: div.nivel, num: div.numero, t: div.titulo, h: [] };
      while (stack[stack.length - 1].nivel >= lvl) stack.pop();
      stack[stack.length - 1].node.h.push(node);
      stack.push({ nivel: lvl, node });
    } else if (artByBlock.has(b.id) && order.has(artByBlock.get(b.id))) {
      stack[stack.length - 1].node.h.push(artByBlock.get(b.id));
    }
  }

  const articulos = {};
  for (const key of law.orden) {
    const a = law.articulos.get(key);
    articulos[key] = {
      ...(a.numero !== key ? { n: a.numero } : {}), // number as the BOE writes it, when not the key
      r: a.rubrica,
      b: a.bloque, // BOE anchor: …act.php?id=…#<b>
      v: a.vigencia,
      ...(a.norma && a.norma !== law.id ? { m: a.norma } : {}),
      ...(a.sinContenido ? { x: 1 } : {}),
      p: a.parrafos.slice(1).map(role),
    };
  }

  const record = {
    tipo: "ley",
    id: clave,
    nombre: meta.nombre,
    titulo: law.titulo.replace(/\.$/, ""),
    boe: { id: law.id, fecha: law.fecha, url: `https://www.boe.es/buscar/act.php?id=${law.id}` },
    estructura: root.h,
    orden: law.orden,
    articulos,
  };
  fs.mkdirSync(OUT, { recursive: true });
  const file = path.join(OUT, `${clave}.js`);
  fs.writeFileSync(file, `/* Generado por tools/build-law.js desde sources/boe/${clave}.json (BOE ${law.id}, consolidado a ${law.fecha}). No editar. */\nNeg.data.register(${JSON.stringify(record)});\n`);
  // Every article must sit somewhere in the structure, exactly once.
  const seen = [];
  (function walk(list) {
    for (const x of list) typeof x === "string" ? seen.push(x) : walk(x.h);
  })(root.h);
  const placed = new Set(seen).size;
  if (seen.length !== placed) throw new Error(`${clave}: artículos repetidos en la estructura`);
  console.log(`${clave}: ${law.orden.length} artículos (${placed} en la estructura), ${law.divisiones.length} divisiones → ${path.relative(ROOT, file)} (${(fs.statSync(file).size / 1024).toFixed(0)} KB)`);
  if (placed !== law.orden.length) throw new Error(`${clave}: ${law.orden.length - placed} artículos fuera de la estructura`);
}

const wanted = process.argv.slice(2).filter((a) => !a.startsWith("--"));
for (const clave of wanted.length ? wanted : LEYES.filter((l) => l.completa).map((l) => l.clave)) build(clave);

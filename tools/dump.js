#!/usr/bin/env node
// Prints a resource as plain readable text with stable numbered locations, for the manual content
// review (phase 4/5): every statement, in order, with the path to edit it.
//
// Usage: node tools/dump.js esquema <id> [--ley]     (--ley: also the text in force of its articles)
//        node tools/dump.js guia <id> [--ley]
//        node tools/dump.js ley <CLAVE> <art> [<art>…]

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { load } = require("./lib/boe");

const ROOT = path.join(__dirname, "..");
const plain = (h) => String(h || "").replace(/<br>/g, " / ").replace(/<\/?strong>/g, "*").replace(/<\/?em>/g, "_").replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const read = (folder, id) => {
  let rec;
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, "data", folder, `${id}.js`), "utf8"), { Neg: { data: { register: (r) => (rec = r) } } });
  return rec;
};

function law(clave, keys) {
  const l = load(clave);
  for (const k of keys) {
    const a = l.articulos.get(k);
    if (!a) {
      console.log(`\n### ${clave} art. ${k}: NO EXISTE`);
      continue;
    }
    console.log(`\n### ${clave} art. ${a.numero}. ${a.rubrica}  [vigente desde ${a.vigencia}${a.norma !== l.id ? `, ${a.norma}` : ""}]`);
    a.parrafos.slice(1).forEach(([, t]) => console.log(t));
  }
}

function esquema(id, withLaw) {
  const r = read("esquemas", id);
  console.log(`# ${r.titulo} (${r.id}) — ${r.ley} arts. ${r.articulos.join(", ")}\n${plain(r.cabecera.migas)}\n${plain(r.cabecera.subtitulo)}\nEtiquetas: ${r.cabecera.etiquetas.join(" | ")}\nCategorías: ${r.categorias.map((c) => `${c.id} ${c.nombre}`).join(" | ")}`);
  const items = (list, pre, ind) => list.forEach((it, i) => {
    console.log(`${ind}${pre}.${i + 1} ${plain(it.t)}`);
    if (it.sub) items(it.sub, `${pre}.${i + 1}`, ind + "  ");
  });
  const blocks = (list, pre, ind) =>
    list.forEach((b, i) => {
      const p = `${pre}.${i + 1}`;
      if (b.tarjeta) {
        const c = b.tarjeta;
        console.log(`\n${ind}[${p}] FICHA ${plain(c.articulo)} — ${plain(c.titulo)} (${c.categoria}; ${c.etiquetas.map((e) => e.texto).join(", ")})\n${ind}  Resumen: ${plain(c.resumen)}`);
        blocks(c.cuerpo, p, ind + "  ");
        if (c.referencias.length) console.log(`${ind}  Normas: ${c.referencias.join(" · ")}`);
      } else if (b.apartado) {
        console.log(`${ind}[${p}] ## ${plain(b.apartado.titulo)}`);
        blocks(b.apartado.contenido, p, ind + "  ");
      } else if (b.lista) items(b.lista, p, ind);
      else if (b.nota) console.log(`${ind}[${p}] NOTA ${plain(b.nota.etiqueta)}: ${plain(b.nota.texto)}`);
      else if (b.tabla) {
        console.log(`${ind}[${p}] TABLA ${(b.tabla.cabecera || []).map(plain).join(" | ")}`);
        b.tabla.filas.forEach((f, j) => console.log(`${ind}  ${p}.${j + 1} ${f.map(plain).join(" | ")}`));
      } else if (b.norma) console.log(`${ind}[${p}] NORMA ${plain(b.norma.ley)} · ${plain(b.norma.titulo)} · ${plain(b.norma.texto)} [${plain(b.norma.etiqueta)}]`);
      else if (b.grupo) {
        console.log(`${ind}[${p}] GRUPO ${plain(b.grupo.titulo)}`);
        items(b.grupo.items || [], p, ind + "  ");
      } else if (b.paso) {
        console.log(`${ind}[${p}] FASE ${b.paso.n || ""} ${plain(b.paso.titulo)} ${plain(b.paso.texto)}`);
        items(b.paso.items || [], p, ind + "  ");
      } else if (b.p !== undefined) console.log(`${ind}[${p}] ${plain(b.p)}`);
    });
  r.secciones.forEach((s, i) => {
    if (s.capitulo) return console.log(`\n=== CAPÍTULO ${s.capitulo.numero} ${s.capitulo.nombre}`);
    console.log(`\n=== [S${i + 1}] ${s.titulo} (${s.recuento || ""})`);
    blocks(s.bloques, `S${i + 1}`, "");
  });
  if (r.pie) console.log(`\nPie: ${plain(r.pie)}`);
  if (withLaw) law(r.ley, r.articulos);
}

function guia(id, withLaw) {
  const r = read("guias", id);
  console.log(`# ${r.titulo} (${r.id}) — fases: ${r.fases.map((f, i) => `${i}:${plain(f)}`).join(" | ")}\nActores: ${JSON.stringify(r.actores)}\nInicio: ${r.inicio}`);
  for (const [k, p] of Object.entries(r.pasos)) {
    console.log(`\n[${k}] (fase ${p.fase}, ${p.actor}${p.fin ? `, FIN ${p.fin}` : ""}) ${plain(p.titulo)}`);
    for (const b of p.bloques) {
      if (b.tipo === "lista") console.log(`  ${b.marcar ? "☐" : "•"} ${plain(b.titulo)}: ${b.items.map(plain).join(" ‖ ")}`);
      else console.log(`  ${b.tipo.toUpperCase()}: ${plain(b.texto)}`);
    }
    if (p.pregunta) console.log(`  ? ${plain(p.pregunta)}`);
    (p.opciones || []).forEach((o, i) => console.log(`    ${String.fromCharCode(65 + i)}) ${plain(o.texto)}${o.nota ? ` (${plain(o.nota)})` : ""} → ${o.destino}`));
    if (p.siguiente) console.log(`  → ${p.siguiente}`);
  }
  if (r.pie) console.log(`\nPie: ${plain(r.pie)}`);
  if (withLaw) law(r.ley, r.articulos);
}

const [kind, id, ...rest] = process.argv.slice(2);
if (kind === "esquema") esquema(id, rest.includes("--ley"));
else if (kind === "guia") guia(id, rest.includes("--ley"));
else if (kind === "ley") law(id, rest);
else console.error("Uso: node tools/dump.js esquema|guia <id> [--ley] · ley <CLAVE> <art>…");

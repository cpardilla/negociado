# Revisión · E28 · LJV · Conciliación (arts. 139–148)

- **Recurso**: `data/esquemas/ljv-conciliacion.js` (origen E28). Uno de los tres más usados (decisión 6): atención especial.
- **Fecha de revisión**: 2026-10-30.
- **Corte del BOE**: LJV a 05-03-2026; CC, LEC y LOPJ (redacción de la LO 1/2025) en sus instantáneas.
- **Método**: como E01–E27; decisiones 9 y 10. **Rehecho**: 31 fichas (10 artículos, 9 de la LEC y 12 del CC) con abundantes afirmaciones sin base y numeraciones erróneas → 11 fichas (una por artículo, para conservar el enlace directo y la búsqueda, más una de la transacción en el CC), comprobadas una a una, más plazos (8), participantes y normas.
- **Pruebas**: `tests/app.test.js` usaba este esquema como muestra (31 fichas, «Pendiente de revisión»); se actualizan sus cifras (11 fichas, 4 normas, 3 grupos, etiqueta «Revisado con el BOE»). El enlace directo al art. 148 y el orden de la búsqueda «conciliación celebración» siguen igual.
- **Resultado del comprobador**: 0 errores, 0 avisos; «revisar» intencionados (denominaciones legales del art. 140 y «Juez de Paz», que sigue existiendo: art. 99 LOPJ).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 140 | **error** | Juez de Paz por cuantía «inferior a 6.000 €; el umbral coincide con el art. 45 LEC» | Art. 140.1 LJV: inferior a 6.000 €; art. 47.2 LEC (art. 22.8 LO 1/2025, desde el 3-4-2025): conciliación civil de cuantía inferior a 10.000 €. Discordancia señalada — **pregunta al propietario**. El art. 45 LEC no trata de esto | LJV, LEC |
| 2 | CC (fichas 1810–1818) | **error** | «1810: capacidad para obligarse»; «1811: cualquier materia de libre disposición»; «1812: comunicación de documentos»; «1815: materias no transigibles»; «1817: cosa juzgada»; «1818: nulidad por vicios» | Textos reales: 1810–1812 (hijos, tutor y curador, corporaciones), 1813 (acción civil de delito), 1814 (no transigibles), 1815 (alcance), 1816 (cosa juzgada), 1817 (vicios → art. 1265) | CC |
| 3 | LEC (fichas) | **error** | «Art. 518: caducidad de 5 años aplicable al acta»; «art. 520: requerimiento de pago en 5 días»; «art. 556: oposición, incluida la acción de nulidad» | Retirados: el art. 518 no menciona la avenencia en conciliación; el art. 520 no dice eso. Oposición por las causas del art. 557 LEC (títulos del art. 517.2.9.º), que suspende la ejecución | LEC |
| 4 | 140 | **error** | «Juzgados de lo Mercantil: art. 483 LOPJ modificado por la Ley 7/2015»; «Bruselas I bis»; «arts. 52.2 y 410 LEC» | Sección de lo Mercantil (art. 87 LOPJ); lo demás, retirado | LOPJ |
| 5 | 139 | **error** | «Responsabilidad civil de jueces: Sala de lo Civil del TS (arts. 295 y ss. LOPJ)»; «intervención preceptiva del Fiscal (arts. 15 y 17 LJV)» | Retirados (sin base); se añade cómo se inadmite (decreto, art. 17.1 LJV) y su recurso | LJV |
| 6 | 143 | error | «Interrumpe también la caducidad de acciones»; «doctrina del TS»; «el desistimiento impide la interrupción» | Retirados; texto del art. 143 y art. 1973 CC | CC |
| 7 | 144 | error | «Arts. 1101 y ss. CC: responsabilidad extracontractual»; causas «típicas» de justa causa; alcance de la indemnización | Retirados (el art. 1101 es contractual; el resto, sin base) | CC |
| 8 | 147 | error | «Equipara la avenencia a una sentencia firme»; «art. 1216 CC y plenos efectos frente a terceros»; «cosa juzgada material» | Texto del art. 147 (título ejecutivo; valor de documento público y solemne) y art. 1816 CC (cosa juzgada entre las partes) | LJV, CC |
| 9 | Plazos | error | «5 días (art. 520 LEC)», «5 años (art. 518 LEC)» | Plazos de la LJV y oposición en 10 días (arts. 556.1 y 557.1 LEC) | LEC |
| 10 | 148 | incompleto | Recursos sin tratar | Contra la inadmisión, revisión (art. 20.2 LJV); contra lo convenido, solo la acción de nulidad; la indemnización del art. 144.2 sin recurso | LJV |
| 11 | Ecosistema | error | «LO 1/2015 reformó el art. 440 LEC», «Disp. Adic. 3.ª LJV», «Disp. Final 7.ª LJV», LEC de 1881, Ley de Mediación, Ley de Arbitraje, LJS, CE | Retirados (no comprobados o ajenos al expediente; decisión 9) | — |
| 12 | Varias | desfasado | «Secretario judicial» (× 17), Juzgado de Primera Instancia / de lo Mercantil | Letrado de la Administración de Justicia; Secciones Civil y de lo Mercantil del Tribunal de Instancia | LO 7/2015, LO 1/2025 |

## Preguntas y pendientes

1. **Umbral del Juez de Paz**: ¿qué cuantía aplica el juzgado, la de 6.000 € del art. 140.1 LJV o la de 10.000 € del art. 47.2 LEC (LO 1/2025)?
2. **Medios adecuados de solución de controversias (LO 1/2025)**: no se ha podido comprobar si el acto de conciliación de la LJV sirve como requisito de procedibilidad, porque la LO 1/2025 no tiene instantánea y la API del BOE respondía con error 500 el 2026-10-30. El esquema no afirma nada sobre esto; queda pendiente.

## Para la fase 5 (G25)

La guía cita «art. 140.3» (el art. 140 tiene dos apartados) y «art. 3.5» LJV (tiene dos), y usa «JPI» × 3, «Juzgado de Primera Instancia» × 2 y «Juzgado de lo Mercantil» × 2. Revisar también el umbral de cuantía y cualquier cita a los arts. 518 y 520 LEC.

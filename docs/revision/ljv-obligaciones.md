# Revisión · E24 · LJV · Expedientes en materia de obligaciones (arts. 96–99)

- **Recurso**: `data/esquemas/ljv-obligaciones.js` (origen E24).
- **Fecha de revisión**: 2026-10-30.
- **Corte del BOE**: LJV a 05-03-2026; CC, LEC, LN y LOPJ en sus instantáneas.
- **Método**: como E01–E23; decisiones 9 y 10. **Corregido, no rehecho**: las fichas de los arts. 96–99 LJV y de los arts. 1128 y 1176–1181 CC reproducen fielmente el texto; faltaban los recursos y sobraban jurisprudencia sin cita y normas ajenas.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (denominación legal del art. 98.2).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 96, ecosistema | jurisprudencia | «Presupuestos exigidos por la jurisprudencia»: principio rogatorio e «incongruencia extra petita» (art. 24 CE) | Retirado (decisión 10: sin cita verificable) | — |
| 2 | 98, participantes | **error** | Legitimación del tercero «conforme a los arts. 1158, 1159 y 1210.2 CC» | Art. 1178 CC (deudor o tercero) y art. 1158 CC (pago por tercero); el art. 1159 trata de la subrogación y el 1210.2.º es una presunción de subrogación | CC |
| 3 | 96–99 | incompleto | Sin régimen de recursos | Fijación del plazo: auto y apelación en veinte días, sin efectos suspensivos. Consignación: revisión en cinco días contra los decretos del LAJ; apelación contra el auto del Juez. Abogado y procurador para recurrir (art. 3.2 LJV) | LJV, LEC |
| 4 | 97 | incompleto | Oposición → contencioso sin situar | Es una de las excepciones a la regla del art. 17.3 LJV | LJV |
| 5 | Ecosistema | error | «Art. 456 LOPJ: competencias del Secretario judicial…»; Ley 13/2009; RDL 1/2007 como fundamento del fuero del consumidor | Art. 85 LOPJ (Secciones Civiles) y art. 456.6 b) LOPJ; retirados los demás (decisión 9) | LOPJ |
| 6 | 97, 98 | desfasado | Juzgado/Juez de Primera Instancia; «Secretario judicial» (× 12) | Sección Civil del Tribunal de Instancia; Letrado de la Administración de Justicia | LO 1/2025, LO 7/2015 |
| 7 | Ecosistema | cita | «Artículos 437 y siguientes», «Artículo 69», «Artículo 70» leídos como LJV o LEC equivocada | Con su sigla: LEC, LN | — |

## Para la fase 5 (G21)

La guía repite «arts. 1158, 1159 y 1210.2» (tres pasos), «Secretario judicial» × 8 y «Juzgado de Primera Instancia» × 2.

---

# Revisión · G21 · Guía de tramitación de los expedientes de Derecho de obligaciones (Título V)

- **Recurso**: `data/guias/ljv-obligaciones.js` (origen G21).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; CC, LN, LEC y LOPJ en sus instantáneas.
- **Método**: fase 5. La guía seguía con fidelidad los arts. 96 a 99 LJV y los arts. 1128 y 1176 a 1181 CC (todos comprobados): **corregida**; se conservan los 36 pasos.
- **Resultado del comprobador**: 0 errores, 0 avisos; queda la denominación legal «Juzgado de Primera Instancia» (art. 98.2 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | fin_no_procede_cg | **error** | El LAJ «da cuenta al Juez para que dicte auto de inadmisión» | Si la solicitud no reúne los requisitos, el LAJ dicta decreto y manda devolver lo consignado (art. 99.2); revisión ante el Juez | LJV 99.2, 20.2 |
| 2 | cg_legitimacion | error | «Art. 1210.2 CC» | Art. 1210.2.º CC (ordinal) | CC 1210 |
| 3 | fin_derivacion_notarial, cg_ambito | error | «Art. 98.1, segundo inciso» (no existe); la vía notarial «no corresponde a la jurisdicción civil» | Vía alternativa ante Notario (art. 69 LN; art. 1178 CC) | LN 69; CC 1178 |
| 4 | fp_presupuestos, fin_inadmision_fp | impreciso | Presupuestos «que exige la jurisprudencia»; «incongruencia extra petita… art. 24 CE» | Solo los del art. 96 (a instancia de alguno de los sujetos); sin jurisprudencia no verificada (decisión 10); si no es admisible, cuenta al Juez (art. 17.1) | LJV 17.1, 96 |
| 5 | fp_resolucion, fin_* | incompleto | Sin plazo de resolución ni recursos | Auto en cinco días (art. 19.1); apelación de los autos (art. 20.2; art. 458 LEC) y revisión de los decretos del LAJ (art. 454 bis LEC) | LJV 19, 20 |
| 6 | fin_incompetencia_* | impreciso | «Normas comunes sobre competencia» | Art. 16.3: el LAJ da cuenta al Juez, que remite oídos el Fiscal y el solicitante | LJV 16.3 |
| 7 | varios, actores | terminología | «Secretario judicial» × 8; «Juez de Primera Instancia» como actor | LAJ (LO 7/2015); «Juez»; hoy, Sección Civil en los pasos de competencia | LO 7/2015; LOPJ |

Se confirma lo que la guía ya decía: en la fijación del plazo, la oposición **sí** hace contencioso el expediente, por previsión expresa del art. 97.3 LJV (excepción a la regla del art. 17.3).

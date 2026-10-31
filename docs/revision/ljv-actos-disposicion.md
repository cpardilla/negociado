# Revisión · E19 · LJV · Actos de disposición, gravamen u otros sobre bienes de menores y personas con discapacidad (arts. 61–66)

- **Recurso**: `data/esquemas/ljv-actos-disposicion.js` (origen E19).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; CC, Ley 41/2003 (`LPPD`), LEC y LOPJ en sus instantáneas.
- **Método**: como E01–E18; decisiones 9 y 10. **Corregido, no rehecho**: las fichas de los arts. 61–66 reproducen fielmente el texto vigente (redacción de la Ley 8/2021); los errores estaban en las remisiones al CC y a la Ley 41/2003 y en lo que faltaba.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (denominación legal del art. 62.1).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 61 | **error** | Las «tramitaciones específicas» excluidas serían la partición (art. 1060 CC), la liquidación de gananciales, el albaceazgo y la guarda de hecho | La partición sí va por este capítulo (art. 63.1 LJV: «operaciones particionales»; aprobación posterior, arts. 289 y 1060 CC); la guarda de hecho también (art. 264 CC). La tramitación específica relevante es la aceptación sin beneficio de inventario o repudiación de la herencia (arts. 93–95 LJV) | LJV, CC |
| 2 | 61 | **error** | La autorización para repudiar la herencia del hijo (art. 166 CC), dentro de este expediente | Se pide por los arts. 93–95 LJV (si se deniega, solo cabe aceptar a beneficio de inventario) | LJV art. 93.2, CC art. 166 |
| 3 | 61 | **error** | Ley 41/2003, art. 5: «las reglas de administración deberán prever la autorización judicial en los mismos supuestos que el curador representativo» (redacción anterior a 2021) | Art. 5.2 vigente: administración según el documento de constitución, con apoyos o salvaguardas, y nunca subasta pública; art. 5.3: excepción de la autorización a instancia del Fiscal | Ley 41/2003 (Ley 8/2021) |
| 4 | 65 | incompleto | Sin el apartado 2 | Suprimido por la Ley 8/2021 (exigía pública subasta); hoy, venta directa (art. 63.3 LJV; art. 287.2.º CC: regla para el curador) | LJV, CC |
| 5 | 61 | incompleto | Art. 287 CC sin los actos dispositivos inscribibles ni la regla de venta directa; art. 264 CC sin la audiencia de la persona ni las excepciones | Añadidos | CC |
| 6 | 65, 62 | incompleto | Apelación sin plazo ni postulación | Veinte días (art. 458.1 LEC); abogado y procurador para apelar (art. 3.2 LJV) | LEC, LJV |
| 7 | Tabla | error | «Artículo 287.3 CC» (arrendamiento > 6 años) | Art. 287.2.º CC | CC |
| 8 | Participantes | error | «Abogado preceptivo sobre 6.000 € o por complejidad» | No preceptivo hasta 6.000 €; por encima, la solicitud inicial puede hacerse sin él y el Juez puede ordenarlo; necesario para apelar | LJV arts. 3.2, 62.3 |
| 9 | Ecosistema | error | «Art. 42 bis LJV»; «art. 289 CC: régimen de la curatela asistencial»; «art. 665 CC» (testamento, ajeno al expediente); «art. 1548: límite sin autorización judicial» | Arts. 42 bis a)–c); art. 289: partición por el curador con aprobación posterior; 665 retirado; art. 1548: límite de seis años sin más | LJV, CC |
| 10 | 66 | matiz | «Ejemplos de medidas: consignación, depósito, reinversión tutelada» | Se advierte que la ley no las enumera | LJV art. 66 |
| 11 | 62 | desfasado | Juzgado de Primera Instancia | Sección de Familia, Infancia y Capacidad (art. 86.5 j) LOPJ) o, si no existe, Sección Civil | LO 1/2025 |
| 12 | Ecosistema | error | «Ley 8/2021: … autotutela» | Autocuratela, poderes y mandatos preventivos (arts. 255–274 CC) | CC |
| 13 | Varias | cita | «LPPPD art. 5/7» (sigla no reconocida); «Código Civil arts. …» leído como LJV | Ley 41/2003; «arts. … CC» | — |

## Para la fase 5 (G16)

La guía repite el pie con «Código Civil arts. 166, 249, 264, 269, 287, 1060» (leído como otra ley) y dice «Juzgado de Primera Instancia» en tres pasos.

---

# Revisión · G16 · Guía de tramitación de la autorización o aprobación de actos de disposición

- **Recurso**: `data/guias/ljv-actos-disposicion.js` (origen G16).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026 (art. 65 en la redacción de la Ley 8/2021, comprobada en el historial del BOE: el apartado 2 está suprimido y los 3 a 5 siguen vigentes); CC, Ley 41/2003, LEC y LOPJ en sus instantáneas.
- **Método**: fase 5. Se conservan los 44 pasos y sus identificadores; se corrigen el recorrido de las exenciones del art. 166 CC y los bloques erróneos.
- **Resultado del comprobador**: 0 errores, 0 avisos; el pie mal leído («Código Civil arts.…» atribuido a la Ley 41/2003) está corregido; queda la denominación legal «Juzgado de Primera Instancia» (art. 62.1 LJV), con la sección actual indicada en los tres pasos.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | res_venta | **desfasado** | Sin venta directa, «régimen ordinario de enajenación judicial, que incluye la subasta» | La Ley 8/2021 suprimió la regla de la pública subasta (art. 65.2 LJV); el curador vende por venta directa salvo que el Tribunal considere necesaria la subasta (art. 287.2.º CC); en el patrimonio protegido, sin subasta (art. 5.2 Ley 41/2003) | LJV 65; CC 287; Ley 41/2003 5.2 |
| 2 | menor_exencion16, menor_exencion_valores | **error de recorrido** | El mayor de dieciséis que consiente en documento público iba a la pregunta de los valores mobiliarios; si no eran valores, se le exigía autorización | Esa exención basta por sí sola; la de los valores con reinversión es alternativa | CC 166 |
| 3 | pat_exencion, fin_exencion_patrimonio | **error** | La excepción de la autorización la «estima el Ministerio Fiscal» | El Fiscal la solicita y la concede el Juez (art. 5.3 Ley 41/2003; art. 56 c) LJV) | Ley 41/2003 5.3; LJV 56 c) |
| 4 | patrimonio_tipo | desfasado | Las reglas de administración «deberán prever la autorización judicial en los mismos supuestos que el curador» | La autorización se exige cuando resulta de las reglas de administración o de las salvaguardas (art. 5.2 tras la Ley 8/2021); sin subasta; el gasto para necesidades vitales no es disposición | Ley 41/2003 5.2 |
| 5 | menor_tramit_esp, disc_tramit_esp, fin_tramit_especifica | error | Tramitaciones específicas: «partición (art. 1060 CC), liquidación de gananciales, albaceazgo, guarda de hecho» | La aprobación de la partición del art. 1060 CC va por este capítulo (art. 63.1 menciona las operaciones particionales); la autorización del guardador también (art. 61; art. 52.3); quitados los ejemplos sin base | LJV 61, 63.1; CC 1060 |
| 6 | menor_cc166 | error | Incluía «todo acto de disposición, gravamen u otro… por causas justificadas» como acto sujeto | Solo los del art. 166 (renuncia; enajenación o gravamen de los bienes citados; repudiación, con aceptación a beneficio de inventario si se deniega); tutor del menor por el art. 224 CC; nota sobre «Juez del domicilio» frente al art. 62.1 LJV | CC 166, 224 |
| 7 | disc_curador | impreciso | Lista resumida del art. 287 con mezclas | Los nueve ordinales del art. 287 con sus salvedades; venta directa (2.º); audiencia del Fiscal y de la persona (art. 290) | CC 287, 290 |
| 8 | disc_guardador | incompleto | — | Excepciones del art. 264 CC y entrevista del art. 52.3 LJV | CC 264; LJV 52.3 |
| 9 | competencia_* | desfasado | Bloques «plazo» que no lo eran | Hoy, Sección de Familia, Infancia y Capacidad (art. 86.5 j) LOPJ) o Sección Civil | LOPJ 86.5 |
| 10 | postulacion_* | impreciso | «LJV art. 4; LEC»; el Juez puede ordenar «abogado y procurador»; «abogado de oficio» | Art. 62.3: el Juez puede ordenar, de oficio, la actuación por medio de abogado (no de procurador); asistencia jurídica gratuita si procede | LJV 62.3 |
| 11 | tramitacion_admision, resolucion, res_recurso, fin_denegacion_firme | incompleto | Sin plazos; «responsabilidad penal»; «se agota la vía judicial» | Citación con quince días y comparecencia en treinta (arts. 17.3 y 18.1); auto en cinco días (art. 19.1); causas de utilidad o necesidad (art. 166) y audiencia del art. 290 CC; apelación en veinte días (art. 458 LEC); responsabilidad de los arts. 234 y 294 CC; nueva solicitud si cambian las circunstancias (art. 19.3) | LJV 17–19, 65.5; LEC 458 |
| 12 | res_gravamen, solicitud_* | impreciso | «Art. 1060 CC» en el gravamen; «sin dictamen no prosperará»; «todo debe acreditarse documentalmente» | Art. 65.4; requisito del dictamen del art. 63.3; documentos del art. 63.1 | LJV 63, 65.4 |
| 13 | actores, pie, citas | forma | «LAJ», «Ambos»; «LPPPD» | Nombres completos; «Ley 41/2003»; pie con las normas citadas | — |

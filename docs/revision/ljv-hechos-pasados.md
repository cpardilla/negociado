# Revisión · E22 · LJV · Declaraciones judiciales sobre hechos pasados (arts. 80 bis–80 quinquies)

- **Recurso**: `data/esquemas/ljv-hechos-pasados.js` (origen E22).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026 (arts. 80 bis–80 quinquies vigentes desde el 21-10-2022, BOE-A-2022-17099); LEC y LOPJ en sus instantáneas.
- **Método**: como E01–E21; decisiones 9, 10 y 11. **Corregido, no rehecho**: las fichas de los cuatro artículos reproducen fielmente el texto; los errores estaban en el marco general, la sección competente, los recursos y el ecosistema.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (denominación legal del art. 80 ter).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | Marco, plazos, ecosistema | **error** | «DA 1.ª LO 1/2025: las referencias a los Juzgados de Primera Instancia se entienden hechas a las secciones civiles; implementación hasta el 31-12-2025»; «dispensa de acudir a medios adecuados de solución de controversias» | Retirado (sin comprobar); órgano según el art. 86.5 j) LOPJ | — |
| 2 | Marco, 80 ter | **error** | Sección civil del Tribunal de Instancia | Por estar en el Título II, el art. 86.5 j) LOPJ lo atribuye, donde exista, a la Sección de Familia, Infancia y Capacidad (la excepción solo abarca los capítulos IX y X); si no, Sección Civil — **pregunta al propietario** | LOPJ |
| 3 | Marco | error | Remisión al «art. 89.6 g) LOPJ» como «supuesto alternativo» para identificar la sección | Retirado: el art. 89.6 regula la competencia civil de las Secciones de Violencia sobre la Mujer en supuestos tasados | LOPJ |
| 4 | Marco | error | «Información para perpetua memoria, arts. 2002–2010 LEC 1881»; «Exposición de motivos de la Ley 20/2022, apartado IV» | Retirados (sin comprobar; decisión 9) | — |
| 5 | 80 quinquies, plazos | incompleto | Recursos sin plazo ni efectos | Reposición en cinco días (art. 452 LEC); apelación en veinte (art. 458.1 LEC), sin efectos suspensivos (art. 20.2 LJV), con abogado y procurador (art. 3.2 LJV) | LEC, LJV |
| 6 | Ecosistema | error | «Art. 11 LJV: régimen general del acceso registral»; Estatuto del Ministerio Fiscal | Retirados (el art. 11 trata de resoluciones extranjeras) | LJV |

## Pregunta para el propietario

La letra j) del art. 86.5 LOPJ atribuye a la Sección de Familia, Infancia y Capacidad «los expedientes de jurisdicción voluntaria en materia de personas y familia», salvo los capítulos IX y X del Título II (decisión 11). Este expediente es el capítulo XI del Título II («en materia de personas»), así que, leído al pie de la letra, iría a la Sección de Familia donde exista. Por su objeto (hechos de cualquier naturaleza) podría entenderse que no es materia «de personas». Así lo dice ahora el esquema; si en Las Palmas se reparte a la Sección Civil, se cambia.

## Para la fase 5 (G19)

La guía dice «JPI» × 2 y «Juzgado de Primera Instancia» × 1 en el paso «competencia».

## Respuesta del propietario (2026-10-30) — decisión 12

Competente: Juzgado de Primera Instancia, hoy la **Sección Civil** del Tribunal de Instancia (art. 85 LOPJ). No se trata como materia de personas y familia del art. 86.5 j) LOPJ.

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| D12 | Marco, 80 ter, participantes, ecosistema | criterio | Sección de Familia, Infancia y Capacidad donde exista (art. 86.5 j) LOPJ) | Sección Civil del Tribunal de Instancia | LOPJ art. 85; decisión 12 |

---

# Revisión · G19 · Guía de tramitación de las declaraciones judiciales sobre hechos pasados

- **Recurso**: `data/guias/ljv-hechos-pasados.js` (origen G19).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026 (capítulo XI añadido por la disposición final 3.ª de la Ley 20/2022, comprobado en la instantánea); LEC y LOPJ en sus instantáneas.
- **Método**: fase 5. La guía seguía fielmente los arts. 80 bis a 80 quinquies: **corregida**; se conservan los 20 pasos.
- **Resultado del comprobador**: 0 errores, 0 avisos; queda la denominación legal «Juzgado de Primera Instancia» (art. 80 ter.1 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | competencia | **error** | Sección por el «art. 86.5 j) o, en su caso, el art. 89.6 g) LOPJ»; «LO 1/2025, disp. adic. 1.ª»; opciones con «JPI» | Sección Civil (decisión 12: no es materia de personas y familia), como en el esquema; fueros del art. 80 ter.1 con sus palabras | LJV 80 ter.1; decisión 12 |
| 2 | actuaciones_probatorias, comparecencia | error | «Art. 80 quáter.4» (plazo de cinco días) y «80 quáter.5-6» (comparecencia) | Art. 80 quáter.3, párrafos segundo y tercero; art. 80 quáter.4 (y .6 para la oposición); qué se puede pedir en los cinco días | LJV 80 quáter |
| 3 | check_inscribible, inscripcion_registral, fin_exito_inscripcion | error | Cita del «art. 11 LJV» (es el de las resoluciones extranjeras); «se procede a la inscripción» | Art. 22.2: mandamiento a instancia de parte, por medios electrónicos, con calificación limitada del registrador | LJV 22.2 |
| 4 | check_condiciones, fin_no_viable | impreciso | Las verificaba «el Juez»; condición 5.ª «procedimiento indicado (carácter subsidiario)» | Las examina el LAJ y, si falta alguna, da cuenta al Juez, que decide por auto oídos el Fiscal y el solicitante (art. 80 quáter.2); «legalmente indicado»; apelación (art. 80 quinquies.2) | LJV 80 bis.2, 80 quáter.2 |
| 5 | recursos, actores | forma | «Art. 80 quinquies» sin apartado; «LAJ», «Ambos» | Art. 80 quinquies.1 (reposición) y .2 (apelación); nombres completos | LJV 80 quinquies |

## Corrección posterior (2026-11-03) · Relectura, cuarta tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda4.md`, aplicados con el visto bueno del propietario.

### Guía

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 9 | check_condiciones; se suprime fin_no_viable | Fin del recorrido sin decisión | Dación de cuenta al Juez, que decide por auto | LJV 80 quáter.2 |
| 12 | comparecencia | Arts. 437 y ss. LEC | Arts. 443 y ss. LEC | LEC 443 |
| 13 | comparecencia | Actor «Juez / LAJ» | Juez | LJV 18.1, 80 quáter.5 |
| 15 | control_laj, admision_tramite, comparecencia; nuevos subsanacion y fin_desistido | Sin reglas generales | Cinco, quince y treinta días; archivo por desistimiento | LJV 13, 16.4, 17.3, 18.1, 18.2.1.ª |
| 16 | auto_juez_admision, juez_oposicion, resolucion_5dias | Sin plazo ni postulación | Veinte días, con abogado y procurador | LEC 458.1; LJV 3.2 |
| 17 | inicio | «perpetua memoria» | Suprimido, como en el esquema | Sin comprobar |
| 18 | fin_exito | «no tendría interés en recurrir» | Suprimido | Sin fuente |

### Esquema (misma tanda)

| # | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 10 | Índice de plazos | Art. 80 quater, apartado 4 | Apartado 3 | LJV 80 quáter.3 |
| 11 | Índice de plazos | «3 trámites» con 4 filas | «4 trámites» | Coherencia interna |
| 14 | Ecosistema | «Testimonio» | «Mandamiento» | LJV 22.2, párrafo segundo |

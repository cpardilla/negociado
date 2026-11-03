# Revisión · E27 · LJV · Subastas voluntarias (arts. 108–111)

- **Recurso**: `data/esquemas/ljv-subastas.js` (origen E27).
- **Fecha de revisión**: 2026-10-30.
- **Corte del BOE**: LJV a 05-03-2026; LEC (redacción de la LO 1/2025) y LOPJ en sus instantáneas.
- **Método**: como E01–E26; decisiones 9 y 10. **Corregido, no rehecho**: los arts. 108–111 LJV están bien reproducidos; el hallazgo principal es una remisión que la LO 1/2025 dejó vacía.
- **Resultado del comprobador**: 1 «error» intencionado (la cita literal del art. 110.3 LJV al art. 641 LEC, hoy sin contenido); «revisar» intencionados (denominación legal del art. 109 y mención histórica del «Secretario judicial» en la LO 7/2015).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 110, participantes, ecosistema | **error** | Art. 641 LEC descrito como vigente («entidades especializadas, previa caución, precio mínimo y plazos») | Sin contenido desde el 3-4-2025 por el art. 22.54 de la LO 1/2025 (BOE-A-2025-76; suprime también la Sección 4.ª); la realización por persona o entidad especializada figura en el convenio de realización del art. 640 LEC. Remisión vacía del art. 110.3 LJV — **pregunta al propietario** | LEC |
| 2 | 111 | **error** | LEC aplicable: «arts. 644 a 680 para inmuebles y 643 a 654 para muebles» | Arts. 643–654 (muebles) y 655–675 (inmuebles y muebles con publicidad registral similar) | LEC |
| 3 | 110 | error | Omitir a los ocupantes «puede generar nulidad y responsabilidad por vicios ocultos» | Retirado (sin base en el texto) | — |
| 4 | 111 | error | El testimonio del decreto «equivale funcionalmente a una escritura pública de compraventa» | Retirado; queda lo que dice la ley: título suficiente para la inscripción | LJV |
| 5 | 111, plazos | incompleto | Sin recursos | Revisión ante el Juez en cinco días contra los decretos del LAJ (art. 20.2 LJV; art. 454 bis LEC), con abogado y procurador | LJV, LEC |
| 6 | Ecosistema | error | Ley 14/2013 («introdujo la comunicación electrónica…»), Orden HAP/1335/2012, reglamentos de registros sectoriales | Retirados (no comprobados; decisión 9) | — |
| 7 | 110 | matiz | «Contenido típico del pliego» presentado como si fuera legal | Marcado como práctica: la ley solo exige la valoración | LJV |
| 8 | 109, 111 | desfasado | Juzgado de Primera Instancia; «Secretario judicial» (× 16); «Decremento aprobatorio» (errata) | Sección Civil del Tribunal de Instancia; Letrado de la Administración de Justicia; «Decreto aprobatorio» | LO 1/2025, LO 7/2015 |

## Pregunta para el propietario

El art. 110.3 LJV permite pedir la venta «por persona o entidad especializada» con sujeción al art. 641 LEC, que la LO 1/2025 dejó sin contenido (3-4-2025). ¿Cómo se tramita hoy en el juzgado esa petición en una subasta voluntaria (aplicando por analogía el art. 640 LEC, denegándola, de otro modo)? El esquema advierte de la remisión vacía y no afirma ninguna solución.

## Para la fase 5 (G24)

La guía cita el art. 641 LEC como vigente en cinco lugares (pasos «modo_venta» y «especializada»), y usa «Secretario judicial» × 14 y «Juzgado de Primera Instancia» × 3.

**Confirmación del propietario (2026-10-30)**: nota del BOE — «Se deja sin contenido, con efectos de 3 de abril de 2025, por el art. 22.54 de la Ley Orgánica 1/2025, de 2 de enero. Ref. BOE-A-2025-76». Coincide con la instantánea de `sources/boe/LEC.json`. Sigue abierta la pregunta sobre la práctica del juzgado.

## Criterio del propietario (2026-10-30) — decisión 13

Respuesta a la pregunta sobre el art. 110.3 LJV, incorporada a la ficha del art. 110 («Criterio del juzgado tras la LO 1/2025»):

- El art. 110.3 LJV sigue vigente y es habilitación propia: la petición de venta por persona o entidad especializada se admite y el LAJ decide si procede. El vaciado de los arts. 641 y 642 LEC (art. 22.54 LO 1/2025; ambos comprobados en la instantánea) no la deroga.
- Lo no regulado se integra por el art. 8 LJV con las normas compatibles de la LEC; no se aplica mecánicamente el antiguo art. 641; el art. 640 LEC sirve de referencia para garantías (terceros, aprobación de la transmisión, cargas).
- No se equipara a la subasta electrónica del art. 111.4 LJV.
- La resolución que la acuerde fija las condiciones (rendición de cuentas, pago, adquirente, aprobación posterior de la transmisión por el LAJ, documentación e inscripción). Documentación adicional conveniente, marcada como práctica.

No se ha incorporado la mención a la Ley 7/1996 de Ordenación del Comercio Minorista (arts. 56–61): no hay instantánea del BOE para comprobarla y el propio planteamiento indica que su art. 56.2 excluye las subastas judiciales (decisión 9).

---

# Revisión · G24 · Guía de tramitación de las subastas voluntarias (Título VII)

- **Recurso**: `data/guias/ljv-subastas.js` (origen G24).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; LEC a 07-10-2026 (art. 641 sin contenido desde el 3-4-2025, art. 22.54 LO 1/2025, comprobado); LOPJ en su instantánea.
- **Método**: fase 5. La guía seguía fielmente los arts. 108 a 111 LJV: **corregida**; se conservan los 32 pasos. Aplicada la decisión 13, como en E27.
- **Resultado del comprobador**: 0 errores, 0 avisos (antes: 5 errores por el art. 641 LEC); queda la denominación legal «Juzgado de Primera Instancia» (art. 109.1 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | modo_venta, especializada | **error** | Venta por persona o entidad especializada «con sujeción al art. 641 LEC» (requisitos, caución, precio mínimo, plazos) como vigente | El art. 641 está sin contenido (LO 1/2025); la habilitación del art. 110.3 LJV sigue: el LAJ decide; integración por el art. 8 LJV con el art. 640 LEC como referencia; no se equipara a la subasta electrónica; la resolución fija las condiciones (decisión 13) | LJV 8, 110.3; LEC 640; LO 1/2025 |
| 2 | pliego | **error** | El pliego «rige en todo aquello no previsto por la LEC» | Al revés: la publicidad y la celebración se ajustan a la LEC en lo no previsto en el pliego (art. 111.5) | LJV 111.5 |
| 3 | testimonio | inventado | El testimonio «equivale a una escritura pública de compraventa» | Título suficiente para las inscripciones (art. 111.8) | LJV 111.8 |
| 4 | arrendatarios, fin_concurso | inventado | Omitir a los ocupantes causa «nulidad de actuaciones y responsabilidad»; «remitir las actuaciones al juez del concurso» | Finalidad de las comunicaciones del art. 661 LEC; estar a la legislación concursal | LEC 661 |
| 5 | competencia_* | impreciso | Art. 109.1 «párrafo primero / segundo»; fuero «imperativo»; «a elección del solicitante» | Primer y segundo inciso (un solo párrafo); sin sumisión (art. 2.2); texto legal; hoy Sección Civil | LJV 2.2, 109.1 |
| 6 | fin_inadmision, decreto_adjudicacion | incompleto | Sin recursos | Revisión ante el Juez contra los decretos del LAJ (art. 20.2 LJV; art. 454 bis LEC) | LJV 20.2 |
| 7 | varios, actores | terminología | «Secretario judicial» × 14; «Letrado de la Admón. de Justicia» | LAJ; nombre completo | LO 7/2015 |

## Corrección posterior (2026-11-01) · Citas de los bloques de normas

La app leía las citas sueltas de cada bloque como de la ley del recurso; ahora, como de la ley que nombra el bloque. Estas se refieren a otra ley y se nombra expresamente. Sin cambio de fondo.

| Antes | Ahora |
|---|---|
| Aplicable por remisión del artículo 110.2. | Aplicable por remisión del artículo 110.2 LJV. |
| para el apartado 6 del artículo 111. | para el apartado 6 del artículo 111 LJV. |
| impuesto por los artículos 111.1 y 111.2. | impuesto por los artículos 111.1 y 111.2 LJV. |

## Corrección posterior (2026-11-03) · Relectura, tercera tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda3.md`, aplicados con el visto bueno del propietario.

### Guía

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 14 | nuevos examen_solicitud, subsanacion, fin_no_presentada, fin_incompetencia | Sin examen de competencia ni subsanación | Reglas generales | LJV 13, 16, 17.1 |
| 16 | notif_661 | Sin plazo | Diez días | LEC 661.1 |
| 17 | consulta_rpc, fin_concurso | «Suspensión», «no puede continuar» | Se remite a la legislación concursal | LJV 111.1, 111.2 |
| 18 | resultado_subasta, vista_solicitante | Sin salida si la postura no cubre el tipo | Vista al solicitante, con aviso de la ambigüedad (decisión del propietario) | LJV 111.6 |
| 20 | resolucion_celebracion, decreto_adjudicacion, postulacion, doc_registrable, celebracion_subasta | Contenidos sin fuente | Suprimidos | LJV 111.2, 111.8 |
| 22 | inicio | «deberá encauzarse» | «según el caso» | LJV 108 |
| 24 | postulacion | Sin oposición ni recursos | Nota añadida | LJV 3.2 |

### Esquema (misma tanda)

| # | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 15 | Recursos e índice de plazos | Revisión contra todos los decretos | Revisión contra los que ponen fin; reposición contra las interlocutorias. No se clasifica el decreto de aprobación del remate, sobre el que la ley no se pronuncia | LJV 20; LEC 454 bis |
| 17 | Art. 111 | Finalidad y efectos concursales | Se remite a la legislación especial | LJV 111.1, 111.2 |
| 18 | Art. 111.6 | Sin aviso | Aviso de la ambigüedad | LJV 111.6 |
| 19 | Art. 111.5 | «lex specialis… aprobada judicialmente» | Suprimido | LJV 111.5 |
| 20 | Varios | Contenidos sin fuente | Suprimidos | LJV 111.8 |
| 21 | Art. 108 | «Supuestos típicos», bienes de menores | «Ejemplos», sin ese supuesto | LJV 108 |
| 23 | Art. 111, normas | Arts. 643–680 LEC | Arts. 643–675 LEC | Coherencia interna |

## Corrección posterior (2026-11-03) · Relectura, cuarta tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda4.md`, aplicados con el visto bueno del propietario.

| # | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 11 | Esquema, índice de plazos | «3 trámites» con 4 filas | «4 trámites» | Coherencia interna |

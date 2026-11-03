# Revisión · E15 · LJV · Tutela, curatela y guarda de hecho (arts. 43–52)

- **Recurso**: `data/esquemas/ljv-tutela-curatela.js` (origen E15).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026 (arts. 43–52 en la redacción de la Ley 8/2021); CC a 07-09-2026; LEC a 07-10-2026; LOPJ a 09-10-2026.
- **Método**: como E01–E14; decisiones 9 y 10. **Rehecho**: la LJV estaba bien recogida, pero casi todas las referencias al Código Civil seguían la numeración **anterior a la Ley 8/2021**.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 2 «revisar» falsos o intencionados («diez días» en letra; la denominación legal del art. 43).

## Hallazgo principal: numeración del Código Civil

La Ley 8/2021 reordenó los Títulos IX y X del Libro I del CC. El esquema citaba los artículos antiguos con su contenido antiguo. Correspondencias aplicadas:

| Materia | El esquema decía | Vigente |
|---|---|---|
| Tutela: sujetos, disposiciones de los progenitores, promoción, constitución | arts. 215–218, 222–229 («orden de delación», «tutela testamentaria, 223») | arts. 199–210 (disposiciones de los progenitores, 201–205; promoción, 206–207; constitución por expediente, 208) |
| Preferencia para nombrar tutor | art. 223 y ss. | **art. 213** (y aptitud 211–217) |
| Remoción | art. 234 («causas») | **art. 278** para el curador; a la tutela se le aplican las de la curatela (**art. 223**) |
| Inhabilidad | art. 251 | art. 216–217 (tutela); el art. 251 son las prohibiciones del apoyo |
| Excusa | arts. 242–247 | **art. 279** (curatela) y art. 223 (tutela) |
| Poderes preventivos y autotutela | art. 248 | **arts. 256–262** (poderes) y **271–274** (autocuratela); el art. 248 trata del casado menor de edad |
| Administración, inventario, autorizaciones | arts. 258–278 | inventario **285**; autorizaciones **287–290** |
| Retribución | art. 274 | **229** (tutor) y **281** (curador) |
| Rendición de cuentas | arts. 279–281 | **232–234** (tutor) y **292–294** (curador) |
| Defensor judicial | art. 299 | **arts. 295–298** (persona con discapacidad) y 235–236 (menor) |
| Guarda de hecho | art. 300 («reformado») | **arts. 263–267** (discapacidad) y 237–238 (menores); el art. 300 es la inscripción en el Registro Civil |
| Extinción | arts. 312–313 | **231** (tutela) y **291** (curatela) |
| Curatela, ámbito | arts. 286–298 | arts. 268–294 |

## Otros hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 44, 48, cuadro, ecosistema | **error** | «Procedimiento de provisión de apoyos (art. 753 bis LEC)» (no existe) | Expediente de los arts. 42 bis a)–c) LJV y, con oposición, proceso de los arts. 756 y ss. LEC | LEC, LJV |
| 2 | 47, 49, 51 bis | error | Juicio verbal «art. 250 LEC» | Arts. 437 y ss. LEC (el 250 es el ámbito del verbal) | LEC |
| 3 | 43 | error | «Coherente con el art. 52 LEC (competencia en procedimientos de capacidad)» | Retirado (el art. 52 LEC son fueros especiales; la competencia la fija el art. 43 LJV) | LEC |
| 4 | 43 y participantes | desfasado | Juzgado de Primera Instancia | Sección de Familia, Infancia y Capacidad donde exista (art. 86.5 LOPJ); si no, Sección Civil | LO 1/2025 |
| 5 | 46 | error | «Inscripción constitutiva: no oponible a terceros hasta la inscripción»; «Ley 20/2011 arts. 60 y ss.» | Inscripción obligatoria (art. 300 CC); se retira la afirmación sobre oponibilidad y la cita de la LRC, no comprobadas | CC |
| 6 | 46 | error | «Plazo de 15 días improrrogable; su incumplimiento puede dar lugar a remoción» | Texto del art. 46.1 | LJV |
| 7 | 51 | error | «La aprobación no tiene efecto de cosa juzgada material; solo verifica la corrección formal» | Texto del art. 51.5 (no impide las acciones recíprocas) | LJV |
| 8 | Principios | estilo | Cinco fichas doctrinales con citas erróneas (CE 49 «reforma de 2024», CC 216 y 248…) | Una ficha de principios con referencias comprobadas (arts. 249, 250, 269 y 300 CC; art. 45.2 LJV) | — |
| 9 | Cuadro | error | Curatela «para asistencia en actos que no pueda realizar»; guarda de hecho «no procede la inscripción, no procede remoción» | Cuadro rehecho con los artículos vigentes | CC |
| 10 | Varios | desfasado | «Secretario judicial», «incapacitación» | LAJ; sistema de apoyos | LO 7/2015, Ley 8/2021 |

---

# Revisión · G12 · Guía de tramitación de la tutela, la curatela y la guarda de hecho

- **Recurso**: `data/guias/ljv-tutela-curatela.js` (origen G12).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; CC a 07-09-2026; LEC a 07-10-2026; LOPJ a 09-10-2026.
- **Método**: fase 5, **rehecha** (como E03, E05–E07): el recorrido era aprovechable, pero todo el texto estaba sin tildes y con entidades HTML (`&laquo;`), y la mayoría de las citas del CC eran de la numeración anterior a la Ley 8/2021. Se conservan los 59 pasos, sus identificadores y las fases; cada texto se ha reescrito desde los arts. 43 a 52 LJV y los arts. 199 a 300 CC vigentes.
- **Resultado del comprobador**: 0 errores, 0 avisos (antes: 4 errores, entre ellos un paso inalcanzable y el inexistente «art. 753 bis LEC», y 1 aviso); queda la denominación legal «Juzgado de Primera Instancia» (art. 43.1 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | fin_error_incompetencia | **error** | Paso inalcanzable | `comp_tutela` pregunta si el menor tiene aquí su domicilio o residencia; si no, falta de competencia (el LAJ da cuenta al Juez, art. 16.3) | LJV 2.3, 16.3, 43.1 |
| 2 | comp_curatela, fin_curatela_originaria, fin_guarda_curatela | **error** | Curatela originaria por «LEC art. 753 bis» (no existe), «proceso contencioso»; «LEC Cap. III bis» | Expediente de JV de los arts. 42 bis a)–c) LJV y, con oposición, arts. 756 y ss. LEC | LJV 42 bis, 44.2; LEC 756 |
| 3 | toda la guía | **error** | CC con la numeración anterior a 2021: delación de la tutela «arts. 222–229», curatela «arts. 286–298», remoción «223–226 / 286–287», excusa «art. 274», retribución «274 / 279», extinción de la tutela «art. 276» y de la curatela «art. 285», responsabilidad «arts. 220 / 280», autorizaciones «art. 271», autotutela «art. 248», autocuratela «art. 253», poderes preventivos «253–255», publicidad «218–219», defensor «299» | Tutela: arts. 199–234 (delación 201–202, 213–214; inhabilidades 216–217; varios tutores 218–221; desamparo 222; remoción y excusa por remisión, 223; retribución 229; extinción 231; cuentas 232–233; responsabilidad 234). Curatela: autocuratela 271–274; nombramiento 275–277; remoción 278; excusa 279–280; retribución 281; posesión y deberes 282; fianza 284; inventario 285–286; autorizaciones 287; extinción 291; cuentas 292–293; responsabilidad 294. Poderes preventivos 256–262; guarda de hecho 237–238 y 263–267; inscripción 300 | CC (Ley 8/2021) |
| 4 | fin_cuentas_aprobadas | **error** | Aprobadas las cuentas, el tutor o curador «queda liberado de responsabilidad» | La aprobación no impide las acciones recíprocas (art. 51.5 LJV; arts. 232 y 292 CC) | LJV 51.5 |
| 5 | remocion_comparecencia, remocion_sin_oposicion | error | El Juez suspende y «nombra» defensor judicial (arts. 27–33); sin oposición, el Juez «acuerda la remoción» | El Juez puede suspender; el defensor judicial lo nombra el LAJ (art. 49.2; arts. 27–32). Sin oposición, el Juez resuelve lo procedente: puede no acordar la remoción (nueva pregunta) | LJV 49 |
| 6 | excusa_plazo, excusa_causas | error | Pasados 15 días sin excusa «se entiende aceptado el cargo y no podrá excusarse por las mismas causas»; lista de diez causas (edad mayor de 65, enemistad…) | Quince días desde que conoce el nombramiento; la sobrevenida, en cualquier momento. Causas del art. 279 CC: desempeño excesivamente gravoso o de grave dificultad; personas jurídicas privadas sin medios o con fines no acordes; no hay excusa si el apoyo se encomendó a entidad pública (art. 281) | LJV 50; CC 279, 281 |
| 7 | excusa_admitida | error | «El excusado queda liberado de toda responsabilidad» | Quitado; se añade la pérdida de lo dejado en testamento en consideración al nombramiento (art. 280 CC) | CC 280 |
| 8 | fianza_comparecencia | error | «La no comparecencia puede considerarse renuncia tácita al cargo» | Quitado (no está en la ley); se añade el art. 46.2 (el Juez declara suficiente la fianza) | LJV 46 |
| 9 | inscripcion_registral, inventario_req | incompleto | El inventario siempre; «no oponible a terceros hasta la inscripción (CC 218)»; «Sección de Tutelas…» | Pregunta si es tutor, administrador de bienes o curador con facultades representativas (art. 46.4 LJV; art. 285 CC); prórroga, depósito y créditos no inventariados (arts. 285–286 CC); inscripción, art. 300 CC | LJV 46.4–5; CC 285, 286, 300 |
| 10 | controversia_inventario | impreciso | El expediente «se convierte en contencioso»; «no hay plazo legal» | Vista y trámites del juicio verbal, con la formación suspendida (art. 47.2) | LJV 47.2 |
| 11 | cuentas_periodica, fin_cuentas_observadas | incompleto / inventado | Sin la pericial contable de oficio; «subsanar en el plazo que se señale», «auditoría» | Pericial contable o de auditoría de oficio (art. 51.2, párrafo segundo); auto (art. 51.3); medidas de control, remoción y responsabilidad | LJV 51; CC 210, 270, 278, 294 |
| 12 | extpoder_* | error | Poderes preventivos «CC arts. 253–255»; causas «CC 286–287» con lista propia; trámite inventado en dos fases | Arts. 256–262 CC; causas de remoción del curador (art. 278), salvo previsión del poderdante (art. 258); citación y oposición del art. 51 bis.2 | LJV 51 bis; CC 256–258, 278 |
| 13 | guarda_* | error | Entrevista personal «obligatoria» siempre; autorizaciones «CC 263 ss.» para «venta de inmuebles, intervenciones médicas»; «CC art. 300» | La entrevista es en los casos de autorización (art. 52.3); autorización para la actuación representativa excepcional y los actos del art. 287 (art. 264 CC), con sus excepciones; facultades tutelares cautelares y acogimiento para menores (art. 237); extinción (art. 267); requerimiento de oficio y rendición de cuentas (art. 265) | LJV 52; CC 237, 264, 265, 267 |
| 14 | comp_tutela, comp_curatela | desfasado / inventado | «Competencia exclusiva y excluyente; no cabe atribución a Juzgados de Violencia o de Familia autonómicos»; «perpetuatio jurisdictionis»; casos prácticos de internados y sin domicilio | Domicilio o, en su defecto, residencia (art. 43.1); hoy Sección de Familia, Infancia y Capacidad (art. 86.5 j) LOPJ) o Sección Civil; tutela del desamparo (art. 222 CC) | LJV 43; LOPJ 86.5 |
| 15 | recurso_apelacion, tramitacion_apelacion | desfasado | «Art. 20» y «LEC 455 y ss.»; «los actos de buena fe no se afectan» | Veinte días ante la Audiencia (art. 458.1 LEC, tras el RDL 6/2023); trámite de los arts. 458 y 461; el electo sigue a cargo también si se insta un proceso ordinario (art. 45.6) | LJV 45.6; LEC 458, 461 |
| 16 | solicitud, comparecencia | incompleto | Legitimación «arts. 228 ss. / 276 ss.»; «plazo razonable» | Arts. 206, 207 y 222 CC; admisión por el LAJ, subsanación en cinco días, citación con quince días de antelación y comparecencia en treinta (arts. 16 a 18 LJV); oír y actuar de oficio (art. 45.2) | LJV 16–18, 45; CC 206, 207 |
| 17 | designacion, fiscalizacion, fianza | error | Orden de la tutela con cónyuge, padres, colaterales (régimen derogado); orden de la curatela incompleto; medidas de fiscalización y modalidades de fianza inventadas | Arts. 213–214 (tutela) y 276 (curatela, siete llamamientos); arts. 45.4 LJV, 209, 210 y 270 CC; art. 284 CC | LJV 45; CC 213, 276, 284 |
| 18 | ejercicio_cargo, retribucion, extincion_cargo | error | Deberes del curador «art. 273»; retribución «si está prevista (art. 279)»; extinción con causas inventadas («recuperación de la capacidad», «revocación de la medida de apoyo») | Arts. 228 y 282; art. 48 LJV y arts. 229 y 281 CC; arts. 231 y 291 CC; cuenta general en tres meses, acción a los cinco años | CC 228, 229, 231, 281, 282, 291, 292 |
| 19 | actores, fases, pie | forma | «Letrado de la Admon. de Justicia», «Juez + LAJ»; fases y pie sin tildes, «guía fusionada de tres fuentes» | Nombres y textos corregidos | — |

## Corrección posterior (2026-11-01) · Citas de los bloques de normas

La app leía las citas sueltas de cada bloque como de la ley del recurso; ahora, como de la ley que nombra el bloque. Estas se refieren a otra ley y se nombra expresamente. Sin cambio de fondo.

| Antes | Ahora |
|---|---|
| tutela solo para menores, art. 51 bis y redacción | tutela solo para menores, art. 51 bis LJV y redacción |

## Corrección posterior (2026-11-03) · Relectura, sexta tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda6.md`, aplicados con el visto bueno del propietario.

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 9 | comparecencia | Sin incomparecencia | Nota con la regla general | LJV 18.2.1.ª |
| 10 | excusa_plazo | Sin la salvedad de las personas jurídicas | Añadida | LJV 50.1 |
| 11 | fin_no_remocion | Consecuencia atribuida al art. 49.2 | Presentada como consecuencia | LJV 49.2 |
| 12 | fin_error_incompetencia; nuevo fin_remision | Actor LAJ, sin salida si el Juez aprecia competencia | Actor Juez, con opción | LJV 2.3, 16.3 |
| 13 | resolucion_con_fianza | Sin plazo | Cinco días | LJV 19.1 |

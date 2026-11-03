# Revisión · E02 · LEC · División judicial de la herencia (arts. 782–789)

- **Recurso**: `data/esquemas/lec-division-herencia.js` (origen E02).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LEC a 07-10-2026; CC a 07-09-2026; LJV a 05-03-2026; LOPJ a 09-10-2026; LH, LN, CP, Ley 60/2003 (Arbitraje) y Ley 5/2012 (Mediación) en sus instantáneas de `sources/boe/`.
- **Método**: como E01: texto vigente de los arts. 782–789 y de cada artículo citado (`tools/dump.js`), y la estructura del capítulo leída del BOE.
- **Decisiones del propietario aplicadas** (2026-10-29, decisiones 9 y 10 del plan): el esquema se ciñe a lo que usa el juzgado; la jurisprudencia no verificable se retira.
- **Resultado del comprobador**: 0 errores, 0 avisos; 1 «revisar» falso (el art. 783.2 dice «diez siguientes» en letra y la tabla «10 días»).

## 1. Qué se ha retirado y por qué

El esquema tenía 26 fichas; quedan 16. Lo retirado estaba fuera del ámbito de los arts. 782–789, y casi todo tenía errores:

| Ficha retirada | Motivo | Errores que contenía (muestra) |
|---|---|---|
| Fundamentos constitucionales | Doctrina, no tramitación | «art. 54 CE» como defensa de incapaces (es el Defensor del Pueblo); art. 749.2 LEC (procesos de capacidad); STC 119/2001 |
| Herencia yacente | Fuera de ámbito | Art. 1009 CC como definición de herencia yacente (trata de la repudiación por un título); art. 1011 CC como administración de hecho (es la declaración del beneficio de inventario ante Notario) |
| Responsabilidad del contador | Doctrina sin base legal | Responsabilidad extracontractual con plazo de 5 años «art. 1968.2 CC» (son **1 año**); STS 735/2017 y 562/2020 |
| Tratamiento fiscal | Fuera de ámbito (decisión 9) | «STS (Pleno) 2680/2019» sobre la plusvalía (lo resolvió el Tribunal Constitucional); afirmaciones sobre bonificaciones autonómicas |
| Jurisprudencia del TS (5 sentencias) | No verificable (decisión 10) | STS 562/2020, 321/2019, 148/2018 (además, contradecía el art. 1045 CC), 735/2017, 422/2016; antes también STS 261/2013 y 489/2016 |
| Derechos forales | Fuera de ámbito (decisión 9) | «C. Valenciana, Ley 5/2006, legítima de 2/3» (no hay ley valenciana de sucesiones en vigor); «Navarra, legítima más restringida… sobre el relictum» (la legítima navarra es formal) |
| Administración del caudal (arts. 797–805) | Duplicaba E04 (DRY) | Se sustituye por una remisión a los esquemas de intervención y administración |
| Colación, mejora y legítima | Duplicaba la ficha del art. 786 | «Art. 812 CC: usufructo del tercio de mejora» (el 812 es la reversión de donaciones; es el 834) |
| Dimensión internacional | Fuera de ámbito (decisión 9) | Se conservan dos líneas correctas (competencia, art. 4, y ley aplicable, arts. 21–22, del Reglamento 650/2012) |

## 2. Correcciones en lo que se conserva

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | Ubicación | error | «Sección 3.ª (arts. 806–819): división del condominio» | Sección 3.ª = administración del caudal (797–805); Capítulo II (806–811) = liquidación del régimen económico matrimonial | Estructura LEC (BOE) |
| 2 | Ubicación | estilo | «naturaleza mixta… jurisdiccional y no jurisdiccional» | Estructura real: fase ante el LAJ y, con oposición, juicio verbal ante el tribunal | arts. 783–787 LEC |
| 3 | Base sustantiva | error | «La remisión del art. 1059 CC es imperativa» | Retirado; añadidos arts. 1051, 1052 (ausentes y medidas de apoyo), 1054 y 1058 CC | CC |
| 4 | Competencia | error | «Art. 15.1 LEC: domicilio del causante»; «art. 16.1 LEC» | Arts. 15 y 16 LEC tratan de otra cosa (consumidores, sucesión procesal). Fuero: **art. 52.1.4º LEC** | LEC |
| 5 | Competencia | error | «Juzgado de Primera Instancia (art. 85 LEC)»; «art. 45.2 LEC, examen de oficio» | Art. 85 LEC es acumulación; competencia objetiva art. 45; examen de oficio por el LAJ y decisión del juez por auto, **art. 58 LEC**; fuero imperativo, art. 54.1 | LEC |
| 6 | Competencia | desfasado | Juzgado de Primera Instancia | Tribunal de Instancia, Sección Civil | LO 1/2025 |
| 7 | Postulación | error | «Preceptivos; excepción del art. 31.2 (verbales ≤ 2.000 €)» y en actores «preceptivo si cuantía > 2.000 €» | Reglas generales de los arts. 23 y 31 (la cuantía no es el criterio) | LEC |
| 8 | Aceptación | error | Art. 657 CC como presupuesto; art. 988 «personalísimo e irrevocable»; repudiación «art. 992… ante Notario o Juzgado» | Irrevocable art. 997; expresa/tácita art. 999; no parcial art. 990; repudiación **solo ante Notario**, art. 1008 | CC |
| 9 | Aceptación | error | Beneficio de inventario: «30 + 90 días hábiles (art. 1028 CC)» | 30 días para pedirlo (art. 1014); inventario: empezar en 30 y concluir en otros 60, prorrogables hasta un año (art. 1017). El art. 1028 trata del pago a acreedores | CC |
| 10 | REM | error | «previa liquidación (art. 806 CC)» (el 806 es la legítima); «juicio verbal (art. 794.2 LEC)» | Arts. 1392, 1396 y 1404 CC; procedimiento de los arts. 806–811 LEC | CC, LEC |
| 11 | 782 | error | Contador dativo «LJV arts. 66–68» (son autorizaciones y ausencia); declaración de herederos «LJV art. 55 / resolución del LAJ, art. 56» | **Art. 92 LJV** y **art. 66 LN**; declaración de herederos: acta notarial, **arts. 55–56 LN** (el LAJ ya no la hace; el Estado, por vía administrativa, art. 958 CC) | LJV, LN, CC |
| 12 | 782 | error | Ológrafo «auto de protocolización (LN art. 61)» | Adveración y protocolización ante Notario (arts. 61–63 LN) | LN |
| 13 | 782 | error | Legatario de cosa cierta «CC art. 858»; acreedores: «tercería de dominio (arts. 595–604)», «anotación de embargo (LH 42.9)» | Retirado (858 trata de gravar legatarios; la tercería de dominio es del dueño; la anotación de embargo es el núm. 2.º) | CC, LEC, LH |
| 14 | 782 | error | «Exclusividad de vía», «derecho personalísimo» | Retirado (sin base legal) | — |
| 15 | 782 | estilo | Rescisión por fraude «desde el conocimiento del fraude» | Cuatro años (art. 1299 CC), sin el dies a quo inventado | CC |
| 16 | 783 | desfasado | MF representa también a «incapaces»; «MF supletorio si no hay apoyos» | La Ley 8/2021 lo suprimió: menores sin representación y ausentes; personas con discapacidad, con sus medidas de apoyo (art. 1052 CC) | art. 783.4 LEC |
| 17 | 783 | error | MF también por «conflicto de intereses con el representante» | Retirado (eso es defensor judicial) | art. 783.4 LEC |
| 18 | 783 | desfasado | Edictos «BOE, tablón del juzgado» | Tablón Edictal Judicial Único (art. 164 LEC) | LEC |
| 19 | 783 | error | «Administrador (art. 795): gestión ordinaria sin autorización; retribución…»; inventario «base para el beneficio de inventario» | Remisión a los arts. 790–805 y a sus esquemas | LEC |
| 20 | 784 | error | «Los acuerdos obligan a los no asistentes»; tipos de perito (tasador «del Ministerio de Cultura»…); «liquidación a prorrata» | Retirado (sin base legal) | — |
| 21 | 784 | error | Causas de recusación inventadas («amistad íntima o enemistad…»); abstención «art. 124»; responsabilidad «art. 335.2 LEC» | Causas reales del **art. 124.3 LEC** + LOPJ; provisión de fondos art. 342.3; retirado el 335.2 (es el juramento del perito) | LEC |
| 22 | 785 | error | «No puede delegarse sin autorización judicial»; «análogo al mandato (art. 1718 CC)»; «remoción»; prescripción 5 años; «Ley 18/2011» | Lo que dice la ley: cada interesado puede obligarle; plazo por diligencia; daños y perjuicios. Ley 18/2011 derogada (RDL 6/2023) | art. 785 LEC |
| 23 | 786 | error | Plazo «ampliable a instancia de parte (art. 785.3)» y, en fases y plazos, «art. 786.3» | Máximo dos meses, **art. 786.2** (no hay apartado 3); el 785.3 es el plazo que fija el LAJ | LEC |
| 24 | 786 | error | Art. 1061: «evitar que una hijuela contenga bienes de diferente naturaleza» | Lo contrario: lotes con cosas de la misma naturaleza, calidad o especie para cada uno | CC |
| 25 | 786 | error | Pasivo: «gastos de entierro (CC art. 902)», «ISD devengado»; avalúo por «valor de referencia catastral», «tasador del Ministerio de Cultura» | Retirado (902 son facultades del albacea) | — |
| 26 | 786 | incompleto | Colación sin regla de valoración | Valor al tiempo de evaluar los bienes hereditarios (art. 1045 CC) | CC |
| 27 | 787 | error | Conformidad en la comparecencia = «transacción procesal (art. 19.2) ejecutable»; «la apelación no suspende… salvo cautelar»; «RRM art. 175» | Lo que dice el art. 787.4: se ejecuta lo acordado y se aprueba por decreto. Retirado lo demás | LEC |
| 28 | 787 | incompleto | Quién alza la suspensión por cohecho | El LAJ (art. 787.6) | LEC |
| 29 | 788 | error | Entrega por clases de bienes (IBERCLEAR, LSC 120–123…); «inscripción potestativa (LH 319)»; testimonio «sustituye provisionalmente al título» | Retirado; quedan LH 14, 32 y 254 | LH |
| 30 | 789 | error | «Si hay menores, conformidad del MF»; costas «arts. 394–398»; protocolo familiar | Retirado (sin base legal) | — |
| 31 | 789 / alternativas | error | Mediación «Ley 36/2006» (es de prevención del fraude fiscal) y «suspensión ≤ 60 días (art. 19)» de esa ley | Ley 5/2012; suspensión a petición de las partes, por decreto del LAJ, hasta 60 días: **art. 19.4 LEC** | LEC, Ley 5/2012 |
| 32 | Alternativas | error | Contador dativo «designado por Notario o Secretario judicial», «LJV arts. 88–92»; partición notarial «arts. 66 bis y 66 ter LN» (no existen) | Art. 1057 CC, art. 92 LJV, art. 66 LN; aprobación si no confirman todos; sin abogado ni procurador si el haber es inferior a 6.000 € | CC, LJV, LN |
| 33 | Alternativas | error | Arbitraje: «distribución arbitrable / estado no»; laudo «art. 37» | Arbitraje testamentario, art. 10 Ley 60/2003; cosa juzgada, **art. 43** | LA |
| 34 | Rescisión | estilo | — | Se conserva; era correcta. Se añade la caducidad de la anulación (art. 1301 CC) | CC |
| 35 | Plazos | error | «Formación de inventario 90 días hábiles (1028)»; ISD «art. 67»; mediación «Ley 36/2006»; responsabilidad del contador (1964 y 1968.2) | Tabla rehecha: 10 filas comprobadas | — |
| 36 | Actores | error | «Albacea: si fue designado excluye la vía judicial»; «Administración Pública: herencia vacante (art. 911 CC)»; «Abogado del Estado» | El que excluye es el contador-partidor (art. 782.1); retirado el resto | LEC, CC |
| 37 | Actores | estilo | Nombre y descripción pegados («Coherederos Legitimados…») | «Coherederos — …» | — |
| 38 | Ecosistema | error | Legítimas: «806 límite de reglas testamentarias», «807 definición», «812 usufructo», «814–815 reducción»; aceptación: «992 repudiación», «1009 yacente»; colación: «1036 sujetos», «1037 cómputo»; LJV «arts. 88–94»; «actas de notoriedad LJV 55–59» | Cada artículo con lo que dice (806 concepto, 807 herederos forzosos, 834–840 cónyuge, 1008 repudiación, 1036 dispensa, 1045 valor…); LJV art. 92; LN 55–56 | CC, LJV, LN |
| 39 | Cabecera y pie | estilo | «45+ Conexiones · 25+ Actores · Edición fusionada»; pie «plantilla HTML reutilizable» | Cifras reales; pie con la ubicación en la LEC | — |

## 3. Herramienta común

`Reg. (UE) 650/2012 art. 4` se leía como art. 4 LEC: el analizador reconoce ya la abreviatura «Reg. (UE)» (commit propio, con test). En el esquema, las citas del Código Civil sin la sigla (dentro de textos que también nombran la LEC) se completan con «CC» para que la app no las enlace a la LEC.

## 4. Pendiente para la guía G02 (fase 5)

El comprobador marca en la guía: «art. 786.4» (×4) y «art. 787.7» (×7), que no existen; «arts. 66 bis» (Ley del Notariado, no existen); «art. 264.1.4.º» y «art. 45.2» LEC sin apartados numerados.

---

# Revisión · G02 · Guía de tramitación de la división judicial de la herencia

- **Recurso**: `data/guias/lec-division-herencia.js` (origen G02).
- **Fecha de revisión**: 2026-10-30. **Corte del BOE**: LEC a 07-10-2026; CC; LO 1/2025 (arts. 5, 7 y 10, consultados en la web del BOE: la API daba error 500).
- **Método**: fase 5. Se conserva el recorrido y las direcciones de los pasos; cada paso se rehace con los arts. 782–789 y 792–796 LEC (revisados en E02–E04) y se retiran las notas repetidas (muchos pasos tenían el mismo texto dos veces).
- **Resultado del comprobador**: 0 hallazgos (citas, plazos y grafo). 54 → 50 pasos.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | p3_*, p4_* | **error** | Plazo de dos meses «art. 786.4» | Art. 786.2 | LEC |
| 2 | p5_*, fin_exitoso | **error** | Sin cosa juzgada «art. 787.7» | Art. 787.5, párrafo segundo (el 787 tiene seis apartados) | LEC |
| 3 | p5_jv_parcial | **error** | «Conformidad parcial: lo acordado se aprueba y lo demás va a juicio verbal (art. 787.6)» | Retirado: el art. 787.6 regula la suspensión por causa penal; sin conformidad de todos, juicio verbal (art. 787.5) | LEC |
| 4 | fin_partidor_previo, fin_acuerdo_coherederos | **error** | «Arts. 66 bis/66 ter LN» (no existen); mediación «Ley 36/2006»; arbitraje como alternativa | Contador dativo por el LAJ (art. 92 LJV) o Notario (art. 1057 CC); reparto por los herederos (art. 1058 CC); lo demás, retirado | LJV, CC |
| 5 | p0_competencia, fin_inhibicion | **error** | «Art. 15.1 LEC», «art. 45.2 LEC (examen de oficio)», «Juzgados de Paz hasta 2.000 € (art. 85 LEC)», «art. 48», «art. 51: conflictos», «art. 53: TSJ», «inhibitoria», Reglamento (UE) 650/2012 | Art. 52.1.4.º LEC (último domicilio del finado); examen de oficio por el LAJ con audiencia del Fiscal y las partes y auto del Juez (art. 58 LEC); conflicto: art. 60 LEC | LEC |
| 6 | p5_decreto, p6_protocolizacion | **error** | «Art. 205 LH: la escritura de partición es título inscribible» | Retirado: el art. 205 LH regula la inmatriculación | LH |
| 7 | p0_inicio, fin_sin_masc | error | Requisito de los MASC «insubsanable»; «un año para acudir a la vía judicial»; «declaración responsable del letrado» | Lo que dicen los arts. 5, 7 y 10 LO 1/2025 y 264.4.º y 403.2 LEC (la declaración responsable es de la parte y solo por desconocer el domicilio o el medio) | LO 1/2025, LEC |
| 8 | p2_gananciales, p2_jv_gananciales | **error** | «Art. 806 CC: la adjudicación de la cuota usufructuaria exige liquidar gananciales»; STS 261/2013 y 489/2016; juicio verbal de gananciales «art. 794.2» con cosa juzgada | Retirados (decisión 10 y sin base); la liquidación de gananciales, por los arts. 806 y ss. LEC o de común acuerdo | LEC |
| 9 | p2_inventario | error | Controversia sobre el inventario «art. 794.2» | Art. 794.4 (vista y juicio verbal; deja a salvo derechos de terceros) | LEC |
| 10 | p2_convocatoria | error | Acreedores del coheredero convocados «art. 783.5» (no existe); «no es preceptiva la intervención de abogado ni procurador» | Convocados según el art. 783.2 y 4; lo demás, retirado | LEC |
| 11 | fin_inadmitida | error | «Reposición en cinco días (art. 451) y subsidiariamente apelación» | Retirado (no comprobado); se dice que puede volver a presentarse | — |
| 12 | p3_* | error | «Responsabilidad del contador (arts. 124 ss. LEC)»; «el plazo se cuenta desde la aceptación del nuevo contador»; honorarios «a partes iguales proporcionalmente» | Arts. 785.2 y 3 LEC; art. 1064 CC; lo demás, retirado | LEC, CC |
| 13 | p0_legitimacion | **error** | El legatario de parte alícuota saltaba la comprobación de contador-partidor | Ambos legitimados pasan por ella (art. 782.1) | LEC |
| 14 | p4_presentacion, p5_jv_total | estructura | Preguntas cuyas respuestas no correspondían a la pregunta | Preguntas y respuestas coherentes | — |
| 15 | fin_exitoso, p6_entrega | error | Impuesto de sucesiones (6 meses), plusvalía municipal | Retirados (decisión 9) | — |
| 16 | Varios | desfasado | Juzgado de Primera Instancia | Sección Civil del Tribunal de Instancia | LO 1/2025 |

Pasos retirados: `p2_jv_gananciales`, `p5_jv_parcial`, `p5_sentencia_est`, `p5_sentencia_des` (las dos sentencias se unen en `p5_sentencia`).

## Corrección posterior (2026-10-31) · Decisión 17: instantánea del BOE corregida

| Recurso | Lugar | Antes | Ahora |
|---|---|---|---|
| G02 | Inventario y administración (art. 794.4) | El LAJ cita a vista | El LAJ hace constar en el acta las pretensiones de cada parte y su fundamentación jurídica, y cita a vista |

Origen: la instantánea de la LEC guardaba, para este artículo, la versión del BOE de 1-10-2015 (LO 7/2015), construida sobre el texto anterior a la Ley 42/2015; la vigente es la de la Ley 42/2015. Detalle en `boe-correcciones.md`.

## Corrección posterior (2026-11-01) · Requisito de procedibilidad en E02

Corte del BOE: LO 1/2025 a 09-07-2026; LEC a 07-10-2026. Criterio del propietario: se añade el requisito (decisión 22).

| Recurso | Lugar | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| E02 | Artículo 782 › nuevo apartado | incompleto | Sin el requisito, que G02 sí recogía | Actividad negociadora previa: exigencia, medios y acreditación, con el mismo contenido que G02 | LO 1/2025 art. 5.1 y 5.2; LEC 264.4.º, 403.2 |

## Corrección posterior (2026-11-01) · Decisión 23: subsanación de la justificación (G02)

Fuente: art. 231 LEC (corte a 07-10-2026) y acuerdos de la Junta Sectorial de Magistrados de las Secciones de Familia de la Audiencia Provincial de Madrid de 6-11-2025, III.6 («Con carácter previo a la admisión de demandas, los defectos formales en la justificación del intento de MASC son subsanables (art. 231 LEC)»), comprobado en el PDF original. No vinculante, y la app lo dice. El art. 231 LEC no fija plazo: no se indica ninguno.

| Recurso | Lugar | Tipo | Antes | Ahora |
|---|---|---|---|---|
| G02 | p0_inicio | incompleto | «No» llevaba a la inadmisión en todo caso | Tercera salida para el defecto formal, con el paso nuevo `p0_subsanar_masc`: si se subsana, sigue; si no, inadmisión. Sin justificación alguna, inadmisión directa |

Arrastre a E02 (mismo día, a petición del propietario): en la ficha del art. 782, línea sobre la subsanación de los defectos formales, con la misma fuente.

## Corrección posterior (2026-11-01) · Decisión 24: la subsanación se apoya en la ley

Corte del BOE: LEC a 07-10-2026; LO 1/2025 a 09-07-2026. El propietario indica que no hay criterio particular en Las Palmas y que se atiende a las disposiciones generales de las leyes vigentes; los acuerdos de la AP de Madrid se conservan solo como orientación.

| Recurso | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| G02 | `p0_subsanar_masc` (1) | Regla atribuida al «criterio, no vinculante» de la Junta Sectorial; «sin justificación alguna, no hay defecto que subsanar», sin fuente | Sin documento, no se admite (art. 403.2 LEC); los acuerdos, en una frase, a título orientativo y no vinculante | LEC 231, 403.2; acuerdos III.6 |
| E02 | Art. 782 › Actividad negociadora previa | «Según el criterio, no vinculante» | Regla en el art. 231 LEC; los acuerdos, como orientación no vinculante | LEC 231; acuerdos III.6 |

## Corrección posterior (2026-11-01) · Decisión 24: inadmisión (art. 404.2 LEC) y frase sin respaldo en el art. 10 LO 1/2025

Corte del BOE: LEC a 07-10-2026; LO 1/2025 a 09-07-2026.

| Recurso | Lugar | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| G02 | `fin_sin_masc` | **error** | Paso atribuido al LAJ | LAJ y Tribunal: el LAJ da cuenta al Tribunal, que resuelve sobre la admisión | LEC 404.2 |
| G02 | `p0_subsanar_masc` | incompleto | Sin decir qué ocurre si no se subsana | Si no se subsana en el plazo que conceda el LAJ, este da cuenta al Tribunal | LEC 404.2 |
| G02 | `fin_sin_masc` | **cita** | «Puede acudir a un medio adecuado y presentar de nuevo la solicitud (art. 10 LO 1/2025)»: el art. 10 regula la acreditación del intento y la terminación sin acuerdo | Frase retirada | LO 1/2025 art. 10 |
| G02 | pie | cita | Arts. 5, 7 y 10 LO 1/2025 | Arts. 5 y 7 LO 1/2025; añadido el art. 404.2 LEC | — |

## Corrección posterior (2026-11-01) · Decisión 24: dos finales de inadmisión en G02

A petición del propietario. El art. 404.2 LEC habla de defectos formales no subsanados y no contempla literalmente el caso de que no se aporte nada.

| Recurso | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| G02 | `p0_subsanar_masc`, salida «No» | Llevaba a `fin_sin_masc` | Paso nuevo `fin_masc_no_subsanado`: el LAJ da cuenta al Tribunal | LEC 404.2 |
| G02 | `fin_sin_masc` (no se aporta nada) | Afirmaba la dación de cuenta del art. 404.2 | No se admite (art. 403.2); nota de que el art. 404 no menciona expresamente este caso | LEC 403.2, 404 |

## Corrección posterior (2026-11-03) · Relectura

Corte del BOE: descarga del 2026-11-03. Hallazgos de la relectura (`relectura-2026-11-03.md`), aplicados con el visto bueno del propietario.

| Recurso | Lugar | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| E02 | Art. 782 › carácter subsidiario | **error** | «a los coherederos de común acuerdo (art. 1058 CC)» | «a un contador-partidor designado por acuerdo de los coherederos» | LEC 782.1 |
| E02 | Aceptación; art. 782; art. 789 | sin fuente | «suele valorarse como aceptación tácita» (retirado); «Habitualmente»; «Formas habituales» | «Puede aportarse»; «Formas» | Decisión 24 |
| G02 | fin_inadmitida | **error** | Atribuida al LAJ; «puede presentarse de nuevo» | LAJ y Tribunal: si no se subsana, da cuenta al Tribunal | LEC 404.2 |
| G02 | fin_acreedor, fin_partidor_previo | **error** | Inadmisión atribuida al LAJ | LAJ y Tribunal, con nota de que el art. 404 no menciona expresamente el caso | LEC 404 |

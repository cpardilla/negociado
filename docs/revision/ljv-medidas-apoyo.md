# Revisión · E14 · LJV · Provisión de medidas judiciales de apoyo (arts. 42 bis a)–42 bis c))

- **Recurso**: `data/esquemas/ljv-medidas-apoyo.js` (origen E14).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026 (Capítulo III bis vigente desde el 03-09-2021, Ley 8/2021); CC a 07-09-2026; LEC a 07-10-2026; LOPJ a 09-10-2026.
- **Método**: como E01–E13; decisiones 9 y 10. El esquema seguía bien la LJV: **corregido**, no rehecho.
- **Resultado del comprobador**: 0 errores, 0 avisos; 3 «revisar» intencionados (el rango «299 bis a 324 CC», que se cita precisamente por estar sin contenido, y la denominación legal del art. 42 bis a).2).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 42 bis a), participantes | **desfasado** | «Juzgado de Primera Instancia» | Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista, con carácter exclusivo y excluyente (art. 86.5 g) LOPJ); si no, la Sección Civil | LOPJ (LO 1/2025) |
| 2 | 42 bis b) | error | Si solo se discute quién será curador, «el Juez designará otra persona» | La ley solo dice que eso no es oposición a efectos de terminar el expediente; la designación se resuelve en él conforme al CC (arts. 275 y ss.) | art. 42 bis b).5 LJV |
| 3 | 42 bis b) | error | Las medidas provisionales duran 30 días y «durante ese plazo debe presentarse demanda… art. 756 LEC» | Se mantienen como máximo 30 días salvo que antes se presente la demanda en el proceso contencioso (arts. 756 y ss. LEC) | LJV, LEC |
| 4 | 42 bis c) | incompleto | Sin recurso ni enlace con el proceso contencioso | Apelación (art. 20.2 LJV; 20 días, art. 458 LEC); oposición en la revisión → proceso contencioso (art. 42 bis c).3; art. 761 LEC); las medidas acordadas en sentencia también se revisan por este trámite (art. 761 LEC) | LJV, LEC |
| 5 | Ecosistema | error | «Arts. 251–262 CC: medidas voluntarias» | Arts. 251–253: prohibiciones y disposiciones comunes; medidas voluntarias, arts. 255–262 | CC |
| 6 | Ecosistema y fichas | error | Defensor judicial «arts. 295–299 CC»; Título XI «arts. 249–299» | Arts. 295–298 (el art. 299 es la responsabilidad civil de la persona con discapacidad) | CC |
| 7 | Ecosistema | error | «Deroga los arts. 299 bis a 324 CC (antiguo régimen de incapacitación)» | Esos artículos quedaron sin contenido; la incapacitación estaba en otros (arts. 199 y ss. en la redacción anterior) | CC |
| 8 | Ecosistema | error | Art. 756 LEC: «competencia: JPI del lugar de residencia»; art. 757: «misma lista que el art. 42 bis a)» | Art. 756: ámbito y competencia de la autoridad que conoció del expediente previo; art. 757: el Fiscal promueve el proceso si los legitimados no existen o no demandan | LEC |

## Herramienta común (commit propio)

`articleKey` reducía la clave canónica «42 bis a» a «42 bis», y el rango «arts. 42 bis a)–42 bis c)» no se encontraba. Ahora las claves canónicas se leen igual (test de ida y vuelta).

---

# Revisión · G11 · Guía de tramitación de la provisión de medidas judiciales de apoyo

- **Recurso**: `data/guias/ljv-medidas-apoyo.js` (origen G11).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; CC a 07-09-2026; LEC a 07-10-2026 (con las correcciones de las decisiones 17 y 18); LOPJ a 09-10-2026.
- **Método**: fase 5. La estructura sigue bien los arts. 42 bis a) a 42 bis c) LJV: se conservan los 42 pasos y sus identificadores. Lo principal: la guía numeraba los apartados del art. 42 bis b) de otra forma (de 1 a 8; tiene cinco), y había errores en subsanación, recursos y citas del CC.
- **Resultado del comprobador**: 0 errores, 0 avisos; queda la denominación legal «Juzgado de Primera Instancia» (art. 42 bis a).2 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | diligencias, prueba, informes_preparatorios, comparecencia, control_oposicion, medidas_provisionales y desenlaces | **error** | Art. 42 bis b) «apdos. 3 y 4», «apdo. 4», «apdos. 5 y 6», «apdo. 6», «apdo. 7», «apdo. 8» | Apdo. 2 (admisión, citación, cinco días, certificaciones, informes y dictamen previos), apdo. 3 (comparecencia), apdo. 4 (opción por medida alternativa), apdo. 5 (oposición y medidas provisionales); también el art. 42 bis a).3 (párrafo segundo) y el 42 bis c).2 (un solo párrafo) | LJV 42 bis a)–c) |
| 2 | subsanacion | **error** | «La LJV no tiene plazo específico; LEC supletoria; habitual 10 días»; con el Fiscal, «subsanación de oficio» | Cinco días (art. 16.4 LJV); si no se subsana, el LAJ da cuenta al Juez | LJV 16.4 |
| 3 | admision, fin_inadmision | error | Inadmisión: «reposición si es interlocutoria, apelación si pone fin» (art. 20); art. 5 LJV como fuente | El LAJ examina y admite; si no es admisible, da cuenta al Juez, que decide (arts. 2.3, 16 y 17.1); contra el auto, apelación (art. 20.2); arts. 6.2 y 19.3 | LJV 2.3, 16, 17, 19, 20 |
| 4 | fin_revision_ok | **error** | «Contra el auto de revisión no cabe recurso ordinario, sí los extraordinarios» | Apelación (art. 20.2 LJV) | LJV 20.2 |
| 5 | recurso_apelacion | desfasado | Se interpone ante el Juzgado, que remite a la Audiencia, y la oposición se formula «ante la Audiencia» después | Tras el RDL 6/2023: se interpone ante la Audiencia en veinte días; su LAJ pide las actuaciones; el Juzgado las remite y emplaza en diez días; traslado de oposición por diez días | LEC 458, 461 |
| 6 | inicio, comparecencia, fin_medida_voluntaria, fin_no_procede | error | La autocuratela como medida voluntaria alternativa a la judicial | Es la propuesta de curador para la curatela que constituye el juez (art. 271 CC); como medidas voluntarias, la escritura pública del art. 255 y los poderes y mandatos preventivos (arts. 256–262) | CC 250, 255, 271 |
| 7 | inicio, fin_medida_voluntaria | error | Guarda de hecho «arts. 291–298 CC»; autocuratela «arts. 251–255»; defensor judicial «subsidiario» de la curatela; guarda «con reconocimiento judicial» | Guarda de hecho arts. 263–267; curatela para el apoyo continuado y defensor judicial para el ocasional aunque sea recurrente (art. 250) | CC 249, 250, 255, 263 |
| 8 | expediente_firme, inicio_revision, nuevo_auto, fin_expediente_ok, fin_revision_ok | error | Art. 278 CC para la revisión | Art. 268 CC (el 278 es la remoción del curador) | CC 268, 278 |
| 9 | auto | incompleto | Plazo de revisión sin límite; curatela representativa «para actos que no pueden realizarse ni con apoyo» | Como máximo tres años, excepcionalmente hasta seis (art. 268); representativa solo cuando resulte imprescindible, con los actos fijados en resolución motivada (art. 269); medidas de control (art. 270); art. 19.1 | CC 268–270 |
| 10 | postulacion, defensor_judicial | error | Defensor judicial por el «Cap. IV LJV (arts. 43 ss.)» y los «arts. 285 ss. CC»; actor, el Juez | Arts. 27 a 32 LJV; lo nombra el LAJ (arts. 28.1 y 30.2); arts. 295–298 CC | LJV 27–32; CC 295 |
| 11 | medidas_provisionales, fin_medidas_extintas | error | «30 días naturales», «caducidad automática»; con la demanda, «se extinguen ANTICIPADAMENTE» y «quedan absorbidas» | Se mantienen como máximo treinta días salvo que antes se presente la demanda (como en E14); con la demanda, el tribunal puede adoptar medidas (art. 762 LEC) | LJV 42 bis b).5; LEC 762 |
| 12 | comparecencia, control_oposicion | impreciso | Información «preceptiva»; «formulación oral de conclusiones»; «solo la oposición global y absoluta» cierra el expediente | La autoridad judicial «podrá informar»; se oye a quienes comparezcan y quieran ser oídos; pone fin la oposición de la persona a cualquier apoyo, la del Fiscal o la de cualquier interesado | LJV 42 bis b).3 y 5 |
| 13 | via_contenciosa, oposicion_efectos, fin_derivacion_contenciosa, fin_revision_contenciosa | impreciso | «El mismo Juzgado» siempre; el Fiscal entre los legitimados para la revisión contenciosa; «apelación ordinaria» como diferencia con la JV; preferencia «cuando se designa apoyo representativo» | Salvo cambio posterior de residencia (art. 756.2); legitimados del art. 757.1 y quien ejerza el apoyo (art. 761); el auto de JV también es apelable; art. 753.3 completo | LEC 753, 756, 757, 761 |
| 14 | diligencias, informes_preparatorios, actuaciones_revision | impreciso | Entidad pública «SAAD, Ley 39/2006», «servicios sociales autonómicos»; sin el dictamen pericial de oficio previo | Con las palabras de la ley; dictamen pericial que puede ordenar la autoridad judicial antes de la comparecencia (art. 42 bis b).2, párrafo tercero) | LJV 42 bis b).2 |
| 15 | citacion | incompleto | «Antelación suficiente; LEC supletoria» | Al menos quince días; comparecencia dentro de los treinta días siguientes a la admisión | LJV 17.3, 18.1 |
| 16 | notificacion | impreciso | Otros registros «a petición EXCLUSIVA» de la persona, por el art. 755 LEC | Mandamiento a instancia de parte (art. 22.2 LJV); en medidas de apoyo, solo a petición de la persona (art. 755 LEC, escrito para el proceso contencioso) | LJV 22.2; LEC 755 |
| 17 | competencia, fin_inhibicion | desfasado / impreciso | Juzgado de Primera Instancia; remisión como «falta de competencia territorial» | Hoy, Sección de Familia, Infancia y Capacidad (art. 86.5 g) LOPJ) o Sección Civil; la remisión es por cambio de residencia antes de la comparecencia | LJV 42 bis a).2; LOPJ |
| 18 | revision_anticipada, fin_revision_ok, actores, pie | varios | «Cambio de residencia» como causa de revisión; «surten efecto desde la notificación»; «ac-laj»; pie sin LJV general | Quitados; art. 268 CC (revisión ante cualquier cambio); nombres de los actores; pie con las normas citadas | — |

## Arrastre al esquema E14

El mismo error del hallazgo 6 estaba en dos tarjetas de E14 («medidas voluntarias (autocuratela, …)»): corregido en el mismo commit; la tarjeta de la curatela explica la autocuratela (arts. 271–274 CC).

## Corrección posterior (2026-11-01) · Citas de los bloques de normas

La app leía las citas sueltas de cada bloque como de la ley del recurso; ahora, como de la ley que nombra el bloque. Estas se refieren a otra ley y se nombra expresamente. Sin cambio de fondo.

| Antes | Ahora |
|---|---|
| los arts. 42 bis a), b) y c) en la LJV. | los arts. 42 bis a) a 42 bis c) LJV. |
| art. 42 bis b) apdo. 5 → | art. 42 bis b) LJV, apdo. 5 → |

## Corrección posterior (2026-11-03) · Relectura, tercera tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda3.md`, aplicados con el visto bueno del propietario.

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 25 | admision, subsanacion, fin_inadmision | Opción «Inadmitir» y fin con actor LAJ | Da cuenta al Juez, actor Juez | LJV 2.3, 16.4, 17.1 |

### Quinta tanda de la relectura (2026-11-03), guía

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 13 | postulacion | «sin necesidad de Abogado y Procurador» | Designa ella su defensa y representación | LJV 42 bis a.4 |
| 15 | comparecencia | Sin incomparecencia | Nota con la regla general | LJV 13, 18.2.1.ª |
| 16 | documentacion, admision | Dos dictámenes; lista de profesiones | Un dictamen de ambos ámbitos; lista suprimida | LJV 42 bis b.1 |
| 18 | remision_testimonio, revision_anticipada, nuevo_auto | Contenidos sin fuente | Suprimidos o corregidos | CC 268 |
| 19 | fin_medidas_extintas | «Promover nuevo expediente» | Proceso contencioso | LJV 42 bis b.5; LEC 756.1 |

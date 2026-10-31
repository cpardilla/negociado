# Revisión · E18 · LJV · Honor, intimidad e imagen del menor o persona con discapacidad (arts. 59–60)

- **Recurso**: `data/esquemas/ljv-honor-menor.js` (origen E18).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; LO 1/1982 (`LOPDH`), LO 1/1996 (`LOPJM`), CC, LEC y LOPJ en sus instantáneas.
- **Método**: como E01–E17; decisiones 9 y 10. **Rehecho**: de 16 fichas y 9 secciones (fundamentos internacionales, «sharenting», perspectiva de género, vía penal, protección de datos…) a 6 fichas sobre los arts. 59–60 LJV y su marco sustantivo, más plazos, participantes y normas.
- **Lector del BOE**: la LO 1/1982 numera sus apartados en letra («Uno.», «Dos.»); el lector no los reconocía y el comprobador daba 22 falsos «revisar». Corregido en commit propio (ad875f1) con prueba.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (denominación legal del art. 59.2).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | Ámbito | **error** | Menor de edad «art. 315 CC» | Retirado (la mayoría de edad está hoy en el art. 240 CC; no hacía falta citarla) | CC (Ley 8/2021) |
| 2 | Competencia | **error** | «Art. 86 ter LOPJ» y «Juzgados especializados en familia (art. 98 LOPJ)» | Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ); si no, Sección Civil | LO 1/2025 |
| 3 | Postulación | **error** | Ficha «Art. 59.4» (el art. 59 tiene tres apartados); «el art. 3 LJV solo impone postulación cuando la ley lo exija o el Juez lo acuerde» | Art. 59.3: sin abogado ni procurador para promover; para apelar, sí (art. 3.2 LJV) | LJV |
| 4 | Postulación | **error** | «Art. 7 LJV: no se impondrán costas salvo mala fe o temeridad» | Retirado: el art. 7 LJV dice que los gastos son a cargo del solicitante | LJV |
| 5 | Recurso | **error** | Plazos contradictorios: «5 días, art. 20.2 LJV» y «20 días, art. 458 LEC»; «arts. 455–467 LEC» | Veinte días (art. 458.1 LEC); el art. 20.2 LJV no fija plazo; efectos suspensivos y tramitación preferente (art. 60.4 LJV) | LJV, LEC |
| 6 | LO 1/1982 | **error** | «Art. 1.4 LO 1/1982» (no existe); «art. 9.3: presunción de perjuicio» atribuido a la revocación | Revocación: art. 2.3 (indemnización con expectativas justificadas); el art. 9 es la tutela contenciosa frente a intromisiones | LO 1/1982 |
| 7 | Legitimación | error | Cita literal del art. 162 CC que no coincide con el texto vigente; tutela «arts. 215 y ss., 222 y 228 CC»; defensor judicial «arts. 300 y ss. CC»; curatela «art. 269.III y 287 ss.» | Art. 162.1.º CC literal; curatela representativa solo excepcional y para actos concretos (art. 269 CC) | CC (Ley 8/2021) |
| 8 | Comparecencia | error | «Audiencia obligatoria desde los 12 años» | El menor tiene derecho a ser oído; se presume suficiente madurez con doce años (art. 9 LOPJM); la LJV cita al menor «si el Juez lo creyera necesario» (art. 60.2) | LOPJM, LJV |
| 9 | Tramitación | error | «Plazo de admisión: art. 17 LEC»; «presentación conforme a la Ley 39/2015»; «medidas cautelares del art. 158 CC y arts. 721 ss. LEC» como parte del expediente | Retirados; se añade el plazo de la comparecencia (30 días, art. 18.1 LJV) y la decisión sobre hechos no invocados (art. 19.2 LJV) | LJV |
| 10 | Varias | error | «EOMF art. 3.6 y 3.7»; LOPDGDD arts. 7, 84, 94; RGPD; DSA; «art. 26 LOPJM (mod. LOPIVI)»; CP; AJG | Retirados (decisión 9: fuera del expediente o sin comprobar) | — |
| 11 | Fundamentos | jurisprudencia | Von Hannover, Axel Springer (TEDH) | Retirados (decisión 10) | — |
| 12 | Nota final | error | «Si el MF no se opone en la comparecencia, el representante queda habilitado…» | Retirado: sin oposición del Fiscal en ocho días no hay expediente (art. 3.2 LO 1/1982) | LO 1/1982 |
| 13 | Competencia | desfasado | Juzgado de Primera Instancia; «Secretario judicial» | Sección de Familia, Infancia y Capacidad; Letrado de la Administración de Justicia | LO 1/2025; LO 7/2015 |
| 14 | — | incompleto | Sin la regla del art. 4.3 LOPJM | Añadida: el uso de la imagen del menor en medios contrario a sus intereses es intromisión ilegítima aunque conste el consentimiento | LOPJM |

## Para la fase 5 (G15)

La guía repite tres errores del esquema: «art. 98 LOPJ» (paso «competencia»), «art. 59.4» (paso «inicio») y «art. 1.4 LO 1/1982» (paso «revocacion»).

---

# Revisión · G15 · Guía de tramitación de la autorización del consentimiento a intromisiones en el honor, la intimidad y la propia imagen

- **Recurso**: `data/guias/ljv-honor-menor.js` (origen G15).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; LO 1/1982, LOPJM, LOPDGDD, CC, LEC y LOPJ en sus instantáneas.
- **Método**: fase 5. El recorrido (24 pasos) es correcto y se conserva con sus identificadores; se reescriben los bloques erróneos o sin base legal.
- **Resultado del comprobador**: 0 errores, 0 avisos (antes: 1 error, 2 avisos y 3 «revisar»); queda la denominación legal «Juzgado de Primera Instancia» (art. 59.2 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | competencia, inhibicion | **error** | Juzgados de Familia del «art. 98 LOPJ» (sin contenido); «declinatoria o conflicto» por los arts. 63–65 LEC | Hoy, Sección de Familia, Infancia y Capacidad (art. 86.5 j) LOPJ) o Sección Civil; el LAJ da cuenta al Juez, que remite tras oír al Fiscal y al solicitante (art. 16.3 LJV) | LOPJ 86.5; LJV 16.3 |
| 2 | inicio | **error** | Postulación por el «art. 59.4 LJV a contrario» (no existe) y el art. 3 | Art. 59.3: ni Abogado ni Procurador; documentos del art. 60.1 (proyecto de consentimiento, notificación de la oposición del Fiscal, representación legal); fuera los «poderes preventivos» como título de representación legal | LJV 59.3, 60.1 |
| 3 | revocacion, notificacion_auto | **error** | Indemnización «a terceros de buena fe» por el «art. 1.4 LO 1/1982» (no existe); «art. 26 LOPJM (LOPIVI)»; nota sobre *kidfluencers* | Revocable en cualquier momento, indemnizando los daños y perjuicios, incluidas las expectativas justificadas (art. 2.3 LO 1/1982); el Juez deja sin efecto el consentimiento (art. 60.5 LJV); firmeza por el art. 207 LEC (no 208) | LO 1/1982 2.3; LJV 60.5 |
| 4 | presupuesto, inadmision | error | La oposición del Fiscal «motivada» y «anterior a la solicitud» por el «art. 3.7 EOMF»; el Juez inadmite directamente | Consentimiento escrito, comunicación previa al Fiscal y oposición en ocho días (art. 3.2 LO 1/1982); consentimiento propio del menor maduro (art. 3.1); art. 4.3 LOPJM; el LAJ comprueba y, si no es admisible, da cuenta al Juez (art. 17.1); apelación (art. 20.2) | LO 1/1982 3; LOPJM 4.3; LJV 17, 20 |
| 5 | subsanacion, fin_archivo | error | «Plazo razonable, entre 5 y 10 días hábiles» (art. 231 LEC); archivo por decreto del LAJ | Cinco días (art. 16.4 LJV); como decide el Juez, el LAJ le da cuenta | LJV 16.4 |
| 6 | admision | error | «No existe un plazo legal específico para el señalamiento» | Comparecencia dentro de los treinta días siguientes a la admisión, con citación quince días antes (arts. 17.3 y 18.1) | LJV 17.3, 18.1 |
| 7 | citaciones | error | Citación del menor «obligatoria si tiene 12 años»; entidades públicas «si hay relevancia supraindividual» | Se cita al menor si el Juez lo cree necesario (art. 60.2), con su derecho a ser oído y la madurez presumida a los doce años (art. 9 LOPJM); otros interesados de oficio o a instancia del Fiscal; defensor por los arts. 163 y 295 CC | LJV 60.2; LOPJM 9 |
| 8 | cautelares | impreciso | Base en el «art. 9 LO 1/1982» y los «arts. 721 y ss. LEC» | Art. 158 CC; actuación del Fiscal (art. 4.2 LOPJM; art. 84.2 LOPDGDD) | CC 158; LOPJM 4.2 |
| 9 | comparecencia, audiencia | error | Si no comparece una parte «preceptiva», el acto se celebra; nulidad por omitir la audiencia; «art. 268 CC» | Si no asiste el solicitante, desistimiento y archivo (art. 18.2.1.ª); garantías de la exploración del art. 18.2.4.ª (acto separado, acta del LAJ, traslado en cinco días, valoración motivada) | LJV 18.2 |
| 10 | deliberacion | inventado | «Juicio de proporcionalidad triple»; criterios del interés superior propios (huella digital, IA generativa, perspectiva de género) | Criterios del art. 2.2 LOPJM; art. 4.3 LOPJM; auto (art. 19.1); plazo del art. 60.3 | LOPJM 2, 4; LJV 19, 60.3 |
| 11 | apelacion_*, fin_denegacion_ap | error | «Arts. 455–467 LEC», «art. 82.2 LOPJ»; casación contra el auto de la Audiencia «en los supuestos del art. 477» | Veinte días ante la Audiencia (art. 458), suspensiva y preferente (art. 60.4); no cabe casación, que el art. 477.1 LEC reserva a las sentencias | LJV 60.4; LEC 458, 477 |
| 12 | auto_autoriza, auto_condiciona | impreciso | «Art. 2.1 LO 1/1982»; condición de «contraprestación con depósito judicial» | Art. 2.2; quitada la condición sin base | LO 1/1982 2.2 |
| 13 | actores, pie | forma | «LAJ», «LAJ + Juez» | Nombres completos; pie con las normas citadas | — |

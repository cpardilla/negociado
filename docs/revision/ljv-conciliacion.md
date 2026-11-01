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

## Criterio del propietario y comprobación de la LO 1/2025 (2026-10-30) — decisión 14

- **Umbral del Juez de Paz**: se aplica el de **10.000 €** (art. 47.2 LEC, redacción del art. 22.8 LO 1/2025). El art. 14.6 LO 1/2025 remite la conciliación ante el juez de paz al art. 47 LEC y al título IX LJV; el límite de 6.000 € del art. 140.1 LJV queda desplazado en lo incompatible. Exactamente 10.000 € o más: no. Cautela anotada en el esquema: si entre 6.000 y 10.000 € cabe también la competencia del LAJ no está resuelto expresamente.
- **Medios adecuados de solución de controversias**: el art. 5.1 LO 1/2025 incluye expresamente la conciliación entre los medios que cumplen el requisito de procedibilidad (con identidad de objeto); excepciones en el art. 5.2; arts. 14.5 y 14.6 (régimen de la conciliación ante el LAJ y el juez de paz). Añadido a la ficha del art. 139.
- **Fuente**: texto consolidado de la LO 1/2025 en la web del BOE (`buscar/act.php?id=BOE-A-2025-76`), consultado el 2026-10-30, porque la API de datos abiertos devolvía error 500. **Pendiente**: añadir la instantánea `sources/boe/` de la LO 1/2025 cuando la API responda, para que el comprobador verifique también estas citas.

---

# Revisión · G25 · Guía de tramitación de la conciliación (Título IX)

- **Recurso**: `data/guias/ljv-conciliacion.js` (origen G25).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; LEC a 07-10-2026 (art. 47.2 en la redacción de la LO 1/2025); CC y LOPJ en sus instantáneas.
- **Método**: fase 5. El recorrido (51 pasos) sigue bien los arts. 139 a 148 LJV y se conserva; se corrigen numerosas citas y afirmaciones sin base. Aplicada la decisión 14, como en E28.
- **Resultado del comprobador**: 0 errores, 0 avisos; quedan las denominaciones legales «Juzgado de Primera Instancia» y «Juzgado de lo Mercantil» (art. 140.1 LJV), con las secciones actuales indicadas.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | verifica_competencia, competencia_tipo | **desfasado** | Juez de Paz si la cuantía es inferior a 6.000 € «(art. 140.3)» o «sin JPI en la localidad» | Inferior a 10.000 € y no mercantil (art. 47.2 LEC, LO 1/2025), que desplaza los 6.000 € del art. 140.1; cautela sobre la concurrencia con el LAJ entre 6.000 y 10.000 € (decisión 14) | LEC 47.2; LJV 140.1 |
| 2 | avenencia_total, fin_avenencia_firme | **error** | El acuerdo produce «cosa juzgada material (CC art. 1216)» | Título ejecutivo (testimonio del acta y del decreto o auto) y, a otros efectos, valor de convenio en documento público y solemne (art. 147.1); el art. 1216 CC solo define el documento público | LJV 147.1 |
| 3 | competencia_domicilio, competencia_ultima_residencia | **error** | Última residencia si «no se conoce el domicilio actual»; «LEC art. 51» | Si el requerido no tiene domicilio en territorio nacional (art. 140.1) | LJV 140.1 |
| 4 | competencia_domicilio_desconocido | incompleto | Solo el domicilio desconocido; «STS 15-3-2004» | También si se le localiza en otro partido; decreto o auto que termina el expediente con reserva (art. 140.1, párrafo tercero) | LJV 140.1 |
| 5 | comparecencia_solicitante | error | Poder para transigir por el «art. 1809 CC» | Mandato expreso (art. 1713 CC) | CC 1713 |
| 6 | incomp_sol_justacausa, testimonio_gastos | inventado | «Tres días para justificar»; «cinco días para expedir testimonio»; gastos «salvo pacto»; «exención de tasa (Ley 10/2012, art. 4)» | Quitados; art. 146 (testimonio; gastos de quien promovió) | LJV 144, 146 |
| 7 | fin_desistimiento | error | Indemnización por los arts. 1101 y 1107 CC y «temeridad del art. 394 LEC» | Reclamación del requerido con traslado de cinco días y resolución sin ulterior recurso (art. 144.2) | LJV 144.2 |
| 8 | subsanar, fin_desistimiento_sol | error | Falta de subsanación: «se tendrá por desistido» | Cinco días; si no, se tiene por no presentada la solicitud y se archiva (art. 16.4) | LJV 16.4 |
| 9 | efectos_prescripcion, fin_*, sin_avenencia | error | «CC art. 1974» (es el de las obligaciones solidarias); «STS 23-5-2000, 14-3-2006» | Nuevo cómputo desde el decreto o auto que pone término (art. 143); art. 1973 CC | LJV 143; CC 1973 |
| 10 | fin_excluido_* | error | «Capacidad modificada judicialmente», «LO 8/2021», «CE 39», «Ley 40/2015 arts. 47 y 77», «LOPJ 295 y ss.», «ET art. 3.5», «CE 15 y 18» | Texto vigente del art. 139.2 y sus cuatro supuestos; arts. 1809 y 1814 CC en lo no transigible | LJV 139.2 |
| 11 | verifica_acuerdo, fin_impeditiva | error | Terceros por el «art. 1256 CC»; sin el art. 140.2 | Art. 1257 CC; cuestiones de competencia o recusación: conciliación intentada (art. 140.2) | CC 1257; LJV 140.2 |
| 12 | solicitud | impreciso | «Exposición de hechos y fundamentos jurídicos»; interrupción de la prescripción por la sola presentación | Contenido del art. 141.1 (incluida la fecha); interrupción si la solicitud se admite (art. 143) | LJV 141, 143 |
| 13 | fin_avenencia_firme, ejecucion | impreciso | Ejecución «dentro de 5 años (LEC 518)» como regla | El art. 518 LEC fija esa caducidad para sentencias y resoluciones que aprueban transacciones o acuerdos y no menciona la conciliación | LEC 518 |
| 14 | competencia_pj, inicio, fin_abuso, varios | impreciso | «Art. 140.1, párrafo cuarto», «STJUE Somafer»; fundamento en el «art. 39 CE»; «CC art. 11.2»; «JPI» | Párrafo segundo y acreditación del establecimiento; quitados; arts. 6.4 y 7.2 CC; secciones actuales; actores con nombre completo | LJV 140.1 |

**Jurisprudencia retirada** (decisión 10), para reincorporarla con su ECLI si el propietario la aporta: STS 15-3-2004 (domicilio desconocido), STS 23-5-2000 y 14-3-2006 (prescripción), STS 12-7-2002 (avenencia parcial) y STJUE Somafer, 22-2-1979 (establecimiento secundario).

## Corrección posterior (2026-11-01) · Decisión 20: en competencia, la LEC antes que el CC

Corte del BOE: LEC a 07-10-2026; CC a 07-09-2026; LJV a 05-03-2026.

| Recurso | Lugar | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| G25 | competencia_domicilio | **error** | Domicilio como residencia habitual (art. 40 CC) y «domicilio social para personas jurídicas», sin fuente; «art. 140.1» sin ley, que la app no enlazaba | Arts. 50.1 y 51.1 LEC, con los arts. 40 y 41 CC para definir el domicilio; «art. 140.1 LJV» | LEC 50.1, 51.1; CC 40, 41 |
| G25 | competencia_pj | incompleto | Solo el art. 140.1 LJV | Se añade «cf. art. 51.1 LEC», como ya hacía el esquema E28 | LEC 51.1 |

E28 no cambia: cita el art. 51.1 LEC y no cita los arts. 40 y 41 CC.

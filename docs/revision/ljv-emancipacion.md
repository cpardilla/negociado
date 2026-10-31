# Revisión · E16 · LJV · Emancipación y beneficio de la mayor edad (arts. 53–55)

- **Recurso**: `data/esquemas/ljv-emancipacion.js` (origen E16).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; CC a 07-09-2026; LRC y LOPJ en sus instantáneas.
- **Método**: como E01–E15; decisiones 9 y 10. **Rehecho** desde el texto vigente.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema (antes, 83 errores). Los 50 errores restantes del par son de la guía G13 (fase 5).

## Hallazgo principal: los arts. 314–324 CC están sin contenido

La Ley 8/2021 trasladó la emancipación a los **arts. 239–248 CC**. El esquema citaba la numeración antigua en todas sus fichas, y además mezclaba contenidos de distintas épocas. El propio art. 53 LJV conserva la referencia a los antiguos arts. 320 y 321 CC; se advierte en la ficha.

| Antigua | Vigente | Contenido |
|---|---|---|
| 314 | **239** | Formas de emancipación |
| 315 | **240** | Mayor edad: dieciocho años |
| 317 | **241** | Concesión por los progenitores |
| 318 | **242** | Inscripción e irrevocabilidad |
| 319 | **243** | Vida independiente |
| 320 | **244** | Emancipación judicial |
| 321 | **245** | Beneficio de la mayor edad |
| 322 | **246** | Capacidad del mayor de edad |
| 323 | **247** | Capacidad del emancipado y sus limitaciones |
| 324 | **248** | Casado menor de edad y bienes comunes |

## Otros hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 53.2, efectos | **error** | «El beneficio de la mayor edad otorga capacidad plena, sin las limitaciones del emancipado» | Tiene las **mismas limitaciones**: el art. 247 CC se aplica expresamente al menor que obtiene judicialmente el beneficio de la mayor edad | art. 247 CC |
| 2 | Efectos, CC | **error** | «Formas de emancipación: … por el matrimonio»; «el emancipado casado no necesita el consentimiento de sus padres (art. 315.2)» | El matrimonio ya no emancipa (los menores no emancipados no pueden casarse, art. 46 CC). El art. 248 regula solo los bienes comunes del casado menor | CC |
| 3 | Efectos | error | A falta de progenitores, consentimiento «del curador» | Del **defensor judicial** (art. 247 CC) | CC |
| 4 | 53.2, ecosistema | error | «Art. 321 CC: la mayor edad empieza a los 18 años» | Mayor edad: art. 240; beneficio de la mayor edad: art. 245 (antes 321) | CC |
| 5 | Tutela | error | «Art. 232 CC: vigilancia del Ministerio Fiscal» | Vigilancia: art. 209; el art. 232 es la rendición de cuentas del tutor | CC |
| 6 | 53.3 | error | «Al formularse oposición, el expediente adquiere naturaleza contenciosa» | La oposición solo hace preceptiva la asistencia de letrado; no hace contencioso el expediente (art. 17.3 LJV) | LJV |
| 7 | 53.3 | error | «Art. 32.5 LEC: el Fiscal podrá designar abogado y procurador de oficio» | Retirado (el art. 32 LEC regula la intervención voluntaria de abogado y procurador) | LEC |
| 8 | 55.2 | error | Resolución «decreto del Secretario judicial o auto del Juez» | Decide el Juez, por auto (art. 55.2 y art. 19.1 LJV) | LJV |
| 9 | Competencia | error | «Art. 82 LOPJ: Juzgados de Primera Instancia y jurisdicción voluntaria» | El art. 82 LOPJ es de las Audiencias; competencia: Sección de Familia, Infancia y Capacidad (art. 86.5 j) LOPJ) | LOPJ |
| 10 | 54.1, 55.1 | error | «Ley 15/2015 art. 10» (ley aplicable internacional); citación «arts. 165 y ss. LEC» (auxilio judicial) | Retirados; citación con quince días (art. 17.3 LJV) | LJV, LEC |
| 11 | Plazos | error | Tabla con «sin plazo específico» en casi todas las filas | Plazos reales de la LJV (17.3, 18.1, 19.1, apelación) y el del art. 168 CC | LJV, CC |
| 12 | Marco general | estilo | Ocho fichas que repetían las normas generales de la LJV, con errores (art. 1 «ante Notarios y Registradores», art. 17 «examina la competencia»…) | Una ficha de remisión a E06 y E07 (DRY) | — |
| 13 | Varios | desfasado | «Secretario judicial», «Juez de Primera Instancia» | LAJ; Sección de Familia | LO 7/2015, LO 1/2025 |

---

# Revisión · G13 · Guía de tramitación de la emancipación y del beneficio de la mayoría de edad

- **Recurso**: `data/guias/ljv-emancipacion.js` (origen G13).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; CC a 07-09-2026; LEC a 07-10-2026; LOPJ a 09-10-2026.
- **Método**: fase 5. La guía seguía bien los arts. 53 a 55 LJV: **corregida**, no rehecha; se conservan los 27 pasos y sus identificadores.
- **Resultado del comprobador**: sin hallazgos (antes: 49 errores de cita, 1 de grafo y 1 «final con salidas»).

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | toda la guía | **error** | Arts. 314–324 CC (sin contenido desde la Ley 8/2021); tutela «art. 222», extinción de la tutela «art. 271», Registro «arts. 218 y 219», vigilancia «art. 232» | La tabla de equivalencias de E16 (emancipación judicial, art. 244; beneficio, art. 245; inscripción e irrevocabilidad, art. 242; capacidad, art. 247; casado menor, art. 248); tutela de menores, art. 199; extinción por el beneficio, art. 231.1.º. Nota en el inicio: el art. 53 LJV aún dice «320 y 321» | CC 199, 231, 239–248 |
| 2 | fin_denegada, fin_denegada_sin_recurso | **error** | `fin_denegada` era final y tenía salidas (una, a `null`); `fin_denegada_sin_recurso`, inalcanzable | `fin_denegada` es un paso con la pregunta del recurso; «No» lleva a `fin_denegada_sin_recurso` | — |
| 3 | inicio, solicitud_postulacion, oposicion_letrado | **error** | Con oposición, «Abogado y Procurador» / «Abogado para todas las partes»; la oposición «transforma la naturaleza del expediente» | Solo asistencia de letrado desde la oposición (art. 53.3); la oposición no hace contencioso el expediente (art. 17.3); Abogado y Procurador para los recursos (art. 3.2) | LJV 3.2, 17.3, 53.3 |
| 4 | solicitud_quien | incompleto | Sin el caso de falta de asistencia | Defensor judicial y, entretanto, representación del Ministerio Fiscal (art. 54.1); nueva opción | LJV 54.1 |
| 5 | admision_revision, fin_inadmitida | error | El «Secretario judicial» inadmite; «en el plazo más breve posible»; recursos «del art. 19» | El LAJ admite (art. 55.1); subsanación en cinco días (art. 16.4); si no es admisible, da cuenta al Juez (art. 17.1); contra el auto, apelación (art. 20.2) | LJV 16, 17, 20, 55 |
| 6 | recurso_apelacion, fin_denegada | error | «Art. 19 LJV», «LEC supletoria, art. 4 LJV» | Apelación del art. 20.2 LJV, veinte días ante la Audiencia (arts. 458 y 461 LEC); supletoriedad, art. 8 LJV | LJV 8, 20.2; LEC 458 |
| 7 | inscripcion_*, efectos_*, fin_* | error | Inscripción «sin dilación (arts. 218–219 CC)»; inoponible «a terceros de buena fe»; emancipación irrevocable «una vez inscrita»; beneficio «irrevocable una vez inscrito»; resolución «firme» al concederse | Testimonio al Registro Civil (art. 55.3; art. 22.2 LJV); sin efectos contra terceros hasta la inscripción y no revocable una vez concedida (art. 242 CC); quitado lo del beneficio, que la ley no dice | LJV 55.3; CC 242 |
| 8 | efectos_emancipacion | desfasado | Consentimiento «de sus padres o curador» | De sus progenitores y, a falta de ambos, de su defensor judicial (arts. 247 y 248 CC) | CC 247, 248 |
| 9 | competencia, comparecencia_*, resolucion_criterios | incompleto | Competencia por «art. 17 LJV»; sin plazo de citación; «conclusiones orales»; archivo por «Juez o Secretario judicial» | Art. 53.1 y 2; hoy Sección de Familia, Infancia y Capacidad (art. 86.5 j) LOPJ); citación con quince días (art. 17.3); orden de audiencia del art. 55.1; informe del Fiscal en el beneficio (art. 245 CC); auto en cinco días (art. 19.1); archivo por el Juez | LJV 17–19, 53, 55; LOPJ |
| 10 | actores, documentación | forma / impreciso | «LAJ»; «certificado de defunción» como prueba de la causa | Letrado de la Administración de Justicia; documentos de los tres supuestos del art. 244 CC | — |

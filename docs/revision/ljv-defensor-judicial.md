# Revisión · E12 · LJV · Habilitación para comparecer en juicio y defensor judicial (arts. 27–32)

- **Recurso**: `data/esquemas/ljv-defensor-judicial.js` (origen E12).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; CC a 07-09-2026; LEC a 07-10-2026; LRC y LO 1/1996 en sus instantáneas.
- **Método**: como E01–E10; decisiones 9 y 10. El esquema seguía bien la LJV: **corregido**, no rehecho.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 3 «revisar» intencionados (la cita literal de «Secretario judicial» del art. 32, la denominación del art. 28 y la mención histórica de la incapacitación en la nota de la Ley 8/2021).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 32 | **error** | Remoción «decisión del Juez (art. 49.3)» y rendición de cuentas «por auto del Juez» también para el defensor judicial | El art. 32 LJV dispone que, para el defensor judicial, el inventario, la excusa, la remoción y la rendición de cuentas «se tramitarán y decidirán por el Secretario judicial competente» (hoy, LAJ). El Juez decide en la tutela y la curatela (arts. 49.3 y 51.3) | art. 32 LJV |
| 2 | 27, 30 | **error** | La inscripción en el Registro Civil del art. 30.3 se refiere al supuesto de imposibilidad de hecho del art. 27.2.c) («único supuesto que exige inscripción») | El art. 30.3 remite a la letra c) del **apartado 1** del art. 27, suprimida por la Ley 8/2021 (defensor para administrar bienes mientras se constituía la tutela o curatela; hoy, art. 295.4.º CC). No tiene que ver con el art. 27.2.c). Se señala la remisión desfasada y el art. 74 LRC | LJV (versiones del BOE), CC, LRC |
| 3 | 28 | error | Fueros «en cascada» con el del juzgado que conoce del asunto como «3.º» subsidiario | Es alternativo: «o, en su caso», el del juzgado que esté conociendo del asunto | art. 28.1 LJV |
| 4 | 28 | estilo | «Tensión doctrinal… la solución dominante es…» | Se constata la diferencia de términos (CC: «autoridad judicial»; LJV: LAJ) sin afirmar una doctrina no verificable | — |
| 5 | 27 | error | «Cuando el MF inste medidas de apoyo (arts. 42 bis a) LJV y 758 LEC)» | Cuando esté legitimado en el procedimiento de medidas de apoyo instado por el Fiscal (art. 27.3; art. 758 LEC) | LJV, LEC |
| 6 | 27 | incompleto | «Art. 50.3: durante la excusa del tutor o curador» | Solo si quien se excusa no ejerce la función (art. 50.3); véase el art. 295.3.º CC | LJV, CC |
| 7 | 30 | error | Garantías de la audiencia del menor «art. 18.4.ª LJV» | Art. 18.2, regla 4.ª | LJV |
| 8 | 32 | error | Excusa en 15 días «desde el nombramiento» / «desde la notificación» | Desde que se tenga conocimiento del nombramiento (art. 50.1) | LJV |
| 9 | Ecosistema | error | Art. 758 LEC «nuevo plazo de 20 días» | Retirado (no verificado); se describe lo que regula | LEC |
| 10 | 31 | estilo | El defensor comunica «a fin de que el órgano declare formalmente la extinción»; «correspondencia simétrica» con las causas del art. 27.2 | Lo que dice el art. 31 | LJV |
| 11 | Participantes | error | «Juez de Primera Instancia (remoción, rendición de cuentas)»; «Registro Civil (supuesto c) art. 27.2)» | LAJ (art. 32); Juez, revisión de los decretos del LAJ; Registro Civil en el caso del art. 30.3 | LJV |
| 12 | Varios | desfasado | «Secretario judicial», «JPI» en el texto explicativo | LAJ; Sección Civil del Tribunal de Instancia | LO 7/2015, LO 1/2025 |

## Herramienta común (commit propio)

«Art. 42 bis a) LJV» se leía como la letra a) del art. 42 bis (que no existe): la LJV numera tres artículos «42 bis a), b) y c)». Un sufijo seguido de letra, sin apartado, es ahora el artículo. Afecta también al esquema de medidas judiciales de apoyo (E14).

## Para el propietario

La remisión del art. 30.3 LJV a una letra suprimida es un defecto del propio texto legal tras la Ley 8/2021. Si el juzgado tiene un criterio práctico sobre qué nombramientos de defensor judicial se comunican al Registro Civil, conviene incorporarlo a la ficha.

## Corrección posterior (2026-10-29)

Competencia: donde exista, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia, con carácter exclusivo y excluyente (art. 86.5 LOPJ); si no, la Sección Civil. Detectado al revisar E13 (véase `ljv-adopcion.md`).

---

# Revisión · G09 · Guía de tramitación de la habilitación para comparecer en juicio y del nombramiento de defensor judicial

- **Recurso**: `data/guias/ljv-defensor-judicial.js` (origen G09).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; CC a 07-09-2026; LEC a 07-10-2026; LOPJ a 09-10-2026.
- **Método**: fase 5. Contraste paso a paso con los arts. 16 a 22 y 27 a 32 LJV, los arts. 49 a 51 LJV (aplicables por remisión del art. 32), los arts. 235–236 y 295–298 CC y el art. 454 bis LEC. Se conservan los identificadores de paso; se retiran tres pasos y se reescriben los de excusa, remoción y cuentas.
- **Resultado del comprobador**: 0 errores, 0 avisos (antes: 4 avisos «art. 17.4»); queda la denominación legal «Juzgado de Primera Instancia» (art. 28.1 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | verif_imposibilidad, competencia_rc, inscripcion_rc, resolucion_estimatoria | **error** | El art. 30.3 LJV (inscripción en el Registro Civil) se aplicaba a la imposibilidad de hecho del art. 27.2.c), «único supuesto que exige inscripción», con pasos propios | El art. 30.3 remite a la letra c) del art. 27.1, suprimida por la Ley 8/2021 (hoy art. 295.4.º CC); nota en dos pasos y **pregunta abierta al propietario**; pasos `competencia_rc` e `inscripcion_rc` retirados | LJV 27, 30.3; CC 295 |
| 2 | excusa, remocion, rendicion_cuentas, comparecencia_cuentas, aprobacion_cuentas | **error** | Remoción «corresponde al JUEZ (art. 49.3)»; cuentas «por auto del Juez (art. 51.3)», pericial contable de oficio, rendición «en 3 meses desde el cese», «acciones recíprocas (art. 51.5)» | Las tramita y decide el LAJ (art. 32 LJV), con el procedimiento de los arts. 49, 50 y 51.2; contra su decreto, revisión ante el Juez. Retirados el plazo de 3 meses y el art. 51.5 (el art. 51 tiene tres apartados) | LJV 32, 49–51; CC 297–298 |
| 3 | resolucion_desestimatoria, recurso_apelacion | **error** | Contra el decreto del LAJ cabía revisión o apelación | Solo revisión ante el Juez (art. 20.2 LJV), en cinco días (art. 454 bis LEC), con abogado y procurador; paso `recurso_apelacion` retirado | LJV 3.2, 20.2; LEC 454 bis |
| 4 | admision, subsanacion, fin_* | error | Subsanación «art. 17.4 LJV», «5 días hábiles» | Art. 16.4 LJV, cinco días | LJV 16.4 |
| 5 | admision | error | Suspensión de plazos «desde la presentación de la solicitud»; el MF representa siempre, con cita del «art. 8.2 LEC» | Desde que se solicita la habilitación hasta la aceptación o el archivo firme; el MF solo si es demandado o ha quedado sin representación (art. 29 LJV) | LJV 29 |
| 6 | convocatoria, comparecencia, practica_prueba, comparecencia_oposicion | error | «Art. 18.4.ª / 18.5.ª / 18.6.ª LJV»; mayor de 12 años citado por el «art. 9 LO 1/1996»; «el MF puede proponer diligencias (art. 5)» | Art. 18.2, 4.ª, 5.ª y 6.ª; art. 30.1 LJV; diligencias de oficio o a instancia del MF (art. 18.2, 4.ª); acta de la exploración en todo caso | LJV 18, 30.1 |
| 7 | ejercicio_cargo | sin base | Obligaciones inventadas (liberalidades, etc.) | Las de los arts. 235–236, 297 y 298 CC y el art. 31 LJV | CC, LJV |
| 8 | cesacion_causa | sin base | «Comunicar la extinción al Registro Civil por analogía con el art. 30.3»; cita del art. 22 | Retirados | LJV 31 |
| 9 | decision_fondo | impreciso | Cinco días «desde la comparecencia o desde la última diligencia» | O, si no se celebró, desde la última diligencia (art. 19.1) | LJV 19.1 |
| 10 | fin_desistimiento, fin_inadmision | sin base | «Sin causa justificada… puede acreditarse»; cita del art. 21 (caducidad); «o da cuenta al Juez» | Retirados: el art. 18.2, 1.ª no prevé la justificación; resuelve el LAJ | LJV 17.1, 18.2 |
| 11 | competencia | desfasado | «Juzgado de Primera Instancia» sin más | Hoy, Sección de Familia, Infancia y Capacidad (art. 86.5 LOPJ) o Sección Civil | LO 1/2025 |
| 12 | todos | terminología | 21 × «Secretario judicial», «JPI» | Letrado de la Administración de Justicia; Juzgado de Primera Instancia | LO 7/2015 |

Pasos: 44 → 41 (retirados `competencia_rc`, `inscripcion_rc`, `recurso_apelacion`).

**Pregunta al propietario** sobre el art. 30.3 LJV: resuelta el mismo día (decisión 15; véase abajo).

## Corrección posterior (2026-10-31) · Decisión 15: comunicación al Registro Civil

Criterio del propietario (ROADMAP §10, decisión 15), contrastado con el BOE (LJV a 05-03-2026; CC a 07-09-2026; LRC a 24-02-2026): redacción anterior del art. 27.1.c) LJV; arts. 250, 295, 299 bis (derogado) y 300 CC; arts. 4.11.º y 4.13.º, 72.1 y 74.1 LRC; art. 22.2 LJV.

| Recurso | Lugar | Antes | Ahora |
|---|---|---|---|
| G09 | resolucion_estimatoria | Nota: remisión del art. 30.3 a una letra suprimida; pregunta abierta | Lista de comunicación al Registro Civil por testimonio (art. 22.2 LJV): sí en el art. 295.4.º CC (arts. 30.3 LJV y 74.1 LRC); sí en cualquier otro defensor de persona con discapacidad, que es medida de apoyo (art. 250 CC; art. 72.1 LRC; art. 300 CC); sí en el del menor emancipado (art. 4.13.º LRC); no, por defecto, en el del menor no emancipado para un asunto concreto. Nota: las remisiones desfasadas de los arts. 30.3 LJV y 74.1 LRC se leen referidas al art. 295.4.º CC |
| G09 | verif_imposibilidad | Nota larga con la pregunta abierta | Remisión breve al paso del decreto |
| E12 | Artículo 30 › Inscripción en el Registro Civil | Remisión desfasada del art. 30.3 | Añadida la del art. 74.1 LRC y el criterio de comunicación; normas y claves actualizadas |
| E12 | Sujetos | «Registro Civil (art. 30.3; art. 74 LRC)» | Art. 30.3 LJV leído con el art. 295.4.º CC; arts. 4.11.º, 4.13.º, 72 y 74 LRC |

Comprobador tras el cambio: 2 «errores» intencionados (la mención del art. 299 bis CC, derogado, al explicar la remisión desfasada del art. 74.1 LRC), uno en G09 y otro en E12.

## Corrección posterior (2026-11-03) · Cita del art. 74 LRC

Ecosistema normativo › Otras leyes: «Ley 20/2011 (Registro Civil), art. 74» pasa a «Art. 74 de la Ley 20/2011 (Registro Civil)», que enlaza. Sin cambio de fondo.

## Corrección posterior (2026-11-03) · Relectura, sexta tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda6.md`, aplicados con el visto bueno del propietario.

### Guía

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 1 | causa_directa | «tres supuestos tasados del art. 27.3» | Añadida la ruta del art. 27.1; el límite solo para el art. 27.3 | LJV 27.1, 27.3; CC 163, 235, 295 |
| 2 | causa_directa | Sin el caso de que no haya otro progenitor o tutor | Incluido | LJV 27.3 |
| 3 | comparecencia_oposicion | Prueba del opositor en diez días | Suprimido | LJV 18.2.4.ª |
| 5 | rendicion_cuentas | Sin plazo de presentación | Tres meses | LJV 51.4 |
| 7 | cesacion_causa, cesacion_representante, verif_negativa, fin_no_procede, fin_limite_directo | Contenidos sin fuente | Rotulados o suprimidos | LJV 31 |
| 8 | excusa | Sin la salvedad de las personas jurídicas | Añadida | LJV 50.1 |

### Esquema (misma tanda)

| # | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 4 | Art. 50, excusa rechazada | «soporta todos los gastos del expediente» | Solo si dejó de ejercer, los ocasionados por la excusa | LJV 50.3 |
| 6 | Índice de plazos | Sin cuatro plazos; «normas supletorias» | Añadidos; suprimido | LJV 13, 16.4, 17.3, 51.2; LEC 454 bis |

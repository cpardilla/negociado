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

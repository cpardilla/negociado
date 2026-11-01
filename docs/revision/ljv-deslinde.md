# Revisión · E26 · LJV · Deslinde de fincas no inscritas (arts. 104–107)

- **Recurso**: `data/esquemas/ljv-deslinde.js` (origen E26).
- **Fecha de revisión**: 2026-10-30.
- **Corte del BOE**: LJV a 05-03-2026; CC (arts. 384–387), LH, LEC y LOPJ en sus instantáneas.
- **Método**: como E01–E25; decisiones 9 y 10. **Corregido, no rehecho**: los arts. 104–107 LJV y 384–387 CC están bien reproducidos; los errores estaban en los comentarios.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (denominación legal del art. 105.1).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 105, ecosistema | **error** | «Los 6.000 € coinciden con el límite entre juicio verbal y ordinario» | El juicio verbal llega hoy a 15.000 € (art. 250.2 LEC); los 6.000 € solo rigen la postulación del expediente | LEC |
| 2 | 106, ecosistema | **error** | «El art. 17.3 LJV prevé el archivo cuando la oposición convierte el expediente en contencioso» | Es al revés: la oposición no lo hace contencioso salvo que la ley disponga otra cosa; el art. 106.2 es esa regla especial | LJV |
| 3 | 105, participantes | **error** | «Por debajo de 6.000 €, abogado y procurador facultativos»; procurador «facultativo por debajo de 6.000 €» | La ley solo exige abogado por encima de 6.000 €; el procurador no se exige en la tramitación; ambos, para recurrir (art. 3.2 LJV) | LJV |
| 4 | 104, 106, 384, 387 | jurisprudencia | «La doctrina y la jurisprudencia admiten…», «la jurisprudencia exige confusión de linderos», «STS de 11-2-2016», «doctrina del TS sobre el art. 387», «la DGSJFP admite…» | Retiradas (decisión 10) | — |
| 5 | 107 | error | «No produce cosa juzgada material en sentido estricto» | Retirado; se dice lo que prevé la ley: el juicio declarativo queda abierto (art. 106.2 y falta de avenencia) | LJV |
| 6 | 107, plazos | incompleto | Sin recursos | Revisión ante el Juez en cinco días contra el decreto del LAJ (art. 20.2 LJV; art. 454 bis LEC) | LJV, LEC |
| 7 | 104, ecosistema | error | «Ley 33/2003, arts. 50 y ss. / 50 a 54» | Sin artículos (no comprobados): la ley y la normativa sectorial, como ejemplo | — |
| 8 | 105, participantes | desfasado | Juzgado de Primera Instancia; «Secretario judicial» (× 11) | Sección Civil del Tribunal de Instancia (art. 85 LOPJ); Letrado de la Administración de Justicia | LO 1/2025, LO 7/2015 |

## Para la fase 5 (G23)

La guía dice «Secretario judicial» × 11 y «Juzgado de Primera Instancia» × 4; comprobar si repite la equivalencia 6.000 € = juicio verbal y la lectura del art. 17.3.

---

# Revisión · G23 · Guía de tramitación del deslinde de fincas no inscritas

- **Recurso**: `data/guias/ljv-deslinde.js` (origen G23).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; CC, LH, LEC y LOPJ en sus instantáneas.
- **Método**: fase 5. La guía reproducía fielmente los arts. 104 a 107 LJV y el art. 200 LH (comprobados): **corregida**; se conservan los 24 pasos.
- **Resultado del comprobador**: 0 errores, 0 avisos; queda la denominación legal «Juzgado de Primera Instancia» (art. 105.1 LJV), con la sección actual indicada. **Pendientes del ROADMAP** (6.000 € y juicio verbal; art. 17.3): resueltos abajo.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | con_abogado, fin_inscrita | **error** | Los 6.000 € «coinciden con la cuantía que delimita el juicio verbal y el ordinario» | Solo fijan la postulación; el juicio verbal llega hoy a 15.000 € (art. 250.2 LEC), como ya dice el esquema | LJV 105.3; LEC 250.2 |
| 2 | archivo_parcial | error | Archivo «por el art. 17.3 LJV (régimen general)» | Art. 106.2, párrafo segundo: regla especial frente al art. 17.3, que dice que la oposición no hace contencioso el expediente | LJV 17.3, 106.2 |
| 3 | documentacion, rep_grafica, rep_alternativa, acto_deslinde | error | Párrafos «segundo y tercero», «cuarto a sexto», «quinto y sexto» del art. 106.1 y «tercero» y «cuarto» del 106.2 | El art. 106.1 tiene dos párrafos y el 106.2, dos | LJV 106 |
| 4 | confusion_lindes, fin_sin_confusion, solicitud | jurisprudencia | Requisito de «confusión de linderos» atribuido a la jurisprudencia del TS (STS 14-10-1991); deslinde parcial «avalado por la jurisprudencia y la DGSJFP» | Retirada la jurisprudencia no verificada (decisión 10); el paso se apoya en el art. 384 CC; el deslinde parcial lo prevé el propio art. 106.1 | CC 384; LJV 106.1 |
| 5 | fin_avenencia_total, fin_avenencia_parcial, fin_sin_avenencia | incompleto | Sin recurso | Revisión ante el Juez contra el decreto (art. 20.2 LJV; art. 454 bis LEC) | LJV 20.2 |
| 6 | varios | terminología | «Secretario judicial» × 11; «art. 1.2 LJV» | LAJ; hoy, Sección Civil | LO 7/2015 |

**Jurisprudencia retirada** (decisión 10), para reincorporarla con su ECLI si el propietario la aporta: STS, Sala 1.ª, 14-10-1991 (confusión de linderos como presupuesto de la acción de deslinde).

## Corrección posterior (2026-11-01) · Citas de los bloques de normas

La app leía las citas sueltas de cada bloque como de la ley del recurso; ahora, como de la ley que nombra el bloque. Estas se refieren a otra ley y se nombra expresamente. Sin cambio de fondo.

| Antes | Ahora |
|---|---|
| Título VI de la Ley 15/2015 por el artículo 104. | Título VI de la Ley 15/2015 por el artículo 104 LJV. |
| al que remite el artículo 107.3 para | al que remite el artículo 107.3 LJV para |
| representación gráfica del artículo 106. | representación gráfica del artículo 106 LJV. |

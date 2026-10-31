# Revisión · E13 · LJV · Adopción (arts. 33–42)

- **Recurso**: `data/esquemas/ljv-adopcion.js` (origen E13).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; CC a 07-09-2026; LEC a 07-10-2026; LOPJ a 09-10-2026 (LO 1/2025).
- **Método**: como E01–E12; decisiones 9 y 10. El esquema reproducía casi literalmente la LJV y el CC: **corregido**, no rehecho.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 2 «revisar» falsos o intencionados («cincuenta años» en letra frente a «50 años» en la tabla; la denominación legal del art. 33).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 39 | **error** | Dos afirmaciones contradictorias: la apelación «sin efectos suspensivos» (texto legal) y «que tendrá efectos suspensivos» | Retirada la segunda: el art. 39.4 dice que la apelación es preferente y **sin efectos suspensivos** | art. 39.4 LJV |
| 2 | 37 | **error** | Demanda sobre la necesidad del asentimiento tramitada «en el mismo procedimiento, como pieza separada, con arreglo al art. 753 LEC», y un párrafo sobre la citación tras la firmeza de esa «pieza separada» que no está en la ley | Texto vigente del art. 37.2: decreto que declara contencioso el expediente y tramitación conforme al **art. 781 LEC** (que remite al art. 753). Retirado el párrafo inexistente | LJV, LEC |
| 3 | 37 | incompleto | Plazo de 15 días sin más | Nota: el art. 781.1 LEC habla de un plazo «no superior a veinte días»; para el expediente de adopción rige el de 15 días del art. 37.2 LJV | LJV, LEC |
| 4 | 33 y participantes | **desfasado** | «Juzgado de Primera Instancia» | Desde la LO 1/2025, la adopción es competencia exclusiva de la **Sección de Familia, Infancia y Capacidad** del Tribunal de Instancia donde exista (art. 86.5 d) LOPJ); si no, la Sección Civil | LOPJ |
| 5 | Fundamento | incompleto | Sin los requisitos de edad y las prohibiciones de adoptar | Art. 175 CC: adoptante mayor de 25 años, diferencia de 16 a 45 años, quién puede ser adoptado y quién no | CC |
| 6 | Varios | desfasado | «Secretario judicial» en el texto explicativo (10 veces) | Letrado de la Administración de Justicia | LO 7/2015 |
| 7 | Ecosistema | error | «Art. 753: tramitación en pieza separada» | Art. 753 LEC: trámites a los que remite el art. 781 | LEC |

## Hallazgo transversal: Secciones de Familia, Infancia y Capacidad (art. 86.5 LOPJ)

Al revisar E13 se comprobó que el art. 86.5 LOPJ (LO 1/2025) atribuye a las Secciones de Familia, Infancia y Capacidad, donde existan, con carácter **exclusivo y excluyente**, entre otras materias: el régimen económico matrimonial (letra a), la filiación y la adopción (letra d), las medidas de apoyo (letra g) y «los expedientes de jurisdicción voluntaria en materia de personas y familia, con excepción de los regulados en los capítulos IX y X del título I» de la LJV (letra j). En los esquemas ya revisados (E05, E06, E08, E09, E10 y E12) se había escrito «Sección Civil»; se ha corregido en un commit propio.

**Para el propietario**: la letra j) remite a «los capítulos IX y X del título I» de la LJV, pero el Título I de la LJV solo tiene dos capítulos; parece referirse a los capítulos IX y X del **Título II** (ausencia y fallecimiento; extracción de órganos). Se señalará así en E20 y E21 salvo que el juzgado siga otro criterio.

**Respuesta del propietario (2026-10-29)**: se refiere al Título II (decisión 11 del ROADMAP). Los capítulos IX (ausencia y fallecimiento) y X (extracción de órganos) del Título II quedan fuera de la Sección de Familia, Infancia y Capacidad.

---

# Revisión · G10 · Guía de tramitación del expediente de adopción

- **Recurso**: `data/guias/ljv-adopcion.js` (origen G10).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; CC a 07-09-2026; LEC a 07-10-2026; LOPJ a 09-10-2026.
- **Método**: fase 5. La guía reproduce con fidelidad los arts. 33 a 42 LJV y 176 a 180 CC (todos comprobados); se conservan los 25 pasos y sus identificadores. Lo principal: cuatro pasos eran inalcanzables y se enlazan desde el inicio.
- **Resultado del comprobador**: 0 errores, 0 avisos (antes: 1 error de grafo); queda la denominación legal «Juzgado de Primera Instancia» (art. 33 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | inicio | **error** | Pasos `exclusion_extincion`, `fin_extincion`, `adopcion_internacional` y `conversion_simple` inalcanzables | La pregunta inicial («¿Qué se tramita?») ofrece constitución con o sin propuesta, conversión (art. 42), adopción internacional (art. 41) y exclusión o extinción (art. 40) | LJV 35, 40–42 |
| 2 | inicio | error | «Más de un año en guarda… o bajo tutela del adoptante» | «… o haber estado bajo tutela del adoptante por el mismo tiempo» | CC 176.2, 3.ª |
| 3 | asentimiento | incompleto | Sin las salvedades del art. 177.2 CC | Adopción conjunta; imposibilidad apreciada en el auto; patria potestad suspendida y dos años desde el desamparo (art. 172.2); la privación solo en procedimiento contradictorio | CC 177.2 |
| 4 | contencioso_asentimiento, alzamiento_suspension | error | «Pieza separada»; «art. 37.2 párrafo 3.º / 4.º» | Se tramita con arreglo al art. 753 LEC (art. 781.1); párrafos segundo y tercero del art. 37.2; art. 781.2 LEC | LJV 37.2; LEC 781 |
| 5 | reclamacion_asentimiento | discrepancia legal | 15 días (art. 37.2 LJV) sin más | Se mantiene, con nota: el art. 781.1 LEC dice «plazo que estime necesario… no superior a veinte días» — **pregunta al propietario** | LJV 37.2; LEC 781.1 |
| 6 | prescindir_tramite | incompleto | «Extinción en los 2 años siguientes si no intervinieron sin culpa suya» | Demanda en los dos años siguientes a la adopción, siempre que no perjudique gravemente al menor | CC 180.2 |
| 7 | exclusion_extincion | incompleto | Sin plazos; un «plazo» que no lo era | Plazos de los arts. 179.2 y 180.2 CC; consentimiento del adoptado mayor (art. 40.3) como nota; «funciones tuitivas» | CC 179–180; LJV 40 |
| 8 | conversion_simple | incompleto | Sin el art. 42.2; sin audiencia del menor de doce | Solicitud sin propuesta previa con documento extranjero y pruebas; menor de doce oído; inscripción | LJV 42 |
| 9 | adopcion_internacional | impreciso | Convenio de La Haya «de aplicación preferente en los países signatarios» | El art. 41 lo menciona «en especial» | LJV 41 |
| 10 | citaciones, consentimiento, propuesta_ep | incompleto | Sin el art. 38.1 in fine, el art. 177.4 y el inciso «en su caso» del art. 35.2 b) | Añadidos; el bloque del art. 35.4 deja de figurar como plazo | LJV 35, 38; CC 177.4 |
| 11 | competencia | desfasado | Juzgado de Primera Instancia | Hoy, Sección de Familia, Infancia y Capacidad (art. 86.5 j) LOPJ) o Sección Civil | LO 1/2025 |
| 12 | actores | terminología | «Letrado A. Justicia» | Letrado de la Administración de Justicia | — |

**Pendiente del propietario**: plazo para presentar la demanda de reconocimiento de la necesidad de asentimiento: quince días (art. 37.2 LJV) o el que señale el LAJ hasta veinte (art. 781.1 LEC).

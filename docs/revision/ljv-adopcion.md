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

**Pregunta al propietario** sobre el plazo de la demanda de asentimiento: resuelta el mismo día (decisión 16; véase abajo).

## Corrección posterior (2026-10-31) · Decisión 16: art. 781 LEC

El propietario indicó que el art. 781 LEC vigente fija quince días desde la Ley 26/2015. Comprobado en la API del BOE (bloque `a781` de BOE-A-2000-323, consultado el 31-10-2026): la versión de la Ley 26/2015 (art. 4.5; BOE-A-2015-8470; vigente desde el 18-8-2015) dice «otorgará el plazo de quince días» y regula la pieza separada (apartado 3). La versión siguiente, fechada el 1-10-2015 y atribuida a la LO 7/2015 (solo cambia «Secretario judicial»), reproduce por error la redacción anterior («no podrá ser superior a veinte días»). Es la que recoge nuestra instantánea `sources/boe/LEC.json`, que guarda la última versión de cada artículo.

| Recurso | Lugar | Antes | Ahora |
|---|---|---|---|
| G10 | reclamacion_asentimiento | Nota de discrepancia 15/20 días, pendiente del propietario | Quince días también en el art. 781.1 LEC (Ley 26/2015); la versión del BOE de 1-10-2015 es errónea |
| G10 | contencioso_asentimiento | «Se tramita con arreglo al art. 753 LEC» (en la revisión G10 se retiró «pieza separada» por fiarse de la instantánea) | Pieza separada en el mismo procedimiento (art. 753 LEC); firme lo resuelto sobre el asentimiento, citación ante el Juez de quienes falten y resolución sobre la adopción; auto apelable con efectos suspensivos (art. 781.3 LEC) |
| E13 | Artículo 37 › nota «Plazo» | «Para el expediente de adopción rige el plazo de la LJV» frente a los veinte días del art. 781.1 LEC | Quince días en ambos; aviso sobre la versión errónea del BOE |
| E13 | Artículo 37 › reclamación | «Conforme al art. 781 LEC (que remite al art. 753)» | Contenido del art. 781.3 LEC (pieza separada, citaciones, apelación con efectos suspensivos) |

**Pendiente**: el visor de la LEC de la app (`data/leyes/LEC.js`, generado de la instantánea) muestra el art. 781 con la redacción errónea. Corregirlo exige un mecanismo de corrección de instantáneas en `tools/build-law.js`: se propone al propietario.

Comprobador tras el cambio: 3 avisos «el art. 781 LEC no tiene apartado 3», por la instantánea errónea; desaparecerán cuando se corrija.

## Corrección posterior (2026-11-03) · Relectura, cuarta tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda4.md`, aplicados con el visto bueno del propietario.

### Guía

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 2 | inicio, intervencion_fiscal, resolucion_adopcion | Sin postulación para recurrir ni plazos | Abogado y procurador para recurrir; auto en cinco días; apelación en veinte | LJV 3.2, 19.1; LEC 458.1 |
| 3 | citacion_conocida; nuevo segunda_citacion | Sin salida si no responde y no se citó en persona | Segunda citación | LJV 38.2 |
| 4 | asentimiento_sujetos | «cónyuge»; solo privación por sentencia | También la pareja y quienes estén incursos en causa legal | CC 177.2 |
| 6 | competencia | Art. 86.5 j) LOPJ | Art. 86.5 d) LOPJ | LOPJ |
| 7 | competencia | Sin examen ni subsanación | Nota con las reglas generales | LJV 13, 16 |

### Esquema (misma tanda)

| # | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 1 | Mapa de actores | Tutor, familia acogedora y guardadores: «asentimiento, audiencia» | «audiencia» | CC 177.2, 177.3 |
| 2 | Índice de plazos | Sin auto ni apelación | Dos filas añadidas | LJV 19.1, 39.4; LEC 458.1 |
| 5 | Art. 175 | «si antes hubo» | «inmediatamente antes de la emancipación» | CC 175.2 |
| 8 | Art. 38 | Frase del art. 781.3 LEC | Suprimida aquí | LJV 38 |

## Normas no cotejadas (2026-11-03)

| # | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 6 | Esquema, actores y Ley 54/2007 | «Entidad Colaboradora Autorizada / ECAI»; «las ECAI» | «Organismos acreditados» | Ley 54/2007, arts. 1 y 6 |

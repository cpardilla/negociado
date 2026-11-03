# Revisión · E10 · LJV · Nueva modificación de la mención del sexo tras una reversión (arts. 26 sexies–26 nonies) — y E11

- **Recurso**: `data/esquemas/ljv-mencion-sexo-reversion.js` (origen E10).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026 (Capítulo I ter vigente desde el 02-03-2023); Ley 4/2023, CC y LRC en sus instantáneas.
- **Método**: como E01–E09; decisiones 9 y 10. **Corregido**, no rehecho.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (denominación legal).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | Plazos | **error** | Comparecencia de ratificación (3 meses) y resolución (1 mes) citados como «art. 44.2 Ley 4/2023» y sin advertir que son del procedimiento **registral** | Arts. 44.8 y 44.9, señalados como plazos del procedimiento registral; añadidos los del expediente judicial: resolución en 5 días (art. 19.1 LJV) y apelación en 20 (art. 458 LEC) | Ley 4/2023, LJV, LEC |
| 2 | Participantes | error | «Dirección General de Seguridad Jurídica y Fe Pública (vía recurso de alzada)» como interviniente del expediente | La alzada es contra las resoluciones del procedimiento registral (art. 44.10 Ley 4/2023), no contra el auto judicial, que se recurre en apelación | Ley 4/2023, LJV |
| 3 | 26 nonies | error | «El art. 91.2 LRC… dispone que la inscripción tendrá eficacia constitutiva» y «modificado por la DF 11.ª de la Ley 4/2023» | El art. 91.2 LRC remite al procedimiento registral de la Ley 4/2023; la eficacia constitutiva la establece el art. 46.1 Ley 4/2023 | LRC, Ley 4/2023 |
| 4 | 26 septies | error | «Cabe inferir» y «por extensión lógica» que las personas de 12 a 14 años están legitimadas | La ley no lo aclara expresamente; se dice así | LJV |
| 5 | 26 septies | error | Postulación: «excepción a la postulación parts-based…» (texto corrupto) | Igual que en el Capítulo I bis (art. 26 ter.4); preceptiva desde la oposición y en los recursos (art. 3.2) | LJV |
| 6 | 26 sexies | error | «Disposición final 13.2 de la Ley 4/2023» | No verificable con la instantánea: «añadido por la Ley 4/2023, en vigor desde el 02-03-2023» | BOE (fecha de vigencia) |
| 7 | 26 sexies | error | Primera rectificación «administrativa para mayores de dieciséis años» | Ante el Registro Civil desde los catorce años (art. 43.1 y 43.2 Ley 4/2023) | Ley 4/2023 |
| 8 | Ecosistema | error | «Art. 49.5 LRC (mención del sexo en blanco)», «Disposición transitoria segunda» | Retirados (no verificables con la instantánea) | — |
| 9 | Varios | estilo | «testimono» | «testimonio» | — |

## E11 (esquema combinado I bis & ter): comprobación

Decisión 4 del propietario: el combinado no se migra, pero se comprueba si contiene algo que no esté en E09 o E10. Resultado de comparar sus 393 textos con los dos esquemas revisados:

- Su contenido jurídico (tramos de edad del art. 43 Ley 4/2023, reversión del art. 47, elementos comunes de ambos capítulos) ya está en E09 y E10, ahora con las referencias correctas.
- Lo que solo estaba en E11 contenía errores: «caducidad por inactividad de **3 meses**» (son seis, art. 21 LJV), «las resoluciones firmes producen efectos de cosa juzgada» (art. 19.3 LJV: efecto de cosa decidida, distinto), «recurso de reposición y apelación contra las resoluciones del Juez» (reposición, solo contra las interlocutorias), «LEC art. 1.2 (aplicación supletoria)» (es el art. 8 LJV).
- Se añadió a E09 lo único útil que faltaba: la referencia al cambio de nombre de los menores (art. 48 Ley 4/2023).

No hay nada más que trasladar. E11 queda cerrado.

## Corrección posterior (2026-10-29)

Competencia: donde exista, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia, con carácter exclusivo y excluyente (art. 86.5 LOPJ); si no, la Sección Civil. Detectado al revisar E13 (véase `ljv-adopcion.md`).

---

# Revisión · G08 · Guía de tramitación de la nueva modificación de la mención registral del sexo tras una reversión

- **Recurso**: `data/guias/ljv-mencion-sexo-reversion.js` (origen G08).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; Ley 4/2023 (`LTRANS`); Ley 20/2011; LOPJ.
- **Método**: fase 5. La guía es fiel a los arts. 26 sexies–26 nonies LJV y a los arts. 43, 44.3, 46.1 y 49 Ley 4/2023 y 91.2 Ley 20/2011 (todos comprobados); retoques puntuales sin tocar el recorrido.
- **Resultado del comprobador**: 0 errores, 0 avisos; denominación legal «Juzgado de Primera Instancia» con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | defensor_judicial | **error** | «El Juez nombra un defensor judicial» | El nombramiento se tramita por los arts. 27 y ss. LJV y lo resuelve el Letrado de la Administración de Justicia | LJV |
| 2 | fin_denegacion, fin_inadmision | incompleto | «Podrá ser recurrible conforme a la normativa aplicable» | Apelación en veinte días, sin efectos suspensivos, con abogado y procurador (arts. 3.2 y 20.2 LJV; art. 458.1 LEC); nueva solicitud solo si cambian las circunstancias (art. 19.3 LJV) | LJV, LEC |
| 3 | admision | incompleto | Subsanación sin plazo | Cinco días (art. 16.4 LJV) | LJV |
| 4 | postulacion, solicitud, resolucion | error | «Excepción a la postulación parts-based… evitando costas»; «plazos acortados»; «el Juez actúa con independencia y sometido al imperio de la ley» | Retirados (sin base o sin contenido); tramitación preferente (art. 26 octies.1) y auto (art. 19.1) | LJV |
| 5 | competencia | desfasado | Juzgado de Primera Instancia | Hoy, Sección de Familia, Infancia y Capacidad (art. 86.5 j) LOPJ) o Sección Civil | LO 1/2025 |
| 6 | actores | error | Actor «laj» etiquetado como «Administración / Interesado» | «Solicitante / Oficina judicial» | — |

## Corrección posterior (2026-11-01) · Cita del art. 4 LRC

Corte del BOE: LRC a 24-02-2026. Encontrada al comprobar por fin las citas de los bloques de normas contra su propia ley.

| Lugar | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|
| Ecosistema normativo › Ley 20/2011 | cita | «Artículo 4.4» (el art. 4 no tiene apartados) | «Artículo 4.4.º» (ordinal 4.º: el sexo y el cambio de sexo) | LRC 4 |

## Corrección posterior (2026-11-03) · Relectura, segunda tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda2.md`, aplicados con el visto bueno del propietario.

### Guía

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 13 | admision, fin_inadmision; actores | El Juez examinaba y «se archiva»; actor «laj» presentado como «Solicitante / Oficina judicial» | Examina el LAJ y da cuenta al Juez; actores separados (el defensor judicial queda con el LAJ) | LJV 2.3, 16, 17.1 |
| 16 | comparecencia, pruebas, resolucion; nuevo fin_desistido | Sin plazos ni salida por incomparecencia | 15 y 30 días, 5 de oposición, 10 de diligencias sobre el menor, 5 del auto; archivo por desistimiento; nota sobre la apelación | LJV 17.3, 18.1, 18.2.1.ª, 18.2.4.ª, 19.1, 20.2 |
| 17 | legitima, competencia_menor_12_14 | Tramo de 12 a 14 afirmado sin matices | Misma advertencia que el esquema | LJV 26 septies.2; Ley 4/2023, art. 43.4 |
| 18 | pruebas | «amplia y discrecional», «autenticidad» | Solo el texto de la ley | LJV 26 octies.3 |
| 19 | inscripcion | Bloque «Plazo» sin plazo; DNI entre las actuaciones del Registro | Nota aparte, atribuida a las autoridades que expiden | Ley 4/2023, art. 49 |
| 20 | postulacion | Solo «para recurrir» | También desde la oposición | LJV 3.2 |
| 21 | fin_no_procede | «excepcional y subsidiario» | «específico» | LJV 26 sexies |

# Revisión · E23 · LJV · Expedientes en materia de sucesiones (arts. 91–95)

- **Recurso**: `data/esquemas/ljv-sucesorio.js` (origen E23).
- **Fecha de revisión**: 2026-10-30.
- **Corte del BOE**: LJV a 05-03-2026; CC, LEC y LOPJ en sus instantáneas.
- **Método**: como E01–E22; decisiones 9 y 10. **Corregido, no rehecho**: las fichas de los arts. 91–95 LJV reproducen fielmente el texto; los errores estaban en las conexiones con el CC (albaceazgo sobre todo), la tutela y los recursos.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; «revisar» intencionados: la denominación legal «Juzgado de Primera Instancia» de los arts. 91, 92 y 94 y dos menciones históricas del «Secretario judicial» (LO 7/2015).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 91 | **error** | Art. 898 CC: «una vez aceptado es obligatorio salvo justa causa» | Art. 898: aceptación tácita si no se excusa en seis días; art. 899: obligación de desempeñarlo y renuncia con causa justa ante el LAJ o el Notario | CC |
| 2 | 91 | **error** | Art. 899 CC: «enumera las facultades y obligaciones del albacea» | Ver fila 1 (las facultades están en el art. 902) | CC |
| 3 | 91 | **error** | Art. 903 CC: «ausencia de facultades dispositivas salvo autorización» | Venta de bienes para funerales y legados con intervención de los herederos; formalidades legales si hay menores, ausentes o entidades | CC |
| 4 | 91, plazos | **error** | Art. 906 CC: «si no hay conformidad, prórroga judicial por el tiempo necesario» | Por acuerdo de todos, la que acuerden; por mayoría, máximo un año (art. 906); sin plazo del testador, un año más y luego la que conceda el LAJ o el Notario (art. 905) | CC |
| 5 | 91 | **error** | Art. 911 CC: «consignación en los herederos o, en su defecto, del Juez» | La ejecución de la voluntad del testador corresponde a los herederos | CC |
| 6 | 91 | incompleto | Arts. 905, 907 y 910 CC sin las reglas clave | Prórroga legal de un año; cuentas al Juez si el albacea distribuye o invierte; la remoción la aprecia el Juez | CC |
| 7 | 94, ecosistema | **error** | «Art. 271 CC: autorización judicial para el tutor» (el 271 es la autocuratela, Ley 8/2021) | Arts. 224 y 287.5.º CC | CC |
| 8 | 94, ecosistema | **error** | «Art. 749 LEC: intervención del Fiscal» (es de los procesos del Libro IV LEC) | Art. 4 LJV y art. 94.3 LJV | LJV, LEC |
| 9 | 93 | error | Art. 996 CC: «menor o persona con discapacidad: representación legal» | La persona con discapacidad acepta por sí, salvo lo que resulte de las medidas de apoyo | CC |
| 10 | 92 | incompleto | Art. 1057 CC resumido sin citación de interesados ni aprobación | Con citación de los demás interesados; la partición requiere aprobación del LAJ o del Notario salvo confirmación expresa de todos | CC |
| 11 | 95, transversal | incompleto | Recursos sin plazos ni postulación | Revisión en cinco días contra las decisiones del LAJ; apelación en veinte (suspensiva solo en el Capítulo III); abogado y procurador para recurrir | LJV, LEC |
| 12 | Varias | desfasado | «Juzgado de Primera Instancia», «Secretario judicial»; «art. 85 LOPJ: competencia de los Juzgados de Primera Instancia» | Sección Civil del Tribunal de Instancia (art. 85 LOPJ, LO 1/2025); Letrado de la Administración de Justicia | LO 1/2025, LO 7/2015 |

## Para la fase 5 (G20)

La guía cita «art. 1057.2» (párrafo segundo, no apartado) en cinco pasos, y usa «JPI» × 22 y «Juzgado de Primera Instancia» × 6.

---

# Revisión · G20 · Guía de tramitación de los expedientes de Derecho sucesorio (Título IV)

- **Recurso**: `data/guias/ljv-sucesorio.js` (origen G20).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026 (art. 94.1 en la redacción de la LO 1/2025); CC, LEC y LOPJ en sus instantáneas.
- **Método**: fase 5. La guía seguía bien los arts. 91 a 95 LJV y el art. 1057 CC: **corregida**; se conservan los 40 pasos.
- **Resultado del comprobador**: 0 errores, 0 avisos; queda un «revisar» intencionado: el título del Título IV, citado literalmente, que el comprobador no busca en los encabezados.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | celebracion_comparecencia, fin_remision_contencioso | **error** | «El art. 17.3, párrafo segundo, LJV establece que, cuando se formule oposición que haga contencioso el expediente, se sobreseerá» | Es al revés: la oposición no hace contencioso el expediente ni impide que continúe, salvo previsión legal, que no existe en el Título IV (art. 17.3); el archivo procede si se acredita un proceso jurisdiccional sobre el mismo objeto (art. 6.2), con remisión de las actuaciones | LJV 6.2, 17.3 |
| 2 | notificacion_recursos, tramitacion_apelacion, fin_apelacion_* | error | Contra todo, «revisión o apelación» en veinte días; Capítulos I y II sin efecto suspensivo «salvo que se acuerde»; el LAJ admite la apelación y eleva; «sentencia» de la Audiencia | Decretos del LAJ: revisión ante el Juez en cinco días (art. 454 bis LEC); autos: apelación en veinte días ante la Audiencia (art. 458), sin efecto suspensivo salvo que la ley lo disponga (art. 20.2) o con él en el Capítulo III (art. 95.3); trámite tras el RDL 6/2023; la Audiencia resuelve el recurso (no «sentencia») | LJV 20.2, 95.3; LEC 454 bis, 458 |
| 3 | resolucion_alb_laj, resolucion_cp_renun | error | Renuncia del albacea con justa causa por el «art. 898 CC» | Art. 899 CC; prórroga por el LAJ tras el año legal y su prórroga (arts. 904 y 905) o por acuerdo de herederos y legatarios (art. 906) | CC 899, 904–906 |
| 4 | subsanacion, fin_archivo_subsanacion | error | «Plazo orientativo de 5 días» por el art. 231 LEC; archivo siempre por el LAJ | Cinco días (art. 16.4 LJV); archiva el LAJ en sus expedientes y da cuenta al Juez en los demás | LJV 16.4 |
| 5 | citacion_interesados, examen_solicitud, senalamiento_comparecencia | error | Quince días de antelación por el «art. 18.1»; interesados «del art. 17.3» | Quince días, art. 17.3; interesados, art. 14.2; comparecencia en treinta días, art. 18.1 | LJV 14.2, 17.3, 18.1 |
| 6 | cp_designa_50, resolucion_cp_designa, resolucion_cp_aprob, fin_inadmision_50 | error | «Art. 1057.2 CC» (×5); nombramiento «por insaculación, designación directa razonada o lista de peritos» | Art. 1057, párrafo segundo; presupuestos (sin testamento, sin contador o vacante) y citación de los demás interesados; reglas de designación de peritos (art. 341 LEC) | CC 1057; LEC 341 |
| 7 | fueros (alb_comp_*, cp_comp_*, acep_comp_*) | desfasado | «JPI» × 22; «art. 85 LOPJ» | «Juzgado» con los fueros de los arts. 91.3, 92.3 y 94.1; hoy, Sección Civil (materia sucesoria, no de personas y familia) | LJV 91–94; LOPJ 86.5 j) |
| 8 | acep_clasif, acep_comp_esp, mf_* | error | «Arts. 166, 271 y 287 CC; art. 749 LEC» como fundamento | Arts. 166 y 287 CC (el 271 es la autocuratela; el 749 LEC, de procesos especiales); supuesto a) completo (menores de 16 o mayores que no consienten); legitimación del art. 94.2 | LJV 93.2, 94.2; CC 166, 287 |
| 9 | resolucion_alb_juez, alb_comp_juez | impreciso | Criterios generales | Remoción apreciada por el Juez (art. 910); cuentas al Juez cuando el albacea invierte o distribuye (art. 907); autorizaciones cuando la ley civil las exige | CC 907, 910 |
| 10 | fin_archivo_incomparecencia, fin_firmeza, resolucion_tipo, actores | impreciso / forma | Archivo «por falta de impulso»; «liquidación de derechos arancelarios»; nota sobre el «sidebar-mapa» | Desistimiento y archivo del art. 18.2.1.ª; quitados; nombres completos | LJV 18.2 |

**Pregunta al propietario**: la sección de los expedientes del Capítulo III cuando el llamado es menor o persona con medidas de apoyo. La guía indica la Sección Civil (Título IV, materia sucesoria), aunque el fuero sea el de la residencia de la persona protegida (art. 94.1, párrafo segundo).

**Respuesta del propietario (2026-10-31) — decisión 19**: Sección Civil también cuando el llamado es menor o persona con medidas de apoyo. El art. 94.1, párrafo segundo, LJV cambia solo el fuero territorial (residencia del llamado), no la sección: la autorización para aceptar o repudiar es expediente sucesorio del Título IV, no de personas y familia del art. 86.5 j) LOPJ; las Secciones Civiles conocen de los actos de jurisdicción voluntaria en los términos que prevean las leyes (art. 85, ordinal 2.º, LOPJ; el propietario lo citó como «art. 85.2», que no tiene apartados). Si en el mismo asunto se plantea una cuestión autónoma de Familia, Infancia y Capacidad (por ejemplo, sobre el ejercicio de la patria potestad), se examina por separado. La nota de sección de la guía cita ahora la decisión 19.

## Corrección posterior (2026-11-01) · Citas de los bloques de normas

La app leía las citas sueltas de cada bloque como de la ley del recurso; ahora, como de la ley que nombra el bloque. Estas se refieren a otra ley y se nombra expresamente. Sin cambio de fondo.

| Antes | Ahora |
|---|---|
| conectado con los artículos 93.2.b y 95.2 LJV | conectado con los artículos 93.2 b) y 95.2 LJV |

## Corrección posterior (2026-11-03) · Relectura, séptima tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda7.md`, aplicados con el visto bueno del propietario.

### Guía

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 1 | citacion_interesados | «testador si procede» | Suprimido | CC 1057 |
| 3 | examen_solicitud; nuevos falta_admisibilidad y fin_no_admitida | Sin competencia ni solicitud no admisible | Salidas según quién decida | LJV 16.2, 16.3, 17.1 |
| 4 | citacion_interesados | Sin oposición ni medios de prueba | Añadidos | LJV 17.3 |
| 5 | resolucion_acep | Toda denegación, a beneficio de inventario | Solo en los casos del art. 95.2 | LJV 95.2 |
| 7 | celebracion_comparecencia, fin_archivo_incomparecencia | «injustificada» | Suprimido | LJV 18.2.1.ª |
| 8 | celebracion_comparecencia | Sin menores ni personas con discapacidad | Nota añadida | LJV 18.2.4.ª |
| 9 | senalamiento_comparecencia | Fija día y hora después de citar | Al admitir | LJV 17.3 |
| 10 | alb_postulacion, admision_tramite, resolucion_cp_designa, resolucion_acep | Contenidos sin fuente | Suprimidos o rotulados como práctica | Sin fuente |

### Esquema (misma tanda)

| # | Lugar | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 2 | Mapa, ecosistema | «antes Letrado…»; «figura del Letrado… en la del Letrado» | Secretario judicial | LO 7/2015 |
| 6 | Transversal | Fuero común incluía el art. 94.1 | Separado | LJV 91.3, 92.3, 94.1 |
| 11 | Marco, ecosistema, mapa | «supletorias»; solo menores de 16 | Corregido | LJV 91.3, 92.3, 93.2.a, 94.1 |

# Revisión · E20 · LJV · Declaración de ausencia y fallecimiento (arts. 67–77)

- **Recurso**: `data/esquemas/ljv-ausencia-fallecimiento.js` (origen E20).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; CC (arts. 181–198), Ley 20/2011 (`LRC`), LEC y LOPJ en sus instantáneas.
- **Método**: como E01–E19; decisiones 9, 10 y 11. **Rehecho**: 11 fichas muy extensas («45+ conexiones») con abundante contenido sin base legal → 6 fichas que siguen el texto de los arts. 67–77 LJV y 181–198 CC, más plazos (14), participantes y normas.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (denominación legal del art. 68.1).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | Varias | **error** | Medidas inventadas atribuidas al LAJ: «embargo preventivo, intervención de cuentas, cuidador provisional, autorización de actos médicos urgentes», «LEC arts. 721–742 por analogía» | Lo que dicen los arts. 69.2 y 72 LJV y 181 CC: medidas urgentes o provisionales de protección y conservación del patrimonio | LJV, CC |
| 2 | 68 | **error** | «Pareja de hecho: reconocimiento jurisprudencial; acreditación según normativa autonómica»; «acreedores con garantía real, codeudores…» | Texto del art. 68.2: «persona unida por análoga relación de afectividad a la conyugal» y quien «fundadamente pueda tener sobre los bienes del desaparecido algún derecho ejercitable»; obligación de promover del art. 182 CC | LJV, CC |
| 3 | 69, 71 | **error** | Plazos y trámites inventados: «comparecencia retroactiva», «rendición de cuentas anual aprobada por el LAJ», «responsabilidad por negligencia grave» | Retirados; régimen del art. 71.2 LJV (normas de la tutela, Capítulos IV y VIII, decididas por el LAJ) | LJV |
| 4 | 71 | incompleto | Sin el orden legal de representantes ni la posesión temporal | Art. 184 CC (orden), arts. 185 y 186 CC (garantía, productos, límites a la disposición) | CC |
| 5 | 74 | **error** | «Art. 194.1: operaciones militares» y «194.4–5» sin plazos; «Art. 193.3: 1 año / 3 meses» como «193.3» | Plazos exactos del art. 193 (10 años; 5 si cumplió 75; 1 año; 3 meses; cómputo desde el fin del año natural) y del art. 194 (2 años; 1 mes) | CC |
| 6 | 74 | **error** | «Fecha de muerte: la del siniestro, salvo prueba en contrario» (en el decreto del art. 74.1); «firmeza: agotada la vía de recursos» | Art. 74.1: fecha del siniestro; art. 195 CC (presunción de vida y fecha, salvo prueba en contrario) | LJV, CC |
| 7 | 75 | **error** | «Identificación por ADN…», «notificación por domicilio digital», «carga de la prueba sobre quien alega identidad», «presunción de identidad si la documentación es fehaciente» | Retirados; texto del art. 75 (incluida la suspensión del representante, apartado 3) y efectos de los arts. 187, 188 y 197 CC | LJV, CC |
| 8 | 77 | **error** | «Comunicación automática a los Registros de la Propiedad, Mercantil y de Bienes Muebles»; «LRC arts. 85–87, DA 5.ª bis» | Retirados; art. 198 CC y art. 78 LRC | CC, LRC |
| 9 | Recursos | incompleto | «Recurso de revisión» mencionado sin plazo; «preceptividad de letrado en controversia sobrevenida» | Revisión ante el Juez (art. 20.2 LJV) en cinco días (art. 454 bis LEC), con abogado y procurador (art. 3.2 LJV) | LJV, LEC |
| 10 | Ecosistema | error | Convenios de La Haya, Reglamento (UE) 650/2012, RGPD, Ley 41/2003 «por analogía», art. 40 CCom, Ley Hipotecaria, LEC 400–401, 637–640, 777–782 | Retirados (decisión 9: no se aplican en la tramitación o no tienen relación) | — |
| 11 | 67 | error | Marcas de origen sueltas («[[1]]», «[[11]]»…) y «Secretario judicial» × 14 | Retiradas; Letrado de la Administración de Justicia | LO 7/2015 |
| 12 | 68 | desfasado | Tribunal de Instancia «conforme a LO 1/2025» sin fundamento | Sección Civil: el art. 86.5 j) LOPJ excluye estos expedientes de la Sección de Familia, Infancia y Capacidad (decisión 11) | LOPJ |

## Herramienta

El analizador lee «art. 194.2.º y 3.º CC» como LJV (la «y 3.º» corta la ley). En el esquema se ha escrito «arts. 194.2.º y 194.3.º CC»; queda anotado para corregir el analizador.

## Para la fase 5 (G17)

La guía cita «art. 194.1», «193.2», «196.2» (ordinales del CC escritos como apartados) y dice «Secretario judicial» en dos pasos.

---

# Revisión · G17 · Guía de tramitación de la declaración de ausencia y fallecimiento

- **Recurso**: `data/guias/ljv-ausencia-fallecimiento.js` (origen G17).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; CC, LRC, LEC y LOPJ en sus instantáneas.
- **Método**: fase 5. Se conservan los 50 pasos y sus identificadores; se corrige el recorrido de la competencia y se reescriben los bloques erróneos o sin base legal.
- **Resultado del comprobador**: 0 errores, 0 avisos (antes: 13 «revisar» de ordinales y 2 de terminología); queda la denominación legal «Juzgado de Primera Instancia» (art. 68.1 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | fallecimiento_*, resolucion_fallecimiento, fin_* | **error** | Ordinales como apartados: «art. 193.1/193.2», «art. 194.1, 4, 5», «art. 196.2», «art. 185.1» | Art. 193.1.º, 2.º y 3.º; art. 194.1.º a 5.º; art. 196, párrafo segundo; art. 185.1.ª | CC 185, 193, 194, 196 |
| 2 | fallecimiento_no_siniestro, fallecimiento_con_ausencia | **error** | Riesgo inminente «1 año (art. 193 CC)»; plazos de los arts. 194.1.º, 4.º y 5.º sin precisar | Un año de fecha a fecha y **tres meses si es siniestro**; presunción de violencia en subversión (art. 193.3.º); cómputo desde el final del año natural; dos años tras el fin de la guerra; un mes en los arts. 194.4.º y 5.º | CC 193, 194 |
| 3 | resolucion_fallecimiento, sucesion_judicial, fin_fallecimiento_declarado | **error** | Adjudicación judicial por los «arts. 777–782 LEC» | División judicial de la herencia, arts. 782 y ss. LEC | LEC 782 |
| 4 | resolucion_fallecimiento, fin_fallecimiento_declarado | error | Prohibición de disponer a título gratuito con la «excepción» de los legados a beneficencia | La excepción es a la entrega de los legados durante cinco años (mandas piadosas y beneficencia), no a la prohibición de disponer | CC 196 |
| 5 | competencia_ausencia, competencia_fallecimiento, legitimacion_ausencia_siniestro(_ext) | **error de recorrido** | La declaración de ausencia ofrecía la competencia por siniestro (que es solo del fallecimiento de los ordinales 2.º y 3.º del art. 194) y llevaba a la solicitud de ausencia | La ausencia va directa a la legitimación; los pasos de siniestro pasan al fallecimiento, con la regla completa del art. 68.1, párrafo segundo, y la legitimación exclusiva del Fiscal | LJV 68.1 y 2 |
| 6 | defensor_judicial | error | Requisito: «inexistencia de cónyuge o pariente que asuma la representación nata»; «art. 300 CC — tutela supletoria» | El cónyuge y el pariente más próximo son los defensores natos (art. 181); no procede si hay representación voluntaria (art. 183); art. 300 CC fuera (es la inscripción de cargos tutelares) | CC 181, 183 |
| 7 | defensor_urgente, defensor_aceptacion, fin_defensor_* | inventado | «Embargo preventivo», «LEC 721–742 por analogía»; régimen de tutela de los «Cap. IV y VIII CC» y responsabilidad «por dolo o negligencia grave» para el defensor | Art. 69.2: designación inmediata y medidas urgentes, ratificadas o revocadas al final; constancia registral (art. 198 CC) | LJV 69; CC 181, 198 |
| 8 | inicio, competencia_ausencia | error | El LAJ decide «conforme al art. 67 LJV»; Letrado «por controversia sobrevenida» | El LAJ decide por los arts. 69 a 75; revisión ante el Juez (art. 20.2); postulación de los arts. 68.4 y 3.2; Sección Civil (decisión 11) | LJV 3.2, 20.2, 68.4 |
| 9 | legitimacion_ausencia | error | «Otra persona con interés legítimo (art. 3 LJV, interpretación amplia)» | Solo los del art. 68.2 LJV; obligación de promoverla del art. 182 CC | LJV 68.2; CC 182 |
| 10 | resolucion_ausencia, fin_ausencia_declarada | error | Extinción de los mandatos como «efecto inmediato» del decreto | Se extinguen al inscribirse la declaración en el Registro Civil (art. 183 CC); orden del art. 184 detallado | CC 183, 184 |
| 11 | representante_ausente | error | Régimen supletorio de los «Cap. IV y VIII CC»; rendición «anual» | Capítulos IV y VIII de la LJV, decididos por el LAJ (art. 71.2); obligaciones del art. 185 y posesión temporal del art. 186 CC; cuentas al concluir la gestión | LJV 71.2; CC 185, 186 |
| 12 | prueba_posterior_ausencia, medidas_* | error | Prueba posterior por el «art. 70.3»; «comparecencia simplificada», requisitos de «riesgo irreparable» y «LEC 721–742» | Prueba posterior, art. 70.4; medidas de averiguación y protección, art. 70.3; medidas del art. 72 | LJV 70, 72 |
| 13 | inventario_bienes | incompleto | «Ley Hipotecaria; LEC 637–640»; sin deudas | Testimonio como título; incluye deudas u obligaciones; en el mismo expediente con el Fiscal y los interesados (art. 73); anotación registral (art. 198 CC) | LJV 73 |
| 14 | presentacion_ausente, fin_revocacion_*, noticia_muerte, fallecimiento_comprobado | error | Restitución siempre por el art. 197; «validez de los actos de buena fe»; tras la noticia de muerte, archivo | Art. 187 (ausencia: sin productos, salvo mala fe) o art. 197 (fallecimiento); tras la noticia de muerte, resolución sobre la revocación (art. 75.4) y sucesión (art. 188); el archivo del art. 76 es durante la tramitación | CC 187, 188, 197; LJV 75, 76 |
| 15 | comunicacion_registro, comunicacion_registro_fallecimiento | inventado | «Erga omnes», «Ley 39/2015», «plazo inmediato a firmeza, telemático» | Testimonios del art. 77 para lo previsto en el art. 198 CC; inscripción en el registro individual con la fecha de la muerte (art. 78 LRC) | LJV 77; CC 198; LRC 78 |
| 16 | admision_ausencia, noticias_existencia, suspension_representante | impreciso | «LOPD 3/2018»; ratificación «por falta de oposición»; límites inventados a la suspensión | Art. 70.2 y 3; el LAJ convoca la comparecencia haya o no pruebas (art. 75.2); suspensión del art. 75.3 | LJV 70, 75 |
| 17 | actores, pie | forma | «LAJ (Secretario judicial)» | Letrado de la Administración de Justicia; pie con las normas citadas | — |

## Corrección posterior (2026-11-03) · Relectura, cuarta tanda

Corte del BOE: descarga del 2026-11-03. Hallazgos de `relectura-2026-11-03-tanda4.md`, aplicados con el visto bueno del propietario.

| # | Paso | Antes | Ahora | Fuente |
|---|---|---|---|---|
| 19 | fin_defensor_nombrado | Funciones del representante | Suprimidas; queda la función del defensor | CC 181, 184 |
| 20 | inventario_bienes; se suprime fin_ausencia_declarada | Se podía terminar sin comunicar al Registro Civil | La comunicación siempre se hace | LJV 77 |
| 21 | noticia_muerte, fallecimiento_comprobado; se suprimen fin_fallecimiento_comprobado y fin_archivo_expediente | Dos reglas unidas; archivo «sin bienes ni herederos» | Dos fines separados | LJV 75.4, 76 |
| 22 | legitimacion_ausencia | «orden de prelación sucesoria» y otras glosas | Suprimidas | CC 182 |
| 23 | admision_ausencia | Sin subsanación ni incomparecencia | Nota con las reglas generales | LJV 13, 16.4, 18.2.1.ª |
| 24 | suspension_representante, fin_revocacion_suspension | «suspensión definitiva» | Se revoca la declaración | LJV 75.3 |
| 25 | noticias_existencia | «por falta de oposición» | «la resolución que proceda» | LJV 75.2 |
| 26 | fin_defensor_ratificado, medidas_subsistencia, defensor_ordinario, defensor_judicial | «retroactiva», «simplificada», citación de testigos | Texto de la ley | LJV 69, 72.1 |
| 27 | sucesion_notarial, presentacion_ausente, fin_revocacion_* | Contenidos sin fuente | Suprimidos o rotulados como ejemplo | LJV 75.1; CC 198 |

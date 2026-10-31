# Revisión · E25 · LJV · Autorización al usufructuario para reclamar créditos vencidos (arts. 100–103)

- **Recurso**: `data/esquemas/ljv-usufructuario.js` (origen E25).
- **Fecha de revisión**: 2026-10-30.
- **Corte del BOE**: LJV a 05-03-2026; CC, LEC y LOPJ en sus instantáneas.
- **Método**: como E01–E24; decisiones 9 y 10. **Corregido, no rehecho**: el esquema reproduce fielmente los arts. 100–103 LJV y 491–495 y 507 CC; los errores estaban en la postulación, los recursos y el órgano.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; «revisar» intencionados (denominación legal del art. 101 y mención histórica del «Secretario judicial»).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 101, recursos, participantes | **error** | Abogado y procurador «podrán devenir preceptivos» con la oposición o los recursos, «conforme al art. 20 LJV por remisión a la LEC» | Son necesarios en todo caso para recurrir y desde que se formula oposición (art. 3.2 LJV) | LJV |
| 2 | Recursos, plazos | incompleto | «Plazos LEC (art. 20 LJV)»; caducidad «plazo legal» | Apelación en veinte días sin efectos suspensivos (art. 20.2 LJV; art. 458.1 LEC); reposición en cinco (art. 452 LEC); caducidad a los seis meses, declarada por el LAJ, con revisión (art. 21 LJV) | LJV, LEC |
| 3 | 103 | incompleto | Principio de la oposición sin fuente | Art. 17.3 LJV; el capítulo no prevé otra cosa | LJV |
| 4 | Participantes | matiz | «Ministerio Fiscal (intervención conforme al art. 4 LJV)» | Solo si concurre un supuesto del art. 4 LJV | LJV |
| 5 | 101, ecosistema | desfasado | Juzgado de Primera Instancia; «art. 85 LOPJ: Juzgados de Primera Instancia» | Sección Civil del Tribunal de Instancia (art. 85 LOPJ, LO 1/2025) | LO 1/2025 |

## Para la fase 5 (G22)

La guía dice «Juzgado de Primera Instancia» × 3 y «Secretario judicial» × 1; comprobar que no repite el «podrá devenir preceptiva».

---

# Revisión · G22 · Guía de tramitación de la autorización al usufructuario para reclamar créditos vencidos

- **Recurso**: `data/guias/ljv-usufructuario.js` (origen G22).
- **Fecha de revisión**: 2026-10-31. **Corte del BOE**: LJV a 05-03-2026; CC, LEC y LOPJ en sus instantáneas.
- **Método**: fase 5. La guía seguía con fidelidad los arts. 100 a 103 LJV y 491 a 494 y 507 CC (comprobados): **corregida**; se conservan los 29 pasos.
- **Resultado del comprobador**: 0 errores, 0 avisos; queda la denominación legal «Juzgado de Primera Instancia» (art. 101.1 LJV), con la sección actual indicada.

## Hallazgos

| # | Paso | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | verif_fianza | incompleto | Dispensa legal de los padres y del cónyuge viudo sin condición | «Si no contraen ulterior matrimonio» | CC 492 |
| 2 | admision, subsanacion, fin_inadmision | error | Subsanación en el plazo del «art. 17» y del art. 231 LEC; inadmisión por el LAJ | Cinco días (art. 16.4); si no es admisible, el LAJ da cuenta al Juez, que resuelve (arts. 17.1 y 103.2); apelación | LJV 16.4, 17.1 |
| 3 | comparecencia, fin_archivo | impreciso | La incomparecencia «puede determinar el archivo o desistimiento tácito» | Archivo y desistimiento si no asiste el solicitante (art. 18.2.1.ª); citación con quince días y comparecencia en treinta (arts. 17.3 y 18.1) | LJV 17.3, 18 |
| 4 | resolucion_juez, fin_concedida_*, fin_denegada | incompleto | «Recurso conforme al art. 20» | Auto en cinco días (art. 19.1); apelación sin efectos suspensivos, veinte días (art. 20.2; art. 458 LEC) | LJV 19.1, 20.2 |
| 5 | inicio, competencia, postulacion | error | «Art. 85 LOPJ»; postulación preceptiva por los «arts. 20 y 8» | Sin el art. 85 LOPJ; hoy Sección Civil; Abogado y Procurador para recursos y desde la oposición (art. 3.2) | LJV 3.2 |
| 6 | actores | forma | «Actor según trámite», «Letrado Admón. Justicia» | Nombres completos | — |

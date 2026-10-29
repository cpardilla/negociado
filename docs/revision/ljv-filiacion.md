# Revisión · E08 · LJV · Reconocimiento de la filiación no matrimonial (arts. 23–26)

- **Recurso**: `data/esquemas/ljv-filiacion.js` (origen E08).
- **Fecha de revisión**: 2026-10-29.
- **Corte del BOE**: LJV a 05-03-2026; CC a 07-09-2026; LRC y LEC en sus instantáneas.
- **Método**: como E01–E07; decisiones 9 y 10. El esquema seguía bien la LJV: se ha **corregido** (no rehecho). El error principal estaba en las referencias al Código Civil.
- **Resultado del comprobador**: 0 errores, 0 avisos en el esquema; 1 «revisar» intencionado (la denominación «Juzgado de Primera Instancia» del art. 24 LJV, con su equivalencia actual).

## Hallazgos

| # | Ficha | Tipo | Antes | Ahora | Fuente |
|---|---|---|---|---|---|
| 1 | 23 | **error** | Artículos del CC desplazados: «art. 124: reconocimiento por hermano o consanguíneo»; «art. 123: consentimiento del menor o persona con discapacidad»; «art. 125: reconocimiento por progenitores no casados»; «art. 126: el reconocimiento del mayor de edad no precisa control» | Art. **125**: progenitores hermanos o consanguíneos; art. **124**: reconocimiento del menor (consentimiento o aprobación); art. **123**: hijo mayor de edad (su consentimiento); art. **126**: reconocimiento del fallecido (consentimiento de sus descendientes); art. 121: reconocimiento por menores no emancipados o personas con apoyos | CC |
| 2 | 23, ecosistema | **error** | Suspensión de la inscripción a petición de la madre: «art. 44.5 de la Ley 20/2011» | Está en el **art. 124 CC, párrafo segundo**: suspensión durante el año siguiente al nacimiento; si el padre o progenitor no gestante pide la confirmación, aprobación judicial con audiencia del Fiscal. El art. 44 LRC no regula esa suspensión | CC, LRC |
| 3 | 23 | error | Fundamento del supuesto b): «el testamento se otorga ante notario con plenas garantías…» (glosa) | Art. 124 CC, párrafo primero | CC |
| 4 | 24, 26 | error | Postulación «art. 3.3» y «art. 3.4 LJV» (no existen) | Art. 3.2, párrafos primero y segundo | LJV |
| 5 | 25 | error | «El umbral de 12 años es coherente con los arts. 92, 156 y 177.3 CC y el art. 26 quater LJV» | Ejemplo comprobado: consentimiento del adoptando mayor de doce años (art. 177.1 CC) | CC |
| 6 | 25 | incompleto | Descendientes del reconocido fallecido citados «por efectos sucesorios» | Porque el reconocimiento del fallecido solo surte efecto con su consentimiento (art. 126 CC) | CC |
| 7 | 26 | error | Efectos: «apellidos arts. 109 y 111 CC» (el 111 es la exclusión de la patria potestad); inscripción «automática… erga omnes» | Apellidos, art. 109; testimonio al Registro Civil (art. 26.3 LJV) | CC, LJV |
| 8 | 26 | incompleto | Invalidación por documento público «sin plazo preclusivo» | Texto del art. 26.2 LJV y su correspondencia con el art. 125 CC (al llegar a la mayoría de edad, si no lo consintió) | LJV, CC |
| 9 | 24 | estilo | «El reconociente menor presenta la solicitud asistido, no el representante en solitario» (interpretación) | Retirado; queda el art. 24.2 | LJV |
| 10 | Plazos | incompleto | Sin el plazo de apelación | Apelación: 20 días (art. 458 LEC) | LEC |
| 11 | Varios | desfasado | «Secretario judicial», «Juez de Primera Instancia» en el texto explicativo | LAJ; Sección Civil del Tribunal de Instancia | LO 7/2015, LO 1/2025 |

## Herramienta común (commit propio)

«Art. 12 CDN» (Convención sobre los Derechos del Niño) se leía como art. 12 LJV: el analizador ya no enlaza CDN ni CEDH a la ley del recurso.

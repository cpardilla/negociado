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

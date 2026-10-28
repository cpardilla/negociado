/* Migrado por tools/migrate.js desde sources/actual/G15.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-honor-menor",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "LEY 15/2015, DE 2 DE JULIO, DE LA JURISDICCIÓN VOLUNTARIA · TÍTULO II: DE LOS EXPEDIENTES DE JURISDICCIÓN VOLUNTARIA EN MATERIA DE PERSONAS · CAPÍTULO VII Del derecho al honor, a la intimidad y a la propia imagen del menor o persona con discapacidad con medidas de apoyo para el ejercicio de su capacidad jurídica Artículos 59 y 60 LJV − 100% + ⊞ Mapa ↓ Descargar ↺ Reiniciar",
 "corto": "Honor, intimidad e imagen del menor o persona con discapacidad",
 "articulos": [
  "59",
  "60"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20260305",
  "origen": "G15"
 },
 "fases": [
  "Iniciación",
  "Admisión a trámite",
  "Preparación",
  "Comparecencia",
  "Resolución",
  "Recursos",
  "Cierre"
 ],
 "actores": {
  "ambos": "LAJ + Juez",
  "juez": "Juez",
  "laj": "LAJ"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Recepción y examen inicial de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento de jurisdicción voluntaria del art. 60 LJV se inicia a instancia de parte, nunca de oficio. Corresponde al Letrado de la Administración de Justicia (LAJ) examinar la solicitud y verificar que reúne los requisitos formales y documentales mínimos antes de darle curso."
    },
    {
     "tipo": "lista",
     "titulo": "Documentación preceptiva (art. 60.1 LJV)",
     "items": [
      "Solicitud escrita identificando al solicitante y su condición de representante legal",
      "Identificación del menor o persona con discapacidad cuyo interés se protege",
      "Descripción detallada de la intromisión proyectada: tipo, soporte o medio, finalidad, duración, ámbito territorial y, si procede, contraprestación económica",
      "Documento acreditativo de la oposición formal del Ministerio Fiscal (presupuesto habilitante)",
      "Título habilitante de la representación legal: libro de familia, resolución judicial de tutela o curatela, escritura de poderes preventivos u otro título"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La postulación no es preceptiva: el representante legal puede actuar personalmente sin necesidad de Abogado ni Procurador (art. 3 LJV; art. 59.4 LJV a contrario)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 59.3 y 60.1 LJV; art. 3 LO 1/1982; art. 3 LJV (postulación)"
    }
   ],
   "pregunta": "La solicitud incluye toda la documentación preceptiva y es formalmente correcta?",
   "opciones": [
    {
     "texto": "Sí — documentación completa, solicitud formalmente correcta",
     "tono": "t-nota",
     "nota": "Documentación completa",
     "destino": "competencia"
    },
    {
     "texto": "No — faltan documentos o existen defectos formales subsanables",
     "tono": "t-nota",
     "nota": "Defectos formales",
     "destino": "subsanacion"
    }
   ]
  },
  "subsanacion": {
   "fase": 0,
   "titulo": "Requerimiento de subsanación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ requiere al solicitante para que corrija los defectos u omisiones detectados, concediéndole un plazo razonable (aplicación supletoria del art. 231 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "El defecto más frecuente y grave es la ausencia del documento acreditativo de la oposición del Ministerio Fiscal. Sin ese documento el expediente carece de presupuesto habilitante y no puede admitirse a trámite."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de subsanación: el LAJ fija un plazo razonable según la naturaleza del defecto. En la práctica suelen concederse entre 5 y 10 días hábiles."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ puede requerir subsanación en una sola vez de todos los defectos advertidos para no dilatar innecesariamente el procedimiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 231 LEC (supletorio vía art. 8 LJV); art. 18 LJV; art. 60.1 LJV"
    }
   ],
   "pregunta": "El solicitante subsana los defectos en el plazo concedido?",
   "opciones": [
    {
     "texto": "Sí — subsana todos los defectos correctamente en plazo",
     "tono": "t-nota",
     "nota": "Subsanación correcta",
     "destino": "competencia"
    },
    {
     "texto": "No — no subsana o lo hace de forma insuficiente",
     "tono": "t-nota",
     "nota": "Sin subsanación",
     "destino": "fin_archivo"
    }
   ]
  },
  "fin_archivo": {
   "fase": 0,
   "titulo": "Archivo por falta de subsanación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Ante la falta de subsanación en plazo, el LAJ dicta decreto acordando el archivo del expediente por defectos insubsanados o ausencia del presupuesto habilitante."
    },
    {
     "tipo": "nota",
     "texto": "El solicitante podrá presentar una nueva solicitud una vez subsanados los defectos, siempre que el presupuesto habilitante (oposición del MF) siga vigente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 231 LEC; art. 18 LJV"
    }
   ],
   "fin": "error"
  },
  "competencia": {
   "fase": 1,
   "titulo": "Verificación de la competencia territorial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ —y en su caso el Juez— examina si el juzgado es territorialmente competente para conocer del expediente conforme al criterio del domicilio del sujeto protegido."
    },
    {
     "tipo": "nota",
     "texto": "Fuero principal: domicilio del menor o persona con discapacidad (art. 59.2 LJV). Fuero subsidiario: residencia habitual si no consta domicilio."
    },
    {
     "tipo": "nota",
     "texto": "En partidos judiciales con Juzgados especializados en Familia (art. 98 LOPJ) pueden ser estos los competentes cuando la intromisión esté vinculada a una situación de crisis familiar."
    },
    {
     "tipo": "ley",
     "texto": "Art. 59.2 LJV; art. 2.1 LJV; arts. 63-65 LEC (supletorio)"
    }
   ],
   "pregunta": "Este juzgado es territorialmente competente?",
   "opciones": [
    {
     "texto": "Sí — el domicilio o residencia habitual del protegido corresponde a este partido judicial",
     "tono": "t-nota",
     "nota": "Competente",
     "destino": "presupuesto"
    },
    {
     "texto": "No — el domicilio corresponde a otro partido judicial",
     "tono": "t-nota",
     "nota": "Incompetente",
     "destino": "inhibicion"
    }
   ]
  },
  "inhibicion": {
   "fase": 1,
   "titulo": "Auto de inhibición y remisión al juzgado competente",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta Auto inhibiéndose y ordenando la remisión de las actuaciones al juzgado territorialmente competente según el domicilio o residencia habitual del menor o persona con discapacidad."
    },
    {
     "tipo": "nota",
     "texto": "Si el solicitante discrepa de la inhibición puede plantear declinatoria o conflicto de competencia ante el órgano superior común (arts. 63-65 LEC supletoriamente)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 63-65 LEC (supletorio vía art. 8 LJV); art. 59.2 LJV"
    }
   ],
   "fin": "neutral"
  },
  "presupuesto": {
   "fase": 1,
   "titulo": "Verificación del presupuesto habilitante",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez examina si concurren los dos requisitos acumulativos del Capítulo VII: (1) que el representante legal haya prestado su consentimiento a la intromisión, y (2) que el Ministerio Fiscal se haya opuesto formalmente a dicho consentimiento."
    },
    {
     "tipo": "aviso",
     "texto": "Sin oposición formal del MF no existe presupuesto habilitante: el consentimiento del representante legal es por sí solo suficiente para legitimar la intromisión (art. 3 LO 1/1982) y el expediente carece de objeto."
    },
    {
     "tipo": "nota",
     "texto": "La oposición del MF debe ser anterior a la solicitud y estar motivada en la lesión al interés superior del menor o a la voluntad de la persona con discapacidad (art. 3.7 EOMF, LO 50/1981)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 59.1 y 60.1 LJV; art. 3 LO 1/1982; art. 3.7 EOMF (LO 50/1981)"
    }
   ],
   "pregunta": "Consta en autos la oposición formal y motivada del Ministerio Fiscal al consentimiento del representante legal?",
   "opciones": [
    {
     "texto": "Sí — el MF ha formalizado su oposición con anterioridad a la solicitud",
     "tono": "t-nota",
     "nota": "Presupuesto concurrente",
     "destino": "admision"
    },
    {
     "texto": "No — no hay oposición del MF o no está debidamente acreditada",
     "tono": "t-nota",
     "nota": "Presupuesto ausente",
     "destino": "inadmision"
    }
   ]
  },
  "inadmision": {
   "fase": 1,
   "titulo": "Auto de inadmisión por falta de presupuesto habilitante",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta Auto inadmitiendo el expediente a trámite por no concurrir el presupuesto habilitante del Capítulo VII (ausencia de oposición del Ministerio Fiscal o del consentimiento del representante legal)."
    },
    {
     "tipo": "nota",
     "texto": "El Auto de inadmisión es recurrible en apelación ante la Audiencia Provincial (art. 20 LJV en relación con el art. 455 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Si el MF no había formalizado oposición, el consentimiento del representante legal basta para legitimar la intromisión (art. 3 LO 1/1982) sin necesidad de expediente judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.1 LJV; art. 3 LO 1/1982; art. 20 LJV"
    }
   ],
   "fin": "error"
  },
  "admision": {
   "fase": 1,
   "titulo": "Admisión a trámite y señal de comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Verificado el presupuesto habilitante, el LAJ dicta decreto admitiendo el expediente a trámite y señala el día y hora para la celebración de la comparecencia."
    },
    {
     "tipo": "nota",
     "texto": "No existe un plazo legal específico para el señalamiento. Se aplican los criterios generales de ordenación del juzgado, teniendo en cuenta la urgencia cuando sea relevante (contratos próximos a formalizarse, publicaciones inminentes)."
    },
    {
     "tipo": "plazo",
     "texto": "El señalamiento debe realizarse con suficiente antelación para permitir la correcta citación de todos los interesados preceptivos y la preparación del acto."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 16, 17 y 60.2 LJV"
    }
   ],
   "siguiente": "citaciones"
  },
  "citaciones": {
   "fase": 2,
   "titulo": "Práctica de citaciones para la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ practica las citaciones para la comparecencia. La ley distingue entre citaciones preceptivas (obligatorias en todo caso) y facultativas (a criterio del Juez según las circunstancias del expediente)."
    },
    {
     "tipo": "lista",
     "titulo": "Citaciones preceptivas (art. 60.2 LJV)",
     "items": [
      "Ministerio Fiscal: como promotor de la oposición y garante institucional del interés del protegido",
      "Representante legal: como parte promotora del expediente"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Citaciones facultativas (acuerda el Juez)",
     "items": [
      "Menor o persona con discapacidad — obligatoria si el menor tiene 12 años o más o madurez suficiente (art. 9 LOPJM)",
      "El otro progenitor si no es el solicitante (art. 156 CC: la patria potestad se ejerce conjuntamente)",
      "Empresa, medio de comunicación o tercero titular del proyecto de difusión",
      "Entidades públicas de protección de menores si el expediente tiene relevancia supraindividual",
      "Defensor judicial ad hoc si se aprecia conflicto de intereses (art. 163 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.2 LJV; art. 9 LOPJM; art. 156 CC; art. 163 CC"
    }
   ],
   "pregunta": "Se ha solicitado o el Juez acuerda de oficio la adopción de medidas cautelares?",
   "opciones": [
    {
     "texto": "Sí — se solicitan o acuerdan de oficio medidas cautelares urgentes",
     "tono": "t-nota",
     "nota": "Con medidas cautelares",
     "destino": "cautelares"
    },
    {
     "texto": "No — no proceden medidas cautelares en este momento",
     "tono": "t-nota",
     "nota": "Sin cautelares",
     "destino": "comparecencia"
    }
   ]
  },
  "cautelares": {
   "fase": 2,
   "titulo": "Resolución sobre medidas cautelares",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez resuelve sobre las medidas cautelares solicitadas o acordadas de oficio para evitar que la intromisión se produzca o continúe antes de que recaiga resolución definitiva."
    },
    {
     "tipo": "lista",
     "titulo": "Medidas cautelares posibles",
     "items": [
      "Suspensión o prohibición de difusión de las imágenes o contenidos proyectados durante la tramitación",
      "Retirada cautelar de contenidos ya difundidos al amparo de un consentimiento impugnado",
      "Orden de no difusión dirigida a plataformas digitales o medios de comunicación",
      "Designación de defensor judicial ad hoc si el interés del menor puede estar en conflicto con el del representante legal",
      "Cualquier otra medida de protección del menor al amparo del art. 158 CC"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "En supuestos de extrema urgencia (publicación inminente en medios de gran difusión, emisión en directo), el Juez puede adoptar medidas inaudita parte antes de la comparecencia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 158 CC; art. 9 LO 1/1982; arts. 721 y ss. LEC (supletorio); art. 60.2 LJV"
    }
   ],
   "siguiente": "comparecencia"
  },
  "comparecencia": {
   "fase": 3,
   "titulo": "Celebración del acto de la comparecencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La comparecencia es el acto oral central del expediente (art. 18 LJV). En ella se oye a los interesados, se propone y practica la prueba, y se formulan alegaciones finales. El principio de inmediación impone que sea el mismo Juez que resolverá quien dirija el acto."
    },
    {
     "tipo": "lista",
     "titulo": "Orden de la comparecencia",
     "items": [
      "Verificación de la asistencia de las partes citadas preceptivamente",
      "Exposición del objeto del expediente por el solicitante",
      "Alegaciones del Ministerio Fiscal sobre los motivos de su oposición al consentimiento",
      "Alegaciones de los demás interesados comparecidos",
      "Proposición de medios de prueba y decisión del Juez sobre su admisión",
      "Práctica de la prueba admitida (documental, pericial, interrogatorio)",
      "Conclusiones o alegaciones finales de las partes"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Si alguna de las partes preceptivas no comparece sin causa justificada, el acto puede celebrarse igualmente con los comparecidos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 18 LJV; arts. 60.2 y 60.3 LJV"
    }
   ],
   "pregunta": "Debe practicarse audiencia al menor o a la persona con discapacidad en el acto?",
   "opciones": [
    {
     "texto": "Sí — el menor tiene 12 años o más, o el Juez aprecia suficiente madurez; o la persona con discapacidad debe ser escuchada",
     "tono": "t-nota",
     "nota": "Con audiencia",
     "destino": "audiencia"
    },
    {
     "texto": "No — el menor tiene menos de 12 años sin madurez suficiente apreciada, o el Juez decide que no procede",
     "tono": "t-nota",
     "nota": "Sin audiencia",
     "destino": "prueba"
    }
   ]
  },
  "audiencia": {
   "fase": 3,
   "titulo": "Audiencia al menor o persona con discapacidad",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez escucha personalmente al menor o a la persona con discapacidad en condiciones adecuadas para garantizar la libre expresión de su voluntad, deseos y preferencias."
    },
    {
     "tipo": "lista",
     "titulo": "Garantías de la audiencia",
     "items": [
      "Puede practicarse sin presencia de los progenitores si su presencia pudiera coartar la libre expresión del menor",
      "Con apoyo de psicólogo o trabajador social del equipo técnico si la situación lo requiere",
      "Lenguaje y entorno adaptados a la edad y condición del menor",
      "Para personas con discapacidad: respeto de su voluntad, deseos y preferencias (arts. 12 CDPD y 249 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La omisión de la audiencia al menor de 12 años o más cuando era obligatoria puede constituir motivo de nulidad de actuaciones por infracción del art. 9 LOPJM y del art. 24 CE."
    },
    {
     "tipo": "nota",
     "texto": "Si el Juez aprecia conflicto entre la voluntad del curador representativo y la de la persona con discapacidad, puede nombrar defensor judicial ad hoc (art. 295 CC) antes o durante el acto."
    },
    {
     "tipo": "ley",
     "texto": "Art. 9 LOPJM; arts. 12 CDN y 12 CDPD; arts. 249 y 268 CC (Ley 8/2021); art. 295 CC"
    }
   ],
   "siguiente": "prueba"
  },
  "prueba": {
   "fase": 3,
   "titulo": "Práctica de prueba y alegaciones finales",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se practica la prueba admitida y las partes formulan sus alegaciones finales antes de que el Juez delibere y dicte resolución. Cualquier medio de prueba admitido en la LEC es aplicable (art. 18 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Medios de prueba más habituales en estos expedientes",
     "items": [
      "Documental: proyecto de consentimiento, contratos, capturas digitales, publicaciones, metadatos",
      "Pericial psicológica o social: valoración del impacto en el menor o persona con discapacidad",
      "Interrogatorio de las partes: representante legal, curador y, en su caso, tercero interesado",
      "Informe del trabajador social o equipo técnico del juzgado",
      "En entorno digital: evidencias sobre audiencia, alcance del medio y usos secundarios previstos"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La prueba documental en expedientes digitales debe incluir datos sobre la audiencia o alcance del medio, el contrato o acuerdo de difusión y las condiciones técnicas de acceso al contenido."
    },
    {
     "tipo": "ley",
     "texto": "Art. 18 LJV; arts. 281 y ss. LEC (supletorio); art. 60.3 LJV"
    }
   ],
   "siguiente": "deliberacion"
  },
  "deliberacion": {
   "fase": 4,
   "titulo": "Deliberación y dictado del Auto",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Concluida la comparecencia y practicada la prueba, el Juez delibera y dicta el Auto resolviendo el expediente. La resolución adopta la forma de Auto debidamente motivado (art. 19.1 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: al término de la propia comparecencia (regla general, art. 60.3 LJV). Excepción: dentro de los cinco días siguientes si la complejidad del asunto lo justifica."
    },
    {
     "tipo": "nota",
     "texto": "El Auto debe expresar con claridad los hechos valorados, los criterios jurídicos aplicados —incluido el juicio de proporcionalidad constitucional triple: idoneidad, necesidad y proporcionalidad estricta— y la razón de la decisión."
    },
    {
     "tipo": "lista",
     "titulo": "Criterios del interés superior del menor a ponderar (art. 2 LOPJM y LO 8/2015)",
     "items": [
      "Protección del derecho a la vida y el pleno desarrollo de la personalidad",
      "Satisfacción de las necesidades básicas materiales y afectivas del menor",
      "Consideración de los deseos, sentimientos y opiniones del menor",
      "Irreversibilidad del contenido una vez difundido en internet y riesgo de huella digital permanente",
      "Riesgo de uso secundario del contenido para fines no autorizados (IA generativa, redistribución)",
      "Ausencia de discriminación y perspectiva de género (especialmente en el caso de niñas y adolescentes)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.3 LJV; art. 2 LOPJM (LO 8/2015); arts. 18.1, 20.4, 24 y 120.3 CE; art. 84 LOPDGDD"
    }
   ],
   "pregunta": "Cuál es el sentido de la resolución del Juez?",
   "opciones": [
    {
     "texto": "Autorización plena: el Juez autoriza el consentimiento en los términos exactos del proyecto",
     "tono": "t-nota",
     "nota": "Autorización plena",
     "destino": "auto_autoriza"
    },
    {
     "texto": "Autorización condicionada: autoriza pero con limitaciones, condiciones o modificaciones",
     "tono": "t-nota",
     "nota": "Autorización condicionada",
     "destino": "auto_condiciona"
    },
    {
     "texto": "Denegación: el Juez deniega la autorización por incompatibilidad con el interés superior",
     "tono": "t-nota",
     "nota": "Denegación",
     "destino": "auto_deniega"
    }
   ]
  },
  "auto_autoriza": {
   "fase": 4,
   "titulo": "Auto autorizando el consentimiento (autorización plena)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta Auto autorizando el consentimiento del representante legal a la intromisión proyectada en los términos exactos del proyecto presentado."
    },
    {
     "tipo": "nota",
     "texto": "La autorización judicial convierte en legítima la intromisión proyectada (art. 2.1 LO 1/1982). El representante legal puede ahora otorgar válidamente el consentimiento al tercero."
    },
    {
     "tipo": "aviso",
     "texto": "Los efectos del Auto quedan suspendidos automáticamente si cualquiera de las partes legitimadas interpone recurso de apelación (art. 60.4 LJV: efectos suspensivos del recurso). La intromisión no puede producirse hasta la resolución definitiva."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.3 LJV; art. 2.1 LO 1/1982; art. 60.4 LJV (efectos suspensivos)"
    }
   ],
   "pregunta": "Se interpone recurso de apelación contra este Auto?",
   "opciones": [
    {
     "texto": "Sí — el Ministerio Fiscal recurre en apelación pese a la autorización",
     "tono": "t-nota",
     "nota": "Recurso del MF",
     "destino": "apelacion_mf"
    },
    {
     "texto": "No — el Auto deviene firme sin recurso",
     "tono": "t-nota",
     "nota": "Auto firme",
     "destino": "notificacion_auto"
    }
   ]
  },
  "auto_condiciona": {
   "fase": 4,
   "titulo": "Auto con autorización condicionada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta Auto autorizando el consentimiento pero con condiciones, limitaciones o modificaciones sobre el proyecto original que permiten compatibilizar la intromisión con el interés superior del menor."
    },
    {
     "tipo": "lista",
     "titulo": "Ejemplos de condiciones que puede imponer el Juez",
     "items": [
      "Reducción del plazo máximo de difusión del contenido",
      "Limitación del soporte o medio autorizado (prohibición de redes sociales, solo prensa escrita, etc.)",
      "Exclusión de datos identificativos directos del menor (rostro, nombre, domicilio)",
      "Exigencia de contraprestación económica en favor del menor con depósito judicial",
      "Condiciones técnicas de edición (desenfoque, ángulo, texto sobreimpreso)",
      "Prohibición de difusión en plataformas accesibles a menores de determinadas edades",
      "Obligación de eliminación del contenido transcurrido el plazo autorizado"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Los efectos quedan suspendidos si se interpone recurso de apelación (art. 60.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.3 LJV; art. 84 LOPDGDD; art. 2 LOPJM"
    }
   ],
   "pregunta": "Se interpone recurso de apelación contra el Auto condicionado?",
   "opciones": [
    {
     "texto": "Sí — el representante legal recurre (considera las condiciones excesivas o restrictivas)",
     "tono": "t-nota",
     "nota": "Recurso del representante",
     "destino": "apelacion_rep"
    },
    {
     "texto": "Sí — el MF recurre (considera las condiciones insuficientes para proteger al menor)",
     "tono": "t-nota",
     "nota": "Recurso del MF",
     "destino": "apelacion_mf"
    },
    {
     "texto": "No — el Auto condicionado deviene firme",
     "tono": "t-nota",
     "nota": "Auto firme",
     "destino": "notificacion_auto"
    }
   ]
  },
  "auto_deniega": {
   "fase": 4,
   "titulo": "Auto denegando la autorización del consentimiento",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta Auto denegando la autorización del consentimiento por ser la intromisión proyectada incompatible con el interés superior del menor o con la voluntad de la persona con discapacidad, con independencia del consentimiento del representante legal."
    },
    {
     "tipo": "nota",
     "texto": "La denegación no impide que los representantes legales reformulen el proyecto con modificaciones sustanciales que eliminen los obstáculos apreciados y presenten una nueva solicitud."
    },
    {
     "tipo": "aviso",
     "texto": "Los efectos del Auto quedan suspendidos si el representante legal interpone recurso de apelación (art. 60.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.3 LJV; art. 2 LOPJM; arts. 18.1 y 20.4 CE"
    }
   ],
   "pregunta": "Se interpone recurso de apelación contra el Auto denegatorio?",
   "opciones": [
    {
     "texto": "Sí — el representante legal recurre ante la Audiencia Provincial",
     "tono": "t-nota",
     "nota": "Recurso del representante",
     "destino": "apelacion_rep"
    },
    {
     "texto": "No — el Auto denegatorio deviene firme",
     "tono": "t-nota",
     "nota": "Auto firme",
     "destino": "fin_denegacion"
    }
   ]
  },
  "apelacion_mf": {
   "fase": 5,
   "titulo": "Recurso de apelación del Ministerio Fiscal",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Ministerio Fiscal interpone recurso de apelación ante la Audiencia Provincial contra el Auto que autorizó (plena o condicionadamente) el consentimiento a la intromisión."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de interposición: 20 días desde la notificación del Auto (art. 458.1 LEC). Improrrogable."
    },
    {
     "tipo": "aviso",
     "texto": "La interposición del recurso suspende automáticamente los efectos del Auto (art. 60.4 LJV). La intromisión no puede producirse hasta la resolución definitiva de la Audiencia Provincial."
    },
    {
     "tipo": "nota",
     "texto": "La Audiencia Provincial resuelve el recurso con tramitación preferente sobre asuntos ordinarios, atendiendo a la urgencia de los plazos contractuales y a la importancia del bien jurídico en juego."
    },
    {
     "tipo": "nota",
     "texto": "La AP puede confirmar la autorización, revocarla totalmente, o modificar las condiciones impuestas en primera instancia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.4 LJV; arts. 455-467 LEC; art. 82.2 LOPJ"
    }
   ],
   "pregunta": "Cuál es el resultado del recurso resuelto por la Audiencia Provincial?",
   "opciones": [
    {
     "texto": "La AP desestima el recurso del MF y confirma la autorización (plena o condicionada)",
     "tono": "t-nota",
     "nota": "AP confirma autorización",
     "destino": "notificacion_auto"
    },
    {
     "texto": "La AP estima el recurso del MF y revoca la autorización",
     "tono": "t-nota",
     "nota": "AP revoca autorización",
     "destino": "fin_denegacion_ap"
    }
   ]
  },
  "apelacion_rep": {
   "fase": 5,
   "titulo": "Recurso de apelación del representante legal",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El representante legal interpone recurso de apelación ante la Audiencia Provincial contra el Auto que denegó la autorización o la condicionó de forma excesiva."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de interposición: 20 días desde la notificación del Auto (art. 458.1 LEC). Improrrogable."
    },
    {
     "tipo": "nota",
     "texto": "Los efectos del Auto quedan suspendidos durante la tramitación del recurso (art. 60.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La AP puede confirmar el Auto denegatorio, revocar la denegación y autorizar el consentimiento, o modificar las condiciones de la autorización condicionada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.4 LJV; arts. 455-467 LEC; art. 82.2 LOPJ"
    }
   ],
   "pregunta": "Cuál es el resultado del recurso resuelto por la Audiencia Provincial?",
   "opciones": [
    {
     "texto": "La AP estima el recurso y autoriza el consentimiento (plena o condicionadamente)",
     "tono": "t-nota",
     "nota": "AP autoriza",
     "destino": "notificacion_auto"
    },
    {
     "texto": "La AP desestima el recurso y confirma la denegación o las condiciones",
     "tono": "t-nota",
     "nota": "AP confirma denegación",
     "destino": "fin_denegacion"
    }
   ]
  },
  "notificacion_auto": {
   "fase": 6,
   "titulo": "Notificación del Auto firme y efectos de la autorización",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ notifica el Auto firme a todas las partes. Desde la firmeza, el representante legal puede otorgar válidamente el consentimiento a la intromisión autorizada en los términos del Auto."
    },
    {
     "tipo": "nota",
     "texto": "La autorización tiene efectos ex nunc desde la firmeza. No cubre intromisiones anteriores a la resolución judicial ni usos distintos de los expresamente autorizados."
    },
    {
     "tipo": "nota",
     "texto": "El consentimiento otorgado al amparo del Auto firme es revocable en cualquier momento (art. 60.5 LJV y art. 2.3 LO 1/1982), aunque la revocación puede generar obligación de indemnizar a terceros que actuaron de buena fe."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 60.3 y 60.5 LJV; art. 2.3 LO 1/1982; art. 208 LEC (firmeza)"
    }
   ],
   "pregunta": "Los representantes legales desean revocar el consentimiento judicialmente autorizado?",
   "opciones": [
    {
     "texto": "Sí — instan la revocación del consentimiento ante el Juzgado (art. 60.5 LJV)",
     "tono": "t-nota",
     "nota": "Revocación",
     "destino": "revocacion"
    },
    {
     "texto": "No — el consentimiento se mantiene y el procedimiento concluye exitosamente",
     "tono": "t-nota",
     "nota": "Sin revocación",
     "destino": "fin_exitoso"
    }
   ]
  },
  "revocacion": {
   "fase": 6,
   "titulo": "Revocación del consentimiento (art. 60.5 LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los representantes legales comunican al Juzgado su voluntad de revocar el consentimiento judicialmente autorizado. El Juez dicta Auto dejando sin efecto la autorización concedida."
    },
    {
     "tipo": "nota",
     "texto": "La revocación produce efectos ex nunc: desde la fecha del Auto de revocación. No convierte en ilegítimas las intromisiones ya consumadas al amparo de la autorización previa (art. 2.3 LO 1/1982)."
    },
    {
     "tipo": "aviso",
     "texto": "La revocación puede generar obligación de indemnizar a terceros que hubieran actuado de buena fe confiando en el consentimiento válidamente otorgado (art. 1.4 LO 1/1982; arts. 1101 y ss. CC)."
    },
    {
     "tipo": "nota",
     "texto": "En actividades de kidfluencer: la revocación puede poner fin a contratos de patrocinio con posibles reclamaciones por incumplimiento. El art. 26 LOPJM (mod. LOPIVI) protege el interés del menor frente al interés económico."
    },
    {
     "tipo": "nota",
     "texto": "La revocación del art. 60.5 LJV y el ejercicio del derecho al olvido (art. 94 LOPDGDD; art. 17 RGPD) son mecanismos independientes pero complementarios que pueden ejercerse de forma coordinada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.5 LJV; art. 2.3 LO 1/1982; art. 94 LOPDGDD; art. 17 RGPD; art. 26 LOPJM (LOPIVI)"
    }
   ],
   "fin": "warning"
  },
  "fin_exitoso": {
   "fase": 6,
   "titulo": "Procedimiento concluido: autorización firme",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente concluye con la autorización judicial firme del consentimiento a la intromisión proyectada. El representante legal puede otorgar válidamente el consentimiento al tercero en los términos del Auto."
    },
    {
     "tipo": "nota",
     "texto": "La autorización permanece revocable en cualquier momento por iniciativa exclusiva del representante legal (art. 60.5 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Si la intromisión implica tratamiento de datos personales, recuérdese la aplicación concurrente del RGPD y la LOPDGDD: el consentimiento a la intromisión no es equivalente al consentimiento al tratamiento de datos."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 59-60 LJV; art. 2 LO 1/1982; RGPD 2016/679; LOPDGDD (LO 3/2018)"
    }
   ],
   "fin": "success"
  },
  "fin_denegacion": {
   "fase": 6,
   "titulo": "Procedimiento concluido: autorización denegada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente concluye con la denegación firme de la autorización. La intromisión proyectada no puede realizarse válidamente: el consentimiento del representante legal carece de eficacia legítima."
    },
    {
     "tipo": "nota",
     "texto": "El representante legal puede reformular el proyecto con modificaciones sustanciales que eliminen los obstáculos apreciados por el órgano judicial y presentar una nueva solicitud."
    },
    {
     "tipo": "nota",
     "texto": "Vías de tutela complementarias: art. 158 CC (medidas de protección del menor), acción contenciosa (art. 9 LO 1/1982), vía administrativa ante la AEPD si hay tratamiento de datos."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 59-60 LJV; art. 2 LOPJM; art. 158 CC; art. 9 LO 1/1982"
    }
   ],
   "fin": "error"
  },
  "fin_denegacion_ap": {
   "fase": 6,
   "titulo": "AP revoca la autorización: denegación definitiva",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial ha estimado el recurso del Ministerio Fiscal y ha revocado la autorización concedida en primera instancia. La intromisión proyectada no puede realizarse."
    },
    {
     "tipo": "nota",
     "texto": "Contra la resolución de la Audiencia Provincial en este ámbito de la jurisdicción voluntaria no cabe recurso ordinario, salvo recurso de casación en los supuestos del art. 477 LEC (interés casacional)."
    },
    {
     "tipo": "nota",
     "texto": "El representante legal puede replantear el proyecto con modificaciones sustanciales eliminando las razones de oposición del MF."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.4 LJV; arts. 477 y ss. LEC; art. 2 LOPJM"
    }
   ],
   "fin": "error"
  }
 },
 "pie": "Arts. 59-60 LJV 15/2015<br>LO 1/1982 (honor, intimidad, imagen)<br>Ley 8/2021 (discapacidad)<br>LOPDGDD LO 3/2018<br>RGPD 2016/679"
});

/* Migrado por tools/migrate.js desde sources/actual/G15.json; revisado con el BOE (registro: docs/revision/ljv-honor-menor.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-honor-menor",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "Del derecho al honor, a la intimidad y a la propia imagen del menor o persona con discapacidad con medidas de apoyo para el ejercicio de su capacidad jurídica",
 "corto": "Honor, intimidad e imagen del menor o persona con discapacidad",
 "articulos": [
  "59",
  "60"
 ],
 "revision": {
  "estado": "revisado",
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
  "ambos": "Juez / LAJ",
  "juez": "Juez",
  "laj": "Letrado de la Administración de Justicia"
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
     "texto": "Expediente de los arts. 59 y 60 LJV: autorización judicial del consentimiento que el representante legal de un menor o de una persona con discapacidad con medidas de apoyo ha dado a una intromisión en su honor, intimidad o propia imagen, cuando el Ministerio Fiscal se ha opuesto (art. 59.1 LJV; art. 3.2 LO 1/1982). Lo promueve el representante legal (art. 59.3 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Documentos que acompañan a la solicitud (art. 60.1 LJV)",
     "items": [
      "El proyecto de consentimiento (conviene que describa la intromisión: soporte o medio, finalidad, duración, ámbito y, en su caso, contraprestación)",
      "El documento en que conste la notificación de la oposición del Ministerio Fiscal",
      "Los documentos que acrediten la representación legal (filiación, resolución de tutela o la que confiere al curador funciones representativas)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "No es preceptiva la intervención de Abogado ni Procurador (art. 59.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 59 y 60.1 LJV · Art. 3 LO 1/1982"
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
     "texto": "El LAJ requiere al solicitante para que subsane los defectos u omisiones (art. 16.4 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "El defecto más grave es que falte el documento en que conste la notificación de la oposición del Fiscal: sin oposición no hay expediente (art. 59.1 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Cinco días para subsanar (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV · Art. 60.1 LJV"
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
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si no se subsana en plazo, el LAJ da cuenta al Juez, a quien corresponde decidir el expediente, que acuerda lo procedente (art. 16.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Puede presentarse una nueva solicitud con los documentos completos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV · Art. 60.3 LJV"
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
     "texto": "El LAJ examina de oficio la competencia territorial (art. 16.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Es competente el Juzgado de Primera Instancia del domicilio o, en su defecto, de la residencia del menor o persona con discapacidad (art. 59.2 LJV). Hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ); si no, la Sección Civil."
    },
    {
     "tipo": "nota",
     "texto": "La competencia territorial no puede modificarse por sumisión (art. 2.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 59.2 LJV · Arts. 2.2 y 16 LJV · Art. 86.5 j) LOPJ"
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
     "texto": "Como la decisión del expediente corresponde al Juez, el LAJ le da cuenta y el Juez, tras oír al Ministerio Fiscal y al solicitante, acuerda la remisión al órgano que considere competente (art. 16.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.3 LJV · Art. 59.2 LJV"
    }
   ],
   "fin": "neutral"
  },
  "presupuesto": {
   "fase": 1,
   "titulo": "Verificación del presupuesto habilitante",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Presupuesto del expediente (art. 59.1 LJV; art. 3.2 LO 1/1982): el representante legal ha otorgado por escrito el consentimiento a la intromisión, lo ha puesto en conocimiento previo del Ministerio Fiscal y este se ha opuesto en el plazo de ocho días."
    },
    {
     "tipo": "aviso",
     "texto": "Si el Fiscal no se opone en ese plazo, no hay expediente: resuelve el Juez solo cuando hay oposición (art. 3.2 LO 1/1982)."
    },
    {
     "tipo": "nota",
     "texto": "Si sus condiciones de madurez lo permiten, el menor o la persona con discapacidad presta el consentimiento por sí mismo (art. 3.1 LO 1/1982). Aun con consentimiento, el uso de la imagen o el nombre de un menor en los medios que menoscabe su honra o reputación o sea contrario a sus intereses es intromisión ilegítima (art. 4.3 LOPJM)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 59.1 LJV · Art. 3 LO 1/1982 · Art. 4.3 LOPJM"
    }
   ],
   "pregunta": "¿Consta la oposición del Ministerio Fiscal al consentimiento del representante legal?",
   "opciones": [
    {
     "texto": "Sí — consta la notificación de la oposición del Fiscal",
     "tono": "t-nota",
     "nota": "Presupuesto concurrente",
     "destino": "admision"
    },
    {
     "texto": "No — no hay oposición del Fiscal o no está acreditada",
     "tono": "t-nota",
     "nota": "Presupuesto ausente",
     "destino": "inadmision"
    }
   ]
  },
  "inadmision": {
   "fase": 1,
   "titulo": "Inadmisión por falta del presupuesto del expediente",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si la solicitud no es admisible, el LAJ da cuenta al Juez, que resuelve (art. 17.1 LJV). Falta el presupuesto del expediente: la oposición del Fiscal o el consentimiento del representante legal (art. 59.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Contra el auto que pone fin al expediente cabe apelación (art. 20.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Si el Fiscal no se opuso en ocho días, basta el consentimiento escrito del representante legal (art. 3.2 LO 1/1982)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 17.1, 20.2 y 59.1 LJV · Art. 3.2 LO 1/1982"
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
     "texto": "Admitida la solicitud, el LAJ señala día y hora para la comparecencia (art. 60.2 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "La comparecencia se celebra dentro de los treinta días siguientes a la admisión, con citación al menos quince días antes (arts. 17.3 y 18.1 LJV). Si hay urgencia (publicación inminente), conviene tenerla en cuenta al señalar."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.2 LJV · Arts. 16, 17 y 18.1 LJV"
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
     "texto": "El LAJ cita a la comparecencia (art. 60.2 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Se cita siempre (art. 60.2 LJV)",
     "items": [
      "Al Ministerio Fiscal",
      "Al representante legal del menor o persona con discapacidad"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Además",
     "items": [
      "Al menor o persona con discapacidad, si el Juez lo cree necesario (art. 60.2 LJV); el menor tiene derecho a ser oído, y con doce años cumplidos se considera que tiene suficiente madurez (art. 9 LOPJM)",
      "A otros interesados, si el Juez lo acuerda de oficio o a instancia del Fiscal (art. 60.2 LJV): el otro progenitor si no es el solicitante (art. 156 CC); la empresa, medio o tercero titular del proyecto",
      "Defensor judicial si los progenitores tienen un interés opuesto al del hijo (art. 163 CC) o hay conflicto con quien presta apoyo (art. 295 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.2 LJV · Art. 9 LOPJM · Arts. 156, 163 y 295 CC"
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
     "texto": "El Juez puede adoptar las medidas necesarias para apartar al menor de un peligro o evitarle perjuicios, de oficio o a instancia del propio hijo, de un pariente o del Ministerio Fiscal, también en un expediente de jurisdicción voluntaria (art. 158 CC)."
    },
    {
     "tipo": "lista",
     "titulo": "Medidas posibles",
     "items": [
      "Suspensión o prohibición de difundir las imágenes o contenidos durante la tramitación",
      "Retirada de contenidos ya difundidos",
      "Orden de no difusión dirigida a plataformas o medios",
      "Nombramiento de defensor judicial si hay conflicto de intereses (arts. 163 y 295 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Ante la difusión de imágenes o información de menores que pueda ser intromisión ilegítima, el Fiscal insta de inmediato medidas cautelares y de protección (art. 4.2 LOPJM; art. 84.2 LOPDGDD)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 158 CC · Art. 4.2 LOPJM · Art. 84.2 LOPDGDD"
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
     "texto": "Si no asiste el solicitante, se le tiene por desistido y se archiva el expediente; si no asiste otro citado, el acto se celebra (art. 18.2.1.ª LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 18 LJV · Art. 60.2 LJV"
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
     "texto": "El Juez oye al menor o a la persona con discapacidad en condiciones idóneas, en términos accesibles, comprensibles y adaptados a su edad, madurez y circunstancias; puede acordar que sea en acto separado, sin interferencias, con asistencia del Fiscal (art. 18.2.4.ª LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Garantías",
     "items": [
      "Del resultado se levanta acta por el LAJ; si es después de la comparecencia, se da traslado a los interesados para alegaciones en cinco días (art. 18.2.4.ª LJV)",
      "Con el auxilio de especialistas cuando sea necesario (art. 18.2.4.ª LJV; art. 9.1 LOPJM)",
      "El Fiscal en su informe y el Juez en la resolución valoran motivadamente la exploración (art. 18.2.4.ª LJV)",
      "Para personas con discapacidad: respeto de su voluntad, deseos y preferencias (art. 12 CDPD; art. 249 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Si hay conflicto entre el curador representativo y la persona con discapacidad, se nombra defensor judicial (art. 295.2.º CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 18.2.4.ª LJV · Art. 9 LOPJM · Art. 12 CDN · Art. 12 CDPD · Arts. 249 y 295 CC"
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
     "texto": "Arts. 5 y 18 LJV · Arts. 281 y ss. LEC"
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
     "texto": "El Juez resuelve por auto motivado (art. 19.1 LJV), en atención al interés superior del menor o persona con discapacidad (art. 60.3 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Al término de la comparecencia o, si la complejidad del asunto lo justifica, dentro de los cinco días siguientes (art. 60.3 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Criterios generales del interés superior del menor (art. 2.2 LOPJM)",
     "items": [
      "La protección de su derecho a la vida, supervivencia y desarrollo y la satisfacción de sus necesidades básicas, materiales, físicas, educativas, emocionales y afectivas",
      "La consideración de sus deseos, sentimientos y opiniones, y su derecho a participar progresivamente en la determinación de su interés",
      "Su desarrollo en un entorno familiar adecuado y libre de violencia",
      "Y los demás del art. 2.2, más los que se estimen adecuados a las circunstancias del caso"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El uso de la imagen o el nombre del menor en medios de comunicación que menoscabe su honra o reputación o sea contrario a sus intereses es intromisión ilegítima aun con el consentimiento de sus representantes (art. 4.3 LOPJM)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.3 LJV · Art. 19.1 LJV · Arts. 2 y 4 LOPJM · Art. 18.1 CE"
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
     "texto": "Con la autorización, el consentimiento excluye la intromisión ilegítima (art. 2.2 LO 1/1982). El representante legal puede ahora otorgar válidamente el consentimiento al tercero."
    },
    {
     "tipo": "aviso",
     "texto": "Los efectos del Auto quedan suspendidos automáticamente si cualquiera de las partes legitimadas interpone recurso de apelación (art. 60.4 LJV). La intromisión no puede producirse hasta la resolución definitiva."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.3 y 4 LJV · Art. 2.2 LO 1/1982"
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
     "texto": "Art. 60.3 y 4 LJV · Art. 2 LOPJM · Art. 84 LOPDGDD"
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
     "texto": "Art. 60.3 y 4 LJV · Arts. 2 y 4 LOPJM · Art. 18.1 CE"
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
     "texto": "Veinte días desde la notificación (art. 458.1 LEC), ante la Audiencia Provincial, cuyo LAJ pide las actuaciones al Juzgado (art. 458.3 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "La interposición del recurso suspende automáticamente los efectos del Auto (art. 60.4 LJV). La intromisión no puede producirse hasta la resolución definitiva de la Audiencia Provincial."
    },
    {
     "tipo": "nota",
     "texto": "El recurso tiene efectos suspensivos y se resuelve con carácter preferente (art. 60.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La AP puede confirmar la autorización, revocarla totalmente, o modificar las condiciones impuestas en primera instancia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.4 LJV · Arts. 455 y ss. LEC"
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
     "texto": "Veinte días desde la notificación (art. 458.1 LEC), ante la Audiencia Provincial, cuyo LAJ pide las actuaciones al Juzgado (art. 458.3 LEC)."
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
     "texto": "Art. 60.4 LJV · Arts. 455 y ss. LEC"
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
     "texto": "El LAJ notifica el auto. Firme (art. 207.2 LEC), el representante legal puede otorgar el consentimiento en sus términos."
    },
    {
     "tipo": "nota",
     "texto": "La autorización no cubre intromisiones anteriores ni usos distintos de los autorizados."
    },
    {
     "tipo": "nota",
     "texto": "El consentimiento es revocable en cualquier momento, pero se indemnizan los daños y perjuicios causados, incluidas las expectativas justificadas (art. 2.3 LO 1/1982). Si los representantes quieren revocar el consentimiento otorgado judicialmente, lo ponen en conocimiento del Juez (art. 60.5 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.5 LJV · Art. 2.3 LO 1/1982 · Art. 207 LEC"
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
     "texto": "Los representantes legales ponen en conocimiento del Juez que quieren que se revoque el consentimiento otorgado judicialmente, y el Juez dicta resolución dejándolo sin efecto (art. 60.5 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "La revocación obliga a indemnizar, en su caso, los daños y perjuicios causados, incluidas las expectativas justificadas (art. 2.3 LO 1/1982)."
    },
    {
     "tipo": "nota",
     "texto": "Es independiente del derecho de supresión de los datos personales (art. 17 RGPD) y del derecho al olvido en servicios de redes sociales (art. 94 LOPDGDD)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.5 LJV · Art. 2.3 LO 1/1982 · Art. 94 LOPDGDD · Art. 17 RGPD"
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
     "texto": "El consentimiento sigue siendo revocable (art. 2.3 LO 1/1982; art. 60.5 LJV)."
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
     "texto": "La Audiencia Provincial ha estimado el recurso del Fiscal y ha revocado la autorización. La intromisión proyectada no puede realizarse."
    },
    {
     "tipo": "nota",
     "texto": "Contra el auto de la Audiencia no cabe casación: el art. 477.1 LEC la reserva a las sentencias que ponen fin a la segunda instancia (y a ciertos autos sobre reconocimiento de resoluciones extranjeras)."
    },
    {
     "tipo": "nota",
     "texto": "El representante legal puede presentar un proyecto distinto, que de nuevo habrá de comunicar al Fiscal (art. 3.2 LO 1/1982)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 60.4 LJV · Art. 477.1 LEC · Art. 3.2 LO 1/1982"
    }
   ],
   "fin": "error"
  }
 },
 "pie": "<strong>Referencias normativas</strong><br>Arts. 16 a 20, 59 y 60 LJV<br>Arts. 2 y 3 LO 1/1982<br>Arts. 2, 4 y 9 LOPJM<br>Arts. 156, 158, 163 y 295 CC<br>Arts. 84 y 94 LOPDGDD"
});

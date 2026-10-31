/* Migrado por tools/migrate.js desde sources/actual/G14.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-patrimonio-protegido",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la protección del patrimonio de las personas con discapacidad",
 "corto": "Patrimonio de las personas con discapacidad",
 "articulos": [
  "56",
  "57",
  "58"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20260305",
  "origen": "G14"
 },
 "fases": [
  "Identificación y ámbito",
  "Competencia y legitimación",
  "Solicitud y documentación",
  "Tramitación",
  "Resolución judicial",
  "Recursos y eficacia registral"
 ],
 "actores": {
  "juez": "Juez",
  "laj": "Letrado de la Administración",
  "ambos": "Ambos"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio: Verificación del ámbito material",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Este expediente de jurisdicción voluntaria se tramita cuando concurren los supuestos del Artículo 56 de la Ley 15/2015 sobre protección patrimonial de personas con discapacidad."
    },
    {
     "tipo": "nota",
     "texto": "El procedimiento es no contencioso. El Ministerio Fiscal actúa como único legitimado para promoverlo, de oficio o a solicitud de cualquier persona."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 56.1; Ley 41/2003 Capítulo I"
    }
   ],
   "pregunta": "¿El expediente tiene por objeto alguna de las actuaciones previstas en el Capítulo I de la Ley 41/2003?",
   "opciones": [
    {
     "texto": "Sí: Constitución, administración, fiscalización, modificación o extinción de patrimonio protegido",
     "tono": "t-nota",
     "destino": "supuestos_art56"
    },
    {
     "texto": "No: El asunto no encaja en este procedimiento",
     "tono": "t-nota",
     "destino": "fin_no_ambito"
    }
   ]
  },
  "fin_no_ambito": {
   "fase": 0,
   "titulo": "Fin: Fuera de ámbito",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El expediente no procede por no encuadrarse en los supuestos del Artículo 56 de la Ley 15/2015."
    },
    {
     "tipo": "nota",
     "texto": "Deberá valorarse la tramitación por la vía procesal ordinaria o el procedimiento de jurisdicción voluntaria que corresponda según la materia."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 56; Ley 41/2003 Arts. 1-8"
    }
   ],
   "fin": "error"
  },
  "supuestos_art56": {
   "fase": 0,
   "titulo": "Supuestos del Artículo 56: Selección del tipo de actuación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Identifique cuál de los cuatro supuestos del Artículo 56 motiva el expediente:"
    },
    {
     "tipo": "lista",
     "titulo": "Supuestos contemplados",
     "items": [
      "a) Constitución o aprobación de aportaciones con negativa injustificada de representantes",
      "b) Nombramiento de administrador cuando no pueda realizarse conforme al título",
      "c) Establecimiento de exenciones a la autorización judicial para actos de disposición",
      "d) Medidas posteriores: sustitución, cambio de reglas, fiscalización, extinción"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 56.2-5; Ley 41/2003 Arts. 3, 5-7"
    }
   ],
   "pregunta": "Seleccione el supuesto aplicable:",
   "opciones": [
    {
     "texto": "a) Constitución/aportaciones con negativa de consentimiento",
     "tono": "t-nota",
     "destino": "supuesto_a"
    },
    {
     "texto": "b) Nombramiento de administrador por imposibilidad",
     "tono": "t-nota",
     "destino": "supuesto_b"
    },
    {
     "texto": "c) Exenciones de autorización judicial",
     "tono": "t-nota",
     "destino": "supuesto_c"
    },
    {
     "texto": "d) Medidas posteriores a la constitución",
     "tono": "t-nota",
     "destino": "supuesto_d"
    }
   ]
  },
  "supuesto_a": {
   "fase": 1,
   "titulo": "Supuesto a): Constitución con negativa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se solicita la constitución del patrimonio protegido o aprobación de aportaciones cuando los progenitores, tutor o curador se niegan injustificadamente a prestar consentimiento."
    },
    {
     "tipo": "nota",
     "texto": "Criterio judicial: El Juez valorará si la negativa es injustificada, ponderando el interés superior del beneficiario y su autonomía."
    },
    {
     "tipo": "ley",
     "texto": "Ley 41/2003 Art. 3"
    }
   ],
   "siguiente": "competencia"
  },
  "supuesto_b": {
   "fase": 1,
   "titulo": "Supuesto b): Nombramiento de administrador",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Procede cuando no se pueda realizar el nombramiento conforme al título de constitución por fallecimiento, incapacidad, renuncia, conflicto de intereses o incumplimiento grave."
    },
    {
     "tipo": "nota",
     "texto": "Facultades del administrador: gestión ordinaria, percepción de rentas, actos de conservación. Requiere autorización judicial para actos de disposición salvo exención."
    },
    {
     "tipo": "ley",
     "texto": "Ley 41/2003 Art. 5"
    }
   ],
   "siguiente": "competencia"
  },
  "supuesto_c": {
   "fase": 1,
   "titulo": "Supuesto c): Exenciones de autorización judicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se solicita el establecimiento de exenciones a la exigencia de autorización judicial para actos de disposición, gravamen u otros sobre bienes del patrimonio protegido."
    },
    {
     "tipo": "nota",
     "texto": "Criterios: idoneidad del administrador, naturaleza y valor de bienes, interés superior del beneficiario, existencia de mecanismos alternativos de control."
    },
    {
     "tipo": "ley",
     "texto": "Ley 41/2003 Art. 5.2"
    }
   ],
   "siguiente": "competencia"
  },
  "supuesto_d": {
   "fase": 1,
   "titulo": "Supuesto d): Medidas posteriores",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se solicitan medidas como sustitución del administrador, cambio de reglas de administración, fiscalización especial, cautelas o extinción del patrimonio protegido."
    },
    {
     "tipo": "nota",
     "texto": "El Ministerio Fiscal velará por el correcto funcionamiento, pudiendo solicitar rendición de cuentas periódica."
    },
    {
     "tipo": "ley",
     "texto": "Ley 41/2003 Arts. 5.3, 6, 7"
    }
   ],
   "siguiente": "competencia"
  },
  "competencia": {
   "fase": 1,
   "titulo": "Competencia territorial y objetiva",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Verificación del órgano competente para conocer del expediente."
    },
    {
     "tipo": "plazo",
     "texto": "Competencia: Juzgado de Primera Instancia del domicilio o, en su defecto, de la residencia de la persona con discapacidad."
    },
    {
     "tipo": "nota",
     "texto": "Criterio de domicilio: LEC Art. 50. A falta de domicilio legal, se atiende al lugar de residencia habitual o último domicilio conocido."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Arts. 2.1, 57.1; LEC Art. 50"
    }
   ],
   "pregunta": "¿Está determinada correctamente la competencia territorial?",
   "opciones": [
    {
     "texto": "Sí: Domicilio/residencia del beneficiario identificado",
     "tono": "t-nota",
     "destino": "legitimacion"
    },
    {
     "texto": "No: Incompetencia territorial apreciada de oficio",
     "tono": "t-nota",
     "destino": "fin_incompetencia"
    }
   ]
  },
  "fin_incompetencia": {
   "fase": 1,
   "titulo": "Fin: Incompetencia territorial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El expediente no puede tramitarse por falta de competencia territorial."
    },
    {
     "tipo": "nota",
     "texto": "El órgano judicial apreciará de oficio la falta de competencia conforme al Artículo 16 de la Ley 15/2015, inadmitiendo la solicitud o remitiendo al Juzgado competente."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 16; LEC Art. 50"
    }
   ],
   "fin": "error"
  },
  "legitimacion": {
   "fase": 1,
   "titulo": "Legitimación: Monopolio del Ministerio Fiscal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Ministerio Fiscal es el único legitimado para promover este expediente, actuando de oficio o a solicitud de cualquier persona."
    },
    {
     "tipo": "nota",
     "texto": "Intervención preceptiva: Debe ser oído en todas las actuaciones judiciales relativas al patrimonio protegido. Cualquier persona puede poner en conocimiento del Fiscal las circunstancias justificantes."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 57.2; Ley 41/2003 Art. 7"
    }
   ],
   "pregunta": "¿La solicitud ha sido formulada por el Ministerio Fiscal?",
   "opciones": [
    {
     "texto": "Sí: Solicitud fiscal válida",
     "tono": "t-nota",
     "destino": "postulacion"
    },
    {
     "texto": "No: Solicitud de particular sin intervención fiscal",
     "tono": "t-nota",
     "destino": "fin_legitimacion"
    }
   ]
  },
  "fin_legitimacion": {
   "fase": 1,
   "titulo": "Fin: Falta de legitimación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El expediente no puede tramitarse por falta de legitimación activa."
    },
    {
     "tipo": "nota",
     "texto": "Solo el Ministerio Fiscal puede promover estos expedientes. La solicitud de un particular debe ser puesta en conocimiento del Fiscal para que valore su actuación de oficio."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 57.2"
    }
   ],
   "fin": "error"
  },
  "postulacion": {
   "fase": 1,
   "titulo": "Postulación profesional: Acceso directo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los interesados no precisan de Abogado ni Procurador para intervenir en este expediente de jurisdicción voluntaria."
    },
    {
     "tipo": "nota",
     "texto": "Fundamento: Ley 15/2015 Art. 3. No obstante, podrán contar con asesoramiento letrado voluntario. Aplicación de la Ley de Asistencia Jurídica Gratuita cuando se acredite insuficiencia de recursos."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 3; Ley 1/1996 AJG"
    }
   ],
   "siguiente": "solicitud"
  },
  "solicitud": {
   "fase": 2,
   "titulo": "Solicitud: Requisitos formales y contenido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente se inicia mediante solicitud por escrito del Ministerio Fiscal."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido mínimo de la solicitud",
     "items": [
      "Datos de identificación de la persona con discapacidad",
      "Representantes legales, tutores o curadores",
      "Domicilios para citaciones y notificaciones",
      "Hechos y alegaciones que fundamentan la petición"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Documentación anexa preceptiva: Certificado de discapacidad, informe médico o psicosocial, inventario preliminar de bienes, documento público de constitución o título de designación de administrador."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 58.1; Art. 14.3 (modelo normalizado)"
    }
   ],
   "pregunta": "¿La solicitud cumple los requisitos formales y documentales?",
   "opciones": [
    {
     "texto": "Sí: Solicitud completa y subsanada",
     "tono": "t-nota",
     "destino": "audiencia"
    },
    {
     "texto": "No: Defectos insubsanables o no subsanados en plazo",
     "tono": "t-nota",
     "destino": "fin_solicitud"
    }
   ]
  },
  "fin_solicitud": {
   "fase": 2,
   "titulo": "Fin: Inadmisión de la solicitud",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "La solicitud se inadmite por defectos formales insubsanables o no subsanados en plazo."
    },
    {
     "tipo": "nota",
     "texto": "El órgano judicial apreciará de oficio la inadecuación del procedimiento o cualquier defecto que impida válida tramitación, conforme al Artículo 16 de la Ley 15/2015."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 16; Art. 58.1"
    }
   ],
   "fin": "error"
  },
  "audiencia": {
   "fase": 2,
   "titulo": "Audiencia a los interesados",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de la resolución, el Juez podrá acordar audiencia de la persona con discapacidad, sus representantes, administrador designado y cualquier otro interesado."
    },
    {
     "tipo": "nota",
     "texto": "Garantías procesales: Derecho de defensa y contradicción, posibilidad de aportar pruebas y alegaciones, motivación reforzada de las resoluciones."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 58.1 in fine"
    }
   ],
   "siguiente": "tramitacion"
  },
  "tramitacion": {
   "fase": 3,
   "titulo": "Tramitación: Normas generales aplicables",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente se tramita conforme a las normas generales de la Ley 15/2015, con aplicación subsidiaria de las disposiciones del Título I."
    },
    {
     "tipo": "lista",
     "titulo": "Principios rectores de la tramitación",
     "items": [
      "Celeridad y economía procesal",
      "Oralidad en actos de audiencia",
      "Prevalencia del interés superior de la persona con discapacidad",
      "Posibilidad de acumulación de expedientes relacionados"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Efectos de la pendencia: La tramitación no impide la adopción de medidas cautelares urgentes cuando exista riesgo para el patrimonio o el beneficiario."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Arts. 13, 15, 58.2"
    }
   ],
   "pregunta": "¿Procede la adopción de medidas cautelares urgentes?",
   "opciones": [
    {
     "texto": "Sí: Riesgo para patrimonio/beneficiario",
     "tono": "t-nota",
     "destino": "cautelares"
    },
    {
     "texto": "No: Continuar tramitación ordinaria",
     "tono": "t-nota",
     "destino": "resolucion"
    }
   ]
  },
  "cautelares": {
   "fase": 3,
   "titulo": "Medidas cautelares provisionales",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez podrá adoptar cautelas provisionales para garantizar la protección del patrimonio durante la tramitación del expediente."
    },
    {
     "tipo": "nota",
     "texto": "Las medidas cautelares se adoptarán ponderando la apariencia de buen derecho y el peligro en la demora, siempre en interés superior del beneficiario."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 56.5 in fine"
    }
   ],
   "siguiente": "resolucion"
  },
  "resolucion": {
   "fase": 4,
   "titulo": "Resolución judicial: Criterios y contenido",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dictará la resolución en interés de la persona con discapacidad, fundamentándose en su interés superior, autonomía, voluntad y preferencias."
    },
    {
     "tipo": "nota",
     "texto": "Motivación reforzada: La resolución deberá expresar con claridad hechos probados, fundamentos de derecho aplicables y ponderación de intereses, especialmente cuando se limiten facultades de administración."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido mínimo si se constituye patrimonio",
     "items": [
      "Inventario de bienes y derechos iniciales (naturaleza, descripción, valor, titularidad)",
      "Reglas de administración: facultades ordinarias/extraordinarias, rendición de cuentas",
      "Mecanismos de fiscalización y control",
      "Procedimientos de designación de órganos"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 58.3; Ley 8/2021; Convención Internacional sobre Derechos de las Personas con Discapacidad"
    }
   ],
   "pregunta": "¿Se estima la solicitud del Ministerio Fiscal?",
   "opciones": [
    {
     "texto": "Sí: Se acuerda la medida solicitada",
     "tono": "t-nota",
     "destino": "resolucion_estimada"
    },
    {
     "texto": "No: Se desestima la solicitud",
     "tono": "t-nota",
     "destino": "resolucion_desestimada"
    }
   ]
  },
  "resolucion_estimada": {
   "fase": 4,
   "titulo": "Resolución estimatoria: Constitución o medida acordada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se acuerda la constitución del patrimonio protegido, el nombramiento de administrador, las exenciones solicitadas o las medidas posteriores procedentes."
    },
    {
     "tipo": "plazo",
     "texto": "La resolución será notificada a los interesados y al Ministerio Fiscal."
    },
    {
     "tipo": "nota",
     "texto": "Eficacia: La resolución produce efectos desde su firmeza, sin perjuicio de la posibilidad de adopción de medidas provisionales ejecutivas."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 58.3"
    }
   ],
   "siguiente": "recursos"
  },
  "resolucion_desestimada": {
   "fase": 4,
   "titulo": "Resolución desestimatoria",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se desestima la solicitud por no concurrir los presupuestos legales, no acreditarse el interés superior del beneficiario o existir causas que desaconsejen la medida."
    },
    {
     "tipo": "nota",
     "texto": "La resolución deberá motivar expresamente las razones de la desestimación, con especial atención a la ponderación del interés superior y la autonomía de la persona con discapacidad."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 58.3"
    }
   ],
   "siguiente": "recursos"
  },
  "recursos": {
   "fase": 5,
   "titulo": "Régimen de recursos: Apelación",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Contra la resolución judicial cabe recurso de apelación ante la Audiencia Provincial correspondiente."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de interposición: 20 días siguientes a la notificación de la resolución (LEC Art. 457)."
    },
    {
     "tipo": "nota",
     "texto": "Efecto suspensivo general: La interposición del recurso suspenderá la ejecución de la resolución recurrida. Excepción: cuando la resolución se limite a nombrar administrador por imposibilidad conforme al título, el recurso NO tendrá efectos suspensivos."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 58.4; LEC Arts. 455-459"
    }
   ],
   "pregunta": "¿Se interpone recurso de apelación en plazo?",
   "opciones": [
    {
     "texto": "Sí: Recurso interpuesto",
     "tono": "t-nota",
     "destino": "recurso_pendiente"
    },
    {
     "texto": "No: Resolución firme",
     "tono": "t-nota",
     "destino": "inscripcion"
    }
   ]
  },
  "recurso_pendiente": {
   "fase": 5,
   "titulo": "Trámite del recurso de apelación",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El recurso se sustanciará ante la Audiencia Provincial, con audiencia de las partes y, en su caso, práctica de pruebas complementarias."
    },
    {
     "tipo": "nota",
     "texto": "Resolución: La Audiencia resolverá mediante auto motivado. Contra el auto de la Audiencia podrá interponerse recurso extraordinario por infracción procesal o casación en supuestos de especial trascendencia."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 58.4; LEC Arts. 455-459"
    }
   ],
   "pregunta": "¿La Audiencia estima el recurso?",
   "opciones": [
    {
     "texto": "Sí: Se revoca o modifica la resolución",
     "tono": "t-nota",
     "destino": "resolucion_estimada"
    },
    {
     "texto": "No: Se confirma la resolución",
     "tono": "t-nota",
     "destino": "inscripcion"
    }
   ]
  },
  "inscripcion": {
   "fase": 5,
   "titulo": "Inscripción registral y comunicación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Comunicación de la resolución firme para su inscripción en los Registros correspondientes."
    },
    {
     "tipo": "lista",
     "titulo": "Registros afectados",
     "items": [
      "Registro Civil (Ley 20/2011 Arts. 58, 72): cuando el administrador no sea el beneficiario, para inscripción de circunstancias del patrimonio y designación/modificación de administradores",
      "Registro de la Propiedad (Ley Hipotecaria Arts. 2, 18): cuando el patrimonio incluya bienes inmuebles o derechos reales inscribibles",
      "Registro Mercantil o entidades gestoras: para valores mobiliarios, acciones o participaciones societarias"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Eficacia erga omnes: La inscripción registral confiere publicidad y oponibilidad frente a terceros de la constitución del patrimonio y designación del administrador."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 58.5; Ley 20/2011; Ley Hipotecaria"
    }
   ],
   "pregunta": "¿El patrimonio incluye bienes registrables?",
   "opciones": [
    {
     "texto": "Sí: Bienes inmuebles, derechos reales o valores",
     "tono": "t-nota",
     "destino": "inscripcion_registrables"
    },
    {
     "texto": "No: Solo bienes no registrables o efectivo",
     "tono": "t-nota",
     "destino": "fin_exitoso"
    }
   ]
  },
  "inscripcion_registrables": {
   "fase": 5,
   "titulo": "Inscripción de bienes registrables",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El testimonio judicial de la resolución deberá presentarse en el Registro correspondiente para inscripción o anotación preventiva."
    },
    {
     "tipo": "nota",
     "texto": "Plazo: Aunque la ley no establece plazo perentorio, se recomienda inscripción inmediata para evitar inseguridad jurídica o perjuicios económicos al patrimonio protegido."
    },
    {
     "tipo": "plazo",
     "texto": "Comunicación telemática: La remisión al Registro Civil podrá realizarse por medios electrónicos, conforme a protocolos de interoperabilidad."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015 Art. 58.5; Ley Hipotecaria Arts. 2, 18"
    }
   ],
   "siguiente": "fin_exitoso"
  },
  "fin_exitoso": {
   "fase": 5,
   "titulo": "Fin: Patrimonio protegido constituido y registrado",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento ha concluido con la constitución efectiva del patrimonio protegido y la inscripción registral de las medidas acordadas."
    },
    {
     "tipo": "lista",
     "titulo": "Obligaciones posteriores",
     "items": [
      "Rendición de cuentas del administrador: periodicidad anual (Ley 41/2003 Art. 7)",
      "Fiscalización por el Ministerio Fiscal: supervisión permanente del correcto funcionamiento",
      "Revisión periódica de medidas de apoyo: máximo cada 3 años (Ley 8/2021 Art. 269 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Ley 41/2003 Arts. 5-7; Ley 8/2021; Ley 15/2015 Art. 58"
    }
   ],
   "fin": "success"
  }
 },
 "pie": "<strong>Referencias:</strong><br>\n      Ley 15/2015 Arts. 56-58<br>\n      Ley 41/2003 Capítulo I<br>\n      Ley 8/2021 · CC Arts. 269-270"
});

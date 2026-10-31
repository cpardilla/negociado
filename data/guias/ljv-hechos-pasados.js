/* Migrado por tools/migrate.js desde sources/actual/G19.json; revisado con el BOE (registro: docs/revision/ljv-hechos-pasados.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-hechos-pasados",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De los expedientes de jurisdicción voluntaria relativos a declaraciones judiciales sobre hechos pasados (artículos 80 bis a 80 quinquies LJV)",
 "corto": "Declaraciones judiciales sobre hechos pasados",
 "articulos": [
  "80 bis",
  "80 ter",
  "80 quater",
  "80 quinquies"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G19"
 },
 "fases": [
  "Viabilidad",
  "Competencia y admisión",
  "Tramitación",
  "Resolución y recursos"
 ],
 "actores": {
  "juez": "Juez",
  "laj": "Letrado de la Administración de Justicia",
  "ambos": "Juez / LAJ"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Recepción de la solicitud de declaración judicial sobre hechos pasados",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ha recibido una solicitud para obtener una declaración judicial sobre la realidad y las circunstancias de hechos pasados determinados. Este expediente se tramita conforme al Capítulo XI del Título II de la Ley 15/2015, de la Jurisdicción Voluntaria (artículos 80 bis a 80 quinquies), introducido por la disposición final tercera de la Ley 20/2022, de Memoria Democrática."
    },
    {
     "tipo": "nota",
     "texto": "El expediente reintroduce, con carácter renovado, la antigua figura de la \"información para perpetua memoria\" de la LEC de 1881 (arts. 2002-2010), derogada por la Ley 15/2015 y recuperada por la Ley 20/2022."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, arts. 80 bis - 80 quinquies; Ley 20/2022, disp. final 3.ª; LEC 1881, arts. 2002-2010"
    },
    {
     "tipo": "lista",
     "titulo": "Verificaciones iniciales",
     "items": [
      "La solicitud se refiere a hechos pasados determinados",
      "No existe controversia que deba sustanciarse en proceso contencioso",
      "Se ha presentado ante el órgano judicial competente",
      "Se acompaña principio de prueba de los hechos"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Quién promueve el expediente?",
   "opciones": [
    {
     "texto": "Persona interesada (titular de derechos o intereses legítimos)",
     "tono": "t-ok",
     "destino": "contenido_solicitud"
    },
    {
     "texto": "Ministerio Fiscal (de oficio o a solicitud de cualquier persona)",
     "tono": "t-nota",
     "destino": "contenido_solicitud"
    }
   ]
  },
  "contenido_solicitud": {
   "fase": 0,
   "titulo": "Contenido de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud debe expresar con claridad los siguientes extremos para que el Letrado de la Administración de Justicia pueda realizar el control de admisibilidad y, en su caso, admitirla a trámite:"
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos de la solicitud (art. 80 quáter.1)",
     "items": [
      "Contenido de la declaración judicial que se interesa",
      "Relato de las circunstancias relevantes a los efectos de la solicitud",
      "Principio de prueba de los hechos sobre los que se interesa la información",
      "Identificación de las personas que puedan estar interesadas"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "No es preceptiva la defensa de Letrado ni la representación por Procurador. En la Oficina Judicial existirán impresos normalizados a disposición de los interesados para formular la solicitud (art. 80 ter.3)."
    },
    {
     "tipo": "nota",
     "texto": "El Ministerio Fiscal será siempre parte en este expediente, garantizando el control de legalidad y la protección de los intereses generales (art. 80 ter.4)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, arts. 80 ter.3, 80 ter.4, 80 quáter.1"
    }
   ],
   "siguiente": "check_condiciones"
  },
  "check_condiciones": {
   "fase": 0,
   "titulo": "Verificación de las 5 condiciones cumulativas (art. 80 bis.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Deben concurrir las cinco condiciones del art. 80 bis.2. Las examina el LAJ; si advierte que falta alguna, da cuenta al Juez, que decide por auto sobre la admisibilidad, oídos el Fiscal y el solicitante (art. 80 quáter.2)."
    },
    {
     "tipo": "lista",
     "titulo": "Condiciones cumulativas (art. 80 bis.2)",
     "items": [
      "1.ª: Que su objeto sea posible y lícito",
      "2.ª: Que exista un principio de prueba de los hechos",
      "3.ª: Que de los hechos no resulte perjuicio para una persona cierta y determinada",
      "4.ª: Que los hechos no sean objeto de un procedimiento judicial en trámite",
      "5.ª: Que no exista otro procedimiento judicial legalmente indicado para la demostración de los hechos"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Si surge una auténtica contienda sobre los hechos, el cauce adecuado será el proceso declarativo contencioso correspondiente, no este expediente de jurisdicción voluntaria."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80 bis LJV · Art. 80 quáter.2 LJV"
    }
   ],
   "pregunta": "¿Se cumplen todas las condiciones cumulativas del art. 80 bis.2?",
   "opciones": [
    {
     "texto": "Sí, las cinco condiciones se cumplen",
     "tono": "t-ok",
     "destino": "competencia"
    },
    {
     "texto": "No, al menos una condición no se cumple",
     "tono": "t-aviso",
     "destino": "fin_no_viable"
    }
   ]
  },
  "competencia": {
   "fase": 1,
   "titulo": "Determinación de la competencia territorial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Es necesario determinar el órgano judicial competente para conocer del expediente. La competencia territorial se fija en función del lugar donde acaecieron los hechos o, en su defecto, del domicilio del solicitante."
    },
    {
     "tipo": "nota",
     "texto": "Es competente el Juzgado de Primera Instancia del lugar de los hechos (art. 80 ter.1 LJV). Hoy, la Sección Civil del Tribunal de Instancia: este expediente no es materia de personas y familia del art. 86.5 j) LOPJ (decisión 12)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80 ter.1 LJV"
    }
   ],
   "pregunta": "¿Cuál es el fuero de competencia aplicable?",
   "opciones": [
    {
     "texto": "El del lugar donde acaecieron los hechos",
     "tono": "t-ok",
     "destino": "control_laj"
    },
    {
     "texto": "Si fueron varios lugares, el de cualquiera de ellos, a elección del solicitante",
     "tono": "t-ok",
     "destino": "control_laj"
    },
    {
     "texto": "En su defecto, el del domicilio del solicitante",
     "tono": "t-nota",
     "destino": "control_laj"
    }
   ]
  },
  "control_laj": {
   "fase": 1,
   "titulo": "Control previo de admisibilidad por el LAJ",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia realiza un control previo de admisibilidad de la solicitud. Si no detecta ningún defecto, admite directamente a trámite. Si advierte la falta de competencia objetiva o territorial, o la falta de alguna de las condiciones del art. 80 bis.2, dará cuenta al Juez para que este decida."
    },
    {
     "tipo": "nota",
     "texto": "El control del LAJ es un filtro previo y no sustituye la decisión judicial. Solo el Juez puede inadmitir el expediente, previa audiencia del Ministerio Fiscal y del solicitante."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 80 quáter.2"
    }
   ],
   "pregunta": "¿El LAJ detecta algún defecto en la solicitud?",
   "opciones": [
    {
     "texto": "No, no detecta defectos: la solicitud cumple los requisitos",
     "tono": "t-ok",
     "destino": "admision_tramite"
    },
    {
     "texto": "Sí, detecta falta de competencia o incumplimiento de las condiciones del art. 80 bis.2",
     "tono": "t-plazo",
     "destino": "auto_juez_admision"
    }
   ]
  },
  "auto_juez_admision": {
   "fase": 1,
   "titulo": "Auto del Juez sobre admisibilidad",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez, previa audiencia del Ministerio Fiscal y del solicitante, decide por auto sobre la admisibilidad del expediente. Esta decisión es susceptible de recurso de apelación conforme a la LEC."
    },
    {
     "tipo": "aviso",
     "texto": "El auto que inadmite el expediente es susceptible de recurso de apelación (art. 80 quinquies.2)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 80 quáter.2 y 80 quinquies.2 LJV"
    }
   ],
   "pregunta": "¿El Juez admite o inadmite el expediente?",
   "opciones": [
    {
     "texto": "Admite el expediente",
     "tono": "t-ok",
     "destino": "admision_tramite"
    },
    {
     "texto": "Inadmite el expediente por auto",
     "tono": "t-aviso",
     "destino": "fin_inadmitido"
    }
   ]
  },
  "admision_tramite": {
   "fase": 1,
   "titulo": "Admisión a trámite y convocatoria a comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cumplidos los requisitos de admisibilidad, el Letrado de la Administración de Justicia admite a trámite la solicitud y convoca a una comparecencia al promotor, al Ministerio Fiscal y a cuantas personas pudieran estar interesadas en los hechos respecto de los que se interesa la información."
    },
    {
     "tipo": "nota",
     "texto": "La convocatoria a comparecencia inicia la fase probatoria del expediente. Todas las personas con interés legítimo deben ser citadas."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 80 quáter.3"
    }
   ],
   "siguiente": "actuaciones_probatorias"
  },
  "actuaciones_probatorias": {
   "fase": 2,
   "titulo": "Actuaciones probatorias previas a la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En los cinco días siguientes a la recepción de la citación, el promotor y los demás interesados pueden pedir que se cite a la vista a los testigos o peritos que no puedan presentar, y pedir respuestas escritas de personas jurídicas o entidades públicas (art. 80 quáter.3)."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo común de 5 días desde la recepción de la citación"
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones disponibles en el plazo de 5 días",
     "items": [
      "Citación de testigos o peritos que no puedan ser presentados por las partes (citados por el LAJ)",
      "Solicitud de respuestas escritas a personas jurídicas o entidades públicas (art. 381 LEC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La práctica de este trámite no suspende la celebración de la comparecencia, salvo que el Juez lo estime necesario para impedir la indefensión. Si las respuestas se reciben con posterioridad, se dará audiencia a los interesados y al Ministerio Fiscal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80 quáter.3, párrafos segundo y tercero, LJV · Art. 381 LEC"
    }
   ],
   "siguiente": "comparecencia"
  },
  "comparecencia": {
   "fase": 2,
   "titulo": "Celebración de la comparecencia",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La comparecencia se sustancia por los trámites previstos en la Ley de Enjuiciamiento Civil para la vista del juicio verbal, practicándose la prueba pertinente y útil que propongan las partes en el acto."
    },
    {
     "tipo": "nota",
     "texto": "Durante la comparecencia o en cualquier momento de la tramitación, los interesados o afectados por los hechos objeto del expediente pueden formular oposición a la emisión de la declaración judicial."
    },
    {
     "tipo": "nota",
     "texto": "Las resoluciones interlocutorias dictadas durante la tramitación son susceptibles de recurso de reposición conforme a la LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80 quáter.4 y 6 LJV · Art. 80 quinquies.1 LJV · Arts. 437 y ss. LEC"
    }
   ],
   "siguiente": "check_oposicion"
  },
  "check_oposicion": {
   "fase": 2,
   "titulo": "Oposición a la declaración judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En cualquier momento durante la tramitación del expediente, los interesados o afectados por los hechos objeto del mismo pueden formular su oposición a la emisión de la declaración judicial interesada. El Juez resolverá sobre la oposición por auto."
    },
    {
     "tipo": "aviso",
     "texto": "Si el Juez estima justificada la oposición, acordará el sobreseimiento del expediente con reserva del derecho a ejercitar la acción correspondiente. Si no la estima justificada, ordenará la continuación del expediente."
    },
    {
     "tipo": "nota",
     "texto": "El auto que resuelve sobre la oposición es susceptible de recurso de apelación (art. 80 quinquies.2)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 80 quáter.6, art. 80 quinquies"
    }
   ],
   "pregunta": "¿Se formula oposición por algún interesado o afectado?",
   "opciones": [
    {
     "texto": "No se formula oposición",
     "tono": "t-ok",
     "destino": "resolucion_5dias"
    },
    {
     "texto": "Sí, se formula oposición a la declaración judicial",
     "tono": "t-plazo",
     "destino": "juez_oposicion"
    }
   ]
  },
  "juez_oposicion": {
   "fase": 2,
   "titulo": "Resolución del Juez sobre la oposición",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez resuelve sobre la oposición formulada por auto. Si la estima justificada, acuerda el sobreseimiento del expediente, con reserva a las partes de su derecho a ejercitar la acción correspondiente. Si no la estima justificada, manda la continuación del expediente hasta su resolución."
    },
    {
     "tipo": "aviso",
     "texto": "El auto de sobreseimiento cierra esta vía pero no impide que las partes ejerciten la acción correspondiente en otro procedimiento."
    },
    {
     "tipo": "nota",
     "texto": "El auto que resuelve sobre la oposición es susceptible de recurso de apelación conforme a la LEC (art. 80 quinquies.2)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, arts. 80 quáter.6, 80 quinquies"
    }
   ],
   "pregunta": "¿El Juez estima o no estima justificada la oposición?",
   "opciones": [
    {
     "texto": "Oposición estimada: se acuerda el sobreseimiento",
     "tono": "t-aviso",
     "destino": "fin_sobreseimiento"
    },
    {
     "texto": "Oposición no estimada: continúa el expediente",
     "tono": "t-ok",
     "destino": "resolucion_5dias"
    }
   ]
  },
  "resolucion_5dias": {
   "fase": 3,
   "titulo": "Resolución del expediente por auto (5 días)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En el plazo de cinco días tras la celebración de la comparecencia, el Juez dictará auto por el que acceda o deniegue la emisión de la declaración judicial interesada."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de 5 días desde la celebración de la comparecencia"
    },
    {
     "tipo": "info",
     "texto": "Si el Juez accede a la solicitud, realizará en la parte dispositiva del auto la declaración sobre hechos pasados determinados interesada por el promotor, con expresión de sus circunstancias. Se pronunciará, en su caso, en relación con las consecuencias que se deriven de la declaración."
    },
    {
     "tipo": "aviso",
     "texto": "Tanto el auto que accede como el que deniega la declaración son susceptibles de recurso de apelación (art. 80 quinquies.2)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 80 quáter.5, art. 80 quinquies"
    }
   ],
   "pregunta": "¿El Juez accede o deniega la emisión de la declaración judicial?",
   "opciones": [
    {
     "texto": "Accede a la solicitud: emite la declaración judicial",
     "tono": "t-ok",
     "destino": "check_inscribible"
    },
    {
     "texto": "Deniega la emisión de la declaración judicial",
     "tono": "t-aviso",
     "destino": "fin_denegada"
    }
   ]
  },
  "check_inscribible": {
   "fase": 3,
   "titulo": "Hechos inscribibles en registros públicos",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si de la declaración judicial se derivara la existencia de un hecho inscribible en el Registro de la Propiedad, Mercantil u otro registro público, será aplicable lo dispuesto en el artículo 22.2 de la Ley de la Jurisdicción Voluntaria, relativo al cumplimiento y ejecución de la resolución que pone fin al expediente."
    },
    {
     "tipo": "nota",
     "texto": "Para el Registro de la Propiedad, Mercantil u otro registro público se expide mandamiento a instancia de parte, por medios electrónicos; la calificación del registrador se limita a la competencia, la congruencia del mandato, las formalidades extrínsecas y los obstáculos del Registro (art. 22.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80 quáter.5 LJV · Art. 22.2 LJV"
    }
   ],
   "pregunta": "¿La declaración deriva en un hecho inscribible en un registro público?",
   "opciones": [
    {
     "texto": "Sí, es inscribible en el Registro de la Propiedad, Mercantil u otro",
     "tono": "t-ok",
     "destino": "inscripcion_registral"
    },
    {
     "texto": "No, no deriva en hecho inscribible",
     "tono": "t-nota",
     "destino": "fin_exito"
    }
   ]
  },
  "inscripcion_registral": {
   "fase": 3,
   "titulo": "Inscripción registral (art. 22.2 LJVol)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "A instancia de parte, se expide mandamiento al registro correspondiente para la constancia registral del hecho declarado; la remisión se hace por medios electrónicos (art. 22.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La inscripción se realizará conforme a las normas propias del registro de que se trate (Registro de la Propiedad, Mercantil, etc.)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 22.2 LJV"
    }
   ],
   "siguiente": "fin_exito_inscripcion"
  },
  "fin_no_viable": {
   "fase": 3,
   "titulo": "No procede el expediente",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Falta alguna de las condiciones del art. 80 bis.2: el LAJ da cuenta al Juez, que, oídos el Fiscal y el solicitante, decide por auto sobre la admisibilidad (art. 80 quáter.2); contra el auto cabe apelación (art. 80 quinquies.2)."
    },
    {
     "tipo": "aviso",
     "texto": "Si la causa de inviabilidad es la existencia de controversia, el cauce adecuado será el proceso declarativo contencioso correspondiente."
    },
    {
     "tipo": "nota",
     "texto": "Si la causa es la existencia de otro procedimiento judicial indicado (condición 5.ª), el carácter subsidiario del expediente impide su tramitación mientras exista esa vía preferente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80 bis.2 LJV · Arts. 80 quáter.2 y 80 quinquies.2 LJV · Art. 6 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_inadmitido": {
   "fase": 3,
   "titulo": "Expediente inadmitido por auto del Juez",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha inadmitido el expediente por auto, previa audiencia del Ministerio Fiscal y del solicitante, al estimar la falta de competencia objetiva o territorial, o bien la falta de alguna de las condiciones del artículo 80 bis.2."
    },
    {
     "tipo": "nota",
     "texto": "El auto de inadmisión es susceptible de recurso de apelación conforme a la Ley de Enjuiciamiento Civil (art. 80 quinquies.2)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 80 quáter.2 y 80 quinquies.2 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_sobreseimiento": {
   "fase": 3,
   "titulo": "Sobreseimiento del expediente por oposición estimada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha estimado justificada la oposición formulada y ha acordado por auto el sobreseimiento del expediente, con reserva a las partes de su derecho a ejercitar la acción correspondiente en el procedimiento que estimen pertinente."
    },
    {
     "tipo": "nota",
     "texto": "El auto de sobreseimiento no impide a las partes ejercitar la acción correspondiente en otra vía procesal. El sobreseimiento cierra esta vía de jurisdicción voluntaria, pero no prejuzga el fondo del asunto."
    },
    {
     "tipo": "nota",
     "texto": "El auto que resuelve sobre la oposición es susceptible de recurso de apelación conforme a la LEC (art. 80 quinquies.2)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, arts. 80 quáter.6, 80 quinquies"
    }
   ],
   "fin": "warning"
  },
  "fin_denegada": {
   "fase": 3,
   "titulo": "Declaración judicial denegada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha denegado por auto la emisión de la declaración judicial interesada, tras la celebración de la comparecencia. El expediente concluye sin que se emita la declaración."
    },
    {
     "tipo": "nota",
     "texto": "El auto que deniega la declaración es susceptible de recurso de apelación conforme a la Ley de Enjuiciamiento Civil (art. 80 quinquies.2)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, arts. 80 quáter.5, 80 quinquies; LEC, recurso de apelación"
    }
   ],
   "fin": "error"
  },
  "fin_exito": {
   "fase": 3,
   "titulo": "Declaración judicial emitida con éxito",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha accedido a la solicitud y ha emitido en la parte dispositiva del auto la declaración sobre hechos pasados determinados, con expresión de sus circunstancias. Se ha pronunciado, en su caso, sobre las consecuencias que se derivan de la declaración."
    },
    {
     "tipo": "nota",
     "texto": "El auto que accede a la declaración es susceptible de recurso de apelación conforme a la LEC (art. 80 quinquies.2), si bien normalmente quien obtuvo la declaración no tendría interés en recurrir."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 80 quáter.5, art. 80 quinquies"
    }
   ],
   "fin": "success"
  },
  "fin_exito_inscripcion": {
   "fase": 3,
   "titulo": "Declaración emitida con inscripción registral",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha accedido a la solicitud y ha emitido la declaración judicial. Al derivar la declaración en un hecho inscribible, se ha expedido, a instancia de parte, el mandamiento para su constancia en el registro correspondiente (art. 22.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La inscripción la practica el registrador, cuya calificación se limita a lo previsto en el art. 22.2 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80 quáter.5 LJV · Art. 22.2 LJV"
    }
   ],
   "fin": "success"
  }
 }
});

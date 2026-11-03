/* Migrado por tools/migrate.js desde sources/actual/G18.json; revisado con el BOE (registro: docs/revision/ljv-donantes-vivos.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-donantes-vivos",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la extracción de órganos de donantes vivos",
 "corto": "Extracción de órganos de donantes vivos",
 "articulos": [
  "78",
  "79",
  "80"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G18"
 },
 "fases": [
  "Inicio y competencia",
  "Solicitud y requisitos",
  "Comparecencia",
  "Resolución",
  "Post-resolución"
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
   "titulo": "Recepción de la solicitud o comunicación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ha recibido una solicitud o comunicación para iniciar un expediente de jurisdicción voluntaria sobre extracción y trasplante de órganos de un donante vivo, conforme a los artículos 78 a 80 de la Ley 15/2015, de 2 de julio, de la Jurisdicción Voluntaria."
    },
    {
     "tipo": "nota",
     "texto": "La finalidad del expediente es la constatación judicial de que concurre el consentimiento libre, consciente y desinteresado del donante y demás requisitos legales para la extracción y trasplante."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, arts. 78-80 · Ley 30/1979, art. 4 · RD 1723/2012, art. 8 · Directiva 2010/53/UE"
    }
   ],
   "pregunta": "¿Quién promueve el inicio del expediente?",
   "opciones": [
    {
     "texto": "El donante (solicitud directa)",
     "tono": "t-ok",
     "destino": "inicio_donante"
    },
    {
     "texto": "El Director del centro sanitario (comunicación)",
     "tono": "t-nota",
     "destino": "inicio_director"
    }
   ]
  },
  "inicio_donante": {
   "fase": 0,
   "titulo": "Solicitud presentada por el donante",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El donante ha presentado directamente la solicitud ante el Juzgado para iniciar el expediente de constatación judicial."
    },
    {
     "tipo": "nota",
     "texto": "No es necesaria la intervención de Abogado ni de Procurador para este expediente, conforme al artículo 79.1 de la Ley 15/2015 y al régimen general del artículo 3 de la misma Ley."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 79.1 · Ley 15/2015, art. 3"
    }
   ],
   "siguiente": "competencia_objetiva"
  },
  "inicio_director": {
   "fase": 0,
   "titulo": "Comunicación del Director del centro sanitario",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Director del centro sanitario en que vaya a efectuarse la extracción, o la persona en quien delegue, ha remitido la comunicación al Juzgado para iniciar el expediente."
    },
    {
     "tipo": "nota",
     "texto": "Esta vía de inicio es alternativa a la solicitud directa del donante. El Director del centro actúa en su condición de responsable del centro donde se realizará la intervención quirúrgica."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 79.1"
    }
   ],
   "siguiente": "competencia_objetiva"
  },
  "competencia_objetiva": {
   "fase": 0,
   "titulo": "Determinar la competencia objetiva",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Es competente el Juez de Primera Instancia (art. 78.2 LJV; art. 8.4 RD 1723/2012). Hoy, la Sección Civil del Tribunal de Instancia: el art. 86.5 j) LOPJ excluye este capítulo de la Sección de Familia, Infancia y Capacidad."
    },
    {
     "tipo": "aviso",
     "texto": "Decide el Juez, ante quien el donante presta el consentimiento y que extiende el documento de cesión (arts. 79.3 y 80 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 78.2 LJV · Art. 8.4 RD 1723/2012 · Art. 86.5 j) LOPJ"
    }
   ],
   "pregunta": "¿Es competente objetivamente el órgano judicial receptor?",
   "opciones": [
    {
     "texto": "Sí, es Juez de Primera Instancia / sección civil del Tribunal de Instancia",
     "tono": "t-ok",
     "destino": "competencia_territorial"
    },
    {
     "texto": "No, corresponde a otro órgano judicial",
     "tono": "t-aviso",
     "destino": "fin_incompetencia_objetiva"
    }
   ]
  },
  "competencia_territorial": {
   "fase": 0,
   "titulo": "Determinar la competencia territorial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Es competente el Juez de la localidad donde haya de realizarse la extracción o el trasplante, a elección del solicitante (art. 78.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Se trata de fueros alternativos: el solicitante puede elegir cuál de los dos le resulta más conveniente. No es necesario que la extracción y el trasplante se realicen en la misma localidad."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 78.2"
    }
   ],
   "pregunta": "¿El Juzgado es territorialmente competente?",
   "opciones": [
    {
     "texto": "Sí, es la localidad de la extracción o del trasplante",
     "tono": "t-ok",
     "destino": "solicitud_contenido"
    },
    {
     "texto": "No, corresponde a otra localidad",
     "tono": "t-aviso",
     "destino": "fin_incompetencia_territorial"
    }
   ]
  },
  "solicitud_contenido": {
   "fase": 1,
   "titulo": "Verificar el contenido de la solicitud o comunicación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud o comunicación debe contener los siguientes elementos esenciales para que el expediente pueda tramitarse correctamente:"
    },
    {
     "tipo": "lista",
     "titulo": "Contenido obligatorio de la solicitud",
     "items": [
      "Circunstancias personales y familiares del donante",
      "Objeto de la donación (órgano o parte de órgano que se dona)",
      "Identificación del centro sanitario donde se efectuará la extracción",
      "Identidad del médico responsable del trasplante o extracción (o persona en quien delegue)",
      "Certificado médico sobre la salud mental y física del donante, emitido conforme a la normativa correspondiente"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 79.1 LJV · Art. 8.4 RD 1723/2012"
    }
   ],
   "pregunta": "¿La solicitud o comunicación contiene todos los elementos requeridos?",
   "opciones": [
    {
     "texto": "Sí, la documentación está completa",
     "tono": "t-ok",
     "destino": "requisitos_donante"
    },
    {
     "texto": "No, faltan documentos o datos esenciales",
     "tono": "t-plazo",
     "destino": "requerir_subsanacion"
    }
   ]
  },
  "requerir_subsanacion": {
   "fase": 1,
   "titulo": "Requerir la subsanación de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ requiere al solicitante para que subsane los defectos u omisiones (art. 16.4 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Cinco días para subsanar (art. 16.4 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Si no se subsana en plazo, como el expediente lo resuelve el Juez, el LAJ le da cuenta y este acuerda lo que proceda (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV · Art. 79.1 LJV"
    }
   ],
   "pregunta": "¿Se ha subsanado la solicitud en plazo?",
   "opciones": [
    {
     "texto": "Sí, la documentación ya está completa",
     "tono": "t-ok",
     "destino": "requisitos_donante"
    },
    {
     "texto": "No, no se ha subsanado o ha transcurrido el plazo",
     "tono": "t-aviso",
     "destino": "fin_solicitud_incompleta"
    }
   ]
  },
  "requisitos_donante": {
   "fase": 1,
   "titulo": "Verificar los requisitos legales del donante",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El donante debe cumplir una serie de requisitos sustantivos, establecidos en la Ley 30/1979 y en el Real Decreto 1723/2012, que el Juez debe verificar durante la tramitación del expediente. El incumplimiento de cualquiera de ellos impide la autorización de la extracción."
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos legales del donante vivo",
     "items": [
      "Ser mayor de edad (no se obtienen órganos de menores, aun con el consentimiento de padres o tutores)",
      "Gozar de plenas facultades mentales y de un estado de salud adecuado",
      "Haber sido informado previamente de las consecuencias de su decisión, de los riesgos para sí y para el receptor, de las contraindicaciones y de lo que hará el centro si no puede trasplantarse el órgano, en formatos accesibles si tiene discapacidad",
      "Consentimiento expreso, libre, consciente y desinteresado",
      "Órgano o parte de él cuya obtención sea compatible con la vida y cuya función pueda compensarse de forma adecuada y suficientemente segura",
      "Destino: el trasplante a una persona determinada para mejorar sustancialmente su pronóstico vital o sus condiciones de vida, con el anonimato del receptor",
      "Gratuidad: sin compensación económica para el donante ni precio para el receptor (art. 2 Ley 30/1979)",
      "Informe del Comité de Ética correspondiente; no se obtienen órganos si hay sospecha de que se altera el libre consentimiento o media condicionamiento económico, social, psicológico o de otro tipo (art. 8.2 RD 1723/2012)",
      "Que se esperen suficientes posibilidades de éxito del trasplante (art. 8.2 RD 1723/2012)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La información previa debe ajustarse, en su caso, a las necesidades de las personas con discapacidad, mediante sistemas comprensibles o adaptados a su discapacidad."
    },
    {
     "tipo": "nota",
     "texto": "Si el LAJ entiende que la solicitud no resulta admisible, da cuenta al Juez, que acuerda lo que proceda (art. 17.1 LJV). Si llega a la comparecencia, el Juez decide conforme al art. 80 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 2 y 4 Ley 30/1979 · Art. 8.1 y 2 RD 1723/2012 · Art. 78.1 LJV · Convenio de Oviedo, art. 19"
    }
   ],
   "pregunta": "¿Concurren todos los requisitos legales del donante?",
   "opciones": [
    {
     "texto": "Sí, todos los requisitos se cumplen",
     "tono": "t-ok",
     "destino": "requisitos_especificos_ok"
    },
    {
     "texto": "El donante es menor de edad",
     "tono": "t-aviso",
     "destino": "fin_menor_edad"
    },
    {
     "texto": "No concurre plenitud de facultades mentales",
     "tono": "t-aviso",
     "destino": "fin_sin_facultades"
    },
    {
     "texto": "No se ha prestado consentimiento válido o hay ánimo de lucro",
     "tono": "t-aviso",
     "destino": "fin_consentimiento_invalido"
    },
    {
     "texto": "La extracción no es compatible con la vida del donante",
     "tono": "t-aviso",
     "destino": "fin_incompatible"
    }
   ]
  },
  "requisitos_especificos_ok": {
   "fase": 1,
   "titulo": "Requisitos verificados — Certificado médico",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Todos los requisitos legales del donante han sido verificados documentalmente. El certificado médico sobre la salud mental y física del donante ha sido emitido de conformidad con la normativa correspondiente."
    },
    {
     "tipo": "nota",
     "texto": "Lo emite un médico cualificado distinto de los que vayan a efectuar la extracción y el trasplante; se refiere necesariamente al estado de salud, a la información facilitada, a la respuesta y motivaciones libremente expresadas por el donante y, en su caso, a cualquier indicio de presión externa (art. 8.3 RD 1723/2012)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 79.1 LJV · Art. 8.3 RD 1723/2012"
    }
   ],
   "pregunta": "¿Se ha adjuntado el certificado médico de salud física y mental del donante?",
   "opciones": [
    {
     "texto": "Sí, el certificado médico está adjunto y es conforme",
     "tono": "t-ok",
     "destino": "citacion_comparecencia"
    },
    {
     "texto": "No, no se ha aportado: requerir la subsanación",
     "tono": "t-aviso",
     "destino": "requerir_subsanacion"
    }
   ]
  },
  "citacion_comparecencia": {
   "fase": 2,
   "titulo": "Preparar y cursar la citación a la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia debe citar a todas las personas que deben intervenir en la comparecencia judicial. La citación es un trámite esencial para garantizar que todos los intervinientes puedan ejercer sus funciones y derechos en el acto."
    },
    {
     "tipo": "lista",
     "titulo": "Personas que deben ser citadas a la comparecencia",
     "items": [
      "El donante, que ha de consentir ante el Juez (art. 79.3 LJV)",
      "El médico que ha de efectuar la extracción",
      "El médico firmante del certificado de salud física y mental del donante",
      "El médico responsable del trasplante o persona en quien delegue",
      "La persona a quien corresponda dar la autorización para la intervención, conforme al documento de autorización para la extracción de órganos concedida al centro sanitario"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El receptor no es parte: la ley garantiza su anonimato (art. 4 d) Ley 30/1979)."
    },
    {
     "tipo": "nota",
     "texto": "El Letrado de la Administración de Justicia debe estar presente para dar fe de lo actuado."
    },
    {
     "tipo": "plazo",
     "texto": "Reglas generales (art. 13 LJV): citación con al menos quince días de antelación y comparecencia dentro de los treinta días siguientes a la admisión (arts. 17.3 y 18.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 79.2 y 79.3 LJV · Arts. 13, 17.3 y 18.1 LJV · Art. 8.4 RD 1723/2012 · Art. 4 d) Ley 30/1979"
    }
   ],
   "siguiente": "desarrollo_comparecencia"
  },
  "desarrollo_comparecencia": {
   "fase": 2,
   "titulo": "Desarrollo de la comparecencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La comparecencia se celebra ante el Juez con la asistencia de todas las personas citadas. El desarrollo sigue un orden habitual de intervenciones que debe respetarse para garantizar la correcta información del donante."
    },
    {
     "tipo": "lista",
     "titulo": "Orden de intervenciones en la comparecencia",
     "items": [
      "Primero: el médico encargado de realizar la intervención quirúrgica explica las características y riesgos de la extracción",
      "Después: los demás intervinientes aportan las aclaraciones que consideren pertinentes",
      "El Juez podrá requerir a cualquiera de los asistentes las explicaciones que estime oportunas sobre la concurrencia de los requisitos legales",
      "Finalmente: el donante presta su consentimiento de forma libre, consciente y desinteresada, ante el Juez"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El Juez debe cerciorarse de que el donante ha comprendido plenamente las consecuencias de la extracción y del trasplante antes de prestar su consentimiento. La información debe haberse ajustado, en su caso, a las necesidades de las personas con discapacidad."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 79.3 · Ley 15/2015, art. 18 · Convenio de Oviedo · Ley 41/2002 (autonomía del paciente)"
    }
   ],
   "pregunta": "¿Asiste el donante?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "consentimiento_juez"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_incomparecencia"
    }
   ]
  },
  "consentimiento_juez": {
   "fase": 2,
   "titulo": "Otorgamiento del consentimiento por el donante ante el Juez",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El momento central de la comparecencia es el otorgamiento del consentimiento por el donante ante el Juez. El consentimiento debe ser expreso, libre, consciente y desinteresado, y se prestará tras oír las explicaciones del médico y de los demás asistentes."
    },
    {
     "tipo": "aviso",
     "texto": "El Juez debe valorar si el consentimiento se presta de forma genuinamente libre, sin coacción, presión o indebida influencia, y si el donante actúa de manera completamente desinteresada, sin ánimo de lucro ni compensación económica."
    },
    {
     "tipo": "nota",
     "texto": "Conforme al Convenio de Oviedo, el consentimiento debe ser expreso y específicamente otorgado, por escrito o ante una autoridad. La extracción de órganos sólidos de donante vivo se limita al interés terapéutico del receptor cuando no se disponga de órgano de persona fallecida ni de alternativa terapéutica de comparable eficacia."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 79.3 · Ley 30/1979, art. 4 · Convenio de Oviedo · Ley 41/2002"
    }
   ],
   "pregunta": "¿El Juez considera que el consentimiento ha sido prestado de forma libre, consciente y desinteresada?",
   "opciones": [
    {
     "texto": "Sí, el consentimiento es válido",
     "tono": "t-ok",
     "destino": "verificar_oposicion"
    },
    {
     "texto": "No, el consentimiento no reúne los requisitos legales",
     "tono": "t-aviso",
     "destino": "fin_denegacion"
    }
   ]
  },
  "verificar_oposicion": {
   "fase": 2,
   "titulo": "Verificar si existe oposición a la donación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si alguno de los firmantes dudara de que el consentimiento prestado haya sido de forma expresa, libre, consciente y desinteresada, podrá oponerse a la donación. La oposición impide la formalización del documento de cesión del órgano."
    },
    {
     "tipo": "nota",
     "texto": "La oposición puede plantearla cualquiera de las personas que deben firmar el documento de cesión: el donante, el médico que ha de efectuar la extracción o los demás asistentes a la comparecencia."
    },
    {
     "tipo": "aviso",
     "texto": "Basta con que el firmante dude de que el consentimiento se haya prestado de forma expresa, libre, consciente y desinteresada: puede oponerse «eficazmente» a la donación (art. 80.2 LJV; art. 8.5 RD 1723/2012)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80.2 LJV · Art. 8.5 RD 1723/2012"
    }
   ],
   "pregunta": "¿Se ha opuesto algún firmante a la donación?",
   "opciones": [
    {
     "texto": "No, nadie se ha opuesto",
     "tono": "t-ok",
     "destino": "resolucion_conceder"
    },
    {
     "texto": "Sí, al menos un firmante se ha opuesto",
     "tono": "t-plazo",
     "destino": "fin_oposicion"
    }
   ]
  },
  "resolucion_conceder": {
   "fase": 3,
   "titulo": "Extensión del documento de cesión del órgano",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez estima que se han cumplido todos los requisitos legales y procede a extender por escrito el documento de cesión del órgano. Este documento es el resultado positivo del expediente y constituye la autorización judicial para la extracción y trasplante."
    },
    {
     "tipo": "lista",
     "titulo": "Firmantes del documento de cesión",
     "items": [
      "El donante (interesado)",
      "El médico que ha de efectuar la extracción",
      "Los demás asistentes a la comparecencia"
     ],
     "marcar": true
    },
    {
     "tipo": "info",
     "texto": "El documento de cesión debe hacer constar expresamente la posibilidad que tiene el donante de revocar el consentimiento en cualquier momento previo a la intervención quirúrgica. Se facilitará copia del documento al donante."
    },
    {
     "tipo": "nota",
     "texto": "En ningún caso puede efectuarse la extracción sin la firma previa de este documento (art. 4 c) Ley 30/1979; art. 8.5 RD 1723/2012)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80.2 y 3 LJV · Art. 8.5 RD 1723/2012"
    }
   ],
   "siguiente": "documento_cesion_firmado"
  },
  "documento_cesion_firmado": {
   "fase": 3,
   "titulo": "Documento de cesión firmado y entregado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El documento de cesión del órgano ha sido firmado por todos los intervinientes y se ha facilitado copia al donante. El expediente ha concluido favorablemente en su tramitación judicial."
    },
    {
     "tipo": "plazo",
     "texto": "Entre la firma del documento de cesión y la extracción deben transcurrir al menos veinticuatro horas (art. 8.6 RD 1723/2012)."
    },
    {
     "tipo": "aviso",
     "texto": "Durante ese plazo mínimo de 24 horas, y en cualquier momento anterior a la intervención, el donante puede revocar libremente su consentimiento, sin sujeción a formalidad alguna. Esta circunstancia debe constar en el documento de cesión."
    },
    {
     "tipo": "nota",
     "texto": "Contra la resolución definitiva cabe apelación (art. 20.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80 LJV · Art. 20.2 LJV · Art. 8.5 y 6 RD 1723/2012"
    }
   ],
   "siguiente": "plazo_reflexion"
  },
  "plazo_reflexion": {
   "fase": 4,
   "titulo": "Plazo de reflexión mínimo de 24 horas",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Debe transcurrir un plazo mínimo de 24 horas entre la firma del documento de cesión del órgano y la extracción efectiva. Este plazo constituye un período de reflexión obligatorio para el donante."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo mínimo: 24 horas entre la firma del documento de cesión y la extracción."
    },
    {
     "tipo": "info",
     "texto": "Durante este plazo, el donante puede revocar libremente su consentimiento en cualquier momento anterior a la intervención quirúrgica, sin sujeción a formalidad alguna; la revocación no puede dar lugar a ningún tipo de indemnización (art. 8.6 RD 1723/2012)."
    },
    {
     "tipo": "nota",
     "texto": "El derecho de revocación es una manifestación del carácter libre del consentimiento: si el donante cambia de opinión, la revocación es plenamente eficaz y la extracción no puede realizarse."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80.3 LJV · Art. 8.6 RD 1723/2012"
    }
   ],
   "pregunta": "¿El donante ha revocado su consentimiento durante el plazo de reflexión?",
   "opciones": [
    {
     "texto": "No, el donante mantiene su consentimiento",
     "tono": "t-ok",
     "destino": "fin_exito"
    },
    {
     "texto": "Sí, el donante ha revocado su consentimiento",
     "tono": "t-plazo",
     "destino": "fin_revocacion"
    }
   ]
  },
  "fin_exito": {
   "fase": 4,
   "titulo": "Procedimiento concluido con éxito",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de jurisdicción voluntaria ha concluido favorablemente. El documento de cesión del órgano ha sido extendido, firmado por todos los intervinientes, y se ha entregado copia al donante. El plazo mínimo de 24 horas ha transcurrido sin que el donante haya revocado su consentimiento."
    },
    {
     "tipo": "info",
     "texto": "La extracción y el trasplante pueden ahora llevarse a cabo conforme a la legislación vigente, bajo la responsabilidad del equipo médico del centro sanitario autorizado."
    },
    {
     "tipo": "nota",
     "texto": "Recuerde: incluso después de este momento, y hasta el inicio efectivo de la intervención quirúrgica, el donante conserva el derecho a revocar su consentimiento en cualquier momento y sin formalidad alguna."
    },
    {
     "tipo": "nota",
     "texto": "La obtención solo puede hacerse en centros expresamente autorizados, que informan antes a la autoridad competente; al donante se le presta asistencia para su restablecimiento y seguimiento clínico (art. 8.7 y 8 RD 1723/2012)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80 LJV · Art. 8 RD 1723/2012 · Ley 30/1979"
    }
   ],
   "fin": "success"
  },
  "fin_denegacion": {
   "fase": 2,
   "titulo": "Denegación — Consentimiento no válido",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha considerado que el consentimiento prestado por el donante no lo ha sido de forma libre, consciente y desinteresada, o no se cumplen los demás requisitos establecidos legalmente. Por tanto, NO se extenderá el documento de cesión del órgano."
    },
    {
     "tipo": "aviso",
     "texto": "La denegación impide que la extracción y el trasplante puedan llevarse a cabo. El expediente se archiva sin haberse autorizado la donación."
    },
    {
     "tipo": "nota",
     "texto": "Contra la resolución cabe apelación (art. 20.2 LJV). Firme, no puede iniciarse otro expediente sobre idéntico objeto salvo que cambien las circunstancias (art. 19.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80.1 LJV · Arts. 19.3 y 20.2 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_oposicion": {
   "fase": 2,
   "titulo": "Oposición de un firmante",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al menos uno de los firmantes ha dudado de que el consentimiento prestado por el donante haya sido de forma expresa, libre, consciente y desinteresado, y se ha opuesto a la donación. Esta oposición impide la formalización del documento de cesión del órgano."
    },
    {
     "tipo": "nota",
     "texto": "Si cambian las circunstancias, puede promoverse un nuevo expediente (art. 19.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80.2 LJV · Art. 8.5 RD 1723/2012 · Art. 19.3 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_incomparecencia": {
   "fase": 2,
   "titulo": "No asiste el donante",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sin el donante no puede prestarse el consentimiento ante el Juez (art. 79.3 LJV), y sin él no se extiende el documento de cesión (art. 80.1 LJV). Si el donante es el solicitante, el Juez acuerda el archivo y le tiene por desistido (art. 18.2.1.ª LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 18.2, 79.3 y 80.1 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_incompetencia_objetiva": {
   "fase": 0,
   "titulo": "Incompetencia objetiva del órgano judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El órgano que ha recibido la solicitud no es competente objetivamente. Es competente el Juez de Primera Instancia (art. 78.2 LJV); hoy, la Sección Civil del Tribunal de Instancia."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ da cuenta al Juez, que acuerda lo que proceda tras oír al Ministerio Fiscal y al solicitante; la resolución indica el órgano que se estima competente (art. 16.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 16.2 y 78.2 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_incompetencia_territorial": {
   "fase": 0,
   "titulo": "Incompetencia territorial del órgano judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado no es territorialmente competente: lo es el de la localidad donde haya de realizarse la extracción o el trasplante, a elección del solicitante (art. 78.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ da cuenta al Juez, que, tras oír al Ministerio Fiscal y al solicitante, acuerda la remisión al Juzgado que considere competente (art. 16.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 16.3 y 78.2 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_menor_edad": {
   "fase": 1,
   "titulo": "Donante menor de edad — Imposible proceder",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El donante es menor de edad. La ley prohíbe categóricamente la obtención de órganos de menores de edad para trasplante, ni siquiera con el consentimiento de sus padres o tutores. No existe excepción legal alguna a esta prohibición."
    },
    {
     "tipo": "aviso",
     "texto": "Esta prohibición es absoluta y no admite excepciones. Ni el consentimiento de los padres, tutores o representantes legales del menor puede suplir este requisito."
    },
    {
     "tipo": "ley",
     "texto": "Ley 30/1979, art. 4 · RD 1723/2012, art. 8 · Convenio de Oviedo"
    }
   ],
   "fin": "error"
  },
  "fin_sin_facultades": {
   "fase": 1,
   "titulo": "Donante sin plenitud de facultades mentales",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El donante no cuenta con la plenitud de facultades mentales requerida por la ley para prestar un consentimiento válido. El consentimiento debe ser consciente, lo que implica que el donante debe comprender plenamente el significado y las consecuencias de su decisión."
    },
    {
     "tipo": "nota",
     "texto": "Si el donante tiene una discapacidad intelectual que no le impide comprender la naturaleza y consecuencias de la donación, la información debe adaptarse a sus necesidades mediante sistemas comprensibles. La falta de plenitud de facultades debe acreditarse debidamente."
    },
    {
     "tipo": "ley",
     "texto": "Ley 30/1979, art. 4 · RD 1723/2012, art. 8 · Ley 41/2002 (autonomía del paciente)"
    }
   ],
   "fin": "error"
  },
  "fin_consentimiento_invalido": {
   "fase": 1,
   "titulo": "Consentimiento no válido o donación no gratuita",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El consentimiento del donante no cumple los requisitos legales de ser expreso, libre, consciente y desinteresado, o existe indicios de que la donación no es gratuita (ánimo de lucro, compensación económica). Ambas circunstancias impiden la autorización judicial de la extracción."
    },
    {
     "tipo": "aviso",
     "texto": "El tráfico de órganos humanos es delito (art. 156 bis CP)."
    },
    {
     "tipo": "nota",
     "texto": "El consentimiento debe manifestarse por escrito y firmado por el donante. Si el consentimiento no es expreso, libre, consciente y desinteresado, el documento no puede extenderse."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 2 y 4 Ley 30/1979 · Art. 8.1 y 2 RD 1723/2012 · Art. 156 bis CP"
    }
   ],
   "fin": "error"
  },
  "fin_incompatible": {
   "fase": 1,
   "titulo": "Extracción no compatible con la vida del donante",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El órgano o parte de él cuya extracción se solicita no es compatible con la vida del donante, o su función no puede ser compensada por el organismo del donante de forma adecuada y suficientemente segura. La ley exige que la extracción sea compatible con la vida y funcionalmente compensable."
    },
    {
     "tipo": "nota",
     "texto": "Conforme al Convenio de Oviedo, la extracción de órganos sólidos de donante vivo se limita al interés terapéutico del receptor cuando no se disponga de órgano de persona fallecida ni de alternativa terapéutica de comparable eficacia."
    },
    {
     "tipo": "ley",
     "texto": "Ley 30/1979, art. 4 · RD 1723/2012, art. 8 · Convenio de Oviedo · Directiva 2010/53/UE"
    }
   ],
   "fin": "error"
  },
  "fin_solicitud_incompleta": {
   "fase": 1,
   "titulo": "Solicitud no subsanada — Archivo",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante no ha subsanado en los cinco días; el LAJ ha dado cuenta al Juez, que acuerda lo procedente (art. 16.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El solicitante podrá iniciar un nuevo expediente aportando desde el inicio toda la documentación requerida."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_revocacion": {
   "fase": 4,
   "titulo": "Revocación del consentimiento por el donante",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El donante ha revocado su consentimiento durante el plazo de reflexión o en cualquier momento anterior a la intervención quirúrgica. La revocación es libre y no está sujeta a formalidad alguna."
    },
    {
     "tipo": "info",
     "texto": "La revocación es plenamente eficaz e impide que la extracción y el trasplante puedan llevarse a cabo."
    },
    {
     "tipo": "nota",
     "texto": "El derecho de revocación es una manifestación del carácter libre del consentimiento. La revocación no puede dar lugar a ningún tipo de indemnización (art. 8.6 RD 1723/2012)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 80.3 LJV · Art. 8.6 RD 1723/2012"
    }
   ],
   "fin": "warning"
  }
 },
 "pie": "<strong>Referencias normativas</strong><br>Arts. 16, 19, 20 y 78 a 80 LJV<br>Arts. 2 y 4 Ley 30/1979<br>Art. 8 RD 1723/2012<br>Art. 156 bis CP<br>Convenio de Oviedo, art. 19 · Directiva 2010/53/UE"
});

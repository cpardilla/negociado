/* Migrado por tools/migrate.js desde sources/actual/G13.json; revisado con el BOE (registro: docs/revision/ljv-emancipacion.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-emancipacion",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la concesión judicial de la emancipación y del beneficio de la mayoría de edad (artículos 53 a 55 LJV)",
 "corto": "Emancipación y beneficio de la mayoría de edad",
 "articulos": [
  "53",
  "54",
  "55"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G13"
 },
 "fases": [
  "Inicio y competencia",
  "Presentación de solicitud",
  "Admisión a trámite",
  "Comparecencia",
  "Resolución judicial",
  "Inscripción y efectos"
 ],
 "actores": {
  "juez": "Juez",
  "laj": "Letrado de la Administración de Justicia",
  "ambos": "LAJ / Juez"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio del expediente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Esta guía tramita paso a paso el expediente de concesión judicial de la emancipación o del beneficio de la mayoría de edad, conforme a los artículos 53 a 55 de la Ley 15/2015, de 2 de julio, de la Jurisdicción Voluntaria, en relación con los artículos 244 y 245 del Código Civil (el art. 53 LJV todavía los cita como arts. 320 y 321, su numeración anterior a la Ley 8/2021)."
    },
    {
     "tipo": "info",
     "texto": "El procedimiento se inicia siempre a solicitud del menor mayor de dieciséis años, asistido por uno de sus progenitores no privados ni suspendidos de la patria potestad o por su tutor; a falta de su asistencia, se le nombra defensor judicial (art. 54.1 LJV). A lo largo del proceso, se presentarán bifurcaciones que determinarán el camino procedimental adecuado."
    },
    {
     "tipo": "nota",
     "texto": "No es preceptiva la intervención de Abogado ni Procurador; si se formula oposición, es preceptiva la asistencia de letrado desde ese momento (art. 53.3 LJV). La oposición no hace contencioso el expediente (art. 17.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 53 a 55 LJV · Arts. 244 y 245 CC"
    }
   ],
   "pregunta": "¿Qué tipo de solicitud se va a tramitar?",
   "opciones": [
    {
     "texto": "Emancipación judicial (art. 244 CC)",
     "tono": "t-nota",
     "nota": "Emancipación",
     "destino": "supuesto_emancipacion"
    },
    {
     "texto": "Beneficio de mayoría de edad (art. 245 CC)",
     "tono": "t-nota",
     "nota": "Beneficio de mayoría de edad",
     "destino": "supuesto_beneficio"
    }
   ]
  },
  "supuesto_emancipacion": {
   "fase": 0,
   "titulo": "Supuestos habilitantes de la emancipación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 244 del Código Civil establece que el Juez podrá conceder la emancipación de los hijos mayores de dieciséis años, si estos la pidieren y previa audiencia de los progenitores, cuando concurra alguno de los siguientes supuestos:"
    },
    {
     "tipo": "nota",
     "texto": "Los tres supuestos tienen naturaleza alternativa: basta con que concurra uno solo de ellos para que el menor esté legitimado a solicitar la emancipación judicial."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 244 del Código Civil; artículo 53.1 LJV."
    }
   ],
   "pregunta": "Seleccione el supuesto habilitante que concurre en el caso:",
   "opciones": [
    {
     "texto": "a) Quien ejerce la patria potestad ha contraído nupcias o convive maritalmente con persona distinta del otro progenitor",
     "tono": "t-nota",
     "nota": "Supuesto a) Nuevo cónyuge/conviviente",
     "destino": "competencia"
    },
    {
     "texto": "b) Los progenitores viven separados",
     "tono": "t-nota",
     "nota": "Supuesto b) Progenitores separados",
     "destino": "competencia"
    },
    {
     "texto": "c) Concurre cualquier causa que entorpezca gravemente el ejercicio de la patria potestad",
     "tono": "t-nota",
     "nota": "Supuesto c) Entorpecimiento grave",
     "destino": "competencia"
    }
   ]
  },
  "supuesto_beneficio": {
   "fase": 0,
   "titulo": "Requisitos del beneficio de mayoría de edad",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El artículo 245 del Código Civil permite al Juez, previo informe del Ministerio Fiscal, conceder el beneficio de la mayoría de edad al sujeto a tutela mayor de dieciséis años que lo solicitare."
    },
    {
     "tipo": "info",
     "texto": "A diferencia de la emancipación, que se solicita por quien está bajo patria potestad, el beneficio de mayoría de edad se solicita por quien está sometido a tutela, es decir, por los menores no emancipados en situación de desamparo o no sujetos a patria potestad (art. 199 CC)."
    },
    {
     "tipo": "nota",
     "texto": "El Ministerio Fiscal emite informe preceptivo en este supuesto, lo que añade una garantía procesal adicional."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 245 del Código Civil; artículo 199 del Código Civil; artículo 53.2 LJV."
    }
   ],
   "pregunta": "Confirme la situación del menor:",
   "opciones": [
    {
     "texto": "El menor es mayor de 16 años y está sujeto a tutela (no está bajo patria potestad)",
     "tono": "t-nota",
     "nota": "Menor bajo tutela",
     "destino": "competencia"
    },
    {
     "texto": "El menor está bajo patria potestad → corresponde tramitar como emancipación",
     "tono": "t-nota",
     "nota": "Redirigir a emancipación",
     "destino": "supuesto_emancipacion"
    }
   ]
  },
  "competencia": {
   "fase": 0,
   "titulo": "Determinación de la competencia judicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El órgano competente para conocer de la solicitud de emancipación o de beneficio de mayoría de edad es el Juez de Primera Instancia del domicilio del menor (art. 53.1 y 2 LJV). Hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ); si no, la Sección Civil."
    },
    {
     "tipo": "nota",
     "texto": "La competencia territorial no puede modificarse por sumisión expresa ni tácita (art. 2.2 LJV); el LAJ la examina de oficio (art. 16 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La emancipación judicial (art. 53.1) y el beneficio de la mayoría de edad (art. 53.2) se piden ante el mismo órgano."
    },
    {
     "tipo": "ley",
     "texto": "Art. 53.1 y 2 LJV · Arts. 2.2 y 16 LJV · Art. 86.5 j) LOPJ"
    }
   ],
   "siguiente": "solicitud_quien"
  },
  "solicitud_quien": {
   "fase": 1,
   "titulo": "Legitimación para presentar la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente se inicia mediante solicitud dirigida al Juzgado por el menor mayor de dieciséis años. La solicitud es un acto procesal del menor, legitimado activamente conforme al Código Civil, con la asistencia de alguno de sus progenitores, no privados o suspendidos de la patria potestad, o del tutor (art. 54.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El menor actúa como parte solicitante, no como mero objeto del procedimiento, lo que es coherente con el derecho del menor a ser oído (art. 12 CDN y art. 39 CE)."
    },
    {
     "tipo": "aviso",
     "texto": "A falta de esa asistencia, se nombra defensor judicial al menor para instar el expediente; hasta su nombramiento, el Ministerio Fiscal asume su representación y defensa (art. 54.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 54.1 LJV; arts. 244 y 245 CC; art. 12 CDN; art. 39 CE."
    }
   ],
   "pregunta": "¿Quién asiste al menor en la presentación de la solicitud?",
   "opciones": [
    {
     "texto": "Uno de los progenitores (no privado ni suspendido de la patria potestad)",
     "tono": "t-nota",
     "nota": "Asistencia de progenitor",
     "destino": "solicitud_documentacion"
    },
    {
     "texto": "El tutor del menor (en caso de beneficio de mayoría de edad)",
     "tono": "t-nota",
     "nota": "Asistencia del tutor",
     "destino": "solicitud_documentacion"
    },
    {
     "texto": "Nadie le asiste: se nombra defensor judicial y, entretanto, le representa el Ministerio Fiscal",
     "tono": "t-aviso",
     "destino": "solicitud_documentacion"
    }
   ]
  },
  "solicitud_documentacion": {
   "fase": 1,
   "titulo": "Documentación que debe acompañarse",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "A la solicitud se acompañarán los documentos que acrediten la concurrencia de la causa exigida por el Código Civil para instar la emancipación o el beneficio de mayoría de edad."
    },
    {
     "tipo": "info",
     "texto": "También deberá incluirse la proposición de prueba que el solicitante considere pertinente."
    },
    {
     "tipo": "lista",
     "titulo": "Documentación a preparar",
     "items": [
      "Solicitud dirigida al Juzgado competente, firmada por el menor y por el progenitor asistente o el tutor",
      "Documentos acreditativos de la causa habilitante (supuesto a, b o c del art. 244 CC, o situación de tutela del art. 199 CC)",
      "Proposición de los medios de prueba que se consideren pertinentes",
      "Certificado de nacimiento del menor (acreditación de la edad mayor de 16 años)",
      "En su caso, documentos que acrediten el nuevo matrimonio o convivencia, la separación de los progenitores o la causa que entorpece la patria potestad (según el supuesto)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Si faltan documentos, el LAJ da cinco días para subsanar (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 54.2 LJV; artículo 244 CC; artículo 245 CC."
    }
   ],
   "siguiente": "solicitud_postulacion"
  },
  "solicitud_postulacion": {
   "fase": 1,
   "titulo": "Régimen de postulación procesal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En la práctica de estas actuaciones no será preceptiva la intervención de Abogado ni Procurador, de acuerdo con el artículo 53 de la Ley 15/2015."
    },
    {
     "tipo": "aviso",
     "texto": "Si se formula oposición, a partir de ese momento es preceptiva la asistencia de letrado (art. 53.3 LJV). Para los recursos de revisión y apelación contra la resolución definitiva son necesarios Abogado y Procurador (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 53.3 LJV; art. 3.2 LJV."
    }
   ],
   "siguiente": "admision_revision"
  },
  "admision_revision": {
   "fase": 2,
   "titulo": "Revisión y admisión a trámite por el LAJ",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Presentada la solicitud con la documentación correspondiente, el LAJ examina la competencia y los defectos de la solicitud y la admite a trámite (arts. 16 y 55.1 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Aspectos a verificar por el LAJ",
     "items": [
      "Competencia del Juzgado (domicilio del menor)",
      "Legitimación del solicitante (mayor de 16 años con asistencia de progenitor o tutor)",
      "Acreditación documental de la causa habilitante",
      "Cumplimiento de los requisitos formales de la solicitud"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Si la solicitud tiene defectos, el LAJ da cinco días para subsanarlos (art. 16.4 LJV). Si entiende que no es admisible, da cuenta al Juez, a quien corresponde resolver el expediente (arts. 17.1 y 55.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 16, 17.1, 53, 54 y 55.1 LJV."
    }
   ],
   "pregunta": "¿Es admisible la solicitud?",
   "opciones": [
    {
     "texto": "Sí: el LAJ la admite a trámite",
     "tono": "t-nota",
     "nota": "Admitida a trámite",
     "destino": "comparecencia_convocatoria"
    },
    {
     "texto": "No (defectos insubsanables o falta de competencia): el LAJ da cuenta al Juez",
     "tono": "t-nota",
     "nota": "No admitida a trámite",
     "destino": "fin_inadmitida"
    }
   ]
  },
  "fin_inadmitida": {
   "fase": 2,
   "titulo": "Solicitud no admitida a trámite",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez, a quien el LAJ ha dado cuenta, no admite la solicitud (art. 17.1 LJV). Las causas más frecuentes son la falta de competencia del Juzgado, la ausencia de legitimación del solicitante o defectos insubsanables en la documentación presentada."
    },
    {
     "tipo": "aviso",
     "texto": "Contra el auto que pone fin al expediente cabe apelación, con Abogado y Procurador (arts. 3.2 y 20.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 17.1, 3.2 y 20.2 LJV."
    }
   ],
   "fin": "error"
  },
  "comparecencia_convocatoria": {
   "fase": 3,
   "titulo": "Convocatoria a la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida a trámite la solicitud, el LAJ convoca a la comparecencia ante el Juez a los siguientes sujetos, que serán oídos por este orden; después se practican las pruebas propuestas y acordadas (art. 55.1 LJV):"
    },
    {
     "tipo": "lista",
     "titulo": "Personas que deben ser citadas",
     "items": [
      "El menor solicitante",
      "Sus progenitores o, en su caso, su tutor",
      "El Ministerio Fiscal",
      "Aquellos que pudieran estar interesados"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia constituye el acto central del expediente, donde se practican las diligencias y se valora la procedencia de la solicitud."
    },
    {
     "tipo": "plazo",
     "texto": "Citación con al menos quince días de antelación (art. 17.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 55.1 LJV; art. 17.3 LJV."
    }
   ],
   "siguiente": "comparecencia_plazo"
  },
  "comparecencia_plazo": {
   "fase": 3,
   "titulo": "Plazo y forma de celebración de la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "La comparecencia deberá celebrarse dentro de los treinta días siguientes a la admisión de la solicitud (art. 18.1 LJV)."
    },
    {
     "tipo": "info",
     "texto": "La comparecencia se sustanciará por los trámites previstos en la Ley de Enjuiciamiento Civil para la vista del juicio verbal, con las especialidades previstas en la Ley 15/2015."
    },
    {
     "tipo": "info",
     "texto": "Cuando el expediente afecte a los intereses de una persona menor de edad, se practicarán las diligencias relativas a dichos intereses en el mismo acto o, si no fuere posible, en los diez días siguientes."
    },
    {
     "tipo": "nota",
     "texto": "La autoridad judicial podrá acordar que la audiencia del menor se practique en acto separado, sin interferencias de otras personas, debiendo asistir el Ministerio Fiscal. Se garantizará que el menor sea oído en condiciones idóneas, adaptadas a su edad, madurez y circunstancias (art. 18.2.4.ª LJV; art. 12 CDN)."
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia será registrada en soporte apto para la grabación y reproducción del sonido y de la imagen."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 18 LJV; artículo 55 LJV; Ley 1/2000 de Enjuiciamiento Civil (vista del juicio verbal); LO 1/1996 de Protección Jurídica del Menor; artículo 12 CDN."
    }
   ],
   "pregunta": "¿Asiste el solicitante a la comparecencia?",
   "opciones": [
    {
     "texto": "Sí, el solicitante asiste a la comparecencia",
     "tono": "t-nota",
     "nota": "Asistencia del solicitante",
     "destino": "comparecencia_audiencia"
    },
    {
     "texto": "No asiste el solicitante → se tiene por desistido y se archiva el expediente",
     "tono": "t-nota",
     "nota": "Inasistencia del solicitante",
     "destino": "fin_archivo"
    }
   ]
  },
  "fin_archivo": {
   "fase": 3,
   "titulo": "Archivo del expediente por inasistencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el solicitante no asiste a la comparecencia, el Juez acuerda el archivo del expediente, teniéndole por desistido del mismo, conforme al artículo 18.2.1.ª de la Ley 15/2015."
    },
    {
     "tipo": "nota",
     "texto": "Si no asistiese alguno de los demás citados, la comparecencia se celebrará igualmente y el expediente continuará sin más citaciones ni notificaciones que las que la ley disponga."
    },
    {
     "tipo": "aviso",
     "texto": "El archivo no impide que el menor pueda presentar una nueva solicitud en el futuro, siempre que siga reuniendo los requisitos legales."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 18.2.1.ª LJV."
    }
   ],
   "fin": "neutral"
  },
  "comparecencia_audiencia": {
   "fase": 3,
   "titulo": "Celebración de la audiencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En la comparecencia, el Juez oirá al solicitante, a los progenitores o tutor, al Ministerio Fiscal y a los interesados que concurran. Se practicarán las pruebas propuestas y las diligencias que se acuerden de oficio."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones en la comparecencia",
     "items": [
      "Audiencia del menor solicitante (en acto separado si el Juez lo acuerda)",
      "Audiencia de los progenitores o tutor",
      "Intervención del Ministerio Fiscal",
      "Práctica de las pruebas propuestas y de las acordadas de oficio"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Tanto el Ministerio Fiscal en su informe como la autoridad judicial en la resolución deberán valorar motivadamente la exploración practicada al menor (art. 18.2.4.ª LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Si se plantearan cuestiones procesales que puedan impedir la válida prosecución del expediente, el Juez las resolverá oralmente en el propio acto."
    },
    {
     "tipo": "nota",
     "texto": "Beneficio de la mayoría de edad: se concede previo informe del Ministerio Fiscal (art. 245 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 55.1 LJV; artículo 18.2 LJV; LO 1/1996 de Protección Jurídica del Menor."
    }
   ],
   "pregunta": "¿Se ha formulado oposición durante la comparecencia?",
   "opciones": [
    {
     "texto": "Sí, se ha formulado oposición",
     "tono": "t-nota",
     "nota": "Oposición formulada",
     "destino": "oposicion_letrado"
    },
    {
     "texto": "No se ha formulado oposición",
     "tono": "t-nota",
     "nota": "Sin oposición",
     "destino": "sin_oposicion"
    }
   ]
  },
  "oposicion_letrado": {
   "fase": 3,
   "titulo": "Oposición formulada: necesidad de letrado",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "Al haberse formulado oposición, a partir de este momento es preceptiva la asistencia de letrado (art. 53.3 LJV). La oposición no hace contencioso el expediente ni impide que continúe su tramitación hasta que se resuelva (art. 17.3 LJV)."
    },
    {
     "tipo": "info",
     "texto": "El expediente continúa con la asistencia de letrado."
    },
    {
     "tipo": "nota",
     "texto": "Será necesaria igualmente la intervención de Abogado y Procurador para la interposición de los recursos de revisión y apelación contra la resolución final."
    },
    {
     "tipo": "ley",
     "texto": "Art. 53.3 LJV; art. 17.3 LJV; art. 3.2 LJV."
    }
   ],
   "siguiente": "resolucion_criterios"
  },
  "sin_oposicion": {
   "fase": 3,
   "titulo": "Tramitación sin oposición",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al no haberse formulado oposición, el expediente continúa su tramitación sin necesidad de Abogado ni Procurador, manteniendo su naturaleza no contenciosa."
    },
    {
     "tipo": "nota",
     "texto": "El Ministerio Fiscal seguirá interviniendo en todo caso, garantizando la protección del interés del menor."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 53.3 LJV; artículo 55.1 LJV."
    }
   ],
   "siguiente": "resolucion_criterios"
  },
  "resolucion_criterios": {
   "fase": 4,
   "titulo": "Criterios de resolución judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez resolverá concediendo o denegando la emancipación o el beneficio de mayoría de edad solicitados, teniendo en cuenta los siguientes criterios:"
    },
    {
     "tipo": "lista",
     "titulo": "Criterios valorados por el Juez",
     "items": [
      "La justificación ofrecida por el solicitante",
      "El interés del menor (parámetro rector de la decisión)",
      "El informe del Ministerio Fiscal",
      "Las diligencias practicadas en la comparecencia",
      "La exploración del menor (valorada motivadamente)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El interés del menor constituye el parámetro rector, en consonancia con el artículo 39 de la Constitución Española y la Convención sobre los Derechos del Niño."
    },
    {
     "tipo": "nota",
     "texto": "El Juez resuelve por auto motivado en los cinco días siguientes a la comparecencia (art. 19.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 55.2 LJV; artículo 39 CE; artículo 12 CDN; artículo 18.2.4.ª LJV."
    }
   ],
   "pregunta": "¿Qué resuelve el Juez?",
   "opciones": [
    {
     "texto": "Concede la emancipación o el beneficio de mayoría de edad",
     "tono": "t-nota",
     "nota": "Concesión",
     "destino": "resolucion_concede"
    },
    {
     "texto": "Deniega la emancipación o el beneficio de mayoría de edad",
     "tono": "t-nota",
     "nota": "Denegación",
     "destino": "fin_denegada"
    }
   ]
  },
  "fin_denegada": {
   "fase": 4,
   "titulo": "Solicitud denegada por el Juez",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha denegado la emancipación o el beneficio de mayoría de edad solicitados. La resolución será motivada y especificará las razones de la denegación."
    },
    {
     "tipo": "aviso",
     "texto": "Contra el auto que deniega la solicitud cabe apelación, en veinte días ante la Audiencia Provincial, con Abogado y Procurador (arts. 3.2 y 20.2 LJV; art. 458.1 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "La denegación no impide que el menor pueda presentar una nueva solicitud en el futuro si cambian las circunstancias o se acredita una causa habilitante distinta."
    },
    {
     "tipo": "ley",
     "texto": "Art. 55.2 LJV; arts. 3.2 y 20.2 LJV; art. 458.1 LEC."
    }
   ],
   "pregunta": "¿Se interpone recurso contra la resolución?",
   "opciones": [
    {
     "texto": "Sí, se interpone recurso de apelación (con Abogado y Procurador)",
     "tono": "t-nota",
     "nota": "Recurso de apelación",
     "destino": "recurso_apelacion"
    },
    {
     "texto": "No se interpone recurso",
     "tono": "t-nota",
     "nota": "Sin recurso",
     "destino": "fin_denegada_sin_recurso"
    }
   ]
  },
  "fin_denegada_sin_recurso": {
   "fase": 4,
   "titulo": "Denegación sin recurso interpuesto",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se ha interpuesto recurso contra la resolución que deniega la emancipación o el beneficio de mayoría de edad. La resolución adquiere firmeza y el procedimiento concluye."
    },
    {
     "tipo": "nota",
     "texto": "Firme la resolución, no puede iniciarse otro expediente sobre idéntico objeto salvo que cambien las circunstancias (art. 19.3 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Si el menor desea reiterar la solicitud, deberá iniciar un nuevo expediente, aportando nueva documentación o justificando que las circunstancias han variado significativamente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 55.2 LJV; art. 19.3 LJV."
    }
   ],
   "fin": "error"
  },
  "recurso_apelacion": {
   "fase": 4,
   "titulo": "Recurso de apelación",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se interpone recurso de apelación contra la resolución que deniega la emancipación o el beneficio de mayoría de edad."
    },
    {
     "tipo": "aviso",
     "texto": "Para la interposición del recurso de apelación es preceptiva la intervención de Abogado y Procurador."
    },
    {
     "tipo": "nota",
     "texto": "Se interpone ante la Audiencia Provincial en veinte días desde la notificación; su LAJ pide las actuaciones al Juzgado, que las remite y emplaza a las partes no recurrentes (arts. 458 y 461 LEC; art. 20.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 3.2 y 20.2 LJV; arts. 458 y 461 LEC."
    }
   ],
   "pregunta": "¿Cuál es el resultado del recurso?",
   "opciones": [
    {
     "texto": "El recurso se estima → se revoca la denegación y se concede la emancipación o beneficio",
     "tono": "t-nota",
     "nota": "Recurso estimado",
     "destino": "resolucion_concede"
    },
    {
     "texto": "El recurso se desestima → se confirma la denegación",
     "tono": "t-nota",
     "nota": "Recurso desestimado",
     "destino": "fin_denegada_definitiva"
    }
   ]
  },
  "fin_denegada_definitiva": {
   "fase": 4,
   "titulo": "Denegación confirmada definitivamente",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El recurso de apelación ha sido desestimado. La denegación de la emancipación o del beneficio de mayoría de edad queda confirmada de forma definitiva."
    },
    {
     "tipo": "nota",
     "texto": "La confirmación no impide que el menor pueda presentar una nueva solicitud en el futuro si cambian las circunstancias."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20.2 LJV; arts. 455 y ss. LEC."
    }
   ],
   "fin": "error"
  },
  "resolucion_concede": {
   "fase": 4,
   "titulo": "Resolución estimatoria: concesión",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha concedido la emancipación o el beneficio de mayoría de edad solicitados. Se remite al Registro Civil testimonio de la concesión para su inscripción (art. 55.3 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Concedida la emancipación, no puede ser revocada (art. 242 CC). El emancipado y quien obtiene el beneficio de la mayor edad tienen la capacidad del art. 247 CC."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 55.2 LJV; artículo 242 CC; artículo 247 CC."
    }
   ],
   "siguiente": "inscripcion_remision"
  },
  "inscripcion_remision": {
   "fase": 5,
   "titulo": "Remisión al Registro Civil",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se remitirá al Registro Civil el testimonio de la concesión de la emancipación o del beneficio de mayoría de edad para proceder a su inscripción, conforme al artículo 55.3 de la Ley 15/2015."
    },
    {
     "tipo": "nota",
     "texto": "Se expide testimonio de la resolución a efectos de su inscripción (art. 22.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 55.3 LJV; art. 22.2 LJV; art. 242 CC; Ley 20/2011 del Registro Civil."
    }
   ],
   "siguiente": "inscripcion_eficacia"
  },
  "inscripcion_eficacia": {
   "fase": 5,
   "titulo": "Eficacia registral de la concesión",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La concesión de la emancipación ha de inscribirse en el Registro Civil y, entretanto, no produce efectos contra terceros (art. 242 CC)."
    },
    {
     "tipo": "nota",
     "texto": "El testimonio de la concesión se remite al Registro Civil para su inscripción (art. 55.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 242 CC; art. 55.3 LJV; Ley 20/2011 del Registro Civil."
    }
   ],
   "pregunta": "¿Cuál es el instituto concedido?",
   "opciones": [
    {
     "texto": "Emancipación judicial (art. 244 CC)",
     "tono": "t-nota",
     "nota": "Emancipación",
     "destino": "efectos_emancipacion"
    },
    {
     "texto": "Beneficio de mayoría de edad (art. 245 CC)",
     "tono": "t-nota",
     "nota": "Beneficio de mayoría de edad",
     "destino": "efectos_beneficio"
    }
   ]
  },
  "efectos_emancipacion": {
   "fase": 5,
   "titulo": "Efectos de la emancipación judicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La emancipación habilita al menor para regir su persona y bienes como si fuera mayor, de acuerdo con el artículo 247 del Código Civil. No obstante, hasta que llegue a la mayor edad (18 años), subsisten ciertas restricciones."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos de la emancipación",
     "items": [
      "El menor emancipado puede regir su persona y bienes como si fuera mayor",
      "El menor emancipado podrá por sí solo comparecer en juicio",
      "Hasta la mayoría de edad: no podrá tomar dinero a préstamo sin consentimiento de sus progenitores y, a falta de ambos, de su defensor judicial",
      "Hasta la mayoría de edad: no podrá gravar o enajenar bienes inmuebles sin consentimiento de sus progenitores y, a falta de ambos, de su defensor judicial",
      "Hasta la mayoría de edad: no podrá gravar o enajenar establecimientos mercantiles o industriales sin ese consentimiento",
      "Hasta la mayoría de edad: no podrá gravar o enajenar objetos de extraordinario valor sin ese consentimiento",
      "La emancipación produce la extinción de la patria potestad sobre el menor (art. 169 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Para que el menor emancipado casado pueda enajenar o gravar bienes comunes: si el otro cónyuge es mayor, basta el consentimiento de ambos; si también es menor, se necesitará además el de los progenitores o defensor judicial de uno y otro (art. 248 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "Concedida la emancipación, no puede ser revocada (art. 242 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 242, 247 y 248 CC; art. 169 CC."
    }
   ],
   "siguiente": "fin_emancipacion"
  },
  "efectos_beneficio": {
   "fase": 5,
   "titulo": "Efectos del beneficio de la mayoría de edad",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Lo dispuesto en el artículo 247 del Código Civil es aplicable también al menor que hubiere obtenido judicialmente el beneficio de la mayor edad. El beneficiado adquiere la misma capacidad que el emancipado, con las mismas restricciones hasta alcanzar la mayoría de edad."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos del beneficio de mayoría de edad",
     "items": [
      "El menor podrá regir su persona y bienes como si fuera mayor",
      "Podrá comparecer en juicio por sí solo",
      "Subsisten las restricciones del art. 247 CC hasta los 18 años (préstamos, disposición de inmuebles, etc.)",
      "La tutela se extingue por la concesión del beneficio de la mayoría de edad (art. 231.1.º CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "A diferencia de la emancipación judicial del artículo 244 CC, el beneficio de mayoría de edad se concede a menores bajo tutela, por lo que la extinción afecta a la tutela (art. 231.1.º CC) y no a la patria potestad (art. 169 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 247 CC; arts. 199, 231 y 245 CC."
    }
   ],
   "siguiente": "fin_beneficio"
  },
  "fin_emancipacion": {
   "fase": 5,
   "titulo": "Procedimiento finalizado: emancipación concedida e inscrita",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento ha concluido con éxito. La emancipación judicial ha sido concedida por el Juez e remitida al Registro Civil para su inscripción, con la que produce efectos contra terceros (art. 242 CC)."
    },
    {
     "tipo": "lista",
     "titulo": "Resumen del resultado",
     "items": [
      "El menor ha sido emancipado judicialmente conforme al art. 244 CC",
      "La resolución ha sido dictada por el Juez de Primera Instancia del domicilio del menor",
      "Se ha remitido testimonio al Registro Civil para su inscripción (art. 55.3 LJV; art. 242 CC)",
      "El menor puede regir su persona y bienes, con restricciones hasta los 18 años (art. 247 CC)",
      "La patria potestad sobre el menor ha quedado extinguida (art. 169 CC)",
      "Concedida, la emancipación no puede ser revocada (art. 242 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Arts. 53 a 55 LJV; arts. 169, 239, 242, 244 y 247 CC; Ley 20/2011 del Registro Civil."
    }
   ],
   "fin": "success"
  },
  "fin_beneficio": {
   "fase": 5,
   "titulo": "Procedimiento finalizado: beneficio de mayoría de edad concedido e inscrito",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento ha concluido con éxito. El beneficio de la mayoría de edad ha sido concedido por el Juez y remitido al Registro Civil para su inscripción (art. 55.3 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Resumen del resultado",
     "items": [
      "El menor ha obtenido el beneficio de la mayoría de edad conforme al art. 245 CC",
      "La resolución ha sido dictada por el Juez de Primera Instancia del domicilio del menor",
      "Se ha remitido testimonio al Registro Civil para su inscripción (art. 55.3 LJV)",
      "El menor puede regir su persona y bienes, con restricciones hasta los 18 años (art. 247 CC)",
      "La tutela se ha extinguido por la concesión (art. 231.1.º CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Arts. 53 a 55 LJV; arts. 199, 231, 245 y 247 CC; Ley 20/2011 del Registro Civil."
    }
   ],
   "fin": "success"
  }
 }
});

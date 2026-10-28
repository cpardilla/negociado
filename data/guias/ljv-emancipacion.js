/* Migrado por tools/migrate.js desde sources/actual/G13.json (contenido sin cambios; pendiente de revisión). */
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
  "estado": "sin revisar",
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
  "laj": "LAJ",
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
     "texto": "Esta guía tramita paso a paso el expediente de concesión judicial de la emancipación o del beneficio de la mayoría de edad, conforme a los artículos 53 a 55 de la Ley 15/2015, de 2 de julio, de la Jurisdicción Voluntaria, en relación con los artículos 320 y 321 del Código Civil."
    },
    {
     "tipo": "info",
     "texto": "El procedimiento se inicia siempre a solicitud del menor mayor de dieciséis años, asistido por uno de sus progenitores o por su tutor, según corresponda. A lo largo del proceso, se presentarán bifurcaciones que determinarán el camino procedimental adecuado."
    },
    {
     "tipo": "nota",
     "texto": "Este expediente tiene naturaleza no contenciosa (art. 1 LJV), salvo que se formule oposición, en cuyo caso serán preceptivos Abogado y Procurador a partir de ese momento (art. 53.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 1 y artículo 53 de la Ley 15/2015; artículos 320 y 321 del Código Civil."
    }
   ],
   "pregunta": "¿Qué tipo de solicitud se va a tramitar?",
   "opciones": [
    {
     "texto": "Emancipación judicial (art. 320 CC)",
     "tono": "t-nota",
     "nota": "Emancipación",
     "destino": "supuesto_emancipacion"
    },
    {
     "texto": "Beneficio de mayoría de edad (art. 321 CC)",
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
     "texto": "El artículo 320 del Código Civil establece que el Juez podrá conceder la emancipación de los hijos mayores de dieciséis años, si estos la pidieren y previa audiencia de los padres, cuando concurra alguno de los siguientes supuestos:"
    },
    {
     "tipo": "nota",
     "texto": "Los tres supuestos tienen naturaleza alternativa: basta con que concurra uno solo de ellos para que el menor esté legitimado a solicitar la emancipación judicial."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 320 del Código Civil; artículo 53.1 LJV."
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
     "texto": "El artículo 321 del Código Civil permite al Juez, previo informe del Ministerio Fiscal, conceder el beneficio de la mayoría de edad al sujeto a tutela mayor de dieciséis años que lo solicitare."
    },
    {
     "tipo": "info",
     "texto": "A diferencia de la emancipación, que se solicita por quien está bajo patria potestad, el beneficio de mayoría de edad se solicita por quien está sometido a tutela, es decir, por los menores no emancipados que no estén bajo la patria potestad (art. 222 CC)."
    },
    {
     "tipo": "nota",
     "texto": "El Ministerio Fiscal emite informe preceptivo en este supuesto, lo que añade una garantía procesal adicional."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 321 del Código Civil; artículo 222 del Código Civil; artículo 53.2 LJV."
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
     "texto": "El órgano competente para conocer de la solicitud de emancipación o de beneficio de mayoría de edad es el Juez de Primera Instancia del domicilio del menor, conforme al artículo 53 de la Ley 15/2015 y al criterio territorial general de la Ley."
    },
    {
     "tipo": "info",
     "texto": "El criterio de atribución por el domicilio del menor asegura la proximidad geográfica del órgano jurisdiccional y facilita la práctica de las diligencias necesarias para la valoración del caso."
    },
    {
     "tipo": "nota",
     "texto": "Tanto la solicitud de emancipación como la de beneficio de mayoría de edad se tramitan ante el mismo órgano: el JPI del domicilio del menor."
    },
    {
     "tipo": "plazo",
     "texto": "Determinar el Juzgado de Primera Instancia competente según el domicilio del menor."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 53 LJV; artículo 17 LJV (competencia objetiva y territorial)."
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
     "texto": "El expediente se inicia mediante solicitud dirigida al Juzgado por el menor mayor de dieciséis años. La solicitud es un acto procesal del menor, legitimado activamente conforme al Código Civil, pero requiere la asistencia de un progenitor o del tutor."
    },
    {
     "tipo": "nota",
     "texto": "El menor actúa como parte solicitante, no como mero objeto del procedimiento, lo que es coherente con el derecho del menor a ser oído (art. 12 CDN y art. 39 CE)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 54 LJV; artículo 320 CC (emancipación); artículo 321 CC (beneficio); artículo 12 CDN; artículo 39 CE."
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
      "Documentos acreditativos de la causa habilitante (supuesto a, b o c del art. 320 CC, o situación de tutela del art. 222 CC)",
      "Proposición de los medios de prueba que se consideren pertinentes",
      "Certificado de nacimiento del menor (acreditación de la edad mayor de 16 años)",
      "En su caso, certificado de defunción o sentencia de separación de los progenitores (según el supuesto)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La ausencia de documentación acreditativa de la causa puede motivar que el Secretario judicial no admita a trámite la solicitud."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 54.2 LJV; artículo 320 CC; artículo 321 CC."
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
     "texto": "Si durante la tramitación se formulase oposición, a partir de ese momento sí será preceptiva la asistencia de letrado. La intervención de Abogado y Procurador también será necesaria para la interposición de recursos de revisión y apelación contra la resolución final."
    },
    {
     "tipo": "nota",
     "texto": "Esta regla se alinea con el principio de economía procesal y la naturaleza no contenciosa de los expedientes de jurisdicción voluntaria (art. 1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 53.3 LJV; artículo 1 LJV; Ley 1/2000 de Enjuiciamiento Civil (aplicación supletoria, art. 4 LJV)."
    }
   ],
   "siguiente": "admision_revision"
  },
  "admision_revision": {
   "fase": 2,
   "titulo": "Revisión y admisión a trámite por el Secretario judicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Presentada la solicitud con la documentación correspondiente, corresponde al Secretario judicial revisar que se cumplen los requisitos formales y materiales para la admisión a trámite del expediente."
    },
    {
     "tipo": "lista",
     "titulo": "Aspectos a verificar por el Secretario judicial",
     "items": [
      "Competencia del Juzgado (JPI del domicilio del menor)",
      "Legitimación del solicitante (mayor de 16 años con asistencia de progenitor o tutor)",
      "Acreditación documental de la causa habilitante",
      "Cumplimiento de los requisitos formales de la solicitud"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "El Secretario judicial debe resolver sobre la admisión en el plazo más breve posible tras la presentación."
    },
    {
     "tipo": "ley",
     "texto": "Artículos 17 y 53 LJV; artículo 54 LJV."
    }
   ],
   "pregunta": "¿Cómo resuelve el Secretario judicial?",
   "opciones": [
    {
     "texto": "Admite a trámite la solicitud",
     "tono": "t-nota",
     "nota": "Admitida a trámite",
     "destino": "comparecencia_convocatoria"
    },
    {
     "texto": "No admite a trámite (defectos insubsanables o falta de competencia)",
     "tono": "t-nota",
     "nota": "No admitida a trámite",
     "destino": "fin_inadmitida"
    }
   ]
  },
  "fin_inadmitida": {
   "fase": 2,
   "titulo": "Solicitud no admitida a trámite",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Secretario judicial no ha admitido a trámite la solicitud. Las causas más frecuentes son la falta de competencia del Juzgado, la ausencia de legitimación del solicitante o defectos insubsanables en la documentación presentada."
    },
    {
     "tipo": "aviso",
     "texto": "Contra la resolución de no admisión a trámite caben los recursos previstos en la Ley 15/2015. Será necesaria la intervención de Abogado y Procurador para la interposición del recurso de apelación."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 19 LJV; Ley 1/2000 de Enjuiciamiento Civil (régimen de recursos)."
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
     "texto": "Admitida a trámite la solicitud, el Secretario judicial convocará a la comparecencia ante el Juez a los siguientes sujetos:"
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
     "tipo": "ley",
     "texto": "Artículo 55.1 LJV."
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
     "texto": "Si el solicitante no asiste a la comparecencia, el Juez o el Secretario judicial acordará el archivo del expediente, teniéndole por desistido del mismo, conforme al artículo 18.2.1.ª de la Ley 15/2015."
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
      "Práctica de las pruebas propuestas y de las acordadas de oficio",
      "Formulación oral de conclusiones por los interesados"
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
     "texto": "Al haberse formulado oposición, a partir de este momento será preceptiva la asistencia de Abogado para todas las partes. La oposición transforma parcialmente la naturaleza del expediente, pues obligará a seguir las reglas propias de la contradicción."
    },
    {
     "tipo": "info",
     "texto": "El expediente continuará su tramitación, pero con las garantías propias de la contradicción. Será necesaria la intervención de Abogado y, en su caso, de Procurador para proseguir."
    },
    {
     "tipo": "nota",
     "texto": "Será necesaria igualmente la intervención de Abogado y Procurador para la interposición de los recursos de revisión y apelación contra la resolución final."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 53.3 LJV; Ley 1/2000 de Enjuiciamiento Civil."
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
     "texto": "La resolución deberá ser motivada, especificando las razones de la concesión o denegación."
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
     "texto": "Contra la resolución que deniega la solicitud caben los recursos previstos en la Ley 15/2015. Para la interposición del recurso de apelación será necesaria la intervención de Abogado y Procurador."
    },
    {
     "tipo": "nota",
     "texto": "La denegación no impide que el menor pueda presentar una nueva solicitud en el futuro si cambian las circunstancias o se acredita una causa habilitante distinta."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 55.2 LJV; artículo 19 LJV; Ley 1/2000 de Enjuiciamiento Civil (régimen de recursos)."
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
     "destino": null
    }
   ],
   "fin": "error"
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
     "texto": "La denegación firme no impide que el menor pueda presentar una nueva solicitud en el futuro si cambian las circunstancias o se acredita una causa habilitante distinta."
    },
    {
     "tipo": "aviso",
     "texto": "Si el menor desea reiterar la solicitud, deberá iniciar un nuevo expediente, aportando nueva documentación o justificando que las circunstancias han variado significativamente."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 55.2 LJV; artículo 19 LJV; Ley 1/2000 de Enjuiciamiento Civil."
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
     "texto": "El recurso se tramitará conforme a las reglas de la Ley 15/2015 y, en lo no previsto, de la Ley 1/2000 de Enjuiciamiento Civil (aplicación supletoria, art. 4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 19 LJV; artículo 4 LJV; Ley 1/2000 de Enjuiciamiento Civil."
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
     "texto": "Artículo 19 LJV; Ley 1/2000 de Enjuiciamiento Civil."
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
     "texto": "El Juez ha concedido la emancipación o el beneficio de mayoría de edad solicitados. La resolución es firme y habilita el siguiente paso: la inscripción en el Registro Civil."
    },
    {
     "tipo": "nota",
     "texto": "Concedida la emancipación, no podrá ser revocada (art. 318 CC). El beneficiado adquiere la capacidad prevista en el artículo 323 del Código Civil."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 55.2 LJV; artículo 318 CC; artículo 323 CC."
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
     "texto": "Se remitirá al Registro Civil el testimonio de la concesión de la emancipación o del beneficio de mayoría de edad para proceder a su inscripción, conforme al artículo 55 de la Ley 15/2015."
    },
    {
     "tipo": "info",
     "texto": "La autoridad judicial deberá comunicar sin dilación al encargado del Registro Civil la resolución de concesión, en los términos previstos en los artículos 218 y 219 del Código Civil."
    },
    {
     "tipo": "plazo",
     "texto": "La remisión al Registro Civil debe efectuarse sin dilación una vez dictada la resolución."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 55 LJV; artículo 318 CC; artículos 218 y 219 CC; Ley 20/2011 del Registro Civil."
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
     "texto": "La concesión de emancipación habrá de inscribirse en el Registro Civil, no produciendo entre tanto efectos contra terceros (art. 318 CC). La inscripción es, por tanto, requisito esencial para la plena eficacia de la emancipación o del beneficio de mayoría de edad frente a terceros."
    },
    {
     "tipo": "nota",
     "texto": "Hasta que se practique la inscripción, la emancipación o el beneficio producen efectos entre las partes, pero no son oponibles a terceros de buena fe."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 318 CC; artículos 218 y 219 CC; Ley 20/2011 del Registro Civil."
    }
   ],
   "pregunta": "¿Cuál es el instituto concedido?",
   "opciones": [
    {
     "texto": "Emancipación judicial (art. 320 CC)",
     "tono": "t-nota",
     "nota": "Emancipación",
     "destino": "efectos_emancipacion"
    },
    {
     "texto": "Beneficio de mayoría de edad (art. 321 CC)",
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
     "texto": "La emancipación habilita al menor para regir su persona y bienes como si fuera mayor, de acuerdo con el artículo 323 del Código Civil. No obstante, hasta que llegue a la mayor edad (18 años), subsisten ciertas restricciones."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos de la emancipación",
     "items": [
      "El menor emancipado puede regir su persona y bienes como si fuera mayor",
      "El menor emancipado podrá por sí solo comparecer en juicio",
      "Hasta la mayoría de edad: no podrá tomar dinero a préstamo sin consentimiento de sus padres o curador",
      "Hasta la mayoría de edad: no podrá gravar o enajenar bienes inmuebles sin consentimiento de sus padres o curador",
      "Hasta la mayoría de edad: no podrá enajenar establecimientos mercantiles o industriales sin consentimiento",
      "Hasta la mayoría de edad: no podrá enajenar objetos de extraordinario valor sin consentimiento",
      "La emancipación produce la extinción de la patria potestad sobre el menor (art. 169 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Para que el menor emancipado casado pueda enajenar o gravar bienes comunes: si el otro cónyuge es mayor, basta el consentimiento de ambos; si también es menor, se necesitará además el de los padres o curadores de uno y otro (art. 324 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "La emancipación, una vez inscrita, es irrevocable (art. 318 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 323 CC; artículo 324 CC; artículo 169 CC; artículo 318 CC; artículo 322 CC."
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
     "texto": "Lo dispuesto en el artículo 323 del Código Civil es aplicable también al menor que hubiere obtenido judicialmente el beneficio de la mayor edad. El beneficiado adquiere la misma capacidad que el emancipado, con las mismas restricciones hasta alcanzar la mayoría de edad."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos del beneficio de mayoría de edad",
     "items": [
      "El menor podrá regir su persona y bienes como si fuera mayor",
      "Podrá comparecer en juicio por sí solo",
      "Subsisten las restricciones del art. 323 CC hasta los 18 años (préstamos, disposición de inmuebles, etc.)",
      "La tutela se extingue como consecuencia de la concesión del beneficio (art. 271 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "A diferencia de la emancipación judicial por el artículo 320, el beneficio de mayoría de edad se concede a menores bajo tutela, por lo que la extinción afecta a la tutela (art. 271 CC) y no a la patria potestad (art. 169 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "El beneficio de mayoría de edad, una vez inscrito, es irrevocable."
    },
    {
     "tipo": "ley",
     "texto": "Artículo 323 CC (aplicable); artículo 271 CC; artículo 321 CC; artículo 222 CC; artículo 232 CC (vigilancia MF)."
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
     "texto": "El procedimiento ha concluido con éxito. La emancipación judicial ha sido concedida por el Juez e inscrita en el Registro Civil, produciendo plenos efectos frente a terceros."
    },
    {
     "tipo": "lista",
     "titulo": "Resumen del resultado",
     "items": [
      "El menor ha sido emancipado judicialmente conforme al art. 320 CC",
      "La resolución ha sido dictada por el Juez de Primera Instancia del domicilio del menor",
      "Se ha practicado la inscripción en el Registro Civil (art. 318 CC)",
      "El menor puede regir su persona y bienes, con restricciones hasta los 18 años (art. 323 CC)",
      "La patria potestad sobre el menor ha quedado extinguida (art. 169 CC)",
      "La emancipación es irrevocable (art. 318 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículos 53-55 LJV; artículos 314, 315, 318, 320, 322, 323 CC; artículo 39 CE; Ley 20/2011 del Registro Civil."
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
     "texto": "El procedimiento ha concluido con éxito. El beneficio de la mayoría de edad ha sido concedido por el Juez e inscrito en el Registro Civil, produciendo plenos efectos frente a terceros."
    },
    {
     "tipo": "lista",
     "titulo": "Resumen del resultado",
     "items": [
      "El menor ha obtenido el beneficio de la mayoría de edad conforme al art. 321 CC",
      "La resolución ha sido dictada por el Juez de Primera Instancia del domicilio del menor",
      "Se ha practicado la inscripción en el Registro Civil",
      "El menor puede regir su persona y bienes, con restricciones hasta los 18 años (art. 323 CC)",
      "La tutela se ha extinguido como consecuencia de la concesión (art. 271 CC)",
      "El beneficio de mayoría de edad es irrevocable una vez inscrito"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Artículos 53-55 LJV; artículos 321, 323, 222, 271, 232 CC; artículo 39 CE; Ley 20/2011 del Registro Civil."
    }
   ],
   "fin": "success"
  }
 }
});

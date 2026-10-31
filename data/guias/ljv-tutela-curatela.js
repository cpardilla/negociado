/* Migrado por tools/migrate.js desde sources/actual/G12.json; rehecho con el BOE (registro: docs/revision/ljv-tutela-curatela.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-tutela-curatela",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la tutela, la curatela y la guarda de hecho",
 "corto": "Tutela, curatela y guarda de hecho",
 "articulos": [
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "51 bis",
  "52"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G12"
 },
 "fases": [
  "Inicio y competencia",
  "Ámbito de aplicación e inicio",
  "Comparecencia y resolución",
  "Aceptación y posesión del cargo",
  "Inventario y administración",
  "Ejercicio del cargo",
  "Incidencias: remoción, excusa, cuentas y poderes",
  "Guarda de hecho"
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
   "titulo": "Inicio: qué expediente se tramita",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Expedientes del capítulo IV del título II LJV (arts. 43 a 52): constitución de la tutela y, en el caso del art. 44.2, de la curatela; fianza, aceptación y posesión del cargo; inventario; retribución; remoción; excusa; rendición de cuentas; extinción de poderes preventivos y guarda de hecho."
    },
    {
     "tipo": "info",
     "texto": "Desde la Ley 8/2021, la tutela es solo de los menores no emancipados en situación de desamparo o no sujetos a patria potestad (art. 199 CC). A las personas mayores con discapacidad se les presta apoyo: la curatela, para quien lo precise de modo continuado, se acuerda en el procedimiento de provisión de apoyos (arts. 250 y 269 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "Abogado: preceptivo en la remoción del tutor o curador y en la extinción de poderes preventivos. En los demás expedientes de este capítulo no es preceptiva la intervención de abogado ni de procurador (art. 43.3 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "¿Qué expediente es?",
     "items": [
      "Menor no emancipado en desamparo o no sujeto a patria potestad → constitución de la tutela (arts. 44.1 y 45 LJV; art. 199 CC)",
      "Curatela acordada en un proceso de provisión de apoyos, con el curador removido o fallecido → nombramiento de nuevo curador (art. 44.2 LJV)",
      "Quien cuida de hecho a un menor o a una persona con discapacidad sin nombramiento → guarda de hecho (art. 52 LJV; arts. 237 y 263–267 CC)",
      "Tutor o curador ya nombrado → retribución, remoción, excusa o rendición de cuentas; o extinción de poderes preventivos (arts. 48 a 51 bis LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Arts. 43 a 52 LJV · Arts. 199, 250 y 269 CC"
    }
   ],
   "pregunta": "¿Qué expediente se va a tramitar?",
   "opciones": [
    {
     "texto": "Constitución de la tutela de un menor",
     "tono": "t-ok",
     "destino": "comp_tutela"
    },
    {
     "texto": "Nombramiento de nuevo curador (curatela ya constituida; curador removido o fallecido)",
     "tono": "t-nota",
     "destino": "comp_curatela"
    },
    {
     "texto": "Guarda de hecho (requerimiento, medidas de control o autorización)",
     "tono": "t-nota",
     "destino": "guarda_concepto"
    },
    {
     "texto": "Incidencia posterior (remoción, excusa, rendición de cuentas, extinción de poderes preventivos)",
     "tono": "t-nota",
     "destino": "incidencias_menu"
    }
   ]
  },
  "comp_tutela": {
   "fase": 0,
   "titulo": "Competencia — Tutela de un menor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Es competente el Juzgado de Primera Instancia del domicilio o, en su defecto, de la residencia del menor (art. 43.1 LJV). Hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ); si no, la Sección Civil."
    },
    {
     "tipo": "nota",
     "texto": "La competencia territorial no puede modificarse por sumisión expresa ni tácita (art. 2.2 LJV). El LAJ la examina de oficio al presentarse la solicitud (art. 16.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Desamparo: la tutela corresponde por ministerio de la ley a la entidad pública de protección de menores; se nombra tutor por las reglas ordinarias cuando hay personas físicas que, por sus relaciones con el menor o por otras circunstancias, puedan asumirla en su interés. Antes o en la misma resolución se acuerda la suspensión o privación de la patria potestad o la remoción del tutor (art. 222 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 43.1 LJV · Arts. 2.2 y 16 LJV · Art. 86.5 j) LOPJ · Art. 222 CC"
    }
   ],
   "pregunta": "¿Tiene el menor su domicilio (o, en su defecto, su residencia) en este partido judicial?",
   "opciones": [
    {
     "texto": "Sí — este Juzgado es competente",
     "tono": "t-ok",
     "destino": "postulacion"
    },
    {
     "texto": "No — falta de competencia territorial",
     "tono": "t-aviso",
     "destino": "fin_error_incompetencia"
    }
   ]
  },
  "comp_curatela": {
   "fase": 0,
   "titulo": "Competencia — Nombramiento de nuevo curador",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente del art. 45 solo se aplica a la curatela cuando, tras un proceso sobre la adopción de medidas judiciales de apoyo, procede nombrar un nuevo curador en sustitución de otro removido o fallecido (art. 44.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La curatela se constituye en el procedimiento de provisión de apoyos: el expediente de los arts. 42 bis a) a 42 bis c) LJV o, si hay oposición, el proceso de los arts. 756 y ss. LEC."
    },
    {
     "tipo": "nota",
     "texto": "Competencia: el Juzgado del domicilio o, en su defecto, de la residencia de la persona (art. 43.1 LJV). El que conoció de la curatela lo es para las incidencias posteriores si la persona sigue residiendo en la misma circunscripción (art. 43.2 LJV). Hoy, Sección de Familia, Infancia y Capacidad (art. 86.5 LOPJ, letras g y j) o Sección Civil."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 43 y 44.2 LJV · Arts. 42 bis a)–c) LJV · Arts. 756 y ss. LEC"
    }
   ],
   "pregunta": "¿Se trata de sustituir a un curador ya nombrado?",
   "opciones": [
    {
     "texto": "Sí — el curador ha sido removido o ha fallecido",
     "tono": "t-ok",
     "destino": "postulacion"
    },
    {
     "texto": "No — hay que constituir la curatela",
     "tono": "t-aviso",
     "destino": "fin_curatela_originaria"
    }
   ]
  },
  "fin_curatela_originaria": {
   "fase": 0,
   "titulo": "Fuera del ámbito — Constitución de la curatela",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La curatela no se constituye por este expediente, sino en el procedimiento de provisión de medidas judiciales de apoyo: el expediente de jurisdicción voluntaria de los arts. 42 bis a) a 42 bis c) LJV o, si en él hay oposición o no puede resolverse, el proceso de los arts. 756 y ss. LEC."
    },
    {
     "tipo": "nota",
     "texto": "Si después hubiera que sustituir al curador removido o fallecido, se aplica este expediente (art. 44.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 44.2 LJV · Arts. 42 bis a)–c) LJV · Art. 756 LEC"
    }
   ],
   "fin": "warning"
  },
  "testimonio_juzgado": {
   "fase": 0,
   "titulo": "Testimonio del expediente de otro Juzgado (art. 43.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El órgano que conoció del expediente de tutela, curatela o guarda de hecho es competente para las incidencias, trámites, medidas y revisiones posteriores mientras la persona resida en la misma circunscripción. Si reside en otra, para conocer de la incidencia hay que pedir testimonio completo del expediente al Juzgado que conoció antes."
    },
    {
     "tipo": "plazo",
     "texto": "El Juzgado anterior lo remite en los diez días siguientes a la solicitud (art. 43.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 43.2 LJV"
    }
   ],
   "siguiente": "incidencias_menu"
  },
  "postulacion": {
   "fase": 0,
   "titulo": "Postulación",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En la constitución de la tutela y en el nombramiento de nuevo curador no es preceptiva la intervención de abogado ni de procurador; las partes que lo deseen pueden actuar asistidas o representadas (arts. 3.2 y 43.3 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Abogado preceptivo (art. 43.3 LJV)",
     "items": [
      "Remoción del tutor o curador (art. 49 LJV)",
      "Extinción de poderes preventivos (art. 51 bis LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "En todo caso, abogado y procurador para los recursos de revisión y apelación contra la resolución definitiva y desde que se formule oposición (art. 3.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 3.2 y 43.3 LJV"
    }
   ],
   "siguiente": "ambito_aplicacion"
  },
  "ambito_aplicacion": {
   "fase": 1,
   "titulo": "Ámbito de aplicación (art. 44)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La sección 2.ª del capítulo IV se aplica a los expedientes relativos a la tutela y la curatela (art. 44.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Tutela: la constitución de la tutela de los menores del art. 199 CC se hace por expediente de jurisdicción voluntaria (art. 208 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Curatela: el expediente del art. 45 solo procede para nombrar un nuevo curador en sustitución de otro removido o fallecido, tras un proceso de provisión de apoyos (art. 44.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 44 LJV · Arts. 199 y 208 CC"
    }
   ],
   "siguiente": "solicitud"
  },
  "solicitud": {
   "fase": 1,
   "titulo": "Solicitud, admisión y citación (art. 45.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Promueven el expediente el Ministerio Fiscal o cualquiera de las personas legalmente indicadas para promover la tutela o curatela (art. 45.1 LJV). En la tutela, están obligados a promoverla los parientes llamados a ella y quien tenga la guarda del menor; cualquier persona puede poner el hecho en conocimiento del Fiscal o de la autoridad judicial (arts. 206 y 207 CC). En el desamparo, también la entidad pública (art. 222 CC)."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido y documentos de la solicitud (art. 45.1 LJV)",
     "items": [
      "El hecho que da lugar a la tutela o curatela",
      "Documentos que acrediten la legitimación del promotor",
      "Parientes más próximos de la persona y sus domicilios",
      "Certificado de nacimiento de la persona",
      "En su caso, certificado de últimas voluntades de los progenitores y su testamento o documento público notarial sobre la tutela o curatela de sus hijos menores (art. 201 CC)",
      "En su caso, documento público notarial de la propia persona con discapacidad sobre su curatela u otras medidas de apoyo voluntarias (arts. 255 y 271 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El LAJ examina la competencia y los defectos (cinco días para subsanar), admite la solicitud y cita a la comparecencia; si no es admisible, da cuenta al Juez, que decide (arts. 2.3, 16 y 17.1 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Citación con al menos quince días de antelación; comparecencia dentro de los treinta días siguientes a la admisión (arts. 17.3 y 18.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.1 LJV · Arts. 16 a 18 LJV · Arts. 201, 206, 207, 222, 255 y 271 CC"
    }
   ],
   "siguiente": "comparecencia"
  },
  "comparecencia": {
   "fase": 2,
   "titulo": "Comparecencia (art. 45.2)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Se oye en la comparecencia (art. 45.2 LJV)",
     "items": [
      "Al promotor",
      "A la persona cuya designación se proponga, si es distinta del promotor",
      "A aquel cuya tutela o curatela se pretenda constituir, si es mayor de doce años, o al menor de esa edad con suficiente madurez",
      "A los parientes más próximos",
      "Al Ministerio Fiscal",
      "A cuantas personas se considere oportuno"
     ],
     "marcar": true
    },
    {
     "tipo": "info",
     "texto": "El Juez y el Fiscal actúan de oficio en interés del menor y respetando la voluntad, deseos y preferencias de la persona con discapacidad en lo que conste, y adoptan y proponen las medidas, diligencias, informes periciales y pruebas que estimen oportunas (art. 45.2, párrafo segundo, LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia sigue los trámites de la vista del juicio verbal con las especialidades del art. 18 LJV; se garantiza la intervención de las personas con discapacidad con los ajustes del art. 7 bis LJV."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.2 LJV · Arts. 7 bis y 18 LJV · Art. 9 LO 1/1996"
    }
   ],
   "siguiente": "designacion"
  },
  "designacion": {
   "fase": 2,
   "titulo": "Designación de tutor o curador (art. 45.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez designa tutor o curador a persona o personas determinadas conforme al Código Civil (art. 45.3 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Tutela: orden de preferencia (art. 213 CC)",
     "items": [
      "1.º La persona o personas designadas por los progenitores en testamento o documento público notarial (art. 201 CC), que vinculan salvo que el interés superior del menor exija otra cosa (art. 202 CC)",
      "2.º El ascendiente o hermano que designe la autoridad judicial",
      "Excepcionalmente, en resolución motivada, puede alterarse el orden o prescindirse de todos si el interés superior del menor lo exige; en su defecto, la persona más idónea (art. 214 CC)",
      "También pueden ser tutores las fundaciones y personas jurídicas sin ánimo de lucro que tengan entre sus fines la protección de menores (art. 212 CC); inhabilidades, arts. 216 y 217 CC"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Curatela: orden de preferencia (art. 276 CC)",
     "items": [
      "Quien haya propuesto la propia persona o la persona en quien haya delegado (arts. 271–274 CC), salvo las circunstancias del art. 272, párrafo segundo",
      "En defecto de propuesta: 1.º cónyuge o pareja de hecho conviviente · 2.º hijo o descendiente · 3.º progenitor o ascendiente · 4.º quien hayan dispuesto el cónyuge, la pareja conviviente o los progenitores en testamento o documento público · 5.º el guardador de hecho · 6.º hermano, pariente o allegado conviviente · 7.º persona jurídica del art. 275.1",
      "El orden puede alterarse oída la persona; inhabilidades, art. 275.2 y 3 CC"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Varios tutores o curadores: arts. 218 a 221 y 277 CC (por ejemplo, separar el cuidado de la persona y la administración de los bienes)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.3 LJV · Arts. 201, 202, 212–221 CC (tutela) · Arts. 271–277 CC (curatela)"
    }
   ],
   "siguiente": "fiscalizacion"
  },
  "fiscalizacion": {
   "fase": 2,
   "titulo": "Medidas de fiscalización, vigilancia y control (art. 45.4)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En la resolución de nombramiento se adoptan las medidas de fiscalización establecidas por los progenitores en testamento o documento público notarial, o por el propio afectado en documento público notarial, salvo que sea otro el interés de la persona afectada (art. 45.4 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Además, el Juez puede acordar (art. 45.4, párrafo segundo, LJV; arts. 210 y 270 CC)",
     "items": [
      "Las medidas de vigilancia y control oportunas",
      "Que el tutor o curador informe sobre la situación personal del menor o de la persona con discapacidad y el estado de la administración de sus bienes"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Si se adoptan en resolución posterior, se oye antes al tutor o curador, al menor con suficiente madurez y, en todo caso, si es mayor de doce años, a la persona respecto de la que se constituye la curatela y al Ministerio Fiscal (art. 45.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La tutela se ejerce bajo la vigilancia del Ministerio Fiscal (art. 209 CC); en la curatela, el Fiscal puede recabar en cualquier momento la información que considere necesaria (art. 270 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.4 LJV · Arts. 201, 209, 210 y 270 CC"
    }
   ],
   "siguiente": "fianza"
  },
  "fianza": {
   "fase": 2,
   "titulo": "Fianza (art. 45.5)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En la resolución que constituya la tutela o curatela, o en otra posterior, el Juez puede exigir al tutor o curador, de modo excepcional, fianza que asegure el cumplimiento de sus obligaciones, y determina su modalidad y cuantía (art. 45.5 LJV; art. 284 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Después puede, de oficio o a instancia de parte, dejarla sin efecto o modificarla, oídos el tutor o curador, la persona con discapacidad, el menor con suficiente madurez y, en todo caso, si es mayor de doce años, y el Ministerio Fiscal (art. 45.5, párrafo segundo, LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.5 LJV · Art. 284 CC (y art. 224 CC para la tutela)"
    }
   ],
   "pregunta": "¿Exige el Juez fianza?",
   "opciones": [
    {
     "texto": "Sí — se exige fianza",
     "tono": "t-plazo",
     "destino": "resolucion_con_fianza"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "resolucion"
    }
   ]
  },
  "resolucion_con_fianza": {
   "fase": 2,
   "titulo": "Resolución con fianza",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez nombra tutor o curador, adopta las medidas de fiscalización procedentes y exige fianza, con su modalidad y cuantía (art. 45.4 y 5 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Firme la resolución, el designado presta la fianza; el Juez la declara suficiente y acuerda las inscripciones, depósitos, medidas o diligencias convenientes para su eficacia y la conservación de los bienes (art. 46.1 y 2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 45.4, 45.5 y 46.2 LJV"
    }
   ],
   "siguiente": "recurso_apelacion"
  },
  "resolucion": {
   "fase": 2,
   "titulo": "Resolución de nombramiento",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez nombra tutor o curador por auto, con las medidas de fiscalización procedentes (art. 45.3 y 4 LJV), en los cinco días siguientes a la comparecencia (art. 19.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 19.1 y 45 LJV"
    }
   ],
   "siguiente": "recurso_apelacion"
  },
  "recurso_apelacion": {
   "fase": 2,
   "titulo": "Recurso de apelación (art. 45.6)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolución es recurrible en apelación, sin efectos suspensivos (art. 45.6 LJV). Mientras se sustancia el recurso, e incluso si se instara un proceso ordinario posterior sobre el mismo objeto, el tutor o curador electo queda a cargo del cuidado del menor o persona con discapacidad y de la administración de su caudal, bajo las garantías que parezcan suficientes al Juez."
    },
    {
     "tipo": "plazo",
     "texto": "Veinte días desde la notificación, ante la Audiencia Provincial, con abogado y procurador (art. 458.1 LEC; arts. 3.2 y 20.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 3.2, 20.2 y 45.6 LJV · Arts. 458 y 461 LEC"
    }
   ],
   "pregunta": "¿Se interpone recurso de apelación?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-aviso",
     "destino": "tramitacion_apelacion"
    },
    {
     "texto": "No — la resolución queda firme",
     "tono": "t-ok",
     "destino": "fianza_comparecencia"
    }
   ]
  },
  "tramitacion_apelacion": {
   "fase": 2,
   "titulo": "Tramitación del recurso de apelación",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Trámite (arts. 458 y 461 LEC, tras el RDL 6/2023)",
     "items": [
      "El recurso se interpone ante la Audiencia Provincial, cuyo LAJ requiere al Juzgado la elevación de las actuaciones",
      "El LAJ del Juzgado remite los autos y emplaza a las partes no recurrentes para comparecer ante la Audiencia en diez días",
      "La Audiencia da traslado a las demás partes por diez días para oposición o impugnación y resuelve"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Durante el recurso, el electo sigue a cargo del cuidado y la administración (art. 45.6 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.6 LJV · Arts. 458 y 461 LEC"
    }
   ],
   "pregunta": "¿Resultado del recurso?",
   "opciones": [
    {
     "texto": "Se confirma la resolución",
     "tono": "t-ok",
     "destino": "fianza_comparecencia"
    },
    {
     "texto": "Se revoca",
     "tono": "t-aviso",
     "destino": "fin_revocacion"
    }
   ]
  },
  "fin_revocacion": {
   "fase": 2,
   "titulo": "Resolución revocada en apelación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial revoca la resolución. Se estará a lo que disponga, que puede llevar a un nuevo nombramiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20.2 LJV · Arts. 455 y ss. LEC"
    }
   ],
   "fin": "warning"
  },
  "fianza_comparecencia": {
   "fase": 3,
   "titulo": "Citación para fianza, aceptación o excusa (art. 46.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Firme la resolución, se cita al designado para que comparezca a fin de prestar la fianza, si se exigió, y aceptar el cargo o formular excusa (art. 46.1 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Quince días para comparecer (art. 46.1 LJV). La excusa se alega en los quince días siguientes a conocer el nombramiento (art. 50.1 LJV; art. 279 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Prestada la fianza, el Juez la declara suficiente y acuerda las inscripciones, depósitos, medidas o diligencias convenientes (art. 46.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 46.1, 46.2 y 50.1 LJV · Art. 279 CC"
    }
   ],
   "pregunta": "¿El designado acepta el cargo o formula excusa?",
   "opciones": [
    {
     "texto": "Acepta el cargo",
     "tono": "t-ok",
     "destino": "aceptacion_cargo"
    },
    {
     "texto": "Formula excusa",
     "tono": "t-aviso",
     "destino": "excusa_plazo"
    }
   ]
  },
  "aceptacion_cargo": {
   "fase": 3,
   "titulo": "Aceptación y posesión del cargo (art. 46.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Practicadas las diligencias acordadas, el nombrado acepta en acta otorgada ante el LAJ la obligación de cumplir los deberes de su cargo conforme a las leyes; el LAJ le da posesión, le confiere las facultades establecidas en la resolución judicial y le entrega certificación de esta (art. 46.3 LJV; art. 282 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 46.3 LJV · Art. 282 CC"
    }
   ],
   "siguiente": "inscripcion_registral"
  },
  "inscripcion_registral": {
   "fase": 3,
   "titulo": "Comunicación al Registro Civil (art. 46.5)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado remite al Registro Civil testimonio de la resolución dictada y del acta de posesión del cargo (art. 46.5 LJV). Las resoluciones judiciales sobre cargos tutelares y medidas de apoyo se inscriben en el Registro Civil (art. 300 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 46.5 LJV · Art. 22.2 LJV · Art. 300 CC"
    }
   ],
   "pregunta": "¿Es el nombrado tutor o administrador de los bienes (o curador con facultades representativas)?",
   "opciones": [
    {
     "texto": "Sí — debe presentar inventario",
     "tono": "t-plazo",
     "destino": "inventario_req"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "ejercicio_cargo"
    }
   ]
  },
  "inventario_req": {
   "fase": 4,
   "titulo": "Requerimiento de inventario (art. 46.4)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al nombrado tutor o administrador de los bienes, el LAJ le requiere para que presente el inventario de los bienes de la persona afectada (art. 46.4 LJV). El curador con facultades representativas también debe hacerlo (art. 285 CC)."
    },
    {
     "tipo": "plazo",
     "texto": "Sesenta días (art. 46.4 LJV; desde la toma de posesión, art. 285 CC). El LAJ puede prorrogarlo si hay causa (art. 285 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Hasta que se apruebe el inventario, la persona nombrada queda a cargo del cuidado del menor o persona con discapacidad y de la administración de su caudal, bajo las garantías que parezcan suficientes al Juez (art. 46.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El dinero, alhajas, objetos preciosos y valores o documentos que, a juicio del LAJ, no deban quedar en poder del curador se depositan en un establecimiento destinado a ello (art. 285 CC). Si el curador no incluye sus créditos contra la persona, se entiende que renuncia a ellos (art. 286 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 46.4 LJV · Arts. 224, 285 y 286 CC"
    }
   ],
   "siguiente": "formacion_inventario"
  },
  "formacion_inventario": {
   "fase": 4,
   "titulo": "Presentación y formación del inventario (art. 47.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador presenta, dentro del plazo, el inventario con la relación de los bienes del afectado y las escrituras, documentos y papeles de importancia que se encuentren (art. 47.1 LJV)."
    },
    {
     "tipo": "info",
     "texto": "El LAJ fija día y hora para su formación y cita a los interesados, a las personas afectadas con suficiente madurez y, en todo caso, al menor mayor de doce años, y al Ministerio Fiscal (art. 47.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 47.1 LJV"
    }
   ],
   "pregunta": "¿Se suscita controversia sobre la inclusión o exclusión de bienes?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-aviso",
     "destino": "controversia_inventario"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "aprobacion_inventario"
    }
   ]
  },
  "controversia_inventario": {
   "fase": 4,
   "titulo": "Controversia sobre el inventario (art. 47.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ cita a los interesados a una vista y la tramitación continúa por los trámites del juicio verbal; la formación del inventario se suspende hasta que se resuelva (art. 47.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La sentencia sobre la inclusión o exclusión de bienes deja a salvo los derechos de terceros (art. 47.2, párrafo segundo, LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 47.2 LJV · Arts. 437 y ss. LEC"
    }
   ],
   "siguiente": "aprobacion_inventario"
  },
  "aprobacion_inventario": {
   "fase": 4,
   "titulo": "Aprobación del inventario (art. 47.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si no hay oposición, o resuelta esta, el LAJ aprueba el inventario, y la persona designada procede a la administración en los términos de la resolución judicial (art. 47.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 47.3 LJV"
    }
   ],
   "siguiente": "ejercicio_cargo"
  },
  "ejercicio_cargo": {
   "fase": 5,
   "titulo": "Ejercicio del cargo",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tutor o curador ejerce su cargo conforme a la resolución judicial y al Código Civil, sometido a las medidas de fiscalización acordadas."
    },
    {
     "tipo": "lista",
     "titulo": "Obligaciones principales",
     "items": [
      "Tutor: velar por el menor, procurarle alimentos, educarlo, promover su inserción social, administrar su patrimonio con diligencia e informar anualmente a la autoridad judicial (art. 228 CC)",
      "Curador: mantener contacto personal con la persona, asistirla respetando su voluntad, deseos y preferencias y fomentar sus aptitudes (art. 282 CC)",
      "Presentar los informes y cuentas que establezcan la ley o la resolución (art. 51 LJV)",
      "El curador con funciones de representación necesita autorización judicial para los actos que determine la resolución y para los del art. 287 CC; a la tutela se aplican supletoriamente las normas de la curatela (art. 224 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La curatela es una medida de apoyo: atiende a la voluntad, deseos y preferencias de la persona (arts. 249 y 282 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 224, 228, 249, 282 y 287 CC · Art. 51 LJV"
    }
   ],
   "pregunta": "¿Qué incidencia se produce durante el ejercicio del cargo?",
   "opciones": [
    {
     "texto": "Solicitud de retribución",
     "tono": "t-nota",
     "destino": "retribucion"
    },
    {
     "texto": "Remoción del tutor o curador",
     "tono": "t-aviso",
     "destino": "remocion_legitimacion"
    },
    {
     "texto": "Excusa sobrevenida del tutor o curador",
     "tono": "t-aviso",
     "destino": "excusa_plazo"
    },
    {
     "texto": "Rendición de cuentas (periódica o final)",
     "tono": "t-plazo",
     "destino": "cuentas_periodicidad"
    },
    {
     "texto": "Extinción de poderes preventivos",
     "tono": "t-aviso",
     "destino": "extpoder_legitimacion"
    },
    {
     "texto": "Extinción de la tutela o curatela",
     "tono": "t-nota",
     "destino": "extincion_cargo"
    },
    {
     "texto": "Ninguna: el ejercicio sigue con normalidad",
     "tono": "t-ok",
     "destino": "fin_normal"
    }
   ]
  },
  "retribucion": {
   "fase": 5,
   "titulo": "Retribución del cargo (art. 48)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Firme la resolución que constituya la tutela, o dictada sentencia en el procedimiento de provisión de apoyos, si el tutor o curador solicita la retribución a que tiene derecho, el Juez la acuerda, fijando su importe y el modo de percibirla (art. 48.1 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Criterios (art. 48.1 LJV; arts. 229 y 281 CC)",
     "items": [
      "Complejidad y extensión de las funciones encomendadas",
      "Valor y rentabilidad de los bienes del interesado",
      "Que el patrimonio del menor o de la persona con discapacidad lo permita"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Antes, el Juez oye al solicitante, a la persona con discapacidad, al menor con suficiente madurez y, en todo caso, si es mayor de doce años, al Ministerio Fiscal y a cuantas personas considere oportuno; todos pueden proponer diligencias, informes periciales y pruebas (art. 48.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El auto se ejecuta sin perjuicio del recurso de apelación, que no tiene efectos suspensivos. El mismo procedimiento sirve para modificar o extinguir la retribución (art. 48 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 48 LJV · Arts. 229 y 281 CC"
    }
   ],
   "siguiente": "ejercicio_cargo"
  },
  "extincion_cargo": {
   "fase": 5,
   "titulo": "Extinción de la tutela o curatela",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "La tutela se extingue (art. 231 CC)",
     "items": [
      "Por la mayoría de edad, la emancipación o la concesión del beneficio de la mayoría de edad",
      "Por la adopción del menor",
      "Por muerte o declaración de fallecimiento del menor",
      "Si se originó por privación o suspensión de la patria potestad, cuando su titular la recupere o desaparezca la causa que le impedía ejercerla de hecho"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "La curatela se extingue (art. 291 CC)",
     "items": [
      "De pleno derecho, por la muerte o declaración de fallecimiento de la persona",
      "Por resolución judicial, cuando ya no sea precisa o se adopte una forma de apoyo más adecuada"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Cuenta general justificada de la administración: tres meses desde el cese, prorrogables por el tiempo necesario si hay justa causa (arts. 232 y 292 CC; art. 51.4 LJV). La acción para exigirla prescribe a los cinco años desde que termina ese plazo."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 231, 232, 291 y 292 CC · Art. 51.4 LJV"
    }
   ],
   "siguiente": "rendicion_final"
  },
  "rendicion_final": {
   "fase": 5,
   "titulo": "Rendición final de cuentas (art. 51.4)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se sigue el trámite de la rendición de cuentas del art. 51: el LAJ traslada las cuentas; si alguien lo pide en diez días se celebra comparecencia; el Juez resuelve por auto (art. 51.2 a 4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Además, se oye, si procede, al nuevo tutor o curador y a los herederos del tutelado o asistido (art. 51.4 LJV; arts. 232 y 292 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "La aprobación judicial de las cuentas no impide las acciones que recíprocamente puedan asistir al tutor o curador y a la persona o sus causahabientes por razón del cargo (art. 51.5 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 LJV · Arts. 232 y 292 CC"
    }
   ],
   "pregunta": "¿Resultado del auto sobre las cuentas finales?",
   "opciones": [
    {
     "texto": "Cuentas aprobadas",
     "tono": "t-ok",
     "destino": "fin_cuentas_aprobadas"
    },
    {
     "texto": "Cuentas no aprobadas",
     "tono": "t-aviso",
     "destino": "fin_cuentas_desaprobadas"
    }
   ]
  },
  "fin_cuentas_aprobadas": {
   "fase": 5,
   "titulo": "Cuentas finales aprobadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez aprueba por auto la cuenta general. El saldo devenga el interés legal, a favor o en contra del tutor o curador (arts. 233 y 293 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "La aprobación no impide las acciones recíprocas por razón del cargo (art. 51.5 LJV; arts. 232 y 292 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.3 y 5 LJV · Arts. 232, 233, 292 y 293 CC"
    }
   ],
   "fin": "success"
  },
  "fin_cuentas_desaprobadas": {
   "fase": 5,
   "titulo": "Cuentas finales no aprobadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez no aprueba las cuentas. El tutor o curador responde de los daños que haya causado por su culpa o negligencia; la acción prescribe a los tres años desde la rendición final de cuentas (arts. 234 y 294 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.3 LJV · Arts. 234 y 294 CC"
    }
   ],
   "fin": "error"
  },
  "incidencias_menu": {
   "fase": 6,
   "titulo": "Incidencias del cargo ya constituido",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Incidencias de una tutela o curatela ya constituida. Las conoce el órgano que conoció del expediente si la persona sigue residiendo en la misma circunscripción (art. 43.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "En la remoción y en la extinción de poderes preventivos es preceptivo el abogado (art. 43.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 43, 48 a 51 bis LJV"
    }
   ],
   "pregunta": "¿Qué incidencia se tramita?",
   "opciones": [
    {
     "texto": "Remoción del tutor o curador",
     "tono": "t-aviso",
     "destino": "remocion_legitimacion"
    },
    {
     "texto": "Excusa del tutor o curador",
     "tono": "t-aviso",
     "destino": "excusa_plazo"
    },
    {
     "texto": "Rendición periódica de cuentas",
     "tono": "t-plazo",
     "destino": "cuentas_periodicidad"
    },
    {
     "texto": "Rendición final de cuentas por extinción",
     "tono": "t-plazo",
     "destino": "rendicion_final"
    },
    {
     "texto": "Extinción de poderes preventivos",
     "tono": "t-aviso",
     "destino": "extpoder_legitimacion"
    },
    {
     "texto": "La persona reside ahora en otra circunscripción: pedir testimonio (art. 43.2)",
     "tono": "t-nota",
     "destino": "testimonio_juzgado"
    }
   ]
  },
  "cuentas_periodicidad": {
   "fase": 6,
   "titulo": "Informes y rendición de cuentas (art. 51.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "De acuerdo con la legislación civil o con la resolución judicial, el tutor o curador presenta informes sobre la situación personal del menor o persona con discapacidad o rendiciones de cuentas (art. 51.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Tutor: informe anual sobre la situación del menor y rendición anual de cuentas (arts. 228 y 232 CC). Curador: la rendición periódica que le haya impuesto la autoridad judicial (art. 292 CC). El Juez puede exigir en cualquier momento informe sobre la situación personal o patrimonial (arts. 210 y 270 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.1 LJV · Arts. 210, 228, 232, 270 y 292 CC"
    }
   ],
   "pregunta": "¿Qué rendición se tramita?",
   "opciones": [
    {
     "texto": "Periódica (durante el ejercicio del cargo)",
     "tono": "t-plazo",
     "destino": "cuentas_periodica"
    },
    {
     "texto": "Final (por extinción o cese)",
     "tono": "t-nota",
     "destino": "rendicion_final"
    }
   ]
  },
  "cuentas_periodica": {
   "fase": 6,
   "titulo": "Rendición periódica (art. 51.2 y 3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Presentados los informes, el LAJ los traslada a la persona con discapacidad, al menor con suficiente madurez y, en todo caso, si es mayor de doce años, a quienes aparezcan como interesados en el expediente y al Ministerio Fiscal (art. 51.2 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Si alguno lo solicita en diez días, se cita a todos a una comparecencia, en la que se pueden proponer de oficio o a instancia de parte diligencias y pruebas (art. 51.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El Juez puede ordenar de oficio, a costa del patrimonio del tutelado o asistido, una pericial contable o de auditoría, aunque nadie pida la comparecencia, si el informe describe operaciones complejas o que requieran justificación técnica (art. 51.2, párrafo segundo, LJV)."
    },
    {
     "tipo": "info",
     "texto": "Celebrada o no la comparecencia, el Juez resuelve por auto sobre los informes y la rendición de cuentas (art. 51.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.2 y 3 LJV"
    }
   ],
   "pregunta": "¿Resultado del auto?",
   "opciones": [
    {
     "texto": "Cuentas aprobadas",
     "tono": "t-ok",
     "destino": "fin_cuentas_periodicas_ok"
    },
    {
     "texto": "Cuentas no aprobadas",
     "tono": "t-aviso",
     "destino": "fin_cuentas_observadas"
    }
   ]
  },
  "fin_cuentas_periodicas_ok": {
   "fase": 6,
   "titulo": "Cuentas periódicas aprobadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez aprueba por auto los informes y la rendición de cuentas. El tutor o curador sigue en el cargo con las medidas de fiscalización acordadas."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.3 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_cuentas_observadas": {
   "fase": 6,
   "titulo": "Cuentas periódicas no aprobadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez no aprueba las cuentas. Puede acordar las medidas de vigilancia y control oportunas (art. 45.4 LJV; arts. 210 y 270 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "Si hay incumplimiento de los deberes del cargo, puede promoverse la remoción (art. 49 LJV; arts. 223 y 278 CC); el tutor o curador responde de los daños causados por su culpa o negligencia (arts. 234 y 294 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.3 LJV · Arts. 210, 223, 234, 270, 278 y 294 CC"
    }
   ],
   "fin": "warning"
  },
  "remocion_legitimacion": {
   "fase": 6,
   "titulo": "Remoción — Legitimación y causas (art. 49.1)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En los casos previstos por la legislación civil, se puede acordar la remoción del tutor o curador de oficio o a solicitud del Ministerio Fiscal, del tutelado, del sujeto a curatela o de otra persona interesada (art. 49.1 LJV). El menor con suficiente madurez puede pedirla (art. 223 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "Abogado preceptivo (art. 43.3 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Causas (art. 278 CC; para la tutela, art. 223 CC)",
     "items": [
      "Incurrir después del nombramiento en una causa legal de inhabilidad (arts. 216, 217 y 275 CC)",
      "Conducirse mal en el desempeño, por incumplimiento de los deberes del cargo o notoria ineptitud",
      "Problemas de convivencia graves y continuados con la persona a la que se presta apoyo"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 49.1 LJV · Art. 43.3 LJV · Arts. 223 y 278 CC"
    }
   ],
   "siguiente": "remocion_comparecencia"
  },
  "remocion_comparecencia": {
   "fase": 6,
   "titulo": "Comparecencia de remoción (art. 49)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Se oye (art. 49.1 LJV)",
     "items": [
      "Al tutor o curador",
      "A las personas que puedan sustituirle en el cargo",
      "A la persona con discapacidad",
      "Al menor con suficiente madurez y, en todo caso, si es mayor de doce años",
      "Al Ministerio Fiscal"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Durante la tramitación, el Juez puede suspender al tutor o curador en sus funciones, y el LAJ nombra al tutelado o sujeto a curatela un defensor judicial (art. 49.2 LJV; arts. 27 a 32 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 49.1 y 2 LJV · Arts. 27–32 LJV · Art. 278 CC"
    }
   ],
   "pregunta": "¿Se formula oposición a la remoción?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "remocion_sin_oposicion"
    },
    {
     "texto": "Sí — el expediente se hace contencioso",
     "tono": "t-aviso",
     "destino": "remocion_contencioso"
    }
   ]
  },
  "remocion_sin_oposicion": {
   "fase": 6,
   "titulo": "Resolución sin oposición (art. 49.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez acuerda lo procedente por auto. Si acuerda la remoción, nombra nuevo tutor o curador conforme a la legislación civil y remite la comunicación al Registro Civil (art. 49.3 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El removido debe rendir la cuenta general de su administración (arts. 232 y 292 CC; art. 51.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 49.3 LJV · Arts. 223, 232, 278 y 292 CC"
    }
   ],
   "pregunta": "¿Acuerda el Juez la remoción?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "nuevo_nombramiento"
    },
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "fin_no_remocion"
    }
   ]
  },
  "remocion_contencioso": {
   "fase": 6,
   "titulo": "Remoción con oposición — juicio verbal (art. 49.1)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "Si se suscita oposición, el expediente se hace contencioso y el LAJ cita a los interesados a una vista; la tramitación sigue por el juicio verbal (art. 49.1, párrafo segundo, LJV)."
    },
    {
     "tipo": "info",
     "texto": "Termina por sentencia, recurrible en apelación en veinte días (art. 458.1 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 49.1 LJV · Arts. 437 y ss. y 458 LEC"
    }
   ],
   "pregunta": "¿Resultado?",
   "opciones": [
    {
     "texto": "Procede la remoción",
     "tono": "t-ok",
     "destino": "nuevo_nombramiento"
    },
    {
     "texto": "No procede",
     "tono": "t-nota",
     "destino": "fin_no_remocion"
    }
   ]
  },
  "nuevo_nombramiento": {
   "fase": 6,
   "titulo": "Nombramiento de nuevo tutor o curador",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Declarada la remoción, se nombra nuevo tutor o curador conforme al Código Civil y se comunica al Registro Civil (art. 49.3 LJV; arts. 223 y 278 CC)."
    },
    {
     "tipo": "nota",
     "texto": "El nuevo tutor o curador sigue los trámites de fianza, aceptación, posesión e inventario (arts. 46 y 47 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 49.3 LJV · Arts. 213, 214, 223, 276 y 278 CC"
    }
   ],
   "fin": "success"
  },
  "fin_no_remocion": {
   "fase": 6,
   "titulo": "No procede la remoción",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tutor o curador sigue en el cargo; si había sido suspendido, recupera sus funciones y cesa el defensor judicial nombrado durante la tramitación (art. 49.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Firme la resolución, no puede iniciarse otro expediente sobre idéntico objeto salvo que cambien las circunstancias (art. 19.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 19.3 y 49 LJV"
    }
   ],
   "fin": "neutral"
  },
  "excusa_plazo": {
   "fase": 6,
   "titulo": "Excusa — Plazo (art. 50.1)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si concurre alguna causa de excusa prevista en el Código Civil, el tutor o curador debe alegarla dentro de los quince días siguientes a conocer el nombramiento (art. 50.1 LJV; art. 279 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Si el motivo sobreviene durante el ejercicio, puede alegarse en cualquier momento (art. 50.1 LJV; art. 279 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 50.1 LJV · Arts. 223 y 279 CC"
    }
   ],
   "siguiente": "excusa_causas"
  },
  "excusa_causas": {
   "fase": 6,
   "titulo": "Causas de excusa (art. 279 CC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Causas (art. 279 CC; para la tutela, art. 223 CC)",
     "items": [
      "Que el desempeño resulte excesivamente gravoso o entrañe grave dificultad para la persona nombrada",
      "Personas jurídicas privadas: carecer de medios suficientes o que las condiciones de ejercicio no sean acordes con sus fines estatutarios"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "No hay causa de excusa cuando el desempeño de los apoyos se ha encomendado a una entidad pública (art. 281 CC)."
    },
    {
     "tipo": "aviso",
     "texto": "Mientras se resuelve, quien se excusa está obligado a ejercer la función; si no lo hace, se nombra un defensor que le sustituya, y responde de los gastos ocasionados por la excusa si es rechazada (art. 50.3 LJV; art. 279 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 50.3 LJV · Arts. 223, 279 y 281 CC"
    }
   ],
   "siguiente": "excusa_comparecencia"
  },
  "excusa_comparecencia": {
   "fase": 6,
   "titulo": "Comparecencia de excusa (art. 50.2)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Se oye necesariamente (art. 50.2 LJV)",
     "items": [
      "A la persona que se excusa",
      "A la que le vaya a sustituir en el cargo",
      "Al afectado con suficiente madurez y, en todo caso, al menor mayor de doce años",
      "Al Ministerio Fiscal"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 50.2 LJV"
    }
   ],
   "pregunta": "¿Se admite la excusa?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "excusa_admitida"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "excusa_rechazada"
    }
   ]
  },
  "excusa_admitida": {
   "fase": 6,
   "titulo": "Excusa admitida (art. 50.4)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida la excusa, se nombra nuevo tutor o curador y se remite, en su caso, la comunicación al Registro Civil (art. 50.4 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El curador nombrado por disposición testamentaria que se excuse pierde lo que el testador le dejó en consideración al nombramiento (art. 280 CC)."
    },
    {
     "tipo": "nota",
     "texto": "El nuevo tutor o curador sigue los trámites del art. 46 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Art. 50.4 LJV · Arts. 279 y 280 CC"
    }
   ],
   "fin": "success"
  },
  "excusa_rechazada": {
   "fase": 6,
   "titulo": "Excusa rechazada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tutor o curador sigue obligado a ejercer el cargo. Si no lo ejerció durante la tramitación, responde de los gastos ocasionados por la excusa (art. 50.3 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "El incumplimiento de los deberes del cargo es causa de remoción (art. 278 CC; art. 49 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 49 y 50.3 LJV · Art. 278 CC"
    }
   ],
   "fin": "warning"
  },
  "extpoder_legitimacion": {
   "fase": 6,
   "titulo": "Extinción de poderes preventivos (art. 51 bis.1)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los poderes preventivos son los que la persona otorga en escritura pública para que subsistan si en el futuro precisa apoyo, o solo para ese supuesto (arts. 256, 257 y 260 CC)."
    },
    {
     "tipo": "info",
     "texto": "Pueden pedir su extinción cualquier persona legitimada para instar el procedimiento de provisión de apoyos (la propia persona, su cónyuge o pareja de hecho, descendientes, ascendientes o hermanos, y el Fiscal) y el curador, si lo hay, cuando en el apoderado concurra alguna causa de remoción del curador (art. 51 bis.1 LJV; arts. 258 y 278 CC; art. 42 bis a).3 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Abogado preceptivo (art. 43.3 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "No procede si el poderdante hubiera previsto otra cosa (art. 258 CC, párrafo cuarto)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 bis.1 LJV · Arts. 256–262 y 278 CC · Art. 43.3 LJV"
    }
   ],
   "siguiente": "extpoder_comparecencia"
  },
  "extpoder_comparecencia": {
   "fase": 6,
   "titulo": "Comparecencia (art. 51 bis.2)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida la solicitud, se cita a la comparecencia al solicitante, al apoderado, a la persona con discapacidad que precise apoyo y al Ministerio Fiscal (art. 51 bis.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Si se suscita oposición, el expediente se hace contencioso y el LAJ cita a los interesados a una vista, que sigue los trámites del juicio verbal (art. 51 bis.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 bis.2 LJV · Art. 7 bis LJV"
    }
   ],
   "pregunta": "¿Se formula oposición?",
   "opciones": [
    {
     "texto": "No — el Juez resuelve",
     "tono": "t-ok",
     "destino": "extpoder_resolucion"
    },
    {
     "texto": "Sí — juicio verbal",
     "tono": "t-aviso",
     "destino": "extpoder_oposicion"
    }
   ]
  },
  "extpoder_oposicion": {
   "fase": 6,
   "titulo": "Extinción con oposición — juicio verbal",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El expediente se hace contencioso: el LAJ cita a los interesados a una vista y la tramitación sigue por el juicio verbal (art. 51 bis.2 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Apelación contra la sentencia: veinte días (art. 458.1 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 bis.2 LJV · Arts. 437 y ss. y 458 LEC"
    }
   ],
   "pregunta": "¿Resultado?",
   "opciones": [
    {
     "texto": "Se acuerda la extinción",
     "tono": "t-ok",
     "destino": "extpoder_resolucion"
    },
    {
     "texto": "Se deniega",
     "tono": "t-nota",
     "destino": "fin_extpoder_denegada"
    }
   ]
  },
  "extpoder_resolucion": {
   "fase": 6,
   "titulo": "Poderes preventivos extinguidos",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolución declara extinguidos los poderes preventivos: el apoderado deja de poder actuar con ellos."
    },
    {
     "tipo": "nota",
     "texto": "Los poderes preventivos constan en el Registro Civil (art. 260 CC): se expide testimonio de la resolución para su constancia (art. 22.2 LJV; art. 300 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Si la persona necesita apoyo, puede promoverse la provisión de medidas judiciales (arts. 42 bis a) y ss. LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 bis LJV · Arts. 258 y 260 CC · Art. 22.2 LJV"
    }
   ],
   "fin": "success"
  },
  "fin_extpoder_denegada": {
   "fase": 6,
   "titulo": "Extinción denegada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los poderes preventivos siguen vigentes."
    },
    {
     "tipo": "nota",
     "texto": "Firme la resolución, no puede iniciarse otro expediente sobre idéntico objeto salvo que cambien las circunstancias (art. 19.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 bis LJV · Art. 19.3 LJV"
    }
   ],
   "fin": "neutral"
  },
  "guarda_concepto": {
   "fase": 7,
   "titulo": "Guarda de hecho (art. 52)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La guarda de hecho es una medida informal de apoyo, que puede existir cuando no haya medidas voluntarias o judiciales que se estén aplicando eficazmente (arts. 250 y 263 CC). Las medidas judiciales solo proceden a falta de guarda de hecho que suponga apoyo suficiente (art. 255 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Guarda de hecho del menor: arts. 237 y 238 CC. De la persona con discapacidad: arts. 263 a 267 CC."
    },
    {
     "tipo": "lista",
     "titulo": "Pueden instar el requerimiento (art. 52.1 LJV; art. 265 CC)",
     "items": [
      "El Ministerio Fiscal",
      "La persona que precise medidas de apoyo",
      "Cualquiera que tenga un interés legítimo",
      "La autoridad judicial, de oficio (art. 265 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 52 LJV · Arts. 237, 238, 250, 255 y 263–267 CC"
    }
   ],
   "siguiente": "guarda_requerimiento"
  },
  "guarda_requerimiento": {
   "fase": 7,
   "titulo": "Requerimiento al guardador (art. 52.1)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La autoridad judicial que tenga conocimiento de un guardador de hecho puede requerirle para que informe de la situación de la persona y bienes del menor o de la persona con discapacidad y de su actuación en relación con ellos (art. 52.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "También puede exigirle en cualquier momento que rinda cuentas de su actuación y establecer las salvaguardias que estime necesarias (art. 265 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 52.1 LJV · Arts. 237 y 265 CC"
    }
   ],
   "siguiente": "guarda_medidas"
  },
  "guarda_medidas": {
   "fase": 7,
   "titulo": "Medidas de control y autorizaciones (art. 52.2 y 3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez puede establecer las medidas de control y de vigilancia que estime oportunas, previa comparecencia a la que se cita a la persona a quien afecte la guarda, al guardador y al Ministerio Fiscal; en el caso de los menores, sin perjuicio de promover la constitución de la tutela si procede (art. 52.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Menores: mientras dure la guarda y hasta que se constituya la medida de protección adecuada, pueden otorgarse cautelarmente facultades tutelares a los guardadores o constituirse un acogimiento temporal (art. 237 CC)."
    },
    {
     "tipo": "info",
     "texto": "Cuando el guardador de una persona con discapacidad deba pedir autorización judicial —actuación representativa excepcional y, en todo caso, los actos del art. 287 CC—, la autoridad judicial entrevista por sí misma a la persona, puede pedir un informe pericial y puede citar a quien considere necesario oír (art. 52.3 LJV; art. 264 CC)."
    },
    {
     "tipo": "nota",
     "texto": "No hace falta autorización para pedir una prestación económica que no suponga un cambio significativo en la forma de vida de la persona, ni para actos sobre bienes de escasa relevancia económica y sin especial significado personal o familiar (art. 264 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 52.2 y 3 LJV · Arts. 237, 264 y 287 CC · Art. 7 bis LJV"
    }
   ],
   "pregunta": "¿Cómo sigue la guarda de hecho?",
   "opciones": [
    {
     "texto": "Se mantiene, con las medidas de control acordadas",
     "tono": "t-ok",
     "destino": "fin_guarda_mantenida"
    },
    {
     "texto": "Menor: se promueve la tutela",
     "tono": "t-nota",
     "destino": "fin_guarda_tutela"
    },
    {
     "texto": "Persona con discapacidad: se promueve la provisión de medidas judiciales de apoyo",
     "tono": "t-nota",
     "destino": "fin_guarda_curatela"
    }
   ]
  },
  "fin_guarda_mantenida": {
   "fase": 7,
   "titulo": "Guarda de hecho mantenida",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La guarda de hecho continúa con las medidas de control y vigilancia acordadas (art. 52.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Se extingue cuando la persona pida que el apoyo se organice de otro modo, desaparezcan las causas que la motivaron, el guardador desista o la autoridad judicial lo considere conveniente (art. 267 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 52 LJV · Art. 267 CC"
    }
   ],
   "fin": "success"
  },
  "fin_guarda_tutela": {
   "fase": 7,
   "titulo": "Se promueve la tutela del menor",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se promueve el expediente de constitución de la tutela (art. 52.2 LJV; arts. 199 y 208 CC), que sigue el art. 45 LJV: vuelva al inicio de esta guía."
    },
    {
     "tipo": "nota",
     "texto": "El guardador de hecho puede promover la privación o suspensión de la patria potestad, la remoción de la tutela o el nombramiento de tutor (art. 237.2 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 45 y 52.2 LJV · Arts. 199, 208 y 237 CC"
    }
   ],
   "fin": "success"
  },
  "fin_guarda_curatela": {
   "fase": 7,
   "titulo": "Se promueve la provisión de medidas judiciales de apoyo",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las medidas judiciales de apoyo, como la curatela, se acuerdan en el expediente de los arts. 42 bis a) a 42 bis c) LJV o, si hay oposición, en el proceso de los arts. 756 y ss. LEC."
    },
    {
     "tipo": "nota",
     "texto": "Si después hubiera que sustituir al curador removido o fallecido, se aplicaría el art. 45 LJV (art. 44.2)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 42 bis a)–c) y 44.2 LJV · Arts. 756 y ss. LEC · Arts. 268 y ss. CC"
    }
   ],
   "fin": "success"
  },
  "fin_normal": {
   "fase": 5,
   "titulo": "Ejercicio del cargo sin incidencias",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tutor o curador sigue ejerciendo el cargo. No hay actuaciones pendientes."
    },
    {
     "tipo": "nota",
     "texto": "Sigue obligado a presentar los informes y cuentas acordados, a pedir autorización judicial para los actos que la requieran y a cumplir las medidas de control (art. 51 LJV; arts. 228, 282 y 287 CC)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 48 y 51 LJV · Arts. 228, 282 y 287 CC"
    }
   ],
   "fin": "success"
  },
  "fin_error_incompetencia": {
   "fase": 0,
   "titulo": "Falta de competencia territorial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el LAJ entiende que el Juzgado carece de competencia territorial, como la decisión del expediente corresponde al Juez, le da cuenta, y este acuerda lo procedente tras oír al Ministerio Fiscal y al solicitante (arts. 2.3 y 16.3 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La remisión se hace al órgano que se considere competente: el del domicilio o, en su defecto, la residencia del menor o persona con discapacidad (art. 43.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 2.3, 16.3 y 43.1 LJV"
    }
   ],
   "fin": "error"
  }
 },
 "pie": "*Referencias normativas*<br>Arts. 2, 3, 16 a 22 y 43 a 52 LJV<br>Arts. 199 a 238 y 249 a 300 CC<br>Arts. 437, 458 y 461 LEC<br>Art. 86.5 LOPJ"
});

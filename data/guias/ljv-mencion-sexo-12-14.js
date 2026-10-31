/* Migrado por tools/migrate.js desde sources/actual/G07.json; revisado con el BOE (registro: docs/revision/ljv-mencion-sexo-12-14.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-mencion-sexo-12-14",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la aprobación judicial de la modificación de la mención registral del sexo de personas mayores de doce años y menores de catorce",
 "corto": "Mención registral del sexo (12 a 14 años)",
 "articulos": [
  "26 bis",
  "26 ter",
  "26 quater",
  "26 quinquies"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G07"
 },
 "fases": [
  "Verificación previa",
  "Iniciación",
  "Admisión",
  "Instrucción",
  "Resolución",
  "Efectos registrales"
 ],
 "actores": {
  "juez": "Juez",
  "rc": "Registro Civil",
  "solicitante": "Solicitante / Familia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Verificación de competencia territorial",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de presentar cualquier solicitud, verifique que el Juzgado de Primera Instancia ante el que se va a actuar es territorialmente competente conforme al artículo 26 ter.1 de la LJV. No cabe modificarla por sumisión expresa o tácita (art. 2.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Competencia objetiva: Juzgado de Primera Instancia; hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ) o, si no, la Sección Civil. Decide el Juez: afecta al estado civil y a un menor (art. 2.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 ter.1 LJV · Art. 2.2 y 2.3 LJV"
    }
   ],
   "pregunta": "¿Tiene la persona cuya mención registral se pretende rectificar domicilio en territorio español?",
   "opciones": [
    {
     "texto": "Sí — tiene domicilio en España",
     "tono": "t-ok",
     "destino": "domicilio_ok"
    },
    {
     "texto": "No — carece de domicilio en España",
     "tono": "t-plazo",
     "destino": "residencia_check"
    }
   ]
  },
  "residencia_check": {
   "fase": 0,
   "titulo": "Verificación de residencia en territorio nacional",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si la persona no tiene domicilio en España, la competencia territorial se determina subsidiariamente por su residencia en territorio nacional. El juzgado competente será el del lugar de residencia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 ter.1 LJV"
    }
   ],
   "pregunta": "¿Tiene la persona residencia en territorio español?",
   "opciones": [
    {
     "texto": "Sí — reside en España (sin domicilio)",
     "tono": "t-ok",
     "destino": "domicilio_ok"
    },
    {
     "texto": "No — carece tanto de domicilio como de residencia",
     "tono": "t-aviso",
     "destino": "fin_incompetencia"
    }
   ]
  },
  "domicilio_ok": {
   "fase": 0,
   "titulo": "Determinación del órgano competente",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado de Primera Instancia competente queda determinado. Identifique el partido judicial correspondiente al domicilio o, en su defecto, a la residencia del solicitante en España: ese es el órgano ante el que se presentará la solicitud."
    },
    {
     "tipo": "nota",
     "texto": "Si se presenta ante un juzgado sin competencia territorial, se remite al competente previa audiencia del Ministerio Fiscal y del solicitante (art. 16.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 ter.1 LJV · Arts. 2.2 y 16.3 LJV"
    }
   ],
   "siguiente": "edad_check"
  },
  "edad_check": {
   "fase": 0,
   "titulo": "Verificación del rango de edad del solicitante",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Capítulo I bis únicamente es aplicable a personas mayores de doce años y menores de catorce. Fuera de ese rango de edad, el procedimiento aplicable es diferente y este expediente no es el cauce adecuado."
    },
    {
     "tipo": "nota",
     "texto": "Por edades (art. 43 Ley 4/2023): mayores de dieciséis años, por sí mismos ante el Registro Civil; entre catorce y dieciséis, por sí mismos asistidos por sus representantes legales; entre doce y catorce, este expediente de aprobación judicial (Capítulo I bis LJV). La ley no prevé cauce para los menores de doce."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 bis LJV · Art. 43 Ley 4/2023"
    }
   ],
   "pregunta": "¿Es la persona solicitante mayor de doce años y menor de catorce?",
   "opciones": [
    {
     "texto": "Sí — tiene entre 12 y 14 años (exclusive)",
     "tono": "t-ok",
     "destino": "repr_check"
    },
    {
     "texto": "No — está fuera de ese rango de edad",
     "tono": "t-plazo",
     "destino": "fin_edad_incorrecta"
    }
   ]
  },
  "repr_check": {
   "fase": 0,
   "titulo": "Verificación de la representación legal",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En este rango de edad, el menor debe actuar asistido por sus representantes legales (progenitores o, en su caso, tutor, curador o persona designada para ejercer el apoyo). Verifique si los representantes están presentes y de acuerdo entre sí y con el menor para instar el expediente."
    },
    {
     "tipo": "nota",
     "texto": "El desacuerdo puede producirse en dos planos: (a) entre los propios progenitores o representantes legales entre sí, o (b) entre el menor y uno o todos sus representantes. En ambos supuestos el cauce es el mismo: nombramiento de defensor judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 ter.2 LJV · Arts. 235 y 236 CC"
    }
   ],
   "pregunta": "¿Están presentes y de acuerdo los representantes legales para asistir al menor en la solicitud?",
   "opciones": [
    {
     "texto": "Sí — representantes presentes y conformes",
     "tono": "t-ok",
     "destino": "discapacidad_check"
    },
    {
     "texto": "No — hay desacuerdo, conflicto o ausencia de representantes",
     "tono": "t-plazo",
     "destino": "repr_desacuerdo"
    }
   ]
  },
  "repr_desacuerdo": {
   "fase": 0,
   "titulo": "Desacuerdo o conflicto con los representantes legales",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando existe desacuerdo entre los progenitores o representante legal entre sí, o con la persona menor de edad, la ley prevé el nombramiento de un defensor judicial para que actúe en el expediente en interés del menor."
    },
    {
     "tipo": "aviso",
     "texto": "El nombramiento se tramita por el expediente de los arts. 27 y siguientes LJV."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 ter.2 LJV · Arts. 235 y 236 CC · Arts. 27 a 32 LJV"
    }
   ],
   "siguiente": "nombramiento_defensor"
  },
  "nombramiento_defensor": {
   "fase": 0,
   "titulo": "Expediente de nombramiento de defensor judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se tramita el expediente de nombramiento de defensor judicial (arts. 27 a 32 LJV), previo al de este capítulo. Lo resuelve el Letrado de la Administración de Justicia del domicilio o residencia del menor."
    },
    {
     "tipo": "lista",
     "titulo": "Trámites principales",
     "items": [
      "Solicitud ante el LAJ del domicilio o residencia del menor (art. 28 LJV)",
      "Comparecencia con el solicitante, los interesados, el Ministerio Fiscal y el menor si tiene suficiente madurez y, en todo caso, si es mayor de doce años (art. 30.1 LJV)",
      "Nombramiento del defensor judicial"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El defensor judicial actúa a los efectos de este expediente."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 27 a 32 LJV · Arts. 235 y 236 CC"
    }
   ],
   "siguiente": "discapacidad_check"
  },
  "discapacidad_check": {
   "fase": 0,
   "titulo": "Verificación: ¿es el menor una persona con discapacidad?",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si la persona menor que insta el expediente tiene discapacidad, deben disponerse en su favor las medidas de apoyo necesarias para garantizar su participación en condiciones de igualdad en todas las fases del procedimiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 ter.3 LJV · Art. 7 bis LJV"
    }
   ],
   "pregunta": "¿Es la persona solicitante una persona menor con discapacidad?",
   "opciones": [
    {
     "texto": "Sí — tiene discapacidad reconocida o aparente",
     "tono": "t-plazo",
     "destino": "medidas_apoyo"
    },
    {
     "texto": "No — no consta situación de discapacidad",
     "tono": "t-ok",
     "destino": "postulacion_info"
    }
   ]
  },
  "medidas_apoyo": {
   "fase": 0,
   "titulo": "Disposición de medidas de apoyo (art. 7 bis LJV)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El órgano judicial debe disponer las medidas de apoyo que el menor precise para participar en el procedimiento en igualdad de condiciones. Estas medidas se extienden a todas las fases y actuaciones procesales, incluidos los actos de comunicación."
    },
    {
     "tipo": "lista",
     "titulo": "Medidas de apoyo posibles (art. 7 bis LJV)",
     "items": [
      "Comunicaciones orales y escritas en lenguaje claro, sencillo y accesible, adaptado a las necesidades del menor (incluida lectura fácil)",
      "Comunicación también a la persona que preste apoyo al menor para el ejercicio de su capacidad jurídica",
      "Facilitación de asistencia o apoyos para que el menor pueda hacerse entender: interpretación en lenguas de signos reconocidas legalmente, medios de apoyo a la comunicación oral de personas sordas, con discapacidad auditiva y sordociegas",
      "Intervención de profesional experto como facilitador, para las tareas de adaptación y ajuste necesarias",
      "Derecho del menor a estar acompañado por una persona de su elección desde el primer contacto con las autoridades"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Las medidas pueden activarse de oficio por el Tribunal, a petición de parte o del Ministerio Fiscal. Las adaptaciones pueden referirse a la comunicación, la comprensión y la interacción con el entorno."
    },
    {
     "tipo": "ley",
     "texto": "Art. 7 bis LJV · Art. 26 ter.3 LJV"
    }
   ],
   "siguiente": "postulacion_info"
  },
  "postulacion_info": {
   "fase": 0,
   "titulo": "Postulación: abogado y procurador no preceptivos",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En este expediente no es preceptiva la intervención de abogado ni de procurador durante su tramitación ordinaria. El solicitante y sus representantes legales (o el defensor judicial, en su caso) pueden actuar directamente ante el Juzgado."
    },
    {
     "tipo": "nota",
     "texto": "Si el solicitante o su familia desean actuar voluntariamente asistidos por abogado y representados por procurador, pueden hacerlo (art. 3.2, párrafo primero, LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "EXCEPCIÓN IMPORTANTE: Si se formulase oposición o si se interpusiesen recursos de revisión o apelación contra la resolución definitiva, la intervención de abogado y procurador SÍ SERÁ PRECEPTIVA (art. 3.2, párrafo segundo, LJV). Informe de ello al solicitante desde el inicio."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 ter.4 LJV · Art. 3.2 LJV"
    }
   ],
   "siguiente": "solicitud_prep"
  },
  "solicitud_prep": {
   "fase": 1,
   "titulo": "Preparación de la solicitud",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente se inicia mediante solicitud escrita presentada ante el Juzgado de Primera Instancia competente. La solicitud debe contener todos los elementos exigidos por el artículo 26 quater de la LJV y venir acompañada de la documentación acreditativa."
    },
    {
     "tipo": "nota",
     "texto": "El expediente es de tramitación preferente (art. 26 quater.1 LJV): una vez presentada la solicitud, el Juzgado debe darle prioridad procedimental sobre otros asuntos ordinarios pendientes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.1 LJV"
    }
   ],
   "siguiente": "solicitud_contenido"
  },
  "solicitud_contenido": {
   "fase": 1,
   "titulo": "Contenido mínimo obligatorio de la solicitud",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Verifique que la solicitud incluye todos los elementos que configuran su contenido mínimo legal antes de presentarla al Juzgado."
    },
    {
     "tipo": "lista",
     "titulo": "Checklist de contenido de la solicitud (art. 26 quater.1 LJV)",
     "items": [
      "Identificación completa del solicitante: nombre, apellidos, fecha de nacimiento, DNI/NIE y datos de la inscripción registral",
      "Manifestación expresa y clara de disconformidad con el sexo mencionado en la inscripción de nacimiento",
      "Solicitud expresa de autorización judicial para la rectificación registral de la mención al sexo",
      "En su caso: solicitud adicional de modificación del nombre que consta en la inscripción de nacimiento",
      "Identificación del Registro Civil en el que consta la inscripción que se pretende rectificar (municipio, tomo y folio, si se dispone de ellos)",
      "Datos identificativos y de contacto de los representantes legales o del defensor judicial que asisten al menor",
      "Firma de la persona solicitante y de sus representantes legales o defensor judicial"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.1 LJV"
    }
   ],
   "siguiente": "documentacion_acred"
  },
  "documentacion_acred": {
   "fase": 1,
   "titulo": "Documentación acreditativa de la disconformidad estable",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud debe venir acompañada de cualesquiera medios documentales o testificales acreditativos de que la persona ha mantenido de forma estable su disconformidad con el sexo registrado. La ley no fija duración temporal mínima ni restringe el tipo de medios admisibles."
    },
    {
     "tipo": "aviso",
     "texto": "PROHIBICIÓN: No debe exigirse —ni aceptarse como condición de admisión— la aportación de informes médicos o psicológicos relativos a la identidad sexual. Tal exigencia sería contraria al art. 26 quinquies.2 LJV (prohibición absoluta de condicionantes medicalizados)."
    },
    {
     "tipo": "lista",
     "titulo": "Ejemplos de documentación acreditativa admisible (no exhaustivos)",
     "items": [
      "Documentos que reflejen el uso del nombre y sexo sentidos a lo largo del tiempo (correspondencia, escritos, registros escolares, etc.)",
      "Fotografías u otros materiales que ilustren la expresión de género mantenida establemente",
      "Declaraciones o testimonios escritos de personas del entorno familiar, educativo o social del menor",
      "Cualquier otra documentación que permita al Juez apreciar la estabilidad de la disconformidad"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Los testigos que comparezcan en el expediente pueden ser personas mayores de edad ligadas al solicitante por cualquier vínculo (parentesco, amistad, adopción, tutela, etc.) — art. 26 quater.4 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.2 y .4 LJV · Art. 26 quinquies.2 LJV"
    }
   ],
   "siguiente": "presentacion"
  },
  "presentacion": {
   "fase": 2,
   "titulo": "Presentación de la solicitud ante el Juzgado",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud, junto con toda la documentación acreditativa, se presenta en el Registro del Juzgado de Primera Instancia competente. A partir de su presentación, el Juez dispone del expediente y debe proceder a su examen de admisión con carácter preferente."
    },
    {
     "tipo": "nota",
     "texto": "Al no ser preceptiva la intervención de abogado ni procurador, la presentación puede realizarse directamente por el solicitante o sus representantes legales (o defensor judicial). Guarde justificante de la fecha de presentación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.1 LJV · Art. 26 ter.4 LJV"
    }
   ],
   "siguiente": "examen_formal"
  },
  "examen_formal": {
   "fase": 2,
   "titulo": "Examen formal de la solicitud por el Juez",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez examina si la solicitud cumple los requisitos que permiten su admisión a trámite: competencia territorial del juzgado, legitimación del solicitante, edad dentro del rango legal, asistencia de representantes legales o defensor judicial, y aportación de documentación mínima."
    },
    {
     "tipo": "nota",
     "texto": "Este examen es formal, no de fondo: el Juez no prejuzga si concederá o denegará la aprobación, sino únicamente si la solicitud puede ser tramitada."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 26 bis, 26 ter y 26 quater LJV"
    }
   ],
   "pregunta": "¿Cumple la solicitud los requisitos formales de admisión?",
   "opciones": [
    {
     "texto": "Sí — cumple todos los requisitos formales",
     "tono": "t-ok",
     "destino": "admision_auto"
    },
    {
     "texto": "No — presenta defectos subsanables o insubsanables",
     "tono": "t-plazo",
     "destino": "subsanacion"
    }
   ]
  },
  "subsanacion": {
   "fase": 2,
   "titulo": "Requerimiento de subsanación de defectos",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si la solicitud presenta defectos formales subsanables (documentación incompleta, insuficiente acreditación de la representación legal, falta de firma, etc.), el Juez requiere al solicitante para que los subsane en el plazo que se establezca. El plazo de subsanación es de cinco días (art. 16.4 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Si los defectos son insubsanables (incompetencia territorial o material del juzgado, solicitante claramente fuera del rango de edad, ausencia absoluta de legitimación), procede directamente la inadmisión sin trámite de subsanación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.4 LJV"
    }
   ],
   "pregunta": "¿Subsana el solicitante los defectos dentro del plazo concedido?",
   "opciones": [
    {
     "texto": "Sí — subsana correctamente en plazo",
     "tono": "t-ok",
     "destino": "admision_auto"
    },
    {
     "texto": "No — no subsana, subsana fuera de plazo, o defecto insubsanable",
     "tono": "t-aviso",
     "destino": "fin_inadmision"
    }
   ]
  },
  "admision_auto": {
   "fase": 2,
   "titulo": "Admisión a trámite — carácter preferente",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se admite a trámite la solicitud. El expediente queda calificado como de tramitación preferente y se procede a la siguiente fase: la citación de los interesados para la comparecencia."
    },
    {
     "tipo": "nota",
     "texto": "La admisión a trámite no prejuzga el fondo del asunto. No implica que vaya a concederse la aprobación judicial, sino únicamente que la solicitud cumple los requisitos formales exigidos para ser tramitada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.1 LJV"
    }
   ],
   "siguiente": "citacion"
  },
  "citacion": {
   "fase": 3,
   "titulo": "Citación de los interesados para comparecencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida a trámite la solicitud, el Juez procede a citar a todas las personas que deben comparecer en el expediente. Al tratarse de un expediente preferente, la citación debe tramitarse con la mayor celeridad posible."
    },
    {
     "tipo": "lista",
     "titulo": "Personas que deben ser citadas (art. 26 quater.2 LJV)",
     "items": [
      "La persona solicitante (el menor)",
      "Sus representantes legales (progenitores, tutor, defensor judicial en su caso)",
      "Las demás personas que el Juez estime oportuno citar",
      "El Ministerio Fiscal: citación preceptiva por imperativo del art. 4 LJV (interés de un menor + afectación al estado civil de la persona)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La citación del Ministerio Fiscal no es potestativa sino preceptiva: su intervención en el expediente es obligatoria por mandato legal (art. 4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.2 LJV · Art. 4 LJV"
    }
   ],
   "siguiente": "comparecencia"
  },
  "comparecencia": {
   "fase": 3,
   "titulo": "Celebración de la comparecencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En la comparecencia, el Juez oye a todas las personas citadas. El Ministerio Fiscal expone su posición. Los representantes legales (o el defensor judicial) asisten al menor. El Juez puede acordar en este acto la práctica de las pruebas que estime necesarias para resolver."
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia es el acto procesal central de la instrucción. El Juez dirige el acto con plena discrecionalidad sobre su desarrollo, velando en todo momento por el interés superior del menor."
    },
    {
     "tipo": "nota",
     "texto": "Los testigos que la parte proponga pueden estar ligados al solicitante por cualquier vínculo (parentesco, amistad, adopción, tutela, etc.) sin que ello afecte a su idoneidad (art. 26 quater.4 LJV). Los gastos de testigos y peritos son a cargo de quien los proponga (art. 7 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.2, .3 y .4 LJV · Art. 4 LJV · Art. 7 LJV"
    }
   ],
   "siguiente": "prueba_decision"
  },
  "prueba_decision": {
   "fase": 3,
   "titulo": "Decisión del Juez sobre la práctica de prueba adicional",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez puede solicitar la práctica de las pruebas que considere necesarias para acreditar la madurez del menor y la estabilidad de su voluntad de rectificar la mención registral. Esta facultad es potestativa y complementaria del art. 5 LJV (prueba de oficio cuando el expediente afecte a menores)."
    },
    {
     "tipo": "aviso",
     "texto": "PROHIBICIÓN ABSOLUTA (art. 26 quinquies.2 LJV): En ningún caso puede el Juez exigir como prueba —ni admitir como condición— la aportación de informes médicos o psicológicos relativos a la identidad sexual del menor, ni ningún tipo de modificación de su apariencia o función corporal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.3 LJV · Art. 5 LJV · Art. 26 quinquies.2 LJV"
    }
   ],
   "pregunta": "¿Acuerda el Juez la práctica de prueba adicional?",
   "opciones": [
    {
     "texto": "Sí — el Juez acuerda practicar prueba",
     "tono": "t-plazo",
     "destino": "practica_prueba"
    },
    {
     "texto": "No — el Juez no estima necesaria prueba adicional",
     "tono": "t-ok",
     "destino": "informacion_menor"
    }
   ]
  },
  "practica_prueba": {
   "fase": 3,
   "titulo": "Práctica de las pruebas acordadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se practican las pruebas acordadas por el Juez. Los gastos de testigos y peritos corren a cargo de quien los haya propuesto."
    },
    {
     "tipo": "lista",
     "titulo": "Idoneidad de los testigos (art. 26 quater.4 LJV)",
     "items": [
      "Todas las personas mayores de edad son idóneas como testigos en este expediente",
      "Aunque estén ligadas al solicitante por parentesco (consanguinidad o afinidad en cualquier grado)",
      "Aunque estén ligadas por vínculos de adopción, tutela o análogos",
      "Aunque estén ligadas por relación de amistad"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La amplitud de la capacidad testimonial responde a una opción legislativa deliberada: las personas más cercanas al menor son quienes mejor pueden testimoniar sobre la estabilidad de su disconformidad."
    },
    {
     "tipo": "plazo",
     "texto": "No hay plazo legal expreso para la práctica de la prueba, pero el carácter preferente del expediente impone la máxima celeridad posible."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.3 y .4 LJV · Art. 7 LJV"
    }
   ],
   "siguiente": "informacion_menor"
  },
  "informacion_menor": {
   "fase": 3,
   "titulo": "Cumplimiento de la obligación de información al menor",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez tiene la obligación legal de facilitar al menor determinada información en un lenguaje claro, accesible y adaptado a sus necesidades. Esta obligación es un derecho del menor y una garantía esencial del procedimiento. Su omisión podría constituir una infracción procedimental."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de la información que el Juez debe facilitar al menor (art. 26 quater.3 LJV)",
     "items": [
      "Consecuencias jurídicas de la rectificación solicitada: efectos sobre la documentación personal (DNI, pasaporte, expediente académico, tarjeta sanitaria), relaciones jurídicas en curso y cualquier otro ámbito afectado",
      "Toda la información complementaria que proceda sobre el alcance de la modificación registral",
      "Medidas de asistencia e información disponibles en los ámbitos sanitario, social, laboral, educativo y administrativo",
      "Medidas de protección contra la discriminación, promoción del respeto y fomento de la igualdad de trato",
      "Existencia de asociaciones y organizaciones de protección de los derechos en este ámbito a las que puede acudir"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Esta obligación garantiza que la decisión del menor sea libre, informada e independiente. Conecta con el art. 9 LO 1/1996 (derecho a ser oído e informado)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.3 LJV · Art. 9 LO 1/1996"
    }
   ],
   "siguiente": "audiencia_menor"
  },
  "audiencia_menor": {
   "fase": 3,
   "titulo": "Audiencia directa del menor — presupuesto inderogable",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La audiencia previa del menor es un presupuesto inderogable de la resolución. El Juez no puede dictar resolución sobre el fondo sin haber oído directamente al solicitante. No es un mero trámite formal: es el acto en que el Juez aprecia directamente la madurez del menor y la firmeza de su voluntad."
    },
    {
     "tipo": "aviso",
     "texto": "La omisión de la audiencia del menor constituye un vicio de procedimiento de entidad suficiente para afectar a la validez de la resolución. Es un requisito expresamente establecido en el art. 26 quinquies.1 LJV con carácter imperativo («previa audiencia de la persona menor»)."
    },
    {
     "tipo": "nota",
     "texto": "Conexión: derecho del menor a ser oído y escuchado (art. 9 LO 1/1996)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies.1 LJV · Art. 9 LO 1/1996"
    }
   ],
   "siguiente": "deliberacion"
  },
  "deliberacion": {
   "fase": 4,
   "titulo": "Deliberación judicial: valoración de los tres criterios",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Concluida la instrucción, el Juez delibera sobre el fondo del expediente. El artículo 26 quinquies.1 LJV exige que el Juez valore de forma conjunta y concurrente tres criterios para poder conceder la aprobación judicial. Los tres han de concurrir simultáneamente."
    },
    {
     "tipo": "lista",
     "titulo": "Tres criterios concurrentes (art. 26 quinquies.1 LJV)",
     "items": [
      "1.º INTERÉS SUPERIOR DEL MENOR, considerado en todo caso (art. 26 quinquies.1 LJV; art. 2 LO 1/1996)",
      "2.º VOLUNTAD ESTABLE: la disconformidad no es transitoria ni circunstancial, sino persistente en el tiempo. La estabilidad excluye voluntades meramente coyunturales pero no exige permanencia indefinida",
      "3.º MADUREZ SUFICIENTE: capacidad del menor para comprender y evaluar de forma razonable e independiente las consecuencias de su decisión. Se valora individualmente, no solo por edad cronológica, sino por el grado de desarrollo cognitivo y emocional del solicitante"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies.1 LJV · Art. 2 LO 1/1996"
    }
   ],
   "siguiente": "criterios_eval"
  },
  "criterios_eval": {
   "fase": 4,
   "titulo": "Resultado de la valoración: ¿concurren los tres criterios?",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies.1 LJV"
    }
   ],
   "pregunta": "¿Aprecia el Juez que concurren los tres criterios legales exigidos para conceder la aprobación judicial?",
   "opciones": [
    {
     "texto": "Sí — concurren los tres criterios (interés superior, voluntad estable, madurez)",
     "tono": "t-ok",
     "destino": "concesion"
    },
    {
     "texto": "No — no concurre alguno o ninguno de los criterios",
     "tono": "t-aviso",
     "destino": "denegacion"
    }
   ]
  },
  "concesion": {
   "fase": 4,
   "titulo": "Auto de concesión de la aprobación judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta auto concediendo la aprobación judicial para la rectificación de la mención registral del sexo y, en su caso, del nombre. La resolución debe estar motivada y refleja la concurrencia de los tres criterios legales."
    },
    {
     "tipo": "aviso",
     "texto": "PROHIBICIÓN ABSOLUTA E IRRESTRICTA (art. 26 quinquies.2 LJV): La concesión no puede condicionarse, en ningún caso, a (1) la previa exhibición de informe médico o psicológico relativo a la identidad sexual, ni a (2) la previa modificación de la apariencia o función corporal del menor a través de procedimientos médicos, quirúrgicos o de otra índole. El término «no podrá» excluye cualquier margen de discrecionalidad judicial al respecto."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies.1 y .2 LJV"
    }
   ],
   "siguiente": "testimonio"
  },
  "denegacion": {
   "fase": 4,
   "titulo": "Auto de denegación de la aprobación judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez dicta auto denegando la aprobación judicial por no concurrir alguno o ninguno de los tres criterios legales exigidos. La resolución debe estar suficientemente motivada, indicando qué criterios no se aprecian y las razones de ello."
    },
    {
     "tipo": "nota",
     "texto": "La resolución debe notificarse al solicitante, a sus representantes legales (o defensor judicial) y al Ministerio Fiscal. La notificación debe incluir información sobre los recursos disponibles y los plazos para interponerlos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies.1 LJV"
    }
   ],
   "pregunta": "¿Interpone el solicitante recurso de apelación contra el auto de denegación?",
   "opciones": [
    {
     "texto": "Sí — interpone recurso de apelación ante la AP",
     "tono": "t-plazo",
     "destino": "recurso_apelacion"
    },
    {
     "texto": "No — consiente la resolución y queda firme",
     "tono": "t-nota",
     "destino": "fin_denegacion_firme"
    }
   ]
  },
  "recurso_apelacion": {
   "fase": 4,
   "titulo": "Tramitación del recurso de apelación",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El solicitante interpone recurso de apelación contra el auto de denegación ante la Audiencia Provincial correspondiente al partido judicial donde se tramitó el expediente."
    },
    {
     "tipo": "aviso",
     "texto": "Para los recursos de revisión y apelación contra la resolución definitiva, la intervención de ABOGADO y PROCURADOR ES PRECEPTIVA (art. 3.2, párrafo segundo, LJV), aunque no lo fuera durante la tramitación ordinaria del expediente. El solicitante debe proveerse de representación letrada antes de interponer el recurso."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para interponer el recurso de apelación: veinte días desde la notificación de la resolución (art. 458.1 LEC, de aplicación supletoria vía art. 8 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "La apelación no tiene efectos suspensivos (art. 20.2 LJV). La Audiencia Provincial puede confirmar la denegación o revocarla y conceder la aprobación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 3.2 LJV · Art. 8 LJV · Arts. 455 y ss. LEC (supletoria)"
    }
   ],
   "pregunta": "¿Resuelve la Audiencia Provincial estimando el recurso de apelación?",
   "opciones": [
    {
     "texto": "Sí — la AP estima el recurso y revoca la denegación",
     "tono": "t-ok",
     "destino": "concesion_ap"
    },
    {
     "texto": "No — la AP desestima el recurso y confirma la denegación",
     "tono": "t-aviso",
     "destino": "fin_recurso_desestimado"
    }
   ]
  },
  "concesion_ap": {
   "fase": 4,
   "titulo": "Resolución estimatoria de la Audiencia Provincial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial dicta sentencia o auto estimando el recurso de apelación, revocando el auto de denegación del Juzgado de Primera Instancia y concediendo la aprobación judicial para la rectificación registral."
    },
    {
     "tipo": "nota",
     "texto": "La resolución de la Audiencia Provincial es firme a efectos del presente expediente, salvo que excepcionalmente proceda recurso extraordinario. El testimonio de la resolución debe remitirse al Registro Civil por el órgano judicial."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 455 y ss. LEC (supletoria) · Art. 8 LJV"
    }
   ],
   "siguiente": "testimonio"
  },
  "testimonio": {
   "fase": 5,
   "titulo": "Libramiento y remisión del testimonio de la resolución",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Dictado el auto de concesión (por el Juzgado de Primera Instancia o por la Audiencia Provincial en apelación), el órgano judicial libra testimonio de la resolución y lo remite de oficio al Registro Civil competente para proceder a la inscripción de la rectificación aprobada judicialmente."
    },
    {
     "tipo": "nota",
     "texto": "El testimonio se remite al Registro Civil competente (art. 26 quinquies.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies.2 LJV · Ley 20/2011, de 21 de julio, del Registro Civil"
    }
   ],
   "siguiente": "inscripcion"
  },
  "inscripcion": {
   "fase": 5,
   "titulo": "Inscripción de la rectificación en el Registro Civil",
   "actor": "rc",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Registro Civil recibe el testimonio de la resolución judicial y procede a practicar la inscripción de la rectificación de la mención del sexo y, en su caso, del nombre en la inscripción de nacimiento del solicitante."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones posteriores del interesado (a gestionar una vez practicada la inscripción)",
     "items": [
      "Solicitud de nuevo Documento Nacional de Identidad (DNI) con la nueva mención del sexo y nombre",
      "Renovación del pasaporte",
      "Actualización de la tarjeta sanitaria y la historia clínica",
      "Comunicación al expediente académico del centro educativo",
      "Actualización de cualquier otro documento que contenga la mención registral rectificada"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies.2 LJV · Ley 20/2011, del Registro Civil"
    }
   ],
   "siguiente": "fin_exitoso"
  },
  "fin_exitoso": {
   "fase": 5,
   "titulo": "Rectificación registral practicada con éxito",
   "actor": "rc",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente ha concluido satisfactoriamente. La rectificación de la mención registral del sexo —y del nombre, en su caso— ha sido practicada en el Registro Civil. "
    },
    {
     "tipo": "nota",
     "texto": "Reversión: transcurridos seis meses desde la inscripción, quien promovió la rectificación puede recuperar la mención anterior por el mismo procedimiento; si después quisiera una nueva rectificación, habrá de seguir el Capítulo I ter de la LJV (arts. 26 sexies y ss.) (art. 47 Ley 4/2023)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies.2 LJV · Art. 47 Ley 4/2023 · Ley 20/2011"
    }
   ],
   "fin": "success"
  },
  "fin_incompetencia": {
   "fase": 0,
   "titulo": "Fin — Juzgado territorialmente incompetente",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado ante el que se pretende actuar no es territorialmente competente para conocer del expediente. La persona solicitante no tiene domicilio ni residencia en España, por lo que los Juzgados españoles carecen de competencia territorial para tramitar este expediente."
    },
    {
     "tipo": "nota",
     "texto": "En supuestos internacionales, puede revisarse si concurren foros de competencia internacional conforme al art. 9 LJV (Tratados, normas de la UE o LOPJ). En ese caso, deberá identificarse el órgano judicial español concreto con competencia territorial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 ter.1 LJV · Art. 9 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_edad_incorrecta": {
   "fase": 0,
   "titulo": "Fin — Trámite incorrecto: edad fuera del rango del Capítulo I bis",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La persona solicitante no se encuentra en el rango de edad al que se aplica el Capítulo I bis (mayores de 12 y menores de 14 años). Debe reconducirse la gestión al procedimiento correcto según la edad del solicitante."
    },
    {
     "tipo": "nota",
     "texto": "Procedimientos alternativos (Ley 4/2023): entre catorce y dieciséis años, ante el Registro Civil, por sí mismos y asistidos por sus representantes legales; mayores de dieciséis, por sí mismos; menores de doce, la ley no prevé cauce (art. 43 Ley 4/2023)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 bis LJV · Art. 43 Ley 4/2023"
    }
   ],
   "fin": "warning"
  },
  "fin_inadmision": {
   "fase": 2,
   "titulo": "Fin — Inadmisión de la solicitud",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud ha sido inadmitida a trámite. El solicitante puede, una vez corregidas las deficiencias que motivaron la inadmisión y cumplidos los requisitos exigidos, presentar una nueva solicitud."
    },
    {
     "tipo": "nota",
     "texto": "La inadmisión se notificará al solicitante, a sus representantes legales (o defensor judicial) y al Ministerio Fiscal. La resolución de inadmisión debe estar motivada y puede ser susceptible de recurso conforme a las normas supletorias de la LEC."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 16.4 y 17.1 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_denegacion_firme": {
   "fase": 4,
   "titulo": "Fin — Auto de denegación firme",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El auto de denegación ha ganado firmeza por no haber sido recurrido en el plazo legal. El procedimiento concluye sin que se haya concedido la aprobación judicial para la rectificación registral."
    },
    {
     "tipo": "nota",
     "texto": "El solicitante puede, al cumplir los catorce años, iniciar el procedimiento administrativo de rectificación registral del sexo ante el Registro Civil conforme a la Ley Trans, con asistencia de representantes legales hasta los dieciséis años."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies LJV · Ley 4/2023"
    }
   ],
   "fin": "warning"
  },
  "fin_recurso_desestimado": {
   "fase": 4,
   "titulo": "Fin — Recurso de apelación desestimado",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial ha desestimado el recurso de apelación y confirmado el auto de denegación del Juzgado de Primera Instancia. La denegación de la aprobación judicial queda firme."
    },
    {
     "tipo": "nota",
     "texto": "Al igual que en el caso de denegación firme sin recurso, el solicitante puede, al cumplir los catorce años, iniciar el procedimiento administrativo de rectificación registral del sexo ante el Registro Civil conforme a la Ley Trans."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 455 y ss. LEC (supletoria) · Art. 26 quinquies LJV · Ley 4/2023"
    }
   ],
   "fin": "error"
  }
 },
 "pie": "LJV · Cap. I bis<br>Arts. 26 bis – 26 quinquies<br>Ley 15/2015, de 2 de julio"
});

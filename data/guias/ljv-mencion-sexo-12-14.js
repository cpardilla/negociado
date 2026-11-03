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
  "laj": "Letrado de la Administración de Justicia",
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
     "texto": "En este rango de edad, el menor debe actuar asistido por sus representantes legales (progenitores o representante legal). Verifique si los representantes están presentes y de acuerdo entre sí y con el menor para instar el expediente."
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
   "actor": "laj",
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
   "titulo": "Contenido de la solicitud",
   "actor": "solicitante",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Verifique que la solicitud incluye lo que exigen los arts. 14 y 26 quater.1 LJV antes de presentarla al Juzgado."
    },
    {
     "tipo": "lista",
     "titulo": "Checklist de contenido de la solicitud (arts. 14 y 26 quater.1 LJV)",
     "items": [
      "Datos y circunstancias de identificación del solicitante, con un domicilio a efectos de notificaciones (art. 14.1 LJV)",
      "Manifestación de disconformidad con el sexo mencionado en la inscripción de nacimiento (art. 26 quater.1 LJV)",
      "Solicitud de autorización judicial para la rectificación registral de la mención al sexo (art. 26 quater.1 LJV)",
      "En su caso, solicitud de rectificación del nombre que aparece en la inscripción (art. 26 quater.1 LJV)",
      "Exposición clara de lo que se pide y de los hechos en que se funda (art. 14.1 LJV)",
      "Datos de identificación y domicilio de las personas que puedan estar interesadas (art. 14.2 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Como no es preceptiva la intervención de abogado ni procurador, en la Oficina judicial o en la sede electrónica se facilita un impreso normalizado y no hace falta concretar la fundamentación jurídica (art. 14.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 14 LJV · Art. 26 quater.1 LJV"
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
     "texto": "La concesión no podrá estar condicionada a la previa exhibición de informe médico o psicológico relativo a la identidad sexual, ni a la previa modificación de la apariencia o función corporal de la persona a través de procedimientos médicos, quirúrgicos o de otra índole (art. 26 quinquies.1, párrafo segundo, LJV)."
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
     "texto": "Art. 26 quater.2 y .4 LJV · Art. 26 quinquies.1 LJV"
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
     "texto": "La solicitud, junto con toda la documentación acreditativa, se presenta en el Registro del Juzgado de Primera Instancia competente. Presentada, el Letrado de la Administración de Justicia examina de oficio la competencia y los posibles defectos u omisiones (art. 16.1 y 16.4 LJV). El expediente es de tramitación preferente (art. 26 quater.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Al no ser preceptiva la intervención de abogado ni procurador, la presentación puede realizarse directamente por el solicitante o sus representantes legales (o defensor judicial). Guarde justificante de la fecha de presentación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.1 LJV · Art. 26 ter.4 LJV · Art. 16.1 y 16.4 LJV"
    }
   ],
   "siguiente": "examen_formal"
  },
  "examen_formal": {
   "fase": 2,
   "titulo": "Examen de la solicitud por el Letrado de la Administración de Justicia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia examina de oficio la competencia objetiva y territorial (art. 16.1 LJV) y los posibles defectos u omisiones de la solicitud (art. 16.4 LJV), y resuelve sobre su admisión (art. 17.1 LJV). Comprueba, entre otros extremos, la legitimación del solicitante, la edad dentro del tramo legal, la asistencia de representantes legales o defensor judicial y la documentación."
    },
    {
     "tipo": "nota",
     "texto": "Este examen no prejuzga el fondo: la concesión o denegación de la aprobación corresponde al Juez (art. 26 quinquies.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 16.1, 16.4 y 17.1 LJV · Arts. 26 bis, 26 ter y 26 quater LJV"
    }
   ],
   "pregunta": "¿Qué resulta del examen?",
   "opciones": [
    {
     "texto": "Es competente y la solicitud es admisible",
     "tono": "t-ok",
     "destino": "admision_auto"
    },
    {
     "texto": "Hay defectos u omisiones que subsanar",
     "tono": "t-plazo",
     "destino": "subsanacion"
    },
    {
     "texto": "Entiende que falta competencia objetiva o territorial",
     "tono": "t-aviso",
     "destino": "falta_competencia"
    },
    {
     "texto": "Entiende que no resulta admisible por otra causa (edad fuera del tramo, falta de legitimación)",
     "tono": "t-aviso",
     "destino": "dacion_cuenta"
    }
   ]
  },
  "subsanacion": {
   "fase": 2,
   "titulo": "Requerimiento de subsanación de defectos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si la solicitud presenta defectos u omisiones (documentación incompleta, insuficiente acreditación de la representación legal, etc.), el Letrado de la Administración de Justicia da un plazo para subsanarlos."
    },
    {
     "tipo": "plazo",
     "texto": "Cinco días para la subsanación (art. 16.4 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Si no se subsanan en plazo, el Letrado de la Administración de Justicia da cuenta al Juez, que acuerda lo que proceda: el archivo directo por el Letrado de la Administración de Justicia solo se prevé en los expedientes de su competencia, y este lo decide el Juez (arts. 2.3 y 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 2.3 y 16.4 LJV"
    }
   ],
   "pregunta": "¿Subsana el solicitante los defectos dentro del plazo concedido?",
   "opciones": [
    {
     "texto": "Sí, subsana en plazo",
     "tono": "t-ok",
     "destino": "admision_auto"
    },
    {
     "texto": "No subsana en plazo: se da cuenta al Juez",
     "tono": "t-aviso",
     "destino": "dacion_cuenta"
    }
   ]
  },
  "dacion_cuenta": {
   "fase": 2,
   "titulo": "Dación de cuenta al Juez",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Como la decisión de este expediente corresponde al Juez (art. 2.3 LJV), el Letrado de la Administración de Justicia le da cuenta si no se subsanan los defectos o si entiende que la solicitud no resulta admisible. El Juez acuerda lo que proceda (arts. 16.4 y 17.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 2.3, 16.4 y 17.1 LJV"
    }
   ],
   "pregunta": "¿Qué acuerda el Juez?",
   "opciones": [
    {
     "texto": "Admitir a trámite la solicitud",
     "tono": "t-ok",
     "destino": "admision_auto"
    },
    {
     "texto": "No admitirla",
     "tono": "t-aviso",
     "destino": "fin_inadmision"
    }
   ]
  },
  "falta_competencia": {
   "fase": 2,
   "titulo": "Falta de competencia: dación de cuenta al Juez",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el Letrado de la Administración de Justicia entiende que falta la competencia objetiva o la territorial, da cuenta al Juez, que acuerda lo que proceda tras oír al Ministerio Fiscal y al solicitante (art. 16.2 y 16.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.2 y 16.3 LJV"
    }
   ],
   "pregunta": "¿Qué aprecia el Juez?",
   "opciones": [
    {
     "texto": "Es competente",
     "tono": "t-ok",
     "destino": "admision_auto"
    },
    {
     "texto": "No es competente",
     "tono": "t-aviso",
     "destino": "fin_remision_archivo"
    }
   ]
  },
  "admision_auto": {
   "fase": 2,
   "titulo": "Admisión a trámite — carácter preferente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se admite a trámite la solicitud (art. 17.1 LJV). El expediente es de tramitación preferente (art. 26 quater.1 LJV) y se pasa a la citación para la comparecencia."
    },
    {
     "tipo": "nota",
     "texto": "La admisión a trámite no prejuzga el fondo del asunto. No implica que vaya a concederse la aprobación judicial, sino únicamente que la solicitud cumple los requisitos formales exigidos para ser tramitada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 17.1 LJV · Art. 26 quater.1 LJV"
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
     "texto": "Admitida a trámite la solicitud, el Juez cita a comparecer a las personas que deben intervenir en el expediente (art. 26 quater.2 LJV), avisándoles de que acudan con los medios de prueba de que intenten valerse (art. 17.3 LJV)."
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
     "tipo": "plazo",
     "texto": "La citación se hace con al menos quince días de antelación (art. 17.3 LJV) y la comparecencia se celebra dentro de los treinta días siguientes a la admisión (art. 18.1 LJV). Quien vaya a oponerse lo hace en los cinco días siguientes a su citación (art. 17.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.2 LJV · Art. 4 LJV · Arts. 17.3 y 18.1 LJV"
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
     "texto": "Si no asiste alguno de los demás citados, se celebra el acto y continúa el expediente (art. 18.2.1.ª LJV). El Juez tiene en consideración en todo momento el interés superior de la persona menor de edad (art. 26 quater.3 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Los testigos que la parte proponga pueden estar ligados al solicitante por cualquier vínculo (parentesco, amistad, adopción, tutela, etc.) sin que ello afecte a su idoneidad (art. 26 quater.4 LJV). Los gastos de testigos y peritos son a cargo de quien los proponga (art. 7 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.2, .3 y .4 LJV · Art. 18.2 LJV · Art. 4 LJV · Art. 7 LJV"
    }
   ],
   "pregunta": "¿Asiste el solicitante a la comparecencia?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "prueba_decision"
    },
    {
     "texto": "No: se archiva el expediente",
     "tono": "t-aviso",
     "destino": "fin_desistido"
    }
   ]
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
     "texto": "La concesión no podrá estar condicionada a la previa exhibición de informe médico o psicológico relativo a la identidad sexual, ni a la previa modificación de la apariencia o función corporal de la persona a través de procedimientos médicos, quirúrgicos o de otra índole (art. 26 quinquies.1, párrafo segundo, LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.3 LJV · Art. 5 LJV · Art. 26 quinquies.1 LJV"
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
     "texto": "Las diligencias relativas a los intereses de la persona menor que se acuerden de oficio o a instancia del Ministerio Fiscal se practican en el mismo acto de la comparecencia o, si no fuere posible, en los diez días siguientes (art. 18.2.4.ª LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quater.3 y .4 LJV · Art. 18.2 LJV · Art. 7 LJV"
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
     "texto": "El Juez tiene la obligación legal de facilitar al menor determinada información en un lenguaje claro, accesible y adaptado a sus necesidades."
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
     "texto": "El art. 26 quinquies.1 LJV exige resolver «previa audiencia de la persona menor»."
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
     "texto": "La concesión no podrá estar condicionada a la previa exhibición de informe médico o psicológico relativo a la identidad sexual, ni a la previa modificación de la apariencia o función corporal de la persona a través de procedimientos médicos, quirúrgicos o de otra índole (art. 26 quinquies.1, párrafo segundo, LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Auto en cinco días desde la terminación de la comparecencia (art. 19.1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Cualquier interesado que se considere perjudicado puede apelar el auto; la apelación no tiene efectos suspensivos salvo que la ley disponga lo contrario (art. 20.2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies.1 LJV · Arts. 19.1 y 20.2 LJV"
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
     "tipo": "plazo",
     "texto": "Auto en cinco días desde la terminación de la comparecencia (art. 19.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 26 quinquies.1 LJV · Art. 19.1 LJV"
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
     "texto": "El Juez, a quien el Letrado de la Administración de Justicia ha dado cuenta, no admite la solicitud a trámite. El solicitante puede, una vez corregidas las deficiencias que motivaron la inadmisión y cumplidos los requisitos exigidos, presentar una nueva solicitud."
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
  "fin_remision_archivo": {
   "fase": 2,
   "titulo": "Fin — Falta de competencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La ley prevé la remisión al órgano que se considere competente si falta la competencia territorial (art. 16.3 LJV) y el archivo si falta la objetiva (art. 16.2 LJV). La resolución en que se aprecie la falta de competencia ha de indicar el órgano que se estima competente (art. 16.2, párrafo segundo, LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 16.2 y 16.3 LJV"
    }
   ],
   "fin": "warning"
  },
  "fin_desistido": {
   "fase": 3,
   "titulo": "Fin — Archivo por desistimiento",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el solicitante no asiste a la comparecencia, el Juez acuerda el archivo del expediente y le tiene por desistido (art. 18.2.1.ª LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 18.2 LJV"
    }
   ],
   "fin": "warning"
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

/* Migrado por tools/migrate.js desde sources/actual/G08.json; revisado con el BOE (registro: docs/revision/ljv-mencion-sexo-reversion.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-mencion-sexo-reversion",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "De la aprobación judicial de la nueva modificación de la mención registral relativa al sexo con posterioridad a una reversión de la rectificación de la mención registral",
 "corto": "Nueva modificación de la mención del sexo tras reversión",
 "articulos": [
  "26 sexies",
  "26 septies",
  "26 octies",
  "26 nonies"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20260305",
  "origen": "G08"
 },
 "fases": [
  "Verificación previa",
  "Competencia y legitimación",
  "Postulación y garantías",
  "Tramitación",
  "Resolución y desenlace"
 ],
 "actores": {
  "juez": "Juez",
  "laj": "Solicitante / Oficina judicial",
  "ambos": "Intervención conjunta"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Verificación del supuesto de hecho (artículo 26 sexies)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se aplicarán las disposiciones de este Capítulo para recabar aprobación judicial para la modificación de la mención registral relativa al sexo cuando respecto de la misma persona ya se haya realizado una rectificación de la inscripción registral relativa al sexo y una reversión de dicha modificación, de conformidad con lo dispuesto en el artículo 47, párrafo segundo, de la Ley para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI."
    },
    {
     "tipo": "aviso",
     "texto": "Este Capítulo no resulta aplicable a la primera rectificación ni a la primera reversión, sino exclusivamente a la nueva modificación solicitada con posterioridad a una rectificación y a una reversión ya inscritas."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 26 sexies | Ley 4/2023, art. 47, párrafo segundo"
    }
   ],
   "pregunta": "¿Respecto de la misma persona ya se ha realizado una rectificación de la inscripción registral relativa al sexo y una reversión de dicha modificación conforme al artículo 47 de la Ley 4/2023?",
   "opciones": [
    {
     "texto": "Sí, se cumplen ambas condiciones",
     "tono": "t-nota",
     "nota": "Sí",
     "destino": "legitima"
    },
    {
     "texto": "No, falta alguna de las condiciones previas",
     "tono": "t-nota",
     "nota": "No",
     "destino": "fin_no_procede"
    }
   ]
  },
  "fin_no_procede": {
   "fase": 0,
   "titulo": "No procede la aplicación del Capítulo I ter",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Capítulo I ter de la Ley 15/2015 tiene un ámbito de aplicación excepcional y subsidiario. Si no concurren las dos circunstancias previas de manera acumulativa —una rectificación previa de la inscripción registral relativa al sexo y una reversión posterior de dicha modificación—, no es de aplicación este procedimiento de jurisdicción voluntaria."
    },
    {
     "tipo": "nota",
     "texto": "En su caso, deberá acudirse al procedimiento administrativo ordinario de rectificación registral ante el Registro Civil (artículos 43 y 44 de la Ley 4/2023) o, si corresponde, al Capítulo I bis de la Ley 15/2015 para menores de catorce años y mayores de doce."
    }
   ],
   "fin": "error"
  },
  "legitima": {
   "fase": 1,
   "titulo": "Legitimación activa (artículo 26 septies.2 y artículo 43 de la Ley 4/2023)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Podrá promover este expediente cualquiera de las personas que estén legitimadas para instar la rectificación de la mención registral del sexo. El artículo 43 de la Ley 4/2023 determina quiénes pueden solicitar la rectificación registral de la mención relativa al sexo."
    },
    {
     "tipo": "lista",
     "titulo": "Verificar legitimación",
     "items": [
      "Persona de nacionalidad española mayor de dieciséis años: solicita por sí misma ante el Registro Civil.",
      "Persona menor de dieciséis años y mayor de catorce: presenta la solicitud por sí misma, asistida por sus representantes legales.",
      "Persona menor de catorce años y mayor de doce: solicita la autorización judicial conforme al Capítulo I bis (primera rectificación); para nueva modificación tras reversión, se aplica el Capítulo I ter.",
      "Persona con discapacidad: solicita con las medidas de apoyo que precise.",
      "Si hay desacuerdo entre progenitores o representantes legales: nombramiento de defensor judicial (arts. 235-236 CC)."
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Ley 4/2023, art. 43 | Código Civil, arts. 235-236"
    }
   ],
   "pregunta": "¿El solicitante está legitimado para instar la rectificación de la mención registral del sexo según el artículo 43 de la Ley 4/2023?",
   "opciones": [
    {
     "texto": "Mayor de dieciséis años",
     "tono": "t-nota",
     "nota": "Mayor de 16",
     "destino": "competencia"
    },
    {
     "texto": "Menor de dieciséis y mayor de catorce (asistido)",
     "tono": "t-nota",
     "nota": "14-16 asistido",
     "destino": "competencia_menor_14_16"
    },
    {
     "texto": "Menor de catorce y mayor de doce",
     "tono": "t-nota",
     "nota": "12-14",
     "destino": "competencia_menor_12_14"
    },
    {
     "texto": "Persona con discapacidad",
     "tono": "t-nota",
     "nota": "Discapacidad",
     "destino": "competencia_discapacidad"
    },
    {
     "texto": "No está legitimado",
     "tono": "t-nota",
     "nota": "No legitimado",
     "destino": "fin_no_legitimado"
    }
   ]
  },
  "fin_no_legitimado": {
   "fase": 1,
   "titulo": "Falta de legitimación para promover el expediente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el solicitante no se encuentra entre las personas legitimadas conforme al artículo 43 de la Ley 4/2023, no podrá promover el expediente de jurisdicción voluntaria del Capítulo I ter de la Ley 15/2015."
    },
    {
     "tipo": "nota",
     "texto": "La legitimación corresponde a la persona interesada según su tramo de edad y capacidad, con las salvaguardas procesales que correspondan."
    }
   ],
   "fin": "error"
  },
  "competencia": {
   "fase": 1,
   "titulo": "Competencia territorial (artículo 26 septies.1)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Será competente para conocer de este expediente el Juzgado de Primera Instancia del domicilio de la persona cuya mención registral pretenda rectificarse o, si no lo tuviera en territorio nacional, el de su residencia en dicho territorio."
    },
    {
     "tipo": "nota",
     "texto": "Hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 j) LOPJ) o, si no, la Sección Civil. Decide el Juez (art. 2.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 26 septies.1 | LOPJ, art. 86.5"
    }
   ],
   "siguiente": "postulacion"
  },
  "competencia_menor_14_16": {
   "fase": 1,
   "titulo": "Competencia territorial — Menor de dieciséis y mayor de catorce",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Mismo criterio de competencia territorial: Juzgado de Primera Instancia del domicilio o, en su defecto, de la residencia en territorio nacional. El menor presenta la solicitud por sí mismo asistido por sus representantes legales."
    },
    {
     "tipo": "ley",
     "texto": "Ley 4/2023, art. 43.2 | Ley 15/2015, art. 26 septies.1"
    }
   ],
   "siguiente": "postulacion_menor"
  },
  "competencia_menor_12_14": {
   "fase": 1,
   "titulo": "Competencia territorial — Menor de catorce y mayor de doce",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Mismo criterio territorial. Este tramo de edad requiere aprobación judicial conforme al Capítulo I bis para la primera rectificación; para la nueva modificación tras reversión se aplica el Capítulo I ter, sin perjuicio de la asistencia de representantes legales y de las garantías del menor."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 26 septies | Ley 4/2023, art. 43.4"
    }
   ],
   "siguiente": "postulacion_menor"
  },
  "competencia_discapacidad": {
   "fase": 1,
   "titulo": "Competencia territorial — Persona con discapacidad",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Mismo criterio territorial. La persona solicita con las medidas de apoyo que precise, sin que sea preceptiva la intervención de abogado ni procurador."
    },
    {
     "tipo": "ley",
     "texto": "Ley 4/2023, art. 43.3"
    }
   ],
   "siguiente": "postulacion_discapacidad"
  },
  "postulacion": {
   "fase": 2,
   "titulo": "Postulación (artículo 26 septies.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En la tramitación del presente expediente no será preceptiva la intervención de abogado ni procurador."
    },
    {
     "tipo": "nota",
     "texto": "Para recurrir sí son necesarios abogado y procurador (art. 3.2, párrafo segundo, LJV)."
    }
   ],
   "siguiente": "solicitud"
  },
  "postulacion_menor": {
   "fase": 2,
   "titulo": "Postulación y garantías del menor",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No es preceptiva la intervención de abogado ni procurador. Si hay desacuerdo entre los progenitores o representantes legales, entre sí o con la persona menor de edad, se procederá al nombramiento de un defensor judicial conforme a los artículos 235 y 236 del Código Civil."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 26 septies.3 | Código Civil, arts. 235-236"
    }
   ],
   "pregunta": "¿Existe desacuerdo entre los progenitores o representantes legales, o entre ellos y la persona menor de edad?",
   "opciones": [
    {
     "texto": "Sí, existe desacuerdo",
     "tono": "t-nota",
     "nota": "Desacuerdo",
     "destino": "defensor_judicial"
    },
    {
     "texto": "No, existe conformidad",
     "tono": "t-nota",
     "nota": "Conformidad",
     "destino": "solicitud"
    }
   ]
  },
  "postulacion_discapacidad": {
   "fase": 2,
   "titulo": "Postulación — Persona con discapacidad",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No es preceptiva la intervención de abogado ni procurador. La persona actúa con las medidas de apoyo que precise."
    }
   ],
   "siguiente": "solicitud"
  },
  "defensor_judicial": {
   "fase": 2,
   "titulo": "Nombramiento de defensor judicial (arts. 235 y 236 CC; arts. 27 y ss. LJV)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si hay desacuerdo de los progenitores o representantes legales, entre sí o con la persona menor de edad, se nombra un defensor judicial (arts. 235 y 236 CC). El nombramiento se tramita por el expediente de los arts. 27 y siguientes LJV, que resuelve el Letrado de la Administración de Justicia."
    },
    {
     "tipo": "ley",
     "texto": "Código Civil, arts. 235-236 | Ley 15/2015, arts. 27-32"
    }
   ],
   "siguiente": "solicitud"
  },
  "solicitud": {
   "fase": 3,
   "titulo": "Presentación de la solicitud (artículo 26 octies.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente, que será de tramitación preferente, comenzará con la presentación de una solicitud en la que la persona interesada manifieste su voluntad de revertir la rectificación registral anteriormente producida."
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos de la solicitud",
     "items": [
      "Manifestación expresa de voluntad de revertir la rectificación registral anteriormente producida.",
      "Acompañar los medios de prueba que se deseen utilizar (sin lista taxativa).",
      "No se exige informe médico ni psicológico ni modificación corporal previa (art. 44.3 Ley 4/2023)."
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Tramitación preferente (art. 26 octies.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 26 octies.1 | Ley 4/2023, art. 44.3"
    }
   ],
   "siguiente": "admision"
  },
  "admision": {
   "fase": 3,
   "titulo": "Admisión a trámite",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez examina la solicitud y los documentos aportados para decidir sobre su admisión a trámite. Si la solicitud tiene defectos, se concede un plazo de cinco días para subsanarlos; si no se subsanan, se archiva (art. 16.4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, arts. 16.4 y 26 octies.2"
    }
   ],
   "pregunta": "¿El Juez admite a trámite la solicitud?",
   "opciones": [
    {
     "texto": "Sí, se admite a trámite",
     "tono": "t-nota",
     "nota": "Admitida",
     "destino": "comparecencia"
    },
    {
     "texto": "No, se inadmitie la solicitud",
     "tono": "t-nota",
     "nota": "Inadmitida",
     "destino": "fin_inadmision"
    }
   ]
  },
  "fin_inadmision": {
   "fase": 3,
   "titulo": "Solicitud inadmitida a trámite",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si la solicitud no cumple los requisitos legales o formales exigidos, el Juez acordará su inadmisión a trámite, poniendo fin al expediente en esta vía."
    },
    {
     "tipo": "nota",
     "texto": "Puede presentarse una nueva solicitud corregida."
    }
   ],
   "fin": "error"
  },
  "comparecencia": {
   "fase": 3,
   "titulo": "Comparecencia de los interesados (artículo 26 octies.2)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida a trámite la solicitud, el Juez citará a comparecencia al solicitante y, en su caso, a sus representantes legales, a las demás personas que estime oportuno, así como al Ministerio Fiscal."
    },
    {
     "tipo": "lista",
     "titulo": "Actores citados a comparecencia",
     "items": [
      "Solicitante (comparecencia personal esencial).",
      "Representantes legales (si el solicitante es menor de edad o persona con discapacidad).",
      "Ministerio Fiscal (representante de la legalidad e interés público).",
      "Demás personas que el Juez estime oportuno (facultad discrecional)."
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La comparecencia personal del solicitante permite al Juez valorar directamente la voluntad de la persona."
    }
   ],
   "siguiente": "pruebas"
  },
  "pruebas": {
   "fase": 3,
   "titulo": "Práctica de pruebas (artículo 26 octies.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez podrá solicitar la práctica de cualesquiera otras pruebas que considere oportunas. Esta facultad es amplia y discrecional, permitiendo practicar todo tipo de pruebas que considere necesarias para formar su convicción sobre la autenticidad y estabilidad de la voluntad manifestada."
    },
    {
     "tipo": "aviso",
     "texto": "El ejercicio del derecho a la rectificación registral de la mención relativa al sexo en ningún caso podrá estar condicionado a la previa exhibición de informe médico o psicológico relativo a la disconformidad con el sexo mencionado en la inscripción de nacimiento, ni a la previa modificación de la apariencia o función corporal de la persona a través de procedimientos médicos, quirúrgicos o de otra índole."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 26 octies.3 | Ley 4/2023, art. 44.3"
    }
   ],
   "siguiente": "resolucion"
  },
  "resolucion": {
   "fase": 4,
   "titulo": "Resolución judicial (artículo 26 nonies)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez resolverá sobre la concesión o denegación de la aprobación judicial, considerando en todo caso, si el solicitante fuera persona menor de edad, el interés superior del menor."
    },
    {
     "tipo": "nota",
     "texto": "Se resuelve por auto (art. 19.1 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 26 nonies.1"
    }
   ],
   "pregunta": "¿El Juez concede la aprobación judicial para la nueva modificación de la mención registral relativa al sexo?",
   "opciones": [
    {
     "texto": "Sí, se concede la aprobación",
     "tono": "t-nota",
     "nota": "Concede",
     "destino": "remision_registro"
    },
    {
     "texto": "No, se deniega la aprobación",
     "tono": "t-nota",
     "nota": "Deniega",
     "destino": "fin_denegacion"
    }
   ]
  },
  "fin_denegacion": {
   "fase": 4,
   "titulo": "Denegación de la aprobación judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha denegado la aprobación judicial solicitada. Contra el auto cabe apelación en veinte días (art. 20.2 LJV; art. 458.1 LEC), sin efectos suspensivos y con abogado y procurador (art. 3.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Firme la resolución, no puede iniciarse otro expediente con idéntico objeto salvo que cambien las circunstancias (art. 19.3 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, arts. 3.2, 19.3 y 20.2 | LEC, art. 458"
    }
   ],
   "fin": "neutral"
  },
  "remision_registro": {
   "fase": 4,
   "titulo": "Remisión al Registro Civil (artículo 26 nonies.2)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El testimonio de dicha resolución se remitirá al Registro Civil competente para proceder, en su caso, a la inscripción de la rectificación aprobada judicialmente."
    },
    {
     "tipo": "nota",
     "texto": "La resolución que acuerde la rectificación de la mención registral del sexo tendrá efectos constitutivos a partir de su inscripción en el Registro Civil (artículo 46.1 de la Ley 4/2023). El cambio de la condición jurídica de la persona no se produce con la mera resolución judicial, sino con su inscripción registral."
    },
    {
     "tipo": "ley",
     "texto": "Ley 15/2015, art. 26 nonies.2 | Ley 4/2023, art. 46.1 | Ley 20/2011, art. 91.2"
    }
   ],
   "siguiente": "inscripcion"
  },
  "inscripcion": {
   "fase": 4,
   "titulo": "Inscripción registral",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Registro Civil competente recibe el testimonio de la resolución judicial y procede a la inscripción de la rectificación aprobada. La inscripción tiene eficacia constitutiva (art. 46.1 Ley 4/2023; art. 91.2 Ley 20/2011)."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del Registro Civil",
     "items": [
      "Recibir el testimonio de la resolución judicial.",
      "Proceder a la inscripción de la rectificación de la mención registral relativa al sexo.",
      "Conservar el mismo número del Documento Nacional de Identidad (art. 49 Ley 4/2023)."
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "La persona interesada o su representante podrán solicitar la reexpedición de documentos ajustados a la nueva inscripción (art. 49 Ley 4/2023)."
    }
   ],
   "pregunta": "¿El Registro Civil inscribe la rectificación aprobada judicialmente?",
   "opciones": [
    {
     "texto": "Sí, se inscribe la rectificación",
     "tono": "t-nota",
     "nota": "Inscrita",
     "destino": "fin_exitoso"
    },
    {
     "texto": "No, la inscripción queda pendiente",
     "tono": "t-nota",
     "nota": "Pendiente",
     "destino": "fin_inscripcion_pendiente"
    }
   ]
  },
  "fin_exitoso": {
   "fase": 4,
   "titulo": "Procedimiento concluido con inscripción",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La nueva modificación de la mención registral relativa al sexo ha sido aprobada judicialmente e inscrita en el Registro Civil. La persona puede ejercer todos los derechos inherentes a su nueva condición desde la inscripción."
    },
    {
     "tipo": "nota",
     "texto": "Se conserva en todo caso el mismo número del Documento Nacional de Identidad y se facilita la reexpedición de documentos ajustados a la nueva mención registral."
    }
   ],
   "fin": "success"
  },
  "fin_inscripcion_pendiente": {
   "fase": 4,
   "titulo": "Aprobación judicial concedida pero inscripción pendiente",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha concedido la aprobación judicial, pero la inscripción en el Registro Civil no ha podido materializarse o está pendiente de trámite."
    },
    {
     "tipo": "aviso",
     "texto": "Sin la inscripción registral, la resolución judicial no adquiere eficacia constitutiva. Es necesario subsanar la causa de la pendencia para que la rectificación produzca efectos jurídicos plenos."
    },
    {
     "tipo": "nota",
     "texto": "La persona interesada o su representante deberán agilizar la remisión del testimonio o resolver cualquier incidencia registral que impida la inscripción."
    }
   ],
   "fin": "warning"
  }
 },
 "pie": "Ley 15/2015, de 2 de julio, de la Jurisdicción Voluntaria.<br>Capítulo I ter del Título II."
});

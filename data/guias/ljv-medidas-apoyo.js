/* Migrado por tools/migrate.js desde sources/actual/G11.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "ljv-medidas-apoyo",
 "ley": "LJV",
 "grupo": "Título II · Personas",
 "titulo": "LEY 15/2015, DE 2 DE JULIO, DE LA JURISDICCIÓN VOLUNTARIA · TÍTULO II: DE LOS EXPEDIENTES DE JURISDICCIÓN VOLUNTARIA EN MATERIA DE PERSONAS · CAPÍTULO III BIS Del expediente de provisión de medidas judiciales de apoyo a personas con discapacidad Artículos 42 bis a), b) y c) LJV − 100% + ⊞ Mapa ↓ Descargar ↺ Reiniciar",
 "corto": "Medidas judiciales de apoyo a personas con discapacidad",
 "articulos": [
  "42 bis a",
  "42 bis b",
  "42 bis c"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20260305",
  "origen": "G11"
 },
 "fases": [
  "1. Iniciación",
  "2. Instrucción",
  "3. Comparecencia",
  "4. Resolución",
  "5. Revisión"
 ],
 "actores": {
  "ambos": "ac-ambos",
  "juez": "ac-juez",
  "laj": "ac-laj"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio del procedimiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de provisión de medidas judiciales de apoyo (Cap. III bis, Ley 15/2015) se tramita cuando sea pertinente la provisión de una medida judicial de apoyo de carácter estable a una persona con discapacidad."
    },
    {
     "tipo": "nota",
     "texto": "Las medidas judiciales son el último recurso del sistema: solo proceden en ausencia de medidas voluntarias de apoyo suficientes (poderes preventivos, autocuratela, guarda de hecho, etc.)."
    },
    {
     "tipo": "nota",
     "texto": "Orden de preferencia (art. 249 CC): 1.º Medidas voluntarias (arts. 255–256 CC) · 2.º Guarda de hecho (arts. 291–298 CC) · 3.º Medidas judiciales (curatela; subsidiariamente, defensor judicial)."
    },
    {
     "tipo": "aviso",
     "texto": "Verificar siempre la existencia de medidas voluntarias previas: si son suficientes, la vía judicial no procede."
    },
    {
     "tipo": "lista",
     "titulo": "Verificación previa",
     "items": [
      "La persona requiere apoyo de carácter estable para ejercer su capacidad jurídica",
      "No existen medidas voluntarias suficientes (autocuratela, poder preventivo)",
      "La persona reside en la circunscripción del juzgado competente"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis a) LJV · Art. 249 CC (Ley 8/2021) · Art. 2.3 LJV · Art. 12 CRPD (2006)"
    }
   ],
   "pregunta": "¿Procede la provisión de una medida judicial de apoyo estable?",
   "opciones": [
    {
     "texto": "Sí, se requiere medida judicial — Continuar con el expediente",
     "tono": "t-nota",
     "nota": "Sí",
     "destino": "solicitud_parte"
    },
    {
     "texto": "No, existen alternativas voluntarias suficientes",
     "tono": "t-nota",
     "nota": "No",
     "destino": "fin_no_procede"
    }
   ]
  },
  "solicitud_parte": {
   "fase": 0,
   "titulo": "Recepción de solicitud de parte legitimada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente se inicia por solicitud escrita de cualquier persona legitimada conforme al art. 42 bis a) apdo. 3 LJV."
    },
    {
     "tipo": "lista",
     "titulo": "Personas legitimadas para promover el expediente",
     "items": [
      "La propia persona con discapacidad",
      "Su cónyuge no separado de hecho o legalmente",
      "Quien se encuentre en situación de hecho asimilable al cónyuge",
      "Descendientes de la persona con discapacidad",
      "Ascendientes de la persona con discapacidad",
      "Hermanos de la persona con discapacidad",
      "El Ministerio Fiscal (directamente legitimado)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Cualquier persona (ciudadano particular) puede activar al MF comunicando los hechos determinantes. Las autoridades y funcionarios públicos tienen obligación legal de hacerlo por razón de su cargo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis a) apdo. 3 LJV"
    }
   ],
   "pregunta": "¿Cuál es el origen de la solicitud?",
   "opciones": [
    {
     "texto": "Solicitud de una de las personas legitimadas — Continuar tramitación",
     "tono": "t-ok",
     "destino": "documentacion"
    },
    {
     "texto": "Iniciativa del Ministerio Fiscal (de oficio o tras comunicación externa)",
     "tono": "t-nota",
     "destino": "mf_inicio"
    }
   ]
  },
  "mf_inicio": {
   "fase": 0,
   "titulo": "Inicio a instancia del Ministerio Fiscal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Ministerio Fiscal puede promover el expediente directamente o tras ser activado por comunicación externa. En ambos casos, el MF iniciará el presente expediente."
    },
    {
     "tipo": "lista",
     "titulo": "Dos vías de activación del Ministerio Fiscal",
     "items": [
      "A) CIUDADANO PARTICULAR (facultativa): cualquier persona puede comunicar al MF los hechos que puedan ser determinantes de la necesidad de apoyo judicial",
      "B) AUTORIDAD O FUNCIONARIO PÚBLICO (obligatoria): quien por razón de su cargo conozca los hechos DEBE comunicarlos al MF — es una obligación legal, no una facultad"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El papel del MF como garante del interés público explica esta doble vía de activación (art. 4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis a) apdo. 3, párrs. 2.º y 3.º LJV · Art. 4 LJV"
    }
   ],
   "pregunta": "¿Cuál es el origen de la comunicación al Ministerio Fiscal?",
   "opciones": [
    {
     "texto": "Comunicación voluntaria de un particular: el MF inicia el expediente de oficio",
     "tono": "t-nota",
     "destino": "documentacion"
    },
    {
     "texto": "Comunicación obligatoria de autoridades o funcionarios públicos: el MF inicia el expediente de oficio",
     "tono": "t-nota",
     "destino": "documentacion"
    }
   ]
  },
  "documentacion": {
   "fase": 1,
   "titulo": "Presentación y revisión de la documentación inicial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud debe ir acompañada de la documentación preceptiva prevista en el art. 42 bis b) apdo. 1 LJV. El Letrado de la AJ verifica que los documentos requeridos estén completos."
    },
    {
     "tipo": "lista",
     "titulo": "Documentación preceptiva — OBLIGATORIA",
     "items": [
      "✦ Documentos que acrediten la necesidad de adoptar medidas de apoyo",
      "✦ Dictamen pericial de profesionales especializados del ámbito SOCIAL",
      "✦ Dictamen pericial de profesionales especializados del ámbito SANITARIO",
      "✦ El dictamen debe recomendar las medidas de apoyo idóneas en el caso concreto"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Documentación adicional — RECOMENDABLE",
     "items": [
      "Proposición de las pruebas a practicar en la comparecencia (puede acompañarse a la solicitud)",
      "Documentos acreditativos de la relación con la persona con discapacidad (si el promotor es familiar)",
      "Certificaciones o informes médicos adicionales que acrediten la situación"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El dictamen debe ser emitido por trabajadores sociales, psicólogos, médicos forenses, neurólogos, psiquiatras u otros profesionales especializados."
    },
    {
     "tipo": "nota",
     "texto": "La proposición de prueba puede realizarse ahora (con la solicitud) Y/O en el plazo de 5 días desde la citación: ambas vías son compatibles."
    },
    {
     "tipo": "aviso",
     "texto": "Sin dictamen pericial adecuado, la solicitud puede ser inadmitida o requerir subsanación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 1 LJV"
    }
   ],
   "siguiente": "admision"
  },
  "admision": {
   "fase": 1,
   "titulo": "Examen de admisión a trámite",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la AJ examina la solicitud y la documentación aportada para determinar su admisibilidad a trámite."
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos de admisibilidad a verificar",
     "items": [
      "Legitimación del promotor (art. 42 bis a) apdo. 3 LJV)",
      "Competencia territorial del Juzgado (residencia de la persona con discapacidad)",
      "Aportación del dictamen pericial social Y sanitario",
      "Aportación de documentación acreditativa de la necesidad de las medidas",
      "Ausencia de resolución firme previa sobre el mismo objeto sin cambio de circunstancias (art. 19 LJV)",
      "Inexistencia de proceso contencioso pendiente sobre el mismo objeto (art. 6 LJV)",
      "Inexistencia de expediente simultáneo sobre idéntico objeto (art. 6.1 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 2 LJV · Arts. 6 y 19 LJV · Art. 5 LJV"
    }
   ],
   "pregunta": "¿La solicitud cumple los requisitos de admisibilidad?",
   "opciones": [
    {
     "texto": "Sí, cumple todos los requisitos — Admitir a trámite y continuar",
     "tono": "t-ok",
     "destino": "competencia"
    },
    {
     "texto": "Presenta defectos subsanables — Requerir la subsanación antes de admitir",
     "tono": "t-plazo",
     "destino": "subsanacion"
    },
    {
     "texto": "Presenta defectos insubsanables o carece de legitimación — Inadmitir",
     "tono": "t-aviso",
     "destino": "fin_inadmision"
    }
   ]
  },
  "subsanacion": {
   "fase": 1,
   "titulo": "Requerimiento de subsanación de defectos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la AJ requiere al solicitante la subsanación de los defectos apreciados, indicando con claridad qué debe corregirse y en qué plazo."
    },
    {
     "tipo": "nota",
     "texto": "No existe en la LJV un plazo específico para la subsanación; se aplica la LEC supletoriamente (art. 8 LJV). El plazo habitual es de 10 días, salvo que el Juez disponga otro."
    },
    {
     "tipo": "aviso",
     "texto": "Si el promotor es el Ministerio Fiscal, la subsanación se entiende de oficio sin necesidad de requerimiento externo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 8 LJV (supletoriedad LEC) · Art. 231 LEC"
    }
   ],
   "pregunta": "¿Se subsanan los defectos en el plazo concedido?",
   "opciones": [
    {
     "texto": "Sí — los defectos quedan subsanados: admitir a trámite y continuar",
     "tono": "t-ok",
     "destino": "competencia"
    },
    {
     "texto": "No — no se subsanan en plazo: procede la inadmisión",
     "tono": "t-aviso",
     "destino": "fin_inadmision"
    }
   ]
  },
  "competencia": {
   "fase": 1,
   "titulo": "Verificación de la competencia territorial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Es competente el Juzgado de Primera Instancia del lugar donde resida la persona con discapacidad. La competencia territorial es imperativa e inderogable: no puede modificarse por sumisión de las partes (art. 2.2 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "Si el expediente llega remitido por otro Juzgado (inhibición), verificar que la residencia actual de la persona corresponde a este partido judicial antes de proseguir la tramitación."
    },
    {
     "tipo": "aviso",
     "texto": "ATENCIÓN: si se detecta cambio de residencia habitual ANTES de la celebración de la comparecencia, deben remitirse las actuaciones al Juzgado del nuevo domicilio en el estado en que se hallen."
    },
    {
     "tipo": "nota",
     "texto": "Una vez celebrada la comparecencia, la competencia se consolida y no se traslada por cambio de residencia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis a) apdo. 2 LJV · Art. 2.2 LJV"
    }
   ],
   "pregunta": "¿Ha cambiado la residencia habitual de la persona con discapacidad antes de la comparecencia?",
   "opciones": [
    {
     "texto": "No — este Juzgado es competente; se continúa la tramitación",
     "tono": "t-ok",
     "destino": "diligencias"
    },
    {
     "texto": "Sí — debe remitirse el expediente al Juzgado del nuevo domicilio",
     "tono": "t-plazo",
     "destino": "fin_inhibicion"
    }
   ]
  },
  "diligencias": {
   "fase": 1,
   "titulo": "Práctica de diligencias previas a la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de la comparecencia, el Letrado de la AJ y la Autoridad Judicial practican las diligencias de instrucción previstas en el art. 42 bis b) apdos. 3 y 4 LJV."
    },
    {
     "tipo": "lista",
     "titulo": "Diligencias OBLIGATORIAS (preceptivas)",
     "items": [
      "Recabar certificación del REGISTRO CIVIL sobre medidas de apoyo inscritas",
      "Recabar certificación de otros Registros públicos que se consideren pertinentes (si procede)"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Diligencias POTESTATIVAS (a criterio de la Autoridad Judicial)",
     "items": [
      "Solicitar informe a la entidad pública territorial con funciones de promoción de la autonomía y asistencia a personas con discapacidad (sistema SAAD, Ley 39/2006)",
      "Solicitar informe a entidad del tercer sector de acción social debidamente habilitada como colaboradora de la Administración de Justicia"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Los informes de las entidades especializadas son potestativos: la Autoridad Judicial los solicitará atendiendo a las circunstancias del caso y a la complejidad de la situación."
    },
    {
     "tipo": "nota",
     "texto": "Finalidad: conocer si existen medidas de apoyo vigentes (voluntarias o judiciales) para evitar duplicidades y valorar suficiencia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdos. 3 y 4 LJV · Ley 39/2006 (SAAD)"
    }
   ],
   "siguiente": "citacion"
  },
  "citacion": {
   "fase": 1,
   "titulo": "Convocatoria a la comparecencia",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la AJ convoca a la comparecencia a todas las personas previstas en el art. 42 bis b) apdo. 2 LJV."
    },
    {
     "tipo": "lista",
     "titulo": "Personas que deben ser convocadas PRECEPTIVAMENTE",
     "items": [
      "Ministerio Fiscal (parte necesaria)",
      "La persona con discapacidad (parte imprescindible e inexcusable)",
      "Cónyuge no separado de hecho o legalmente, o persona en situación de hecho asimilable (si existe)",
      "Descendientes de la persona con discapacidad (si existen)",
      "Ascendientes de la persona con discapacidad (si existen)",
      "Hermanos de la persona con discapacidad (si existen)"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para proponer prueba: 5 días desde la recepción de la citación (plazo perentorio)."
    },
    {
     "tipo": "nota",
     "texto": "En la citación debe hacerse constar que los interesados disponen de un plazo de 5 días desde su recepción para proponer las diligencias de prueba que deseen practicar en la comparecencia."
    },
    {
     "tipo": "aviso",
     "texto": "La citación debe realizarse con antelación suficiente para garantizar el ejercicio efectivo del derecho de defensa. Se aplica supletoriamente la LEC (art. 8 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 2 LJV · Art. 8 LJV"
    }
   ],
   "siguiente": "prueba"
  },
  "prueba": {
   "fase": 1,
   "titulo": "Proposición de prueba por los interesados",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "Plazo de 5 días desde la recepción de la citación para que los interesados propongan diligencias de prueba para la comparecencia (art. 42 bis b) apdo. 3 LJV)."
    },
    {
     "tipo": "info",
     "texto": "El Letrado de la AJ recibe y tramita las solicitudes de prueba de los interesados y las eleva a la Autoridad Judicial para su admisión o denegación."
    },
    {
     "tipo": "nota",
     "texto": "Compatibilidad de momentos de proposición: la prueba puede haberse propuesto con la solicitud inicial (art. 42 bis b) apdo. 1) Y/O en este plazo de 5 días. Ambas vías son simultáneamente válidas."
    },
    {
     "tipo": "nota",
     "texto": "La Autoridad Judicial puede acordar prueba DE OFICIO cuando exista interés público o afecte a personas con discapacidad (art. 5 LJV). Esta facultad no está limitada a la proposición de parte."
    },
    {
     "tipo": "lista",
     "titulo": "Tipos de prueba habituales",
     "items": [
      "Nuevos dictámenes periciales complementarios",
      "Declaración de testigos sobre la situación de la persona",
      "Informes de servicios sociales o entidades colaboradoras",
      "Documentación adicional sobre recursos de apoyo disponibles"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Transcurrido el plazo sin proposición, precluye la facultad de proponer prueba para la comparecencia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 3 LJV · Art. 5 LJV"
    }
   ],
   "siguiente": "informes_preparatorios"
  },
  "informes_preparatorios": {
   "fase": 1,
   "titulo": "Recabación de informes pre-comparecencia (facultativo)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de la comparecencia, la Autoridad Judicial podrá recabar informe de las entidades especializadas para una toma de decisión fundamentada y adaptada a recursos comunitarios."
    },
    {
     "tipo": "lista",
     "titulo": "Entidades informantes (art. 42 bis b) apdo. 4 LJV)",
     "items": [
      "Entidad pública con funciones de promoción de autonomía y asistencia a personas con discapacidad (servicios sociales autonómicos)",
      "Entidad del tercer sector de acción social habilitada como colaboradora de la Administración de Justicia"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Aunque facultativo, este informe es muy recomendable para una toma de decisión fundamentada y adaptada a recursos comunitarios."
    },
    {
     "tipo": "nota",
     "texto": "El informe debe centrarse en alternativas de apoyo no judiciales y recursos de proximidad disponibles."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 4 LJV · Ley 39/2006 (SAAD)"
    }
   ],
   "siguiente": "postulacion"
  },
  "postulacion": {
   "fase": 1,
   "titulo": "Verificación de la postulación de la persona con discapacidad",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La persona con discapacidad puede actuar con su propia defensa y representación (art. 42 bis a) apdo. 4 LJV), sin necesidad de Abogado y Procurador. Esta es una regla especial favorable."
    },
    {
     "tipo": "nota",
     "texto": "Regla general del art. 3.2 LJV: Abogado y Procurador son necesarios para recursos de revisión y apelación y desde que se formule oposición en el expediente."
    },
    {
     "tipo": "aviso",
     "texto": "Si NO es previsible que la persona pueda designar Abogado y Procurador por sí misma, con la solicitud debe pedirse el nombramiento de defensor judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis a) apdo. 4 LJV · Art. 3.2 LJV · Arts. 285 ss. CC · Cap. IV LJV (arts. 43 ss.)"
    }
   ],
   "pregunta": "¿Puede la persona con discapacidad actuar con su propia defensa y representación?",
   "opciones": [
    {
     "texto": "Sí — la persona puede designar o ya ha designado Abogado y/o Procurador, o ejercerá su propia defensa",
     "tono": "t-ok",
     "destino": "adaptaciones"
    },
    {
     "texto": "No es previsible — debe solicitarse el nombramiento de defensor judicial antes de continuar",
     "tono": "t-plazo",
     "destino": "defensor_judicial"
    }
   ]
  },
  "defensor_judicial": {
   "fase": 1,
   "titulo": "Nombramiento de defensor judicial",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando no sea previsible que la persona con discapacidad designe Abogado y Procurador por sí misma, se solicita y tramita el nombramiento de defensor judicial, quien actuará a través de Abogado y Procurador."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones para el nombramiento",
     "items": [
      "Solicitar el nombramiento de defensor judicial (junto con la solicitud o durante la instrucción)",
      "El Juzgado tramita el nombramiento conforme al Cap. IV LJV y los arts. 285 ss. CC",
      "El defensor judicial designado nombra Abogado y Procurador para representar a la persona",
      "Notificar el nombramiento y dar traslado al defensor judicial de las actuaciones practicadas hasta el momento"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El defensor judicial actúa en defensa de los intereses de la persona con discapacidad. Es una figura de protección procesal, no sustitución de la voluntad."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis a) apdo. 4, párr. 2.º LJV · Arts. 285 ss. CC · Cap. IV LJV (art. 43 ss.)"
    }
   ],
   "siguiente": "adaptaciones"
  },
  "adaptaciones": {
   "fase": 1,
   "titulo": "Adaptaciones y ajustes — Art. 7 bis LJV",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la AJ realizará las adaptaciones y ajustes necesarios para garantizar que la persona con discapacidad comprende el objeto, la finalidad y los trámites del expediente (art. 42 bis a) apdo. 5, con remisión expresa al art. 7 bis LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Adaptaciones y ajustes a garantizar",
     "items": [
      "Comunicaciones en LENGUAJE CLARO, SENCILLO Y ACCESIBLE (incluyendo lectura fácil)",
      "Interpretación en LENGUA DE SIGNOS reconocida legalmente (cuando sea necesario)",
      "MEDIOS DE APOYO A LA COMUNICACIÓN ORAL para personas sordas, con discapacidad auditiva y sordociegas",
      "Participación de un PROFESIONAL EXPERTO FACILITADOR que realice tareas de adaptación y ajuste",
      "Derecho de la persona a estar ACOMPAÑADA por persona de su elección desde el primer contacto con autoridades y funcionarios"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Las adaptaciones se realizan de oficio y también a petición de cualquiera de las partes o del MF, en TODAS las fases y actuaciones procesales, incluyendo los actos de comunicación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis a) apdo. 5 LJV · Art. 7 bis LJV"
    }
   ],
   "siguiente": "comparecencia"
  },
  "comparecencia": {
   "fase": 2,
   "titulo": "Celebración de la comparecencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Autoridad Judicial preside la comparecencia, en la que se practica preceptivamente una entrevista directa con la persona con discapacidad. Este es el núcleo esencial del procedimiento."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones en la comparecencia (orden cronológico)",
     "items": [
      "1.º Entrevista de la Autoridad Judicial con la persona con discapacidad",
      "2.º Información a la persona sobre las alternativas existentes para obtener el apoyo que precisa:",
      "    a) Apoyo mediante su entorno social o comunitario",
      "    b) Medidas de apoyo de naturaleza voluntaria (arts. 255 ss. CC: poderes preventivos, autocuratela)",
      "3.º Práctica de las diligencias de prueba admitidas",
      "4.º Formulación oral de conclusiones por los interesados"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Las adaptaciones del art. 7 bis LJV deben garantizarse durante toda la comparecencia."
    },
    {
     "tipo": "nota",
     "texto": "Principio de subsidiariedad: las medidas judiciales solo proceden si las voluntarias o informales son insuficientes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdos. 5 y 6 LJV · Art. 7 bis LJV · Arts. 255–256 CC"
    }
   ],
   "pregunta": "¿La persona con discapacidad opta por una medida alternativa de apoyo (voluntaria o comunitaria) tras ser informada por la Autoridad Judicial?",
   "opciones": [
    {
     "texto": "Sí — la persona opta por medida voluntaria o apoyo comunitario: el expediente concluye en este punto",
     "tono": "t-ok",
     "destino": "fin_medida_voluntaria"
    },
    {
     "texto": "No — la persona no opta por medida alternativa: el expediente continúa hacia la adopción de medidas judiciales",
     "tono": "t-nota",
     "destino": "control_oposicion"
    }
   ]
  },
  "control_oposicion": {
   "fase": 2,
   "titulo": "Control de la oposición en la comparecencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Autoridad Judicial verifica si se ha producido oposición real a las medidas de apoyo. La oposición de determinados sujetos pone fin al expediente (art. 42 bis b) apdo. 7 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Sujetos cuya oposición PONE FIN al expediente",
     "items": [
      "La propia persona con discapacidad (oposición a cualquier tipo de apoyo)",
      "El Ministerio Fiscal",
      "Cualquiera de los interesados en la adopción de las medidas solicitadas"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "EXCEPCIÓN IMPORTANTE: La oposición referida ÚNICAMENTE a la designación como curador de una persona concreta NO se considera oposición a estos efectos. El expediente continúa aunque se discrepe sobre quién debe ser curador."
    },
    {
     "tipo": "nota",
     "texto": "Solo la oposición global y absoluta a cualquier apoyo cierra la vía de jurisdicción voluntaria."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 7 LJV"
    }
   ],
   "pregunta": "¿Se produce oposición real a las medidas de apoyo? (La discrepancia solo sobre la persona del curador NO es oposición)",
   "opciones": [
    {
     "texto": "No hay oposición — o solo existe discrepancia sobre el nombramiento del curador concreto: continuar hacia el auto",
     "tono": "t-ok",
     "destino": "auto"
    },
    {
     "texto": "Sí hay oposición real — la persona, el MF o algún interesado se opone a las medidas de apoyo",
     "tono": "t-plazo",
     "destino": "oposicion_efectos"
    }
   ]
  },
  "oposicion_efectos": {
   "fase": 2,
   "titulo": "Efectos de la oposición — Fin del expediente de JV",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La oposición pone fin al expediente de jurisdicción voluntaria. Sin embargo, la Autoridad Judicial puede adoptar provisionalmente medidas de apoyo pese a esta terminación."
    },
    {
     "tipo": "nota",
     "texto": "Si se formula oposición, quienes tengan interés legítimo podrán valorar si instar el proceso contencioso previsto en los arts. 756 ss. LEC ante el mismo Juzgado."
    },
    {
     "tipo": "aviso",
     "texto": "La oposición activa la competencia del mismo Juzgado para conocer del proceso contencioso (art. 756.2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "El art. 6.2 LJV impide continuar el expediente de JV una vez acreditada la presentación de la demanda contenciosa."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 7 LJV · Art. 6.2 LJV · Arts. 756 ss. LEC"
    }
   ],
   "pregunta": "¿Procede adoptar medidas provisionales de apoyo para la persona o su patrimonio antes de que el expediente se cierre?",
   "opciones": [
    {
     "texto": "Sí — la Autoridad Judicial adopta medidas provisionales (máximo 30 días, salvo que se presente demanda contenciosa antes)",
     "tono": "t-plazo",
     "destino": "medidas_provisionales"
    },
    {
     "texto": "No — el expediente finaliza sin medidas provisionales: valorar si instar proceso contencioso",
     "tono": "t-nota",
     "destino": "via_contenciosa"
    }
   ]
  },
  "medidas_provisionales": {
   "fase": 2,
   "titulo": "Adopción y vigencia de medidas provisionales",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Autoridad Judicial adopta provisionalmente las medidas de apoyo que considere convenientes respecto de la persona o de su patrimonio."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo máximo de vigencia: 30 días naturales. Las medidas se extinguen por el simple transcurso del plazo si no se presenta demanda contenciosa. La caducidad es automática: no requiere resolución judicial expresa."
    },
    {
     "tipo": "aviso",
     "texto": "Las medidas provisionales se extinguen ANTICIPADAMENTE si antes de los 30 días se presenta la demanda de adopción de medidas de apoyo en juicio contencioso (arts. 756 ss. LEC). Quedan absorbidas por el marco del proceso contencioso (art. 762 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Las medidas pueden referirse tanto a la persona (apoyos personales para el ejercicio de la capacidad jurídica) como a su patrimonio."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 8 LJV · Art. 762 LEC"
    }
   ],
   "pregunta": "¿Se presenta demanda contenciosa (arts. 756 ss. LEC) antes de que transcurran los 30 días de vigencia de las medidas provisionales?",
   "opciones": [
    {
     "texto": "Sí — se presenta demanda contenciosa: las medidas provisionales quedan absorbidas por el proceso",
     "tono": "t-nota",
     "destino": "fin_derivacion_contenciosa"
    },
    {
     "texto": "No — transcurren los 30 días sin demanda: las medidas provisionales se extinguen",
     "tono": "t-plazo",
     "destino": "fin_medidas_extintas"
    }
   ]
  },
  "via_contenciosa": {
   "fase": 2,
   "titulo": "Decisión sobre la vía contenciosa (art. 756 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Concluido el expediente de JV por oposición sin medidas provisionales, se valora si instar el proceso contencioso previsto en los arts. 756 ss. LEC para la adopción de medidas judiciales de apoyo."
    },
    {
     "tipo": "nota",
     "texto": "El proceso contencioso se insta ante el mismo Juzgado que conoció del expediente de JV (art. 756.2 LEC). No es necesario acudir a un órgano diferente."
    },
    {
     "tipo": "nota",
     "texto": "Legitimados: personas del art. 757 LEC (mismas que para el expediente de JV). El MF DEBE promoverlo si los demás legitimados no lo hacen y no hay otras vías suficientes de apoyo (art. 757.2 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 756 LEC · Art. 757 LEC · Art. 6.2 LJV"
    }
   ],
   "pregunta": "¿Se decide instar el proceso contencioso para la adopción de medidas judiciales de apoyo?",
   "opciones": [
    {
     "texto": "Sí — se presenta demanda ante el mismo Juzgado (arts. 756 ss. LEC)",
     "tono": "t-nota",
     "destino": "fin_derivacion_contenciosa"
    },
    {
     "texto": "No — no se insta el proceso contencioso en este momento",
     "tono": "t-aviso",
     "destino": "fin_oposicion"
    }
   ]
  },
  "auto": {
   "fase": 3,
   "titulo": "Dictado del auto que pone fin al expediente",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Una vez celebrada la comparecencia sin oposición, la Autoridad Judicial dicta el auto que pone fin al expediente. El auto debe ser conforme a lo dispuesto en la legislación civil aplicable (art. 42 bis c) apdo. 1 LJV)."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para dictar el auto: 5 días desde la terminación de la comparecencia o desde la última diligencia practicada (art. 19 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido OBLIGATORIO del auto",
     "items": [
      "✦ Medidas de apoyo concretas adoptadas (curatela y/o defensor judicial)",
      "✦ Actos o ámbitos concretos para los que se precisa apoyo (especificación detallada)",
      "✦ Tipo de curatela: ASISTENCIAL (regla general) o REPRESENTATIVA (excepcional: solo para actos que no pueden realizarse ni con apoyo)",
      "✦ Plazo para la revisión periódica de las medidas (obligatorio — art. 42 bis c) LJV)",
      "✦ Forma en que se practicará la revisión periódica"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Principios rectores del auto",
     "items": [
      "Necesidad y proporcionalidad (Art. 249 CC): medidas estrictamente necesarias",
      "Voluntad, deseos y preferencias de la persona con discapacidad (Art. 249 CC)",
      "Subsidiariedad: preferencia por medidas menos restrictivas",
      "Flexibilidad: adaptación a circunstancias cambiantes"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El auto DEBE respetar la voluntad, los deseos y las preferencias de la persona con discapacidad (art. 249 CC). La curatela representativa es excepcional y debe justificarse."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdo. 1 LJV · Arts. 249, 250, 268–270 CC · Art. 19 LJV"
    }
   ],
   "siguiente": "notificacion"
  },
  "notificacion": {
   "fase": 3,
   "titulo": "Notificación del auto y comunicación a Registros",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Dictado el auto, el Letrado de la AJ procede a las notificaciones a las partes y a las comunicaciones registrales correspondientes."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones de comunicación y notificación",
     "items": [
      "1.º Notificar el auto a todas las partes personadas en el expediente",
      "2.º Comunicar DE OFICIO al Registro Civil para la inscripción o anotación que corresponda (OBLIGATORIO — art. 22.2 LJV)",
      "3.º A petición EXCLUSIVA de la persona en cuyo favor se constituyó el apoyo: comunicar al Registro de la Propiedad, Mercantil, de Bienes Muebles u otro Registro público pertinente",
      "4.º Expedir mandamiento o testimonio para inscripción registral — remisión por medios electrónicos (art. 22 LJV)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Las comunicaciones a Registros DISTINTOS del Civil solo se realizan a petición de la persona beneficiaria del apoyo (art. 755 LEC). NO se realizan de oficio. Esta regla protege la privacidad de la persona."
    },
    {
     "tipo": "nota",
     "texto": "La ejecución del auto se rige por los arts. 521–522 LEC en virtud de la remisión del art. 22.1 LJV."
    },
    {
     "tipo": "ley",
     "texto": "Art. 22 LJV · Art. 755 LEC · Arts. 521–522 LEC"
    }
   ],
   "pregunta": "¿Alguna de las partes interpone recurso de apelación contra el auto en plazo?",
   "opciones": [
    {
     "texto": "No — el auto queda firme sin recursos",
     "tono": "t-ok",
     "destino": "expediente_firme"
    },
    {
     "texto": "Sí — se interpone recurso de apelación ante la Audiencia Provincial",
     "tono": "t-plazo",
     "destino": "recurso_apelacion"
    }
   ]
  },
  "recurso_apelacion": {
   "fase": 3,
   "titulo": "Recurso de apelación contra el auto",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las resoluciones definitivas (el auto que pone fin al expediente) pueden ser recurridas en apelación por cualquier interesado perjudicado (art. 20.2 LJV). Se requiere Abogado y Procurador (art. 3.2 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "El recurso de apelación NO tiene efectos suspensivos, salvo que la ley lo prevea expresamente (art. 20.2 LJV in fine). Las medidas adoptadas en el auto SIGUEN VIGENTES durante la tramitación del recurso."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones procesales",
     "items": [
      "Recibir el escrito de interposición del recurso y verificar que se interpone con Abogado y Procurador",
      "Remitir los autos a la Audiencia Provincial correspondiente",
      "Las partes formulan sus alegaciones ante la Audiencia (escrito de oposición)",
      "La Audiencia Provincial resuelve el recurso mediante auto"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 20.2 LJV · Art. 3.2 LJV"
    }
   ],
   "pregunta": "¿Cuál es el resultado del recurso de apelación?",
   "opciones": [
    {
     "texto": "Desestimado — la Audiencia Provincial confirma el auto del Juzgado de Primera Instancia",
     "tono": "t-ok",
     "destino": "expediente_firme"
    },
    {
     "texto": "Estimado — la Audiencia Provincial modifica o revoca el auto",
     "tono": "t-plazo",
     "destino": "fin_recurso_estimado"
    }
   ]
  },
  "expediente_firme": {
   "fase": 3,
   "titulo": "Auto firme — Medidas de apoyo en vigor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El auto ha adquirido firmeza. Las medidas de apoyo están en vigor y el expediente principal ha concluido satisfactoriamente."
    },
    {
     "tipo": "nota",
     "texto": "Las medidas deberán revisarse periódicamente en el plazo y forma establecidos en el propio auto (art. 42 bis c) LJV). Anotar la fecha de la próxima revisión."
    },
    {
     "tipo": "nota",
     "texto": "La revisión puede ser: (a) PERIÓDICA, al alcanzar el plazo del auto; o (b) ANTICIPADA, a solicitud de las personas legitimadas o de quien ejerza el apoyo, antes del plazo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdo. 1 LJV · Art. 278 CC"
    }
   ],
   "pregunta": "¿Qué ocurre a continuación en este procedimiento?",
   "opciones": [
    {
     "texto": "Tramitar la revisión periódica (cuando se alcance el plazo establecido en el auto)",
     "tono": "t-nota",
     "destino": "inicio_revision"
    },
    {
     "texto": "Tramitar una revisión anticipada (solicitud antes del plazo por persona legitimada o quien ejerce el apoyo)",
     "tono": "t-nota",
     "destino": "revision_anticipada"
    },
    {
     "texto": "Concluir la tramitación actual — las medidas siguen vigentes; la revisión se tramitará cuando proceda",
     "tono": "t-ok",
     "destino": "fin_expediente_ok"
    }
   ]
  },
  "inicio_revision": {
   "fase": 4,
   "titulo": "Inicio de la revisión periódica de las medidas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se inicia la revisión periódica de las medidas al alcanzar el plazo establecido en el auto (art. 42 bis c) apdo. 1 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El mismo trámite del art. 42 bis c) es aplicable tanto a la revisión periódica como a la revisión anticipada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdo. 1 LJV · Art. 278 CC · Art. 761 LEC"
    }
   ],
   "siguiente": "competencia_revision"
  },
  "revision_anticipada": {
   "fase": 4,
   "titulo": "Solicitud de revisión anticipada de las medidas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La revisión puede instarse ANTES de que transcurra el plazo previsto en el auto, a solicitud de las personas legitimadas."
    },
    {
     "tipo": "lista",
     "titulo": "Personas legitimadas para solicitar la revisión anticipada",
     "items": [
      "El Ministerio Fiscal",
      "La propia persona con discapacidad",
      "Su cónyuge no separado de hecho o legalmente, o quien se encuentre en situación asimilable",
      "Sus descendientes, ascendientes o hermanos",
      "Quien ejerza las funciones de apoyo (curador, defensor judicial)"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Causas habituales de revisión anticipada",
     "items": [
      "Mejoría o empeoramiento de la situación de la persona",
      "Cambio en los recursos de apoyo disponibles",
      "Incumplimiento de deberes por parte del apoyante",
      "Modificación de la voluntad o preferencias de la persona",
      "Cambio de residencia a otra circunscripción judicial"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La solicitud debe motivar el cambio de circunstancias que justifica la revisión anticipada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdo. 1, párr. 2.º LJV"
    }
   ],
   "siguiente": "competencia_revision"
  },
  "competencia_revision": {
   "fase": 4,
   "titulo": "Verificación de la competencia para la revisión",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado que dictó las medidas retiene la competencia para la revisión, SIEMPRE QUE la persona con discapacidad permanezca residiendo en la misma circunscripción."
    },
    {
     "tipo": "aviso",
     "texto": "Si la persona ha cambiado de residencia, el Juzgado de la NUEVA residencia es el competente para la revisión."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para remitir el testimonio completo del expediente: el Juzgado ANTERIOR debe enviarlo en los 10 días siguientes a la solicitud del nuevo Juzgado (art. 42 bis c) apdo. 2 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdo. 2 LJV"
    }
   ],
   "pregunta": "¿La persona con discapacidad sigue residiendo en la misma circunscripción que cuando se dictaron las medidas?",
   "opciones": [
    {
     "texto": "Sí — el mismo Juzgado mantiene la competencia para la revisión",
     "tono": "t-ok",
     "destino": "actuaciones_revision"
    },
    {
     "texto": "No — ha cambiado de residencia: el nuevo Juzgado debe solicitar el testimonio completo al anterior (plazo: 10 días)",
     "tono": "t-plazo",
     "destino": "remision_testimonio"
    }
   ]
  },
  "remision_testimonio": {
   "fase": 4,
   "titulo": "Petición y recepción del testimonio completo del expediente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado de la nueva residencia solicita el testimonio completo del expediente al Juzgado que anteriormente conoció del mismo."
    },
    {
     "tipo": "plazo",
     "texto": "El Juzgado ANTERIOR debe remitir el testimonio completo en los 10 días siguientes a la solicitud (art. 42 bis c) apdo. 2 LJV)."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del nuevo Juzgado",
     "items": [
      "Verificar la competencia territorial (residencia actual de la persona)",
      "Remitir la solicitud formal de testimonio completo al Juzgado anterior",
      "Acusar recibo cuando llegue el testimonio y verificar su integridad",
      "Incorporar el testimonio al expediente de revisión y continuar la tramitación"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Mientras se recibe el testimonio, el procedimiento de revisión queda en suspenso."
    },
    {
     "tipo": "aviso",
     "texto": "Si el juzgado originario no remite el testimonio en plazo, podrá requerirse judicialmente su envío."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdo. 2, párr. 2.º LJV"
    }
   ],
   "siguiente": "actuaciones_revision"
  },
  "actuaciones_revision": {
   "fase": 4,
   "titulo": "Práctica de actuaciones en la revisión",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Autoridad Judicial lleva a cabo las actuaciones necesarias para valorar si las medidas de apoyo vigentes siguen siendo adecuadas y proporcionadas a la situación actual de la persona."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones PRECEPTIVAS",
     "items": [
      "✦ Entrevista de la Autoridad Judicial con la persona con discapacidad (acto inexcusable)",
      "✦ Traslado del resultado de las actuaciones a: persona con discapacidad, quien ejerza el apoyo, MF, interesados personados en el expediente previo"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones POTESTATIVAS (a criterio de la Autoridad Judicial)",
     "items": [
      "Recabar dictamen pericial cuando lo considere necesario, atendiendo a las circunstancias del caso",
      "Recabar informe de la entidad pública territorial (sistema SAAD, Ley 39/2006)",
      "Recabar informe de entidad del tercer sector de acción social habilitada (art. 42 bis b) apdo. 4)",
      "Cualquier otra actuación que considere necesaria para valorar la situación"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La entrevista con la persona debe realizarse con los ajustes necesarios para garantizar su comprensión y participación efectiva (Art. 7 bis LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdo. 3 LJV · Ley 39/2006"
    }
   ],
   "siguiente": "revision_traslado"
  },
  "revision_traslado": {
   "fase": 4,
   "titulo": "Traslado a partes interesadas del resultado de actuaciones",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Del resultado de las actuaciones de revisión se dará traslado a las siguientes personas:"
    },
    {
     "tipo": "lista",
     "titulo": "Partes a notificar",
     "items": [
      "La persona con discapacidad",
      "Quien ejerza las funciones de apoyo (curador)",
      "El Ministerio Fiscal",
      "Los interesados personados en el expediente previo"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para que los notificados formulen alegaciones y aporten prueba: 10 días desde el traslado."
    },
    {
     "tipo": "nota",
     "texto": "Las alegaciones deben centrarse en la adecuación de las medidas actuales a las circunstancias presentes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdo. 3 LJV"
    }
   ],
   "siguiente": "oposicion_revision"
  },
  "oposicion_revision": {
   "fase": 4,
   "titulo": "Control de la oposición en la revisión",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Transcurrido el plazo de 10 días para alegaciones, la Autoridad Judicial verifica si alguno de los notificados ha formulado oposición."
    },
    {
     "tipo": "nota",
     "texto": "Si hay oposición, el expediente de revisión de JV finaliza. La revisión puede instarse entonces por la vía contenciosa del art. 761 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdos. 3 y 4 LJV · Art. 761 LEC"
    }
   ],
   "pregunta": "¿Formula oposición alguno de los notificados (persona con discapacidad, quien ejerce el apoyo, MF o interesados del expediente previo)?",
   "opciones": [
    {
     "texto": "No — ninguno formula oposición: se procede a dictar el nuevo auto de revisión",
     "tono": "t-ok",
     "destino": "nuevo_auto"
    },
    {
     "texto": "Sí — se formula oposición: el expediente de revisión finaliza; cabe instar la revisión por la vía contenciosa (art. 761 LEC)",
     "tono": "t-plazo",
     "destino": "fin_revision_contenciosa"
    }
   ]
  },
  "nuevo_auto": {
   "fase": 4,
   "titulo": "Dictado del nuevo auto de revisión",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Recibidas las alegaciones y practicada la prueba, la Autoridad Judicial dicta el nuevo auto con el contenido que proceda atendiendo a las circunstancias concurrentes."
    },
    {
     "tipo": "lista",
     "titulo": "El nuevo auto puede, entre otras cosas",
     "items": [
      "Confirmar las medidas vigentes sin modificación",
      "Modificar el alcance o contenido de las medidas de apoyo",
      "Ampliar o reducir los ámbitos en que se presta apoyo",
      "Cambiar la naturaleza de la curatela (de asistencial a representativa o viceversa)",
      "Establecer un nuevo plazo de revisión periódica",
      "Extinguir las medidas si ya no son necesarias o la persona lo solicita"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El nuevo auto debe respetar los mismos principios rectores: necesidad, proporcionalidad, voluntad de la persona, subsidiariedad y flexibilidad (art. 249 CC)."
    },
    {
     "tipo": "plazo",
     "texto": "El auto de revisión fijará un nuevo plazo para la próxima revisión periódica."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdo. 4 LJV · Arts. 249, 278 CC"
    }
   ],
   "siguiente": "fin_revision_ok"
  },
  "fin_no_procede": {
   "fase": 0,
   "titulo": "No procede la apertura de expediente",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Tras la verificación inicial, se determina que no procede la adopción de medida judicial de apoyo estable."
    },
    {
     "tipo": "lista",
     "titulo": "Motivos habituales de no proceder",
     "items": [
      "Existencia de medidas voluntarias suficientes (autocuratela, poder preventivo)",
      "La persona cuenta con apoyos informales adecuados del entorno",
      "La necesidad de apoyo es ocasional y puede cubrirse con defensor judicial puntual",
      "No se acredita la necesidad de intervención judicial"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Se recomienda documentar los motivos de no proceder para eventual revisión futura."
    },
    {
     "tipo": "nota",
     "texto": "La persona podrá solicitar la apertura de expediente judicial en el futuro si las alternativas resultan insuficientes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 249 CC (principio de subsidiariedad)"
    }
   ],
   "fin": "neutral"
  },
  "fin_medida_voluntaria": {
   "fase": 2,
   "titulo": "Fin del expediente — La persona opta por medida alternativa",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de jurisdicción voluntaria concluye porque la persona con discapacidad ha optado, tras ser informada por la Autoridad Judicial, por una medida de apoyo de naturaleza voluntaria o comunitaria."
    },
    {
     "tipo": "nota",
     "texto": "Este desenlace es el más acorde con el principio de subsidiariedad de las medidas judiciales (art. 249 CC): si la persona puede obtener el apoyo necesario por vía voluntaria, la intervención judicial no es precisa."
    },
    {
     "tipo": "lista",
     "titulo": "Alternativas que pueden haberse elegido",
     "items": [
      "Autocuratela notarial (Arts. 251–255 CC)",
      "Poder preventivo o mandato preventivo (Arts. 256–262 CC)",
      "Guarda de hecho con reconocimiento judicial (Arts. 263–267 CC)",
      "Apoyos informales del entorno familiar o comunitario"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El Letrado de la AJ dejará constancia del resultado en el expediente y procederá al archivo de las actuaciones."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 6 LJV · Art. 249 CC · Arts. 255–256 CC"
    }
   ],
   "fin": "success"
  },
  "fin_inadmision": {
   "fase": 1,
   "titulo": "Inadmisión de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud no ha sido admitida a trámite por presentar defectos insubsanables o por carecer el promotor de legitimación."
    },
    {
     "tipo": "nota",
     "texto": "Contra la resolución de inadmisión: recurso de reposición si es interlocutoria, o recurso de apelación si pone fin al expediente (art. 20 LJV)."
    },
    {
     "tipo": "aviso",
     "texto": "Si el MF estima que existen hechos que justifican la apertura del expediente, puede promoverlo de oficio con independencia de la inadmisión de la solicitud particular (art. 4 LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 20 LJV · Art. 4 LJV"
    }
   ],
   "fin": "error"
  },
  "fin_inhibicion": {
   "fase": 1,
   "titulo": "Remisión de actuaciones al Juzgado competente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Este Juzgado no es territorialmente competente. Las actuaciones deben remitirse al Juzgado de Primera Instancia del lugar de residencia actual de la persona con discapacidad."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones a realizar",
     "items": [
      "Dictar resolución declarando la falta de competencia territorial",
      "Remitir las actuaciones en el estado en que se hallen al Juzgado competente",
      "Notificar a las partes la remisión y el Juzgado al que se dirigen"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El Juzgado receptor continuará la tramitación desde el punto en que se encontraba el expediente en el momento de la remisión."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis a) apdo. 2, párr. 2.º LJV · Art. 2.2 LJV"
    }
   ],
   "fin": "neutral"
  },
  "fin_derivacion_contenciosa": {
   "fase": 2,
   "titulo": "Derivación al proceso contencioso — Arts. 756 ss. LEC",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de JV ha concluido. La adopción (o continuación) de las medidas judiciales de apoyo se tramitará por la vía del proceso contencioso de los arts. 756 ss. LEC."
    },
    {
     "tipo": "lista",
     "titulo": "Aspectos clave del proceso contencioso de medidas de apoyo",
     "items": [
      "Órgano competente: el mismo Juzgado que conoció del expediente de JV (art. 756.2 LEC)",
      "Tramitación: juicio verbal con especialidades (art. 753 LEC)",
      "Pruebas preceptivas de oficio: entrevista, audiencia a familiares, dictamen pericial (art. 759 LEC)",
      "Tramitación PREFERENTE cuando se designa apoyo con funciones representativas (art. 753 LEC)",
      "La sentencia debe ser conforme a la legislación civil aplicable (art. 760 LEC)",
      "La revisión de las medidas de la sentencia se tramita por art. 42 bis c) LJV (art. 761 LEC)"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Diferencias clave con jurisdicción voluntaria:",
     "items": [
      "Contradicción plena entre partes",
      "Mayor ámbito de prueba y recursos",
      "Resolución mediante sentencia, no auto",
      "Posibilidad de apelación ordinaria"
     ]
    },
    {
     "tipo": "ley",
     "texto": "Arts. 756–762 LEC · Art. 753 LEC · Art. 754 LEC (exclusión publicidad)"
    }
   ],
   "fin": "neutral"
  },
  "fin_medidas_extintas": {
   "fase": 2,
   "titulo": "Extinción de medidas provisionales — Transcurso de 30 días",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Han transcurrido los 30 días desde la adopción de las medidas provisionales sin que se haya presentado demanda del proceso contencioso. Las medidas provisionales se extinguen automáticamente."
    },
    {
     "tipo": "aviso",
     "texto": "La persona con discapacidad queda sin las medidas de apoyo provisionales. Valorar URGENTEMENTE si procede instar el proceso contencioso (arts. 756 ss. LEC)."
    },
    {
     "tipo": "nota",
     "texto": "El MF, en caso de que no existan otras vías suficientes, debe promover el proceso contencioso si los demás legitimados no lo hacen (art. 757.2 LEC)."
    },
    {
     "tipo": "lista",
     "titulo": "Para reiniciar el procedimiento:",
     "items": [
      "Verificar si persisten los hechos que justifican medidas de apoyo",
      "Actualizar dictamen pericial si ha transcurrido tiempo significativo",
      "Promover nuevo expediente ante el juzgado de la residencia actual"
     ]
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 8 LJV · Arts. 756–757 LEC"
    }
   ],
   "fin": "warning"
  },
  "fin_oposicion": {
   "fase": 2,
   "titulo": "Fin del expediente — Oposición sin continuación procesal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de JV ha concluido por oposición y no se ha instado el proceso contencioso. La persona con discapacidad queda sin las medidas de apoyo solicitadas."
    },
    {
     "tipo": "aviso",
     "texto": "Si el MF considera que la persona necesita apoyo y no hay otras vías suficientes, deberá promover de oficio el proceso contencioso (art. 757.2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Cualquier persona legitimada puede instar el proceso contencioso en el futuro si la situación lo requiere."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis b) apdo. 7 LJV · Art. 757.2 LEC"
    }
   ],
   "fin": "warning"
  },
  "fin_recurso_estimado": {
   "fase": 3,
   "titulo": "Auto modificado o revocado en apelación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial ha estimado el recurso de apelación y ha modificado o revocado el auto del Juzgado de Primera Instancia."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones tras la resolución de apelación",
     "items": [
      "Notificar la resolución de la Audiencia Provincial a todas las partes",
      "Si se modifican medidas: actualizar la inscripción en el Registro Civil (y otros registros, a petición de la persona)",
      "Si se revocan las medidas: proceder al archivo y comunicaciones registrales pertinentes",
      "Si se establece nuevo plazo de revisión: anotarlo y programar la revisión periódica"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 20.2 LJV · Art. 755 LEC"
    }
   ],
   "fin": "neutral"
  },
  "fin_expediente_ok": {
   "fase": 3,
   "titulo": "Expediente principal concluido — Medidas en vigor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de provisión de medidas judiciales de apoyo ha concluido satisfactoriamente. Las medidas de apoyo están en vigor."
    },
    {
     "tipo": "lista",
     "titulo": "Estado al cierre del expediente principal",
     "items": [
      "Auto firme con las medidas de apoyo establecidas y conformes a la legislación civil",
      "Medidas comunicadas al Registro Civil de oficio",
      "Revisión periódica programada según el plazo del auto",
      "Persona con discapacidad con las medidas de apoyo que precisa"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La revisión se tramitará en el futuro al alcanzar el plazo del auto o cuando algún legitimado lo solicite anticipadamente (art. 42 bis c) LJV)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) LJV · Art. 278 CC"
    }
   ],
   "fin": "success"
  },
  "fin_revision_ok": {
   "fase": 4,
   "titulo": "Revisión concluida — Nuevo auto en vigor",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La revisión de las medidas ha concluido satisfactoriamente. El nuevo auto está en vigor."
    },
    {
     "tipo": "lista",
     "titulo": "Estado al cierre de la revisión",
     "items": [
      "Nuevo auto dictado con el contenido adecuado a las circunstancias actuales",
      "Nuevo auto notificado a las partes y comunicado al Registro Civil",
      "Próxima revisión periódica programada según el nuevo plazo establecido"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Efectos de la resolución",
     "items": [
      "Las medidas confirmadas, modificadas o nuevas surten efecto desde la notificación",
      "Se procede a la inscripción registral de las modificaciones",
      "Se comunican los cambios a todos los interesados",
      "Se establece nuevo plazo para próxima revisión"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El ciclo de revisión periódica continúa. La próxima revisión se tramitará al alcanzar el nuevo plazo o ante solicitud anticipada de parte legitimada."
    },
    {
     "tipo": "nota",
     "texto": "Contra el auto de revisión no cabe recurso ordinario, pero sí los recursos extraordinarios por infracción procesal o casación, en su caso."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdos. 3 y 4 LJV · Art. 278 CC"
    }
   ],
   "fin": "success"
  },
  "fin_revision_contenciosa": {
   "fase": 4,
   "titulo": "Fin de la revisión por oposición — Vía contenciosa (art. 761 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de revisión de JV ha concluido por oposición de alguno de los notificados. La revisión de las medidas puede instarse por la vía del proceso contencioso del art. 761 LEC."
    },
    {
     "tipo": "lista",
     "titulo": "Personas legitimadas para instar el proceso contencioso de revisión",
     "items": [
      "Las personas del art. 757 LEC (persona con discapacidad, cónyuge/asimilable, descendientes, ascendientes, hermanos)",
      "El Ministerio Fiscal",
      "Quien ejerza el apoyo de la persona con discapacidad"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El proceso contencioso de revisión se tramita ante el mismo Juzgado competente para la revisión."
    },
    {
     "tipo": "ley",
     "texto": "Art. 42 bis c) apdo. 3 LJV · Art. 761 LEC · Art. 757 LEC"
    }
   ],
   "fin": "neutral"
  }
 },
 "pie": "Referencias normativas\n  Art. 42 bis a), b), c) LJV\n  Arts. 249–298 CC (L. 8/2021)\n  Arts. 756–762 LEC\n  Art. 7 bis LJV\n  Art. 12 CRPD (2006)\n  Ley 39/2006 (SAAD)"
});

/* Migrado por tools/migrate.js desde sources/actual/G03.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "lec-intervencion-caudal",
 "ley": "LEC",
 "grupo": "División judicial de patrimonios",
 "titulo": "De la intervención del caudal hereditario (artículos 790 a 796 LEC)",
 "corto": "Intervención del caudal hereditario",
 "articulos": [
  "790",
  "791",
  "792",
  "793",
  "794",
  "795",
  "796"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20261007",
  "origen": "G03"
 },
 "fases": [
  "Noticia del fallecimiento",
  "Medidas urgentes · art. 790",
  "Averiguación · art. 791.1",
  "Auto de intervención · arts. 791.2 / 792",
  "Citación e inventario · arts. 793–794",
  "Administración del caudal · art. 795",
  "Cesación · art. 796"
 ],
 "actores": {
  "juez": "Tribunal (Juez/Magistrado)",
  "laj": "Letrado de la Administración de Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Noticia del fallecimiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal recibe noticia del fallecimiento del causante. Esta noticia puede llegar por diversas vías: comunicación del Registro Civil al amparo de la Ley 20/2011; denuncia de vecinos, autoridades o fuerzas de seguridad; o actuaciones judiciales previas en las que el óbito emerge incidentalmente."
    },
    {
     "tipo": "nota",
     "texto": "Antes de adoptar medida alguna, debe verificarse si constan testamento o parientes del causante con derecho hereditario."
    },
    {
     "tipo": "ley",
     "texto": "Art. 790 LEC · Ley 20/2011, del Registro Civil · Regl. (UE) 650/2012 (competencia internacional)"
    }
   ],
   "pregunta": "¿Consta testamento o existen parientes conocidos del difunto (ascendientes, descendientes, cónyuge, persona en situación asimilable, o colaterales hasta el 4.º grado)?",
   "opciones": [
    {
     "texto": "No consta testamento ni parientes conocidos — procede actuación de oficio (art. 790)",
     "tono": "t-aviso",
     "destino": "medidas_790"
    },
    {
     "texto": "Constan parientes o existe testamento, pero se solicita la intervención judicial del caudal (art. 792)",
     "tono": "t-nota",
     "destino": "intervencion_a_instancia"
    }
   ]
  },
  "medidas_790": {
   "fase": 1,
   "titulo": "Medidas urgentes de seguridad — actuación de oficio (art. 790.1)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sin esperar solicitud de parte, el Tribunal adopta de oficio las medidas de seguridad necesarias para proteger el patrimonio del difunto frente a su sustracción u ocultación. La resolución es un AUTO."
    },
    {
     "tipo": "lista",
     "titulo": "Medidas que puede adoptar el Tribunal",
     "items": [
      "Acordar el enterramiento del difunto si fuera necesario y no se hubiera efectuado",
      "Asegurar los bienes susceptibles de sustracción u ocultación (principalmente bienes muebles)",
      "Ocupar y custodiar libros, papeles, correspondencia y efectos del difunto",
      "Adoptar cualesquiera otras medidas de conservación que las circunstancias exijan"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Son supuestos asimilados a la ausencia de herederos: (a) los parientes están ausentes; (b) algún pariente es menor de edad sin representante legal (reforma Ley 8/2021)."
    },
    {
     "tipo": "aviso",
     "texto": "Bienes inmuebles: la publicidad registral los protege de forma suficiente. Las medidas materiales recaen principalmente sobre bienes muebles, documentos y efectos de fácil desplazamiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 790.1 LEC · Ley 8/2021, de apoyo a personas con discapacidad · Arts. 215 ss. CC (tutela y curatela)"
    }
   ],
   "pregunta": "¿Comparecen parientes (hasta 4.º grado), cónyuge o persona en situación asimilable, o se nombra representante legal al menor?",
   "opciones": [
    {
     "texto": "Sí: comparecen parientes o se nombra representante al menor",
     "tono": "t-ok",
     "destino": "entrega_790"
    },
    {
     "texto": "No comparece nadie ni se nombra representante — procede averiguación (art. 791)",
     "tono": "t-aviso",
     "destino": "averiguacion_791"
    }
   ]
  },
  "entrega_790": {
   "fase": 1,
   "titulo": "Entrega de bienes y remisión al Notario (art. 790.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al comparecer los parientes o nombrarse representante legal del menor, el LAJ procede a la entrega de los bienes y efectos del difunto que estuvieran bajo custodia judicial y comunica a los comparecientes su obligación de acudir al Notario."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ",
     "items": [
      "Levantar acta de comparecencia con identificación de los comparecientes",
      "Relacionar y entregar los bienes y efectos custodiados mediante acta de entrega",
      "Informar de la obligación de promover la declaración de herederos ante Notario",
      "Documentar la entrega y archivar el expediente"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "ATENCIÓN: la entrega de bienes NO equivale a declaración de herederos. Los comparecientes deben acudir necesariamente al Notario para iniciar el expediente notarial de declaración de herederos abintestato (arts. 55 y 56 de la Ley del Notariado, en la redacción de la Ley 15/2015 de Jurisdicción Voluntaria)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 790.2 LEC · Arts. 55 y 56 de la Ley del Notariado · Ley 15/2015, de Jurisdicción Voluntaria"
    }
   ],
   "fin": "success"
  },
  "averiguacion_791": {
   "fase": 2,
   "titulo": "Averiguación testamentaria y de parientes (art. 791.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ actúa mediante DILIGENCIA para recabar la información precisa sobre si el difunto otorgó testamento y si tiene parientes con derecho hereditario. Esta fase es de instrucción pura: no implica ninguna resolución judicial hasta que se tenga la información necesaria."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ (obligatorias)",
     "items": [
      "Solicitar certificado al Registro General de Actos de Última Voluntad (RAUV) — Ministerio de Justicia, Decreto de 2 de junio de 1944",
      "Recabar certificado de defunción del Registro Civil — Ley 20/2011, de 21 de julio"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Actuación supletoria del Tribunal (solo si no hay otros medios)",
     "items": [
      "El Tribunal ordena por PROVIDENCIA el examen de parientes, amigos o vecinos del difunto",
      "Objeto del examen: si el difunto murió sin testamento y si tiene parientes con derecho a la herencia",
      "Naturaleza: informativo, no es declaración testifical en sentido procesal estricto"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El certificado del RAUV acredita de forma fehaciente si el causante otorgó algún acto de última voluntad inscrito en España y, en su caso, cuál fue el más reciente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 791.1 LEC · Decreto de 2 de junio de 1944 (RAUV) · Ley 20/2011, del Registro Civil"
    }
   ],
   "pregunta": "¿Cuál es el resultado de la averiguación?",
   "opciones": [
    {
     "texto": "Confirmado: el causante murió sin testamento y sin parientes conocidos con derecho hereditario",
     "tono": "t-aviso",
     "destino": "auto_791_2"
    },
    {
     "texto": "Aparecen parientes o testamento — se reconvierte en intervención a instancia de parte (art. 792)",
     "tono": "t-ok",
     "destino": "intervencion_a_instancia"
    }
   ]
  },
  "auto_791_2": {
   "fase": 3,
   "titulo": "Auto de intervención del caudal — vacío sucesorio (art. 791.2)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Confirmado el vacío sucesorio, el Tribunal dicta AUTO ordenando la intervención formal del caudal. Es la resolución constitutiva de todo el sistema de intervención de oficio."
    },
    {
     "tipo": "lista",
     "titulo": "El AUTO debe ordenar expresamente",
     "items": [
      "Ocupar los libros, papeles y correspondencia del difunto",
      "Inventariar y depositar los bienes con disposición sobre su administración",
      "Nombrar, si procede, persona (con cargo al caudal) para efectuar y garantizar el inventario y su depósito",
      "Comunicar de OFICIO a la Delegación de Economía y Hacienda el resultado de las diligencias"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "La comunicación a la Delegación de Economía y Hacienda debe realizarse EN LA MISMA RESOLUCIÓN que acuerda la intervención, con traslado de toda la documentación obtenida en la averiguación."
    },
    {
     "tipo": "nota",
     "texto": "Fundamento: art. 956 CC (el Estado hereda a falta de otros). Las CCAA con derecho civil propio (Cataluña, Aragón, Navarra, País Vasco, Galicia, Baleares) pueden tener atribuida a la Comunidad la condición de heredera abintestato con carácter preferente o concurrente."
    },
    {
     "tipo": "ley",
     "texto": "Art. 791.2 LEC · Art. 956 CC · Ley 33/2003, del Patrimonio de las Administraciones Públicas · Ley 39/2015, del Procedimiento Administrativo Común"
    }
   ],
   "pregunta": "¿Comunica alguna Administración Pública que ha iniciado el procedimiento de declaración como heredera abintestato?",
   "opciones": [
    {
     "texto": "Sí: la Administración General del Estado o una CCAA comunica el inicio del expediente",
     "tono": "t-ok",
     "destino": "admon_791_3"
    },
    {
     "texto": "No: ninguna Administración comunica inicio de expediente",
     "tono": "t-nota",
     "destino": "medidas_793_1"
    }
   ]
  },
  "admon_791_3": {
   "fase": 3,
   "titulo": "Designación de la Administración como administradora del caudal (art. 791.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Administración comunicante (Estado o CCAA) queda designada como administradora del caudal hereditario con un régimen especial diferente al del administrador privado del art. 795."
    },
    {
     "tipo": "lista",
     "titulo": "Régimen especial de la Administración administradora",
     "items": [
      "NO se le exige caución: la solvencia patrimonial pública actúa como garantía institucional",
      "Los informes periciales se realizan mediante los servicios técnicos propios de la Administración",
      "OBLIGACIÓN: comunicar al Tribunal la resolución administrativa que ponga fin al procedimiento, sea cual sea su sentido"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "PLAZOS CRÍTICOS: si la resolución deniega la declaración como heredera, la Administración debe solicitar nuevo administrador judicial en el plazo de UN MES. Transcurrido ese mes, CESA AUTOMÁTICAMENTE, con independencia de si ha presentado o no la solicitud."
    },
    {
     "tipo": "ley",
     "texto": "Art. 791.3 LEC · Ley 33/2003 del Patrimonio de las Administraciones Públicas · Ley 39/2015 del Procedimiento Administrativo Común"
    }
   ],
   "pregunta": "¿Cuál es el resultado del procedimiento administrativo de declaración de heredero?",
   "opciones": [
    {
     "texto": "La resolución DECLARA a la Administración heredera abintestato",
     "tono": "t-ok",
     "destino": "admon_heredera"
    },
    {
     "texto": "La resolución DENIEGA la declaración a favor de la Administración",
     "tono": "t-aviso",
     "destino": "admon_no_heredera"
    }
   ]
  },
  "admon_heredera": {
   "fase": 3,
   "titulo": "Administración declarada heredera — provisiones para entrega (art. 791.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolución administrativa firme declara a la Administración heredera abintestato. El Tribunal debe actuar con urgencia para proceder a la entrega del caudal."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del Tribunal",
     "items": [
      "Verificar que la resolución administrativa es firme",
      "Adoptar ANTES DE UN MES las provisiones conducentes a la entrega del caudal a la Administración",
      "Acordar la entrega formal de los bienes y derechos inventariados",
      "Levantar acta de entrega y comunicar al Registro de la Propiedad el fin de la administración judicial",
      "Archivar el expediente"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Plazo PERENTORIO: el Tribunal debe adoptar las provisiones de entrega en el plazo máximo de UN MES desde la comunicación de la resolución administrativa declarando a la Administración heredera."
    },
    {
     "tipo": "ley",
     "texto": "Art. 791.3 LEC · Art. 956 CC · Ley 33/2003 del Patrimonio de las Administraciones Públicas"
    }
   ],
   "fin": "success"
  },
  "admon_no_heredera": {
   "fase": 3,
   "titulo": "Administración no declarada heredera — solicitud de nuevo administrador (art. 791.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolución administrativa deniega la declaración de heredero a favor de la Administración. Esta no puede continuar como administradora del caudal."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones urgentes",
     "items": [
      "La Administración debe solicitar al Tribunal la designación de nuevo administrador judicial",
      "Plazo para presentar la solicitud: UN MES desde la comunicación de la resolución denegatoria",
      "El LAJ tramita la solicitud y eleva al Tribunal para nombramiento del nuevo administrador conforme al art. 795",
      "Transcurrido el mes sin solicitud: la Administración CESA AUTOMÁTICAMENTE como administradora"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: UN MES desde la notificación de la resolución denegatoria para solicitar nuevo administrador."
    },
    {
     "tipo": "aviso",
     "texto": "El cese automático opera por el mero transcurso del plazo, con independencia de cualquier otra circunstancia. Verificar fecha de notificación de la resolución denegatoria."
    },
    {
     "tipo": "ley",
     "texto": "Art. 791.3 LEC"
    }
   ],
   "siguiente": "medidas_793_1"
  },
  "intervencion_a_instancia": {
   "fase": 3,
   "titulo": "Intervención a instancia de parte — verificación de legitimación (art. 792)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La intervención se solicita por un interesado legítimo. El LAJ debe verificar que quien solicita la intervención tiene efectivamente legitimación conforme al art. 792."
    },
    {
     "tipo": "lista",
     "titulo": "Personas legitimadas para solicitar la intervención (art. 792.1)",
     "items": [
      "Cónyuge o pariente con derecho a sucesión legítima: debe acreditar haber promovido la declaración de herederos abintestato ante Notario, o formular la solicitud al tiempo de promoverla (arts. 55-56 LN, Ley 15/2015 JV)",
      "Coheredero o legatario de parte alícuota: al solicitar simultáneamente la división judicial (art. 782 LEC), salvo prohibición testamentaria expresa",
      "Administración Pública que haya iniciado el procedimiento de declaración como heredera abintestato (art. 791.3 LEC)"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Acreedores legitimados para solicitar la intervención (art. 792.2)",
     "items": [
      "Acreedores reconocidos en el testamento",
      "Acreedores reconocidos por los coherederos extrajudicialmente",
      "Acreedores con título ejecutivo (art. 517 LEC: sentencia firme, laudo arbitral, escritura pública, póliza intervenida por corredor de comercio colegiado, etc.)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El legatario de parte alícuota recibe una fracción del caudal global (p. ej., un tercio), no un bien concreto ni una cantidad determinada. Como participa en la universalidad, tiene el mismo interés que el heredero en la integridad del inventario."
    },
    {
     "tipo": "ley",
     "texto": "Art. 792 LEC · Art. 517 LEC · Arts. 55 y 56 Ley del Notariado · Ley 15/2015, de Jurisdicción Voluntaria · Art. 782 LEC"
    }
   ],
   "siguiente": "medidas_793_1"
  },
  "medidas_793_1": {
   "fase": 4,
   "titulo": "Verificación y adopción de medidas de seguridad previas al inventario (art. 793.1)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Con carácter previo a la formación del inventario, el Tribunal debe verificar si ya se adoptaron medidas de seguridad. Solo si no se adoptaron anteriormente dictará AUTO al efecto."
    },
    {
     "tipo": "lista",
     "titulo": "Verificación del LAJ",
     "items": [
      "Comprobar si se adoptaron medidas al amparo del art. 790 (actuación de oficio)",
      "Comprobar si el auto del art. 791.2 ya ordenó medidas de ocupación y custodia",
      "Si no se adoptaron anteriormente: elevar al Tribunal para que dicte AUTO de medidas"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de las medidas (si no se adoptaron antes)",
     "items": [
      "Seguridad de los bienes susceptibles de sustracción u ocultación",
      "Ocupación y custodia de libros, papeles, correspondencia y efectos del difunto"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Principio de economía procesal: si las medidas ya están adoptadas, no deben reiterarse. El auto solo es necesario si hay omisión previa."
    },
    {
     "tipo": "ley",
     "texto": "Art. 793.1 LEC · Art. 790 LEC"
    }
   ],
   "siguiente": "senalamiento_793_2"
  },
  "senalamiento_793_2": {
   "fase": 4,
   "titulo": "Señalamiento para inventario y citación de interesados (arts. 793.2 y 793.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ señala día y hora para la formación del inventario mediante DILIGENCIA y ordena la citación de todos los interesados conforme a la lista tasada del art. 793.3. La omisión de cualquier citación obligatoria puede generar indefensión e impugnación."
    },
    {
     "tipo": "lista",
     "titulo": "Personas que DEBEN ser citadas (art. 793.3) — lista TAXATIVA",
     "items": [
      "1.º Cónyuge sobreviviente: citación imperativa, independientemente de si es heredero (puede tener derechos sobre gananciales no liquidados o usufructo vidual del art. 834 CC)",
      "2.º Parientes conocidos con posible derecho hereditario: solo cuando no conste testamento ni declaración de herederos",
      "3.º Herederos o legatarios de parte alícuota: cuando exista testamento o declaración de herederos",
      "4.º Acreedores que instaron la intervención y los personados en el procedimiento de división",
      "5.º Ministerio Fiscal: cuando pudiera haber parientes desconocidos; cuando algún interesado no pueda ser citado por ignorarse su residencia; o cuando haya menores sin representante legal",
      "6.º Abogado del Estado o Servicios Jurídicos de la CCAA: cuando no conste testamento ni cónyuge ni parientes con derecho a la sucesión legítima"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La lista del art. 793.3 es TAXATIVA y EXHAUSTIVA. La falta de citación de cualquiera de los obligados puede determinar la nulidad del inventario."
    },
    {
     "tipo": "ley",
     "texto": "Art. 793 LEC · Art. 124 CE · Ley 50/1981, Estatuto Orgánico del Ministerio Fiscal · Art. 834 CC (usufructo vidual)"
    }
   ],
   "siguiente": "inventario_794"
  },
  "inventario_794": {
   "fase": 4,
   "titulo": "Formación del inventario (art. 794)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En el día y hora señalados, el LAJ procede a la formación del inventario con quienes concurran. No es precisa la presencia de todos los citados."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del inventario",
     "items": [
      "Relación de bienes inmuebles, muebles, derechos reales, créditos, depósitos bancarios, participaciones sociales y valores mobiliarios",
      "Escrituras, títulos de propiedad, contratos, pólizas de seguro, libros de contabilidad y otros documentos de importancia",
      "Si el testador estableció reglas especiales para el inventario: aplicarlas con carácter preferente (art. 794.2)",
      "Si no termina en el día señalado: continuar en los días siguientes sin necesidad de nuevo señalamiento (art. 794.3)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Paralelismo doctrinal: el inventario judicial guarda correspondencia material con el del beneficio de inventario del art. 1065 CC, aunque con efectos jurídicos distintos (aquí no limita la responsabilidad del heredero)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 794 LEC · Art. 1065 CC (beneficio de inventario)"
    }
   ],
   "pregunta": "¿Surge controversia entre los interesados sobre la inclusión o exclusión de algún bien en el inventario?",
   "opciones": [
    {
     "texto": "Sí: algún interesado impugna la inclusión o exclusión de un bien",
     "tono": "t-plazo",
     "destino": "controversia_794_4"
    },
    {
     "texto": "No: el inventario se forma sin controversia",
     "tono": "t-ok",
     "destino": "auto_795"
    }
   ]
  },
  "controversia_794_4": {
   "fase": 4,
   "titulo": "Incidente sobre el inventario — tramitación como juicio verbal (art. 794.4)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La controversia sobre el contenido del inventario se tramita como un incidente separado, siguiendo las normas del juicio verbal (arts. 437–447 LEC). Es el procedimiento declarativo más ágil de la LEC: concentración de actos, oralidad e inmediación."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ",
     "items": [
      "Hacer constar en ACTA las pretensiones de cada parte sobre el bien controvertido",
      "Recoger la fundamentación jurídica de cada posición",
      "Citar a los interesados a la vista del juicio verbal",
      "Elevar las actuaciones al Tribunal para que dicte sentencia"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Efectos de la sentencia",
     "items": [
      "Resuelve la controversia con fuerza de cosa juzgada entre las partes",
      "Determina si el bien queda incluido o excluido del inventario",
      "DEJA EXPRESAMENTE A SALVO los derechos de terceros ajenos al proceso: el titular de derechos reales no comparecido conserva íntegramente sus acciones"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La sentencia tiene eficacia INTER PARTES únicamente. No puede perjudicar a terceros titulares de derechos reales sobre bienes inventariados que no hayan tenido ocasión de comparecer."
    },
    {
     "tipo": "ley",
     "texto": "Art. 794.4 LEC · Arts. 437–447 LEC (juicio verbal)"
    }
   ],
   "siguiente": "auto_795"
  },
  "auto_795": {
   "fase": 5,
   "titulo": "Auto sobre administración, custodia y conservación del caudal (art. 795)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Formado el inventario, el Tribunal dicta AUTO resolviendo quién y en qué condiciones se encargará de la administración provisional del caudal. Criterio preferente: lo dispuesto en el testamento. En defecto de disposición testamentaria, se aplican las cuatro reglas legales."
    },
    {
     "tipo": "lista",
     "titulo": "Regla 1.ª — Depósito del metálico y efectos públicos",
     "items": [
      "El dinero en metálico y los efectos públicos (valores) se depositan con arreglo a derecho",
      "Remisión a las normas sobre depósito judicial de la LEC y legislación específica de valores"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Regla 2.ª — Orden de preferencia para el nombramiento de administrador",
     "items": [
      "1.ª preferencia: cónyuge viudo/a",
      "2.ª preferencia: heredero o legatario de parte alícuota con mayor cuota en la herencia",
      "3.ª preferencia (si no hay anteriores o carecen de capacidad suficiente): cualquier otro heredero/legatario de parte alícuota o un tercero ajeno a la sucesión",
      "El Tribunal puede apartarse del orden de preferencia si aprecia falta de capacidad en el preferido legal"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La \"capacidad suficiente\" es una cláusula de apreciación discrecional: el Tribunal puede apartar al preferido legal cuando su nombramiento resultaría contraproducente para la integridad del caudal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 795 LEC · Art. 797 LEC (posesión del cargo) · Art. 798 LEC (representación de la herencia)"
    }
   ],
   "pregunta": "¿Existen en el expediente menores sin representante legal o herederos ausentes de paradero desconocido?",
   "opciones": [
    {
     "texto": "Sí: hay menores sin representante legal o ausentes sin localizar",
     "tono": "t-plazo",
     "destino": "caucion_imperativa"
    },
    {
     "texto": "No: todos los interesados están representados o localizados",
     "tono": "t-ok",
     "destino": "caucion_general"
    }
   ]
  },
  "caucion_imperativa": {
   "fase": 5,
   "titulo": "Caución obligatoria e imperativa — menores y ausentes (art. 795, regla 3.ª)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La presencia de menores sin representante legal o de ausentes de paradero desconocido exige la constitución de caución IMPERATIVA. Esta caución no admite dispensa de ningún tipo."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del Tribunal",
     "items": [
      "Fijar la cuantía de la caución en proporción al valor del caudal administrado",
      "Aceptar la caución en cualquiera de las formas legales: depósito en metálico, aval bancario solidario, fianza personal de solvencia acreditada",
      "La caución debe cubrir obligatoriamente la participación de los menores y ausentes en el caudal",
      "Verificar que la caución queda constituida antes de dar posesión del cargo al administrador (art. 797)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "IMPERATIVIDAD ABSOLUTA: esta caución no puede ser dispensada ni por el Tribunal ni por los demás herederos respecto de la participación de los menores sin representante y de los ausentes de paradero desconocido, con independencia del acuerdo del resto de interesados (regla 4.ª, in fine)."
    },
    {
     "tipo": "nota",
     "texto": "Marco legal de los menores: Ley 8/2021, de 2 de junio, de reforma de la legislación civil y procesal para el apoyo a las personas con discapacidad. Marco legal de los ausentes: arts. 181–198 CC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 795, regla 3.ª LEC · Ley 8/2021 · Arts. 181–198 CC (ausencia legal)"
    }
   ],
   "siguiente": "posesion_797"
  },
  "caucion_general": {
   "fase": 5,
   "titulo": "Régimen general de la caución — dispensa y proporcionalidad (arts. 795, reglas 3.ª y 4.ª)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador debe prestar caución bastante como regla general. Sin embargo, en ausencia de menores o ausentes, el régimen admite diversas modalidades de dispensa."
    },
    {
     "tipo": "lista",
     "titulo": "Formas de dispensa de la caución",
     "items": [
      "Dispensa JUDICIAL: el Tribunal puede dispensar al cónyuge viudo o al heredero designado si tienen bienes propios suficientes para responder de los bienes administrados",
      "Dispensa CONVENCIONAL: los herederos y legatarios de parte alícuota pueden por acuerdo unánime dispensar al administrador de la obligación",
      "Dispensa PARCIAL (sin conformidad unánime): la caución se dimensiona proporcionalmente al interés en el caudal de quienes NO otorgan la dispensa",
      "Los que voluntariamente dispensan no reciben cobertura de la caución respecto de su cuota"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La dispensa convencional reduce la caución pero no la elimina respecto de quienes no la otorgan. El acuerdo de dispensa no requiere forma especial pero debe quedar documentado en las actuaciones."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 795, reglas 3.ª y 4.ª LEC"
    }
   ],
   "siguiente": "posesion_797"
  },
  "posesion_797": {
   "fase": 5,
   "titulo": "Posesión del cargo de administrador y comunicación registral (art. 797)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Constituida la caución y dictado el auto de nombramiento, el LAJ pone formalmente al administrador en posesión de su cargo y expide los testimonios acreditativos necesarios para que pueda actuar."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ",
     "items": [
      "Verificar que la caución ha quedado constituida en la forma y cuantía fijadas por el Tribunal",
      "Extender diligencia de posesión del cargo del administrador",
      "Expedir testimonio acreditativo del nombramiento (el administrador lo necesita para comparecer en nombre de la herencia)",
      "Comunicar el nombramiento al Registro de la Propiedad para inscripción de la administración judicial sobre los bienes inmuebles inventariados",
      "Notificar a todos los interesados la identidad del administrador"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Representación en juicio: mientras la herencia no haya sido aceptada, el administrador la representa en todos los procesos y ejercita las acciones que le correspondan (art. 798 LEC), al amparo de la capacidad procesal de la herencia yacente reconocida por los arts. 6.1.4.º y 7.5 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 797 LEC · Art. 798 LEC · Arts. 6.1.4.º y 7.5 LEC · Ley Hipotecaria (inscripción de administraciones judiciales)"
    }
   ],
   "siguiente": "cesacion_796"
  },
  "cesacion_796": {
   "fase": 6,
   "titulo": "Fase de cesación — verificación de la causa aplicable (art. 796)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La intervención del caudal es provisional y debe cesar en cuanto la protección quede asegurada por otras vías. El LAJ verifica cuál de las tres causas legales de cesación concurre en el expediente."
    },
    {
     "tipo": "lista",
     "titulo": "Las tres causas de cesación (art. 796)",
     "items": [
      "1.ª Declaración notarial de herederos (art. 796.1)",
      "2.ª Acuerdo unánime de los herederos durante la tramitación de la división (art. 796.2)",
      "3.ª Pago o afianzamiento de los acreedores que bloqueaban la cesación (art. 796.3)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La intervención es por naturaleza una medida cautelar y provisional. Debe mantenerse lo estrictamente necesario y cesar en cuanto cumpla su función protectora."
    },
    {
     "tipo": "ley",
     "texto": "Art. 796 LEC · Art. 788 LEC (entrega de bienes adjudicados)"
    }
   ],
   "pregunta": "¿Cuál es la causa de cesación que concurre en el expediente?",
   "opciones": [
    {
     "texto": "Declaración notarial de herederos (art. 796.1)",
     "tono": "t-ok",
     "destino": "cesacion_declaracion"
    },
    {
     "texto": "Acuerdo unánime de los herederos durante el procedimiento de división (art. 796.2)",
     "tono": "t-nota",
     "destino": "cesacion_acuerdo_check"
    },
    {
     "texto": "Pago o afianzamiento a los acreedores que bloqueaban la cesación (art. 796.3)",
     "tono": "t-ok",
     "destino": "cesacion_acreedores"
    }
   ]
  },
  "cesacion_declaracion": {
   "fase": 6,
   "titulo": "Cesación por declaración notarial de herederos (art. 796.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ha producido la declaración notarial de herederos (arts. 55-56 de la Ley del Notariado). El caudal tiene ya titular efectivo identificado. La intervención debe cesar salvo que algún heredero solicite la división judicial."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ",
     "items": [
      "Recibir y verificar la declaración notarial de herederos",
      "Notificar a todos los interesados el inicio de la fase de cese",
      "Verificar si algún heredero ha presentado solicitud de división judicial (art. 782 LEC)",
      "Comunicar al administrador el inicio del procedimiento de cese"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 796.1 LEC · Arts. 55 y 56 de la Ley del Notariado · Ley 15/2015, de Jurisdicción Voluntaria · Art. 782 LEC"
    }
   ],
   "pregunta": "¿Algún heredero ha solicitado la división judicial de la herencia (art. 782 LEC)?",
   "opciones": [
    {
     "texto": "No: ningún heredero pide la división judicial",
     "tono": "t-ok",
     "destino": "fin_declaracion_herederos"
    },
    {
     "texto": "Sí: algún heredero pide la división judicial — la intervención puede subsistir",
     "tono": "t-nota",
     "destino": "fin_subsistencia_division"
    }
   ]
  },
  "fin_declaracion_herederos": {
   "fase": 6,
   "titulo": "Cese definitivo de la intervención — declaración de herederos (art. 796.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La intervención cesa definitivamente. El LAJ acuerda el cese mediante DECRETO y procede a la entrega formal del caudal a los herederos declarados."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones de cierre",
     "items": [
      "DECRETO del LAJ acordando el cese de la intervención",
      "Notificación a todos los interesados (herederos, administrador, Ministerio Fiscal si fue citado)",
      "Entrega del caudal a los herederos declarados con levantamiento de acta",
      "Levantamiento de la anotación registral de la administración judicial sobre bienes inmuebles",
      "Archivo del expediente"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 796.1 LEC · Art. 456 LOPJ (decretos del LAJ) · Art. 788 LEC"
    }
   ],
   "fin": "success"
  },
  "fin_subsistencia_division": {
   "fase": 6,
   "titulo": "Subsistencia de la intervención durante la división judicial (art. 796.1)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La intervención puede subsistir durante toda la tramitación del procedimiento de división judicial, hasta que se efectúe la entrega individual de los bienes adjudicados a cada heredero conforme al art. 788 LEC."
    },
    {
     "tipo": "lista",
     "titulo": "Fundamento y alcance de la subsistencia",
     "items": [
      "El Tribunal puede acordar la subsistencia a solicitud de cualquier interesado",
      "La intervención se mantiene sobre los bienes pro indiviso pendientes de adjudicación",
      "Su objeto es garantizar el reparto ordenado evitando la disposición anticipada de bienes comunes",
      "Cesa definitivamente con la entrega individualizada de bienes adjudicados del art. 788 LEC"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La División Judicial de la Herencia se rige por los arts. 782–789 LEC (Sección 1.ª). La subsistencia de la intervención hasta la entrega individual conecta directamente con el art. 788 (entrega de bienes adjudicados)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 796.1 LEC · Art. 788 LEC · Arts. 782–789 LEC (división judicial de la herencia)"
    }
   ],
   "fin": "neutral"
  },
  "cesacion_acuerdo_check": {
   "fase": 6,
   "titulo": "Verificación de requisitos — cese por acuerdo unánime (art. 796.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los herederos han solicitado de común acuerdo que cese la intervención durante la sustanciación del procedimiento de división. Antes de acordar el cese, el LAJ debe verificar que no concurren ninguna de las circunstancias legales que lo bloquean."
    },
    {
     "tipo": "lista",
     "titulo": "Verificaciones OBLIGATORIAS del LAJ",
     "items": [
      "Comprobar que el acuerdo es efectivamente UNÁNIME: ningún heredero disiente, todos han manifestado su voluntad",
      "Verificar si hay menores sin representante legal en el expediente",
      "Verificar si hay herederos ausentes de paradero desconocido sin localizar",
      "Verificar si hay acreedores reconocidos que se hayan opuesto formalmente a la partición"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "El LAJ no puede acordar el cese sin realizar estas verificaciones. La omisión de alguna de ellas puede generar responsabilidad disciplinaria y nulidad de actuaciones."
    },
    {
     "tipo": "ley",
     "texto": "Art. 796.2 LEC"
    }
   ],
   "pregunta": "¿Concurre alguna circunstancia que impide el cese por acuerdo?",
   "opciones": [
    {
     "texto": "Sí: hay menores sin representante legal o ausentes sin localizar",
     "tono": "t-aviso",
     "destino": "bloqueo_menores_ausentes"
    },
    {
     "texto": "Sí: hay acreedores reconocidos opuestos sin pago ni afianzamiento",
     "tono": "t-aviso",
     "destino": "bloqueo_acreedores_796_3"
    },
    {
     "texto": "No concurre ninguna circunstancia bloqueante — procede acordar el cese",
     "tono": "t-ok",
     "destino": "fin_acuerdo_unanime"
    }
   ]
  },
  "bloqueo_menores_ausentes": {
   "fase": 6,
   "titulo": "Bloqueo del cese — menores sin representante o ausentes sin localizar (art. 796.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El cese por acuerdo unánime no puede acordarse mientras haya menores sin representante legal o herederos ausentes de paradero desconocido. La tutela de sus intereses patrimoniales no puede quedar al arbitrio de los demás interesados."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ",
     "items": [
      "Denegar el cese mediante DECRETO motivado del LAJ",
      "Notificar a todos los herederos la razón del bloqueo y las vías para superarlo",
      "En caso de MENOR sin representante: instar ante el órgano competente el nombramiento de tutor o curador conforme a la Ley 8/2021 y los arts. 215 ss. CC",
      "En caso de AUSENTE: tramitar, si procede, la declaración de ausencia legal (arts. 181–198 CC) o continuar las gestiones para localizar el paradero",
      "Una vez nombrado el representante del menor o localizado el ausente: revisar si procede el cese"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La tutela del patrimonio del menor o del ausente no puede quedar al arbitrio de los demás interesados aunque sean unanimidad entre los presentes. Este límite es INDISPONIBLE."
    },
    {
     "tipo": "ley",
     "texto": "Art. 796.2 LEC · Ley 8/2021, de apoyo a personas con discapacidad · Arts. 181–198 CC (ausencia legal) · Arts. 215 ss. CC (tutela y curatela)"
    }
   ],
   "fin": "warning"
  },
  "bloqueo_acreedores_796_3": {
   "fase": 6,
   "titulo": "Bloqueo del cese por oposición de acreedores (art. 796.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Existen acreedores reconocidos que se han opuesto a la partición hasta el pago o afianzamiento de sus créditos (art. 1082 CC). El cese queda bloqueado hasta que desaparezca ese obstáculo."
    },
    {
     "tipo": "lista",
     "titulo": "Acreedores con legitimidad para bloquear el cese",
     "items": [
      "Reconocidos en el testamento",
      "Reconocidos extrajudicialmente por los coherederos",
      "Con título ejecutivo (art. 517 LEC)"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Vías para levantar el bloqueo",
     "items": [
      "PAGO EFECTIVO de los créditos a todos los acreedores que se hubieran opuesto",
      "AFIANZAMIENTO: constitución de garantía personal o real que asegure el cobro del crédito con independencia de la suerte del caudal",
      "Verificar que el pago o afianzamiento cubre la totalidad de los créditos de los acreedores opositores"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Mientras no se produzca el pago o el afianzamiento de TODOS los acreedores opositores, el cese no puede acordarse con independencia del acuerdo de los herederos. Fundamento: art. 1082 CC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 796.3 LEC · Art. 1082 CC · Art. 517 LEC (títulos ejecutivos)"
    }
   ],
   "siguiente": "cesacion_acreedores"
  },
  "cesacion_acreedores": {
   "fase": 6,
   "titulo": "Cese tras pago o afianzamiento a los acreedores (art. 796.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los acreedores han recibido el pago íntegro de sus créditos o se ha constituido garantía suficiente a su favor. Desaparece el obstáculo y puede acordarse el cese."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ",
     "items": [
      "Verificar documentalmente el pago efectivo o la constitución del afianzamiento",
      "Comprobar que el afianzamiento cubre la totalidad de los créditos de todos los acreedores opositores",
      "DECRETO del LAJ acordando el cese de la intervención",
      "Notificación a todos los interesados",
      "Entrega de bienes y derechos conforme a lo acordado y levantamiento de acta",
      "Levantamiento de la anotación registral de la administración judicial",
      "Archivo del expediente"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 796.3 LEC · Art. 1082 CC · Art. 788 LEC (entrega de bienes adjudicados)"
    }
   ],
   "fin": "success"
  },
  "fin_acuerdo_unanime": {
   "fase": 6,
   "titulo": "Cese por acuerdo unánime de los herederos (art. 796.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Verificado que no concurren circunstancias bloqueantes, el LAJ acuerda el cese de la intervención mediante DECRETO."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones de cierre",
     "items": [
      "DECRETO del LAJ acordando el cese de la intervención (resolución motivada conforme al art. 456 LOPJ)",
      "Notificación a todos los herederos, administrador judicial y demás interesados",
      "Entrega formal del caudal conforme a lo acordado por los herederos",
      "Levantamiento de la anotación registral de la administración judicial sobre bienes inmuebles",
      "Liquidación y rendición de cuentas del administrador",
      "Archivo del expediente"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 796.2 LEC · Art. 456 LOPJ (decretos del LAJ) · Art. 788 LEC"
    }
   ],
   "fin": "success"
  }
 },
 "pie": "Arts. 790–796 LEC<br>Ley 1/2000, 7 ene.<br>Guía: Adm. Procesal y Admvo."
});

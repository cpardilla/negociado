/* Migrado por tools/migrate.js desde sources/actual/G12.json (contenido sin cambios; pendiente de revisión). */
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
  "estado": "sin revisar",
  "boe": "20260305",
  "origen": "G12"
 },
 "fases": [
  "Inicio y competencia",
  "Ambito de aplicacion e inicio",
  "Comparecencia y resolucion",
  "Aceptacion y posesion del cargo",
  "Inventario y administracion",
  "Ejercicio del cargo",
  "Crisis: remocion, excusa y extincion",
  "Guarda de hecho"
 ],
 "actores": {
  "juez": "Juez",
  "laj": "Letrado de la Admon. de Justicia",
  "ambos": "Juez + LAJ"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio: identificacion del procedimiento",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Guia interactiva de tramitacion para el procedimiento de jurisdiccion voluntaria de la tutela, la curatela y la guarda de hecho. Esta guia fusiona el contenido de tres fuentes especializadas para ofrecer la referencia mas completa posible."
    },
    {
     "tipo": "info",
     "texto": "Tras la <strong>Ley 8/2021</strong>, el paradigma ha cambiado de &amp;laquo;sustitucion en el ejercicio de la capacidad&amp;raquo; a &amp;laquo;apoyo al ejercicio de la capacidad juridica&amp;raquo;, conforme al Art. 12 de la Convencion ONU sobre Derechos de las Personas con Discapacidad. La tutela solo procede para menores de edad. Para personas con discapacidad adultas, la medida ordinaria es la curatela."
    },
    {
     "tipo": "nota",
     "texto": "Puede navegar libremente por cualquier paso desde el panel lateral &amp;laquo;Mapa&amp;raquo;, sin necesidad de seguir el recorrido lineal. Cada paso es accesible de forma individual."
    },
    {
     "tipo": "ley",
     "texto": "Normativa aplicable: Ley 15/2015, de 2 de julio, de la Jurisdiccion Voluntaria (BOE-A-2015-7391), Titulo II, Capitulo IV. Modificada por Ley Organica 1/2025 y Ley 8/2021, de 2 de junio."
    },
    {
     "tipo": "aviso",
     "texto": "IMPORTANTE: En los expedientes de REMOCION del tutor (Art. 49) y EXTINCION de poderes preventivos (Art. 51 bis), la intervencion de abogado es PRECEPTIVA (Art. 43.3). En el resto, no es preceptiva."
    },
    {
     "tipo": "lista",
     "titulo": "Verificacion previa del tipo de medida:",
     "items": [
      "¿La persona protegida es menor de 18 años? → Tutela (Art. 45)",
      "¿Es mayor de edad con discapacidad que precisa apoyo continuado? → Curatela (Cap. III bis + Art. 45 si es sustitucion)",
      "¿Existe ya una persona cuidando de facto sin nombramiento judicial? → Guarda de hecho (Art. 52)",
      "¿Ya existe tutor/curador designado y surge una incidencia? → Remocion, excusa, rendicion de cuentas o extincion de poderes preventivos"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Que tipo de procedimiento va a tramitar?",
   "opciones": [
    {
     "texto": "Constitucion de tutela (menor sin patria potestad efectiva)",
     "tono": "t-ok",
     "destino": "comp_tutela"
    },
    {
     "texto": "Sustitucion de curador (curatela ya constituida)",
     "tono": "t-ok",
     "destino": "comp_curatela"
    },
    {
     "texto": "Guarda de hecho (requerimiento o medidas de control)",
     "tono": "t-nota",
     "destino": "guarda_concepto"
    },
    {
     "texto": "Incidencia posterior (remocion, excusa, rendicion de cuentas, extincion de poderes)",
     "tono": "t-plazo",
     "destino": "incidencias_menu"
    }
   ]
  },
  "comp_tutela": {
   "fase": 0,
   "titulo": "Competencia — Tutela de menor",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para la constitucion de tutela de menores, se verifican los extremos de competencia antes de admitir la solicitud."
    },
    {
     "tipo": "plazo",
     "texto": "<strong>Competencia objetiva:</strong> Juzgado de Primera Instancia. Es competencia exclusiva y excluyente. No cabe atribucion a otros organos jurisdiccionales (Juzgados de Violencia sobre la Mujer, Juzgados de Familia autonomicos, etc.)."
    },
    {
     "tipo": "plazo",
     "texto": "<strong>Competencia territorial:</strong> Juzgado de Primera Instancia del <em>domicilio</em> del menor (residencia habitual, Art. 40 CC). Subsidiariamente, de su residencia actual."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Principio de perpetuatio jurisdictionis:</strong> El Juzgado que conocio originariamente mantiene competencia para todas las incidencias posteriores mientras el menor resida en la misma circunscripcion."
    },
    {
     "tipo": "lista",
     "titulo": "Cuestiones practicas de competencia territorial:",
     "items": [
      "Personas ingresadas en centros: domicilio anterior al ingreso o residencia del centro segun circunstancias",
      "Personas sin domicilio fijo: competencia del lugar donde sean halladas",
      "Menores en acogimiento: domicilio del acogedor o residencia del centro"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 43.1-2 Ley 15/2015. LEC art. 52. CC art. 40 (domicilio)."
    },
    {
     "tipo": "aviso",
     "texto": "Si el menor cambio de circunscripcion: solicitar testimonio completo del expediente al Juzgado de origen. Plazo de remision: <strong>10 dias</strong>."
    }
   ],
   "pregunta": "¿Reside el menor en la misma circunscripcion del Juzgado que conocio del expediente originario?",
   "opciones": [
    {
     "texto": "Si — prorroga de competencia funcional",
     "tono": "t-ok",
     "destino": "postulacion"
    },
    {
     "texto": "No — testimonio al nuevo Juzgado",
     "tono": "t-plazo",
     "destino": "testimonio_juzgado"
    }
   ]
  },
  "comp_curatela": {
   "fase": 0,
   "titulo": "Competencia — Curatela (sustitucion)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente de jurisdiccion voluntaria del Art. 45 SOLO es aplicable a la curatela para sustituir a un curador ya nombrado que haya sido removido o haya fallecido. La constitucion originaria de la curatela se realiza mediante el proceso de provision de apoyos (LEC art. 753 bis o Cap. III bis Ley 15/2015), que es un proceso contencioso."
    },
    {
     "tipo": "lista",
     "titulo": "Requisitos ACUMULATIVOS para aplicar Art. 45 a curatela:",
     "items": [
      "Existencia de un proceso previo de provision de medidas de apoyo ya resuelto",
      "Necesidad de nombramiento de nuevo curador derivada de dicho proceso",
      "El nuevo curador viene a sustituir a otro que ha sido removido o ha fallecido"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "<strong>Supuestos excluidos:</strong> El nombramiento del primer curador en un proceso inicial de provision de apoyos se tramita por el Capitulo III bis. La modificacion de extension de curatela ya existente sigue su propio procedimiento de modificacion."
    },
    {
     "tipo": "ley",
     "texto": "Art. 44.2 Ley 15/2015. CC arts. 286 y ss. (regimen sustantivo de la curatela)."
    },
    {
     "tipo": "aviso",
     "texto": "Si se trata de constituir la curatela por primera vez, NO corresponde este expediente de jurisdiccion voluntaria. Debe acudirse al procedimiento de provision de apoyos."
    }
   ],
   "pregunta": "¿Se trata de sustituir un curador ya nombrado?",
   "opciones": [
    {
     "texto": "Si — curador removido o fallecido",
     "tono": "t-ok",
     "destino": "postulacion"
    },
    {
     "texto": "No — constitucion originaria (proceso contencioso)",
     "tono": "t-plazo",
     "destino": "fin_curatela_originaria"
    }
   ]
  },
  "fin_curatela_originaria": {
   "fase": 0,
   "titulo": "Fuera del ambito — Curatela originaria",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La constitucion originaria de la curatela debe tramitarse por el procedimiento de provision de apoyos regulado en el Capitulo III bis de la Ley 15/2015 o en el art. 753 bis de la LEC (introducido por Ley 8/2021), que es un proceso contencioso con garantias reforzadas. Este expediente de jurisdiccion voluntaria no es el cauce procesal adecuado."
    },
    {
     "tipo": "nota",
     "texto": "Una vez firme la sentencia del Cap. III bis que acuerde curatela y necesite nombrar/sustituir curador, podra volver a esta guia y seleccionar &amp;laquo;Sustitucion de curador&amp;raquo;."
    },
    {
     "tipo": "ley",
     "texto": "Art. 44.2 Ley 15/2015. Cap. III bis Ley 15/2015. LEC art. 753 bis."
    }
   ],
   "fin": "warning"
  },
  "testimonio_juzgado": {
   "fase": 0,
   "titulo": "Remision de testimonio entre Juzgados",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando la persona protegida ya no reside en la circunscripcion del Juzgado que constituyo la tutela o curatela, el nuevo Juzgado competente debera solicitar testimonio completo del expediente al Juzgado anterior."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de remision: <strong>10 dias</strong> desde la solicitud (art. 43.2)."
    },
    {
     "tipo": "nota",
     "texto": "La remision del testimonio completo garantiza que el nuevo organo judicial cuente con toda la informacion necesaria, evitando resoluciones contradictorias."
    },
    {
     "tipo": "ley",
     "texto": "Art. 43.2 Ley 15/2015."
    }
   ],
   "siguiente": "postulacion"
  },
  "postulacion": {
   "fase": 0,
   "titulo": "Postulacion procesal",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En los expedientes de constitucion de tutela o sustitucion de curador NO es preceptiva la intervencion de abogado y procurador. La persona interesada podra valerse de abogado si lo considera conveniente, asumiendo los costes."
    },
    {
     "tipo": "nota",
     "texto": "La no preceptividad se justifica por el caracter de jurisdiccion voluntaria y la intervencion del Ministerio Fiscal que garantiza los intereses de la persona protegida."
    },
    {
     "tipo": "lista",
     "titulo": "Excepciones (abogado OBLIGATORIO):",
     "items": [
      "Expediente de REMOCION del tutor o curador (Art. 49)",
      "Expediente de EXTINCION de poderes preventivos (Art. 51 bis)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La intervencion de abogado SI es preceptiva en remocion (art. 49) y extincion de poderes preventivos (art. 51 bis)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 43.3 Ley 15/2015."
    }
   ],
   "siguiente": "ambito_aplicacion"
  },
  "ambito_aplicacion": {
   "fase": 1,
   "titulo": "Ambito de aplicacion (Art. 44)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El <strong>Articulo 44</strong> de la Ley 15/2015 delimita el ambito material de aplicacion del procedimiento de constitucion de tutela y curatela regulado en la Seccion 2.ª del Capitulo IV."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Tutela:</strong> El procedimiento del Art. 45 es aplicable a <strong>todos los casos de constitucion de tutela</strong> de menores de edad. Tras la Ley 8/2021, la tutela de personas mayores de edad ha sido suprimida como institucion."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Curatela — Aplicacion restringida:</strong> El Art. 45 solo se aplica a la curatela cuando concurren <strong>acumulativamente</strong> los tres requisitos ya indicados: proceso previo de provision de apoyos resuelto, necesidad de nombrar nuevo curador derivada de dicho proceso, y sustitucion de curador removido o fallecido."
    },
    {
     "tipo": "ley",
     "texto": "Art. 44 Ley 15/2015. CC arts. 250, 268, 269. Cap. III bis Ley 15/2015."
    }
   ],
   "siguiente": "solicitud"
  },
  "solicitud": {
   "fase": 1,
   "titulo": "Solicitud e iniciacion del expediente (Art. 45.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente se iniciara mediante solicitud escrita presentada en el Juzgado competente (determinado conforme al Art. 43). No se exige formulario oficial, pero la solicitud debe contener datos identificativos y peticion concreta."
    },
    {
     "tipo": "lista",
     "titulo": "Legitimacion activa:",
     "items": [
      "<strong>Ministerio Fiscal</strong>: puede iniciar de oficio cuando tenga conocimiento de la necesidad",
      "<strong>Personas legalmente indicadas</strong> para promover tutela o curatela conforme al CC (arts. 228 ss. para tutela; arts. 276 ss. para curatela)",
      "Incluye: conyuge, padres, ascendientes, hermanos, hijos mayores de edad, o cualquier persona con conocimiento de la situacion"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Documentacion preceptiva a acompanar:",
     "items": [
      "Certificado de nacimiento de la persona a proteger",
      "Hecho que da lugar a la tutela o curatela",
      "Documentos acreditativos de legitimacion",
      "Parientes mas proximos y sus domicilios",
      "Certificado de ultimas voluntades de los progenitores (si procede)",
      "Testamento o documento notarial de los progenitores sobre tutela (CC art. 223)",
      "Documento notarial de la persona con discapacidad sobre autotutela o poderes preventivos (CC art. 248, tras Ley 8/2021)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.1 Ley 15/2015. CC art. 227 (legitimados para promover la tutela). CC art. 223 (tutela testamentaria). CC art. 248 (autotutela y poderes preventivos, Ley 8/2021)."
    }
   ],
   "siguiente": "comparecencia"
  },
  "comparecencia": {
   "fase": 2,
   "titulo": "Comparecencia — Audiencia a las partes (Art. 45.2)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "La comparecencia es trámite <strong>IMPRESCINDIBLE</strong> e <strong>INESCINDIBLE</strong>. No puede omitirse ni sustituirse por otro trámite escrito."
    },
    {
     "tipo": "info",
     "texto": "En la comparecencia se oira al promotor, a la persona cuya designacion se proponga, a la persona cuya tutela o curatela se pretenda (si mayor de 12 años o con suficiente madurez), a los parientes mas proximos, al Ministerio Fiscal, y a cuantas personas se considere oportuno."
    },
    {
     "tipo": "lista",
     "titulo": "Personas que deben ser oidas OBLIGATORIAMENTE:",
     "items": [
      "El promotor de la tutela o curatela",
      "La persona propuesta como tutor/curador (si es distinta del promotor)",
      "La persona a proteger: mayor de 12 años (siempre); menor de 12 años (solo si tiene suficiente madurez)",
      "Parientes mas proximos del menor o persona con discapacidad",
      "Ministerio Fiscal (siempre)",
      "Otras personas que el Juez considere oportuno"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La audiencia del menor responde al art. 12 Convencion de los Derechos del Niño y art. 9.2 LO 1/1996. «Suficiente madurez» se valora caso por caso. La audiencia de la persona con discapacidad es garantia del art. 12 Conv. ONU discapacidad."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Adaptacion para PCD:</strong> Conforme al Art. 7 bis de la Ley 15/2015, el Juez debera adoptar las medidas necesarias para que la persona con discapacidad pueda participar efectivamente: lenguaje sencillo, presencia de persona de confianza, apoyo comunicativo, eliminacion de barreras."
    },
    {
     "tipo": "plazo",
     "texto": "La comparecencia debe celebrarse en plazo razonable desde la solicitud. Para personas con discapacidad: se aplican las adaptaciones del Art. 7 bis (ajustes, apoyos, eliminacion de barreras de comunicacion)."
    },
    {
     "tipo": "aviso",
     "texto": "El Juez y el MF actuan de oficio en interes del menor, respetando voluntad, deseos y preferencias. Principio inquisitivo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.2 Ley 15/2015. Art. 18 Ley 15/2015 (normas comunes: comparecencia). Art. 7 bis Ley 15/2015 (ajustes para PCD). CC art. 269. Conv. ONU art. 12; Conv. Niño art. 12; LO 1/1996 art. 9.2."
    }
   ],
   "siguiente": "designacion"
  },
  "designacion": {
   "fase": 2,
   "titulo": "Designacion de tutor o curador (Art. 45.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez designara tutor o curador conforme al Codigo Civil."
    },
    {
     "tipo": "lista",
     "titulo": "Orden preferente para la TUTELA (CC arts. 228-234):",
     "items": [
      "1.º Designado por progenitores en testamento o documento notarial (tutela testamentaria, CC art. 223)",
      "2.º Conyuge o pareja analoga estable",
      "3.º Padres, abuelos y ascendientes",
      "4.º Hermanos y demas descendientes",
      "5.º Parientes colaterales o linea colateral",
      "El Juez puede alterar el orden si es contrario al interes del tutelado"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Orden preferente para la CURATELA (CC art. 276):",
     "items": [
      "1.º Voluntad de la persona con discapacidad (expresada en autocuratela o documento publico, CC art. 253)",
      "2.º Conyuge o pareja de hecho estable",
      "3.º Descendientes, ascendientes o hermanos",
      "4.º Otras personas vinculadas afectivamente",
      "5.º Persona juridica sin animo de lucro dedicada a la proteccion de personas con discapacidad"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Se puede nombrar varios tutores o curadores, distribuyendo funciones o estableciendo regimen de actuacion conjunta o sucesiva (CC art. 228)."
    },
    {
     "tipo": "ley",
     "texto": "CC arts. 222-229 (delacion tutela). CC arts. 286-298 (curatela). CC art. 228 (varios tutores; administrador de bienes distinto). CC art. 253 (autocuratela)."
    }
   ],
   "siguiente": "fiscalizacion"
  },
  "fiscalizacion": {
   "fase": 2,
   "titulo": "Medidas de fiscalizacion (Art. 45.4)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En la resolucion de nombramiento se adoptaran las medidas de fiscalizacion establecidas por los progenitores en testamento o documento notarial, o por el propio afectado, salvo que sea otro el interes de la persona afectada."
    },
    {
     "tipo": "lista",
     "titulo": "Posibles medidas de fiscalizacion:",
     "items": [
      "Rendicion periodica de cuentas",
      "Autorizacion judicial para actos determinados",
      "Supervision por el Ministerio Fiscal",
      "Designacion de un segundo curador como contrapartida",
      "Limitacion del ambito de las funciones de apoyo",
      "Informe sobre situacion personal y administracion de bienes"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Para tutela: se respetara la voluntad de los progenitores (testamento o documento publico notarial), salvo que el Juez considere que otro es el interes del menor."
    },
    {
     "tipo": "nota",
     "texto": "Para curatela: se respetara la voluntad del afectado (autocuratela, Art. 253 CC), salvo interes superior."
    },
    {
     "tipo": "nota",
     "texto": "Si se adoptan en resolucion posterior, se oira previamente al tutor/curador, al menor si tuviere suficiente madurez (y en todo caso si mayor de 12 años), a la persona sujeta a curatela y al MF."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.4 Ley 15/2015. CC arts. 271-278 (actos que requieren autorizacion judicial)."
    }
   ],
   "siguiente": "fianza"
  },
  "fianza": {
   "fase": 2,
   "titulo": "Fianza excepcional (Art. 45.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez podra exigir al tutor o curador, de modo excepcional, la constitucion de fianza que asegure el cumplimiento de sus obligaciones, determinando modalidad y cuantia."
    },
    {
     "tipo": "aviso",
     "texto": "<strong>Fianza:</strong> Es una medida excepcional. Solo se exigira cuando las circunstancias lo justifiquen: patrimonio voluminoso, antecedentes del designado, complejidad de la gestion, riesgo patrimonial. No es la regla general. En curatela es aun mas excepcional dado el caracter asistencial."
    },
    {
     "tipo": "lista",
     "titulo": "Modalidades admisibles de fianza:",
     "items": [
      "Deposito bancario en entidad autorizada",
      "Aval bancario o de entidad de credito",
      "Hipoteca sobre bienes inmuebles",
      "Otra garantia real o personal admitida en derecho (poliza de caucion, etc.)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Puede modificarse o dejarse sin efecto de oficio o a instancia de parte, oidas las personas interesadas."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.3 Ley 15/2015."
    }
   ],
   "pregunta": "¿El Juez exige fianza?",
   "opciones": [
    {
     "texto": "Si — se exige fianza",
     "tono": "t-plazo",
     "destino": "resolucion_con_fianza"
    },
    {
     "texto": "No — no se exige fianza",
     "tono": "t-ok",
     "destino": "resolucion"
    }
   ]
  },
  "resolucion_con_fianza": {
   "fase": 2,
   "titulo": "Resolucion con fianza",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez acuerda el nombramiento y exige la constitucion de fianza, determinando modalidad y cuantia."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de la resolucion sobre fianza:",
     "items": [
      "Declaracion de suficiencia o insuficiencia de la garantia",
      "Inscripciones necesarias en los registros correspondientes",
      "Depositos que deban constituirse",
      "Medidas complementarias de proteccion del patrimonio",
      "Diligencias necesarias para la eficacia de la fianza y conservacion de bienes"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.3 y 45.5 Ley 15/2015."
    }
   ],
   "siguiente": "recurso_apelacion"
  },
  "resolucion": {
   "fase": 2,
   "titulo": "Resolucion de nombramiento",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez acuerda el nombramiento de tutor o curador, con las medidas de fiscalizacion procedentes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.5 Ley 15/2015."
    }
   ],
   "siguiente": "recurso_apelacion"
  },
  "recurso_apelacion": {
   "fase": 2,
   "titulo": "Recurso de apelacion (Art. 45.5-6)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La resolucion es recurrible en apelacion ante la Audiencia Provincial <strong>SIN efectos suspensivos</strong>: se ejecuta provisionalmente mientras se sustancia el recurso. El tutor o curador electo sigue a cargo del cuidado y administracion bajo las garantias que el Juez considere suficientes."
    },
    {
     "tipo": "aviso",
     "texto": "<strong>Efecto NO suspensivo:</strong> El recurso de apelacion no suspende la ejecucion de la resolucion. El tutor o curador designado <strong>debe comenzar a ejercer sus funciones desde el inicio</strong>, sin esperar a que el recurso se resuelva."
    },
    {
     "tipo": "nota",
     "texto": "El plazo de interposicion es de <strong>20 dias</strong> desde la notificacion (Art. 20 Ley 15/2015). La Audiencia Provincial resolvera sobre la procedencia del nombramiento. Los actos realizados por el tutor/curador durante la tramitacion del recurso, siempre que hayan sido de buena fe, no se afectan."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.5-6 Ley 15/2015. Art. 20 Ley 15/2015 (recursos). LEC arts. 455 y ss."
    }
   ],
   "pregunta": "¿Se interpone recurso de apelacion contra la resolucion?",
   "opciones": [
    {
     "texto": "Si — recurso de apelacion ante la Audiencia Provincial",
     "tono": "t-plazo",
     "destino": "tramitacion_apelacion"
    },
    {
     "texto": "No — resolucion firme",
     "tono": "t-ok",
     "destino": "fianza_comparecencia"
    }
   ]
  },
  "tramitacion_apelacion": {
   "fase": 2,
   "titulo": "Tramitacion del recurso de apelacion",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El recurso de apelacion se tramita sin efectos suspensivos. El nombrado ejerce provisionalmente el cargo hasta la resolucion del recurso. El Juez puede establecer garantias adicionales para proteger el patrimonio."
    },
    {
     "tipo": "nota",
     "texto": "Si la Audiencia Provincial confirma la resolucion, queda firme. Si la revoca, se estara a lo dispuesto en la sentencia."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45.6 Ley 15/2015. LEC arts. 455 y ss."
    }
   ],
   "pregunta": "¿Resultado del recurso?",
   "opciones": [
    {
     "texto": "Confirmacion — resolucion firme",
     "tono": "t-ok",
     "destino": "fianza_comparecencia"
    },
    {
     "texto": "Revocacion — nueva resolucion",
     "tono": "t-plazo",
     "destino": "fin_revocacion"
    }
   ]
  },
  "fin_revocacion": {
   "fase": 2,
   "titulo": "Revocacion de la resolucion",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La Audiencia Provincial revoca la resolucion recurrida. Se estara a lo dispuesto en la sentencia de apelacion, que puede ordenar un nuevo nombramiento u otra medida."
    },
    {
     "tipo": "ley",
     "texto": "LEC arts. 455 y ss."
    }
   ],
   "fin": "warning"
  },
  "fianza_comparecencia": {
   "fase": 3,
   "titulo": "Citacion para fianza, aceptacion y posesion (Art. 46.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Una vez firme la resolucion, el Letrado de la Administracion de Justicia citara al designado para los tramites de constitucion efectiva del cargo."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: <strong>15 dias habiles</strong> desde la citacion para comparecer."
    },
    {
     "tipo": "lista",
     "titulo": "Objetivos de la comparecencia:",
     "items": [
      "Prestar la fianza (si se hubiere exigido)",
      "Aceptar formalmente el cargo de tutor o curador",
      "Formular excusa del cargo (si concurre causa legal)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La no comparecencia injustificada puede considerarse renuncia tacita al cargo. El Juez procedera a nuevo nombramiento. Es fundamental que el designado comparezca dentro del plazo, aunque sea para formular excusa."
    },
    {
     "tipo": "ley",
     "texto": "Art. 46.1 Ley 15/2015. Art. 50 Ley 15/2015 (excusa, plazo 15 dias)."
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
     "tono": "t-plazo",
     "destino": "excusa_plazo"
    }
   ]
  },
  "aceptacion_cargo": {
   "fase": 3,
   "titulo": "Aceptacion formal y posesion del cargo (Art. 46.2-3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El nombrado acepta en acta otorgada ante el Letrado de la Administracion de Justicia la obligacion de cumplir los deberes de su cargo. El LAJ da posesion del cargo, le confiere las facultades establecidas en la resolucion y le entrega certificacion de esta."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del acta de aceptacion:",
     "items": [
      "Identificacion plena del aceptante",
      "Manifestacion expresa de aceptacion del cargo",
      "Compromiso de cumplir los deberes conforme a la ley y a la resolucion judicial",
      "Fecha y hora de toma de posesion"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El acta de aceptacion es documento publico procesal con fe publica del consentimiento. La certificacion de la resolucion acredita la condicion de tutor o curador frente a terceros."
    },
    {
     "tipo": "nota",
     "texto": "La aceptacion marca el inicio formal de las obligaciones del tutor/curador. A partir de este momento se inicia el computo de plazos para la formacion del inventario (60 dias) y demas obligaciones legales."
    },
    {
     "tipo": "ley",
     "texto": "Art. 46.2-3 Ley 15/2015. CC art. 219 (inscripcion en RC)."
    }
   ],
   "siguiente": "inscripcion_registral"
  },
  "inscripcion_registral": {
   "fase": 3,
   "titulo": "Comunicacion al Registro Civil (Art. 46.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado remitira testimonio al Registro Civil correspondiente tanto de la resolucion dictada como del acta de la posesion del cargo. La comunicacion es <strong>obligatoria</strong> y debe realizarse &amp;laquo;sin dilacion&amp;raquo; (CC art. 219)."
    },
    {
     "tipo": "lista",
     "titulo": "Documentos a remitir:",
     "items": [
      "Testimonio de la resolucion de nombramiento",
      "Medidas de fiscalizacion establecidas",
      "Exigencia de fianza (si la hubiere)",
      "Acta de aceptacion y posesion del cargo"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Destino: Registro Civil del domicilio del tutelado o sujeto a curatela, Seccion de Tutelas, Curatelas y Medidas de Apoyo."
    },
    {
     "tipo": "nota",
     "texto": "La tutela o curatela no es oponible a terceros de buena fe hasta que se produzca la inscripcion (CC art. 218)."
    },
    {
     "tipo": "aviso",
     "texto": "La omision de la comunicacion al Registro Civil puede generar responsabilidad."
    },
    {
     "tipo": "ley",
     "texto": "Art. 46.3 Ley 15/2015. CC art. 218 (publicidad registral). CC art. 219 (inscripcion sin dilacion). Ley 20/2011 del Registro Civil."
    }
   ],
   "siguiente": "inventario_req"
  },
  "inventario_req": {
   "fase": 4,
   "titulo": "Formacion del inventario (Arts. 46-47)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el nombrado lo es para el cargo de tutor o administrador de los bienes, se le requiere para que presente inventario de los bienes de la persona afectada. Solo si el curador tiene funciones de administracion patrimonial."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: <strong>60 dias</strong> desde la aceptacion del cargo o desde la toma de posesion. Prorrogable por justa causa acreditada."
    },
    {
     "tipo": "nota",
     "texto": "El tutor puede realizar actos de administracion ordinaria sin autorizacion (CC art. 260), pero necesita autorizacion para actos de disposicion (CC art. 271: enajenacion de bienes, renuncia de derechos, aceptacion de herencias sin beneficio de inventario, etc.)."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del inventario:",
     "items": [
      "Relacion de bienes inmuebles: descripcion, cargas, valoracion",
      "Bienes muebles: descripcion y valoracion",
      "Creditos y deudas: activos y pasivos",
      "Participaciones sociales: en sociedades",
      "Cuentas bancarias: saldos y entidades",
      "Escrituras de importancia: titulos de propiedad, contratos",
      "Documentos de importancia: seguros, planes de pensiones",
      "Papeles de importancia: recibos, facturas, justificantes"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "El incumplimiento de la obligacion de inventario puede constituir causa de remocion (CC art. 234). La omision deliberada de bienes puede constituir ilicito civil e incluso penal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 46.4-5 y 47.1 Ley 15/2015. CC art. 234 (causas de remocion). CC arts. 258-278 (administracion de la tutela). CC art. 260 (actos de administracion ordinaria). CC art. 271 (actos que requieren autorizacion judicial)."
    }
   ],
   "siguiente": "formacion_inventario"
  },
  "formacion_inventario": {
   "fase": 4,
   "titulo": "Aprobacion del inventario (Art. 47.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El designado administrador presenta el inventario de bienes. El Secretario judicial fija dia y hora y cita a interesados, personas afectadas con suficiente madurez, menor si mayor de 12 años, y MF."
    },
    {
     "tipo": "nota",
     "texto": "Si no hay oposicion: el Letrado de la Administracion de Justicia aprueba directamente el inventario. El inventario aprobado fija el patrimonio inicial bajo administracion y servira de referencia para las rendiciones de cuentas posteriores."
    },
    {
     "tipo": "nota",
     "texto": "Una vez aprobado el inventario, el tutor/curador queda habilitado plenamente para la administracion del patrimonio conforme a las facultades que le haya conferido la resolucion judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 47.1-2 Ley 15/2015."
    }
   ],
   "pregunta": "¿Se suscita controversia sobre bienes del inventario?",
   "opciones": [
    {
     "texto": "Si — controversia sobre inclusion/exclusion",
     "tono": "t-plazo",
     "destino": "controversia_inventario"
    },
    {
     "texto": "No — sin oposicion",
     "tono": "t-ok",
     "destino": "aprobacion_inventario"
    }
   ]
  },
  "controversia_inventario": {
   "fase": 4,
   "titulo": "Controversia sobre el inventario (Art. 47.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "La formacion del inventario queda <strong>SUSPENDIDA</strong> hasta que se resuelva la controversia planteada."
    },
    {
     "tipo": "info",
     "texto": "Si se suscita controversia, el Secretario judicial cita a los interesados a una vista y el expediente se convierte en contencioso, tramitandose como juicio verbal (LEC arts. 437 ss.)."
    },
    {
     "tipo": "nota",
     "texto": "La sentencia dejara a salvo los derechos de terceros. Los titulares de derechos no partes podran ejercitar acciones en el proceso declarativo que proceda."
    },
    {
     "tipo": "plazo",
     "texto": "No existe un plazo legal fijo para la resolucion del juicio verbal. Dependera de la complejidad del caso y de la carga del Juzgado."
    },
    {
     "tipo": "ley",
     "texto": "Art. 47.3 Ley 15/2015. LEC arts. 437 y ss. (juicio verbal)."
    }
   ],
   "pregunta": "¿Resultado de la controversia?",
   "opciones": [
    {
     "texto": "Resuelta — se aprueba el inventario",
     "tono": "t-ok",
     "destino": "aprobacion_inventario"
    },
    {
     "texto": "Inclusion/exclusion de bienes determinada por sentencia",
     "tono": "t-ok",
     "destino": "aprobacion_inventario"
    }
   ]
  },
  "aprobacion_inventario": {
   "fase": 4,
   "titulo": "Inventario aprobado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si no hay oposicion o resuelta esta, el Secretario judicial aprueba el inventario. La persona designada procede a la administracion en los terminos de la resolucion judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 47.2-3 Ley 15/2015. CC arts. 258-278."
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
     "texto": "El tutor o curador ejerce sus funciones conforme a la resolucion judicial y al Codigo Civil. Esta sometido a las medidas de fiscalizacion y control acordadas, y debe rendir cuentas periodicamente."
    },
    {
     "tipo": "lista",
     "titulo": "Obligaciones durante el ejercicio:",
     "items": [
      "Cumplir los deberes del cargo conforme a las leyes",
      "Someterse a las medidas de fiscalizacion acordadas",
      "Rendir cuentas periodicamente (art. 51)",
      "Solicitar autorizacion judicial para actos de disposicion (CC art. 271)",
      "Informar sobre la situacion personal y patrimonial"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Deberes del curador especificos (CC art. 273):",
     "items": [
      "Respetar la voluntad, deseos y preferencias del apoyado",
      "Favorecer su autonomia y participacion",
      "Administrar con diligencia si tiene facultades patrimoniales",
      "Informar periodicamente"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "<strong>Principio rector:</strong> La curatela es una medida de apoyo, no de sustitucion. La persona con discapacidad conserva su capacidad juridica (CC art. 249)."
    },
    {
     "tipo": "ley",
     "texto": "CC arts. 258-278. CC art. 274 (retribucion, si procede). CC arts. 268-294 (curatela, Titulo XI CC red. Ley 8/2021)."
    }
   ],
   "pregunta": "¿Que incidencia se produce durante el ejercicio del cargo?",
   "opciones": [
    {
     "texto": "Solicitud de retribucion",
     "tono": "t-ok",
     "destino": "retribucion"
    },
    {
     "texto": "Remocion del tutor o curador",
     "tono": "t-aviso",
     "destino": "remocion_legitimacion"
    },
    {
     "texto": "Excusa del tutor o curador",
     "tono": "t-plazo",
     "destino": "excusa_plazo"
    },
    {
     "texto": "Rendicion de cuentas (periodica o final)",
     "tono": "t-nota",
     "destino": "cuentas_periodicidad"
    },
    {
     "texto": "Extincion de poderes preventivos",
     "tono": "t-aviso",
     "destino": "extpoder_legitimacion"
    },
    {
     "texto": "Extincion de la tutela o curatela",
     "tono": "t-nota",
     "destino": "extincion_cargo"
    },
    {
     "texto": "El procedimiento ha concluido con normalidad",
     "tono": "t-ok",
     "destino": "fin_normal"
    }
   ]
  },
  "retribucion": {
   "fase": 5,
   "titulo": "Retribucion del cargo (Art. 48)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El cargo es gratuito por regla general (CC art. 274), pero el tutor o curador puede solicitar retribucion."
    },
    {
     "tipo": "lista",
     "titulo": "Presupuestos para la retribucion:",
     "items": [
      "Que este prevista en la legislacion civil (CC art. 279)",
      "Que exista sentencia/constitucion firme",
      "Solicitud expresa del tutor/curador"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Criterios para fijar la retribucion:",
     "items": [
      "Complejidad de las funciones (naturaleza y frecuencia de actos)",
      "Extension y duracion del cargo",
      "Valor del patrimonio administrado",
      "Rentabilidad del patrimonio",
      "Dedicacion efectiva del tutor/curador",
      "Principio de proporcionalidad y no enriquecimiento injusto"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Se oira al solicitante, persona con discapacidad, menor si suficiente madurez o mayor de 12 años, MF y demas personas."
    },
    {
     "tipo": "nota",
     "texto": "El auto se ejecuta sin perjuicio del recurso de apelacion (sin efectos suspensivos). El mismo procedimiento se sigue para modificar o extinguir la retribucion."
    },
    {
     "tipo": "ley",
     "texto": "Art. 48 Ley 15/2015. CC art. 274. CC art. 279 (retribucion del curador)."
    }
   ],
   "siguiente": "ejercicio_cargo"
  },
  "extincion_cargo": {
   "fase": 5,
   "titulo": "Extincion de la tutela o curatela",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La tutela o curatela se extingue por diversas causas, dando lugar a rendicion final de cuentas."
    },
    {
     "tipo": "lista",
     "titulo": "Causas de extincion de la TUTELA (CC art. 276):",
     "items": [
      "Mayoria de edad del tutelado",
      "Fallecimiento del tutelado",
      "Adopcion del menor",
      "Recuperacion de la patria potestad",
      "Revocacion de la medida de apoyo"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Causas de extincion de la CURATELA (CC art. 285):",
     "items": [
      "Fallecimiento de la persona con discapacidad",
      "Recuperacion de la capacidad",
      "Cumplimiento del fin para el que fue constituida"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de rendicion final: <strong>3 meses</strong> desde el cese del cargo, prorrogables por justa causa."
    },
    {
     "tipo": "aviso",
     "texto": "IMPORTANTE: La aprobacion de las cuentas finales NO impide acciones posteriores entre tutor/curador y tutelado/sujeto a curatela o sus causahabientes. Se mantienen las acciones de responsabilidad civil, reintegracion patrimonial y nulidad de actos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.4-5 Ley 15/2015. CC art. 276 (extincion tutela). CC art. 285 (extincion curatela). CC art. 238."
    }
   ],
   "siguiente": "rendicion_final"
  },
  "rendicion_final": {
   "fase": 5,
   "titulo": "Rendicion final de cuentas por extincion",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se aplica el mismo procedimiento de rendicion de cuentas del art. 51, pero con ocasion de la extincion de la tutela o curatela."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de presentacion: <strong>3 meses</strong> desde el cese del cargo, prorrogables por justa causa acreditada (enfermedad, complejidad del patrimonio, imposibilidad de acceso a documentacion)."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ traslada la rendicion a todas las personas legalmente interesadas: persona con discapacidad (siempre), menor (si tiene madurez o +12 años), interesados y Ministerio Fiscal."
    },
    {
     "tipo": "nota",
     "texto": "El Juez resuelve mediante auto judicial, sea cual sea el resultado."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.4 Ley 15/2015. CC art. 280 (resarcimiento de daños si se desaprueban)."
    }
   ],
   "pregunta": "¿Resultado del auto sobre cuentas finales?",
   "opciones": [
    {
     "texto": "Cuentas aprobadas — liberacion de responsabilidad",
     "tono": "t-ok",
     "destino": "fin_cuentas_aprobadas"
    },
    {
     "texto": "Cuentas desaprobadas — resarcimiento de daños",
     "tono": "t-aviso",
     "destino": "fin_cuentas_desaprobadas"
    }
   ]
  },
  "fin_cuentas_aprobadas": {
   "fase": 5,
   "titulo": "Cuentas aprobadas — Procedimiento concluido",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las cuentas se aprueban. El tutor o curador queda liberado de responsabilidad por la gestion realizada. El procedimiento ha concluido."
    },
    {
     "tipo": "lista",
     "titulo": "Estado del procedimiento:",
     "items": [
      "Resolucion de nombramiento firme",
      "Cargo aceptado formalmente ante el LAJ",
      "Inventario aprobado",
      "Comunicacion al Registro Civil efectuada",
      "Cuentas finales aprobadas",
      "Tutela/curatela extinguida correctamente"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "CC art. 280. Art. 51.4-5 Ley 15/2015."
    }
   ],
   "fin": "success"
  },
  "fin_cuentas_desaprobadas": {
   "fase": 5,
   "titulo": "Cuentas desaprobadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las cuentas se desaprueban. El tutor o curador debera resarcir los daños y perjuicios causados, conforme al articulo 280 del Codigo Civil."
    },
    {
     "tipo": "aviso",
     "texto": "La desaprobacion puede derivar en responsabilidad civil e incluso penal. Puede iniciarse expediente de remocion si se aprecia incumplimiento grave."
    },
    {
     "tipo": "ley",
     "texto": "CC art. 280. Art. 49 Ley 15/2015 (remocion)."
    }
   ],
   "fin": "error"
  },
  "incidencias_menu": {
   "fase": 6,
   "titulo": "Incidencias durante el ejercicio del cargo",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Seleccion de la incidencia que se desea tramitar. Todas estas incidencias se producen durante el ejercicio del cargo de tutor o curador ya constituido."
    },
    {
     "tipo": "nota",
     "texto": "Para remocion y extincion de poderes preventivos, la intervencion de abogado es preceptiva (art. 43.3)."
    }
   ],
   "pregunta": "¿Que incidencia desea tramitar?",
   "opciones": [
    {
     "texto": "Remocion del tutor o curador",
     "tono": "t-aviso",
     "destino": "remocion_legitimacion"
    },
    {
     "texto": "Excusa del tutor o curador",
     "tono": "t-plazo",
     "destino": "excusa_plazo"
    },
    {
     "texto": "Rendicion de cuentas periodica",
     "tono": "t-nota",
     "destino": "cuentas_periodicidad"
    },
    {
     "texto": "Rendicion final de cuentas por extincion",
     "tono": "t-nota",
     "destino": "rendicion_final"
    },
    {
     "texto": "Extincion de poderes preventivos",
     "tono": "t-aviso",
     "destino": "extpoder_legitimacion"
    }
   ]
  },
  "cuentas_periodicidad": {
   "fase": 6,
   "titulo": "Rendicion de cuentas — Periodicidad (Art. 51)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El <strong>Articulo 51</strong> regula la obligacion del tutor o curador de informar periodicamente y de forma final sobre su gestion."
    },
    {
     "tipo": "nota",
     "texto": "Base legal: CC arts. 274, 275, 279, mas la resolucion judicial de nombramiento que pueda establecer medidas de fiscalizacion especificas."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de la rendicion de cuentas:",
     "items": [
      "<strong>Informes sobre situacion personal</strong>: salud, atenciones prestadas, cambios relevantes, necesidades detectadas",
      "<strong>Rendiciones de cuentas patrimoniales</strong>: estado del patrimonio, ingresos, gastos, inversiones realizadas, variaciones patrimoniales, saldo final"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La rendicion de cuentas puede ser <strong>periodica</strong> (durante el ejercicio del cargo, segun las medidas de fiscalizacion acordadas) o <strong>final</strong> (al cesar en el cargo por cualquier causa)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 Ley 15/2015. CC arts. 274, 275, 279."
    }
   ],
   "pregunta": "¿Que tipo de rendicion de cuentas se tramita?",
   "opciones": [
    {
     "texto": "Rendicion periodica (durante el ejercicio del cargo)",
     "tono": "t-nota",
     "destino": "cuentas_periodica"
    },
    {
     "texto": "Rendicion final (por extincion del cargo)",
     "tono": "t-nota",
     "destino": "rendicion_final"
    }
   ]
  },
  "cuentas_periodica": {
   "fase": 6,
   "titulo": "Rendicion Periodica de Cuentas (Art. 51.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tutor o curador presenta los informes periodicos conforme a las medidas de fiscalizacion establecidas en la resolucion judicial de nombramiento."
    },
    {
     "tipo": "nota",
     "texto": "El LAJ traslada la rendicion a todas las personas legalmente interesadas para que puedan examinarla y formular las alegaciones que estimen oportunas."
    },
    {
     "tipo": "lista",
     "titulo": "Personas a quienes se traslada:",
     "items": [
      "Persona con discapacidad (siempre)",
      "Menor de edad (si tuviere suficiente madurez o sea mayor de 12 años)",
      "Interesados en el expediente",
      "Ministerio Fiscal (siempre)"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para solicitar comparecencia: <strong>10 dias</strong> desde el traslado de los informes."
    },
    {
     "tipo": "nota",
     "texto": "El Juez resuelve mediante <strong>auto judicial</strong>, sea cual sea el resultado. El auto declara aprobadas o no las cuentas, y puede ordenar medidas complementares si detecta irregularidades."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51.1-3 Ley 15/2015. CC arts. 274, 275, 279. Art. 19 Ley 15/2015 (forma de resoluciones)."
    }
   ],
   "pregunta": "¿Resultado de la aprobacion de cuentas periodicas?",
   "opciones": [
    {
     "texto": "Cuentas aprobadas",
     "tono": "t-ok",
     "destino": "fin_cuentas_periodicas_ok"
    },
    {
     "texto": "Cuentas observadas / no aprobadas",
     "tono": "t-plazo",
     "destino": "fin_cuentas_observadas"
    }
   ]
  },
  "fin_cuentas_periodicas_ok": {
   "fase": 6,
   "titulo": "Cuentas Periodicas Aprobadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las cuentas periodicas han sido aprobadas por el Juez mediante auto judicial."
    },
    {
     "tipo": "nota",
     "texto": "El tutor/curador continua ejerciendo su cargo con las obligaciones de fiscalizacion establecidas. Debera seguir presentando rendiciones periodicas segun lo acordado."
    }
   ],
   "fin": "success"
  },
  "fin_cuentas_observadas": {
   "fase": 6,
   "titulo": "Cuentas Observadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "Las cuentas presentadas han sido observadas o no aprobadas por el Juez."
    },
    {
     "tipo": "nota",
     "texto": "El tutor/curador debe <strong>subsanar las deficiencias detectadas</strong> en el plazo que se le señale. Puede incluir: presentacion de documentacion complementaria, justificacion de gastos, correccion de errores en la contabilidad, o realizacion de auditoria."
    },
    {
     "tipo": "aviso",
     "texto": "Si las deficiencias no se subsanan adecuadamente, el Juez podra adoptar medidas adicionales, incluyendo la posibilidad de iniciar expediente de remocion (Art. 49) si se apreciare incumplimiento grave."
    }
   ],
   "fin": "warning"
  },
  "remocion_legitimacion": {
   "fase": 6,
   "titulo": "Remocion — Legitimacion y causas (Art. 49)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El <strong>Articulo 49</strong> regula el procedimiento de remocion del tutor o curador: el cese forzoso por causas que afectan a su idoneidad."
    },
    {
     "tipo": "aviso",
     "texto": "<strong>IMPORTANTE: Intervencion de ABOGADO OBLIGATORIA</strong> (Art. 43.3, excepcion 1). A diferencia de otros expedientes del Capitulo IV, en la remocion es preceptiva la intervencion de abogado."
    },
    {
     "tipo": "lista",
     "titulo": "Legitimacion activa:",
     "items": [
      "<strong>De oficio</strong>: el Juez puede iniciar el expediente de oficio",
      "<strong>Ministerio Fiscal</strong>: puede promover la remocion",
      "<strong>El tutelado o sujeto a curatela</strong>: puede solicitar la remocion",
      "<strong>Cualquier persona interesada</strong>: tiene legitimacion para instar la remocion"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Causas de remocion de TUTORES (CC arts. 223-226):",
     "items": [
      "Incumplimiento de los deberes del cargo",
      "Incompatibilidad sobrevenida",
      "Condena penal por delitos que afecten a la idoneidad",
      "Administracion fraudulenta o gravemente negligente"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Causas de remocion de CURADORES (CC arts. 286-287):",
     "items": [
      "Incumplimiento grave de los deberes del cargo",
      "Conflicto de intereses con la persona apoyada",
      "Inhabilitacion sobrevenida",
      "Condena penal",
      "Administracion fraudulenta de bienes",
      "Desatencion de las necesidades de la persona con discapacidad",
      "Violacion de la voluntad del apoyado (CC art. 249)",
      "Cualquier otra causa que justifique el cese"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Tras la Ley 8/2021, se incorpora la violacion de la voluntad del apoyado como causa especifica, en coherencia con el nuevo paradigma de respeto a la voluntad y preferencias de la persona con discapacidad (Art. 12 Convencion ONU)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 49 Ley 15/2015. Art. 43.3 Ley 15/2015. CC arts. 223-226 (tutores). CC arts. 286-287 (curadores). CC art. 249 (respeto a la voluntad)."
    }
   ],
   "siguiente": "remocion_comparecencia"
  },
  "remocion_comparecencia": {
   "fase": 6,
   "titulo": "Comparecencia por remocion (Art. 49)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Primera fase del expediente de remocion: comparecencia ante el Juez. Se oyen las partes interesadas y se practica la prueba pertinente."
    },
    {
     "tipo": "aviso",
     "texto": "<strong>Medidas cautelares:</strong> El Juez puede, desde el inicio del expediente, <strong>SUSPENDER al tutor o curador</strong> y nombrar un <strong>Defensor Judicial</strong> conforme al Capitulo II (Arts. 27-33) para proteger al tutelado o sujeto a curatela durante la tramitacion."
    },
    {
     "tipo": "lista",
     "titulo": "Personas que deben ser oidas:",
     "items": [
      "Tutor o curador cuya remocion se pretende",
      "Personas que puedan sustituirle",
      "Persona con discapacidad",
      "Menor si suficiente madurez o mayor de 12 años",
      "Ministerio Fiscal"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La designacion de defensor judicial tiene caracter provisional y cesa cuando se resuelva el expediente de remocion. El defensor judicial asume temporalmente las funciones de tutela o curatela."
    },
    {
     "tipo": "ley",
     "texto": "Art. 49.1-2 Ley 15/2015. Arts. 27-33 Ley 15/2015 (defensor judicial)."
    }
   ],
   "pregunta": "¿El tutor o curador formula oposicion a la remocion?",
   "opciones": [
    {
     "texto": "Sin oposicion — comparecencia",
     "tono": "t-ok",
     "destino": "remocion_sin_oposicion"
    },
    {
     "texto": "Con oposicion — expediente contencioso",
     "tono": "t-plazo",
     "destino": "remocion_contencioso"
    }
   ]
  },
  "remocion_sin_oposicion": {
   "fase": 6,
   "titulo": "Remocion sin oposicion",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sin oposicion, el Juez acuerda la remocion y nombra nuevo tutor o curador conforme al Codigo Civil. Se comunica al Registro Civil."
    },
    {
     "tipo": "nota",
     "texto": "El Juez PUEDE suspender cautelarmente al tutor durante la tramitacion y nombrar un defensor judicial (CC art. 299). No esta obligado a hacerlo."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos de la remocion:",
     "items": [
      "Cese inmediato del removido en el ejercicio del cargo",
      "Obligacion de rendir cuentas finales (Art. 51)",
      "Posible responsabilidad civil por daños (CC art. 220)",
      "Comunicacion al Registro Civil"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 49.2-4 Ley 15/2015. CC art. 299 (defensor judicial). CC art. 220 (responsabilidad)."
    }
   ],
   "siguiente": "nuevo_nombramiento"
  },
  "remocion_contencioso": {
   "fase": 6,
   "titulo": "Remocion contenciosa — Juicio verbal (Art. 49)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El expediente de jurisdiccion voluntaria se transforma en procedimiento <strong>contencioso</strong>. Se tramitara como juicio verbal de la LEC (arts. 437 ss.)."
    },
    {
     "tipo": "info",
     "texto": "Al formular oposicion el tutor o curador, el expediente deja de ser de jurisdiccion voluntaria. El LAJ cita a todos los interesados a vista oral."
    },
    {
     "tipo": "lista",
     "titulo": "Tramitacion del juicio verbal:",
     "items": [
      "Citacion a todos los interesados",
      "Vista oral con alegaciones y practica de prueba",
      "Posible intervencion de peritos",
      "Resolucion mediante sentencia"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El defensor judicial asume temporalmente las funciones, sin perjuicio de reintegracion si la remocion no prospera."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo para la vista oral segun disponibilidad del Juzgado. Recurso contra la sentencia: apelacion en 20 dias."
    },
    {
     "tipo": "ley",
     "texto": "Art. 49.3 Ley 15/2015. LEC arts. 437 y ss. (juicio verbal). Art. 20 Ley 15/2015 (recursos)."
    }
   ],
   "pregunta": "¿Resultado del procedimiento contencioso?",
   "opciones": [
    {
     "texto": "Procede la remocion",
     "tono": "t-ok",
     "destino": "nuevo_nombramiento"
    },
    {
     "texto": "No procede la remocion — reintegracion",
     "tono": "t-plazo",
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
     "texto": "Se declara la remocion y se nombra nuevo tutor o curador conforme a las reglas de delacion del CC (arts. 222-229 tutela, 286 y ss. curatela). Se comunica al Registro Civil."
    },
    {
     "tipo": "nota",
     "texto": "El nuevo tutor/curador debera completar el procedimiento de toma de posesion: fianza (si se exige), aceptacion formal, inventario."
    },
    {
     "tipo": "ley",
     "texto": "Art. 49.4 Ley 15/2015. CC arts. 222-229, 286 y ss."
    }
   ],
   "fin": "success"
  },
  "fin_no_remocion": {
   "fase": 6,
   "titulo": "No procede la remocion",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La remocion no prospera. El tutor o curador es reintegrado en sus funciones si hubiera sido suspendido cautelarmente."
    },
    {
     "tipo": "nota",
     "texto": "El tutor/curador mantiene todas sus facultades y obligaciones. El solicitante de la remocion no podra instar un nuevo expediente por las mismas causas sin circunstancias nuevas."
    },
    {
     "tipo": "ley",
     "texto": "Art. 49.2 Ley 15/2015. CC art. 299 (cese del defensor judicial)."
    }
   ],
   "fin": "neutral"
  },
  "excusa_plazo": {
   "fase": 6,
   "titulo": "Excusa del cargo — Plazo (Art. 50)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El <strong>Articulo 50</strong> regula la excusa del cargo de tutor o curador: la renuncia justificada al cargo <strong>antes de aceptarlo</strong>, fundada en causas legales."
    },
    {
     "tipo": "plazo",
     "texto": "<strong>PLAZO: 15 dias desde el conocimiento del nombramiento</strong> (plazo de caducidad). Transcurrido este plazo sin que el designado alegue excusa, se entiende <strong>aceptado el cargo</strong>."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Conocimiento del nombramiento:</strong> Puede ser personal (notificacion directa), por edictos (si no se pudo localizar al designado), o por cualquier otro medio admitido en derecho."
    },
    {
     "tipo": "aviso",
     "texto": "<strong>Efecto del transcurso del plazo sin excusa:</strong> Si el designado no comparece ni formula excusa dentro de los 15 dias, se entiende aceptado el cargo y no podra excusarse posteriormente por las mismas causas."
    },
    {
     "tipo": "ley",
     "texto": "Art. 50 Ley 15/2015. CC art. 274 (causas de excusa)."
    }
   ],
   "siguiente": "excusa_causas"
  },
  "excusa_causas": {
   "fase": 6,
   "titulo": "Causas de excusa (Art. 50 + CC art. 274)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las causas de excusa estan previstas en el CC art. 274, aplicable por analogia tanto a tutores como a curadores."
    },
    {
     "tipo": "lista",
     "titulo": "Causas legales de excusa:",
     "items": [
      "Edad avanzada (superior a 65 años, discutible segun circunstancias)",
      "Razones de salud que impidan el adecuado desempeño",
      "Ya desempeñar otros cargos de guarda",
      "Parentesco conflictivo con el tutelado/sujeto a curatela",
      "Ocupacion profesional incompatible con el cargo",
      "Residencia alejada del domicilio del tutelado",
      "Mal resultado en cargo de guarda anterior",
      "Enemistad con la familia del tutelado",
      "Carencia de relacion con el tutelado",
      "Cualquier causa analoga que justifique la excusa"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "<strong>Efecto durante la tramitacion:</strong> Hasta que se resuelva la excusa, el designado tiene la <strong>obligacion de CONTINUAR ejerciendo</strong> el cargo. Si no lo hace, se nombra defensor judicial. Si la excusa es rechazada, responde de los gastos ocasionados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 50 Ley 15/2015. CC art. 274."
    }
   ],
   "siguiente": "excusa_comparecencia"
  },
  "excusa_comparecencia": {
   "fase": 6,
   "titulo": "Comparecencia por excusa (Art. 50)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Comparecencia central para la resolucion de la excusa. El Juez examina la concurrencia de la causa alegada."
    },
    {
     "tipo": "lista",
     "titulo": "Personas que deben ser oidas:",
     "items": [
      "<strong>Quien se excusa</strong>: debe justificar la causa alegada",
      "<strong>Quien le vaya a sustituir</strong>: para valorar su idoneidad",
      "<strong>Persona afectada</strong>: si tuviere suficiente madurez o es mayor de 12 años",
      "<strong>Ministerio Fiscal</strong>: siempre debe ser oido"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El Juez examina: (1) Concurrencia real de la causa alegada, (2) Justificacion y proporcionalidad, (3) Perjuicio que la aceptacion pueda causar al tutelado, (4) Existencia de un sustituto idoneo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 50 Ley 15/2015. CC art. 274. Art. 18 Ley 15/2015."
    }
   ],
   "pregunta": "¿Resolucion del Juez sobre la excusa?",
   "opciones": [
    {
     "texto": "Excusa ADMITIDA",
     "tono": "t-ok",
     "destino": "excusa_admitida"
    },
    {
     "texto": "Excusa DENEGADA",
     "tono": "t-aviso",
     "destino": "excusa_rechazada"
    }
   ]
  },
  "excusa_admitida": {
   "fase": 6,
   "titulo": "Excusa admitida — Efectos (Art. 50)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez ha admitido la excusa. El designado queda liberado del cargo."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos de la excusa admitida:",
     "items": [
      "Nombramiento de nuevo tutor/curador segun el orden de preferencia legal",
      "Comunicacion al Registro Civil si procede",
      "El excusado queda liberado de toda responsabilidad derivada del cargo"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El nuevo tutor/curador debera completar el procedimiento de toma de posesion conforme al Art. 46."
    },
    {
     "tipo": "ley",
     "texto": "Art. 50.4 Ley 15/2015. CC arts. 228-234, 276."
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
     "tipo": "aviso",
     "texto": "El Juez ha denegado la excusa. El tutor o curador debe continuar en el cargo."
    },
    {
     "tipo": "nota",
     "texto": "El designado debe cumplir las obligaciones del cargo conforme al Codigo Civil y la resolucion judicial."
    },
    {
     "tipo": "aviso",
     "texto": "<strong>Si persiste en su negativa:</strong> Puede ser <strong>removido</strong> conforme al Art. 49. La remocion por negativa injustificada puede acarrear responsabilidad por los daños causados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 50.3 Ley 15/2015. Art. 49 Ley 15/2015 (remocion)."
    }
   ],
   "fin": "warning"
  },
  "extpoder_legitimacion": {
   "fase": 6,
   "titulo": "Extincion de poderes preventivos (Art. 51 bis)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El <strong>Articulo 51 bis</strong> regula la extincion de los poderes preventivos: poderes otorgados ante notario para prever una necesidad futura de apoyo (CC arts. 253-255)."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Concepto:</strong> Son medidas voluntarias de apoyo otorgadas ante notario conforme a los CC arts. 253-255. La persona (apoderante) designa a otra (apoderado) para que actue en su nombre o le preste apoyo cuando en el futuro no pueda por si misma."
    },
    {
     "tipo": "aviso",
     "texto": "<strong>IMPORTANTE: Intervencion de ABOGADO OBLIGATORIA</strong> (Art. 43.3, excepcion 2)."
    },
    {
     "tipo": "lista",
     "titulo": "Legitimacion activa:",
     "items": [
      "Cualquier persona legitimada para instar provision de apoyos: apoderante, conyuge o pareja de hecho, descendientes, ascendientes, hermanos, Ministerio Fiscal, cualquier interesado",
      "<strong>El curador</strong> (si lo hubiere) tambien esta legitimado"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Causas de extincion (mismas que remocion del curador, CC arts. 286-287):",
     "items": [
      "Incumplimiento de los deberes inherentes al cargo",
      "Conflicto de intereses entre apoderado y apoderante",
      "Inhabilitacion sobrevenida del apoderado",
      "Condena penal del apoderado",
      "Administracion fraudulenta de los bienes del apoderante",
      "Desatencion de las necesidades del apoderante",
      "Violacion de la voluntad del apoderante",
      "Cualquier otra causa que justifique la extincion"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 bis Ley 15/2015. CC arts. 253-255 (poderes preventivos). CC arts. 286-287. Art. 43.3 Ley 15/2015."
    }
   ],
   "siguiente": "extpoder_comparecencia"
  },
  "extpoder_comparecencia": {
   "fase": 6,
   "titulo": "Comparecencia — Extincion de poderes (Art. 51 bis)",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Procedimiento de extincion de poderes preventivos en dos fases."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Fase 1 — Admision de solicitud:</strong> El Juzgado admite la solicitud y acuerda la practica de las diligencias necesarias. Se concede traslado al apoderado y a la persona con discapacidad (apoderante)."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Fase 2 — Comparecencia:</strong> Citados: solicitante, apoderado, persona con discapacidad (apoderante), y Ministerio Fiscal (siempre). Se oyen todas las partes y se practica la prueba pertinente."
    },
    {
     "tipo": "nota",
     "texto": "Si no hay oposicion, el Juez resuelve directamente. Si hay oposicion, el expediente se transforma en contencioso (juicio verbal)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 bis Ley 15/2015. Art. 18 Ley 15/2015. Art. 4 Ley 15/2015 (intervencion MF)."
    }
   ],
   "pregunta": "¿Se formula oposicion a la extincion?",
   "opciones": [
    {
     "texto": "Sin oposicion — extincion acordada",
     "tono": "t-ok",
     "destino": "extpoder_resolucion"
    },
    {
     "texto": "Con oposicion — expediente contencioso (juicio verbal)",
     "tono": "t-plazo",
     "destino": "extpoder_oposicion"
    }
   ]
  },
  "extpoder_oposicion": {
   "fase": 6,
   "titulo": "Transformacion contenciosa (Art. 51 bis)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "Al formularse oposicion, el expediente de jurisdiccion voluntaria se transforma en procedimiento <strong>contencioso</strong>."
    },
    {
     "tipo": "info",
     "texto": "Se tramitara como juicio verbal de la LEC (arts. 437 ss.), con citacion a todos los interesados, vista oral, practica de prueba y resolucion mediante sentencia."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo de interposicion de apelacion contra la sentencia: 20 dias."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 bis Ley 15/2015. LEC arts. 437 y ss."
    }
   ],
   "pregunta": "Resultado de la sentencia:",
   "opciones": [
    {
     "texto": "Extincion acordada",
     "tono": "t-ok",
     "destino": "extpoder_resolucion"
    },
    {
     "texto": "Extincion denegada",
     "tono": "t-ok",
     "destino": "fin_extpoder_denegada"
    }
   ]
  },
  "extpoder_resolucion": {
   "fase": 6,
   "titulo": "Poder preventivo extinguido",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El poder preventivo ha sido extinguido por resolucion judicial."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos de la extincion:",
     "items": [
      "El apoderado pierde todas las facultades conferidas en el documento notarial",
      "Los actos validos realizados ANTES de la extincion mantienen su validez",
      "Puede nombrarse un nuevo apoderado si las circunstancias lo requieren",
      "Comunicacion al Registro Civil si procede",
      "Posibilidad de responsabilidad por actos fraudulentos o negligentes"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Si la extincion se produce por causas imputables al apoderado, podra exigirse la correspondiente responsabilidad por los daños y perjuicios causados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 51 bis Ley 15/2015. CC arts. 253-255."
    }
   ],
   "fin": "success"
  },
  "fin_extpoder_denegada": {
   "fase": 6,
   "titulo": "Extincion denegada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La solicitud de extincion de poderes preventivos ha sido denegada."
    },
    {
     "tipo": "nota",
     "texto": "El apoderado <strong>mantiene todas sus facultades</strong> conforme al documento notarial. El poder preventivo sigue vigente."
    },
    {
     "tipo": "nota",
     "texto": "El solicitante podra instar una nueva solicitud si concurrieren nuevas causas o circunstancias supervinientes."
    }
   ],
   "fin": "neutral"
  },
  "guarda_concepto": {
   "fase": 7,
   "titulo": "Guarda de hecho — Concepto (Art. 52)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El <strong>Articulo 52</strong> regula la guarda de hecho: la situacion de la persona que, sin designacion formal como tutor o curador, cuida facticamente de una persona con discapacidad o menor de edad."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Regulacion sustantiva:</strong> CC arts. 263-267 (redactados integramente por la Ley 8/2021). La guarda de hecho no requiere nombramiento judicial previo."
    },
    {
     "tipo": "nota",
     "texto": "<strong>Tras la Ley 8/2021:</strong> La guarda de hecho se configura como <strong>medida preferente</strong> cuando sea suficiente para las necesidades de apoyo de la persona con discapacidad, conforme al principio de proporcionalidad y al respeto a la autonomia (Art. 12 Convencion ONU)."
    },
    {
     "tipo": "lista",
     "titulo": "Legitimacion para requerimiento:",
     "items": [
      "<strong>Ministerio Fiscal</strong>",
      "<strong>Persona que precise apoyos</strong> (la propia persona con discapacidad)",
      "<strong>Cualquier persona con interes legitimo</strong>"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La guarda de hecho puede evolucionar formalmente a curatela si las necesidades de la persona asi lo requieren, mediante el procedimiento de provision de medidas de apoyo (Cap. III bis)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 52 Ley 15/2015. CC arts. 263-267. Ley 8/2021. Art. 12 Convencion ONU."
    }
   ],
   "siguiente": "guarda_requerimiento"
  },
  "guarda_requerimiento": {
   "fase": 7,
   "titulo": "Requerimiento e informacion del guardador (Art. 52)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El guardador de hecho puede ser requerido para informar sobre la situacion de la persona con discapacidad y sobre la gestion que realiza."
    },
    {
     "tipo": "lista",
     "titulo": "Informacion que debe proporcionar el guardador:",
     "items": [
      "<strong>Situacion de la persona</strong>: estado de salud, atenciones que recibe, calidad de vida, necesidades detectadas",
      "<strong>Situacion de los bienes</strong>: patrimonio, administracion que realiza, ingresos y gastos, bienes bajo su custodia",
      "<strong>Su actuacion</strong>: cuidados proporcionados, decisiones adoptadas, gestiones realizadas, tiempo de dedicacion"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El requerimiento no implica necesariamente la constitucion de tutela o curatela. Tiene por objeto verificar que la actuacion del guardador es adecuada."
    },
    {
     "tipo": "ley",
     "texto": "Art. 52.1-2 Ley 15/2015. CC art. 300."
    }
   ],
   "siguiente": "guarda_medidas"
  },
  "guarda_medidas": {
   "fase": 7,
   "titulo": "Medidas de control y vigilancia (Art. 52)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juez podra establecer medidas de supervision de la guarda de hecho, previa comparecencia con la persona afectada por la guarda, el guardador y el MF."
    },
    {
     "tipo": "lista",
     "titulo": "Medidas de control disponibles:",
     "items": [
      "Periodicidad de informes del guardador",
      "Autorizacion previa para actos patrimoniales relevantes",
      "Intervencion de servicios sociales o profesionales",
      "Visitas de seguimiento"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Medidas de vigilancia:",
     "items": [
      "Seguimiento periodico",
      "Visitas domiciliarias",
      "Informes profesionales",
      "Comprobacion del cumplimiento de las medidas adoptadas"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "<strong>Autorizacion judicial previa (CC arts. 263 ss.):</strong> El guardador necesitara autorizacion judicial para: actos de disposicion patrimonial (venta de inmuebles), actos de especial importancia vital (intervenciones medicas, decisiones residenciales)."
    },
    {
     "tipo": "aviso",
     "texto": "<strong>Entrevista personal:</strong> El Juez entrevista <strong>PERSONALMENTE</strong> a la persona con discapacidad (no delegable, conforme al Art. 12 de la Convencion ONU). Esta entrevista es obligatoria y debe adaptarse a las necesidades de la persona."
    },
    {
     "tipo": "nota",
     "texto": "Para menores de edad: el Juez puede promover la constitucion de tutela si la situacion lo requiere."
    },
    {
     "tipo": "ley",
     "texto": "Art. 52.2-4 Ley 15/2015. CC arts. 263-267. Art. 12 Convencion ONU. Art. 7 bis Ley 15/2015."
    }
   ],
   "pregunta": "¿Evolucion del procedimiento de guarda de hecho?",
   "opciones": [
    {
     "texto": "Se mantiene la guarda de hecho con medidas de control",
     "tono": "t-ok",
     "destino": "fin_guarda_mantenida"
    },
    {
     "texto": "Se promueve tutela (menor de edad)",
     "tono": "t-ok",
     "destino": "fin_guarda_tutela"
    },
    {
     "texto": "Se promueve curatela (PCD adulta)",
     "tono": "t-ok",
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
     "texto": "La guarda de hecho se mantiene con las medidas de control y vigilancia establecidas por el Juez."
    },
    {
     "tipo": "lista",
     "titulo": "Medidas adoptadas:",
     "items": [
      "Medidas de control: periodicidad de informes, autorizaciones previas, intervencion profesional",
      "Medidas de vigilancia: seguimiento periodico, visitas domiciliarias",
      "El guardador debe informar periodicamente al Juzgado",
      "El Juez entrevista personalmente a la persona con discapacidad"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La guarda de hecho puede revisarse en cualquier momento si cambian las circunstancias. Si las necesidades de apoyo aumentan, podra promoverse la constitucion formal de curatela."
    },
    {
     "tipo": "ley",
     "texto": "Art. 52 Ley 15/2015. CC arts. 263-267."
    }
   ],
   "fin": "success"
  },
  "fin_guarda_tutela": {
   "fase": 7,
   "titulo": "Promocion de tutela",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se promueve expediente de constitucion de tutela para el menor de edad."
    },
    {
     "tipo": "nota",
     "texto": "El procedimiento seguira la tramitacion del <strong>Articulo 45</strong> de la Ley 15/2015 (constitucion de tutela de menores). Debera volver al inicio de esta guia para seguir el procedimiento completo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 45 Ley 15/2015. CC arts. 228 y ss."
    }
   ],
   "fin": "success"
  },
  "fin_guarda_curatela": {
   "fase": 7,
   "titulo": "Promocion de curatela",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se promueve expediente de provision de medidas de apoyo o curatela para la persona con discapacidad adulta."
    },
    {
     "tipo": "nota",
     "texto": "El procedimiento seguira la tramitacion del <strong>Capitulo III bis</strong> de la Ley 15/2015 o el procedimiento especial de la LEC introducido por la Ley 8/2021."
    },
    {
     "tipo": "nota",
     "texto": "Si del proceso se deriva la necesidad de nombrar curador y se cumplen los requisitos del Art. 44.2, se aplicara luego el procedimiento simplificado del Art. 45."
    },
    {
     "tipo": "ley",
     "texto": "Cap. III bis Ley 15/2015. LEC Cap. III bis. Art. 44.2 Ley 15/2015. CC arts. 268 y ss."
    }
   ],
   "fin": "success"
  },
  "fin_normal": {
   "fase": 5,
   "titulo": "Procedimiento concluido con normalidad",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tutor o curador ejerce sus funciones con normalidad. El procedimiento no requiere actuaciones adicionales en este momento."
    },
    {
     "tipo": "nota",
     "texto": "El tutor/curador debe continuar cumpliendo sus obligaciones: informes periodicos, rendicion de cuentas conforme a las medidas de fiscalizacion, solicitar autorizacion para actos de disposicion, y someterse a las medidas de control acordadas."
    },
    {
     "tipo": "ley",
     "texto": "CC arts. 258-278. Art. 48, 51 Ley 15/2015."
    }
   ],
   "fin": "success"
  },
  "fin_error_incompetencia": {
   "fase": 0,
   "titulo": "Incompetencia territorial o funcional",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El expediente no puede tramitarse en este Juzgado por falta de competencia."
    },
    {
     "tipo": "nota",
     "texto": "Se declarara la competencia a favor del Juzgado del domicilio o residencia del afectado, remitiendo las actuaciones."
    },
    {
     "tipo": "ley",
     "texto": "Art. 43.1-2 Ley 15/2015. LEC arts. 45 y ss."
    }
   ],
   "fin": "error"
  }
 },
 "pie": "&amp;sect; Ley 15/2015, de 2 de julio, de la Jurisdiccion Voluntaria.<br>\nTitulo II, Capitulo IV, Arts. 43 a 52.<br>\nModificada por Ley Organica 1/2025 y Ley 8/2021, de 2 de junio.<br>\nGuia fusionada — integra tres fuentes especializadas."
});

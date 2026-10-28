/* Migrado por tools/migrate.js desde sources/actual/G04.json (contenido sin cambios; pendiente de revisión). */
Neg.data.register({
 "tipo": "guia",
 "id": "lec-administracion-caudal",
 "ley": "LEC",
 "grupo": "División judicial de patrimonios",
 "titulo": "De la administración del caudal hereditario (artículos 797 a 805 LEC)",
 "corto": "Administración del caudal hereditario",
 "articulos": [
  "797",
  "798",
  "799",
  "800",
  "801",
  "802",
  "803",
  "804",
  "805"
 ],
 "revision": {
  "estado": "sin revisar",
  "boe": "20261007",
  "origen": "G04"
 },
 "fases": [
  "Constitución del cargo",
  "Representación",
  "Gestión y conservación",
  "Actos dispositivos",
  "Cuentas y retribución",
  "Administraciones subalternas",
  "Cese y liquidación"
 ],
 "actores": {
  "ambos": "LAJ+J",
  "juez": "Juez",
  "laj": "LAJ"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Inicio — De la administración del caudal hereditario",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Guía interactiva de tramitación de la administración judicial del caudal hereditario, regulada en los Artículos 797 a 805 de la Ley 1/2000, de 7 de enero, de Enjuiciamiento Civil."
    },
    {
     "tipo": "nota",
     "texto": "Esta guía cubre todo el ciclo vital de la figura del administrador: desde su nombramiento y toma de posesión hasta la rendición final de cuentas, aprobación o impugnación, retribución y cierre."
    },
    {
     "tipo": "lista",
     "titulo": "Ámbito normativo aplicable",
     "items": [
      "LEC Libro IV, Título II, Capítulo I, Sección 3.ª (Arts. 797-805)",
      "Arts. 988-1012 CC (aceptación de herencia)",
      "Arts. 1967-1969 CC (posesión en interés de la herencia)",
      "Ley Hipotecaria y Reglamento Hipotecario (inscripción registral)",
      "Ley Notarial 21/2007 (subastas notariales)",
      "Ley 15/2015 de Jurisdicción Voluntaria (ventas JV)",
      "RD 4/2015 del Mercado de Valores"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Arts. 797-805 LEC · Ley 1/2000, de 7 de enero, de Enjuiciamiento Civil"
    }
   ],
   "siguiente": "presupuestos"
  },
  "presupuestos": {
   "fase": 0,
   "titulo": "Verificación de presupuestos del cargo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de formalizar la toma de posesión, compruebe que constan acreditados en autos los dos presupuestos legales del art. 795 LEC: el nombramiento del administrador y la prestación de la caución exigida por el tribunal."
    },
    {
     "tipo": "lista",
     "titulo": "Presupuestos que deben constar acreditados en autos",
     "items": [
      "Resolución judicial firme de nombramiento del administrador (art. 795.2.ª LEC)",
      "Prestación efectiva de la caución fijada por el tribunal (art. 795.4.ª LEC)",
      "Constancia documental de ambos extremos en los autos del procedimiento"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La caución puede adoptar cualquier forma admitida en derecho: depósito dinerario, aval bancario, fianza personal de sujeto solvente o seguro de caución. La LEC no predetermina su modalidad."
    },
    {
     "tipo": "aviso",
     "texto": "La posesión del cargo no puede formalizarse si falta cualquiera de los dos presupuestos. Subsane el defecto antes de continuar."
    },
    {
     "tipo": "ley",
     "texto": "Art. 795 LEC (nombramiento y caución) · Art. 797.1 LEC"
    }
   ],
   "pregunta": "¿Constan acreditados en autos tanto el nombramiento como la prestación de la caución?",
   "opciones": [
    {
     "texto": "Sí, ambos presupuestos están acreditados en autos",
     "tono": "t-ok",
     "destino": "posesion"
    },
    {
     "texto": "No, falta el nombramiento o la caución",
     "tono": "t-aviso",
     "destino": "fin_sin_presupuestos"
    }
   ]
  },
  "nombramiento": {
   "fase": 0,
   "titulo": "Nombramiento del administrador y constitución de caución",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador del caudal hereditario es designado en el seno del procedimiento de división judicial de la herencia (Arts. 782 y ss. LEC), generalmente tras la formación del inventario y avalúo. El nombramiento se realiza mediante resolución judicial que especifica la persona designada y las condiciones de su cargo."
    },
    {
     "tipo": "plazo",
     "texto": "El nombramiento se realiza mediante resolución judicial que especifica la persona designada y las condiciones de su cargo."
    },
    {
     "tipo": "aviso",
     "texto": "Antes de poder tomar posesión, el administrador debe prestar caución que garantice el correcto desempeño de sus funciones."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 782 y ss. LEC · Art. 795 LEC · Art. 797.1 LEC"
    }
   ],
   "pregunta": "¿Ha prestado el administrador designado la caución requerida?",
   "opciones": [
    {
     "texto": "Sí, la caución está constituida y aprobada",
     "tono": "t-ok",
     "destino": "posesion"
    },
    {
     "texto": "No, aún no se ha prestado caución",
     "tono": "t-aviso",
     "destino": "caucion_pend"
    }
   ]
  },
  "caucion_pend": {
   "fase": 0,
   "titulo": "Constitución de la caución pendiente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La caución es requisito previo e indispensable para la toma de posesión del cargo (Art. 797.1 LEC). Garantiza frente a posibles daños o perjuicios derivados de la administración."
    },
    {
     "tipo": "lista",
     "titulo": "Trámites para la constitución de caución:",
     "items": [
      "Presentar escrito solicitando forma y cuantía de la caución",
      "Aportar garantía (aval bancario, depósito en efectivo, seguro de caución)",
      "Obtener aprobación del LAJ mediante diligencia",
      "Unificar documentación acreditativa en autos"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La caución puede adoptar cualquier forma admitida en derecho: depósito dinerario, aval bancario, fianza personal de sujeto solvente o seguro de caución."
    },
    {
     "tipo": "ley",
     "texto": "Régimen general de cauciones procesales: Arts. 581 y ss. LEC · Art. 795.4.ª LEC"
    }
   ],
   "pregunta": "¿Se ha constituido y aprobado la caución?",
   "opciones": [
    {
     "texto": "Sí, caución aprobada",
     "tono": "t-ok",
     "destino": "posesion"
    },
    {
     "texto": "Problemas en la constitución",
     "tono": "t-plazo",
     "destino": "caucion_problema"
    }
   ]
  },
  "caucion_problema": {
   "fase": 0,
   "titulo": "Incidentes en la constitución de caución",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "Si existe controversia sobre la forma, cuantía o suficiencia de la caución, deberá sustanciarse incidente dentro del procedimiento principal."
    },
    {
     "tipo": "nota",
     "texto": "Mientras no se resuelva el incidente de caución, el nombrado no podrá tomar posesión del cargo ni ejercer funciones de administración."
    },
    {
     "tipo": "ley",
     "texto": "Art. 797.1 LEC: «Nombrado el administrador y prestada por éste la caución, el Letrado de la Administración de Justicia le pondrá en posesión de su cargo.» · Arts. 581 y ss. LEC"
    }
   ],
   "fin": "warning"
  },
  "posesion": {
   "fase": 0,
   "titulo": "Toma de posesión del cargo (art. 797.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Letrado de la Administración de Justicia pone formalmente al administrador en posesión de su cargo y lo da a conocer a las personas con quienes deba entenderse para el desempeño de sus funciones."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ en este trámite",
     "items": [
      "Dictar diligencia de posesión del cargo",
      "Identificar y notificar al administrador las personas designadas: arrendatarios, empleados de fincas, gestores, entidades bancarias, notarios, organismos tributarios, registros...",
      "Incorporar la diligencia de posesión a los autos"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Actos formales de la toma de posesión (documento 2)",
     "items": [
      "El LAJ cita al administrador para formalizar la entrega",
      "Se da a conocer las personas con quienes debe entenderse",
      "Se expide testimonio o copia auténtica del nombramiento",
      "Se hace constar la fecha de toma de posesión en diligencia"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El administrador debe designar expresamente, antes de este trámite, las personas a las que el LAJ dará a conocer su nombramiento. Conviene preparar un listado completo de todos los sujetos con quienes deba relacionarse."
    },
    {
     "tipo": "ley",
     "texto": "Art. 797.1 LEC"
    }
   ],
   "siguiente": "acreditacion"
  },
  "acreditacion": {
   "fase": 0,
   "titulo": "Expedición del título acreditativo de la representación (art. 797.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ expide al administrador el documento que le habilita para acreditar su representación frente a cualquier tercero ajeno al procedimiento."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del testimonio o copia auténtica",
     "items": [
      "Nombramiento como administrador del caudal hereditario",
      "Constancia de que se halla en posesión del cargo",
      "Sello y firma del Letrado de la Administración de Justicia",
      "Fecha de expedición"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Este documento funciona como título habilitante frente a bancos, registros, organismos administrativos y cualesquiera terceros. Tiene naturaleza declarativa, no constitutiva: la habilitación deriva del nombramiento y de la posesión del cargo, no de este testimonio."
    },
    {
     "tipo": "aviso",
     "texto": "El administrador debe conservar el original y obtener copias para cada organismo con el que deba relacionarse. Ante cualquier duda sobre su vigencia, solicite nuevo testimonio actualizado."
    },
    {
     "tipo": "ley",
     "texto": "Art. 797.2 LEC"
    }
   ],
   "siguiente": "registro_decision"
  },
  "registro_decision": {
   "fase": 0,
   "titulo": "Valoración de la inscripción en el Registro de la Propiedad",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El art. 797.3 LEC faculta — sin imponer — hacer constar en el Registro de la Propiedad el estado de administración judicial de las fincas y el nombramiento del administrador. Valore si la composición del caudal hace aconsejable esta inscripción."
    },
    {
     "tipo": "nota",
     "texto": "La inscripción produce efecto de publicidad erga omnes: los terceros que contraten sobre esas fincas no podrán alegar desconocimiento del estado de administración. Es especialmente recomendable cuando el caudal incluye inmuebles de valor relevante o cuando existe riesgo de actos dispositivos irregulares."
    },
    {
     "tipo": "ley",
     "texto": "Art. 797.3 LEC · Ley Hipotecaria · Reglamento Hipotecario"
    }
   ],
   "pregunta": "¿El caudal incluye bienes inmuebles respecto de los cuales conviene practicar la inscripción registral?",
   "opciones": [
    {
     "texto": "Sí, procede solicitar la inscripción registral",
     "tono": "t-ok",
     "destino": "registro_propiedad"
    },
    {
     "texto": "No, o no hay inmuebles en el caudal",
     "tono": "t-nota",
     "destino": "subalternas_decision"
    }
   ]
  },
  "registro_propiedad": {
   "fase": 0,
   "titulo": "Inscripción en el Registro de la Propiedad (art. 797.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ expide el mandamiento registral para hacer constar el estado de administración judicial y el nombramiento del administrador respecto de las fincas del caudal."
    },
    {
     "tipo": "lista",
     "titulo": "Tramitación del mandamiento",
     "items": [
      "El LAJ expide mandamiento con los requisitos de la legislación hipotecaria",
      "Presentación del mandamiento en el Registro de la Propiedad competente",
      "Obtención de nota de despacho (o nota de defecto, si procede)",
      "Subsanación del defecto registral si el Registrador califica negativamente",
      "Incorporación de la documentación registral a los autos"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Documentación necesaria (documento 2)",
     "items": [
      "Mandamiento expedido por el LAJ",
      "Certificación del nombramiento y posesión",
      "Identificación de las fincas a inscribir",
      "Cumplimiento de requisitos de la legislación hipotecaria"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "Plazo: tan pronto como se expida el mandamiento. Efectos frente a terceros desde la inscripción (Arts. 17 y 32 LH)."
    },
    {
     "tipo": "aviso",
     "texto": "Si el Registrador emite nota de defecto, éste debe subsanarse antes de que la inscripción produzca sus efectos de publicidad. Comuníquelo al tribunal para que resuelva sobre la subsanación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 797.3 LEC · Arts. 9, 17, 32 LH · Art. 209 RH"
    }
   ],
   "siguiente": "subalternas_decision"
  },
  "subalternas_decision": {
   "fase": 0,
   "titulo": "Verificación de administraciones subalternas preexistentes (art. 805)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Antes de iniciar la fase de representación, compruebe si el causante tenía constituidas administraciones subalternas para el cuidado de bienes concretos, ya que su régimen de integración es distinto al del administrador judicial."
    },
    {
     "tipo": "nota",
     "texto": "Las administraciones subalternas son personas designadas por el causante en vida para gestionar bienes específicos. Su legitimación deriva directamente del encargo otorgado por el finado: no requieren nombramiento judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 805 LEC"
    }
   ],
   "pregunta": "¿El causante tenía constituidas administraciones subalternas para el cuidado de sus bienes?",
   "opciones": [
    {
     "texto": "Sí, existen administraciones subalternas del causante",
     "tono": "t-ok",
     "destino": "subalternas_integracion"
    },
    {
     "texto": "No existen administraciones subalternas",
     "tono": "t-nota",
     "destino": "representacion_check"
    }
   ]
  },
  "subalternas_integracion": {
   "fase": 0,
   "titulo": "Integración y régimen de las administraciones subalternas (art. 805)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las administraciones subalternas se conservan con la retribución y las facultades que el causante les otorgó, quedando integradas bajo la dirección del administrador judicial."
    },
    {
     "tipo": "lista",
     "titulo": "Régimen de las administraciones subalternas",
     "items": [
      "Se conservan con la retribución y facultades otorgadas por el causante (no sujetas al art. 804)",
      "Rendirán cuentas parciales al administrador judicial, no directamente al tribunal",
      "Remitirán al administrador judicial todo lo que recauden en su ámbito de gestión",
      "Se consideran jurídicamente dependientes del administrador judicial",
      "No pueden ser separados por el administrador judicial sin causa justa",
      "Toda separación requiere autorización mediante decreto del LAJ",
      "Las vacantes se proveen por el administrador judicial con autorización del LAJ (decreto), bajo su responsabilidad personal"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "El administrador judicial no puede modificar unilateralmente las condiciones — retribución ni facultades — fijadas por el causante. Cualquier alteración requiere autorización judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 805 LEC · Art. 804 LEC (inaplicable a subalternas)"
    }
   ],
   "siguiente": "representacion_check"
  },
  "fin_sin_presupuestos": {
   "fase": 0,
   "titulo": "Fin: presupuestos incumplidos — no puede iniciarse la administración",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No puede formalizarse la posesión del cargo ni llevarse a cabo ninguna actuación propia de la administración mientras no consten acreditados en autos el nombramiento del administrador y la prestación de la caución exigida."
    },
    {
     "tipo": "aviso",
     "texto": "Subsane el defecto: acredite el nombramiento mediante la resolución judicial correspondiente y tramite la prestación de la caución antes de reiniciar el procedimiento."
    },
    {
     "tipo": "ley",
     "texto": "Art. 795 LEC · Art. 797.1 LEC"
    }
   ],
   "fin": "error"
  },
  "representacion_check": {
   "fase": 1,
   "titulo": "Determinación del alcance de la representación (art. 798)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El alcance de la representación del administrador depende del estado de la herencia. La distinción entre herencia yacente y herencia aceptada es decisiva: determina qué acciones puede y debe ejercitar el administrador y con qué extensión."
    },
    {
     "tipo": "nota",
     "texto": "La aceptación puede ser expresa, tácita o a beneficio de inventario (arts. 999 y ss. CC). La declaración de herederos — judicial o notarial — es el acto que fija formalmente quiénes tienen la condición de herederos del causante."
    },
    {
     "tipo": "ley",
     "texto": "Art. 798 LEC · Arts. 999 y ss. CC · Ley de Jurisdicción Voluntaria (arts. 55 y ss.) · Arts. 988-1012 CC"
    }
   ],
   "pregunta": "¿Ha sido aceptada la herencia o se ha producido ya la declaración formal de herederos?",
   "opciones": [
    {
     "texto": "Sí: herencia aceptada o herederos formalmente declarados",
     "tono": "t-ok",
     "destino": "rep_aceptada"
    },
    {
     "texto": "No: la herencia está todavía yacente",
     "tono": "t-plazo",
     "destino": "rep_yacente"
    }
   ]
  },
  "rep_yacente": {
   "fase": 1,
   "titulo": "Representación plena de la herencia yacente (art. 798 fase I)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Mientras la herencia no ha sido aceptada ni se han declarado los herederos, el administrador ostenta una representación amplia, activa y plena de la herencia yacente."
    },
    {
     "tipo": "lista",
     "titulo": "Facultades del administrador en fase yacente",
     "items": [
      "Representar a la herencia en todos los pleitos promovidos tras el fallecimiento del causante",
      "Representar a la herencia en los pleitos que estuvieren ya iniciados en el momento del fallecimiento",
      "Ejercitar todas las acciones que hubieran podido corresponder al difunto: reales, personales, posesorias, declarativas y de condena",
      "Mantener estas facultades plenas hasta que se produzca la declaración de herederos"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Esta representación plena no cesa con el paso del tiempo: se mantiene íntegra hasta la declaración de herederos. El administrador debe actuar con plena diligencia como si los herederos estuvieran ya determinados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 798 párrafo 1.º LEC · Arts. 1967-1969 CC"
    }
   ],
   "siguiente": "declaracion_check"
  },
  "declaracion_check": {
   "fase": 1,
   "titulo": "Verificación de la declaración de herederos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Compruebe periódicamente si se ha producido ya la declaración formal de herederos, que determina el tránsito desde la representación plena a la representación restringida del administrador."
    },
    {
     "tipo": "nota",
     "texto": "La declaración de herederos puede obtenerse por vía judicial (expediente de declaración de herederos ab intestato ante el Juzgado de Primera Instancia) o notarial (acta de notoriedad). En ambos casos, su producción formal delimita el cambio de fase de la representación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 798 LEC · LJV arts. 55 y ss. (declaración notarial de herederos)"
    }
   ],
   "pregunta": "¿Se ha producido ya formalmente la declaración de herederos?",
   "opciones": [
    {
     "texto": "Sí, ya consta la declaración formal de herederos",
     "tono": "t-ok",
     "destino": "rep_aceptada"
    },
    {
     "texto": "No, aún no se ha producido la declaración",
     "tono": "t-plazo",
     "destino": "gestion_conservacion"
    }
   ]
  },
  "rep_aceptada": {
   "fase": 1,
   "titulo": "Representación restringida post-aceptación (art. 798 fase II)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Una vez aceptada la herencia o declarados los herederos, la representación del administrador se contrae exclusivamente a lo que se refiere a la administración del caudal, su custodia y su conservación."
    },
    {
     "tipo": "lista",
     "titulo": "Ámbito de la representación restringida",
     "items": [
      "Gestión ordinaria del caudal hereditario",
      "Custodia y conservación de los bienes",
      "Ejercicio de las acciones directamente vinculadas a la administración",
      "Representación en litigios que afecten específicamente a la gestión del caudal"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La reducción del ámbito representativo NO implica pasividad: el administrador \"podrá y deberá\" gestionar lo que sea conducente (art. 798 LEC). La inactividad injustificada puede generar responsabilidad civil frente a los herederos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 798 párrafo 2.º LEC · Arts. 988-999 CC"
    }
   ],
   "siguiente": "gestion_conservacion"
  },
  "gestion_conservacion": {
   "fase": 2,
   "titulo": "Obligaciones generales de conservación y explotación del caudal (art. 801.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador está obligado, bajo su responsabilidad personal y directa, al cumplimiento simultáneo e inseparable de dos mandatos legales."
    },
    {
     "tipo": "lista",
     "titulo": "Mandatos del art. 801.1 LEC",
     "items": [
      "1.º Conservar sin menoscabo los bienes de la herencia: mantenerlos en el estado recibido, evitando deterioro, pérdida o disminución de valor imputable a su gestión",
      "2.º Procurar que los bienes den las rentas, productos o utilidades que corresponda: gestión activa y no meramente pasiva del caudal",
      "Actuar con la diligencia de un buen administrador en todo momento"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Primeras actuaciones recomendadas de gestión ordinaria",
     "items": [
      "Recabar inventario actualizado de bienes",
      "Identificar arrendatarios, deudores y acreedores",
      "Verificar seguros y cargas sobre los bienes",
      "Establecer sistema de contabilidad separada",
      "Cobro de rentas arrendaticias y frutos",
      "Pago de contribuciones, IBI, suministros",
      "Contratación de servicios básicos de mantenimiento"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "El incumplimiento de cualquiera de los dos mandatos puede generar responsabilidad civil del administrador frente a los herederos e interesados en la herencia. La custodia pasiva sin atender a la explotación económica constituye incumplimiento del segundo mandato."
    },
    {
     "tipo": "ley",
     "texto": "Art. 801.1 LEC · Arts. 801-803 LEC"
    }
   ],
   "siguiente": "reparacion_check"
  },
  "reparacion_check": {
   "fase": 2,
   "titulo": "Detección y clasificación de necesidades de reparación (art. 801.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El régimen jurídico de las reparaciones y gastos depende de su naturaleza: ordinaria o extraordinaria. Esta distinción determina si el administrador puede actuar autónomamente o necesita autorización judicial previa."
    },
    {
     "tipo": "nota",
     "texto": "Reparaciones ordinarias: naturaleza habitual, menor cuantía, necesidad de ejecución sin demora para evitar daños mayores. Reparaciones extraordinarias: cuantía, naturaleza o impacto relevante sobre la integridad o el valor del caudal."
    },
    {
     "tipo": "ley",
     "texto": "Art. 801.2 LEC"
    }
   ],
   "pregunta": "¿Se han detectado necesidades de reparación o gasto en los bienes del caudal?",
   "opciones": [
    {
     "texto": "No se requieren reparaciones en este momento",
     "tono": "t-ok",
     "destino": "deposito_fondos"
    },
    {
     "texto": "Sí, reparaciones ordinarias (habituales, menor cuantía, urgencia inmediata)",
     "tono": "t-ok",
     "destino": "reparacion_ordinaria"
    },
    {
     "texto": "Sí, reparaciones o gastos extraordinarios (cuantía o impacto relevante)",
     "tono": "t-plazo",
     "destino": "reparacion_ext_notif"
    }
   ]
  },
  "reparacion_ordinaria": {
   "fase": 2,
   "titulo": "Ejecución autónoma de reparaciones ordinarias (art. 801.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las reparaciones ordinarias indispensables para la conservación de los bienes pueden ser realizadas por el administrador de forma autónoma, sin autorización judicial previa."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del administrador",
     "items": [
      "Identificar la reparación ordinaria indispensable",
      "Obtener presupuesto o contratar directamente la reparación según su cuantía",
      "Imputar el coste a los fondos ordinarios que el administrador puede retener conforme al art. 802",
      "Documentar el gasto con la factura o justificante correspondiente",
      "Incorporar el gasto a la siguiente rendición de cuentas (art. 799)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Ejemplos: pintura, pequeñas averías, sustitución de elementos desgastados, limpieza profesional, revisiones de seguridad."
    },
    {
     "tipo": "aviso",
     "texto": "Solo son ordinarias las reparaciones \"indispensables\" para la conservación. Las mejoras o actuaciones que no sean estrictamente necesarias deben tramitarse por la vía de autorización judicial de reparaciones extraordinarias."
    },
    {
     "tipo": "ley",
     "texto": "Art. 801.2 primer párrafo LEC · Art. 802 LEC"
    }
   ],
   "siguiente": "deposito_fondos"
  },
  "reparacion_ext_notif": {
   "fase": 2,
   "titulo": "Comunicación al Juzgado de la necesidad de reparación extraordinaria (art. 801.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador no puede acometer unilateralmente reparaciones o gastos extraordinarios. El primer paso obligatorio es poner en conocimiento del Juzgado la necesidad detectada."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de la comunicación al Juzgado",
     "items": [
      "Descripción detallada de la reparación o gasto necesario",
      "Justificación de su carácter extraordinario (cuantía, naturaleza, impacto)",
      "Estimación preliminar del coste",
      "Consecuencias de no realizarla: riesgo de deterioro, pérdida de valor, daños mayores",
      "Solicitud de convocatoria de comparecencia con los interesados (art. 793.3 LEC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 801.2 segundo párrafo LEC"
    }
   ],
   "siguiente": "reparacion_ext_comp"
  },
  "reparacion_ext_comp": {
   "fase": 2,
   "titulo": "Comparecencia con interesados y reconocimiento pericial (arts. 801.2 y 793.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado convoca en comparecencia a los interesados del art. 793.3 LEC para que sean oídos. Simultáneamente se practica el reconocimiento pericial y se forma el presupuesto de la reparación."
    },
    {
     "tipo": "lista",
     "titulo": "Interesados que deben ser citados (art. 793.3 LEC)",
     "items": [
      "Cónyuge sobreviviente",
      "Parientes con derecho a la herencia del causante",
      "Herederos o legatarios de parte alícuota",
      "Acreedores a cuya instancia se decretó la intervención judicial",
      "Ministerio Fiscal (en representación de ausentes e incapaces)",
      "Abogado del Estado o servicios jurídicos de las CCAA (si procede por existir bienes públicos)"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Tramitación de la comparecencia",
     "items": [
      "El LAJ señala día y hora de la comparecencia",
      "Citación de todos los interesados del art. 793.3 LEC",
      "Reconocimiento pericial previo del bien o elemento afectado",
      "Formación del presupuesto de las obras o gastos proyectados",
      "Celebración de la comparecencia y recepción de alegaciones de los interesados"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 801.2 LEC · Art. 793.3 LEC"
    }
   ],
   "siguiente": "reparacion_ext_resolucion"
  },
  "reparacion_ext_resolucion": {
   "fase": 2,
   "titulo": "Resolución judicial sobre la reparación extraordinaria",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Oídos los interesados y a la vista del informe pericial y del presupuesto, el tribunal resuelve lo que estime procedente, atendidas las circunstancias del caso concreto."
    },
    {
     "tipo": "nota",
     "texto": "La resolución debe valorar: la necesidad real de la reparación, el coste propuesto en el presupuesto, las alegaciones de los interesados, el impacto sobre el caudal y la urgencia de la actuación."
    },
    {
     "tipo": "ley",
     "texto": "Art. 801.2 LEC"
    }
   ],
   "pregunta": "¿Cuál es el sentido de la resolución judicial?",
   "opciones": [
    {
     "texto": "El Juzgado autoriza la reparación o gasto extraordinario",
     "tono": "t-ok",
     "destino": "reparacion_ext_financiacion"
    },
    {
     "texto": "El Juzgado deniega la reparación",
     "tono": "t-aviso",
     "destino": "rep_denegada"
    }
   ]
  },
  "reparacion_ext_financiacion": {
   "fase": 2,
   "titulo": "Determinación de la financiación de la reparación autorizada (art. 802.2)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Autorizada la reparación, el tribunal debe resolver cómo se financia: con los ingresos ordinarios que retiene el administrador o extrayendo fondos del depósito judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 802.2 LEC"
    }
   ],
   "pregunta": "¿Pueden cubrirse los costes de la reparación con los ingresos ordinarios disponibles del administrador?",
   "opciones": [
    {
     "texto": "Sí, hay fondos ordinarios suficientes — no es necesario disponer del depósito",
     "tono": "t-ok",
     "destino": "deposito_fondos"
    },
    {
     "texto": "No, es necesario disponer del depósito judicial mediante providencia",
     "tono": "t-plazo",
     "destino": "disposicion_deposito"
    }
   ]
  },
  "disposicion_deposito": {
   "fase": 2,
   "titulo": "Disposición del depósito judicial mediante providencia (art. 802.2)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando los ingresos ordinarios son insuficientes, el tribunal dicta providencia ordenando sacar del depósito judicial la suma necesaria para financiar la reparación autorizada."
    },
    {
     "tipo": "lista",
     "titulo": "Tramitación de la disposición",
     "items": [
      "El tribunal dicta providencia especificando la suma a disponer y su destino concreto",
      "El LAJ tramita la disposición ante el establecimiento depositario",
      "Los fondos se ponen a disposición del administrador para la ejecución de la reparación",
      "El gasto y la disposición del depósito se incorporan a la siguiente rendición de cuentas"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Esta misma medida — providencia disponiendo fondos del depósito — se aplica igualmente cuando deba acometerse un gasto ordinario y el administrador no disponga de cantidad suficiente procedente de los ingresos de la administración."
    },
    {
     "tipo": "ley",
     "texto": "Art. 802.2 LEC"
    }
   ],
   "siguiente": "deposito_fondos"
  },
  "rep_denegada": {
   "fase": 2,
   "titulo": "Denegación de reparación extraordinaria",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El tribunal ha denegado o modificado la reparación extraordinaria solicitada. El administrador debe atenerse a lo resuelto."
    },
    {
     "tipo": "nota",
     "texto": "Si considera que la denegación lesiona intereses de la herencia, puede recurrir la resolución por los medios procesales ordinarios."
    },
    {
     "tipo": "ley",
     "texto": "Recurso de reposición (Art. 451 LEC) o revisión ante el tribunal competente."
    }
   ],
   "pregunta": "¿Cómo procede?",
   "opciones": [
    {
     "texto": "Atenerse a la resolución y continuar con la gestión",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    },
    {
     "texto": "Interponer recurso contra la denegación",
     "tono": "t-plazo",
     "destino": "recurso_rep"
    }
   ]
  },
  "recurso_rep": {
   "fase": 2,
   "titulo": "Recurso contra denegación de actuación de gestión",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador puede impugnar la resolución que deniegue o limite sus facultades de gestión mediante los recursos procedimentalmente pertinentes."
    },
    {
     "tipo": "nota",
     "texto": "Este incidente no suspende automáticamente la tramitación principal del procedimiento divisorio, salvo que el tribunal así lo disponga."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 451-455 LEC (reposición, revisión, apelación)."
    }
   ],
   "fin": "warning"
  },
  "deposito_fondos": {
   "fase": 2,
   "titulo": "Depósito de cantidades recaudadas a disposición del Juzgado (art. 802.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador depositará sin dilación, a disposición del Juzgado, todas las cantidades recaudadas en el ejercicio del cargo."
    },
    {
     "tipo": "lista",
     "titulo": "Cantidades que deben depositarse",
     "items": [
      "Rentas de alquiler y arrendamientos percibidos",
      "Rendimientos financieros y rendimientos de valores",
      "Producto de ventas autorizadas (art. 803)",
      "Cualquier otro ingreso del caudal no destinado a gastos ordinarios"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Cantidades que el administrador puede retener sin autorización",
     "items": [
      "Gastos de pleitos o notariales derivados de la gestión del caudal",
      "Pago de contribuciones, tributos e impuestos que graven los bienes",
      "Demás atenciones ordinarias de la administración"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La retención de cantidades por encima de los conceptos ordinarios sin autorización judicial constituye infracción de la obligación de depósito y puede generar responsabilidad del administrador."
    },
    {
     "tipo": "ley",
     "texto": "Art. 802.1 LEC"
    }
   ],
   "pregunta": "¿Necesita fondos adicionales para gastos extraordinarios u ordinarios insuficientes?",
   "opciones": [
    {
     "texto": "Sí, solicitar provisión de fondos del depósito judicial",
     "tono": "t-ok",
     "destino": "provision_fondos"
    },
    {
     "texto": "No, con los ingresos ordinarios y depósitos realizados basta",
     "tono": "t-nota",
     "destino": "enajenacion_check"
    }
   ]
  },
  "provision_fondos": {
   "fase": 2,
   "titulo": "Solicitud de provisión de fondos extraordinarios (art. 802.2)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para atender gastos extraordinarios, el tribunal podrá dejar en poder del administrador la suma necesaria, mandando sacarla del depósito si los ingresos ordinarios no bastaren (Art. 802.2 LEC)."
    },
    {
     "tipo": "lista",
     "titulo": "Procedimiento:",
     "items": [
      "Escrito motivado solicitando la provisión",
      "Detalle del gasto extraordinario u ordinario a atender",
      "Importe solicitado con desglose",
      "Providencia judicial autorizando la extracción"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "También aplica cuando deba hacerse gasto ordinario y no hay cantidad suficiente de la administración."
    }
   ],
   "pregunta": "¿Resolución sobre la provisión:",
   "opciones": [
    {
     "texto": "Prov concedida",
     "tono": "t-ok",
     "destino": "prov_concedida"
    },
    {
     "texto": "Prov denegada o reducida",
     "tono": "t-aviso",
     "destino": "prov_denegada"
    }
   ]
  },
  "prov_concedida": {
   "fase": 2,
   "titulo": "Provisión de fondos concedida",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal ha autorizado la extracción de fondos del depósito para atender el gasto extraordinario u ordinario necesario."
    },
    {
     "tipo": "nota",
     "texto": "Los fondos deben aplicarse exclusivamente al fin autorizado y justificarse íntegramente en la cuenta siguiente."
    }
   ],
   "pregunta": "¿Continuar?",
   "opciones": [
    {
     "texto": "No, pasar a rendición de cuentas",
     "tono": "t-ok",
     "destino": "enajenacion_check"
    },
    {
     "texto": "Sí, continuar con la gestión",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    }
   ]
  },
  "prov_denegada": {
   "fase": 2,
   "titulo": "Provisión de fondos denegada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El tribunal ha denegado o reducido la provisión de fondos solicitada. Debe buscarse alternativa o ajustar la gestión a los recursos disponibles."
    }
   ],
   "pregunta": "¿Cómo proceder?",
   "opciones": [
    {
     "texto": "Ajustar gestión a recursos disponibles",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    },
    {
     "texto": "Solicitar revisión o recurso",
     "tono": "t-plazo",
     "destino": "recurso_rep"
    }
   ]
  },
  "enajenacion_check": {
   "fase": 3,
   "titulo": "Verificación de necesidades de enajenación (art. 803.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La regla general es la prohibición absoluta de enajenar o gravar los bienes inventariados. Solo en los cuatro supuestos tasados del art. 803.2 LEC puede solicitarse al tribunal autorización para enajenar."
    },
    {
     "tipo": "aviso",
     "texto": "El incumplimiento de la prohibición de enajenar sin autorización judicial puede generar responsabilidad civil y, en su caso, penal del administrador."
    },
    {
     "tipo": "ley",
     "texto": "Art. 803.1 y 803.2 LEC · Art. 794 LEC (inventario de bienes)"
    }
   ],
   "pregunta": "¿Existe algún bien del inventario que se encuadre en alguno de los supuestos excepcionales de enajenación del art. 803.2 LEC?",
   "opciones": [
    {
     "texto": "No, ningún bien requiere enajenación en este momento",
     "tono": "t-ok",
     "destino": "cuentas_periodo"
    },
    {
     "texto": "Sí, hay bienes encuadrables en los supuestos excepcionales",
     "tono": "t-plazo",
     "destino": "enajenacion_tipo"
    }
   ]
  },
  "enajenacion_tipo": {
   "fase": 3,
   "titulo": "Identificación del supuesto excepcional de enajenación (art. 803.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Identifique el supuesto concreto del art. 803.2 LEC en que se encuadra el bien cuya enajenación se pretende. Esta calificación es determinante: la propuesta al tribunal debe motivar el encuadramiento."
    },
    {
     "tipo": "lista",
     "titulo": "Los cuatro supuestos excepcionales del art. 803.2 LEC",
     "items": [
      "1.º Bienes que puedan deteriorarse: naturaleza perecedera o circunstancias de riesgo de deterioro",
      "2.º Bienes de difícil y costosa conservación: mantenimiento más gravoso para el caudal que su venta anticipada",
      "3.º Frutos cuando se presenten circunstancias de mercado especialmente ventajosas para su enajenación",
      "4.º Bienes cuya enajenación sea necesaria para el pago de deudas del caudal o para cubrir otras atenciones de la administración (cláusula residual)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Una propuesta al tribunal insuficientemente motivada respecto del supuesto concreto puede ser denegada. Prepare la justificación detallada antes de formularla."
    },
    {
     "tipo": "ley",
     "texto": "Art. 803.2 LEC"
    }
   ],
   "siguiente": "enajenacion_propuesta"
  },
  "enajenacion_propuesta": {
   "fase": 3,
   "titulo": "Propuesta de enajenación al tribunal y audiencia de interesados (art. 803.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador formula propuesta motivada de enajenación al tribunal. Antes de resolver, el tribunal oye a los interesados del art. 793.3 LEC."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de la propuesta del administrador",
     "items": [
      "Identificación precisa del bien o bienes cuya enajenación se propone",
      "Supuesto excepcional concreto del art. 803.2 en que se encuadra",
      "Valoración o tasación actualizada del bien",
      "Justificación detallada de la necesidad o conveniencia de la enajenación",
      "Modalidad de venta propuesta: subasta pública (bienes ordinarios) o mercado oficial (valores cotizados)"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del Juzgado",
     "items": [
      "Traslado de la propuesta a los interesados del art. 793.3 LEC",
      "Audiencia de sus alegaciones",
      "Resolución mediante providencia autorizando o denegando la enajenación"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 803.3 LEC · Art. 793.3 LEC"
    }
   ],
   "siguiente": "enajenacion_autorizacion"
  },
  "enajenacion_autorizacion": {
   "fase": 3,
   "titulo": "Resolución judicial sobre la enajenación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal resuelve mediante providencia. En caso de autorización, la modalidad de venta depende de la naturaleza del bien: subasta pública para los bienes ordinarios; mercado oficial para los valores con cotización."
    },
    {
     "tipo": "ley",
     "texto": "Art. 803.3 LEC"
    }
   ],
   "pregunta": "¿Cuál es el resultado de la resolución judicial?",
   "opciones": [
    {
     "texto": "Autorizada: bienes ordinarios → venta en pública subasta",
     "tono": "t-ok",
     "destino": "enajenacion_subasta"
    },
    {
     "texto": "Autorizada: valores con cotización oficial → venta en mercado regulado",
     "tono": "t-ok",
     "destino": "enajenacion_mercado"
    },
    {
     "texto": "Denegada: el tribunal no autoriza la enajenación",
     "tono": "t-aviso",
     "destino": "consultar_alt"
    }
   ]
  },
  "enajenacion_subasta": {
   "fase": 3,
   "titulo": "Ejecución de la venta en pública subasta (art. 803.3)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La venta de los bienes autorizados se realiza en pública subasta, conforme a lo establecido en la legislación notarial o en procedimiento de jurisdicción voluntaria, según corresponda."
    },
    {
     "tipo": "lista",
     "titulo": "Tramitación de la subasta",
     "items": [
      "Determinación de la norma procedimental aplicable: legislación notarial (Ley 21/2007) o Ley de Jurisdicción Voluntaria (Ley 15/2015, arts. 271 y ss.)",
      "Fijación del tipo de salida (valor de tasación o pericial)",
      "Publicidad de la subasta: edictos, anuncios y demás requisitos legales",
      "Celebración de la subasta y admisión de pujas",
      "Adjudicación al mejor postor",
      "Otorgamiento de escritura o documentación acreditativa de la transmisión",
      "Depósito del producto líquido a disposición del Juzgado (art. 802.1 LEC)"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 803.3 LEC · Ley 21/2007 Notarial · Ley 15/2015 JV · Art. 802 LEC"
    }
   ],
   "pregunta": "¿Resultado de la subasta:",
   "opciones": [
    {
     "texto": "Venta realizada con éxito",
     "tono": "t-ok",
     "destino": "venta_exitosa"
    },
    {
     "texto": "Sin postores o postura insuficiente",
     "tono": "t-aviso",
     "destino": "venta_fallida"
    }
   ]
  },
  "enajenacion_mercado": {
   "fase": 3,
   "titulo": "Venta de valores cotizados a través del mercado regulado (art. 803.3)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los valores admitidos a cotización oficial se venden exclusivamente a través del mercado regulado correspondiente, con sujeción a sus propias reglas y procedimientos."
    },
    {
     "tipo": "lista",
     "titulo": "Tramitación de la venta en mercado oficial",
     "items": [
      "Identificación del mercado regulado aplicable (BME, CNMV, etc.)",
      "Orden de venta a través de entidad intermediaria financiera habilitada",
      "Ejecución de la orden al precio de mercado en la fecha de venta",
      "Obtención de la confirmación de operación y liquidación",
      "Depósito del producto líquido a disposición del Juzgado (art. 802.1)",
      "Incorporación de la documentación de la operación a los autos"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La venta en mercado oficial garantiza transparencia y precio objetivo de mercado. No se requiere subasta notarial ni procedimiento de jurisdicción voluntaria para esta categoría de valores."
    },
    {
     "tipo": "ley",
     "texto": "Art. 803.3 LEC · RD 4/2015 LMV · Art. 802 LEC"
    }
   ],
   "siguiente": "venta_exitosa"
  },
  "consultar_alt": {
   "fase": 3,
   "titulo": "Alternativas a la enajenación de bienes",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Alternativas cuando no es posible enajenar bienes pero se necesita liquidez o resolver situaciones complejas:"
    },
    {
     "tipo": "lista",
     "titulo": "Posibles alternativas a explorar:",
     "items": [
      "Crédito con garantía hipotecaria de bienes hereditarios (requiere autorización judicial)",
      "Negociación de aplazamientos con acreedores",
      "Subrogación en contratos de arrendamiento existentes",
      "Solicitud de adelanto de legítimas (si procede)",
      "Paralización temporal de determinados gastos no esenciales"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Estas alternativas deben valorarse caso por caso y, en su mayoría, requieren autorización judicial previa."
    }
   ],
   "fin": "warning"
  },
  "venta_exitosa": {
   "fase": 3,
   "titulo": "Venta de bien realizada exitosamente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La enajenación del bien se ha completado. El producto líquido obtenido debe integrarse en la contabilidad de la administración y depositarse a disposición del Juzgado."
    },
    {
     "tipo": "nota",
     "texto": "Retribución del administrador sobre esta venta (Art. 804.1 LEC): 2% sobre frutos/muebles, 1% sobre inmuebles/valores, 0.5% sobre efectos públicos. El producto líquido = precio de venta menos gastos directos de enajenación (tasación, publicidad, comisiones)."
    }
   ],
   "pregunta": "¿Continúa con la gestión?",
   "opciones": [
    {
     "texto": "No, pasar a rendición de cuentas",
     "tono": "t-ok",
     "destino": "cuentas_periodo"
    },
    {
     "texto": "Sí, realizar más actuaciones de gestión",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    }
   ]
  },
  "venta_fallida": {
   "fase": 3,
   "titulo": "Venta fallida — sin posturas válidas",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "La subasta o procedimiento de venta no ha producido adjudicación. Deben evaluarse alternativas."
    },
    {
     "tipo": "nota",
     "texto": "Posibilidad de nueva convocatoria con tipo reducido, o cambio de modalidad de venta, previa autorización judicial."
    }
   ],
   "pregunta": "¿Alternativa:",
   "opciones": [
    {
     "texto": "Cambiar modalidad de venta (notarial/JV/mercado)",
     "tono": "t-nota",
     "destino": "enajenacion_autorizacion"
    },
    {
     "texto": "Mantener bien sin vender y continuar gestión",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    },
    {
     "texto": "Nueva subasta con tipo reducido",
     "tono": "t-plazo",
     "destino": "enajenacion_subasta"
    }
   ]
  },
  "cuentas_periodo": {
   "fase": 4,
   "titulo": "Rendición periódica de cuentas justificadas (art. 799)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador rinde cuenta justificada dentro del plazo señalado por el tribunal. Las cuentas deben estar plenamente documentadas con todos los soportes acreditativos del período."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo máximo absoluto: 1 año. El plazo concreto lo fija el tribunal en proporción a la importancia y condiciones del caudal (art. 799.1 LEC). Ningún período de rendición puede superar los doce meses."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de la cuenta justificada",
     "items": [
      "Relación detallada de todos los ingresos del período: rentas, productos, rendimientos, cobros",
      "Relación detallada de todos los gastos del período: reparaciones, contribuciones, honorarios, notariales",
      "Saldo resultante (diferencia entre ingresos y gastos)",
      "Documentación justificativa completa: facturas, extractos bancarios, recibos, liquidaciones tributarias",
      "Conciliación con los depósitos efectuados a disposición del Juzgado durante el período"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Los interesados pueden solicitar en cualquier momento el acceso a las cuentas en la Oficina judicial para inspeccionar la administración o promover medidas sobre su rectificación o aprobación, sin necesidad de esperar al período de rendición (art. 799.3 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 799 LEC"
    }
   ],
   "siguiente": "saldo_forma"
  },
  "saldo_forma": {
   "fase": 4,
   "titulo": "Forma de acreditación del saldo de la cuenta (art. 799.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al rendir la cuenta, el administrador debe acreditar el saldo resultante por una de las dos vías alternativas que establece el art. 799.2 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 799.2 LEC"
    }
   ],
   "pregunta": "¿Cómo se acredita el saldo de la cuenta periódica?",
   "opciones": [
    {
     "texto": "Consignación directa del saldo ante el Juzgado en este momento",
     "tono": "t-ok",
     "destino": "saldo_consignacion"
    },
    {
     "texto": "Presentación del resguardo original de depósito previo ya efectuado",
     "tono": "t-ok",
     "destino": "saldo_resguardo"
    }
   ]
  },
  "saldo_consignacion": {
   "fase": 4,
   "titulo": "Consignación directa del saldo y depósito por el LAJ (art. 799.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador consigna directamente el saldo ante el Juzgado. El LAJ acuerda inmediatamente, mediante diligencia, el ingreso del saldo en el establecimiento designado."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ",
     "items": [
      "Recepción del saldo consignado por el administrador",
      "Dictado inmediato de diligencia acordando el depósito",
      "Tramitación del ingreso en el establecimiento destinado al efecto",
      "Incorporación de la diligencia y del justificante del ingreso a los autos"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 799.2 primer inciso LEC"
    }
   ],
   "siguiente": "cese_check"
  },
  "saldo_resguardo": {
   "fase": 4,
   "titulo": "Presentación del resguardo de depósito previo (art. 799.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador presenta el resguardo original acreditativo del depósito ya efectuado. El LAJ documenta en los autos la fecha y la cantidad del depósito."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ",
     "items": [
      "Recepción del resguardo original de depósito previo",
      "Verificación de que el resguardo corresponde al saldo de la cuenta rendida",
      "Poner en los autos diligencia expresiva de la fecha y cantidad del depósito",
      "Incorporación del resguardo como anexo acreditativo a los autos"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 799.2 segundo inciso LEC"
    }
   ],
   "siguiente": "cese_check"
  },
  "cese_check": {
   "fase": 4,
   "titulo": "Verificación de la continuidad del cargo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Rendidas y documentadas las cuentas del período, compruebe si el administrador continúa en el ejercicio del cargo o si ha operado o debe operar su cese."
    },
    {
     "tipo": "nota",
     "texto": "El cese puede producirse por: finalización del procedimiento de división hereditaria, acuerdo de los herederos para poner fin a la intervención, remoción judicial por justa causa, fallecimiento o renuncia del administrador, o cumplimiento del objeto del encargo."
    },
    {
     "tipo": "ley",
     "texto": "Art. 799 LEC · Art. 800 LEC · Art. 796 LEC"
    }
   ],
   "pregunta": "¿Continúa el administrador en el ejercicio del cargo?",
   "opciones": [
    {
     "texto": "Sí, continúa — se inicia un nuevo período de administración",
     "tono": "t-ok",
     "destino": "nuevo_periodo"
    },
    {
     "texto": "No, cesa en el cargo — debe procederse a retribución y cuenta final",
     "tono": "t-plazo",
     "destino": "retribucion"
    }
   ]
  },
  "nuevo_periodo": {
   "fase": 4,
   "titulo": "Inicio de nuevo período de administración",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador inicia un nuevo período de gestión. Todas las obligaciones del cargo continúan plenamente vigentes."
    },
    {
     "tipo": "plazo",
     "texto": "El tribunal señalará el plazo para la siguiente rendición de cuentas, que en ningún caso podrá exceder de un año (art. 799.1 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "En este nuevo período resultan de plena aplicación las obligaciones de conservación y explotación del caudal (art. 801), el régimen de depósito de fondos (art. 802) y, en su caso, las limitaciones a la enajenación de bienes inventariados (art. 803)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 799 LEC · Art. 801 LEC · Art. 802 LEC · Art. 803 LEC"
    }
   ],
   "siguiente": "gestion_conservacion"
  },
  "retribucion": {
   "fase": 4,
   "titulo": "Cálculo de la retribución del administrador (art. 804)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador tiene derecho a retribución según el tarifario del Art. 804 LEC. El cálculo se realiza sobre el producto líquido de las operaciones."
    },
    {
     "tipo": "lista",
     "titulo": "Tarifa de retribución (Art. 804.1):",
     "items": [
      "Frutos y muebles vendidos: 2% del producto líquido",
      "Inmuebles y valores cobrados: 1% del producto líquido",
      "Efectos públicos: 0.5% del producto líquido",
      "Otros ingresos: 4%-10% (fijado por LAJ según productos y trabajo)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "\"Producto líquido\" = precio de venta menos gastos directos de enajenación (tasación, publicidad, comisiones)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 804 LEC"
    }
   ],
   "pregunta": "¿Tipo de ingreso a computar:",
   "opciones": [
    {
     "texto": "Venta de frutos o muebles (2%)",
     "tono": "t-ok",
     "destino": "ret_frutos"
    },
    {
     "texto": "Venta de inmuebles o cobro de valores (1%)",
     "tono": "t-ok",
     "destino": "ret_inmuebles"
    },
    {
     "texto": "Venta de efectos públicos (0.5%)",
     "tono": "t-ok",
     "destino": "ret_publicos"
    },
    {
     "texto": "Otros ingresos (4%-10%)",
     "tono": "t-nota",
     "destino": "ret_otros"
    },
    {
     "texto": "Gastos de viaje",
     "tono": "t-nota",
     "destino": "ret_viajes"
    }
   ]
  },
  "ret_frutos": {
   "fase": 4,
   "titulo": "Retribución por venta de frutos y muebles — 2%",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sobre el producto líquido de la venta de frutos y otros bienes muebles incluidos en el inventario, percibirá el 2 por 100 (Art. 804.1.1º LEC)."
    }
   ],
   "pregunta": "¿Más conceptos retributivos?",
   "opciones": [
    {
     "texto": "Finalizar cálculo y continuar",
     "tono": "t-ok",
     "destino": "subalternas_gestion"
    },
    {
     "texto": "Calcular más conceptos",
     "tono": "t-nota",
     "destino": "retribucion"
    }
   ]
  },
  "ret_inmuebles": {
   "fase": 4,
   "titulo": "Retribución por venta de inmuebles y valores — 1%",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sobre el producto líquido de la venta de bienes raíces y cobranza de valores de cualquier especie, el 1 por 100 (Art. 804.1.2º LEC)."
    }
   ],
   "pregunta": "¿Más conceptos?",
   "opciones": [
    {
     "texto": "Calcular más",
     "tono": "t-nota",
     "destino": "retribucion"
    },
    {
     "texto": "Finalizar",
     "tono": "t-ok",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "ret_publicos": {
   "fase": 4,
   "titulo": "Retribución por efectos públicos — 0.5%",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sobre el producto líquido de la venta de efectos públicos, el medio por 100 (Art. 804.1.3º LEC)."
    }
   ],
   "pregunta": "¿Más conceptos?",
   "opciones": [
    {
     "texto": "Calcular más",
     "tono": "t-nota",
     "destino": "retribucion"
    },
    {
     "texto": "Finalizar",
     "tono": "t-ok",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "ret_otros": {
   "fase": 4,
   "titulo": "Retribución discrecional — Otros ingresos (4%-10%)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sobre los demás ingresos de la administración (rentas, intereses, indemnizaciones...), el LAJ señalará del 4 al 10 por 100 (Art. 804.1.4º LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Criterios: productos del caudal y trabajo de la administración. Resolución motivada del LAJ."
    }
   ],
   "pregunta": "¿Más conceptos?",
   "opciones": [
    {
     "texto": "Calcular más",
     "tono": "t-nota",
     "destino": "retribucion"
    },
    {
     "texto": "Finalizar",
     "tono": "t-ok",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "ret_viajes": {
   "fase": 4,
   "titulo": "Gastos de viaje del administrador",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ podrá acordar mediante decreto el abono de gastos de viajes necesarios para el desempeño del cargo, cuando lo considere justo (Art. 804.2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Requiere solicitud justificada y decreto previo. No es automático."
    }
   ],
   "pregunta": "¿Más conceptos?",
   "opciones": [
    {
     "texto": "Calcular más",
     "tono": "t-nota",
     "destino": "retribucion"
    },
    {
     "texto": "Finalizar",
     "tono": "t-ok",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "subalternas_gestion": {
   "fase": 5,
   "titulo": "Gestión de administraciones subalternas (art. 805)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se conservarán las administraciones subalternas que para el cuidado de sus bienes tuviera el finado, con la misma retribución y facultades (Art. 805.1 LEC)."
    },
    {
     "tipo": "lista",
     "titulo": "Régimen de las administraciones subalternas",
     "items": [
      "Se mantienen automáticamente (principio de continuidad)",
      "Rinden cuentas parciales al administrador judicial, no directamente al tribunal",
      "Remitirán al administrador judicial todo lo que recauden",
      "Son dependientes del administrador judicial",
      "No pueden ser separados por el administrador judicial sin causa justa",
      "Toda separación requiere autorización mediante decreto del LAJ",
      "Las vacantes se proveen por el administrador judicial con autorización del LAJ"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El administrador judicial NO puede modificar unilateralmente las condiciones fijadas por el causante. Cualquier alteración requiere autorización judicial."
    },
    {
     "tipo": "ley",
     "texto": "Art. 805 LEC · Art. 804 LEC (inaplicable a subalternas)"
    }
   ],
   "pregunta": "¿Actuación respecto de administradores subalternos:",
   "opciones": [
    {
     "texto": "Mantenerlos sin cambios",
     "tono": "t-ok",
     "destino": "subalternas_mantener"
    },
    {
     "texto": "Proveer vacante producida",
     "tono": "t-nota",
     "destino": "proveer_vacante"
    },
    {
     "texto": "Solicitar separación de alguno",
     "tono": "t-plazo",
     "destino": "sep_subalterno"
    }
   ]
  },
  "subalternas_mantener": {
   "fase": 5,
   "titulo": "Mantenimiento de administraciones subalternas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las administraciones subalternas continúan bajo las mismas condiciones que les otorgó el causante."
    },
    {
     "tipo": "nota",
     "texto": "El administrador judicial supervisa su gestión a través de las cuentas periódicas que deben remitir."
    }
   ],
   "pregunta": "¿Finalizar gestión de subalternas?",
   "opciones": [
    {
     "texto": "Sí, pasar a cuenta final",
     "tono": "t-ok",
     "destino": "cuenta_final"
    },
    {
     "texto": "No, otra actuación sobre subalternas",
     "tono": "t-nota",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "sep_subalterno": {
   "fase": 5,
   "titulo": "Solicitud de separación de administrador subalterno",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los administradores subalternos no pueden ser separados por el administrador judicial sino por causa justa y con autorización mediante decreto del LAJ (Art. 805.2 LEC)."
    },
    {
     "tipo": "lista",
     "titulo": "Procedimiento de separación:",
     "items": [
      "Escrito motivando la causa justa",
      "Audiencia al administrador subalterno",
      "Decreto del LAJ autorizando o denegando",
      "Si procede: entrega documental y rendición de cuentas final"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "Causas justas: incumplimiento, negligencia reiterada, incompetencia, conflicto de intereses, etc."
    }
   ],
   "pregunta": "¿Resolución del LAJ:",
   "opciones": [
    {
     "texto": "Separación autorizada",
     "tono": "t-ok",
     "destino": "sep_autorizada"
    },
    {
     "texto": "Separación denegada",
     "tono": "t-aviso",
     "destino": "sep_denegada"
    }
   ]
  },
  "sep_autorizada": {
   "fase": 5,
   "titulo": "Separación de subalterno autorizada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ ha autorizado la separación del administrador subalterno por causa justa. Debe procederse a la entrega y rendición de cuentas final."
    }
   ],
   "pregunta": "¿Qué hacer?",
   "opciones": [
    {
     "texto": "Proveer vacante",
     "tono": "t-nota",
     "destino": "proveer_vacante"
    },
    {
     "texto": "Finalizar y pasar a cuenta final",
     "tono": "t-ok",
     "destino": "cuenta_final"
    }
   ]
  },
  "sep_denegada": {
   "fase": 5,
   "titulo": "Separación de subalterno denegada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "aviso",
     "texto": "El LAJ ha denegado la separación solicitada. El administrador subalterno continúa en sus funciones."
    }
   ],
   "pregunta": "¿Qué hacer?",
   "opciones": [
    {
     "texto": "Aceptar y continuar",
     "tono": "t-nota",
     "destino": "subalternas_gestion"
    },
    {
     "texto": "Recurrir la denegación",
     "tono": "t-plazo",
     "destino": "recurso_rep"
    }
   ]
  },
  "proveer_vacante": {
   "fase": 5,
   "titulo": "Provisión de vacante en administración subalterna",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Con la misma autorización (decreto del LAJ), el administrador judicial podrá proveer las vacantes que resulten, bajo su responsabilidad (Art. 805.3 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "El nuevo administrador subalterno queda sujeto al mismo régimen de dependencia y control."
    }
   ],
   "pregunta": "¿Finalizar?",
   "opciones": [
    {
     "texto": "Sí, pasar a cuenta final",
     "tono": "t-ok",
     "destino": "cuenta_final"
    },
    {
     "texto": "Más gestiones sobre subalternas",
     "tono": "t-nota",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "cuenta_final": {
   "fase": 6,
   "titulo": "Rendición de la cuenta final complementaria (art. 800.1)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al cesar en el cargo, el administrador rinde una cuenta final complementaria de todas las ya presentadas. Esta cuenta cubre el período comprendido entre la última cuenta periódica y la fecha del cese."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido de la cuenta final",
     "items": [
      "Período cubierto: desde la última cuenta periódica hasta la fecha efectiva del cese",
      "Relación de ingresos del período final",
      "Relación de gastos del período final",
      "Saldo final resultante del período",
      "Conciliación completa con todos los depósitos judiciales constituidos",
      "Documentación justificativa del período final",
      "Propuesta de liquidación de retribución (Art. 804)"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La cuenta final es complementaria, no sustitutiva: no reemplaza las cuentas periódicas anteriores. Debe ser leída conjuntamente con ellas para obtener una imagen fiel y completa de toda la administración."
    },
    {
     "tipo": "ley",
     "texto": "Art. 800.1 LEC"
    }
   ],
   "siguiente": "traslado_cuentas"
  },
  "traslado_cuentas": {
   "fase": 6,
   "titulo": "Traslado de todas las cuentas a las partes (art. 800.2)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Todas las cuentas del administrador — las periódicas y la final — se ponen de manifiesto a las partes en la Oficina judicial. El LAJ señala mediante diligencia un término común para su examen."
    },
    {
     "tipo": "lista",
     "titulo": "Actuaciones del LAJ",
     "items": [
      "Reunir la totalidad de las cuentas: las periódicas ya presentadas y la cuenta final",
      "Señalar mediante diligencia el término común para el traslado a las partes",
      "Fijar la duración del plazo en función de la importancia y complejidad del conjunto de las cuentas",
      "Notificar a todas las partes el inicio y la duración del plazo",
      "Poner las cuentas de manifiesto en la Oficina judicial durante todo el plazo"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El término es \"común\": todas las partes disponen del mismo plazo, que corre simultáneamente para todas ellas desde la notificación. No hay términos individuales ni sucesivos."
    },
    {
     "tipo": "ley",
     "texto": "Art. 800.2 LEC"
    }
   ],
   "siguiente": "oposicion_check"
  },
  "oposicion_check": {
   "fase": 6,
   "titulo": "Verificación de oposición a las cuentas (art. 800.3 y 800.4)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Transcurrido íntegramente el término común señalado por el LAJ, compruebe si alguna parte ha formulado oposición a las cuentas dentro de ese plazo hábil."
    },
    {
     "tipo": "ley",
     "texto": "Art. 800.3 LEC · Art. 800.4 LEC"
    }
   ],
   "pregunta": "¿Ha formulado alguna parte oposición a las cuentas dentro del término hábil?",
   "opciones": [
    {
     "texto": "No — el término ha transcurrido sin que nadie formulara oposición",
     "tono": "t-ok",
     "destino": "fin_cuentas_aprobadas"
    },
    {
     "texto": "Sí — se ha presentado escrito de impugnación en plazo",
     "tono": "t-plazo",
     "destino": "traslado_cuentadante"
    }
   ]
  },
  "traslado_cuentadante": {
   "fase": 6,
   "titulo": "Traslado del escrito de impugnación al cuentadante (art. 800.4)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ da traslado del escrito de impugnación al cuentadante — el administrador que rinde cuentas — para que lo conteste conforme al art. 438 LEC (contestación a la demanda en juicio verbal)."
    },
    {
     "tipo": "lista",
     "titulo": "Tramitación del traslado",
     "items": [
      "El LAJ da traslado formal del escrito de impugnación al cuentadante",
      "Plazo de contestación: el establecido en el art. 438 LEC para el juicio verbal (10 días)",
      "En el escrito de contestación, el cuentadante puede solicitar la celebración de vista oral",
      "La parte impugnante también pudo solicitar la vista en su propio escrito de impugnación"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 800.4 LEC · Art. 438 LEC"
    }
   ],
   "siguiente": "vista_check"
  },
  "vista_check": {
   "fase": 6,
   "titulo": "Decisión sobre la celebración de vista oral",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Una vez presentados ambos escritos — impugnación y contestación —, debe verificarse si alguna de las partes ha solicitado la celebración de vista oral."
    },
    {
     "tipo": "nota",
     "texto": "La solicitud de vista puede haberse formulado en el escrito de impugnación o en el de contestación. Si cualquiera de las dos partes la solicita, el procedimiento continúa íntegramente con arreglo al juicio verbal (arts. 437–447 LEC)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 800.4 LEC · Arts. 437–447 LEC"
    }
   ],
   "pregunta": "¿Ha solicitado alguna de las partes la celebración de vista oral?",
   "opciones": [
    {
     "texto": "No, ninguna parte solicita vista → resolución sobre la base de los escritos",
     "tono": "t-ok",
     "destino": "resolucion_sin_vista"
    },
    {
     "texto": "Sí, alguna parte solicita vista → se tramita como juicio verbal",
     "tono": "t-plazo",
     "destino": "juicio_verbal"
    }
   ]
  },
  "juicio_verbal": {
   "fase": 6,
   "titulo": "Tramitación como juicio verbal con vista oral (art. 800.4 y arts. 437–447 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La impugnación se tramita con arreglo al juicio verbal. El Juzgado señala fecha de vista, las partes concurren, se practica la prueba y el juez dicta sentencia."
    },
    {
     "tipo": "lista",
     "titulo": "Fases del juicio verbal",
     "items": [
      "Señalamiento de la fecha y hora de la vista por el LAJ",
      "Citación de las partes: impugnante y cuentadante",
      "Celebración de la vista: alegaciones orales, proposición y práctica de la prueba admitida",
      "Deliberación interna del juez",
      "Dictado de la sentencia resolviendo la impugnación"
     ],
     "marcar": true
    },
    {
     "tipo": "ley",
     "texto": "Art. 800.4 LEC · Arts. 437–447 LEC"
    }
   ],
   "siguiente": "sentencia_verbal"
  },
  "sentencia_verbal": {
   "fase": 6,
   "titulo": "Sentencia del juicio verbal sobre la impugnación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Celebrada la vista, el juez dicta sentencia que resuelve definitivamente sobre la impugnación de las cuentas del administrador."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 437–447 LEC · Art. 800.4 LEC"
    }
   ],
   "pregunta": "¿Cuál es el fallo de la sentencia?",
   "opciones": [
    {
     "texto": "Impugnación desestimada: las cuentas quedan aprobadas",
     "tono": "t-ok",
     "destino": "fin_impugnacion_desestimada"
    },
    {
     "texto": "Sentencia mixta: aprobación parcial con rectificaciones",
     "tono": "t-plazo",
     "destino": "sent_mixta"
    },
    {
     "texto": "Impugnación estimada: las cuentas no se aprueban tal como fueron presentadas",
     "tono": "t-aviso",
     "destino": "fin_impugnacion_estimada"
    }
   ]
  },
  "resolucion_sin_vista": {
   "fase": 6,
   "titulo": "Resolución sobre la impugnación sin celebración de vista",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Ninguna parte solicita vista. El Juzgado resuelve la impugnación a la vista de los escritos de impugnación y contestación, sin celebración de vista oral."
    },
    {
     "tipo": "ley",
     "texto": "Art. 800.4 LEC · Art. 438 LEC"
    }
   ],
   "pregunta": "¿Cuál es el sentido de la resolución?",
   "opciones": [
    {
     "texto": "Impugnación desestimada: las cuentas quedan aprobadas",
     "tono": "t-ok",
     "destino": "fin_impugnacion_desestimada"
    },
    {
     "texto": "Resolución mixta (parcial)",
     "tono": "t-plazo",
     "destino": "sent_mixta"
    },
    {
     "texto": "Impugnación estimada: las cuentas no se aprueban tal como fueron presentadas",
     "tono": "t-aviso",
     "destino": "fin_impugnacion_estimada"
    }
   ]
  },
  "sent_mixta": {
   "fase": 6,
   "titulo": "Sentencia mixta — Aprobación parcial con rectificaciones",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal ha aprobado parcialmente las cuentas con rectificaciones. La responsabilidad del administrador se limita a las partidas modificadas."
    },
    {
     "tipo": "nota",
     "texto": "La caución responderá de las cantidades debidas según la sentencia. El resto se devuelve al administrador."
    }
   ],
   "fin": "warning"
  },
  "fin_cuentas_aprobadas": {
   "fase": 6,
   "titulo": "Fin: cuentas aprobadas — caución devuelta",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Transcurrido el término sin oposición, el LAJ dicta decreto que contiene tres pronunciamientos simultáneos e inseparables."
    },
    {
     "tipo": "lista",
     "titulo": "Contenido del decreto de aprobación (art. 800.3 LEC)",
     "items": [
      "1.º Aprobación de todas las cuentas presentadas, incluida la cuenta final complementaria",
      "2.º Declaración expresa de exención de responsabilidad del administrador",
      "3.º Orden de devolución al administrador de la caución que prestó al inicio del cargo"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La exención de responsabilidad y la devolución de la caución son consecuencias automáticas e inseparables de la aprobación. El LAJ no puede aprobar las cuentas sin declarar la exención ni sin ordenar la devolución de la caución."
    },
    {
     "tipo": "ley",
     "texto": "Art. 800.3 LEC · Art. 795.4.ª LEC (caución)"
    }
   ],
   "fin": "success"
  },
  "fin_impugnacion_estimada": {
   "fase": 6,
   "titulo": "Fin: impugnación estimada — responsabilidad del administrador",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La impugnación ha sido estimada. Las cuentas no quedan aprobadas tal como fueron presentadas. La resolución o sentencia determinará las consecuencias patrimoniales concretas para el administrador."
    },
    {
     "tipo": "lista",
     "titulo": "Consecuencias posibles:",
     "items": [
      "Modificación de partidas impugnadas",
      "Condena al administrador a restituir cantidades al caudal",
      "Declaración de responsabilidad por daños y perjuicios",
      "Pérdida total o parcial de la retribución",
      "Pérdida total o parcial de la caución hasta liquidar la responsabilidad",
      "Posible condena en costas"
     ],
     "marcar": true
    },
    {
     "tipo": "aviso",
     "texto": "La estimación de la impugnación puede conllevar: obligación de reintegro de cantidades al caudal, declaración de responsabilidad por daños, y retención de la caución hasta que se liquide la responsabilidad declarada. Consulte el contenido íntegro de la sentencia o resolución para determinar las medidas a ejecutar."
    },
    {
     "tipo": "nota",
     "texto": "Contra esta cabe recurso de apelación en los casos procedentes."
    },
    {
     "tipo": "ley",
     "texto": "Art. 800.4 LEC · Arts. 437–447 LEC"
    }
   ],
   "fin": "error"
  },
  "fin_impugnacion_desestimada": {
   "fase": 6,
   "titulo": "Fin: impugnación desestimada — cuentas aprobadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La impugnación ha sido desestimada. Las cuentas quedan aprobadas. Procede la declaración de exención de responsabilidad del administrador y la devolución de la caución prestada."
    },
    {
     "tipo": "lista",
     "titulo": "Efectos:",
     "items": [
      "Aprobación definitiva de las cuentas",
      "Declaración de exención de responsabilidad",
      "Devolución de la caución (si no hubo condena en costas)",
      "Posibilidad de imponer costas al impugnante"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "La desestimación de la impugnación produce los mismos efectos materiales que la aprobación sin oposición: exención de responsabilidad del administrador y devolución de la caución. Véase art. 800.3 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Art. 800.3 y 800.4 LEC"
    }
   ],
   "fin": "success"
  }
 },
 "pie": "Arts. 797–805 LEC<br>Ley 1/2000, de 7 de enero<br>Enjuiciamiento Civil"
});

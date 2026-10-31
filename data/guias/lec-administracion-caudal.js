/* Migrado por tools/migrate.js desde sources/actual/G04.json; revisado con el BOE (registro: docs/revision/lec-administracion-caudal.md). */
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
  "estado": "revisado",
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
  "ambos": "LAJ + Juez",
  "juez": "Juez",
  "laj": "Letrado de la Administración de Justicia"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Administración judicial del caudal hereditario",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Guía de la administración del caudal hereditario intervenido (arts. 797–805 LEC): posesión del cargo, representación, conservación, depósito de lo recaudado, enajenaciones, cuentas, retribución y administraciones subalternas."
    },
    {
     "tipo": "nota",
     "texto": "El administrador se nombra en el auto del art. 795 LEC, tras el inventario (guía de intervención del caudal hereditario)."
    }
   ],
   "siguiente": "presupuestos"
  },
  "presupuestos": {
   "fase": 0,
   "titulo": "Nombramiento y caución (art. 797.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ pone al administrador en posesión del cargo una vez nombrado y prestada la caución."
    },
    {
     "tipo": "lista",
     "titulo": "Deben constar en autos",
     "items": [
      "El auto de nombramiento del administrador (art. 795, regla 2.ª, LEC)",
      "La prestación de la caución fijada por el tribunal, salvo dispensa (art. 795, reglas 3.ª y 4.ª, LEC)"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿En qué situación está?",
   "opciones": [
    {
     "texto": "Nombrado y con la caución prestada (o dispensada)",
     "tono": "t-ok",
     "destino": "posesion"
    },
    {
     "texto": "Nombrado, pero sin prestar la caución",
     "tono": "t-plazo",
     "destino": "caucion_pend"
    },
    {
     "texto": "Aún no hay nombramiento",
     "tono": "t-aviso",
     "destino": "fin_sin_presupuestos"
    }
   ]
  },
  "caucion_pend": {
   "fase": 0,
   "titulo": "Caución pendiente",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador debe prestar la caución fijada por el tribunal, en cualquiera de las formas permitidas por la LEC, antes de que se le dé posesión (arts. 795, regla 3.ª, y 797.1 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Los herederos y legatarios de parte alícuota pueden dispensarla; el tribunal puede dispensar al cónyuge viudo o al heredero administrador con bienes suficientes; respecto de la parte de menores sin representante y ausentes de paradero desconocido se constituye en todo caso (art. 795, reglas 3.ª y 4.ª)."
    }
   ],
   "pregunta": "¿Se presta la caución?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "posesion"
    },
    {
     "texto": "Hay discusión sobre su forma, cuantía o suficiencia",
     "tono": "t-aviso",
     "destino": "caucion_problema"
    }
   ]
  },
  "caucion_problema": {
   "fase": 0,
   "titulo": "Discusión sobre la caución",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Mientras no se preste la caución fijada, no se pone al administrador en posesión del cargo (art. 797.1 LEC). La cuestión la resuelve el tribunal, que es quien fija la caución (art. 795, regla 3.ª)."
    }
   ],
   "fin": "warning"
  },
  "fin_sin_presupuestos": {
   "fase": 0,
   "titulo": "Sin nombramiento no hay posesión",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No puede darse posesión del cargo ni ejercerse la administración sin el auto de nombramiento del art. 795 LEC y la caución, salvo dispensa."
    }
   ],
   "fin": "error"
  },
  "posesion": {
   "fase": 0,
   "titulo": "Posesión del cargo (art. 797.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ pone al administrador en posesión de su cargo, dándole a conocer a las personas que el mismo designe de aquellas con quienes deba entenderse para su desempeño."
    }
   ],
   "siguiente": "acreditacion"
  },
  "acreditacion": {
   "fase": 0,
   "titulo": "Testimonio del nombramiento (art. 797.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Para que pueda acreditar su representación, el LAJ le da testimonio o copia auténtica en que conste su nombramiento y que se halla en posesión del cargo."
    }
   ],
   "siguiente": "subalternas_decision"
  },
  "subalternas_decision": {
   "fase": 0,
   "titulo": "¿Había administraciones subalternas? (art. 805 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se conservan las administraciones subalternas que el finado tuviera para el cuidado de sus bienes, con la misma retribución y facultades que les hubiera otorgado."
    }
   ],
   "pregunta": "¿Tenía el causante administraciones subalternas?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "subalternas_integracion"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "representacion_check"
    }
   ]
  },
  "subalternas_integracion": {
   "fase": 0,
   "titulo": "Régimen de las administraciones subalternas (art. 805 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Reglas",
     "items": [
      "Se conservan con la misma retribución y facultades (art. 805.1)",
      "Rinden sus cuentas y remiten lo que recauden al administrador judicial y se consideran dependientes de él (art. 805.2)",
      "Solo pueden ser separados por causa justa y con autorización mediante decreto del LAJ (art. 805.2)",
      "Con la misma autorización, el administrador judicial puede proveer las vacantes, bajo su responsabilidad (art. 805.3)"
     ],
     "marcar": true
    }
   ],
   "siguiente": "representacion_check"
  },
  "representacion_check": {
   "fase": 1,
   "titulo": "Alcance de la representación (art. 798 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Mientras la herencia no haya sido aceptada, el administrador la representa en todos los pleitos y ejercita las acciones que correspondieran al difunto, hasta la declaración de herederos. Aceptada, solo la representa en lo relativo a la administración, custodia y conservación del caudal."
    }
   ],
   "pregunta": "¿Se ha aceptado la herencia?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "rep_aceptada"
    },
    {
     "texto": "No: la herencia está yacente",
     "tono": "t-nota",
     "destino": "rep_yacente"
    }
   ]
  },
  "rep_yacente": {
   "fase": 1,
   "titulo": "Herencia no aceptada (art. 798, párrafo primero, LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "El administrador",
     "items": [
      "Representa a la herencia en todos los pleitos que se promuevan o que estuvieran principiados al fallecer el causante",
      "Ejercita las acciones que pudieran corresponder al difunto",
      "Hasta que se haga la declaración de herederos"
     ],
     "marcar": true
    }
   ],
   "siguiente": "declaracion_check"
  },
  "declaracion_check": {
   "fase": 1,
   "titulo": "¿Se ha hecho la declaración de herederos?",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La declaración de herederos abintestato la hace el Notario (arts. 55 y 56 de la Ley del Notariado) o, cuando el llamado es la Administración, esta en su propio procedimiento."
    }
   ],
   "pregunta": "¿Consta la declaración de herederos o la aceptación?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "rep_aceptada"
    },
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    }
   ]
  },
  "rep_aceptada": {
   "fase": 1,
   "titulo": "Herencia aceptada (art. 798, párrafo segundo, LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador solo representa a la herencia en lo que se refiere directamente a la administración del caudal, su custodia y conservación; en ese ámbito «podrá y deberá» gestionar lo conducente y ejercitar las acciones que procedan."
    }
   ],
   "siguiente": "gestion_conservacion"
  },
  "gestion_conservacion": {
   "fase": 2,
   "titulo": "Conservación y rendimiento del caudal (art. 801.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador está obligado, bajo su responsabilidad, a conservar sin menoscabo los bienes de la herencia y a procurar que den las rentas, productos o utilidades que corresponda."
    }
   ],
   "siguiente": "reparacion_check"
  },
  "reparacion_check": {
   "fase": 2,
   "titulo": "Reparaciones y gastos (art. 801.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Debe hacer las reparaciones ordinarias indispensables para la conservación de los bienes. Las reparaciones o gastos extraordinarios los pone en conocimiento del Juzgado."
    }
   ],
   "pregunta": "¿Hace falta alguna reparación o gasto?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "deposito_fondos"
    },
    {
     "texto": "Sí, ordinaria e indispensable",
     "tono": "t-nota",
     "destino": "reparacion_ordinaria"
    },
    {
     "texto": "Sí, extraordinaria",
     "tono": "t-plazo",
     "destino": "reparacion_ext_notif"
    }
   ]
  },
  "reparacion_ordinaria": {
   "fase": 2,
   "titulo": "Reparación ordinaria",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La hace el administrador, con cargo a las cantidades que puede retener para las atenciones ordinarias (art. 802.1 LEC), y la justifica en la cuenta siguiente (art. 799 LEC)."
    }
   ],
   "siguiente": "deposito_fondos"
  },
  "reparacion_ext_notif": {
   "fase": 2,
   "titulo": "Reparación o gasto extraordinario: comunicación al Juzgado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador lo pone en conocimiento del Juzgado (art. 801.2 LEC)."
    }
   ],
   "siguiente": "reparacion_ext_comp"
  },
  "reparacion_ext_comp": {
   "fase": 2,
   "titulo": "Comparecencia, reconocimiento pericial y presupuesto (art. 801.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ señala día y hora para una comparecencia en la que se oye a los interesados del art. 793.3 LEC (cónyuge sobreviviente, parientes o herederos y legatarios de parte alícuota, acreedores instantes o personados, Ministerio Fiscal y, en su caso, Abogacía del Estado), previo reconocimiento pericial y formación de presupuesto."
    }
   ],
   "siguiente": "reparacion_ext_resolucion"
  },
  "reparacion_ext_resolucion": {
   "fase": 2,
   "titulo": "Resolución sobre el gasto extraordinario",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal resuelve lo que estime procedente, atendidas las circunstancias del caso (art. 801.2 LEC)."
    }
   ],
   "pregunta": "¿Lo autoriza?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "reparacion_ext_financiacion"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "rep_denegada"
    }
   ]
  },
  "reparacion_ext_financiacion": {
   "fase": 2,
   "titulo": "Financiación del gasto autorizado (art. 802.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Por providencia, el tribunal puede dejar en poder del administrador la suma necesaria, mandando sacarla del depósito si no puede cubrirse con los ingresos ordinarios."
    }
   ],
   "pregunta": "¿Bastan los ingresos ordinarios?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "deposito_fondos"
    },
    {
     "texto": "No: hay que sacar fondos del depósito",
     "tono": "t-plazo",
     "destino": "disposicion_deposito"
    }
   ]
  },
  "disposicion_deposito": {
   "fase": 2,
   "titulo": "Fondos del depósito (art. 802.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal, mediante providencia, manda sacar del depósito la suma necesaria. Lo mismo se ordena cuando deba hacerse un gasto ordinario y el administrador no disponga de cantidad suficiente de la administración."
    }
   ],
   "siguiente": "deposito_fondos"
  },
  "rep_denegada": {
   "fase": 2,
   "titulo": "Gasto no autorizado",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador se atiene a lo resuelto. Si considera que perjudica a la herencia, puede recurrir la resolución por los recursos que procedan según su forma (arts. 451 y ss. LEC)."
    }
   ],
   "pregunta": "¿Qué hace?",
   "opciones": [
    {
     "texto": "Se atiene a lo resuelto",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    },
    {
     "texto": "Recurre",
     "tono": "t-plazo",
     "destino": "recurso_rep"
    }
   ]
  },
  "recurso_rep": {
   "fase": 2,
   "titulo": "Recurso",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se tramita por las reglas generales de los recursos (arts. 451 y ss. LEC)."
    }
   ],
   "fin": "warning"
  },
  "deposito_fondos": {
   "fase": 2,
   "titulo": "Depósito de lo recaudado (art. 802.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador deposita sin dilación, a disposición del Juzgado, las cantidades que recaude, reteniendo únicamente las necesarias para gastos de pleitos o notariales, pago de contribuciones y demás atenciones ordinarias."
    }
   ],
   "pregunta": "¿Necesita fondos para un gasto extraordinario, o para uno ordinario que los ingresos no cubren?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "provision_fondos"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "enajenacion_check"
    }
   ]
  },
  "provision_fondos": {
   "fase": 2,
   "titulo": "Provisión de fondos (art. 802.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal, mediante providencia, puede dejar en poder del administrador la suma necesaria y mandar sacarla del depósito si no bastan los ingresos ordinarios."
    }
   ],
   "pregunta": "¿Se concede?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "prov_concedida"
    },
    {
     "texto": "No, o en menor cuantía",
     "tono": "t-aviso",
     "destino": "prov_denegada"
    }
   ]
  },
  "prov_concedida": {
   "fase": 2,
   "titulo": "Provisión concedida",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los fondos se aplican al fin autorizado y se justifican en la cuenta siguiente."
    }
   ],
   "pregunta": "¿Cómo sigue?",
   "opciones": [
    {
     "texto": "Continuar con la gestión",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    },
    {
     "texto": "Pasar a enajenaciones y cuentas",
     "tono": "t-nota",
     "destino": "enajenacion_check"
    }
   ]
  },
  "prov_denegada": {
   "fase": 2,
   "titulo": "Provisión denegada o reducida",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador ajusta la gestión a los recursos disponibles o recurre."
    }
   ],
   "pregunta": "¿Qué hace?",
   "opciones": [
    {
     "texto": "Ajusta la gestión",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    },
    {
     "texto": "Recurre",
     "tono": "t-plazo",
     "destino": "recurso_rep"
    }
   ]
  },
  "enajenacion_check": {
   "fase": 3,
   "titulo": "Prohibición de enajenar y gravar (art. 803.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador no puede enajenar ni gravar los bienes inventariados, salvo los supuestos del art. 803.2 y con autorización del tribunal."
    }
   ],
   "pregunta": "¿Hay algún bien en un supuesto del art. 803.2?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "cuentas_periodo"
    },
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "enajenacion_tipo"
    }
   ]
  },
  "enajenacion_tipo": {
   "fase": 3,
   "titulo": "Supuestos de excepción (art. 803.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Pueden venderse",
     "items": [
      "1.º Los bienes que puedan deteriorarse",
      "2.º Los de difícil y costosa conservación",
      "3.º Los frutos, cuando se presenten circunstancias que se estimen ventajosas",
      "4.º Los demás bienes cuya enajenación sea necesaria para pagar deudas o cubrir otras atenciones de la administración"
     ],
     "marcar": true
    }
   ],
   "siguiente": "enajenacion_propuesta"
  },
  "enajenacion_propuesta": {
   "fase": 3,
   "titulo": "Propuesta y audiencia (art. 803.3 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador propone la venta; el tribunal oye a los interesados del art. 793.3 LEC y puede decretarla mediante providencia."
    }
   ],
   "siguiente": "enajenacion_autorizacion"
  },
  "enajenacion_autorizacion": {
   "fase": 3,
   "titulo": "Decisión sobre la venta (art. 803.3 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La venta se hace en pública subasta conforme a la legislación notarial o en procedimiento de jurisdicción voluntaria; los valores admitidos a cotización oficial, a través de ese mercado."
    }
   ],
   "pregunta": "¿Qué se decide?",
   "opciones": [
    {
     "texto": "Se decreta la venta en pública subasta",
     "tono": "t-ok",
     "destino": "enajenacion_subasta"
    },
    {
     "texto": "Se decreta la venta de valores cotizados en su mercado",
     "tono": "t-ok",
     "destino": "enajenacion_mercado"
    },
    {
     "texto": "No se autoriza",
     "tono": "t-aviso",
     "destino": "consultar_alt"
    }
   ]
  },
  "enajenacion_subasta": {
   "fase": 3,
   "titulo": "Venta en pública subasta (art. 803.3 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se verifica en pública subasta conforme a la legislación notarial (subastas notariales, arts. 72 y ss. de la Ley del Notariado) o en procedimiento de jurisdicción voluntaria (subastas voluntarias, arts. 108 a 111 LJV)."
    },
    {
     "tipo": "nota",
     "texto": "El producto se deposita a disposición del Juzgado (art. 802.1 LEC)."
    }
   ],
   "pregunta": "¿Resultado?",
   "opciones": [
    {
     "texto": "Se vende",
     "tono": "t-ok",
     "destino": "venta_exitosa"
    },
    {
     "texto": "No hay postores o posturas aceptables",
     "tono": "t-aviso",
     "destino": "venta_fallida"
    }
   ]
  },
  "enajenacion_mercado": {
   "fase": 3,
   "titulo": "Venta de valores cotizados (art. 803.3, párrafo segundo, LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los valores admitidos a cotización oficial se venden a través de dicho mercado. El producto se deposita a disposición del Juzgado (art. 802.1 LEC)."
    }
   ],
   "siguiente": "venta_exitosa"
  },
  "consultar_alt": {
   "fase": 3,
   "titulo": "Venta no autorizada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El bien sigue en el caudal bajo la administración y la prohibición del art. 803.1 LEC. Si cambian las circunstancias, puede volver a proponerse."
    }
   ],
   "fin": "warning"
  },
  "venta_exitosa": {
   "fase": 3,
   "titulo": "Venta realizada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El producto se deposita a disposición del Juzgado y se incluye en la cuenta (arts. 799 y 802 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Sobre el producto líquido de la venta se calcula la retribución del administrador del art. 804 LEC."
    }
   ],
   "pregunta": "¿Cómo sigue?",
   "opciones": [
    {
     "texto": "Continuar con la gestión",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    },
    {
     "texto": "Pasar a la rendición de cuentas",
     "tono": "t-nota",
     "destino": "cuentas_periodo"
    }
   ]
  },
  "venta_fallida": {
   "fase": 3,
   "titulo": "Subasta sin venta",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Lo que proceda (nueva subasta, otra vía de venta prevista en el art. 803.3 o mantener el bien) lo decide el tribunal."
    }
   ],
   "pregunta": "¿Qué se acuerda?",
   "opciones": [
    {
     "texto": "Intentar otra vía de venta",
     "tono": "t-nota",
     "destino": "enajenacion_autorizacion"
    },
    {
     "texto": "Nueva subasta",
     "tono": "t-nota",
     "destino": "enajenacion_subasta"
    },
    {
     "texto": "Mantener el bien y seguir la gestión",
     "tono": "t-nota",
     "destino": "gestion_conservacion"
    }
   ]
  },
  "cuentas_periodo": {
   "fase": 4,
   "titulo": "Rendición periódica de cuentas (art. 799 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "En los plazos que señale el tribunal, proporcionados a la importancia y condiciones del caudal, sin que en ningún caso excedan de un año (art. 799.1)."
    },
    {
     "tipo": "info",
     "texto": "Cuenta justificada: ingresos, gastos, saldo y justificantes."
    },
    {
     "tipo": "nota",
     "texto": "Cualquier parte puede pedir en cualquier momento que se le pongan de manifiesto las cuentas en la Oficina judicial para inspeccionar la administración o promover su rectificación o aprobación (art. 799.3)."
    }
   ],
   "siguiente": "saldo_forma"
  },
  "saldo_forma": {
   "fase": 4,
   "titulo": "El saldo (art. 799.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al rendir la cuenta, el administrador consigna el saldo o presenta el resguardo original de haberlo depositado en el establecimiento destinado al efecto."
    }
   ],
   "pregunta": "¿Cómo lo acredita?",
   "opciones": [
    {
     "texto": "Consigna el saldo",
     "tono": "t-nota",
     "destino": "saldo_consignacion"
    },
    {
     "texto": "Presenta el resguardo del depósito",
     "tono": "t-nota",
     "destino": "saldo_resguardo"
    }
   ]
  },
  "saldo_consignacion": {
   "fase": 4,
   "titulo": "Consignación del saldo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ acuerda inmediatamente, mediante diligencia, su depósito (art. 799.2 LEC)."
    }
   ],
   "siguiente": "cese_check"
  },
  "saldo_resguardo": {
   "fase": 4,
   "titulo": "Resguardo del depósito",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se pone en los autos diligencia expresiva de la fecha y cantidad del depósito (art. 799.2 LEC)."
    }
   ],
   "siguiente": "cese_check"
  },
  "cese_check": {
   "fase": 4,
   "titulo": "¿Sigue el administrador en el cargo?",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cuando cesa (por ejemplo, al cesar la intervención judicial: art. 796 LEC), rinde la cuenta final y se tramita la aprobación de todas las cuentas (art. 800 LEC)."
    }
   ],
   "pregunta": "¿Continúa en el cargo?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "nuevo_periodo"
    },
    {
     "texto": "No, cesa",
     "tono": "t-plazo",
     "destino": "retribucion"
    }
   ]
  },
  "nuevo_periodo": {
   "fase": 4,
   "titulo": "Nuevo periodo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Siguen las obligaciones de conservación (art. 801), depósito (art. 802) y la prohibición de enajenar (art. 803), y la próxima cuenta en el plazo señalado, nunca superior a un año (art. 799.1)."
    }
   ],
   "siguiente": "gestion_conservacion"
  },
  "retribucion": {
   "fase": 4,
   "titulo": "Retribución (art. 804 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador no tiene derecho a otra retribución que la del art. 804.1."
    }
   ],
   "pregunta": "¿Qué concepto se calcula?",
   "opciones": [
    {
     "texto": "Venta de frutos y otros muebles inventariados (2 %)",
     "tono": "t-nota",
     "destino": "ret_frutos"
    },
    {
     "texto": "Venta de bienes raíces y cobranza de valores (1 %)",
     "tono": "t-nota",
     "destino": "ret_inmuebles"
    },
    {
     "texto": "Venta de efectos públicos (0,5 %)",
     "tono": "t-nota",
     "destino": "ret_publicos"
    },
    {
     "texto": "Demás ingresos (4 al 10 %)",
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
   "titulo": "2 % sobre frutos y muebles (art. 804.1.1.º LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sobre el producto líquido de la venta de frutos y otros bienes muebles incluidos en el inventario, el 2 por 100."
    }
   ],
   "pregunta": "¿Hay más conceptos que calcular?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "retribucion"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "ret_inmuebles": {
   "fase": 4,
   "titulo": "1 % sobre bienes raíces y valores (art. 804.1.2.º LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sobre el producto líquido de la venta de bienes raíces y cobranza de valores de cualquier especie, el 1 por 100."
    }
   ],
   "pregunta": "¿Hay más conceptos que calcular?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "retribucion"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "ret_publicos": {
   "fase": 4,
   "titulo": "0,5 % sobre efectos públicos (art. 804.1.3.º LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sobre el producto líquido de la venta de efectos públicos, el medio por 100."
    }
   ],
   "pregunta": "¿Hay más conceptos que calcular?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "retribucion"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "ret_otros": {
   "fase": 4,
   "titulo": "Del 4 al 10 % sobre los demás ingresos (art. 804.1.4.º LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sobre los demás ingresos de la administración, el LAJ señala del 4 al 10 por ciento, atendiendo a los productos del caudal y al trabajo de la administración."
    }
   ],
   "pregunta": "¿Hay más conceptos que calcular?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "retribucion"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "ret_viajes": {
   "fase": 4,
   "titulo": "Gastos de viaje (art. 804.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ puede acordar mediante decreto, cuando lo considere justo, que se abonen al administrador los gastos de viajes necesarios para el desempeño del cargo."
    }
   ],
   "pregunta": "¿Hay más conceptos que calcular?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "retribucion"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "subalternas_gestion": {
   "fase": 5,
   "titulo": "Administraciones subalternas (art. 805 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si las hay, rinden sus cuentas y remiten lo que recauden al administrador judicial. Solo pueden ser separados por causa justa con autorización mediante decreto del LAJ, y con la misma autorización se proveen las vacantes."
    }
   ],
   "pregunta": "¿Qué hay que hacer respecto de ellas?",
   "opciones": [
    {
     "texto": "Nada: se mantienen (o no las hay)",
     "tono": "t-ok",
     "destino": "subalternas_mantener"
    },
    {
     "texto": "Proveer una vacante",
     "tono": "t-nota",
     "destino": "proveer_vacante"
    },
    {
     "texto": "Separar a un administrador subalterno",
     "tono": "t-plazo",
     "destino": "sep_subalterno"
    }
   ]
  },
  "subalternas_mantener": {
   "fase": 5,
   "titulo": "Se mantienen",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Continúan con la retribución y facultades que les otorgó el causante (art. 805.1 LEC)."
    }
   ],
   "pregunta": "¿Siguiente paso?",
   "opciones": [
    {
     "texto": "Cuenta final",
     "tono": "t-ok",
     "destino": "cuenta_final"
    },
    {
     "texto": "Otra actuación sobre subalternas",
     "tono": "t-nota",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "sep_subalterno": {
   "fase": 5,
   "titulo": "Separación de un subalterno (art. 805.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Solo por causa justa y con autorización mediante decreto del LAJ."
    }
   ],
   "pregunta": "¿Se autoriza?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "sep_autorizada"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "sep_denegada"
    }
   ]
  },
  "sep_autorizada": {
   "fase": 5,
   "titulo": "Separación autorizada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El subalterno separado rinde sus cuentas y entrega lo recaudado al administrador judicial (art. 805.2 LEC)."
    }
   ],
   "pregunta": "¿Siguiente paso?",
   "opciones": [
    {
     "texto": "Proveer la vacante",
     "tono": "t-nota",
     "destino": "proveer_vacante"
    },
    {
     "texto": "Cuenta final",
     "tono": "t-ok",
     "destino": "cuenta_final"
    }
   ]
  },
  "sep_denegada": {
   "fase": 5,
   "titulo": "Separación denegada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador subalterno continúa en sus funciones."
    }
   ],
   "pregunta": "¿Qué se hace?",
   "opciones": [
    {
     "texto": "Continuar",
     "tono": "t-nota",
     "destino": "subalternas_gestion"
    },
    {
     "texto": "Recurrir el decreto",
     "tono": "t-plazo",
     "destino": "recurso_rep"
    }
   ]
  },
  "proveer_vacante": {
   "fase": 5,
   "titulo": "Provisión de vacantes (art. 805.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Con autorización mediante decreto del LAJ, el administrador judicial puede proveer las vacantes, bajo su responsabilidad."
    }
   ],
   "pregunta": "¿Siguiente paso?",
   "opciones": [
    {
     "texto": "Cuenta final",
     "tono": "t-ok",
     "destino": "cuenta_final"
    },
    {
     "texto": "Otra actuación sobre subalternas",
     "tono": "t-nota",
     "destino": "subalternas_gestion"
    }
   ]
  },
  "cuenta_final": {
   "fase": 6,
   "titulo": "Cuenta final (art. 800.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al cesar en el cargo, el administrador rinde una cuenta final complementaria de las ya presentadas."
    }
   ],
   "siguiente": "traslado_cuentas"
  },
  "traslado_cuentas": {
   "fase": 6,
   "titulo": "Puesta de manifiesto de todas las cuentas (art. 800.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "Todas las cuentas, incluida la final, se ponen de manifiesto a las partes en la Oficina judicial por un término común que el LAJ señala mediante diligencia, según su importancia."
    }
   ],
   "siguiente": "oposicion_check"
  },
  "oposicion_check": {
   "fase": 6,
   "titulo": "¿Hay impugnación? (art. 800.3 y 4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Pasado el término sin oposición, el LAJ aprueba las cuentas por decreto; si se impugnan en tiempo, se sigue el juicio verbal."
    }
   ],
   "pregunta": "¿Se han impugnado las cuentas en plazo?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "fin_cuentas_aprobadas"
    },
    {
     "texto": "Sí",
     "tono": "t-aviso",
     "destino": "traslado_cuentadante"
    }
   ]
  },
  "traslado_cuentadante": {
   "fase": 6,
   "titulo": "Traslado al administrador (art. 800.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se da traslado del escrito de impugnación al cuentadante para que conteste conforme al art. 438 LEC (por escrito, en diez días). Las partes, en sus escritos de impugnación y contestación, pueden pedir vista; la tramitación continúa por los trámites del juicio verbal (art. 800.4 LEC)."
    }
   ],
   "siguiente": "vista_check"
  },
  "vista_check": {
   "fase": 6,
   "titulo": "¿Hay vista?",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se aplican las reglas del juicio verbal sobre la celebración de vista; las partes pueden haberla pedido en sus escritos (art. 800.4 LEC)."
    }
   ],
   "pregunta": "¿Se celebra vista?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "resolucion_sin_vista"
    },
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "juicio_verbal"
    }
   ]
  },
  "juicio_verbal": {
   "fase": 6,
   "titulo": "Vista (juicio verbal)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se celebra la vista conforme a las reglas del juicio verbal y se dicta sentencia sobre la impugnación."
    }
   ],
   "siguiente": "sentencia_verbal"
  },
  "sentencia_verbal": {
   "fase": 6,
   "titulo": "Sentencia sobre la impugnación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Resuelve si las cuentas se aprueban, se aprueban con rectificaciones o no se aprueban."
    }
   ],
   "pregunta": "¿Sentido de la sentencia?",
   "opciones": [
    {
     "texto": "Desestima la impugnación",
     "tono": "t-ok",
     "destino": "fin_impugnacion_desestimada"
    },
    {
     "texto": "La estima en parte",
     "tono": "t-plazo",
     "destino": "sent_mixta"
    },
    {
     "texto": "La estima",
     "tono": "t-aviso",
     "destino": "fin_impugnacion_estimada"
    }
   ]
  },
  "resolucion_sin_vista": {
   "fase": 6,
   "titulo": "Sentencia sin vista",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal resuelve a la vista de los escritos de impugnación y contestación."
    }
   ],
   "pregunta": "¿Sentido?",
   "opciones": [
    {
     "texto": "Desestima la impugnación",
     "tono": "t-ok",
     "destino": "fin_impugnacion_desestimada"
    },
    {
     "texto": "La estima en parte",
     "tono": "t-plazo",
     "destino": "sent_mixta"
    },
    {
     "texto": "La estima",
     "tono": "t-aviso",
     "destino": "fin_impugnacion_estimada"
    }
   ]
  },
  "sent_mixta": {
   "fase": 6,
   "titulo": "Cuentas aprobadas con rectificaciones",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las cuentas se aprueban con las rectificaciones que fije la sentencia, que determinará sus consecuencias para el administrador."
    }
   ],
   "fin": "warning"
  },
  "fin_cuentas_aprobadas": {
   "fase": 6,
   "titulo": "Cuentas aprobadas sin oposición (art. 800.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "El decreto del LAJ",
     "items": [
      "Aprueba las cuentas",
      "Declara exento de responsabilidad al administrador",
      "Manda devolverle la caución que hubiera prestado"
     ],
     "marcar": true
    }
   ],
   "fin": "success"
  },
  "fin_impugnacion_estimada": {
   "fase": 6,
   "titulo": "Cuentas no aprobadas",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La sentencia determina las consecuencias para el administrador (rectificación de partidas, reintegros u otras que procedan)."
    }
   ],
   "fin": "error"
  },
  "fin_impugnacion_desestimada": {
   "fase": 6,
   "titulo": "Impugnación desestimada",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las cuentas quedan aprobadas en los términos de la sentencia."
    }
   ],
   "fin": "success"
  }
 },
 "pie": "Arts. 795–805 LEC<br>Arts. 72 y ss. de la Ley del Notariado y arts. 108–111 LJV (subastas)"
});

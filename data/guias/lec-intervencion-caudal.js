/* Migrado por tools/migrate.js desde sources/actual/G03.json; revisado con el BOE (registro: docs/revision/lec-intervencion-caudal.md). */
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
  "estado": "revisado",
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
     "texto": "El tribunal tiene noticia del fallecimiento de una persona. Lo primero es saber si consta testamento o parientes llamados a la herencia."
    }
   ],
   "pregunta": "¿Consta testamento o hay ascendientes, descendientes, cónyuge o persona en situación de hecho asimilable, o colaterales dentro del cuarto grado?",
   "opciones": [
    {
     "texto": "No consta ninguno, o los que hay están ausentes o algún menor no tiene representante legal (art. 790.1)",
     "tono": "t-aviso",
     "destino": "medidas_790"
    },
    {
     "texto": "Sí, y un interesado pide la intervención del caudal (art. 792)",
     "tono": "t-nota",
     "destino": "intervencion_a_instancia"
    }
   ]
  },
  "medidas_790": {
   "fase": 1,
   "titulo": "Medidas urgentes de oficio (art. 790.1 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal adopta de oficio las medidas más indispensables para el enterramiento del difunto, si es necesario, y para la seguridad de los bienes, libros, papeles, correspondencia y efectos susceptibles de sustracción u ocultación."
    },
    {
     "tipo": "nota",
     "texto": "Procede igual cuando esos parientes están ausentes o cuando alguno es menor sin representante legal (art. 790.1, párrafo segundo)."
    }
   ],
   "pregunta": "¿Comparecen los parientes o se nombra representante legal a los menores?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "entrega_790"
    },
    {
     "texto": "No: no consta testamento ni parientes y hay que averiguar (art. 791)",
     "tono": "t-plazo",
     "destino": "averiguacion_791"
    }
   ]
  },
  "entrega_790": {
   "fase": 1,
   "titulo": "Entrega de los bienes (art. 790.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Comparecidos los parientes o nombrado representante legal a los menores, se les entregan los bienes y efectos del difunto y cesa la intervención judicial, salvo lo dispuesto en el art. 791."
    },
    {
     "tipo": "aviso",
     "texto": "La entrega no es una declaración de herederos: deben acudir al Notario para que incoe el expediente de declaración de herederos (art. 790.2 LEC; arts. 55 y 56 de la Ley del Notariado)."
    }
   ],
   "fin": "success"
  },
  "averiguacion_791": {
   "fase": 2,
   "titulo": "Averiguación de testamento y parientes (art. 791.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Mediante diligencia, el LAJ",
     "items": [
      "Adopta las medidas más conducentes para averiguar si el difunto murió con testamento o sin él",
      "Ordena traer el certificado del Registro General de Actos de Última Voluntad",
      "Ordena traer el certificado de defunción en cuanto sea posible"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "A falta de otros medios, el tribunal ordena por providencia que se examine a parientes, amigos o vecinos sobre si murió abintestato y si tiene parientes con derecho a la sucesión legítima."
    }
   ],
   "pregunta": "¿Resultado?",
   "opciones": [
    {
     "texto": "Murió sin testar y sin parientes llamados por la ley",
     "tono": "t-aviso",
     "destino": "auto_791_2"
    },
    {
     "texto": "Aparecen testamento o parientes",
     "tono": "t-nota",
     "destino": "intervencion_a_instancia"
    }
   ]
  },
  "auto_791_2": {
   "fase": 3,
   "titulo": "Auto de intervención (art. 791.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "El auto manda",
     "items": [
      "1.º Ocupar los libros, papeles y correspondencia del difunto",
      "2.º Inventariar y depositar los bienes, disponiendo lo que proceda sobre su administración; puede nombrarse, con cargo al caudal, a una persona que efectúe y garantice el inventario y su depósito"
     ],
     "marcar": true
    },
    {
     "tipo": "plazo",
     "texto": "En la misma resolución se ordena de oficio comunicarlo a la Delegación de Economía y Hacienda, por si procede declarar heredero al Estado, con traslado del resultado de las diligencias y de la documentación."
    },
    {
     "tipo": "nota",
     "texto": "A falta de personas con derecho a heredar, hereda el Estado (art. 956 CC)."
    }
   ],
   "pregunta": "¿Comunica la Administración General del Estado o una Comunidad Autónoma que ha iniciado el procedimiento para su declaración como heredera?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "admon_791_3"
    },
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "medidas_793_1"
    }
   ]
  },
  "admon_791_3": {
   "fase": 3,
   "titulo": "La Administración, administradora del caudal (art. 791.3 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Desde esa comunicación, el tribunal acuerda que recaiga sobre ella la administración de los bienes. No se le exige caución y hace los informes periciales con sus servicios técnicos propios."
    },
    {
     "tipo": "nota",
     "texto": "Debe comunicar al tribunal la resolución que ponga fin a su procedimiento."
    }
   ],
   "pregunta": "¿Qué resuelve la Administración?",
   "opciones": [
    {
     "texto": "Se declara heredera abintestato",
     "tono": "t-ok",
     "destino": "admon_heredera"
    },
    {
     "texto": "No procede declararla heredera",
     "tono": "t-aviso",
     "destino": "admon_no_heredera"
    }
   ]
  },
  "admon_heredera": {
   "fase": 3,
   "titulo": "Entrega a la Administración heredera (art. 791.3 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "El órgano judicial adopta, antes de un mes, las provisiones conducentes a la entrega de los bienes y derechos del caudal."
    }
   ],
   "fin": "success"
  },
  "admon_no_heredera": {
   "fase": 3,
   "titulo": "La Administración no es heredera (art. 791.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No puede seguir a cargo del caudal: debe pedir al tribunal que designe nuevo administrador judicial."
    },
    {
     "tipo": "plazo",
     "texto": "Un mes desde la comunicación de su resolución; transcurrido ese mes, cesa en todo caso en el cargo."
    }
   ],
   "siguiente": "medidas_793_1"
  },
  "intervencion_a_instancia": {
   "fase": 3,
   "titulo": "Intervención a instancia de parte (art. 792 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Pueden pedirla (art. 792.1)",
     "items": [
      "1.º El cónyuge o cualquier pariente que se crea con derecho a la sucesión legítima, si acredita haber promovido la declaración de herederos ante Notario o la pide al promoverla",
      "2.º Cualquier coheredero o legatario de parte alícuota, al solicitar la división judicial, salvo prohibición expresa del testador",
      "3.º La Administración que haya iniciado su declaración como heredera abintestato"
     ],
     "marcar": true
    },
    {
     "tipo": "lista",
     "titulo": "También los acreedores (art. 792.2)",
     "items": [
      "Reconocidos como tales en el testamento o por los coherederos",
      "Con su derecho documentado en un título ejecutivo"
     ],
     "marcar": true
    }
   ],
   "siguiente": "medidas_793_1"
  },
  "medidas_793_1": {
   "fase": 4,
   "titulo": "Medidas de seguridad (art. 793.1 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Acordada la intervención, el tribunal ordena por auto, si es necesario y no se hizo antes, las medidas indispensables para la seguridad de los bienes, libros, papeles, correspondencia y efectos del difunto."
    }
   ],
   "siguiente": "senalamiento_793_2"
  },
  "senalamiento_793_2": {
   "fase": 4,
   "titulo": "Señalamiento y citaciones para el inventario (art. 793.2 y 3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ señala día y hora para formar el inventario y manda citar a los interesados."
    },
    {
     "tipo": "lista",
     "titulo": "Deben ser citados (art. 793.3)",
     "items": [
      "1.º El cónyuge sobreviviente",
      "2.º Los parientes conocidos que pudieran tener derecho a la herencia, si no consta testamento ni declaración de herederos",
      "3.º Los herederos o legatarios de parte alícuota",
      "4.º Los acreedores a cuya instancia se decretó la intervención y los personados en la división",
      "5.º El Ministerio Fiscal, si pudiera haber parientes desconocidos, si alguno no puede ser citado personalmente por ignorarse su residencia o si hay un menor sin representante legal",
      "6.º El abogado del Estado o los servicios jurídicos de la Comunidad Autónoma, si no consta testamento ni cónyuge o parientes con derecho a la sucesión legítima"
     ],
     "marcar": true
    }
   ],
   "siguiente": "inventario_794"
  },
  "inventario_794": {
   "fase": 4,
   "titulo": "Formación del inventario (art. 794 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En el día señalado, el LAJ forma el inventario con los que concurran: relación de los bienes de la herencia y de las escrituras, documentos y papeles de importancia."
    },
    {
     "tipo": "nota",
     "texto": "Si el testador estableció reglas especiales para el inventario, se forma con sujeción a ellas (art. 794.2). Si no se termina en el día señalado, se continúa en los siguientes (art. 794.3)."
    }
   ],
   "pregunta": "¿Hay controversia sobre la inclusión o exclusión de algún bien?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-aviso",
     "destino": "controversia_794_4"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "auto_795"
    }
   ]
  },
  "controversia_794_4": {
   "fase": 4,
   "titulo": "Controversia sobre el inventario (art. 794.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ hace constar en el acta las pretensiones de cada parte sobre esos bienes y su fundamentación jurídica, cita a los interesados a una vista y se sigue la tramitación del juicio verbal."
    },
    {
     "tipo": "aviso",
     "texto": "La sentencia sobre la inclusión o exclusión de bienes deja a salvo los derechos de terceros."
    }
   ],
   "siguiente": "auto_795"
  },
  "auto_795": {
   "fase": 5,
   "titulo": "Auto sobre administración, custodia y conservación (art. 795 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Hecho el inventario, el tribunal resuelve por auto, ateniéndose a lo dispuesto por el testador y, en su defecto, a estas reglas."
    },
    {
     "tipo": "lista",
     "titulo": "Reglas 1.ª y 2.ª",
     "items": [
      "1.ª El metálico y los efectos públicos se depositan con arreglo a derecho",
      "2.ª Administrador: el viudo o viuda; en su defecto, el heredero o legatario de parte alícuota con mayor parte en la herencia; a falta de estos, o si no tienen a juicio del tribunal la capacidad necesaria, cualquiera de los herederos o legatarios de parte alícuota o un tercero"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Hay menores sin representante legal o ausentes no citados por ignorarse su paradero?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-aviso",
     "destino": "caucion_imperativa"
    },
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "caucion_general"
    }
   ]
  },
  "caucion_imperativa": {
   "fase": 5,
   "titulo": "Caución en todo caso por menores y ausentes (art. 795, regla 4.ª)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se constituye caución, en todo caso, respecto de la participación en la herencia de los menores sin representante legal y de los ausentes a los que no se haya podido citar por ignorarse su paradero."
    },
    {
     "tipo": "nota",
     "texto": "La caución se presta en cualquiera de las formas permitidas por la LEC y la fija el tribunal (art. 795, regla 3.ª)."
    }
   ],
   "siguiente": "posesion_797"
  },
  "caucion_general": {
   "fase": 5,
   "titulo": "Caución y su dispensa (art. 795, reglas 3.ª y 4.ª)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El administrador presta caución bastante para responder de los bienes que se le entreguen, fijada por el tribunal."
    },
    {
     "tipo": "lista",
     "titulo": "Dispensas",
     "items": [
      "El tribunal puede dispensar al cónyuge viudo o al heredero administrador que tengan bienes suficientes para responder",
      "Los herederos y legatarios de parte alícuota pueden dispensar al administrador",
      "Sin conformidad de todos, la caución se ajusta al interés en el caudal de los que no la dispensan"
     ],
     "marcar": true
    }
   ],
   "siguiente": "posesion_797"
  },
  "posesion_797": {
   "fase": 5,
   "titulo": "Posesión del cargo (art. 797 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Nombrado el administrador y prestada la caución, el LAJ le pone en posesión del cargo, dándole a conocer a las personas que el mismo designe de aquellas con quienes deba entenderse."
    },
    {
     "tipo": "info",
     "texto": "Para que acredite su representación, el LAJ le da testimonio o copia auténtica de su nombramiento y de que está en posesión del cargo."
    },
    {
     "tipo": "nota",
     "texto": "Mientras la herencia no se acepte, el administrador la representa en todos los pleitos y ejercita las acciones del difunto hasta la declaración de herederos; aceptada, solo en lo relativo a la administración, custodia y conservación del caudal (art. 798 LEC). La herencia yacente es una masa patrimonial con capacidad para ser parte (arts. 6.1.4.º y 7.5 LEC)."
    }
   ],
   "siguiente": "cesacion_796"
  },
  "cesacion_796": {
   "fase": 6,
   "titulo": "Cesación de la intervención (art. 796 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La intervención cesa con la declaración de herederos, por acuerdo de los herederos durante la división o, si había acreedores opuestos, cuando se les paga o afianza."
    }
   ],
   "pregunta": "¿Qué ocurre?",
   "opciones": [
    {
     "texto": "Se ha hecho la declaración de herederos (art. 796.1)",
     "tono": "t-ok",
     "destino": "cesacion_declaracion"
    },
    {
     "texto": "Durante la división, los herederos piden de común acuerdo que cese (art. 796.2)",
     "tono": "t-nota",
     "destino": "cesacion_acuerdo_check"
    }
   ]
  },
  "cesacion_declaracion": {
   "fase": 6,
   "titulo": "Declaración de herederos (art. 796.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Hecha la declaración de herederos, cesa la intervención, salvo que alguno pida la división judicial: entonces puede subsistir, si así se solicita, hasta la entrega de los bienes adjudicados."
    }
   ],
   "pregunta": "¿Pide algún heredero la división judicial y que subsista la intervención?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "fin_declaracion_herederos"
    },
    {
     "texto": "Sí",
     "tono": "t-nota",
     "destino": "fin_subsistencia_division"
    }
   ]
  },
  "fin_declaracion_herederos": {
   "fase": 6,
   "titulo": "Cesa la intervención",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cesa la intervención judicial por haberse hecho la declaración de herederos (art. 796.1 LEC)."
    }
   ],
   "fin": "success"
  },
  "fin_subsistencia_division": {
   "fase": 6,
   "titulo": "La intervención subsiste durante la división",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Subsiste, a petición, hasta que se entregue a cada heredero lo que se le haya adjudicado (art. 796.1 LEC; art. 788 LEC). Ver la guía de división judicial de la herencia."
    }
   ],
   "fin": "neutral"
  },
  "cesacion_acuerdo_check": {
   "fase": 6,
   "titulo": "Cese por acuerdo de los herederos (art. 796.2 y 3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ acuerda el cese por decreto, salvo que haya un menor sin representante legal o un heredero ausente al que no haya podido citarse por ignorarse su paradero, o acreedores opuestos a la partición aún no pagados ni afianzados."
    }
   ],
   "pregunta": "¿Concurre alguno de esos impedimentos?",
   "opciones": [
    {
     "texto": "Sí: menores sin representante o ausentes sin localizar",
     "tono": "t-aviso",
     "destino": "bloqueo_menores_ausentes"
    },
    {
     "texto": "Sí: acreedores opuestos sin pago ni afianzamiento",
     "tono": "t-aviso",
     "destino": "bloqueo_acreedores_796_3"
    },
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "fin_acuerdo_unanime"
    }
   ]
  },
  "bloqueo_menores_ausentes": {
   "fase": 6,
   "titulo": "No procede el cese (art. 796.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Mientras haya un menor sin representante legal o un heredero ausente de paradero desconocido, no se acuerda el cese aunque lo pidan los demás."
    },
    {
     "tipo": "nota",
     "texto": "Puede volver a pedirse cuando el menor tenga representante legal o el ausente sea localizado."
    }
   ],
   "fin": "warning"
  },
  "bloqueo_acreedores_796_3": {
   "fase": 6,
   "titulo": "Acreedores opuestos (art. 796.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si hay acreedores reconocidos en el testamento o por los coherederos, o con título ejecutivo, que se opusieron a la partición hasta que se les pague o afiance, no se acuerda el cese hasta el pago o afianzamiento (art. 1082 CC)."
    }
   ],
   "pregunta": "¿Se les ha pagado o afianzado?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "cesacion_acreedores"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_bloqueo_acreedores"
    }
   ]
  },
  "fin_bloqueo_acreedores": {
   "fase": 6,
   "titulo": "La intervención continúa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No cesa la intervención mientras los acreedores opuestos no estén pagados o afianzados (art. 796.3 LEC)."
    }
   ],
   "fin": "warning"
  },
  "cesacion_acreedores": {
   "fase": 6,
   "titulo": "Cese tras el pago o afianzamiento",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Pagados o afianzados los acreedores opuestos, puede acordarse el cese de la intervención (art. 796.2 y 3 LEC)."
    }
   ],
   "fin": "success"
  },
  "fin_acuerdo_unanime": {
   "fase": 6,
   "titulo": "Cese por acuerdo de los herederos",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ acuerda por decreto el cese de la intervención pedido de común acuerdo por los herederos (art. 796.2 LEC)."
    }
   ],
   "fin": "success"
  }
 },
 "pie": "Arts. 790–798 LEC<br>Arts. 55 y 56 de la Ley del Notariado (declaración de herederos)<br>Arts. 956 y 1082 CC"
});

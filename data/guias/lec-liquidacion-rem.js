/* Migrado por tools/migrate.js desde sources/actual/G05.json; revisado con el BOE (registro: docs/revision/lec-liquidacion-rem.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "lec-liquidacion-rem",
 "ley": "LEC",
 "grupo": "División judicial de patrimonios",
 "titulo": "Del procedimiento para la liquidación del régimen económico matrimonial (artículos 806 a 811 LEC)",
 "corto": "Liquidación del régimen económico matrimonial",
 "articulos": [
  "806",
  "807",
  "808",
  "809",
  "810",
  "811"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20261007",
  "origen": "G05"
 },
 "fases": [
  "Inicio y competencia",
  "Formación del inventario",
  "Liquidación (gananciales)",
  "Operaciones divisorias",
  "Régimen de participación",
  "Resolución final"
 ],
 "actores": {
  "juez": "Juez / Tribunal",
  "laj": "LAJ",
  "ambos": "LAJ + Tribunal"
 },
 "inicio": "inicio",
 "pasos": {
  "inicio": {
   "fase": 0,
   "titulo": "Liquidación judicial del régimen económico matrimonial (art. 806 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se aplica a cualquier régimen que, por capitulaciones o por ley, determine una masa común de bienes y derechos sujeta a cargas y obligaciones, en defecto de acuerdo entre los cónyuges. El régimen de participación tiene su propio cauce (art. 811 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Actividad negociadora previa: la liquidación judicial del régimen económico matrimonial es un proceso especial del Libro IV de la LEC y su materia no figura entre las exceptuadas: hay que haber acudido antes a un medio adecuado de solución de controversias, con identidad entre el objeto de la negociación y el del litigio (arts. 5.1 y 5.2 LO 1/2025). Se presenta el documento que acredite haberla intentado o la declaración responsable de la imposibilidad de llevarla a cabo por desconocer el domicilio de la otra parte o el medio para requerirla (art. 264.4.º LEC); si no consta, no se admite (art. 403.2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Cuándo: esas normas hablan de la demanda y no distinguen las solicitudes de este procedimiento. Se acredita con la solicitud de inventario (art. 808 LEC) y con la de liquidación (art. 810 LEC), según el criterio, no vinculante, de la Junta Sectorial de Magistrados de las Secciones de Familia de la Audiencia Provincial de Madrid (acuerdo de 6-11-2025, II.4); en el régimen de participación, con su única solicitud (art. 811 LEC)."
    }
   ],
   "pregunta": "¿Qué régimen se liquida?",
   "opciones": [
    {
     "texto": "Gananciales u otro régimen con masa común",
     "tono": "t-ok",
     "destino": "acuerdo_extrajudicial"
    },
    {
     "texto": "Participación (arts. 1411 y ss. CC)",
     "tono": "t-nota",
     "destino": "art811_inicio"
    }
   ]
  },
  "acuerdo_extrajudicial": {
   "fase": 0,
   "titulo": "¿Hay acuerdo entre los cónyuges?",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El procedimiento judicial solo procede en defecto de acuerdo (art. 806 LEC). Los cónyuges pueden liquidar de común acuerdo, por ejemplo en el convenio regulador (art. 90 CC) o en escritura pública."
    }
   ],
   "pregunta": "¿Han liquidado ya de común acuerdo?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "fin_acuerdo_privado"
    },
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "verificar_proceso"
    }
   ]
  },
  "verificar_proceso": {
   "fase": 0,
   "titulo": "Proceso que habilita la solicitud (art. 808.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Puede pedirse el inventario una vez admitida la demanda de nulidad, separación o divorcio, o iniciado el proceso en que se haya demandado la disolución del régimen."
    },
    {
     "tipo": "nota",
     "texto": "La sociedad de gananciales concluye de pleno derecho por disolución o nulidad del matrimonio, separación legal o pacto de otro régimen (art. 1392 CC), y por decisión judicial a petición de un cónyuge en los casos del art. 1393 CC (entre otros, medidas de apoyo con representación plena en lo patrimonial, ausencia, concurso o abandono de familia del otro; separación de hecho de más de un año)."
    }
   ],
   "pregunta": "¿Hay proceso principal?",
   "opciones": [
    {
     "texto": "Sí: demanda de nulidad, separación o divorcio admitida",
     "tono": "t-ok",
     "destino": "competencia"
    },
    {
     "texto": "Sí: proceso de disolución del régimen",
     "tono": "t-ok",
     "destino": "competencia"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_sin_proceso"
    }
   ]
  },
  "competencia": {
   "fase": 0,
   "titulo": "Competencia (art. 807 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Juzgado de Primera Instancia o de Violencia sobre la Mujer que esté conociendo, haya conocido o hubiera tenido competencia para conocer del proceso de nulidad, separación o divorcio, o aquel ante el que se sigan o se hayan seguido las actuaciones sobre disolución del régimen. Hoy, la Sección de Familia, Infancia y Capacidad del Tribunal de Instancia donde exista (art. 86.5 a) LOPJ; si no, la Sección Civil) o la Sección de Violencia sobre la Mujer (art. 89.6 LOPJ)."
    }
   ],
   "siguiente": "solicitud_inventario"
  },
  "solicitud_inventario": {
   "fase": 1,
   "titulo": "Solicitud de inventario (art. 808 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Cualquiera de los cónyuges o sus herederos puede pedir la formación de inventario."
    },
    {
     "tipo": "lista",
     "titulo": "Se acompaña",
     "items": [
      "Propuesta con las diferentes partidas, con la debida separación, conforme a la legislación civil (activo y pasivo: arts. 1396 y ss. CC)",
      "Documentos que justifiquen las partidas"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Actividad negociadora previa: se acredita con esta solicitud (art. 264.4.º LEC); si no consta, no se admite (art. 403.2 LEC)."
    }
   ],
   "pregunta": "¿Se acredita la actividad negociadora previa (o la declaración responsable)?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "senalamiento_inventario"
    },
    {
     "texto": "Se aporta, pero la justificación tiene un defecto formal",
     "tono": "t-plazo",
     "destino": "subsanar_masc_inventario"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_sin_masc"
    }
   ]
  },
  "senalamiento_inventario": {
   "fase": 1,
   "titulo": "Señalamiento (art. 809.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "El LAJ señala día y hora para que, en el plazo máximo de diez días, se forme el inventario, y manda citar a los cónyuges."
    }
   ],
   "siguiente": "acto_inventario"
  },
  "acto_inventario": {
   "fase": 1,
   "titulo": "Formación del inventario (art. 809.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ forma con los cónyuges el inventario de la comunidad matrimonial conforme a la legislación civil del régimen de que se trate."
    }
   ],
   "pregunta": "¿Qué ocurre?",
   "opciones": [
    {
     "texto": "Comparecen y se ponen de acuerdo",
     "tono": "t-ok",
     "destino": "inventario_acordado"
    },
    {
     "texto": "Uno no comparece sin causa justificada",
     "tono": "t-plazo",
     "destino": "conformidad_ficta_inv"
    },
    {
     "texto": "Comparecen y hay controversia",
     "tono": "t-aviso",
     "destino": "controversia_inventario"
    },
    {
     "texto": "Uno no comparece con causa justificada",
     "tono": "t-nota",
     "destino": "nuevo_senalamiento_inv"
    }
   ]
  },
  "inventario_acordado": {
   "fase": 1,
   "titulo": "Inventario acordado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se consigna el acuerdo en el acta y se da por concluido el acto (art. 809.1 LEC)."
    }
   ],
   "siguiente": "resolucion_administracion"
  },
  "conformidad_ficta_inv": {
   "fase": 1,
   "titulo": "Incomparecencia injustificada (art. 809.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se tiene al cónyuge que no comparece sin causa justificada por conforme con la propuesta del que comparece; se consigna en el acta y se da por concluido el acto."
    }
   ],
   "siguiente": "resolucion_administracion"
  },
  "nuevo_senalamiento_inv": {
   "fase": 1,
   "titulo": "Incomparecencia justificada",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La conformidad del art. 809.1 solo opera «sin mediar causa justificada»: si la hay, se señala nuevo día para el acto."
    }
   ],
   "siguiente": "acto_inventario"
  },
  "controversia_inventario": {
   "fase": 1,
   "titulo": "Controversia (art. 809.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si se discute la inclusión o exclusión de algún concepto o el importe de alguna partida, el LAJ hace constar en el acta las pretensiones de cada parte y su fundamentación jurídica, cita a los interesados a una vista y se sigue el juicio verbal."
    }
   ],
   "siguiente": "vista_verbal_inv"
  },
  "vista_verbal_inv": {
   "fase": 1,
   "titulo": "Vista (juicio verbal)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se celebra por los trámites del juicio verbal (art. 809.2 LEC)."
    }
   ],
   "siguiente": "sentencia_inventario"
  },
  "sentencia_inventario": {
   "fase": 1,
   "titulo": "Sentencia sobre el inventario (art. 809.2 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Resuelve todas las cuestiones suscitadas, aprueba el inventario y dispone lo procedente sobre la administración y disposición de los bienes comunes."
    }
   ],
   "pregunta": "¿Se apela?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "resolucion_administracion"
    },
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "apelacion_inv"
    }
   ]
  },
  "apelacion_inv": {
   "fase": 1,
   "titulo": "Apelación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "Veinte días desde la notificación de la sentencia (art. 458.1 LEC)."
    }
   ],
   "siguiente": "resolucion_administracion"
  },
  "resolucion_administracion": {
   "fase": 1,
   "titulo": "Administración y disposición de los bienes (art. 809 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Concluido el acto de inventario, el tribunal resuelve, en el mismo día o en el siguiente, lo que proceda sobre la administración y disposición de los bienes incluidos (art. 809.1). Si hubo juicio verbal, lo dispone la propia sentencia (art. 809.2)."
    },
    {
     "tipo": "nota",
     "texto": "Relación con las medidas provisionales del proceso matrimonial: art. 103 CC y art. 773 LEC."
    }
   ],
   "pregunta": "¿Se va a pedir ya la liquidación?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "espera_firmeza"
    },
    {
     "texto": "No por ahora",
     "tono": "t-nota",
     "destino": "fin_solo_inventario"
    }
   ]
  },
  "espera_firmeza": {
   "fase": 2,
   "titulo": "Requisitos para pedir la liquidación (art. 810.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Concluido el inventario y, en su caso, firme la resolución que declare disuelto el régimen, cualquiera de los cónyuges o, si han fallecido, sus herederos pueden pedir la liquidación."
    },
    {
     "tipo": "nota",
     "texto": "Firmeza: cuando no cabe recurso o ha pasado el plazo sin recurrir (art. 207.2 LEC)."
    }
   ],
   "pregunta": "¿Se cumplen?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "solicitud_liquidacion"
    },
    {
     "texto": "Falta la firmeza de la resolución de disolución",
     "tono": "t-aviso",
     "destino": "espera_firmeza_pte"
    }
   ]
  },
  "espera_firmeza_pte": {
   "fase": 2,
   "titulo": "Pendiente de firmeza",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Hasta que sea firme la resolución que declare disuelto el régimen no puede pedirse la liquidación (art. 810.1 LEC); después puede presentarse la solicitud."
    }
   ],
   "siguiente": "solicitud_liquidacion"
  },
  "solicitud_liquidacion": {
   "fase": 2,
   "titulo": "Solicitud de liquidación (art. 810.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se acompaña una propuesta de liquidación con el pago de las indemnizaciones y reintegros debidos a cada cónyuge y la división del remanente en la proporción que corresponda, teniendo en cuenta en los lotes las preferencias de las normas civiles."
    },
    {
     "tipo": "lista",
     "titulo": "En gananciales",
     "items": [
      "Activo y pasivo de la sociedad (arts. 1397 y ss. CC)",
      "El remanente se divide por mitad entre los cónyuges o sus herederos (art. 1404 CC)",
      "Preferencias (art. 1406 CC): bienes de uso personal; la explotación económica que gestione efectivamente; el local donde ejerza su profesión; y, en caso de muerte del otro cónyuge, la vivienda donde tuviese la residencia habitual",
      "En los casos del local y la vivienda, puede pedirse la propiedad o un derecho de uso o habitación; si su valor supera el haber del adjudicatario, abona la diferencia en dinero (art. 1407 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Actividad negociadora previa: se acredita también con esta solicitud (art. 264.4.º LEC); si no consta, no se admite (art. 403.2 LEC). Una negociación anterior sirve para la liquidación solo si comprendía también ese objeto: debe haber identidad entre el objeto de la negociación y el del litigio (art. 5.1 LO 1/2025)."
    }
   ],
   "pregunta": "¿Se acredita la actividad negociadora previa (o la declaración responsable)?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "senalamiento_liquidacion"
    },
    {
     "texto": "Se aporta, pero la justificación tiene un defecto formal",
     "tono": "t-plazo",
     "destino": "subsanar_masc_liquidacion"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_sin_masc"
    }
   ]
  },
  "senalamiento_liquidacion": {
   "fase": 2,
   "titulo": "Señalamiento de la comparecencia (art. 810.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "Admitida la solicitud, el LAJ señala, dentro del plazo máximo de diez días, la comparecencia de los cónyuges o sus herederos ante él."
    },
    {
     "tipo": "info",
     "texto": "Objeto: alcanzar un acuerdo y, en su defecto, designar contador y, en su caso, peritos."
    }
   ],
   "siguiente": "acto_liquidacion"
  },
  "acto_liquidacion": {
   "fase": 2,
   "titulo": "Comparecencia (art. 810 LEC)",
   "actor": "laj",
   "bloques": [],
   "pregunta": "¿Qué ocurre?",
   "opciones": [
    {
     "texto": "Hay acuerdo",
     "tono": "t-ok",
     "destino": "acuerdo_liquidacion"
    },
    {
     "texto": "Alguno no comparece sin causa justificada",
     "tono": "t-plazo",
     "destino": "conformidad_ficta_liq"
    },
    {
     "texto": "No hay acuerdo",
     "tono": "t-aviso",
     "destino": "designacion_contador"
    }
   ]
  },
  "acuerdo_liquidacion": {
   "fase": 2,
   "titulo": "Acuerdo (art. 810.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se consigna en el acta y se da por concluido el acto."
    }
   ],
   "siguiente": "ejecucion_788"
  },
  "conformidad_ficta_liq": {
   "fase": 2,
   "titulo": "Incomparecencia injustificada (art. 810.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se le tiene por conforme con la propuesta de liquidación del que comparece; se consigna en el acta y se da por concluido el acto."
    }
   ],
   "siguiente": "ejecucion_788"
  },
  "ejecucion_788": {
   "fase": 2,
   "titulo": "Se lleva a efecto lo acordado (art. 810.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Conforme a los dos primeros apartados del art. 788 LEC: el LAJ entrega a cada uno lo adjudicado y los títulos de propiedad, con notas expresivas de la adjudicación (art. 788.1), y da a quien lo pida testimonio de su haber y adjudicación (art. 788.2)."
    }
   ],
   "siguiente": "fin_decreto_acuerdo"
  },
  "designacion_contador": {
   "fase": 3,
   "titulo": "Contador y peritos (art. 810.5 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sin acuerdo, se nombra mediante diligencia contador y, en su caso, peritos, conforme al art. 784 LEC (por acuerdo o, a falta de él, por sorteo del art. 341 LEC; un perito como máximo por clase de bienes), y se sigue con los arts. 785 y siguientes."
    },
    {
     "tipo": "plazo",
     "texto": "Las operaciones divisorias se presentan en el plazo máximo de dos meses desde que se inician (art. 786.2 LEC). A instancia de parte, el LAJ puede fijar un plazo al contador (art. 785.3)."
    }
   ],
   "siguiente": "elaboracion_cuaderno"
  },
  "elaboracion_cuaderno": {
   "fase": 3,
   "titulo": "Operaciones divisorias (art. 786 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "El escrito del contador expresa",
     "items": [
      "La relación de bienes del caudal partible",
      "Su avalúo",
      "La liquidación, división y adjudicación, con las preferencias de los arts. 1406 y 1407 CC"
     ],
     "marcar": true
    }
   ],
   "siguiente": "presentacion_cuaderno"
  },
  "presentacion_cuaderno": {
   "fase": 3,
   "titulo": "Traslado de las operaciones (art. 787.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "El LAJ da traslado a las partes y las emplaza por diez días para formular oposición, que debe expresar los puntos y razones."
    }
   ],
   "pregunta": "¿Hay oposición?",
   "opciones": [
    {
     "texto": "No, o todos están conformes",
     "tono": "t-ok",
     "destino": "decreto_cuaderno"
    },
    {
     "texto": "Sí",
     "tono": "t-aviso",
     "destino": "oposicion_cuaderno"
    }
   ]
  },
  "decreto_cuaderno": {
   "fase": 3,
   "titulo": "Decreto aprobatorio (art. 787.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ dicta decreto aprobando las operaciones divisorias y mandando protocolizarlas."
    }
   ],
   "siguiente": "entrega_bienes"
  },
  "oposicion_cuaderno": {
   "fase": 3,
   "titulo": "Comparecencia ante el tribunal (art. 787.3 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "El LAJ convoca al contador y a las partes a una comparecencia ante el tribunal dentro de los diez días siguientes."
    }
   ],
   "pregunta": "¿Hay conformidad de todos sobre las cuestiones promovidas?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "acuerdo_786"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "vista_verbal_cuaderno"
    }
   ]
  },
  "acuerdo_786": {
   "fase": 3,
   "titulo": "Reformas convenidas (art. 787.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se ejecuta lo acordado: el contador hace las reformas convenidas, que se aprueban por decreto como en el art. 787.2."
    }
   ],
   "siguiente": "entrega_bienes"
  },
  "vista_verbal_cuaderno": {
   "fase": 3,
   "titulo": "Juicio verbal (art. 787.5 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal oye a las partes, admite las pruebas que no sean impertinentes o inútiles y sigue los trámites del juicio verbal."
    }
   ],
   "siguiente": "auto_aprobacion"
  },
  "auto_aprobacion": {
   "fase": 3,
   "titulo": "Sentencia (art. 787.5 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se lleva a efecto conforme al art. 788 LEC."
    },
    {
     "tipo": "aviso",
     "texto": "No tiene eficacia de cosa juzgada: los interesados pueden hacer valer sus derechos sobre los bienes adjudicados en el juicio ordinario que corresponda."
    }
   ],
   "pregunta": "¿Se apela?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "entrega_bienes"
    },
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "apelacion_787"
    }
   ]
  },
  "apelacion_787": {
   "fase": 3,
   "titulo": "Apelación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "Veinte días desde la notificación (art. 458.1 LEC)."
    }
   ],
   "siguiente": "entrega_bienes"
  },
  "entrega_bienes": {
   "fase": 3,
   "titulo": "Entrega de lo adjudicado (art. 788 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Aprobadas definitivamente las operaciones, el LAJ entrega a cada uno lo adjudicado y los títulos de propiedad, con notas de la adjudicación (art. 788.1); una vez protocolizadas, da testimonio de su haber a quien lo pida (art. 788.2)."
    }
   ],
   "siguiente": "fin_operaciones"
  },
  "art811_inicio": {
   "fase": 4,
   "titulo": "Régimen de participación (art. 811 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al extinguirse el régimen, las ganancias se determinan por la diferencia entre los patrimonios inicial y final de cada cónyuge (art. 1417 CC); el objeto de la liquidación es el crédito de participación."
    }
   ],
   "siguiente": "art811_firmeza"
  },
  "art811_firmeza": {
   "fase": 4,
   "titulo": "Firmeza de la disolución (art. 811.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No puede pedirse la liquidación hasta que sea firme la resolución que declare disuelto el régimen."
    }
   ],
   "pregunta": "¿Es firme?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "art811_solicitud"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_811_no_firme"
    }
   ]
  },
  "art811_solicitud": {
   "fase": 4,
   "titulo": "Solicitud (art. 811.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se acompaña una propuesta con una estimación del patrimonio inicial y final de cada cónyuge y, en su caso, la cantidad que debe pagar el que haya tenido mayor incremento."
    },
    {
     "tipo": "lista",
     "titulo": "Reglas del CC",
     "items": [
      "Patrimonio inicial: bienes y derechos al empezar el régimen y los adquiridos después por herencia, donación o legado (art. 1418 CC); si el pasivo supera al activo, no hay patrimonio inicial (art. 1420 CC)",
      "Patrimonio final: bienes y derechos al terminar el régimen, deducidas las obligaciones pendientes (art. 1422 CC)",
      "Si ambos incrementos son positivos, el de menor incremento percibe la mitad de la diferencia (art. 1427 CC)",
      "Pago en dinero, con posible aplazamiento judicial de hasta tres años garantizado (art. 1431 CC), o en bienes concretos por acuerdo o concesión del juez a petición fundada del deudor (art. 1432 CC)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Actividad negociadora previa: se acredita con esta solicitud, la única de este régimen (art. 264.4.º LEC); si no consta, no se admite (art. 403.2 LEC)."
    }
   ],
   "pregunta": "¿Se acredita la actividad negociadora previa (o la declaración responsable)?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "art811_senalamiento"
    },
    {
     "texto": "Se aporta, pero la justificación tiene un defecto formal",
     "tono": "t-plazo",
     "destino": "subsanar_masc_811"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_sin_masc"
    }
   ]
  },
  "art811_senalamiento": {
   "fase": 4,
   "titulo": "Señalamiento (art. 811.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "El LAJ señala, dentro del plazo máximo de diez días, la comparecencia de los cónyuges ante él al objeto de alcanzar un acuerdo."
    }
   ],
   "siguiente": "art811_comparecencia"
  },
  "art811_comparecencia": {
   "fase": 4,
   "titulo": "Comparecencia (art. 811 LEC)",
   "actor": "laj",
   "bloques": [],
   "pregunta": "¿Qué ocurre?",
   "opciones": [
    {
     "texto": "Hay acuerdo",
     "tono": "t-ok",
     "destino": "art811_acuerdo"
    },
    {
     "texto": "Uno no comparece sin causa justificada",
     "tono": "t-plazo",
     "destino": "art811_ficta"
    },
    {
     "texto": "No hay acuerdo",
     "tono": "t-aviso",
     "destino": "art811_verbal"
    }
   ]
  },
  "art811_acuerdo": {
   "fase": 4,
   "titulo": "Acuerdo (art. 811.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se consigna en el acta y se da por concluido el acto."
    }
   ],
   "siguiente": "fin_participacion_acuerdo"
  },
  "art811_ficta": {
   "fase": 4,
   "titulo": "Incomparecencia injustificada (art. 811.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se le tiene por conforme con la propuesta del que comparece; se consigna en el acta y se da por concluido el acto."
    }
   ],
   "siguiente": "fin_participacion_acuerdo"
  },
  "art811_verbal": {
   "fase": 4,
   "titulo": "Juicio verbal (art. 811.5 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sin acuerdo, el LAJ cita a una vista y se sigue el juicio verbal. A diferencia del art. 810, no hay contador."
    }
   ],
   "siguiente": "art811_sentencia"
  },
  "art811_sentencia": {
   "fase": 4,
   "titulo": "Sentencia (art. 811.5 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Resuelve todas las cuestiones, determina los patrimonios inicial y final de cada cónyuge y, en su caso, la cantidad que debe pagar el de mayor incremento y la forma de pago."
    }
   ],
   "pregunta": "¿Se apela?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "fin_participacion_sentencia"
    },
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "art811_apelacion"
    }
   ]
  },
  "art811_apelacion": {
   "fase": 4,
   "titulo": "Apelación",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "Veinte días desde la notificación (art. 458.1 LEC)."
    }
   ],
   "siguiente": "fin_participacion_sentencia"
  },
  "fin_acuerdo_privado": {
   "fase": 5,
   "titulo": "Liquidación por acuerdo de los cónyuges",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Con acuerdo no procede este procedimiento judicial (art. 806 LEC)."
    }
   ],
   "fin": "success"
  },
  "fin_sin_proceso": {
   "fase": 5,
   "titulo": "Aún no puede pedirse el inventario",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Hace falta que se haya admitido la demanda de nulidad, separación o divorcio o iniciado el proceso de disolución del régimen (art. 808.1 LEC)."
    }
   ],
   "fin": "warning"
  },
  "fin_solo_inventario": {
   "fase": 5,
   "titulo": "Inventario concluido",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La liquidación podrá pedirse cuando, concluido el inventario, sea firme en su caso la resolución que declare disuelto el régimen (art. 810.1 LEC)."
    }
   ],
   "fin": "warning"
  },
  "fin_decreto_acuerdo": {
   "fase": 5,
   "titulo": "Liquidación por acuerdo o conformidad, llevada a efecto",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Lo acordado se ha llevado a efecto con la entrega de lo adjudicado y los testimonios pedidos (arts. 810.4 y 788.1 y 2 LEC)."
    }
   ],
   "fin": "success"
  },
  "fin_operaciones": {
   "fase": 5,
   "titulo": "Liquidación por operaciones divisorias",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Aprobadas las operaciones y entregado lo adjudicado, termina el procedimiento (arts. 785–788 LEC por remisión del art. 810.5)."
    }
   ],
   "fin": "success"
  },
  "fin_811_no_firme": {
   "fase": 5,
   "titulo": "Aún no puede pedirse la liquidación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Hay que esperar a que sea firme la resolución que declare disuelto el régimen de participación (art. 811.1 LEC)."
    }
   ],
   "fin": "error"
  },
  "fin_participacion_acuerdo": {
   "fase": 5,
   "titulo": "Participación liquidada por acuerdo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Consignado el acuerdo o la conformidad en el acta (art. 811.4 LEC). El crédito se paga en dinero o, por acuerdo, en bienes concretos (arts. 1431 y 1432 CC)."
    }
   ],
   "fin": "success"
  },
  "fin_participacion_sentencia": {
   "fase": 5,
   "titulo": "Participación liquidada por sentencia",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La sentencia fija los patrimonios, la cantidad a pagar y la forma de pago (art. 811.5 LEC; arts. 1431 y 1432 CC)."
    }
   ],
   "fin": "success"
  },
  "fin_sin_masc": {
   "fase": 5,
   "titulo": "Inadmisión: falta la actividad negociadora previa",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se admite cuando no consta haber acudido al medio adecuado de solución de controversias exigido como requisito de procedibilidad (art. 403.2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "El interesado puede acudir a un medio adecuado y presentar de nuevo la solicitud con su acreditación (art. 10 LO 1/2025)."
    }
   ],
   "fin": "error"
  },
  "subsanar_masc_inventario": {
   "fase": 1,
   "titulo": "Subsanación del defecto en la justificación (art. 231 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal y el Letrado de la Administración de Justicia cuidarán de que puedan subsanarse los defectos de los actos procesales de las partes (art. 231 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Antes de admitir, los defectos formales en la justificación del intento son subsanables, según el criterio, no vinculante, de la Junta Sectorial de Magistrados de las Secciones de Familia de la Audiencia Provincial de Madrid (acuerdo de 6-11-2025, III.6). Si no se aporta justificación alguna, no hay defecto que subsanar."
    }
   ],
   "pregunta": "¿Se subsana el defecto?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "senalamiento_inventario"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_sin_masc"
    }
   ]
  },
  "subsanar_masc_liquidacion": {
   "fase": 2,
   "titulo": "Subsanación del defecto en la justificación (art. 231 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal y el Letrado de la Administración de Justicia cuidarán de que puedan subsanarse los defectos de los actos procesales de las partes (art. 231 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Antes de admitir, los defectos formales en la justificación del intento son subsanables, según el criterio, no vinculante, de la Junta Sectorial de Magistrados de las Secciones de Familia de la Audiencia Provincial de Madrid (acuerdo de 6-11-2025, III.6). Si no se aporta justificación alguna, no hay defecto que subsanar."
    }
   ],
   "pregunta": "¿Se subsana el defecto?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "senalamiento_liquidacion"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_sin_masc"
    }
   ]
  },
  "subsanar_masc_811": {
   "fase": 4,
   "titulo": "Subsanación del defecto en la justificación (art. 231 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal y el Letrado de la Administración de Justicia cuidarán de que puedan subsanarse los defectos de los actos procesales de las partes (art. 231 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Antes de admitir, los defectos formales en la justificación del intento son subsanables, según el criterio, no vinculante, de la Junta Sectorial de Magistrados de las Secciones de Familia de la Audiencia Provincial de Madrid (acuerdo de 6-11-2025, III.6). Si no se aporta justificación alguna, no hay defecto que subsanar."
    }
   ],
   "pregunta": "¿Se subsana el defecto?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "art811_senalamiento"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_sin_masc"
    }
   ]
  }
 },
 "pie": "Arts. 806–811 LEC (y 784–788 por remisión del art. 810)<br>Arts. 264.4.º y 403.2 LEC y art. 5 LO 1/2025 (actividad negociadora previa)<br>Arts. 1392–1410 CC (gananciales) · Arts. 1411–1434 CC (participación)"
});

/* Migrado por tools/migrate.js desde sources/actual/G02.json; revisado con el BOE (registro: docs/revision/lec-division-herencia.md). */
Neg.data.register({
 "tipo": "guia",
 "id": "lec-division-herencia",
 "ley": "LEC",
 "grupo": "División judicial de patrimonios",
 "titulo": "Del procedimiento para la división de la herencia",
 "corto": "División de la herencia",
 "articulos": [
  "782",
  "783",
  "784",
  "785",
  "786",
  "787",
  "788",
  "789"
 ],
 "revision": {
  "estado": "revisado",
  "boe": "20261007",
  "origen": "G02"
 },
 "fases": [
  "Presupuestos y Verificación",
  "Solicitud y Admisión",
  "Actuaciones Previas",
  "Junta y Designación",
  "Operaciones Divisorias",
  "Aprobación y Oposición",
  "Entrega y Cierre"
 ],
 "actores": {
  "ambos": "LAJ / Tribunal",
  "juez": "Tribunal",
  "laj": "Letrado de la Administración de Justicia",
  "notario": "Notario"
 },
 "inicio": "p0_inicio",
 "pasos": {
  "p0_inicio": {
   "fase": 0,
   "titulo": "Actividad negociadora previa (LO 1/2025)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La división judicial de la herencia es un proceso especial del Libro IV de la LEC: para que se admita hay que haber acudido antes a un medio adecuado de solución de controversias (arts. 5.1 y 5.2 LO 1/2025; no figura entre las materias exceptuadas)."
    },
    {
     "tipo": "ley",
     "texto": "Art. 264.4.º LEC: con la demanda se presenta el documento que acredite haberse intentado la actividad negociadora previa o la declaración responsable de la imposibilidad de llevarla a cabo por desconocer el domicilio de la otra parte o el medio para requerirla."
    },
    {
     "tipo": "nota",
     "texto": "Medios válidos, entre otros: mediación, conciliación, opinión neutral de experto, oferta vinculante confidencial o negociación directa o entre abogados (art. 5.1 LO 1/2025). La solicitud de negociación interrumpe la prescripción o suspende la caducidad en los términos del art. 7 LO 1/2025."
    }
   ],
   "pregunta": "¿Se acredita la actividad negociadora previa (o la declaración responsable)?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p0_legitimacion"
    },
    {
     "texto": "Se aporta, pero la justificación tiene un defecto formal",
     "tono": "t-plazo",
     "destino": "p0_subsanar_masc"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_sin_masc"
    }
   ]
  },
  "fin_sin_masc": {
   "fase": 0,
   "titulo": "Inadmisión: falta la actividad negociadora previa",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se admiten las demandas cuando no se acompañan los documentos que la ley exige para su admisión o no consta haber acudido al medio adecuado de solución de controversias exigido como requisito de procedibilidad (art. 403.2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "El art. 404 LEC prevé que el Letrado de la Administración de Justicia admita por decreto (apartado 1) y que dé cuenta al Tribunal para que resuelva sobre la admisión en los casos de su apartado 2, que no menciona expresamente este."
    }
   ],
   "fin": "error"
  },
  "p0_legitimacion": {
   "fase": 0,
   "titulo": "Legitimación (art. 782.1 y 3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Puede pedir la división cualquier coheredero o legatario de parte alícuota (art. 782.1 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "Los acreedores no pueden instar la división (art. 782.3 LEC)."
    }
   ],
   "pregunta": "¿Quién pide la división?",
   "opciones": [
    {
     "texto": "Un coheredero",
     "tono": "t-ok",
     "destino": "p0_partidor"
    },
    {
     "texto": "Un legatario de parte alícuota",
     "tono": "t-ok",
     "destino": "p0_partidor"
    },
    {
     "texto": "Un acreedor, u otro no legitimado",
     "tono": "t-aviso",
     "destino": "fin_acreedor"
    }
   ]
  },
  "fin_acreedor": {
   "fase": 0,
   "titulo": "Inadmisión: falta de legitimación",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Los acreedores no pueden instar la división judicial de la herencia (art. 782.3 LEC)."
    },
    {
     "tipo": "lista",
     "titulo": "Lo que sí pueden hacer los acreedores",
     "items": [
      "Ejercitar sus acciones contra la herencia, la comunidad hereditaria o los coherederos en el juicio declarativo que corresponda, sin suspender la división (art. 782.3)",
      "Los reconocidos en el testamento o por los coherederos, o con título ejecutivo: oponerse a que se lleve a efecto la partición hasta que se les pague o afiance (art. 782.4 LEC; art. 1082 CC)",
      "Los acreedores de un coheredero: intervenir a su costa en la partición para evitar fraude o perjuicio (art. 782.5)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "El art. 404 LEC prevé que el Letrado de la Administración de Justicia admita por decreto (apartado 1) y que dé cuenta al Tribunal para que resuelva sobre la admisión en los casos de su apartado 2, que no menciona expresamente este."
    }
   ],
   "fin": "warning"
  },
  "p0_partidor": {
   "fase": 0,
   "titulo": "¿Debe hacer la partición un contador-partidor? (art. 782.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No procede la división judicial si la partición debe hacerla un comisario o contador-partidor designado por el testador, por acuerdo de los coherederos, o por el Letrado de la Administración de Justicia o el Notario."
    }
   ],
   "pregunta": "¿Hay contador-partidor designado o partición hecha por el testador?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "p0_competencia"
    },
    {
     "texto": "Sí",
     "tono": "t-aviso",
     "destino": "fin_partidor_previo"
    }
   ]
  },
  "fin_partidor_previo": {
   "fase": 0,
   "titulo": "Inadmisión: la partición corresponde a otro",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La partición debe hacerla el contador-partidor designado o ya la hizo el testador (art. 782.1 LEC; arts. 1056 y 1057 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Sin contador designado, los herederos y legatarios que representen al menos el 50 % del haber pueden pedir un contador-partidor dativo al LAJ (art. 92 LJV) o al Notario (art. 1057 CC). Los herederos mayores con libre administración pueden repartir como tengan por conveniente (art. 1058 CC)."
    },
    {
     "tipo": "nota",
     "texto": "El art. 404 LEC prevé que el Letrado de la Administración de Justicia admita por decreto (apartado 1) y que dé cuenta al Tribunal para que resuelva sobre la admisión en los casos de su apartado 2, que no menciona expresamente este."
    }
   ],
   "fin": "warning"
  },
  "p0_competencia": {
   "fase": 0,
   "titulo": "Competencia territorial",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "En los juicios sobre cuestiones hereditarias es competente el tribunal del último domicilio del finado; si lo tuvo en el extranjero, el de su último domicilio en España o donde esté la mayor parte de sus bienes, a elección del demandante (art. 52.1.4.º LEC). Hoy, la Sección Civil del Tribunal de Instancia."
    },
    {
     "tipo": "nota",
     "texto": "Cuando la competencia territorial viene fijada por reglas imperativas, el LAJ la examina de oficio al presentarse la demanda (art. 58 LEC)."
    }
   ],
   "pregunta": "¿Es competente este tribunal?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p0_documentacion"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_inhibicion"
    }
   ]
  },
  "fin_inhibicion": {
   "fase": 0,
   "titulo": "Falta de competencia territorial (art. 58 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ, previa audiencia del Ministerio Fiscal y de las partes personadas, da cuenta al Juez, que resuelve por auto y, en su caso, remite las actuaciones al tribunal competente."
    },
    {
     "tipo": "nota",
     "texto": "Si el tribunal al que se remiten también se considera incompetente, decide el conflicto el tribunal inmediato superior común (art. 60 LEC)."
    }
   ],
   "fin": "error"
  },
  "p0_documentacion": {
   "fase": 1,
   "titulo": "Documentos de la solicitud (art. 782.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "Deben acompañarse",
     "items": [
      "Certificado de defunción del causante",
      "Documento que acredite la condición de heredero o legatario del solicitante",
      "Acreditación de la actividad negociadora previa o declaración responsable (art. 264.4.º LEC)"
     ],
     "marcar": true
    }
   ],
   "pregunta": "¿Está completa la documentación?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p0_admision"
    },
    {
     "texto": "No",
     "tono": "t-plazo",
     "destino": "p0_subsanacion"
    }
   ]
  },
  "p0_subsanacion": {
   "fase": 1,
   "titulo": "Subsanación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se requiere al solicitante para que aporte lo que falta, con indicación precisa de los documentos y del plazo."
    }
   ],
   "pregunta": "¿Se subsana en plazo?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p0_admision"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_inadmitida"
    }
   ]
  },
  "fin_inadmitida": {
   "fase": 1,
   "titulo": "Inadmisión por documentación incompleta",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se admite la solicitud que no va acompañada de los documentos que la ley exige (arts. 403.2 y 782.2 LEC). Si el defecto no se subsana en el plazo concedido, el Letrado de la Administración de Justicia da cuenta al Tribunal para que resuelva sobre la admisión (art. 404.2 LEC)."
    }
   ],
   "fin": "error"
  },
  "p0_admision": {
   "fase": 1,
   "titulo": "Admisión de la solicitud",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Admitida la solicitud, se acuerda, si se pidió y procede, la intervención del caudal y la formación de inventario (art. 783.1 LEC); después, la convocatoria de la Junta."
    },
    {
     "tipo": "nota",
     "texto": "En cualquier momento antes de la entrega de los bienes, los acreedores reconocidos en el testamento o por los coherederos, o con título ejecutivo, pueden oponerse a que se lleve a efecto la partición hasta que se les pague o afiance (art. 782.4 LEC)."
    }
   ],
   "pregunta": "¿Se ha formulado esa oposición de acreedores?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "p2_intervencion_check"
    },
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "p0_anota_acreedor"
    }
   ]
  },
  "p0_anota_acreedor": {
   "fase": 1,
   "titulo": "Oposición de acreedores (art. 782.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Consecuencias: no se hará la entrega de los bienes a ningún heredero ni legatario sin que esos acreedores estén completamente pagados o garantizados a su satisfacción (art. 788.3 LEC), y no cesará la intervención del caudal hasta el pago o afianzamiento (art. 796.3 LEC)."
    }
   ],
   "siguiente": "p2_intervencion_check"
  },
  "p2_intervencion_check": {
   "fase": 2,
   "titulo": "¿Se ha pedido la intervención del caudal? (art. 783.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Puede pedirla cualquier coheredero o legatario de parte alícuota al solicitar la división, salvo prohibición expresa del testador (art. 792.1.2.º LEC), y los acreedores reconocidos en el testamento o por los coherederos o con título ejecutivo (art. 792.2 LEC)."
    }
   ],
   "pregunta": "¿Se ha pedido y procede?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "p2_intervencion"
    },
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "p2_gananciales_check"
    }
   ]
  },
  "p2_intervencion": {
   "fase": 2,
   "titulo": "Intervención del caudal (art. 793 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El tribunal ordena por auto, si es necesario, las medidas indispensables para la seguridad de los bienes, libros, papeles, correspondencia y efectos del difunto. El LAJ señala día y hora para la formación de inventario y manda citar a los interesados (art. 793.3: cónyuge sobreviviente, herederos o legatarios de parte alícuota, acreedores instantes o personados, Ministerio Fiscal y, en su caso, Abogacía del Estado)."
    }
   ],
   "siguiente": "p2_inventario"
  },
  "p2_inventario": {
   "fase": 2,
   "titulo": "Inventario y administración (arts. 794–796 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ forma el inventario con los que concurran: bienes de la herencia y escrituras, documentos y papeles de importancia; con las reglas del testador, si las hay (art. 794 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "Si hay controversia sobre la inclusión o exclusión de bienes, el LAJ hace constar en el acta las pretensiones de cada parte y su fundamentación jurídica y cita a una vista y se sigue el juicio verbal; la sentencia deja a salvo los derechos de terceros (art. 794.4 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Hecho el inventario, el tribunal resuelve por auto sobre la administración, custodia y conservación del caudal: administrador preferente el viudo o viuda y, en su defecto, el heredero o legatario de parte alícuota con mayor parte, con caución (art. 795 LEC). Durante la división, los herederos pueden pedir de común acuerdo que cese la intervención, salvo menores sin representante, ausentes no localizados u oposición de acreedores pendiente (art. 796.2 y 3 LEC)."
    }
   ],
   "siguiente": "p2_gananciales_check"
  },
  "p2_gananciales_check": {
   "fase": 2,
   "titulo": "¿Hay sociedad de gananciales sin liquidar?",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La herencia la forman los bienes privativos del causante y, si estaba casado en gananciales, lo que le corresponda tras liquidar la sociedad."
    }
   ],
   "pregunta": "¿Existía sociedad de gananciales sin liquidar?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "p2_convocatoria"
    },
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "p2_gananciales"
    }
   ]
  },
  "p2_gananciales": {
   "fase": 2,
   "titulo": "Liquidación de gananciales",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Hay que liquidar la sociedad de gananciales para saber qué parte integra la herencia. La LEC regula esa liquidación en los arts. 806 y ss. (esquema de liquidación del régimen económico matrimonial); los interesados también pueden liquidarla de común acuerdo."
    },
    {
     "tipo": "nota",
     "texto": "El cónyuge sobreviviente es convocado a la Junta en todo caso (art. 783.2 LEC)."
    }
   ],
   "siguiente": "p2_convocatoria"
  },
  "p2_convocatoria": {
   "fase": 2,
   "titulo": "Convocatoria de la Junta (art. 783.2 y 3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "El LAJ señala la Junta dentro de los diez días siguientes."
    },
    {
     "tipo": "lista",
     "titulo": "Se convoca a",
     "items": [
      "Los herederos",
      "Los legatarios de parte alícuota",
      "El cónyuge sobreviviente",
      "El Ministerio Fiscal, si hay menores sin representación legítima o ausentes de paradero desconocido (art. 783.4)"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "Citación: a los personados, por medio del procurador; a los no personados, personalmente si se conoce su residencia; si no, por edictos (art. 164 LEC)."
    }
   ],
   "pregunta": "¿Hay algún interesado de residencia desconocida?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "p2_mf_check"
    },
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "p2_edictos"
    }
   ]
  },
  "p2_edictos": {
   "fase": 2,
   "titulo": "Citación por edictos (arts. 783.3 y 164 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Al interesado de residencia desconocida se le llama por edictos conforme al art. 164 LEC."
    }
   ],
   "siguiente": "p2_mf_check"
  },
  "p2_mf_check": {
   "fase": 2,
   "titulo": "Ministerio Fiscal (art. 783.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ convoca también al Ministerio Fiscal para que represente a los interesados menores sin representación legítima y a los ausentes cuyo paradero se ignore."
    }
   ],
   "pregunta": "¿Hay menores sin representante o ausentes de paradero desconocido?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "p3_junta"
    },
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "p2_mf"
    }
   ]
  },
  "p2_mf": {
   "fase": 2,
   "titulo": "Convocatoria del Ministerio Fiscal",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Su representación cesa cuando los menores tengan representante legal y, respecto de los ausentes, cuando se presenten o puedan ser citados personalmente, aunque vuelvan a ausentarse (art. 783.4 LEC)."
    }
   ],
   "siguiente": "p3_junta"
  },
  "p3_junta": {
   "fase": 3,
   "titulo": "Junta (art. 784.1 y 2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se celebra con los que concurran, presidida por el LAJ. Los interesados deben ponerse de acuerdo sobre el contador que practique las operaciones divisorias y sobre el perito o peritos para el avalúo."
    },
    {
     "tipo": "aviso",
     "texto": "No puede designarse más de un perito para cada clase de bienes (art. 784.2 LEC)."
    }
   ],
   "pregunta": "¿Hay acuerdo sobre el contador?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p3_contador_acuerdo"
    },
    {
     "texto": "No",
     "tono": "t-plazo",
     "destino": "p3_sorteo_cont"
    }
   ]
  },
  "p3_contador_acuerdo": {
   "fase": 3,
   "titulo": "Contador designado por acuerdo",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se hace constar el acuerdo y se pasa a los peritos."
    }
   ],
   "pregunta": "¿Hay acuerdo sobre los peritos (o no hacen falta)?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p3_aceptacion"
    },
    {
     "texto": "No",
     "tono": "t-plazo",
     "destino": "p3_sorteo_per"
    }
   ]
  },
  "p3_sorteo_cont": {
   "fase": 3,
   "titulo": "Contador por sorteo (arts. 784.3 y 341 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sin acuerdo, se designa por sorteo, conforme al art. 341 LEC, entre abogados ejercientes con especiales conocimientos en la materia y despacho en el lugar del juicio."
    },
    {
     "tipo": "nota",
     "texto": "Al contador designado por sorteo se le aplican las normas de recusación y provisión de fondos de los peritos (art. 784.4 LEC)."
    }
   ],
   "pregunta": "¿Hay acuerdo sobre los peritos (o no hacen falta)?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p3_aceptacion"
    },
    {
     "texto": "No",
     "tono": "t-plazo",
     "destino": "p3_sorteo_per"
    }
   ]
  },
  "p3_sorteo_per": {
   "fase": 3,
   "titulo": "Peritos por sorteo (art. 784.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sin acuerdo, se designan por el mismo procedimiento los que el contador estime necesarios para los avalúos, nunca más de uno por cada clase de bienes."
    },
    {
     "tipo": "nota",
     "texto": "Los gastos de partición hechos en interés común se deducen de la herencia (art. 1064 CC)."
    }
   ],
   "siguiente": "p3_aceptacion"
  },
  "p3_aceptacion": {
   "fase": 3,
   "titulo": "Aceptación del cargo (art. 785.1 y 2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Elegidos el contador y los peritos, previa aceptación, el LAJ les entrega lo necesario. La aceptación del contador da derecho a cada interesado para obligarle a que cumpla su encargo."
    }
   ],
   "pregunta": "¿Acepta el contador?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p3_entrega_docs"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "p3_sustitucion"
    }
   ]
  },
  "p3_sustitucion": {
   "fase": 3,
   "titulo": "Nueva designación",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el designado no acepta, se designa otro por el mismo procedimiento (acuerdo o sorteo) y se le requiere para que acepte."
    }
   ],
   "siguiente": "p3_entrega_docs"
  },
  "p3_entrega_docs": {
   "fase": 3,
   "titulo": "Entrega de los autos al contador (art. 785.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ entrega los autos al contador y pone a su disposición y a la de los peritos los objetos, documentos y papeles necesarios para el inventario (si no se hizo), el avalúo, la liquidación y la división."
    }
   ],
   "pregunta": "¿Pide alguna parte que se fije un plazo al contador? (art. 785.3 LEC)",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "p4_operaciones"
    },
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "p3_plazo"
    }
   ]
  },
  "p3_plazo": {
   "fase": 3,
   "titulo": "Plazo al contador (art. 785.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "A instancia de parte, el LAJ puede fijar por diligencia un plazo al contador; si no presenta las operaciones, responde de los daños y perjuicios."
    }
   ],
   "siguiente": "p4_operaciones"
  },
  "p4_operaciones": {
   "fase": 4,
   "titulo": "Operaciones divisorias (art. 786.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador las realiza conforme a la ley aplicable a la sucesión del causante, procurando evitar la indivisión y la excesiva división de las fincas."
    },
    {
     "tipo": "plazo",
     "texto": "Plazo máximo de dos meses desde que fueron iniciadas (art. 786.2 LEC)."
    }
   ],
   "pregunta": "¿Estableció el testador reglas para el inventario, avalúo, liquidación o división?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "p4_presentacion"
    },
    {
     "texto": "Sí",
     "tono": "t-plazo",
     "destino": "p4_reglas_testador"
    }
   ]
  },
  "p4_reglas_testador": {
   "fase": 4,
   "titulo": "Reglas del testador (art. 786.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador se atiene a ellas, siempre que no perjudiquen las legítimas de los herederos forzosos."
    }
   ],
   "siguiente": "p4_presentacion"
  },
  "p4_presentacion": {
   "fase": 4,
   "titulo": "Presentación de las operaciones (art. 786.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "lista",
     "titulo": "El escrito firmado por el contador expresa",
     "items": [
      "1.º La relación de los bienes que forman el caudal partible",
      "2.º El avalúo de los comprendidos en esa relación",
      "3.º La liquidación del caudal, su división y adjudicación a cada partícipe"
     ],
     "marcar": true
    },
    {
     "tipo": "nota",
     "texto": "En cualquier estado del juicio los interesados pueden separarse de su seguimiento; si lo piden de común acuerdo, el LAJ sobresee y pone los bienes a disposición de los herederos (art. 789 LEC)."
    }
   ],
   "pregunta": "¿Qué ocurre?",
   "opciones": [
    {
     "texto": "El contador presenta las operaciones",
     "tono": "t-ok",
     "destino": "p5_traslado"
    },
    {
     "texto": "Todos piden de común acuerdo el sobreseimiento",
     "tono": "t-nota",
     "destino": "fin_acuerdo_coherederos"
    },
    {
     "texto": "No las presenta en plazo",
     "tono": "t-aviso",
     "destino": "p4_incumplimiento"
    }
   ]
  },
  "p4_incumplimiento": {
   "fase": 4,
   "titulo": "El contador no presenta las operaciones",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si se le fijó plazo por diligencia y no lo cumple, responde de los daños y perjuicios (art. 785.3 LEC). Cada interesado puede obligarle a cumplir el encargo aceptado (art. 785.2 LEC)."
    }
   ],
   "pregunta": "¿Las presenta tras el requerimiento?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p5_traslado"
    },
    {
     "texto": "No: hay que designar otro",
     "tono": "t-aviso",
     "destino": "p3_sustitucion"
    }
   ]
  },
  "p5_traslado": {
   "fase": 5,
   "titulo": "Traslado de las operaciones (art. 787.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "El LAJ da traslado a las partes y las emplaza por diez días para formular oposición."
    },
    {
     "tipo": "info",
     "texto": "Durante el plazo pueden examinar en la oficina judicial los autos y las operaciones y obtener copias a su costa. La oposición, por escrito, expresa los puntos a que se refiere y las razones en que se funda."
    }
   ],
   "pregunta": "¿Qué ocurre en los diez días?",
   "opciones": [
    {
     "texto": "Pasan sin oposición, o todos manifiestan conformidad",
     "tono": "t-ok",
     "destino": "p5_decreto"
    },
    {
     "texto": "Hay oposición en plazo",
     "tono": "t-plazo",
     "destino": "p5_comparecencia"
    },
    {
     "texto": "Todos piden el sobreseimiento (art. 789)",
     "tono": "t-nota",
     "destino": "fin_acuerdo_coherederos"
    }
   ]
  },
  "p5_decreto": {
   "fase": 5,
   "titulo": "Decreto aprobatorio (art. 787.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ dicta decreto aprobando las operaciones divisorias y mandando protocolizarlas."
    },
    {
     "tipo": "plazo",
     "texto": "Contra el decreto, que pone fin al procedimiento, cabe recurso directo de revisión en cinco días, sin efectos suspensivos (art. 454 bis.1 y 2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Se espera a la firmeza del decreto antes de enviar las operaciones al Notario. Es una cautela de práctica, no un mandato legal, porque el recurso no suspende: un registrador exigió la firmeza para inscribir, y la Dirección General la dio por acreditada con la diligencia de ordenación reseñada en la escritura (Resolución de la Dirección General de Seguridad Jurídica y Fe Pública de 11 de junio de 2026)."
    }
   ],
   "siguiente": "p6_protocolizacion"
  },
  "p5_comparecencia": {
   "fase": 5,
   "titulo": "Comparecencia ante el tribunal (art. 787.3 y 4 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "plazo",
     "texto": "El LAJ convoca al contador y a las partes a comparecencia ante el tribunal dentro de los diez días siguientes."
    },
    {
     "tipo": "info",
     "texto": "Si se alcanza la conformidad de todos los interesados sobre las cuestiones promovidas, se ejecuta lo acordado y el contador hace las reformas convenidas, que se aprueban por decreto como en el art. 787.2."
    }
   ],
   "pregunta": "¿Hay conformidad de todos sobre las cuestiones promovidas?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p5_reformas"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "p5_jv_total"
    }
   ]
  },
  "p5_reformas": {
   "fase": 5,
   "titulo": "Reformas y aprobación (art. 787.4 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El contador incorpora las reformas convenidas y el LAJ las aprueba por decreto, mandando protocolizarlas."
    }
   ],
   "siguiente": "p6_protocolizacion"
  },
  "p5_jv_total": {
   "fase": 5,
   "titulo": "Juicio verbal (art. 787.5 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Sin conformidad, el tribunal oye a las partes, admite las pruebas que no sean impertinentes o inútiles y continúa por los trámites del juicio verbal."
    }
   ],
   "pregunta": "¿Se han suspendido las actuaciones por causa penal de cohecho en el avalúo? (art. 40 LEC)",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-nota",
     "destino": "p5_sentencia"
    },
    {
     "texto": "Sí",
     "tono": "t-aviso",
     "destino": "p5_suspension"
    }
   ]
  },
  "p5_suspension": {
   "fase": 5,
   "titulo": "Suspensión por causa penal (art. 787.6 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si se suspendieron las actuaciones por estar pendiente una causa penal por cohecho en el avalúo, el LAJ alza la suspensión, sin esperar a la resolución firme, en cuanto los interesados presenten de común acuerdo otro avalúo, y se dicta sentencia con arreglo a este."
    }
   ],
   "pregunta": "¿Presentan los interesados un nuevo avalúo de común acuerdo?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p5_sentencia"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_suspension_penal"
    }
   ]
  },
  "fin_suspension_penal": {
   "fase": 5,
   "titulo": "Actuaciones suspendidas",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La suspensión se mantiene conforme al art. 40 LEC mientras no se presente un avalúo de común acuerdo (art. 787.6 LEC)."
    }
   ],
   "fin": "warning"
  },
  "p5_sentencia": {
   "fase": 5,
   "titulo": "Sentencia (art. 787.5 LEC)",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Se lleva a efecto con arreglo al art. 788 LEC."
    },
    {
     "tipo": "aviso",
     "texto": "No tiene eficacia de cosa juzgada: los interesados pueden hacer valer los derechos que crean corresponderles sobre los bienes adjudicados en el juicio ordinario que corresponda (art. 787.5, párrafo segundo, LEC)."
    }
   ],
   "siguiente": "p6_sentencia_titulo"
  },
  "p6_sentencia_titulo": {
   "fase": 6,
   "titulo": "Tras la sentencia: inscribir o protocolizar",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "La sentencia se lleva a efecto con arreglo al art. 788 LEC, sin proceso de ejecución aparte (art. 787.5 LEC)."
    },
    {
     "tipo": "info",
     "texto": "Si la sentencia modifica las operaciones, el contador las adapta a lo que resuelve. Es práctica, por analogía con las reformas convenidas del art. 787.4 LEC: el art. 787.5 LEC no lo dice."
    },
    {
     "tipo": "info",
     "texto": "La sentencia firme es título suficiente para inscribir: basta testimonio de la sentencia, con su firmeza, y del cuaderno particional (art. 14 LH; art. 80.1 a) RH; Resolución de la Dirección General de Seguridad Jurídica y Fe Pública de 2 de marzo de 2022)."
    },
    {
     "tipo": "info",
     "texto": "También se pueden protocolizar las operaciones divisorias, en tanto se ciñan a lo modificado por la sentencia (arts. 787.5 y 788.2 LEC)."
    },
    {
     "tipo": "aviso",
     "texto": "Tiene que quedar claro qué cuaderno refleja lo aprobado, y determinarlo corresponde al Juez: una inscripción se suspendió porque se presentaron dos versiones sin constancia de cuál era la buena (Resolución de la Dirección General de los Registros y del Notariado de 26 de julio de 2019)."
    },
    {
     "tipo": "aviso",
     "texto": "Si algún heredero no compareció, tiene que resultar de la documentación la intervención del Ministerio Fiscal, si fue citado por edictos (art. 783.4 LEC), y, si fue declarado en rebeldía, que han pasado los plazos de la acción de rescisión, lo que aprecia el Juzgado (arts. 501, 502 y 524.4 LEC). Una inscripción se suspendió por no constar (Resolución de la Dirección General de Seguridad Jurídica y Fe Pública de 7 de julio de 2026)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 787.4, 787.5 y 788.2 LEC · Art. 14 LH · Art. 80.1 a) RH · Art. 524.4 LEC"
    }
   ],
   "pregunta": "¿Se protocolizan las operaciones divisorias?",
   "opciones": [
    {
     "texto": "Sí, ceñidas a lo modificado por la sentencia",
     "tono": "t-nota",
     "destino": "p6_protocolizacion"
    },
    {
     "texto": "No: se inscribe con los testimonios",
     "tono": "t-ok",
     "destino": "p6_acreedores"
    }
   ]
  },
  "p6_protocolizacion": {
   "fase": 6,
   "titulo": "Protocolización: a quién corresponde",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Las operaciones aprobadas se protocolizan ante Notario, mediante acta (art. 787.2 LEC; arts. 211 y 213 RN). El Notario depende de lo que decidan los interesados."
    },
    {
     "tipo": "aviso",
     "texto": "Si se aprobaron por decreto, su testimonio no es título inscribible: para inscribir las adjudicaciones hay que protocolizar las operaciones ante Notario, salvo que en el mismo procedimiento se dispusiera otra cosa (art. 14 LH; art. 80.1 a) RH; Resolución de la Dirección General de los Registros y del Notariado de 1 de febrero de 2018; Resolución de la Dirección General de Seguridad Jurídica y Fe Pública de 2 de marzo de 2022)."
    },
    {
     "tipo": "nota",
     "texto": "Si el caudal no incluye bienes inscribibles: el art. 787.2 LEC no distingue, y el art. 788.2 LEC da los testimonios «luego que sean protocolizadas». La razón registral de protocolizar solo alcanza a esos bienes, pero ninguna de las normas y resoluciones consultadas permite omitirla por eso."
    },
    {
     "tipo": "ley",
     "texto": "Art. 787.2 LEC · Art. 128 RN · Art. 14 LH · Art. 80.1 a) RH"
    }
   ],
   "pregunta": "¿Designan los interesados un Notario por unanimidad?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p6_notario_unanime"
    },
    {
     "texto": "No hay acuerdo",
     "tono": "t-aviso",
     "destino": "p6_notario_turno"
    }
   ]
  },
  "p6_notario_unanime": {
   "fase": 6,
   "titulo": "Notario designado por los interesados",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Protocoliza el Notario que, residiendo dentro del partido judicial, designen unánimemente los interesados."
    },
    {
     "tipo": "ley",
     "texto": "Art. 128, párrafo tercero, RN"
    }
   ],
   "siguiente": "p6_testimonios_notario"
  },
  "p6_notario_turno": {
   "fase": 6,
   "titulo": "Notario designado por turno",
   "actor": "juez",
   "bloques": [
    {
     "tipo": "info",
     "texto": "A falta de acuerdo, el Juez o Tribunal designa al Notario a quien corresponda, con arreglo a un turno establecido entre los Notarios del distrito notarial."
    },
    {
     "tipo": "nota",
     "texto": "En un auto publicado en el Diario Oficial de Galicia de 26 de marzo de 2015 se oficia al decano del Colegio Notarial «para que participe el notario a quien por turno corresponda la protocolización»."
    },
    {
     "tipo": "ley",
     "texto": "Art. 128, párrafo cuarto, RN"
    }
   ],
   "siguiente": "p6_testimonios_notario"
  },
  "p6_testimonios_notario": {
   "fase": 6,
   "titulo": "Testimonios para el Notario",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Firme la resolución, se expiden los testimonios."
    },
    {
     "tipo": "lista",
     "titulo": "Se expide testimonio de",
     "marcar": true,
     "items": [
      "El decreto que aprueba las operaciones y manda protocolizarlas o, si hubo oposición, la sentencia; en ambos casos, con expresión de su firmeza",
      "El cuaderno particional aprobado; si hubo reformas, con las reformas convenidas (art. 787.4 LEC); si hubo sentencia, ceñido a lo modificado por ella"
     ]
    },
    {
     "tipo": "nota",
     "texto": "Cómo llegan al Notario: los puede entregar cualquier persona (el art. 213 RN habla de «el expediente con el auto judicial») o remitirlos el propio Juzgado, como en un auto publicado en el Diario Oficial de Galicia de 26 de marzo de 2015 («remítansele las operaciones divisorias y testimonio»)."
    },
    {
     "tipo": "aviso",
     "texto": "Tiene que quedar claro cuál es el cuaderno aprobado: una inscripción se suspendió porque se protocolizaron dos versiones sin constancia de cuál era la buena (Resolución de la Dirección General de los Registros y del Notariado de 26 de julio de 2019)."
    },
    {
     "tipo": "aviso",
     "texto": "Si algún heredero no compareció, tiene que resultar de la documentación la intervención del Ministerio Fiscal, si fue citado por edictos (art. 783.4 LEC), y, si fue declarado en rebeldía, que han pasado los plazos de la acción de rescisión, lo que aprecia el Juzgado (arts. 501, 502 y 524.4 LEC). Una inscripción se suspendió por no constar (Resolución de la Dirección General de Seguridad Jurídica y Fe Pública de 7 de julio de 2026)."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 783.4, 787.2, 787.4 y 787.5 LEC · Art. 213 RN · Arts. 501, 502 y 524.4 LEC"
    }
   ],
   "siguiente": "p6_acta_protocolizacion"
  },
  "p6_acta_protocolizacion": {
   "fase": 6,
   "titulo": "Acta de protocolización",
   "actor": "notario",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Notario extiende y suscribe el acta a requerimiento de cualquier persona que le entregue la documentación con la resolución que ordena protocolizar (art. 213 RN)."
    },
    {
     "tipo": "lista",
     "titulo": "El acta hace constar",
     "items": [
      "Que el Notario ha examinado el documento que se protocoliza",
      "La declaración de voluntad del requirente o el cumplimiento de la resolución que ordena protocolizar",
      "Que el expediente queda unido al protocolo, con el número de folios que contiene"
     ]
    },
    {
     "tipo": "nota",
     "texto": "El art. 80.1 a) RH admite como título tanto la escritura como el acta de protocolización de operaciones particionales."
    },
    {
     "tipo": "nota",
     "texto": "Aclaración: la protocolización mediante acta asegura la identidad de los documentos públicos y su existencia respecto de tercero en la fecha de la protocolización (art. 214 RN). Sobre la fuerza ejecutiva: el art. 517.2.4.º LEC la da a la copia de la escritura pública matriz que se solicite con tal carácter, y la LEC no prevé nada específico para esta acta; lo adjudicado se lleva a efecto por el art. 788 LEC."
    },
    {
     "tipo": "ley",
     "texto": "Arts. 211, 213 y 214 RN · Art. 80.1 a) RH · Art. 517.2.4.º LEC"
    }
   ],
   "siguiente": "p6_titulo_testimonios"
  },
  "p6_titulo_testimonios": {
   "fase": 6,
   "titulo": "Título inscribible y testimonios (art. 788.2 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Una vez protocolizadas las operaciones, el LAJ da a los partícipes que lo pidan testimonio de su haber y adjudicación (art. 788.2 LEC)."
    },
    {
     "tipo": "info",
     "texto": "Lo protocolizado es el título para inscribir (art. 80.1 a) RH). El registrador lo califica como documento judicial: competencia, congruencia, formalidades extrínsecas y obstáculos del Registro, sin entrar en el fondo (art. 100 RH; Resolución de la Dirección General de Seguridad Jurídica y Fe Pública de 14 de junio de 2023)."
    },
    {
     "tipo": "nota",
     "texto": "Para inscribir hay que acreditar el pago de los impuestos que devengue (art. 254.1 LH), y tienen que constar los números de identificación fiscal de los interesados, también en un título judicial (art. 254.2 LH; Resolución de la Dirección General de Seguridad Jurídica y Fe Pública de 14 de mayo de 2025)."
    },
    {
     "tipo": "nota",
     "texto": "La partición legalmente hecha ya confiere a cada heredero la propiedad exclusiva de lo adjudicado (art. 1068 CC); la protocolización aporta el título público que exige el Registro (art. 3 LH)."
    },
    {
     "tipo": "nota",
     "texto": "Aclaración: el testimonio de haber y adjudicación lo da el LAJ (art. 788.2 LEC). Las copias del acta las expide el Notario que tiene el protocolo (art. 222 RN)."
    },
    {
     "tipo": "nota",
     "texto": "Aclaración: el valor que figura en el cuaderno no tiene por qué ser el que se tome para el impuesto de Sucesiones y Donaciones. Es materia tributaria, ajena a este trámite: conviene comprobarlo aparte."
    },
    {
     "tipo": "ley",
     "texto": "Art. 788.2 LEC · Art. 80.1 a) RH · Art. 100 RH · Arts. 3 y 254 LH · Art. 1068 CC · Art. 222 RN"
    }
   ],
   "siguiente": "p6_acreedores"
  },
  "p6_acreedores": {
   "fase": 6,
   "titulo": "Antes de entregar: acreedores (art. 788.3 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si algún acreedor formuló la oposición del art. 782.4 LEC, no se entregan los bienes a ningún heredero ni legatario sin que esté completamente pagado o garantizado a su satisfacción."
    },
    {
     "tipo": "nota",
     "texto": "Posible vía de actuación: comprobar si hay oposición de acreedores antes de protocolizar. El art. 788.3 LEC solo detiene la entrega, pero el art. 782.4 LEC habla de oponerse a que se lleve a efecto la partición, y la petición cabe hasta la entrega de los bienes."
    }
   ],
   "pregunta": "¿Hay oposición de acreedores pendiente?",
   "opciones": [
    {
     "texto": "No",
     "tono": "t-ok",
     "destino": "p6_notas"
    },
    {
     "texto": "Sí",
     "tono": "t-aviso",
     "destino": "p6_pago"
    }
   ]
  },
  "p6_pago": {
   "fase": 6,
   "titulo": "Pago o garantía a los acreedores",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Hasta que estén completamente pagados o garantizados a su satisfacción no se hace la entrega (art. 788.3 LEC; art. 1082 CC)."
    }
   ],
   "pregunta": "¿Quedan pagados o garantizados?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p6_notas"
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
   "titulo": "Entrega en suspenso por los acreedores",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "No se entregan los bienes mientras los acreedores opositores no estén pagados o garantizados (art. 788.3 LEC). Los interesados pueden llegar a un acuerdo con ellos o separarse del procedimiento (art. 789 LEC)."
    }
   ],
   "fin": "warning"
  },
  "p6_notas": {
   "fase": 6,
   "titulo": "Notas en los títulos (art. 788.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El actuario pone en los títulos de propiedad notas expresivas de la adjudicación."
    }
   ],
   "siguiente": "p6_entrega"
  },
  "p6_entrega": {
   "fase": 6,
   "titulo": "Entrega de los bienes (art. 788.1 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El LAJ entrega a cada interesado lo que se le ha adjudicado y los títulos de propiedad."
    },
    {
     "tipo": "nota",
     "texto": "Hecha la partición, los coherederos se deben recíprocamente evicción y saneamiento (art. 1069 CC), y los acreedores pueden exigir el pago a cualquiera de los herederos en los términos del art. 1084 CC. La partición legalmente hecha confiere a cada heredero la propiedad exclusiva de lo adjudicado (art. 1068 CC)."
    },
    {
     "tipo": "nota",
     "texto": "Aclaración: esta guía entrega los bienes después de protocolizar, y es una forma ordenada de hacerlo. El art. 788.1 LEC liga la entrega a que las particiones estén aprobadas definitivamente, no a la protocolización."
    }
   ],
   "siguiente": "fin_exitoso"
  },
  "fin_exitoso": {
   "fase": 6,
   "titulo": "Procedimiento terminado",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Entregados los bienes adjudicados y expedidos los testimonios pedidos, el procedimiento termina."
    }
   ],
   "fin": "success"
  },
  "fin_acuerdo_coherederos": {
   "fase": 6,
   "titulo": "Sobreseimiento por acuerdo (art. 789 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Pedido de común acuerdo por todos los interesados, el LAJ sobresee el juicio y pone los bienes a disposición de los herederos."
    },
    {
     "tipo": "aviso",
     "texto": "La resolución que sobresee no es directamente inscribible, porque no resuelve sobre el fondo: para inscribir, hay que elevar el acuerdo a público (Resolución de la Dirección General de Seguridad Jurídica y Fe Pública de 2 de marzo de 2022)."
    }
   ],
   "fin": "neutral"
  },
  "p0_subsanar_masc": {
   "fase": 0,
   "titulo": "Subsanación del defecto en la justificación (art. 231 LEC)",
   "actor": "laj",
   "bloques": [
    {
     "tipo": "info",
     "texto": "El Tribunal y el Letrado de la Administración de Justicia cuidarán de que puedan subsanarse los defectos de los actos procesales de las partes (art. 231 LEC). Si el defecto no se subsana en el plazo que conceda el Letrado de la Administración de Justicia, este da cuenta al Tribunal para que resuelva sobre la admisión (art. 404.2 LEC)."
    },
    {
     "tipo": "nota",
     "texto": "Si no se acompaña el documento exigido, no se admite (art. 403.2 LEC). A título orientativo y no vinculante, los acuerdos de la Audiencia Provincial de Madrid de 6-11-2025 (III.6) consideran subsanables, antes de admitir, los defectos formales de esta justificación."
    }
   ],
   "pregunta": "¿Se subsana el defecto?",
   "opciones": [
    {
     "texto": "Sí",
     "tono": "t-ok",
     "destino": "p0_legitimacion"
    },
    {
     "texto": "No",
     "tono": "t-aviso",
     "destino": "fin_masc_no_subsanado"
    }
   ]
  },
  "fin_masc_no_subsanado": {
   "fase": 0,
   "titulo": "Inadmisión: defecto de la justificación no subsanado",
   "actor": "ambos",
   "bloques": [
    {
     "tipo": "info",
     "texto": "Si el defecto formal no se subsana en el plazo concedido, el Letrado de la Administración de Justicia da cuenta al Tribunal para que resuelva sobre la admisión (art. 404.2 LEC)."
    }
   ],
   "fin": "error"
  }
 },
 "pie": "Arts. 782–789 LEC (división) · Arts. 792–796 LEC (intervención del caudal)<br>Art. 52.1.4.º LEC (competencia) · Arts. 264.4.º, 403.2 y 404.2 LEC y arts. 5 y 7 LO 1/2025 (actividad negociadora previa)<br>Arts. 1056–1069 y 1082–1084 CC"
});

export const policies = {
 "ambiental": [
  {
   "t": "Infraestructura y alojamiento verde (green hosting)",
   "d": "Alojamos todas las aplicaciones web y móviles que desarrollamos en proveedores de hosting que utilizan energías 100 % renovables, como la solar, y cuentan con certificaciones de gestión ambiental verificables como la ISO 14001. Antes de contratar comprobamos que el proveedor figura como verde en el registro de la Green Web Foundation, elegimos centros de datos con un PUE (eficiencia energética) bajo y dimensionamos cada servidor a su carga real para no mantener máquinas sobredimensionadas encendidas."
  },
  {
   "t": "Desarrollo bajo el principio de Sustainability by Design",
   "d": "Aplicamos buenas prácticas de optimización de código y arquitectura limpia en el desarrollo de software y aplicaciones móviles, reduciendo peticiones innecesarias a los servidores y minimizando el consumo de energía y procesamiento de los dispositivos de los usuarios finales."
  },
  {
   "t": "Gestión de residuos electrónicos y ciclo de vida de equipos (3R)",
   "d": "Priorizamos la reparación y reutilización del hardware de la empresa y enviamos los componentes electrónicos en desuso a gestores autorizados para su correcto reciclaje, cumpliendo la regla de las 3R: Reducir, Reutilizar y Reciclar."
  },
  {
   "t": "Criterios de compra sostenible a proveedores",
   "d": "Exigimos criterios ambientales a nuestros proveedores de hardware y servicios cloud, valorando la certificación ISO 14001, la cercanía geográfica y la reducción de embalajes."
  },
  {
   "t": "Oficina digital y consumo cero de papel",
   "d": "Gestionamos de forma 100 % digital contratos, presupuestos y facturación, eliminando el uso de papel en nuestras operaciones diarias."
  }
 ],
 "social": [
  {
   "t": "Accesibilidad web universal como estándar",
   "d": "Todas las páginas web y apps que desarrollamos para nuestros clientes cumplen las pautas de accesibilidad WCAG (Nivel AA), para que las personas con diversidad funcional o limitaciones sensoriales puedan navegar en igualdad de condiciones."
  },
  {
   "t": "Formación continua y capacitación del equipo",
   "d": "Invertimos en el desarrollo del talento técnico interno en nuevas tecnologías, diseño de interfaz y ciberseguridad, asegurando un entorno de aprendizaje permanente."
  },
  {
   "t": "Condiciones laborales dignas, conciliación e igualdad",
   "d": "Promovemos la igualdad de oportunidades y la no discriminación en la contratación, y facilitamos el teletrabajo flexible y medidas de conciliación laboral y personal."
  },
  {
   "t": "Salud, seguridad y bienestar postural",
   "d": "Aplicamos medidas preventivas para el bienestar del equipo, con equipamiento ergonómico y pautas de descanso visual frente a las pantallas."
  },
  {
   "t": "Acompañamiento digital y autonomía del cliente",
   "d": "Formamos a las pymes y negocios clientes para que gestionen sus plataformas con total autonomía una vez entregadas, evitando la dependencia tecnológica artificial."
  }
 ],
 "gobernanza": [
  {
   "t": "Confidencialidad y ciberseguridad (RGPD)",
   "d": "Garantizamos la confidencialidad, integridad y disponibilidad de los datos de nuestros clientes y de sus usuarios, cumpliendo rigurosamente el RGPD y estándares de seguridad de la información como la norma ISO 27001."
  },
  {
   "t": "Propiedad intelectual y software legítimo",
   "d": "Desarrollamos todos los proyectos con licencias oficiales de software o tecnologías de código abierto (open source), protegiendo la propiedad intelectual propia y de terceros."
  },
  {
   "t": "Transparencia contractual y presupuestaria",
   "d": "Presentamos presupuestos claros, sin letra pequeña, desglosando costes y asegurando la propiedad total del código y los datos por parte del cliente (soberanía digital)."
  },
  {
   "t": "Código ético y tolerancia cero ante malas prácticas",
   "d": "Nuestro código de conducta prohíbe expresamente cualquier práctica corrupta o conflicto de intereses, y rechazamos proyectos o clientes que promuevan actividades abusivas o contrarias a los derechos humanos."
  },
  {
   "t": "Canal ético y rendición de cuentas",
   "d": "Disponemos de un canal transparente de contacto para resolver incidencias de privacidad o incumplimientos éticos comunicados por trabajadores, proveedores o clientes."
  }
 ]
}

export const odsRows = [
 {
  "dim": "Ambiental (A)",
  "title": "Servidores y alojamiento verde (green hosting)",
  "desc": "alojar las aplicaciones web y móviles en proveedores de hosting que utilicen energías 100 % renovables y cuenten con certificación ISO 14001, verificados en la Green Web Foundation y con servidores dimensionados a su carga real.",
  "ods": [
   {
    "n": "ODS 7",
    "name": "Energía asequible y no contaminante"
   },
   {
    "n": "ODS 13",
    "name": "Acción por el clima"
   }
  ],
  "why": "Favorece la transición hacia energías limpias en centros de datos e infraestructura digital, reduciendo la huella de carbono asociada al tráfico web y al consumo eléctrico continuo."
 },
 {
  "dim": "Ambiental (A)",
  "title": "Desarrollo Sustainability by Design",
  "desc": "optimización de código y arquitectura limpia para minimizar peticiones al servidor y consumo de procesamiento.",
  "ods": [
   {
    "n": "ODS 12",
    "name": "Producción y consumo responsables"
   },
   {
    "n": "ODS 13",
    "name": "Acción por el clima"
   }
  ],
  "why": "Reduce el uso ineficiente de recursos de CPU y batería en los dispositivos móviles y ordenadores de los usuarios finales, extendiendo la vida útil del hardware y disminuyendo emisiones indirectas."
 },
 {
  "dim": "Ambiental (A)",
  "title": "Gestión de residuos (3R) y compras responsables",
  "desc": "reutilización y reciclaje de equipos informáticos con gestores autorizados y selección de proveedores con baja huella de carbono.",
  "ods": [
   {
    "n": "ODS 12",
    "name": "Producción y consumo responsables"
   }
  ],
  "why": "Disminuye la generación de residuos electrónicos (e-waste) mediante el principio de Reducir, Reutilizar y Reciclar, exigiendo también embalajes sostenibles a proveedores informáticos."
 },
 {
  "dim": "Social (S)",
  "title": "Accesibilidad web universal",
  "desc": "garantizar que todas las webs y aplicaciones desarrolladas cumplan los estándares WCAG Nivel AA.",
  "ods": [
   {
    "n": "ODS 10",
    "name": "Reducción de las desigualdades"
   }
  ],
  "why": "Elimina las barreras digitales para personas con discapacidad o diversidad funcional sensorial y cognitiva, garantizando el acceso equitativo a los servicios en línea."
 },
 {
  "dim": "Social (S)",
  "title": "Condiciones laborales dignas y bienestar",
  "desc": "facilitar teletrabajo flexible, conciliación familiar y medidas ergonómicas de descanso visual y postural.",
  "ods": [
   {
    "n": "ODS 3",
    "name": "Salud y bienestar"
   },
   {
    "n": "ODS 8",
    "name": "Trabajo decente y crecimiento económico"
   }
  ],
  "why": "Asegura un entorno laboral seguro, saludable y motivador para el equipo de desarrollo, reduciendo la fatiga digital y previniendo enfermedades profesionales."
 },
 {
  "dim": "Social (S)",
  "title": "Capacitación y autonomía del cliente",
  "desc": "formar al cliente en la gestión de su plataforma y ofrecer formación continua al equipo en nuevas tecnologías.",
  "ods": [
   {
    "n": "ODS 4",
    "name": "Educación de calidad"
   },
   {
    "n": "ODS 9",
    "name": "Industria, innovación e infraestructura"
   }
  ],
  "why": "Promueve la alfabetización digital de las pymes clientes evitando la dependencia tecnológica artificial, al tiempo que desarrolla el talento técnico interno."
 },
 {
  "dim": "Gobernanza (G)",
  "title": "Confidencialidad y ciberseguridad",
  "desc": "garantizar la privacidad y la protección de datos bajo el RGPD e ISO 27001.",
  "ods": [
   {
    "n": "ODS 16",
    "name": "Paz, justicia e instituciones sólidas"
   }
  ],
  "why": "Protege la soberanía digital de los clientes y la intimidad de los usuarios finales contra ciberamenazas, construyendo relaciones de confianza sobre una base legal sólida."
 },
 {
  "dim": "Gobernanza (G)",
  "title": "Transparencia y propiedad total del código",
  "desc": "elaborar presupuestos detallados sin letra pequeña y entregar la propiedad intelectual íntegra de la web o app al cliente.",
  "ods": [
   {
    "n": "ODS 9",
    "name": "Industria, innovación e infraestructura"
   },
   {
    "n": "ODS 16",
    "name": "Paz, justicia e instituciones sólidas"
   }
  ],
  "why": "Elimina prácticas desleales, garantizando contratos éticos, costes transparentes y el pleno control de la infraestructura y del código por parte del cliente."
 },
 {
  "dim": "Gobernanza (G)",
  "title": "Código ético y tolerancia cero al fraude",
  "desc": "rechazar proyectos que promuevan actividades abusivas, uso exclusivo de software legítimo y canal ético.",
  "ods": [
   {
    "n": "ODS 16",
    "name": "Paz, justicia e instituciones sólidas"
   }
  ],
  "why": "Garantiza la integridad profesional de la empresa, evitando conflictos de interés y previniendo la corrupción en la contratación de servicios tecnológicos."
 }
]

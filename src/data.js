export const policies = {
  ambiental: [
    {
      t: 'Alojamiento con energías renovables',
      d: 'Nos comprometemos a alojar todas las aplicaciones web y móviles desarrolladas en proveedores de hosting que utilicen energías 100% renovables y cuenten con certificaciones de gestión ambiental verificables.',
    },
    {
      t: 'Código y arquitectura eficientes',
      d: 'Aplicamos buenas prácticas de optimización de código y arquitectura limpia en el desarrollo de software y aplicaciones móviles, reduciendo peticiones innecesarias a servidores y minimizando el consumo de energía y procesamiento de los dispositivos de los usuarios finales.',
    },
    {
      t: 'Reparación, reutilización y reciclaje',
      d: 'Priorizamos la reparación y reutilización del hardware de la empresa y enviamos los componentes electrónicos en desuso a agentes autorizados para su reciclaje.',
    },
    {
      t: 'Criterios ambientales a proveedores',
      d: 'Exigimos criterios ambientales a nuestros proveedores de hardware y servicios en la nube, valorando certificaciones, cercanía y reducción de embalaje.',
    },
    {
      t: 'Gestión digital sin papel',
      d: 'Implementamos una gestión total digital de contratos, presupuestos y facturación, eliminando el uso de papel en operaciones innecesarias.',
    },
  ],
  social: [
    {
      t: 'Accesibilidad WCAG',
      d: 'Nos comprometemos a que todo el software desarrollado para nuestros clientes cumpla con las condiciones de accesibilidad WCAG, para garantizar el acceso a personas con diversidad funcional o limitaciones sensoriales, haciendo posible el uso en igualdad de condiciones.',
    },
    {
      t: 'Desarrollo del talento interno',
      d: 'Invertimos en el desarrollo del talento técnico interno en nuevas tecnologías, diseño de interfaz y ciberseguridad, asegurando un entorno de aprendizaje constante.',
    },
    {
      t: 'Igualdad, teletrabajo y conciliación',
      d: 'Promovemos la igualdad de oportunidades y la no discriminación en la contratación, facilitando el teletrabajo flexible e implantando medidas de conciliación laboral y personal.',
    },
    {
      t: 'Bienestar y ergonomía del equipo',
      d: 'Implementamos medidas preventivas para el bienestar del equipo, asegurando equipamiento ergonómico y descanso visual frente a las pantallas y luces.',
    },
    {
      t: 'Autonomía digital del cliente',
      d: 'Formaremos a empresas menores para que puedan gestionar sus plataformas con total autonomía una vez entregado el proyecto, así evitando la dependencia tecnológica a aquellos que la desconocen.',
    },
  ],
  gobernanza: [
    {
      t: 'Privacidad y seguridad de datos',
      d: 'Garantizamos la confidencialidad, integridad y disponibilidad de los datos de nuestros clientes y de sus usuarios, cumpliendo con el RGPD y estándares de seguridad de la información.',
    },
    {
      t: 'Licencias y propiedad intelectual',
      d: 'Desarrollamos todos los proyectos utilizando licencias oficiales de software o tecnologías de código abierto, protegiendo la propiedad intelectual propia y de terceros.',
    },
    {
      t: 'Presupuestos claros y sin letra pequeña',
      d: 'Presentamos presupuestos claros, sin letra pequeña, desglosando costes y asegurando la propiedad total del código y los datos por parte del cliente.',
    },
    {
      t: 'Código de conducta ética',
      d: 'Adoptamos un código de conducta ética que prohíba cualquier práctica corrupta o conflicto de intereses, rechazando proyectos y clientes que promuevan actividades abusivas y contrarias a los derechos humanos.',
    },
    {
      t: 'Canal transparente de contacto',
      d: 'Trabajamos con un canal transparente de contacto con el fin de resolver incidencias de privacidad o incumplimientos éticos por parte de trabajadores, proveedores o clientes.',
    },
  ],
}

export const odsRows = [
  {
    dim: 'Ambiental',
    title: 'Utilizar proveedores que trabajen con energías renovables',
    desc: '',
    ods: [
      { n: 'ODS 7', name: 'Energía asequible y no contaminante' },
      { n: 'ODS 13', name: 'Acción por el clima' },
    ],
    why: 'Favorecemos la reducción de la huella de carbono asociada al consumo web.',
  },
  {
    dim: 'Ambiental',
    title: 'Optimizar el código para reducir peticiones a los servidores',
    desc: '',
    ods: [
      { n: 'ODS 12', name: 'Producción y consumo responsables' },
      { n: 'ODS 13', name: 'Acción por el clima' },
    ],
    why: 'Reducimos el uso ineficiente de recursos en las APIs.',
  },
  {
    dim: 'Ambiental',
    title: 'Reutilizar y reciclar equipos informáticos con agentes autorizados',
    desc: '',
    ods: [
      { n: 'ODS 12', name: 'Producción y consumo responsables' },
    ],
    why: 'Disminuimos la generación de residuos electrónicos.',
  },
  {
    dim: 'Social',
    title: 'Garantizar que las apps y webs cumplan estándares WCAG',
    desc: '',
    ods: [
      { n: 'ODS 10', name: 'Reducción de desigualdades' },
    ],
    why: 'Eliminamos las barreras digitales para garantizar acceso equitativo.',
  },
  {
    dim: 'Social',
    title: 'Facilitar teletrabajo flexible, conciliación familiar y medidas ergonómicas',
    desc: '',
    ods: [
      { n: 'ODS 3', name: 'Salud y Bienestar' },
      { n: 'ODS 8', name: 'Trabajo decente y crecimiento económico' },
    ],
    why: 'Aseguramos un entorno laboral seguro y motivador.',
  },
  {
    dim: 'Social',
    title: 'Formar al cliente en la gestión de su plataforma de manera continua',
    desc: '',
    ods: [
      { n: 'ODS 4', name: 'Educación de calidad' },
    ],
    why: 'Promovemos la formación digital evitando así la dependencia tecnológica.',
  },
  {
    dim: 'Gobernanza',
    title: 'Garantizar la privacidad y la protección de datos bajo el RGPD e ISO 27001',
    desc: '',
    ods: [
      { n: 'ODS 16', name: 'Paz, justicia e instituciones sólidas' },
    ],
    why: 'Protegemos a nuestros clientes contra amenazas.',
  },
  {
    dim: 'Gobernanza',
    title: 'Elaborar presupuestos sin letra pequeña y detallados',
    desc: '',
    ods: [
      { n: 'ODS 9', name: 'Industria, innovación e infraestructura' },
    ],
    why: 'Eliminamos prácticas desleales, garantizando contratos éticos.',
  },
  {
    dim: 'Gobernanza',
    title: 'Rechazar proyectos que promuevan actividades abusivas',
    desc: '',
    ods: [
      { n: 'ODS 16', name: 'Paz, justicia e instituciones sólidas' },
    ],
    why: 'Garantizamos integridad profesional en la empresa para evitar así conflictos de intereses.',
  },
]

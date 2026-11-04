import GradientBars from '../components/GradientBars.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import AsciiCard from '../components/AsciiCard.jsx'
import ContactForm from '../components/ContactForm.jsx'
import CopyEmail from '../components/CopyEmail.jsx'
import { Monitor, Phone, Sparkles, Search, Pencil, Code, Bulb, Heart, Users, ShieldCheck, Globe } from '../icons.jsx'


const services = [
  { icon: Monitor, bg: '#2345e0', fg: '#8fa2ff', ink: '#fff', label: 'FAIR STUDIO · WEB', t: 'Diseño y desarrollo web', d: 'Webs corporativas, tiendas online y plataformas a medida, accesibles y pensadas para cualquier dispositivo.' },
  { icon: Phone, bg: '#ff9dc5', fg: '#fbf0ee', ink: '#0d0d12', label: 'FAIR STUDIO · APPS', t: 'Aplicaciones móviles', d: 'Apps para iOS y Android que acercan los servicios de cada empresa a sus clientes.' },
  { icon: Sparkles, bg: '#000', fg: '#2345e0', ink: '#fbf0ee', label: 'FAIR STUDIO · DIGITAL', t: 'Digitalización y acompañamiento', d: 'Estrategia digital, mantenimiento y formación para que cada cliente sea autónomo con su plataforma.' },
]
const steps = [
  { icon: Search, t: 'Descubrimiento', d: 'Escuchamos tu negocio, tus clientes y tus objetivos antes de escribir una sola línea.' },
  { icon: Pencil, t: 'Diseño', d: 'Prototipos claros y accesibles (WCAG AA) que validamos contigo.' },
  { icon: Code, t: 'Desarrollo', d: 'Código limpio y eficiente, alojado en infraestructura con energía renovable.' },
  { icon: Bulb, t: 'Lanzamiento y formación', d: 'Te entregamos el código y te enseñamos a gestionarlo con total autonomía.' },
]
const green = [
  { k: '01', t: 'Energía renovable', d: 'Alojamos las apps en centros de datos que funcionan con energía 100 % renovable.' },
  { k: '02', t: 'Eficiencia PUE', d: 'Elegimos centros de datos con un PUE bajo: más energía para los servidores y menos para refrigeración.' },
  { k: '03', t: 'Proveedores verificados', d: 'Comprobamos cada proveedor en el registro de la Green Web Foundation antes de contratarlo.' },
  { k: '04', t: 'Servidores a medida', d: 'Dimensionamos cada servidor a su carga real (right-sizing) y apagamos lo que no se usa.' },
  { k: '05', t: 'CDN y caché', d: 'Servimos el contenido desde el punto más cercano y cacheamos para evitar peticiones repetidas.' },
  { k: '06', t: 'Imágenes eficientes', d: 'Formatos modernos (AVIF, WebP), tamaños adaptados y carga diferida.' },
  { k: '07', t: 'Despliegues carbon-aware', d: 'Programamos builds y tareas pesadas en las horas en que la red eléctrica es más limpia.' },
  { k: '08', t: 'Medimos la huella', d: 'Analizamos cada web con herramientas como Website Carbon y compartimos el resultado con el cliente.' },
]
const values = [
  { icon: Globe, t: 'Responsabilidad', d: 'Medimos el impacto ambiental de lo que desarrollamos.' },
  { icon: Users, t: 'Inclusión', d: 'Una web solo es buena si todo el mundo puede usarla.' },
  { icon: ShieldCheck, t: 'Transparencia', d: 'Precios claros y código que es del cliente.' },
  { icon: Heart, t: 'Cuidado', d: 'Un equipo sano y formado hace un trabajo mejor.' },
]

export default function Home() {
  return (
    <>
      <section className="hero" id="inicio">
        <GradientBars />
        <div className="wrap hero-inner">
          <p style={{ "--d": 1 }} className="enter badge"><span className="dot" /> Estudio de diseño y desarrollo digital</p>
          <h1 style={{ "--d": 2 }} className="enter">Presencia digital<br />hecha <em>con justicia</em>.</h1>
          <p style={{ "--d": 3 }} className="enter hero-lead">
            Diseñamos y desarrollamos páginas web y aplicaciones móviles para empresas que todavía no tienen presencia digital o que quieren llevarla al siguiente nivel.
          </p>
          <div style={{ "--d": 4 }} className="enter hero-actions">
            <Button to="/?s=contacto" arrow>Empezar un proyecto</Button>
            <Button to="/?s=servicios" variant="ghost">Ver servicios</Button>
          </div>
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Servicios</p>
            <h2>Todo lo que tu empresa necesita para estar <em>en digital</em>.</h2>
          </Reveal>
          <div className="grid g3 acards">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06}>
                <AsciiCard bg={s.bg} fg={s.fg} ink={s.ink} label={s.label} Icon={s.icon} title={s.t} text={s.d} seed={i * 2.3 + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="proceso">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Proceso</p>
            <h2>De la primera idea a una plataforma <em>que es tuya</em>.</h2>
          </Reveal>
          <ol className="steps">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 0.06}>
                <span className="step-n">0{i + 1}</span>
                <span className="card-icon"><s.icon /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="nosotros">
        <div className="wrap about">
          <Reveal>
            <p className="eyebrow">Nosotros</p>
            <h2>Un estudio joven con <em>compromiso</em>.</h2>
            <p className="lead">Somos un estudio joven del sector del desarrollo web. Acompañamos a pymes, comercios y profesionales en su digitalización: desde la primera idea hasta una plataforma que puedan gestionar por sí mismos.</p>
            <p className="lead">Situamos la sostenibilidad en el centro porque todo lo que construimos queda en marcha durante años, en servidores y en los dispositivos de miles de usuarios.</p>
          </Reveal>
          <Reveal delay={0.08} className="mission">
            <p className="eyebrow">Nuestra misión</p>
            <blockquote>Llevar a cada empresa al mundo digital de forma justa: con tecnología que respeta el planeta, que es accesible para todas las personas y que pertenece por completo a quien la encarga.</blockquote>
          </Reveal>
        </div>
        <div className="wrap grid g4 values">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.05} className="value">
              <v.icon className="value-icon" />
              <strong>{v.t}</strong>
              <span>{v.d}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt" id="green-hosting">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Alojamiento sostenible · Green hosting</p>
            <h2>Tu web, alojada <em>de forma sostenible</em>.</h2>
            <p className="lead">Una aplicación consume energía cada segundo que está en línea. Por eso cuidamos dónde y cómo se aloja tanto como el código que escribimos.</p>
          </Reveal>
          <div className="grid g4 green">
            {green.map((g, i) => (
              <Reveal key={g.k} delay={(i % 4) * 0.05} className="green-item">
                <span className="green-k">{g.k}</span>
                <strong>{g.t}</strong>
                <span>{g.d}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="compromiso">
        <div className="wrap">
          <Reveal className="asg-banner">
            <div>
              <p className="eyebrow">Política ASG</p>
              <h2>Ambiental, Social y Gobernanza: <em>15 compromisos</em> alineados con los ODS.</h2>
            </div>
            <Button to="/politicas" variant="light" arrow>Ver nuestras políticas</Button>
          </Reveal>
        </div>
      </section>

      <section className="section cta" id="contacto">
        <GradientBars />
        <div className="wrap cta-grid">
          <Reveal className="cta-inner">
            <p className="eyebrow eyebrow-light">Contacto</p>
            <h2>¿Hablamos de <em>tu proyecto</em>?</h2>
            <p>Escríbenos y te respondemos en menos de 48 horas con una propuesta clara, sin letra pequeña.</p>
            <CopyEmail tone="light" />
          </Reveal>
          <Reveal delay={0.08}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  )
}

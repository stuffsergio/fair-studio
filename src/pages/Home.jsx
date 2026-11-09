import GradientBars from '../components/GradientBars.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import AsciiCard from '../components/AsciiCard.jsx'
import ContactForm from '../components/ContactForm.jsx'
import CopyEmail from '../components/CopyEmail.jsx'
import { Monitor, Phone, Sparkles, Search, Pencil, Code, Bulb, Heart, Users, ShieldCheck, Globe } from '../icons.jsx'


const services = [
  { icon: Monitor, bg: '#2345e0', fg: '#8fa2ff', ink: '#fff', label: 'FAIR STUDIO · A MEDIDA', t: 'Diseño y desarrollo a medida', d: 'Trabajamos mano a mano con el cliente para crear sitios web corporativos, porfolios, tiendas online y aplicaciones móviles enfocados en la experiencia de usuario (UX/UI) y la identidad visual de la marca.' },
  { icon: Phone, bg: '#ff9dc5', fg: '#fbf0ee', ink: '#0d0d12', label: 'FAIR STUDIO · SOPORTE', t: 'Mantenimiento y soporte informático', d: 'Realizamos un servicio continuo de optimización, actualización y gestión de servidores para nuestros clientes.' },
  { icon: Sparkles, bg: '#000', fg: '#2345e0', ink: '#fbf0ee', label: 'FAIR STUDIO · CONSULTORÍA', t: 'Consultoría de digitalización', d: 'Acompañamos a pequeñas y medianas empresas en la integración estratégica de herramientas digitales eficaces.' },
]
const steps = [
  { icon: Search, t: 'Descubrimiento', d: 'Escuchamos al cliente y su negocio para entender qué necesita digitalizar.' },
  { icon: Pencil, t: 'Diseño a medida', d: 'Definimos la experiencia de usuario y la identidad visual de la marca.' },
  { icon: Code, t: 'Desarrollo y soporte', d: 'Construimos la solución y ofrecemos mantenimiento continuo de servidores.' },
  { icon: Bulb, t: 'Autonomía del cliente', d: 'Formamos al cliente para que gestione su plataforma con total autonomía.' },
]
const green = [
  { k: '01', t: 'Energías 100% renovables', d: 'Alojamos todas las aplicaciones web y móviles desarrolladas en proveedores de hosting que utilicen energías 100% renovables.' },
  { k: '02', t: 'Certificaciones verificables', d: 'Exigimos que esos proveedores cuenten con certificaciones de gestión ambiental verificables.' },
]
const values = [
  { icon: Globe, t: 'Eficiencia y responsabilidad ambiental', d: 'Integramos compromisos ambientales en nuestra cadena de operaciones.' },
  { icon: Users, t: 'Inclusión digital', d: 'Trabajamos para que la tecnología sea accesible y no genere dependencia.' },
  { icon: ShieldCheck, t: 'Transparencia profesional', d: 'Presupuestos claros, sin letra pequeña, y propiedad del código para el cliente.' },
  { icon: Heart, t: 'Innovación con propósito', d: 'Soluciones innovadoras y de alta calidad con impacto ético, ambiental y social positivo.' },
]

export default function Home() {
  return (
    <>
      <section className="hero" id="inicio">
        <GradientBars />
        <div className="wrap hero-inner">
          <p style={{ "--d": 1 }} className="enter badge"><span className="dot" /> Agencia tecnológica · Fair Studio</p>
          <h1 style={{ "--d": 2 }} className="enter">Desarrollo y<br />digitalización <em>empresarial</em>.</h1>
          <p style={{ "--d": 3 }} className="enter hero-lead">
            Fair Studio es una agencia tecnológica especializada en el desarrollo y digitalización empresarial, dedicada al diseño, desarrollo y mantenimiento de páginas webs corporativas, plataformas e-commerce y aplicaciones móviles para empresas y pymes que buscan elevar o consolidar su presencia digital.
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
            <h2>Lo que ofrecemos a empresas y <em>pymes</em>.</h2>
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
            <h2>Fair Studio: crecimiento digital con <em>compromiso</em>.</h2>
            <p className="lead">Somos una agencia tecnológica especializada en el desarrollo y digitalización empresarial. Trabajamos con empresas y pymes que buscan elevar o consolidar su presencia digital mediante webs corporativas, plataformas e-commerce y aplicaciones móviles.</p>
          </Reveal>
          <Reveal delay={0.08} className="mission">
            <p className="eyebrow">Nuestra misión</p>
            <blockquote>Nuestra misión es impulsar el crecimiento digital de nuestros clientes mediante soluciones innovadoras y de alta calidad, integrando en nuestra cadena de operaciones compromisos éticos, ambientales y sociales que aseguren un impacto positivo.</blockquote>
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
            <p className="eyebrow">Política Ambiental · Alojamiento</p>
            <h2>Hosting con energías <em>renovables</em>.</h2>
            <p className="lead">Nos comprometemos a alojar todas las aplicaciones web y móviles desarrolladas en proveedores de hosting que utilicen energías 100% renovables y cuenten con certificaciones de gestión ambiental verificables.</p>
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
            <p>Escríbenos con una propuesta clara, sin letra pequeña, desglosando costes.</p>
            <CopyEmail tone="light" />
          </Reveal>
          <Reveal delay={0.08}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  )
}

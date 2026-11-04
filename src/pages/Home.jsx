import GradientBars from '../components/GradientBars.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { Monitor, Phone, Sparkles, Search, Pencil, Code, Bulb, Heart, Users, ShieldCheck, Globe } from '../icons.jsx'


const services = [
  { icon: Monitor, t: 'Diseño y desarrollo web', d: 'Webs corporativas, tiendas online y plataformas a medida, accesibles y pensadas para cualquier dispositivo.' },
  { icon: Phone, t: 'Aplicaciones móviles', d: 'Apps para iOS y Android que acercan los servicios de cada empresa a sus clientes.' },
  { icon: Sparkles, t: 'Digitalización y acompañamiento', d: 'Estrategia digital, mantenimiento y formación para que cada cliente sea autónomo con su plataforma.' },
]
const steps = [
  { icon: Search, t: 'Descubrimiento', d: 'Escuchamos tu negocio, tus clientes y tus objetivos antes de escribir una sola línea.' },
  { icon: Pencil, t: 'Diseño', d: 'Prototipos claros y accesibles (WCAG AA) que validamos contigo.' },
  { icon: Code, t: 'Desarrollo', d: 'Código limpio y eficiente, alojado en infraestructura con energía renovable.' },
  { icon: Bulb, t: 'Lanzamiento y formación', d: 'Te entregamos el código y te enseñamos a gestionarlo con total autonomía.' },
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
          <div className="grid g3">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06} className="card">
                <span className="card-icon"><s.icon /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
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
        <Reveal className="wrap cta-inner">
          <h2>¿Hablamos de <em>tu proyecto</em>?</h2>
          <p>Escríbenos y te respondemos en menos de 48 horas con una propuesta clara, sin letra pequeña.</p>
          <Button href="mailto:hola@fairstudio.example" arrow>hola@fairstudio.example</Button>
        </Reveal>
      </section>
    </>
  )
}

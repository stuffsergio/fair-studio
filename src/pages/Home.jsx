import GradientBars from '../components/GradientBars.jsx'
import Reveal from '../components/Reveal.jsx'
import AsciiCard from '../components/AsciiCard.jsx'
import ContactForm from '../components/ContactForm.jsx'
import CopyEmail from '../components/CopyEmail.jsx'
import { Monitor, Phone, Sparkles } from '../icons.jsx'
import { services, mision, valores } from '../data.js'

const serviceCards = [
  { icon: Monitor, bg: '#2345e0', fg: '#8fa2ff', ink: '#fff', ...services[0] },
  { icon: Phone, bg: '#ff9dc5', fg: '#fbf0ee', ink: '#0d0d12', ...services[1] },
  { icon: Sparkles, bg: '#000', fg: '#2345e0', ink: '#fbf0ee', ...services[2] },
]

export default function Home() {
  return (
    <>
      <section className="hero" id="inicio">
        <GradientBars />
        <div className="wrap hero-inner hero-split">
          <div className="hero-copy">
            <h1 style={{ "--d": 1 }} className="enter">FAIR<br /><em>STUDIO</em></h1>
            <p style={{ "--d": 2 }} className="enter hero-sub">Webs, tiendas online y apps móviles para pymes, hechas de forma sostenible.</p>
          </div>
          <div className="hero-aside" aria-hidden="true" />
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Presentación de la Empresa</p>
            <h2>Servicios que ofrece</h2>
          </Reveal>
          <div className="grid g3 acards">
            {serviceCards.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06}>
                <AsciiCard bg={s.bg} fg={s.fg} ink={s.ink} Icon={s.icon} title={s.t} text={s.d} seed={i * 2.3 + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="mision">
        <div className="wrap about">
          <Reveal>
            <p className="eyebrow">Presentación de la Empresa</p>
            <h2>Misión y valores relacionados con la sostenibilidad</h2>
          </Reveal>
          <Reveal delay={0.06} className="mission">
            <p className="eyebrow">Misión</p>
            <blockquote>{mision}</blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Valores</p>
            <p className="lead">{valores}</p>
          </Reveal>
        </div>
      </section>

      <section className="section cta" id="contacto">
        <GradientBars />
        <div className="wrap cta-grid">
          <Reveal className="cta-inner">
            <p className="eyebrow eyebrow-light">Contacto</p>
            <CopyEmail tone="light" />
          </Reveal>
          <Reveal delay={0.08}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  )
}

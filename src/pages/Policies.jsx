import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { policies, odsRows } from '../data.js'
import { Globe, Users, ShieldCheck } from '../icons.jsx'

const ease = [0.23, 1, 0.32, 1]
const blocks = [
  { id: 'ambiental', letter: 'A', icon: Globe, eyebrow: 'Política Ambiental', title: <>Tecnología que cuida <em>el planeta</em></> },
  { id: 'social', letter: 'S', icon: Users, eyebrow: 'Política Social', title: <>Personas en el centro, <em>dentro y fuera</em></> },
  { id: 'gobernanza', letter: 'G', icon: ShieldCheck, eyebrow: 'Política de Gobernanza', title: <>Ética, transparencia y <em>confianza</em></> },
]

export default function Policies() {
  return (
    <>
      <section className="page-hero">
        <motion.div className="wrap" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
          <p className="crumbs"><Link to="/">Inicio</Link> / Políticas ASG</p>
          <h1>Nuestra Política <em>ASG</em></h1>
          <p className="lead">Cada decisión técnica, laboral y contractual que tomamos hoy tiene un impacto mañana. Estos son nuestros compromisos ambientales, sociales y de gobernanza, y su relación con los Objetivos de Desarrollo Sostenible.</p>
          <nav className="chips" aria-label="Secciones">
            {blocks.map((b) => <Link key={b.id} to={`/politicas?s=${b.id}`} className="chip"><b.icon /> {b.eyebrow.replace('Política ', '').replace('de ', '')}</Link>)}
            <Link to="/politicas?s=ods" className="chip">ASG · ODS</Link>
          </nav>
        </motion.div>
      </section>

      {blocks.map((b, bi) => (
        <section key={b.id} id={b.id} className={`section policy ${bi % 2 ? 'section-alt' : ''}`}>
          <div className="wrap policy-grid">
            <Reveal className="policy-side">
              <span className="letter" aria-hidden="true">{b.letter}</span>
              <p className="eyebrow">{`0${bi + 1} · ${b.eyebrow}`}</p>
              <h2>{b.title}</h2>
            </Reveal>
            <ol className="commit">
              {policies[b.id].map((c, i) => (
                <Reveal as="li" key={c.t} delay={i * 0.04}>
                  <span className="commit-n">{i + 1}</span>
                  <div><h3>{c.t}</h3><p>{c.d}</p></div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section id="ods" className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">04 · Agenda 2030</p>
            <h2>Relación entre nuestra Política ASG y los <em>ODS</em></h2>
            <p className="lead">Cada compromiso se vincula con uno o varios Objetivos de Desarrollo Sostenible y con la justificación de su impacto.</p>
          </Reveal>
          <Reveal className="table-wrap" role="region" aria-label="Tabla ASG y ODS" tabIndex={0}>
            <table>
              <caption>Tabla de relación entre la política ASG de Fair Studio y los ODS</caption>
              <thead><tr><th scope="col">Dimensión ASG</th><th scope="col">Compromiso empresarial concreto</th><th scope="col">ODS relacionado</th><th scope="col">Justificación razonada del impacto</th></tr></thead>
              <tbody>
                {odsRows.map((r) => (
                  <tr key={r.title}>
                    <td><span className={`dim dim-${r.dim[0]}`}>{r.dim}</span></td>
                    <td><strong>{r.title}:</strong> {r.desc}</td>
                    <td>{r.ods.map((o) => <div key={o.n} className="ods-item"><span className="ods">{o.n}</span> {o.name}</div>)}</td>
                    <td>{r.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <div className="center"><Button to="/?s=contacto" arrow>Contactar con el canal ético</Button></div>
        </div>
      </section>
    </>
  )
}

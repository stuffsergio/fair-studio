import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Reveal from '../components/Reveal.jsx'
import { policies, odsRows } from '../data.js'
import { Globe, Users, ShieldCheck } from '../icons.jsx'

const ease = [0.23, 1, 0.32, 1]
const blocks = [
  { id: 'ambiental', letter: 'A', icon: Globe, title: 'Política Ambiental' },
  { id: 'social', letter: 'S', icon: Users, title: 'Política Social' },
  { id: 'gobernanza', letter: 'G', icon: ShieldCheck, title: 'Política de Gobernanza' },
]

export default function Policies() {
  return (
    <>
      <section className="page-hero">
        <motion.div className="wrap" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
          <p className="crumbs"><Link to="/">Inicio</Link> / Políticas ASG</p>
          <h1>Política ASG y ODS</h1>
          <nav className="chips" aria-label="Secciones">
            {blocks.map((b) => (
              <Link key={b.id} to={`/politicas?s=${b.id}`} className="chip"><b.icon /> {b.title}</Link>
            ))}
            <Link to="/politicas?s=ods" className="chip">Tabla de Relación entre Política ASG y ODS</Link>
          </nav>
        </motion.div>
      </section>

      {blocks.map((b, bi) => (
        <section key={b.id} id={b.id} className={`section policy ${bi % 2 ? 'section-alt' : ''}`}>
          <div className="wrap policy-grid">
            <Reveal className="policy-side">
              <span className="letter" aria-hidden="true">{b.letter}</span>
              <h2>{b.title}</h2>
            </Reveal>
            <ol className="commit">
              {policies[b.id].map((text, i) => (
                <Reveal as="li" key={text.slice(0, 48)} delay={i * 0.04}>
                  <span className="commit-n">{i + 1}</span>
                  <div><p>{text}</p></div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section id="ods" className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>Tabla de Relación entre Política ASG y ODS</h2>
          </Reveal>
          <Reveal className="table-wrap" role="region" aria-label="Tabla de Relación entre Política ASG y ODS" tabIndex={0}>
            <table>
              <caption>Tabla de Relación entre Política ASG y ODS</caption>
              <thead>
                <tr>
                  <th scope="col">Dimensión ASG</th>
                  <th scope="col">Compromiso Empresarial</th>
                  <th scope="col">ODS Relacionado</th>
                  <th scope="col">Justificación</th>
                </tr>
              </thead>
              <tbody>
                {odsRows.map((r) => (
                  <tr key={r.compromiso}>
                    <td><span className={`dim dim-${r.dim[0]}`}>{r.dim}</span></td>
                    <td>{r.compromiso}</td>
                    <td>{r.ods.map((o) => <div key={o} className="ods-item">{o}</div>)}</td>
                    <td>{r.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
    </>
  )
}

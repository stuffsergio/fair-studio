import { Link } from 'react-router-dom'
import CopyEmail from './CopyEmail.jsx'
import Reveal from './Reveal.jsx'

const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/?s=servicios' },
  { label: 'Misión y valores', to: '/?s=mision' },
  { label: 'Políticas ASG', to: '/politicas' },
  { label: 'Contacto', to: '/?s=contacto' },
]

const policies = [
  { label: 'Política Ambiental', to: '/politicas?s=ambiental' },
  { label: 'Política Social', to: '/politicas?s=social' },
  { label: 'Política de Gobernanza', to: '/politicas?s=gobernanza' },
]

export default function Footer() {
  const toTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-main">
          <Reveal className="footer-contact">
            <p className="footer-kicker">Contacto</p>
            <CopyEmail tone="light" className="footer-mail" />
          </Reveal>

          <div className="footer-info">
            <Reveal className="footer-col" delay={0.04}>
              <p className="footer-kicker">Navegar</p>
              <ul>
                {nav.map((l) => (
                  <li key={l.to}><Link to={l.to} className="footer-link">{l.label}</Link></li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="footer-col" delay={0.08}>
              <p className="footer-kicker">Políticas ASG</p>
              <ul>
                {policies.map((l) => (
                  <li key={l.to}><Link to={l.to} className="footer-link">{l.label}</Link></li>
                ))}
              </ul>
            </Reveal>
            <button type="button" className="footer-scroll" onClick={toTop} aria-label="Volver arriba" />
          </div>
        </div>

        <Reveal className="footer-wordmark" delay={0.06}>
          <Link to="/" aria-label="Fair Studio, inicio">FAIR&nbsp;STUDIO</Link>
        </Reveal>

        <div className="footer-bottom">
          <p>© 2026 Fair Studio</p>
        </div>
      </div>
    </footer>
  )
}

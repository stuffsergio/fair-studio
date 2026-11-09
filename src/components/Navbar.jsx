import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Close } from '../icons.jsx'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/?s=servicios' },
  { label: 'Misión y valores', to: '/?s=mision' },
  { label: 'Políticas ASG', to: '/politicas' },
  { label: 'Contacto', to: '/?s=contacto' },
]
const ease = [0.23, 1, 0.32, 1]

export default function Navbar() {
  const loc = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(null)
  const current = loc.pathname === '/politicas' ? '/politicas' : loc.search ? '/' + loc.search : '/'

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => setOpen(false), [loc])
  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <motion.header
      className={`nav ${scrolled || loc.pathname !== '/' ? 'is-solid' : ''} ${open ? 'is-open' : ''}`}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
    >
      <nav className="nav-pill" aria-label="Principal">
        <Link to="/" className="logo" aria-label="Fair Studio, inicio">Fair<span>·</span>Studio</Link>
        <ul className="nav-links" onMouseLeave={() => setHover(null)}>
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onMouseEnter={() => setHover(l.to)} aria-current={current === l.to ? 'page' : undefined}>
                {(hover ?? current) === l.to && (
                  <motion.span layoutId="nav-hl" className="nav-hl" transition={{ duration: 0.25, ease }} />
                )}
                <span className="nav-label">{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/?s=contacto" className="btn btn-primary btn-sm nav-cta">Contacto</Link>
        <button type="button" className="nav-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav-mobile"
            initial={{ opacity: 0, scale: 0.96, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -4, transition: { duration: 0.15 } }}
            transition={{ duration: 0.22, ease }}
          >
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} aria-current={current === l.to ? 'page' : undefined}>{l.label}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

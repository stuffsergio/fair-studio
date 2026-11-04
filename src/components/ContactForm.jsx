import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Button from './Button.jsx'

const ease = [0.23, 1, 0.32, 1]
const init = { nombre: '', email: '', empresa: '', tipo: '', mensaje: '' }
const validate = (v) => {
  const e = {}
  if (v.nombre.trim().length < 2) e.nombre = 'Dinos tu nombre.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Introduce un correo válido.'
  if (!v.tipo) e.tipo = 'Elige un tipo de proyecto.'
  if (v.mensaje.trim().length < 10) e.mensaje = 'Cuéntanos un poco más (mín. 10 caracteres).'
  return e
}

export default function ContactForm() {
  const [v, setV] = useState(init), [err, setErr] = useState({}), [sent, setSent] = useState(false), [busy, setBusy] = useState(false)
  const set = (k) => (e) => { setV({ ...v, [k]: e.target.value }); if (err[k]) setErr({ ...err, [k]: undefined }) }
  const submit = (e) => {
    e.preventDefault(); const x = validate(v); setErr(x)
    if (Object.keys(x).length) { document.getElementById('f-' + Object.keys(x)[0])?.focus(); return }
    setBusy(true); setTimeout(() => { setBusy(false); setSent(true) }, 700) // demo: sin backend
  }
  const F = ({ k, label, children }) => (
    <label className={`field ${err[k] ? 'has-err' : ''}`}>
      <span>{label}</span>{children}
      <AnimatePresence>{err[k] && <motion.em initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18, ease }}>{err[k]}</motion.em>}</AnimatePresence>
    </label>
  )
  return (
    <div className="form-card">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div key="ok" className="form-ok" initial={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }} role="status">
            <motion.svg viewBox="0 0 52 52" width="56" height="56"><motion.circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, ease }} /><motion.path d="M15 27l7 7 15-15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.35, delay: 0.4, ease }} /></motion.svg>
            <h3>¡Gracias, {v.nombre.split(' ')[0]}!</h3>
            <p>Hemos recibido tu mensaje y te responderemos en menos de 48 horas.</p>
            <Button variant="ghost" onClick={() => { setV(init); setSent(false) }}>Enviar otro mensaje</Button>
          </motion.div>
        ) : (
          <motion.form key="f" noValidate onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.25, ease }}>
            <div className="form-row">
              {F({ k: 'nombre', label: 'Nombre', children: <input id="f-nombre" value={v.nombre} onChange={set('nombre')} autoComplete="name" /> })}
              {F({ k: 'email', label: 'Email', children: <input id="f-email" type="email" value={v.email} onChange={set('email')} autoComplete="email" /> })}
            </div>
            <div className="form-row">
              {F({ k: 'empresa', label: 'Empresa (opcional)', children: <input id="f-empresa" value={v.empresa} onChange={set('empresa')} autoComplete="organization" /> })}
              {F({ k: 'tipo', label: 'Tipo de proyecto', children: (
                <select id="f-tipo" value={v.tipo} onChange={set('tipo')}>
                  <option value="">Selecciona…</option><option>Web corporativa</option><option>Tienda online</option><option>App móvil</option><option>Digitalización / consultoría</option><option>Otro</option>
                </select>) })}
            </div>
            {F({ k: 'mensaje', label: 'Mensaje', children: <textarea id="f-mensaje" rows="4" value={v.mensaje} onChange={set('mensaje')} /> })}
            <div className="form-foot">
              <small>Formulario de demostración: no se envía ningún dato.</small>
              <Button type="submit" arrow disabled={busy}>{busy ? 'Enviando…' : 'Enviar mensaje'}</Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

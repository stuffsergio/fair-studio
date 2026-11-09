import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Button from './Button.jsx'

const ease = [0.23, 1, 0.32, 1]
const init = { nombre: '', email: '', empresa: '', tipo: '', mensaje: '' }
const validate = (v) => {
  const e = {}
  if (v.nombre.trim().length < 2) e.nombre = 'Nombre obligatorio.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Email no válido.'
  if (!v.tipo) e.tipo = 'Elige un tipo.'
  if (v.mensaje.trim().length < 10) e.mensaje = 'Mensaje demasiado corto.'
  return e
}

export default function ContactForm() {
  const [v, setV] = useState(init), [err, setErr] = useState({}), [sent, setSent] = useState(false), [busy, setBusy] = useState(false)
  const set = (k) => (e) => { setV({ ...v, [k]: e.target.value }); if (err[k]) setErr({ ...err, [k]: undefined }) }
  const submit = (e) => {
    e.preventDefault(); const x = validate(v); setErr(x)
    if (Object.keys(x).length) { document.getElementById('f-' + Object.keys(x)[0])?.focus(); return }
    setBusy(true); setTimeout(() => { setBusy(false); setSent(true) }, 700)
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
            <h3>Enviado</h3>
            <Button variant="ghost" onClick={() => { setV(init); setSent(false) }}>Enviar</Button>
          </motion.div>
        ) : (
          <motion.form key="f" noValidate onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.25, ease }}>
            <div className="form-row">
              {F({ k: 'nombre', label: 'Nombre', children: <input id="f-nombre" value={v.nombre} onChange={set('nombre')} autoComplete="name" /> })}
              {F({ k: 'email', label: 'Email', children: <input id="f-email" type="email" value={v.email} onChange={set('email')} autoComplete="email" /> })}
            </div>
            <div className="form-row">
              {F({ k: 'empresa', label: 'Empresa', children: <input id="f-empresa" value={v.empresa} onChange={set('empresa')} autoComplete="organization" /> })}
              {F({ k: 'tipo', label: 'Tipo', children: (
                <select id="f-tipo" value={v.tipo} onChange={set('tipo')}>
                  <option value="">Selecciona…</option>
                  <option>Diseño y desarrollo a medida</option>
                  <option>Mantenimiento y soporte informático</option>
                  <option>Consultoría de digitalización</option>
                  <option>Otro</option>
                </select>) })}
            </div>
            {F({ k: 'mensaje', label: 'Mensaje', children: <textarea id="f-mensaje" rows="4" value={v.mensaje} onChange={set('mensaje')} /> })}
            <div className="form-foot">
              <Button type="submit" arrow disabled={busy}>{busy ? 'Enviando…' : 'Enviar'}</Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

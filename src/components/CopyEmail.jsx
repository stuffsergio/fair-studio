import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export const EMAIL = 'hola@fairstudio.example'
const ease = [0.23, 1, 0.32, 1]

// El correo con una pequeña «c» al lado: al pulsarla se copia al portapapeles.
export default function CopyEmail({ tone = 'dark', className = '' }) {
  const [done, setDone] = useState(false)
  const t = useRef()
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL) } catch {
      const i = document.createElement('textarea'); i.value = EMAIL; document.body.appendChild(i); i.select(); document.execCommand('copy'); i.remove()
    }
    setDone(true); clearTimeout(t.current); t.current = setTimeout(() => setDone(false), 1600)
  }
  return (
    <span className={`copy-email copy-${tone} ${className}`}>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <button type="button" className="copy-c" onClick={copy} aria-label="Copiar correo" title="Copiar correo">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={done ? 'ok' : 'c'} initial={{ opacity: 0, scale: 0.6, filter: 'blur(3px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, scale: 0.6, filter: 'blur(3px)' }} transition={{ duration: 0.18, ease }}>
            {done ? '✓' : 'c'}
          </motion.span>
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {done && (
          <motion.span className="copy-tip" role="status" initial={{ opacity: 0, y: 4, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -2 }} transition={{ duration: 0.2, ease }}>Copiado</motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}

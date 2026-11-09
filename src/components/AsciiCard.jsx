import { useEffect, useRef } from 'react'

const CHARS = '$#%?+=*:.'
// Tarjeta con textura ASCII animada en canvas. Pausa fuera de pantalla y respeta reduced-motion.
export default function AsciiCard({ bg, fg, ink = '#fff', label, Icon, title, text, seed = 1 }) {
  const ref = useRef(), cardRef = useRef(), mouse = useRef({ x: -999, y: -999 })
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext('2d'), card = cardRef.current
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, cols, rows, cells, raf, visible = false, last = 0
    const S = 13
    const shape = (x, y) => { // forma tipo "mapa" suave con senos, distinta por tarjeta
      const a = Math.sin(x * 0.18 + seed) + Math.cos(y * 0.22 - seed * 1.7) + Math.sin((x + y) * 0.09 + seed * 3)
      return a
    }
    const size = () => {
      const r = card.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2)
      w = r.width; h = r.height; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / S); rows = Math.ceil(h / S)
      cells = []
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const v = shape(x, y); if (v < -0.2) continue
        cells.push({ x, y, c: CHARS[(Math.random() * CHARS.length) | 0], a: Math.min(1, 0.35 + (v + 0.2) * 0.4) })
      }
    }
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h); ctx.font = `600 ${S - 2}px ui-monospace,Menlo,monospace`; ctx.fillStyle = fg; ctx.textBaseline = 'top'
      const drift = reduce ? 0 : t * 0.00025
      for (const p of cells) {
        if (!reduce && Math.random() < 0.012) p.c = CHARS[(Math.random() * CHARS.length) | 0]
        const px = p.x * S, py = p.y * S
        const d = Math.hypot(px - mouse.current.x, py - mouse.current.y)
        const boost = d < 70 ? 1 - d / 70 : 0
        ctx.globalAlpha = Math.min(1, p.a * (0.7 + 0.3 * Math.sin(drift * 6 + p.x * 0.4 + p.y * 0.3)) + boost * 0.6)
        ctx.fillText(boost > 0.5 ? '#' : p.c, px, py - (boost * 3))
      }
      ctx.globalAlpha = 1
    }
    const loop = (t) => { if (!visible) return; if (t - last > 66) { draw(t); last = t } raf = requestAnimationFrame(loop) }
    size(); draw(0)
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; cancelAnimationFrame(raf); if (visible && !reduce) raf = requestAnimationFrame(loop) })
    io.observe(card)
    const ro = new ResizeObserver(() => { size(); draw(performance.now()) }); ro.observe(card)
    const mv = (e) => { const r = card.getBoundingClientRect(); mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top }; if (reduce) draw(0) }
    const lv = () => { mouse.current = { x: -999, y: -999 } }
    card.addEventListener('pointermove', mv); card.addEventListener('pointerleave', lv)
    return () => { io.disconnect(); ro.disconnect(); cancelAnimationFrame(raf); card.removeEventListener('pointermove', mv); card.removeEventListener('pointerleave', lv) }
  }, [fg, seed])
  return (
    <article ref={cardRef} className="acard" style={{ '--bg': bg, '--ink': ink }}>
      <canvas ref={ref} aria-hidden="true" />
      <div className="acard-top">
        <span className="acard-logo"><Icon /></span>
        {label ? <span className="acard-label">{label}</span> : <span className="acard-label" aria-hidden="true" />}
      </div>
      <div className="acard-bottom">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

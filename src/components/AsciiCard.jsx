import { useEffect, useRef } from 'react'

const CHARS = '$#%?+=*:.'
const DENSE = '#$@%&8'
const MID = '+=*:'
const SPARSE = '·.:'

/** Distancia firmada a una hoja (ovalo inclinado + tallo). >0 = dentro. */
function leafField(nx, ny) {
  // nx, ny in [0,1], origin top-left. Leaf centred, tip up-right.
  const cx = 0.52, cy = 0.46
  const dx = nx - cx, dy = ny - cy
  // rotate ~-35deg so tip points up-right
  const ang = -0.62
  const cos = Math.cos(ang), sin = Math.sin(ang)
  const rx = dx * cos - dy * sin
  const ry = dx * sin + dy * cos
  // ellipse (leaf blade)
  const ex = rx / 0.34, ey = ry / 0.52
  const ellipse = 1 - (ex * ex + ey * ey)
  // central vein (thin bright line)
  const vein = Math.exp(-Math.pow(rx / 0.018, 2)) * Math.max(0, 1 - Math.abs(ry) / 0.5)
  // stem below
  const stemX = (nx - 0.42) / 0.035
  const stemY = (ny - 0.78) / 0.16
  const stem = (stemY > 0 && stemY < 1) ? Math.exp(-stemX * stemX) * (1 - stemY * 0.4) : 0
  return Math.max(ellipse, vein * 0.85, stem * 0.7)
}

// Tarjeta con textura ASCII animada en canvas. Pausa fuera de pantalla y respeta reduced-motion.
export default function AsciiCard({
  bg, fg, ink = '#fff', label, Icon, title, text, seed = 1,
  shape = 'organic', // 'organic' | 'leaf'
  compact = false,
}) {
  const ref = useRef(), cardRef = useRef(), mouse = useRef({ x: -999, y: -999 })
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext('2d'), card = cardRef.current
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, cols, rows, cells, raf, visible = false, last = 0, born = performance.now()
    const S = shape === 'leaf' ? 11 : 13
    const organic = (x, y) => {
      const a = Math.sin(x * 0.18 + seed) + Math.cos(y * 0.22 - seed * 1.7) + Math.sin((x + y) * 0.09 + seed * 3)
      return a
    }
    const size = () => {
      const r = card.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2)
      w = r.width; h = r.height; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(w / S); rows = Math.ceil(h / S)
      cells = []
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        if (shape === 'leaf') {
          const nx = (x + 0.5) / cols, ny = (y + 0.5) / rows
          const v = leafField(nx, ny)
          // sparse ambient field outside
          const ambient = (Math.sin(x * 0.4 + seed) + Math.cos(y * 0.35 - seed)) * 0.15
          if (v < 0.05 && ambient < 0.05) continue
          const inside = v >= 0.08
          const dens = Math.min(1, Math.max(0, v))
          let c
          if (inside && dens > 0.55) c = DENSE[(Math.random() * DENSE.length) | 0]
          else if (inside) c = MID[(Math.random() * MID.length) | 0]
          else c = SPARSE[(Math.random() * SPARSE.length) | 0]
          cells.push({
            x, y, c,
            a: inside ? 0.55 + dens * 0.45 : 0.12 + ambient * 0.25,
            inside,
            delay: (nx * 0.4 + ny * 0.6) * 900, // slow reveal tip→stem
          })
        } else {
          const v = organic(x, y); if (v < -0.2) continue
          cells.push({ x, y, c: CHARS[(Math.random() * CHARS.length) | 0], a: Math.min(1, 0.35 + (v + 0.2) * 0.4), inside: true, delay: 0 })
        }
      }
    }
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      ctx.font = `600 ${S - 2}px ui-monospace,Menlo,monospace`
      ctx.fillStyle = fg
      ctx.textBaseline = 'top'
      const drift = reduce ? 0 : t * 0.00025
      const age = t - born
      for (const p of cells) {
        if (!reduce && Math.random() < (p.inside ? 0.018 : 0.006)) {
          if (p.inside) p.c = (Math.random() < 0.5 ? DENSE : MID)[(Math.random() * 5) | 0] || CHARS[(Math.random() * CHARS.length) | 0]
          else p.c = SPARSE[(Math.random() * SPARSE.length) | 0]
        }
        const px = p.x * S, py = p.y * S
        const d = Math.hypot(px - mouse.current.x, py - mouse.current.y)
        const boost = d < 70 ? 1 - d / 70 : 0
        let reveal = 1
        if (shape === 'leaf' && !reduce) reveal = Math.min(1, Math.max(0, (age - p.delay) / 700))
        const shimmer = 0.7 + 0.3 * Math.sin(drift * 6 + p.x * 0.4 + p.y * 0.3)
        ctx.globalAlpha = Math.min(1, p.a * shimmer * reveal + boost * 0.55)
        if (ctx.globalAlpha < 0.04) continue
        ctx.fillText(boost > 0.55 ? '#' : p.c, px, py - (boost * 3))
      }
      ctx.globalAlpha = 1
    }
    const loop = (t) => { if (!visible) return; if (t - last > 50) { draw(t); last = t } raf = requestAnimationFrame(loop) }
    size(); draw(performance.now())
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; cancelAnimationFrame(raf); if (visible && !reduce) raf = requestAnimationFrame(loop); else if (visible && reduce) draw(performance.now()) })
    io.observe(card)
    const ro = new ResizeObserver(() => { size(); draw(performance.now()) }); ro.observe(card)
    const mv = (e) => { const r = card.getBoundingClientRect(); mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top }; if (reduce) draw(performance.now()) }
    const lv = () => { mouse.current = { x: -999, y: -999 } }
    card.addEventListener('pointermove', mv); card.addEventListener('pointerleave', lv)
    return () => { io.disconnect(); ro.disconnect(); cancelAnimationFrame(raf); card.removeEventListener('pointermove', mv); card.removeEventListener('pointerleave', lv) }
  }, [fg, seed, shape])
  const isHero = shape === 'leaf'
  return (
    <article ref={cardRef} className={`acard${isHero ? ' acard-hero' : ''}${compact ? ' acard-compact' : ''}`} style={{ '--bg': bg, '--ink': ink }}>
      <canvas ref={ref} aria-hidden="true" />
      <div className="acard-top">
        {Icon ? <span className="acard-logo"><Icon /></span> : <span />}
        {label ? <span className="acard-label">{label}</span> : <span className="acard-label" aria-hidden="true" />}
      </div>
      {(title || text) && (
        <div className="acard-bottom">
          {title ? <h3>{title}</h3> : null}
          {text ? <p>{text}</p> : null}
        </div>
      )}
    </article>
  )
}

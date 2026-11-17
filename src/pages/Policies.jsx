import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useGSAP } from '@gsap/react'
import { policies, odsRows } from '../data.js'
import { Globe, Users, ShieldCheck } from '../icons.jsx'
import { gsap, ScrollTrigger, registerScrollTarget, scrollToId } from '../lib/scroll.js'

gsap.registerPlugin(useGSAP)

const ease = [0.23, 1, 0.32, 1]
const blocks = [
  { id: 'ambiental', letter: 'A', icon: Globe, title: 'Política Ambiental' },
  { id: 'social', letter: 'S', icon: Users, title: 'Política Social' },
  { id: 'gobernanza', letter: 'G', icon: ShieldCheck, title: 'Política de Gobernanza' },
]

// Colores oficiales de los ODS (Naciones Unidas)
const odsColor = {
  3: '#4C9F38', 4: '#C5192D', 7: '#FCC30B', 8: '#A21942', 9: '#FD6925',
  10: '#DD1367', 12: '#BF8B2E', 13: '#3F7E44', 16: '#00689D',
}
const pad = (n) => String(n).padStart(2, '0')

// Título partido en palabras para animarlas (el texto visible no cambia).
function Words({ text }) {
  return (
    <span className="words" aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden="true"><span className="w"><span className="w-in">{w}</span></span>{' '}</span>
      ))}
    </span>
  )
}

// "ODS 7 (Energía…)" -> chip con el número + el resto del texto tal cual.
function OdsChip({ text }) {
  const m = text.match(/^(ODS (\d+))(.*)$/)
  if (!m) return <div className="ods-item">{text}</div>
  return (
    <div className="ods-item ods-chip" style={{ '--ods': odsColor[m[2]] || 'var(--c2)' }} data-light={m[2] === '7' ? '' : undefined}>
      <span className="ods-num">{m[1]}</span><span className="ods-rest">{m[3]}</span>
    </div>
  )
}

export default function Policies() {
  const root = useRef(null)

  useGSAP(() => {
    const q = gsap.utils.selector(root)
    const sections = q('.pillar')
    const items = q('.asg-progress-item')
    const progressEl = q('.asg-progress')[0]

    const setProgress = (i, p) => {
      items[i]?.style.setProperty('--p', p.toFixed(3))
    }
    const setActive = (i) => items.forEach((el, k) => el.classList.toggle('is-active', k === i))

    const mm = gsap.matchMedia()
    mm.add(
      {
        desktop: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        mobile: '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
        reduce: '(prefers-reduced-motion: reduce)',
      },
      (ctx) => {
        const { desktop, mobile } = ctx.conditions
        const unregister = []

        // Hero: letras gigantes de fondo con parallax
        if (!ctx.conditions.reduce) {
          gsap.to(q('.hero-asg span'), {
            yPercent: (i) => [-18, 10, -30][i],
            ease: 'none',
            scrollTrigger: { trigger: q('.page-hero')[0], start: 'top top', end: 'bottom top', scrub: true },
          })
        }

        sections.forEach((sec, i) => {
          const stage = sec.querySelector('.pillar-stage')
          const cards = gsap.utils.toArray(sec.querySelectorAll('.pcard'))
          const ticks = sec.querySelectorAll('.tick')
          const counter = sec.querySelector('.counter-roll')
          const letter = sec.querySelector('.giant')
          const words = sec.querySelectorAll('.pillar-title .w-in')

          if (desktop) {
            sec.classList.add('is-pinned')
            const n = cards.length
            const tl = gsap.timeline({
              defaults: { ease: 'emil' },
              scrollTrigger: {
                trigger: stage,
                start: 'top top',
                end: () => `+=${window.innerHeight * ((n - 1) * 0.85 + 0.5)}`,
                pin: true,
                scrub: 0.7,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => setProgress(i, self.progress),
                onToggle: (self) => self.isActive && setActive(i),
              },
            })
            cards.forEach((card, k) => {
              if (k === 0) return // la primera entra con la letra, antes del pin
              const at = (k - 1) * 1.2
              tl.addLabel(`c${k}`, at)
              tl.fromTo(card, { yPercent: 115, rotate: 2.5 }, { yPercent: 0, rotate: 0, duration: 1 }, at)
              tl.fromTo(card, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'none' }, at)
              // las anteriores retroceden y se atenúan
              cards.slice(0, k).forEach((prev, j) => {
                const depth = k - j
                tl.to(prev, { scale: 1 - depth * 0.05, y: -depth * 18, duration: 1 }, at)
                tl.to(prev.querySelector('.pcard-body'), { opacity: 0.2, duration: 0.6 }, at)
              })
              if (ticks[k]) tl.fromTo(ticks[k].firstChild, { scaleX: 0 }, { scaleX: 1, duration: 0.8 }, at + 0.1)
              if (counter) tl.to(counter, { yPercent: -(100 / n) * k, duration: 0.8 }, at + 0.1)
            })
            tl.to({}, { duration: 0.5 })

            // Entrada de la letra, el título y la primera política antes de fijar la sección
            gsap.timeline({
              defaults: { ease: 'emil' },
              scrollTrigger: { trigger: sec, start: 'top 85%', end: 'top top', scrub: 0.6 },
            })
              .fromTo(letter, { yPercent: 30, scale: 0.7, opacity: 0 }, { yPercent: 0, scale: 1, opacity: 1 }, 0)
              .fromTo(words, { yPercent: 110 }, { yPercent: 0, stagger: 0.08 }, 0.1)
              .fromTo(cards[0], { yPercent: 40, rotate: 2, opacity: 0 }, { yPercent: 0, rotate: 0, opacity: 1 }, 0.25)
              .fromTo(ticks[0].firstChild, { scaleX: 0 }, { scaleX: 1 }, 0.4)
            ticks.forEach((t, k) => k > 0 && gsap.set(t.firstChild, { scaleX: 0 }))

            // Saltar a esta sección deja ya visible la primera política
            unregister.push(registerScrollTarget(sec.id, () => {
              return tl.scrollTrigger.start + 2
            }))

            return
          }

          // Móvil / reduced motion: sin pin, solo indicador + entradas sencillas
          ScrollTrigger.create({
            trigger: sec,
            start: 'top 60%',
            end: 'bottom 60%',
            onUpdate: (self) => setProgress(i, self.progress),
            onToggle: (self) => self.isActive && setActive(i),
          })
          if (mobile) {
            gsap.from([letter, ...q(`#${sec.id} .pillar-title`)], {
              opacity: 0, y: 24, duration: 0.7, ease: 'emil',
              scrollTrigger: { trigger: sec, start: 'top 80%' },
            })
            cards.forEach((card) => {
              gsap.from(card, {
                opacity: 0, y: 32, duration: 0.7, ease: 'emil',
                scrollTrigger: { trigger: card, start: 'top 88%' },
              })
            })
          }
        })

        if (!ctx.conditions.reduce) {
          // Cierre ODS: título, filas que encajan una a una y chips que se encienden
          gsap.from(q('#ods .section-head .w-in'), {
            yPercent: 110, stagger: 0.06, duration: 0.9, ease: 'emil',
            scrollTrigger: { trigger: q('#ods')[0], start: 'top 75%' },
          })
          const rows = q(mobile ? '.ods-card' : '.table-desktop tbody tr')
          if (!mobile) {
            gsap.from(q('.table-desktop thead th'), {
              opacity: 0, y: -12, stagger: 0.05, duration: 0.5, ease: 'emil',
              scrollTrigger: { trigger: q('.table-desktop')[0], start: 'top 80%' },
            })
          }
          gsap.set(rows, { opacity: 0, y: 40, rotateX: -12, transformOrigin: '50% 0%' })
          rows.forEach((r) => r.classList.add('is-dim'))
          ScrollTrigger.batch(rows, {
            start: 'top 90%',
            once: true,
            onEnter: (batch) => {
              batch.forEach((row, b) => {
                const t = gsap.timeline({ delay: b * 0.12 })
                t.to(row, { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: 'emil' })
                  .from(row.querySelectorAll('.dim'), { scale: 0.6, opacity: 0, duration: 0.45, ease: 'back.out(2)' }, 0.15)
                  .add(() => row.classList.remove('is-dim'), 0.3)
                  .from(row.querySelectorAll('.ods-chip'), { x: -10, opacity: 0.35, stagger: 0.12, duration: 0.5, ease: 'emil' }, 0.3)
              })
            },
          })
        }

        // Barra lateral (se crea al final para contar el espacio de los pins) A · S · G: visible solo en la parte de políticas
        ScrollTrigger.create({
          trigger: q('.asg-story')[0],
          start: 'top 55%',
          end: 'bottom 45%',
          onToggle: (self) => progressEl?.classList.toggle('is-visible', self.isActive),
        })

        return () => {
          unregister.forEach((u) => u())
          progressEl?.classList.remove('is-visible')
          sections.forEach((s) => s.classList.remove('is-pinned'))
          q('.is-dim').forEach((r) => r.classList.remove('is-dim'))
        }
      }
    )

    // Recalcular cuando cargan las fuentes (cambian las alturas)
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => mm.revert()
  }, { scope: root })

  const progress = (
    <nav className="asg-progress" aria-label="Política ASG y ODS">
      {blocks.map((b) => (
        <button
          key={b.id}
          type="button"
          className="asg-progress-item"
          aria-label={b.title}
          onClick={() => scrollToId(b.id)}
        >
          <span className="asg-progress-letter">{b.letter}</span>
          <span className="asg-progress-bar"><span /></span>
        </button>
      ))}
    </nav>
  )

  return (
    <div ref={root} className="policies-page">
      {progress}

      <section className="page-hero">
        <div className="hero-asg" aria-hidden="true"><span>A</span><span>S</span><span>G</span></div>
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

      <div className="asg-story">
        {blocks.map((b, bi) => (
          <section key={b.id} id={b.id} className={`pillar pillar-${b.letter}`}>
            <div className="pillar-stage">
              <div className="wrap pillar-grid">
                <div className="pillar-side">
                  <span className="giant" aria-hidden="true">{b.letter}</span>
                  <h2 className="pillar-title"><Words text={b.title} /></h2>
                  <div className="pillar-meter" aria-hidden="true">
                    <span className="counter"><span className="counter-roll">
                      {policies[b.id].map((_, i) => <span key={i}>{pad(i + 1)}</span>)}
                    </span></span>
                    <span className="counter-total">/ {pad(policies[b.id].length)}</span>
                    <span className="ticks">{policies[b.id].map((_, i) => <span key={i} className="tick"><i /></span>)}</span>
                  </div>
                </div>
                <ol className="pcards">
                  {policies[b.id].map((text, i) => (
                    <li key={text.slice(0, 48)} className="pcard" style={{ zIndex: i + 1, '--i': i }}>
                      <div className="pcard-body">
                        <span className="pcard-n" aria-hidden="true">{pad(i + 1)}</span>
                        <p>{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <span className="pillar-index" aria-hidden="true">{pad(bi + 1)}</span>
            </div>
          </section>
        ))}

        <section id="ods" className="section ods-section">
          <div className="wrap">
            <div className="section-head">
              <h2><Words text="Tabla de Relación entre Política ASG y ODS" /></h2>
            </div>

            <div className="table-wrap table-desktop" role="region" aria-label="Tabla de Relación entre Política ASG y ODS" tabIndex={0}>
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
                      <td>{r.ods.map((o) => <OdsChip key={o} text={o} />)}</td>
                      <td>{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ods-cards" role="list" aria-label="Tabla de Relación entre Política ASG y ODS">
              {odsRows.map((r) => (
                <div key={r.compromiso} className="ods-card" role="listitem">
                  <span className={`dim dim-${r.dim[0]}`}>{r.dim}</span>
                  <h3>{r.compromiso}</h3>
                  <div className="ods-card-ods">{r.ods.map((o) => <OdsChip key={o} text={o} />)}</div>
                  <p>{r.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

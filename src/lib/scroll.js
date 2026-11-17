import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(ScrollTrigger, CustomEase)
// Curvas tipo Emil Kowalski
CustomEase.create('emil', '0.23, 1, 0.32, 1')
CustomEase.create('emilInOut', '0.77, 0, 0.175, 1')

export const reduceMotion =
  typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

export let lenis = null
if (typeof window !== 'undefined' && !reduceMotion) {
  lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) })
  // Lenis y ScrollTrigger comparten el mismo reloj (gsap.ticker)
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
}

// Secciones con pin pueden registrar a qué punto exacto del scroll hay que saltar.
const targets = new Map()
export const registerScrollTarget = (id, fn) => { targets.set(id, fn); return () => targets.delete(id) }

export function scrollToId(id, { immediate = false } = {}) {
  const el = document.getElementById(id)
  if (!el) return false
  const custom = targets.get(id)
  const y = custom ? custom() : el.getBoundingClientRect().top + window.scrollY - 90
  if (lenis) { lenis.resize(); lenis.scrollTo(y, { immediate, duration: 1.4 }) }
  else window.scrollTo(0, y)
  return true
}

export const toTop = () => { if (lenis) lenis.scrollTo(0, { immediate: true }); else window.scrollTo(0, 0) }
export { gsap, ScrollTrigger }

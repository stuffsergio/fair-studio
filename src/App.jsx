import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Policies from './pages/Policies.jsx'

let lenis = null
const reduce = typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
if (typeof window !== 'undefined' && !reduce) {
  lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) })
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf) }
  requestAnimationFrame(raf)
}
const scrollToEl = (el) => { if (lenis) lenis.scrollTo(el, { offset: -90 }); else el.scrollIntoView() }
const toTop = () => { if (lenis) lenis.scrollTo(0, { immediate: true }); else window.scrollTo(0, 0) }

function ScrollManager() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    const id = new URLSearchParams(search).get('s')
    if (id) {
      // espera a que termine la transición de página
      const t = setTimeout(() => { const el = document.getElementById(id); el && scrollToEl(el) }, 60)
      return () => clearTimeout(t)
    }
  }, [pathname, search])
  return null
}

const ease = [0.23, 1, 0.32, 1]
export default function App() {
  const loc = useLocation()
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <ScrollManager />
      <Navbar />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => { if (!new URLSearchParams(window.location.hash.split('?')[1]).get('s')) toTop() }}>
        <motion.main
          id="contenido"
          key={loc.pathname}
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
          transition={{ duration: 0.36, ease }}
        >
          <Routes location={loc}>
            <Route path="/" element={<Home />} />
            <Route path="/politicas" element={<Policies />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  )
}

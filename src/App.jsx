import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Policies from './pages/Policies.jsx'

function ScrollManager() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    const id = new URLSearchParams(search).get('s')
    if (id) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }))
    } else window.scrollTo(0, 0)
  }, [pathname, search])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <ScrollManager />
      <Navbar />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politicas" element={<Policies />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

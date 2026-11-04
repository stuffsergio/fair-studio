import { Link } from 'react-router-dom'
import CopyEmail from './CopyEmail.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="logo logo-light">Fair<span>·</span>Studio</Link>
          <p className="muted">Webs y apps para empresas, hechas con justicia.</p>
        </div>
        <div>
          <h4>Estudio</h4>
          <ul><li><Link to="/?s=servicios">Servicios</Link></li><li><Link to="/?s=nosotros">Nosotros</Link></li><li><Link to="/?s=proceso">Proceso</Link></li></ul>
        </div>
        <div>
          <h4>Compromiso</h4>
          <ul><li><Link to="/politicas">Política ASG</Link></li><li><Link to="/politicas?s=ods">ASG y ODS</Link></li><li><Link to="/politicas?s=gobernanza">Canal ético</Link></li></ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <CopyEmail tone="light" className="footer-mail" />
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© 2026 Fair Studio · Empresa ficticia creada para la asignatura de Sostenibilidad aplicada al sistema productivo (1º DAW).</p>
      </div>
    </footer>
  )
}

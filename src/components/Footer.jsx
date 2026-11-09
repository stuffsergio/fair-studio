import { Link } from 'react-router-dom'
import CopyEmail from './CopyEmail.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="logo logo-light">Fair<span>·</span>Studio</Link>
        </div>
        <div>
          <h4>Inicio</h4>
          <ul>
            <li><Link to="/?s=servicios">Servicios</Link></li>
            <li><Link to="/?s=mision">Misión y valores</Link></li>
          </ul>
        </div>
        <div>
          <h4>Políticas ASG</h4>
          <ul>
            <li><Link to="/politicas">Políticas ASG</Link></li>
            <li><Link to="/politicas?s=ods">Tabla de Relación entre Política ASG y ODS</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <CopyEmail tone="light" className="footer-mail" />
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>FAIR STUDIO</p>
      </div>
    </footer>
  )
}

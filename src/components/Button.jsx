import { Link } from 'react-router-dom'
import { ArrowRight } from '../icons.jsx'

// Botones sobrios al estilo evilbuttons: press scale(0.97), flecha que se desliza en hover.
export default function Button({ to, href, variant = 'primary', arrow = false, children, ...rest }) {
  const cls = `btn btn-${variant}${arrow ? ' btn-arrow' : ''}`
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="btn-icon" />}
    </>
  )
  if (to) return <Link className={cls} to={to} {...rest}>{inner}</Link>
  if (href) return <a className={cls} href={href} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}

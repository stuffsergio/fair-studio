import { motion } from 'motion/react'

const ease = [0.23, 1, 0.32, 1]
// Entrada suave: opacity + translateY pequeño, una sola vez.
export default function Reveal({ children, delay = 0, as = 'div', className, ...rest }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease, delay }}
      {...rest}
    >
      {children}
    </M>
  )
}

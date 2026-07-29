import { motion } from 'framer-motion'

/**
 * Reveal — envoltorio de aparición al hacer scroll.
 * Patrón base reutilizado en todo el sitio (inspirado en los "scroll reveal"
 * de 21st.dev/community/components, reimplementado sobre framer-motion).
 */
const direcciones = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

export default function Reveal({
  children,
  as = 'div',
  from = 'up',
  delay = 0,
  duration = 0.65,
  amount = 0.3,
  once = true,
  className = '',
  ...props
}) {
  const Comp = motion[as] ?? motion.div
  const offset = direcciones[from] ?? direcciones.up
  return (
    <Comp
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  )
}

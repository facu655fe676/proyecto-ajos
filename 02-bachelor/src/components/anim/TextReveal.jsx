import { motion } from 'framer-motion'

/**
 * TextReveal — revela un texto palabra por palabra al entrar en viewport.
 * Inspirado en los "text animation / word reveal" de 21st.dev.
 */
const contenedor = {
  hidden: {},
  visible: (stagger) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
}

const palabra = {
  hidden: { opacity: 0, y: '0.5em', filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: '0em',
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function TextReveal({
  text = '',
  as = 'h2',
  stagger = 0.06,
  amount = 0.5,
  className = '',
}) {
  const Comp = motion[as] ?? motion.h2
  const palabras = String(text).split(' ')
  return (
    <Comp
      variants={contenedor}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
    >
      {palabras.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={palabra} className="inline-block will-change-transform">
            {w}
            {i < palabras.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Comp>
  )
}

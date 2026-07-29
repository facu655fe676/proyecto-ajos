import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * ContainerScroll — reimplementación del popular "Container Scroll Animation"
 * de 21st.dev: un encabezado que se separa mientras una "tarjeta" 3D se endereza
 * (rotateX) y escala a medida que hacés scroll. Todo con framer-motion.
 */
export default function ContainerScroll({ titulo, children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [22, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.04, 0.96])
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -40])
  const tituloY = useTransform(scrollYProgress, [0, 0.5], [40, -20])
  const tituloOpacidad = useTransform(scrollYProgress, [0, 0.25, 0.6], [0, 1, 1])

  return (
    <div ref={ref} className="relative py-24 md:py-36" style={{ perspective: '1000px' }}>
      <motion.div
        style={{ y: tituloY, opacity: tituloOpacidad }}
        className="max-w-4xl mx-auto px-8 text-center mb-12"
      >
        {titulo}
      </motion.div>

      <motion.div
        style={{ rotateX, scale, y: translateY, transformStyle: 'preserve-3d' }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="rounded-2xl border border-hueso-100/15 bg-carbon-900 p-2 shadow-2xl shadow-black/40">
          <div className="rounded-xl overflow-hidden h-[26rem] md:h-[34rem]">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'
import TextReveal from './anim/TextReveal.jsx'

/**
 * Banner superior de las páginas interiores.
 * variant: gradiente de PlaceholderImage (hero, 1..4).
 */
const gradientes = {
  hero: 'from-[#3a2c1e] via-[#1c1916] to-[#14120f]',
  1: 'from-[#5c6b3a] to-[#14120f]',
  2: 'from-[#8a6a30] to-[#1c1916]',
  3: 'from-[#3a4a5c] to-[#14120f]',
  4: 'from-[#6b4a2c] to-[#1c1916]',
}

export default function PageHero({ eyebrow, titulo, subtitulo, variant = 'hero', image }) {
  return (
    <section className={`relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden bg-gradient-to-br ${gradientes[variant]}`}>
      {image ? (
        <img src={image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.03)_0px,rgba(255,255,255,.03)_2px,transparent_2px,transparent_26px)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/65" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-ambar-400 text-xs tracking-[0.3em] uppercase mb-5"
          >
            {eyebrow}
          </motion.div>
        )}
        <TextReveal
          text={titulo}
          as="h1"
          className="font-titulo text-4xl md:text-6xl italic text-hueso-100 max-w-3xl leading-[1.05]"
        />
        {subtitulo && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-hueso-100/70"
          >
            {subtitulo}
          </motion.p>
        )}
      </div>
    </section>
  )
}

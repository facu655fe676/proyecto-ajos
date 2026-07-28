import { motion } from 'framer-motion'
import PlaceholderImage from './PlaceholderImage.jsx'
import Marquee from './Marquee.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative">
      <div className="relative min-h-screen flex items-center">
        <PlaceholderImage variant="hero" labelEs="FOTO: campo de ajos al amanecer" labelEn="PHOTO: garlic field at dawn" fill />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-6xl mx-auto px-8 pt-20 text-hueso-100"
        >
          <div className="text-ambar-400 text-sm tracking-[0.3em] uppercase mb-6">
            {t('Del campo al mundo', 'From the field to the world')}
          </div>
          <h1 className="font-titulo text-5xl md:text-7xl italic max-w-3xl leading-[1.05] mb-7">
            {t('Cada bulbo cuenta una cosecha', 'Every bulb tells a harvest')}
          </h1>
          <p className="max-w-lg text-hueso-100/80 mb-10">
            {t(
              'Seguimos cada lote desde la siembra hasta el contenedor, para que cada exportación llegue con la misma historia de calidad.',
              'We follow every lot from planting to container, so every shipment arrives carrying the same story of quality.'
            )}
          </p>
          <a href="#proceso" className="inline-block bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-9 py-4 text-sm tracking-widest uppercase transition-colors">
            {t('Ver el proceso', 'See the process')}
          </a>
        </motion.div>
      </div>
      <Marquee />
    </section>
  )
}

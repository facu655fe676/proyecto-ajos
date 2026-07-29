import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PlaceholderImage from './PlaceholderImage.jsx'
import TextReveal from './anim/TextReveal.jsx'
import { IMG } from '../images.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative">
      <div className="relative min-h-screen flex items-center">
        <PlaceholderImage variant="hero" src={IMG.heroCampo} alt="Campo de ajos" fill />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-20 text-hueso-100">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-ambar-400 text-sm tracking-[0.3em] uppercase mb-6"
          >
            {t('Del campo al mundo', 'From the field to the world')}
          </motion.div>
          <TextReveal
            text={t('Cada bulbo cuenta una cosecha', 'Every bulb tells a harvest')}
            as="h1"
            className="font-titulo text-5xl md:text-7xl italic max-w-3xl leading-[1.05] mb-7"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-lg text-hueso-100/80 mb-10"
          >
            {t(
              'Seguimos cada lote desde la siembra hasta el contenedor, para que cada exportación llegue con la misma historia de calidad.',
              'We follow every lot from planting to container, so every shipment arrives carrying the same story of quality.'
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/ajos" className="inline-block bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-9 py-4 text-sm tracking-widest uppercase transition-colors">
              {t('Ver nuestros ajos', 'See our garlic')}
            </Link>
            <Link to="/quienes-somos" className="inline-block border border-hueso-100/40 hover:border-ambar-400 hover:text-ambar-400 text-hueso-100 px-9 py-4 text-sm tracking-widest uppercase transition-colors">
              {t('Quiénes somos', 'About us')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import PlaceholderImage from './PlaceholderImage.jsx'
import TextReveal from './anim/TextReveal.jsx'
import { IMG } from '../images.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28">
      <PlaceholderImage variant="hero" src={IMG.heroCampo} labelEs="viñas de ajo bajo la cordillera" labelEn="garlic rows beneath the mountains" fill />
      {/* Velo extra para legibilidad del texto sobre la foto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/45 to-black/70" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-6xl mx-auto px-8 text-hueso-100"
      >
        <div className="text-ambar-500 text-sm tracking-[0.3em] uppercase mb-5">
          {t('Condiciones inmejorables', 'Unbeatable conditions')}
        </div>
        <div className="font-titulo italic text-xl text-hueso-200 mb-6">
          {t('Tradición familiar de varias generaciones', 'A family tradition spanning generations')}
        </div>
        <TextReveal
          as="h1"
          text={t('Cultivamos la tierra, exportamos confianza', 'We grow the land, we export trust')}
          className="text-4xl md:text-6xl max-w-3xl mb-5"
        />
        <p className="max-w-xl text-hueso-100/85 mb-9">
          {t(
            'Empresa familiar dedicada a la producción y exportación de ajos premium, con el respaldo de generaciones de experiencia en el campo.',
            'A family-owned company dedicated to growing and exporting premium garlic, backed by generations of experience in the field.'
          )}
        </p>
        <a href="#productos" className="inline-block bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-9 py-4 text-sm tracking-widest uppercase transition-colors">
          {t('Conocer productos', 'Explore products')}
        </a>
      </motion.div>
    </section>
  )
}

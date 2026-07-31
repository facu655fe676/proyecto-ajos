import { motion } from 'framer-motion'
import PlaceholderImage from './PlaceholderImage.jsx'
import { IMG } from '../images.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Video() {
  const { t } = useLanguage()
  return (
    <section id="video" className="bg-carbon-950 py-28">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} className="mb-14">
          <div className="text-ambar-500 text-xs tracking-[0.26em] uppercase mb-4">{t('Conocé nuestro proceso', 'See our process')}</div>
          <h2 className="text-3xl md:text-4xl text-hueso-100 mb-4">{t('Del campo al contenedor', 'From the field to the container')}</h2>
          <p className="text-hueso-100/60 max-w-md mx-auto">{t('Un recorrido breve por nuestra planta de selección y empaque.', 'A short walkthrough of our selection and packing plant.')}</p>
        </motion.div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}
          whileHover={{ scale: 1.01 }}
          className="relative aspect-video max-w-3xl mx-auto"
        >
          <PlaceholderImage variant={3} src={IMG.galpon} labelEs="recorrido por planta de packing" labelEn="packing plant walkthrough" fill />
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-hueso-100/90 flex items-center justify-center z-10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-carbon-900 ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

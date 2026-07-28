import { motion } from 'framer-motion'
import Contador from './Contador.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const datos = [
  { hasta: 320, sufijo: '', es: 'Hectáreas cultivadas', en: 'Hectares farmed' },
  { hasta: 18, sufijo: '', es: 'Países destino', en: 'Destination countries' },
  { hasta: 4000, sufijo: 't', es: 'Toneladas exportadas / año', en: 'Tons exported / year' },
  { hasta: 12, sufijo: '', es: 'Años de trayectoria', en: 'Years of experience' },
]

export default function Stats() {
  const { t } = useLanguage()
  return (
    <section className="bg-carbon-950 text-hueso-100 py-24">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {datos.map((d) => (
            <div key={d.es} className="border-t border-hueso-100/15 pt-5">
              <div className="font-titulo text-4xl md:text-5xl text-ambar-400">
                <Contador hasta={d.hasta} sufijo={d.sufijo} />
              </div>
              <div className="text-xs md:text-sm text-hueso-100/60 mt-2 tracking-wide">{t(d.es, d.en)}</div>
            </div>
          ))}
        </motion.div>
        <p className="text-center text-xs text-hueso-100/35 mt-10">
          {t('Cifras de ejemplo (boceto) — reemplazar por datos reales.', 'Example figures (draft) — replace with real data.')}
        </p>
      </div>
    </section>
  )
}

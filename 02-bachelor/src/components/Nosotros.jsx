import { motion } from 'framer-motion'
import PlaceholderImage from './PlaceholderImage.jsx'
import { IMG } from '../images.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Cifra({ meta, es, en }) {
  const { t } = useLanguage()
  return (
    <div className="border-t border-black/15 pt-3.5">
      <div className="font-titulo text-3xl text-ambar-500">{meta}</div>
      <div className="text-xs text-neutral-600">{t(es, en)}</div>
    </div>
  )
}

export default function Nosotros() {
  const { t } = useLanguage()
  return (
    <section id="empresa" className="py-28">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}>
          <PlaceholderImage variant={1} src={IMG.familia} labelEs="finca familiar, Mendoza" labelEn="family estate, Mendoza" className="h-[460px] rounded-xl" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}>
          <div className="text-ambar-500 text-xs tracking-[0.26em] uppercase mb-4">{t('Quiénes somos', 'Who we are')}</div>
          <h2 className="text-3xl md:text-4xl text-carbon-900 mb-5">
            {t('Llevamos el sabor de nuestra tierra a cada rincón del mundo', 'We carry the flavor of our land to every corner of the world')}
          </h2>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            {t(
              'Ubicados a metros del pie de la cordillera de los Andes, a mil kilómetros de Buenos Aires, cultivamos y seleccionamos nuestros ajos con un control de calidad propio en cada etapa del proceso.',
              'Located at the foot of the Andes mountain range, a thousand kilometers from Buenos Aires, we grow and select our garlic with our own quality control at every stage of the process.'
            )}
          </p>
          <p className="text-neutral-700 leading-relaxed">
            {t(
              'Cada exportación lleva nuestro compromiso: trazabilidad completa, cumplimiento de estándares internacionales y una relación de largo plazo con cada cliente.',
              'Every shipment carries our commitment: full traceability, compliance with international standards, and a long-term relationship with every client.'
            )}
          </p>
          <div className="grid grid-cols-3 gap-5 mt-9">
            <Cifra meta="XX" es="Hectáreas cultivadas" en="Hectares farmed" />
            <Cifra meta="XX" es="Países destino" en="Destination countries" />
            <Cifra meta="XX" es="Años de trayectoria" en="Years of experience" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

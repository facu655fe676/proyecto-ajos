import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const reveal = (i) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 } },
})

const pasos = [
  { n: '01', es: 'Siembra', en: 'Planting', descEs: 'Selección de semilla y siembra en abril–mayo.', descEn: 'Seed selection and planting in April–May.' },
  { n: '02', es: 'Cultivo', en: 'Growing', descEs: 'Riego controlado y monitoreo fitosanitario.', descEn: 'Controlled irrigation and crop health monitoring.' },
  { n: '03', es: 'Cosecha', en: 'Harvest', descEs: 'Recolección entre noviembre y enero.', descEn: 'Harvesting between November and January.' },
  { n: '04', es: 'Selección', en: 'Sorting', descEs: 'Calibrado y control de calidad manual.', descEn: 'Sizing and manual quality control.' },
  { n: '05', es: 'Packing', en: 'Packing', descEs: 'Empaque según destino y cliente.', descEn: 'Packaging according to destination and client.' },
  { n: '06', es: 'Exportación', en: 'Export', descEs: 'Despacho y seguimiento hasta destino.', descEn: 'Dispatch and tracking to destination.' },
]

export default function Proceso() {
  const { t } = useLanguage()
  return (
    <section id="proceso" className="py-28 bg-hueso-100">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-xl mb-16">
          <div className="text-ambar-500 text-xs tracking-[0.26em] uppercase mb-4">{t('Nuestro proceso', 'Our process')}</div>
          <h2 className="text-3xl md:text-4xl text-carbon-950">{t('Del campo al contenedor, paso a paso', 'From the field to the container, step by step')}</h2>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-6 gap-6">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-carbon-950/15" />
          {pasos.map((p, i) => (
            <motion.div
              key={p.n}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal(i)}
              className="relative"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-carbon-950 text-ambar-400 flex items-center justify-center font-titulo text-lg mb-4">
                {p.n}
              </div>
              <h3 className="text-carbon-950 font-medium mb-1">{t(p.es, p.en)}</h3>
              <p className="text-sm text-neutral-600">{t(p.descEs, p.descEn)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

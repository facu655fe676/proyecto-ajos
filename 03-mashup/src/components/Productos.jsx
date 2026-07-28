import { motion } from 'framer-motion'
import PlaceholderImage from './PlaceholderImage.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const productos = [
  {
    variant: 1,
    es: 'Ajo Blanco', en: 'White Garlic',
    descEs: 'Calibres 3 a 7, mallas y cajas de exportación. Nuestra línea de mayor volumen.',
    descEn: 'Sizes 3 to 7, mesh bags and export cartons. Our highest-volume line.',
  },
  {
    variant: 2,
    es: 'Ajo Colorado', en: 'Red Garlic',
    descEs: 'Alto contenido de alicina, sabor intenso, ideal para mercados exigentes.',
    descEn: 'High allicin content, intense flavor, ideal for demanding markets.',
  },
  {
    variant: 3,
    es: 'Selección Boutique', en: 'Boutique Selection',
    descEs: 'Lotes limitados, calibres superiores y empaque diferenciado.',
    descEn: 'Limited lots, superior sizing, and distinctive packaging.',
  },
]

export default function Productos() {
  const { t } = useLanguage()
  return (
    <section id="productos" className="py-28 bg-carbon-950">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-xl mb-16">
          <div className="text-ambar-500 text-xs tracking-[0.26em] uppercase mb-4">{t('Nuestra selección', 'Our selection')}</div>
          <h2 className="text-3xl md:text-4xl text-hueso-100">{t('Cada línea, una historia distinta', 'Each line, a different story')}</h2>
        </div>

        <div className="flex flex-col gap-20">
          {productos.map((p, i) => (
            <motion.div
              key={p.es}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <PlaceholderImage variant={p.variant} labelEs={`FOTO: ${p.es.toLowerCase()}`} labelEn={`PHOTO: ${p.en.toLowerCase()}`} className="h-80" />
              <div>
                <h3 className="text-2xl md:text-3xl text-hueso-100 mb-4">{t(p.es, p.en)}</h3>
                <p className="text-hueso-100/65 max-w-md">{t(p.descEs, p.descEn)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

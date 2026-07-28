import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PlaceholderImage from './PlaceholderImage.jsx'
import { productos } from '../data/productos.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Productos() {
  const { t } = useLanguage()
  const [abierto, setAbierto] = useState(null)
  const activo = productos.find((p) => p.id === abierto)

  return (
    <section id="productos" className="bg-crema-200 py-28">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} className="max-w-xl mx-auto text-center mb-16">
          <div className="text-terracota-500 text-xs tracking-[0.26em] uppercase mb-4">{t('Línea de productos', 'Product line')}</div>
          <h2 className="text-3xl md:text-4xl text-espresso-900 mb-4">{t('Calidad de exportación en cada calibre', 'Export quality in every size')}</h2>
          <p className="text-neutral-600">{t('Hacé clic en cada producto para ver la ficha técnica completa.', 'Click on each product to see the full technical sheet.')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map((p) => (
            <motion.div
              key={p.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}
              className="bg-crema-100 border border-black/10 flex flex-col"
            >
              <PlaceholderImage variant={p.variant} labelEs={`FOTO: ${p.es.toLowerCase()}`} labelEn={`PHOTO: ${p.en.toLowerCase()}`} className="h-56" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl text-espresso-900 mb-2">{t(p.es, p.en)}</h3>
                <p className="text-sm text-neutral-600 mb-5 flex-1">{t(p.resumenEs, p.resumenEn)}</p>
                <button
                  onClick={() => setAbierto(p.id)}
                  className="self-start text-xs tracking-widest uppercase text-terracota-600 border-b border-terracota-500 pb-0.5"
                >
                  {t('Ver ficha técnica', 'View technical sheet')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activo && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setAbierto(null)}
            className="fixed inset-0 bg-espresso-950/75 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-crema-100 max-w-lg w-full max-h-[85vh] overflow-y-auto relative p-10"
            >
              <button onClick={() => setAbierto(null)} aria-label="Cerrar" className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-2xl text-espresso-900">×</button>
              <h3 className="text-2xl text-espresso-900 mb-1">{t(activo.es, activo.en)}</h3>
              <div className="text-terracota-600 text-sm mb-6">{t('Ficha técnica', 'Technical sheet')}</div>
              <dl className="grid grid-cols-[1fr_1.4fr] gap-x-5 gap-y-3 text-sm">
                {activo.ficha.map((f) => (
                  <div key={f.es} className="contents">
                    <dt className="text-neutral-600 font-medium">{t(f.es, f.en)}</dt>
                    <dd className="text-espresso-900">{t(f.valEs, f.valEn)}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs text-neutral-500 mt-6 border-t border-black/10 pt-4">
                {t('Todos los datos son orientativos (boceto). Reemplazar por especificaciones reales antes de publicar.', 'All data is indicative (draft). Replace with real specifications before publishing.')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const testimonios = [
  {
    es: '“La consistencia en calibre y calidad nos permitió planificar toda la temporada sin sobresaltos.”',
    en: '“Consistency in size and quality let us plan the whole season without surprises.”',
    autorEs: 'Importador, España',
    autorEn: 'Importer, Spain',
  },
  {
    es: '“Trazabilidad completa y tiempos de respuesta que no encontramos en otros proveedores.”',
    en: '“Full traceability and response times we didn’t find with other suppliers.”',
    autorEs: 'Comprador, Estados Unidos',
    autorEn: 'Buyer, United States',
  },
  {
    es: '“Un proveedor que entiende los tiempos de exportación tanto como nosotros.”',
    en: '“A supplier that understands export timelines as well as we do.”',
    autorEs: 'Distribuidor, Brasil',
    autorEn: 'Distributor, Brazil',
  },
]

export default function Testimonios() {
  const { t } = useLanguage()
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndice((i) => (i + 1) % testimonios.length), 5000)
    return () => clearInterval(id)
  }, [])

  const activo = testimonios[indice]

  return (
    <section className="py-28 bg-hueso-200">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <div className="text-ambar-500 text-xs tracking-[0.26em] uppercase mb-10">{t('Lo que dicen nuestros clientes', 'What our clients say')}</div>
        <div className="min-h-40 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={indice}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-titulo italic text-xl md:text-2xl text-carbon-950 mb-5">{t(activo.es, activo.en)}</p>
              <p className="text-sm text-neutral-600 tracking-wide">{t(activo.autorEs, activo.autorEn)}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-10">
          {testimonios.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndice(i)}
              aria-label={`Testimonio ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${i === indice ? 'bg-ambar-500' : 'bg-carbon-950/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

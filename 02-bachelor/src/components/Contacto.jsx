import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Contacto() {
  const { t } = useLanguage()
  return (
    <section id="contacto" className="bg-carbon-950 text-hueso-100 py-28">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}>
          <div className="text-ambar-500 text-xs tracking-[0.26em] uppercase mb-4">{t('Contacto', 'Contact')}</div>
          <h2 className="text-3xl md:text-4xl mb-4">{t('Solicite su cotización', 'Request your quote')}</h2>
          <p className="text-hueso-100/65 mb-9 max-w-md">
            {t('Escríbanos y le respondemos con disponibilidad, precios y condiciones de exportación.', "Write to us and we'll reply with availability, pricing and export terms.")}
          </p>
          <div className="flex flex-col gap-5">
            {[
              { es: 'Dirección', en: 'Address', valEs: 'Ruta Provincial S/N, Mendoza, Argentina', valEn: 'Provincial Route S/N, Mendoza, Argentina' },
              { es: 'Teléfono', en: 'Phone', valEs: '+54 261 000 0000', valEn: '+54 261 000 0000' },
              { es: 'Email', en: 'Email', valEs: 'ventas@altoandino.com', valEn: 'ventas@altoandino.com' },
            ].map((it) => (
              <div key={it.es} className="border-t border-hueso-100/15 pt-4">
                <h4 className="text-xs tracking-widest uppercase text-ambar-500 mb-1.5">{t(it.es, it.en)}</h4>
                <p className="text-sm text-hueso-100/85">{t(it.valEs, it.valEn)}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}
          className="flex flex-col gap-5"
        >
          <input type="text" placeholder={t('Nombre y apellido', 'Full name')} className="bg-transparent border-b border-hueso-100/30 py-3 text-sm focus:outline-none focus:border-ambar-500" />
          <input type="tel" placeholder={t('Teléfono', 'Phone')} className="bg-transparent border-b border-hueso-100/30 py-3 text-sm focus:outline-none focus:border-ambar-500" />
          <input type="email" placeholder="Email" className="bg-transparent border-b border-hueso-100/30 py-3 text-sm focus:outline-none focus:border-ambar-500" />
          <textarea placeholder={t('Mensaje: producto, volumen y destino', 'Message: product, volume and destination')} className="bg-transparent border-b border-hueso-100/30 py-3 text-sm min-h-28 resize-y focus:outline-none focus:border-ambar-500" />
          <button type="submit" className="self-start bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-9 py-4 text-sm tracking-widest uppercase transition-colors mt-1">
            {t('Enviar consulta', 'Send inquiry')}
          </button>
          <p className="text-xs text-hueso-100/40">
            {t('Boceto: formulario sin envío real, conectar a servicio de email antes de publicar.', "Draft: form is not wired up yet, connect it to an email service before publishing.")}
          </p>
        </motion.form>
      </div>
    </section>
  )
}

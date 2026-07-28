import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Contacto() {
  const { t } = useLanguage()
  return (
    <section id="contacto" className="py-28 bg-carbon-950 text-hueso-100">
      <div className="max-w-2xl mx-auto px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}>
          <div className="text-ambar-400 text-xs tracking-[0.26em] uppercase mb-5">{t('Contacto', 'Contact')}</div>
          <h2 className="font-titulo italic text-3xl md:text-4xl mb-6">
            {t('Empecemos su próxima exportación', "Let's start your next export")}
          </h2>
          <p className="text-hueso-100/65 mb-10">
            {t(
              'Contanos qué producto, volumen y destino necesitás. Respondemos en menos de 24 horas hábiles.',
              'Tell us what product, volume and destination you need. We reply within 24 business hours.'
            )}
          </p>
        </motion.div>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}
          className="flex flex-col gap-5 text-left"
        >
          <input type="text" placeholder={t('Nombre y apellido', 'Full name')} className="bg-transparent border-b border-hueso-100/25 py-3 text-sm focus:outline-none focus:border-ambar-500" />
          <input type="email" placeholder="Email" className="bg-transparent border-b border-hueso-100/25 py-3 text-sm focus:outline-none focus:border-ambar-500" />
          <textarea placeholder={t('Mensaje: producto, volumen y destino', 'Message: product, volume and destination')} className="bg-transparent border-b border-hueso-100/25 py-3 text-sm min-h-28 resize-y focus:outline-none focus:border-ambar-500" />
          <button type="submit" className="self-center bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-9 py-4 text-sm tracking-widest uppercase transition-colors mt-2">
            {t('Enviar consulta', 'Send inquiry')}
          </button>
          <p className="text-xs text-hueso-100/35 text-center">
            {t('Boceto: formulario sin envío real, conectar a servicio de email antes de publicar.', 'Draft: form is not wired up yet, connect it to an email service before publishing.')}
          </p>
        </motion.form>
      </div>
    </section>
  )
}

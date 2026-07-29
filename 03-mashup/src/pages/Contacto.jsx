import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/anim/Reveal.jsx'
import { IMG } from '../images.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Contacto() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero
        eyebrow={t('Contacto', 'Contact')}
        titulo={t('Hablemos de tu próxima exportación', "Let's talk about your next export")}
        subtitulo={t(
          'Producto, volumen y destino. Con eso ya podemos empezar a trabajar.',
          'Product, volume and destination. With that we can already get started.'
        )}
        variant={2}
        image={IMG.deposito}
      />

      <section className="py-24 md:py-28 bg-carbon-950 text-hueso-100">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <Reveal from="right">
            <div className="text-ambar-400 text-xs tracking-[0.26em] uppercase mb-6">{t('Datos de contacto', 'Contact details')}</div>
            <div className="space-y-8">
              <div>
                <div className="text-hueso-100/40 text-xs uppercase tracking-widest mb-2">Email</div>
                <a href="mailto:info@altoandino.com" className="text-lg hover:text-ambar-400 transition-colors">info@altoandino.com</a>
              </div>
              <div>
                <div className="text-hueso-100/40 text-xs uppercase tracking-widest mb-2">{t('Teléfono / WhatsApp', 'Phone / WhatsApp')}</div>
                <a href="#" className="text-lg hover:text-ambar-400 transition-colors">+54 261 000 0000</a>
              </div>
              <div>
                <div className="text-hueso-100/40 text-xs uppercase tracking-widest mb-2">{t('Ubicaciones', 'Locations')}</div>
                <p className="text-hueso-100/70">Mendoza, {t('Argentina', 'Argentina')}</p>
                <p className="text-hueso-100/70">Miami — Florida, {t('Estados Unidos', 'United States')}</p>
              </div>
              <div>
                <div className="text-hueso-100/40 text-xs uppercase tracking-widest mb-2">{t('Horario', 'Hours')}</div>
                <p className="text-hueso-100/70">{t('Lun a Vie · 9 a 18 h (ART)', 'Mon–Fri · 9am–6pm (ART)')}</p>
              </div>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal from="left">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
              <input type="text" placeholder={t('Nombre y apellido', 'Full name')} className="bg-transparent border-b border-hueso-100/25 py-3 text-sm focus:outline-none focus:border-ambar-500" />
              <input type="email" placeholder="Email" className="bg-transparent border-b border-hueso-100/25 py-3 text-sm focus:outline-none focus:border-ambar-500" />
              <input type="text" placeholder={t('Empresa / país', 'Company / country')} className="bg-transparent border-b border-hueso-100/25 py-3 text-sm focus:outline-none focus:border-ambar-500" />
              <textarea placeholder={t('Mensaje: producto, volumen y destino', 'Message: product, volume and destination')} className="bg-transparent border-b border-hueso-100/25 py-3 text-sm min-h-32 resize-y focus:outline-none focus:border-ambar-500" />
              <button type="submit" className="self-start bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-9 py-4 text-sm tracking-widest uppercase transition-colors mt-2">
                {t('Enviar consulta', 'Send inquiry')}
              </button>
              <p className="text-xs text-hueso-100/35">
                {t('Boceto: formulario sin envío real, conectar a servicio de email antes de publicar.', 'Draft: form is not wired up yet, connect it to an email service before publishing.')}
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Productos from '../components/Productos.jsx'
import Proceso from '../components/Proceso.jsx'
import Reveal from '../components/anim/Reveal.jsx'
import { IMG } from '../images.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const calibres = [
  { cal: '3', mm: '45–50 mm', usoEs: 'Industria y procesado', usoEn: 'Industry & processing' },
  { cal: '4', mm: '50–55 mm', usoEs: 'Retail volumen', usoEn: 'Volume retail' },
  { cal: '5', mm: '55–60 mm', usoEs: 'Retail premium', usoEn: 'Premium retail' },
  { cal: '6', mm: '60–65 mm', usoEs: 'Exportación selecta', usoEn: 'Select export' },
  { cal: '7', mm: '65 mm +', usoEs: 'Boutique', usoEn: 'Boutique' },
]

export default function Ajos() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero
        eyebrow={t('Nuestros ajos', 'Our garlic')}
        titulo={t('Ajo blanco y colorado, listo para exportar', 'White and red garlic, export-ready')}
        subtitulo={t(
          'Calibrado, tratado y empacado según el destino. Elegí la línea que necesita tu mercado.',
          'Sized, treated and packed according to destination. Choose the line your market needs.'
        )}
        variant={1}
        image={IMG.ajoPila}
      />

      <Productos />

      {/* Tabla de calibres */}
      <section className="py-24 md:py-28 bg-hueso-100">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="max-w-xl mb-12">
            <div className="text-ambar-500 text-xs tracking-[0.26em] uppercase mb-4">{t('Especificaciones', 'Specifications')}</div>
            <h2 className="text-3xl md:text-4xl text-carbon-950">{t('Calibres disponibles', 'Available sizes')}</h2>
          </div>
          <Reveal>
            <div className="overflow-x-auto border border-carbon-950/10 rounded-xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-carbon-950 text-hueso-100">
                  <tr>
                    <th className="px-6 py-4 font-medium tracking-wide">{t('Calibre', 'Size')}</th>
                    <th className="px-6 py-4 font-medium tracking-wide">{t('Diámetro', 'Diameter')}</th>
                    <th className="px-6 py-4 font-medium tracking-wide">{t('Uso típico', 'Typical use')}</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  {calibres.map((c, i) => (
                    <tr key={c.cal} className={i % 2 ? 'bg-hueso-200/40' : 'bg-white/50'}>
                      <td className="px-6 py-4 font-titulo text-lg text-carbon-950">{c.cal}</td>
                      <td className="px-6 py-4">{c.mm}</td>
                      <td className="px-6 py-4">{t(c.usoEs, c.usoEn)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="text-xs text-neutral-500 mt-4">
            {t('Valores de referencia (boceto) — ajustar a especificación técnica real.', 'Reference values (draft) — adjust to real technical specification.')}
          </p>
        </div>
      </section>

      <Proceso />

      <section className="bg-carbon-950 py-24 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <Reveal>
            <h2 className="font-titulo italic text-2xl md:text-3xl text-hueso-100 mb-8">
              {t('¿Necesitás una cotización por volumen?', 'Need a volume quote?')}
            </h2>
            <Link to="/contacto" className="inline-block bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-10 py-4 text-sm tracking-widest uppercase transition-colors">
              {t('Pedir cotización', 'Request a quote')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

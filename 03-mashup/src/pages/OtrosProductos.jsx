import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import Reveal from '../components/anim/Reveal.jsx'
import SpotlightCard from '../components/anim/SpotlightCard.jsx'
import { IMG } from '../images.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const productos = [
  { img: IMG.molido, es: 'Ajo deshidratado', en: 'Dehydrated garlic', descEs: 'En escamas o granulado, para industria alimentaria.', descEn: 'Flakes or granulated, for the food industry.' },
  { img: IMG.polvo, es: 'Ajo en polvo', en: 'Garlic powder', descEs: 'Molienda fina, larga vida útil y sabor estable.', descEn: 'Fine milling, long shelf life and stable flavor.' },
  { img: IMG.pasta, es: 'Pasta de ajo', en: 'Garlic paste', descEs: 'Lista para uso gastronómico y horeca.', descEn: 'Ready for culinary and horeca use.' },
  { img: IMG.ajoCabezas, es: 'Ajo semilla', en: 'Seed garlic', descEs: 'Semilla certificada para productores.', descEn: 'Certified seed for growers.' },
]

export default function OtrosProductos() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero
        eyebrow={t('Otros productos', 'Other products')}
        titulo={t('Más allá del bulbo fresco', 'Beyond the fresh bulb')}
        subtitulo={t(
          'Derivados y presentaciones alternativas para industria, gastronomía y productores.',
          'Derivatives and alternative formats for industry, gastronomy and growers.'
        )}
        variant={4}
        image={IMG.especias}
      />

      <section className="py-24 md:py-28 bg-hueso-100">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {productos.map((p, i) => (
              <Reveal key={p.es} delay={(i % 2) * 0.1}>
                <SpotlightCard className="h-full bg-carbon-900" color="rgba(224,163,57,0.14)">
                  <div className="flex flex-col sm:flex-row">
                    <PlaceholderImage variant={(i % 4) + 1} src={p.img} alt={p.es} className="h-44 sm:w-44 sm:h-auto shrink-0" />
                    <div className="p-7">
                      <h3 className="text-xl text-hueso-100 mb-3">{t(p.es, p.en)}</h3>
                      <p className="text-sm text-hueso-100/60">{t(p.descEs, p.descEn)}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-carbon-950 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <Reveal>
            <h2 className="font-titulo italic text-2xl md:text-3xl text-hueso-100 mb-8">
              {t('¿Buscás un formato que no está en la lista?', "Looking for a format that isn't listed?")}
            </h2>
            <Link to="/contacto" className="inline-block bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-10 py-4 text-sm tracking-widest uppercase transition-colors">
              {t('Consultanos', 'Ask us')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

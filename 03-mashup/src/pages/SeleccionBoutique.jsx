import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import Reveal from '../components/anim/Reveal.jsx'
import SpotlightCard from '../components/anim/SpotlightCard.jsx'
import TextReveal from '../components/anim/TextReveal.jsx'
import { IMG } from '../images.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const cajas = [
  {
    img: IMG.ajoManojo,
    es: 'Caja Origen', en: 'Origin Box',
    descEs: 'Calibre 7, cabezas seleccionadas a mano, presentación individual.',
    descEn: 'Size 7, hand-selected heads, individual presentation.',
  },
  {
    img: IMG.ajoTrenza,
    es: 'Trenza Artesanal', en: 'Artisanal Braid',
    descEs: 'Trenzado tradicional, pensado para retail gourmet y regalo.',
    descEn: 'Traditional braiding, made for gourmet retail and gifting.',
  },
  {
    img: IMG.ajoCabezas,
    es: 'Edición Limitada', en: 'Limited Edition',
    descEs: 'Lotes numerados de fin de temporada, con ficha de trazabilidad.',
    descEn: 'Numbered end-of-season lots, with a traceability sheet.',
  },
]

export default function SeleccionBoutique() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero
        eyebrow={t('Selección Boutique', 'Boutique Selection')}
        titulo={t('Lo mejor de cada cosecha, en pocas manos', 'The best of each harvest, in few hands')}
        subtitulo={t(
          'Nuestra línea premium: calibres superiores, empaque diferenciado y volúmenes limitados.',
          'Our premium line: superior sizes, distinctive packaging and limited volumes.'
        )}
        variant={3}
        image={IMG.ajoBoutique}
      />

      <section className="py-24 md:py-28 bg-carbon-950">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-16 text-center mx-auto">
            <TextReveal
              text={t('No es más ajo. Es el ajo elegido.', "It's not more garlic. It's the chosen garlic.")}
              as="h2"
              className="font-titulo italic text-3xl md:text-4xl text-hueso-100"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cajas.map((c, i) => (
              <Reveal key={c.es} delay={i * 0.1}>
                <SpotlightCard className="h-full">
                  <PlaceholderImage variant={i + 2} src={c.img} alt={c.es} className="h-56" />
                  <div className="p-7">
                    <h3 className="text-xl text-hueso-100 mb-3">{t(c.es, c.en)}</h3>
                    <p className="text-sm text-hueso-100/60">{t(c.descEs, c.descEn)}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-hueso-100 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <Reveal>
            <p className="text-neutral-700 mb-8">
              {t(
                'Las líneas boutique se producen bajo pedido y con cupo limitado por temporada.',
                'Boutique lines are made to order with a limited seasonal quota.'
              )}
            </p>
            <Link to="/contacto" className="inline-block bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-10 py-4 text-sm tracking-widest uppercase transition-colors">
              {t('Reservar cupo', 'Reserve a quota')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

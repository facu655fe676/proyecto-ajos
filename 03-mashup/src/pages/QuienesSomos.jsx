import PageHero from '../components/PageHero.jsx'
import Stats from '../components/Stats.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import Reveal from '../components/anim/Reveal.jsx'
import SpotlightCard from '../components/anim/SpotlightCard.jsx'
import { IMG } from '../images.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const valores = [
  {
    es: 'Origen', en: 'Origin',
    descEs: 'Ajo cultivado en altura, donde la amplitud térmica concentra sabor y guarda.',
    descEn: 'Garlic grown at altitude, where the thermal range concentrates flavor and shelf life.',
  },
  {
    es: 'Trazabilidad', en: 'Traceability',
    descEs: 'Cada lote identificado desde la semilla hasta el contenedor. Nada se pierde en el camino.',
    descEn: 'Every lot identified from seed to container. Nothing gets lost along the way.',
  },
  {
    es: 'Compromiso', en: 'Commitment',
    descEs: 'Tiempos de exportación que se cumplen y una calidad que se repite temporada tras temporada.',
    descEn: 'Export timelines that are met and a quality that repeats season after season.',
  },
]

export default function QuienesSomos() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero
        eyebrow={t('Quiénes somos', 'About us')}
        titulo={t('Una familia que exporta cosechas, no solo bulbos', 'A family that exports harvests, not just bulbs')}
        subtitulo={t(
          'Tres generaciones cultivando ajo de altura en Mendoza, con la mirada puesta en el mundo.',
          'Three generations growing high-altitude garlic in Mendoza, with our eyes on the world.'
        )}
        variant="hero"
        image={IMG.campoAncho}
      />

      {/* Historia */}
      <section className="py-24 md:py-28 bg-hueso-100">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal from="right">
            <PlaceholderImage variant={1} src={IMG.familia} alt="Familia en el campo" className="h-96 rounded-xl" />
          </Reveal>
          <Reveal from="left">
            <div className="text-ambar-500 text-xs tracking-[0.26em] uppercase mb-4">{t('Nuestra historia', 'Our story')}</div>
            <h2 className="text-2xl md:text-3xl text-carbon-950 mb-6">
              {t('De un lote familiar a 18 países destino', 'From a family plot to 18 destination countries')}
            </h2>
            <p className="text-neutral-700 mb-4">
              {t(
                'Empezamos con unas pocas hectáreas y una convicción: el ajo de altura tiene algo distinto. Con los años sumamos superficie, tecnología y clientes, sin perder el control artesanal sobre cada lote.',
                'We started with a few hectares and one conviction: high-altitude garlic has something different. Over the years we added surface, technology and clients, without losing the artisanal control over every lot.'
              )}
            </p>
            <p className="text-neutral-700">
              {t(
                'Hoy seguimos revisando la cosecha con las mismas manos, y la despachamos con la misma exigencia.',
                'Today we still check the harvest with the same hands, and ship it with the same standards.'
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Valores en SpotlightCards */}
      <section className="py-24 bg-carbon-950">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="max-w-xl mb-14">
            <div className="text-ambar-500 text-xs tracking-[0.26em] uppercase mb-4">{t('Lo que nos define', 'What defines us')}</div>
            <h2 className="text-3xl md:text-4xl text-hueso-100">{t('Tres cosas que no negociamos', 'Three things we never negotiate')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <Reveal key={v.es} delay={i * 0.1}>
                <SpotlightCard className="h-full p-8">
                  <div className="font-titulo text-5xl text-ambar-400/30 mb-6">0{i + 1}</div>
                  <h3 className="text-xl text-hueso-100 mb-3">{t(v.es, v.en)}</h3>
                  <p className="text-sm text-hueso-100/60">{t(v.descEs, v.descEn)}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
    </>
  )
}

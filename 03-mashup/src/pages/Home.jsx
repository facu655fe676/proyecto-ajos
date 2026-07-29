import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import Proceso from '../components/Proceso.jsx'
import Productos from '../components/Productos.jsx'
import Testimonios from '../components/Testimonios.jsx'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import ContainerScroll from '../components/anim/ContainerScroll.jsx'
import TextReveal from '../components/anim/TextReveal.jsx'
import Reveal from '../components/anim/Reveal.jsx'
import { IMG } from '../images.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Home() {
  const { t } = useLanguage()
  return (
    <>
      <Hero />

      {/* Showcase con Container Scroll Animation (21st.dev) */}
      <section className="bg-hueso-100">
        <ContainerScroll
          titulo={
            <>
              <div className="text-ambar-500 text-xs tracking-[0.28em] uppercase mb-4">
                {t('Trazabilidad total', 'Full traceability')}
              </div>
              <TextReveal
                text={t('Una sola historia, del surco al puerto', 'One single story, from furrow to port')}
                as="h2"
                className="font-titulo text-3xl md:text-5xl text-carbon-950"
              />
            </>
          }
        >
          <PlaceholderImage variant={2} src={IMG.galpon} alt="Galpón de empaque y logística" fill />
        </ContainerScroll>
      </section>

      <Stats />
      <Proceso />

      {/* Preview de productos + CTA a la página Ajos */}
      <Productos />
      <section className="bg-carbon-950 pb-28 -mt-10">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <Reveal>
            <Link
              to="/ajos"
              className="inline-block border border-hueso-100/40 hover:border-ambar-400 hover:text-ambar-400 text-hueso-100 px-9 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              {t('Ver todos los ajos', 'See all garlic')}
            </Link>
          </Reveal>
        </div>
      </section>

      <Testimonios />

      {/* Banda CTA final */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3a2c1e] via-[#1c1916] to-[#14120f] py-28">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.03)_0px,rgba(255,255,255,.03)_2px,transparent_2px,transparent_26px)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center text-hueso-100">
          <Reveal>
            <div className="text-ambar-400 text-xs tracking-[0.26em] uppercase mb-5">
              {t('Empecemos', "Let's begin")}
            </div>
            <h2 className="font-titulo italic text-3xl md:text-5xl mb-6">
              {t('Su próxima exportación arranca acá', 'Your next export starts here')}
            </h2>
            <p className="text-hueso-100/65 mb-10 max-w-lg mx-auto">
              {t(
                'Contanos producto, volumen y destino. Respondemos en menos de 24 horas hábiles.',
                'Tell us product, volume and destination. We reply within 24 business hours.'
              )}
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-10 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              {t('Contactar', 'Get in touch')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function NoEncontrada() {
  const { t } = useLanguage()
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-carbon-950 text-center px-8">
      <div>
        <div className="font-titulo text-7xl md:text-9xl italic text-ambar-400/80 mb-6">404</div>
        <p className="text-hueso-100/70 mb-10">
          {t('Esta página se perdió en el camino al puerto.', 'This page got lost on the way to the port.')}
        </p>
        <Link to="/" className="inline-block bg-ambar-500 hover:bg-ambar-400 text-carbon-950 px-9 py-4 text-sm tracking-widest uppercase transition-colors">
          {t('Volver al inicio', 'Back home')}
        </Link>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Header() {
  const { lang, toggle, t } = useLanguage()
  const [conScroll, setConScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => setConScroll(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        conScroll ? 'bg-carbon-950/90 backdrop-blur-sm py-4' : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <div className="font-titulo text-lg text-hueso-100 tracking-wide">ALTO ANDINO</div>
        <div className="flex items-center gap-5">
          <button onClick={toggle} className="text-xs tracking-widest uppercase text-hueso-100/80 hover:text-ambar-400 transition-colors">
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a
            href="#contacto"
            className="hidden sm:inline-block border border-hueso-100/40 hover:border-ambar-400 hover:text-ambar-400 text-hueso-100 text-xs tracking-widest uppercase px-5 py-2.5 transition-colors"
          >
            {t('Contacto', 'Contact')}
          </a>
        </div>
      </div>
    </header>
  )
}

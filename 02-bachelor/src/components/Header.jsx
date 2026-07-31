import { useLanguage } from '../i18n/LanguageContext.jsx'

const enlaces = [
  { href: '#empresa', es: 'Empresa', en: 'Company' },
  { href: '#productos', es: 'Productos', en: 'Products' },
  { href: '#video', es: 'Video', en: 'Video' },
  { href: '#contacto', es: 'Contacto', en: 'Contact' },
]

export default function Header() {
  const { lang, toggle, t } = useLanguage()
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-hueso-100/95 backdrop-blur-sm border-b border-black/10">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="font-titulo text-xl text-carbon-900 tracking-wide">
          ALTO ANDINO
          <span className="block font-texto text-[0.55rem] tracking-[0.3em] uppercase text-ambar-500 font-normal mt-0.5">
            Garlic Export Co.
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-9">
          {enlaces.map((e) => (
            <a key={e.href} href={e.href} className="text-sm tracking-wide uppercase text-carbon-900 hover:text-ambar-400 transition-colors">
              {t(e.es, e.en)}
            </a>
          ))}
          <button
            onClick={toggle}
            className="border border-carbon-900/30 rounded-full text-xs tracking-wide px-3 py-1.5 hover:bg-ambar-500 hover:border-ambar-500 hover:text-hueso-100 transition-colors"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>
      </div>
    </header>
  )
}

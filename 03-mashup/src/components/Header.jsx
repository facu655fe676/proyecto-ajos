import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV } from '../nav.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Header() {
  const { lang, toggle, t } = useLanguage()
  const [conScroll, setConScroll] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    const onScroll = () => setConScroll(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea el scroll del body con el overlay abierto.
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuAbierto])

  const claseLink = ({ isActive }) =>
    `relative text-xs tracking-[0.18em] uppercase transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-ambar-400 after:transition-all ${
      isActive
        ? 'text-ambar-400 after:w-full'
        : 'text-hueso-100/80 hover:text-hueso-100 after:w-0 hover:after:w-full'
    }`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        conScroll ? 'bg-carbon-950/92 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <NavLink to="/" className="font-titulo text-lg text-hueso-100 tracking-wide">
          ALTO ANDINO
        </NavLink>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={claseLink} end={item.to === '/'}>
              {t(item.es, item.en)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="text-xs tracking-widest uppercase text-hueso-100/80 hover:text-ambar-400 transition-colors"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Botón hamburguesa (mobile / tablet) */}
          <button
            onClick={() => setMenuAbierto(true)}
            className="lg:hidden flex flex-col gap-1.5 p-1"
            aria-label={t('Abrir menú', 'Open menu')}
          >
            <span className="block w-6 h-px bg-hueso-100" />
            <span className="block w-6 h-px bg-hueso-100" />
            <span className="block w-4 h-px bg-hueso-100" />
          </button>
        </div>
      </div>

      {/* Overlay menú mobile */}
      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-carbon-950 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-titulo text-lg text-hueso-100">ALTO ANDINO</span>
              <button
                onClick={() => setMenuAbierto(false)}
                className="text-hueso-100 text-3xl leading-none p-1"
                aria-label={t('Cerrar menú', 'Close menu')}
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col justify-center flex-1 px-8 gap-2">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMenuAbierto(false)}
                    className={({ isActive }) =>
                      `block font-titulo text-3xl py-3 transition-colors ${
                        isActive ? 'text-ambar-400 italic' : 'text-hueso-100 hover:text-ambar-400'
                      }`
                    }
                  >
                    {t(item.es, item.en)}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

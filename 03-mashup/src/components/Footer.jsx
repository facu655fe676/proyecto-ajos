import { NavLink } from 'react-router-dom'
import { NAV } from '../nav.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-carbon-900 text-hueso-100/70 border-t border-hueso-100/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid gap-12 md:grid-cols-4">
        {/* Marca */}
        <div className="md:col-span-1">
          <div className="font-titulo text-xl text-hueso-100 mb-4">ALTO ANDINO</div>
          <p className="text-sm text-hueso-100/55 max-w-xs">
            {t(
              'Exportadores de ajo de altura. Del campo al contenedor, con trazabilidad en cada lote.',
              'High-altitude garlic exporters. From the field to the container, with traceability in every lot.'
            )}
          </p>
        </div>

        {/* Navegación */}
        <div>
          <div className="text-ambar-500 text-xs tracking-[0.22em] uppercase mb-5">
            {t('Navegación', 'Navigation')}
          </div>
          <ul className="space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className="hover:text-ambar-400 transition-colors">
                  {t(item.es, item.en)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Ubicaciones */}
        <div>
          <div className="text-ambar-500 text-xs tracking-[0.22em] uppercase mb-5">
            {t('Ubicaciones', 'Locations')}
          </div>
          <ul className="space-y-3 text-sm text-hueso-100/60">
            <li>Mendoza, {t('Argentina', 'Argentina')}</li>
            <li>Miami — Florida, {t('Estados Unidos', 'United States')}</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <div className="text-ambar-500 text-xs tracking-[0.22em] uppercase mb-5">
            {t('Contacto', 'Contact')}
          </div>
          <ul className="space-y-3 text-sm text-hueso-100/60">
            <li>
              <a href="mailto:info@altoandino.com" className="hover:text-ambar-400 transition-colors">
                info@altoandino.com
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-ambar-400 transition-colors">WhatsApp</a>
            </li>
            <li className="flex gap-4 pt-2">
              <a href="#" className="hover:text-ambar-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-ambar-400 transition-colors">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hueso-100/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-hueso-100/40">
          <span>© {new Date().getFullYear()} ALTO ANDINO. {t('Todos los derechos reservados.', 'All rights reserved.')}</span>
          <span>{t('Boceto reestructurado — Mashup 3', 'Restructured draft — Mashup 3')}</span>
        </div>
      </div>
    </footer>
  )
}

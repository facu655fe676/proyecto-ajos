import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-espresso-900 text-crema-100/70 py-12 border-t border-crema-100/10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="font-titulo text-lg text-crema-100">ALTO ANDINO</div>
          <div className="text-sm text-right leading-relaxed">
            <div>{t('Ruta Provincial S/N, Mendoza, Argentina', 'Provincial Route S/N, Mendoza, Argentina')}</div>
            <div>Tel/Fax: +54 261 000 0000 · ventas@altoandino.com</div>
          </div>
        </div>
        <div className="mt-8 pt-5 border-t border-crema-100/10 text-xs text-center text-crema-100/45">
          © {new Date().getFullYear()} ALTO ANDINO. {t('Todos los derechos reservados. — Boceto 2, estilo Bachelor SRL', 'All rights reserved. — Draft 2, Bachelor SRL style')}
        </div>
      </div>
    </footer>
  )
}

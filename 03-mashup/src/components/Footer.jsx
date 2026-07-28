import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-carbon-900 text-hueso-100/60 text-xs text-center py-8 border-t border-hueso-100/10">
      © {new Date().getFullYear()} ALTO ANDINO. {t('Todos los derechos reservados.', 'All rights reserved.')} — {t('Boceto 3', 'Draft 3')}
    </footer>
  )
}

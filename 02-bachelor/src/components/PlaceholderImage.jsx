import { useLanguage } from '../i18n/LanguageContext.jsx'

const gradientes = {
  hero: 'from-[#3a2c1e] to-[#211a15]',
  1: 'from-[#8a6a42] to-[#2b221b]',
  2: 'from-[#6b5636] to-[#241a12]',
  3: 'from-[#5a6b4d] to-[#212b1c]',
  4: 'from-[#af6f4d] to-[#2b1d13]',
}

export default function PlaceholderImage({ variant = 1, labelEs, labelEn, className = '', fill = false }) {
  const { t } = useLanguage()
  const posicion = fill ? 'absolute inset-0' : 'relative'
  return (
    <div className={`${posicion} flex items-end overflow-hidden bg-gradient-to-br ${gradientes[variant]} ${className}`}>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.04)_0px,rgba(255,255,255,.04)_2px,transparent_2px,transparent_26px)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/60" />
      <span className="relative z-10 text-crema-100 text-[0.7rem] tracking-[0.12em] uppercase px-4 py-3 opacity-85">
        {t(labelEs, labelEn)}
      </span>
    </div>
  )
}

import { useRef, useState } from 'react'

/**
 * SpotlightCard — tarjeta con foco de luz que sigue al cursor.
 * Basado en el "Spotlight Card" de 21st.dev, reimplementado sin dependencias.
 */
export default function SpotlightCard({ children, className = '', color = 'rgba(224,163,57,0.18)' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [activo, setActivo] = useState(false)

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setActivo(true)}
      onMouseLeave={() => setActivo(false)}
      className={`group relative overflow-hidden rounded-xl border border-hueso-100/12 bg-carbon-900 transition-colors duration-300 hover:border-ambar-500/40 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: activo ? 1 : 0,
          background: `radial-gradient(340px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

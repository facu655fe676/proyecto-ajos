import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function Contador({ hasta, sufijo = '' }) {
  const ref = useRef(null)
  const enVista = useInView(ref, { once: true, amount: 0.6 })
  const [valor, setValor] = useState(0)

  useEffect(() => {
    if (!enVista) return
    const duracion = 1400
    const inicio = performance.now()
    let cuadro
    const animar = (ahora) => {
      const progreso = Math.min((ahora - inicio) / duracion, 1)
      const facilitado = 1 - Math.pow(1 - progreso, 3)
      setValor(Math.round(facilitado * hasta))
      if (progreso < 1) cuadro = requestAnimationFrame(animar)
    }
    cuadro = requestAnimationFrame(animar)
    return () => cancelAnimationFrame(cuadro)
  }, [enVista, hasta])

  return (
    <span ref={ref}>
      {valor}{sufijo}
    </span>
  )
}

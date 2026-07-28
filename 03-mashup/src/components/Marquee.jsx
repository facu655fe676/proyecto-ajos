const paises = [
  'Estados Unidos', 'Brasil', 'España', 'Alemania', 'Países Bajos',
  'Italia', 'Reino Unido', 'Emiratos Árabes', 'Canadá', 'México',
]

export default function Marquee() {
  const contenido = [...paises, ...paises]
  return (
    <div className="bg-carbon-900 py-5 overflow-hidden border-y border-hueso-100/10">
      <div className="flex w-max animate-[marquee_32s_linear_infinite]">
        {contenido.map((pais, i) => (
          <span key={i} className="flex items-center text-hueso-100/70 text-sm tracking-[0.15em] uppercase px-8 whitespace-nowrap">
            {pais}
            <span className="ml-8 text-ambar-500">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

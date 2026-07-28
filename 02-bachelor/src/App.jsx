import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Nosotros from './components/Nosotros.jsx'
import Video from './components/Video.jsx'
import Productos from './components/Productos.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <Nosotros />
      <Video />
      <Productos />
      <Contacto />
      <Footer />
    </LanguageProvider>
  )
}

export default App

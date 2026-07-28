import { LanguageProvider } from './i18n/LanguageContext.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Proceso from './components/Proceso.jsx'
import Productos from './components/Productos.jsx'
import Testimonios from './components/Testimonios.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Header />
      <Hero />
      <Stats />
      <Proceso />
      <Productos />
      <Testimonios />
      <Contacto />
      <Footer />
    </LanguageProvider>
  )
}

export default App

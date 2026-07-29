import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Ajos from './pages/Ajos.jsx'
import SeleccionBoutique from './pages/SeleccionBoutique.jsx'
import OtrosProductos from './pages/OtrosProductos.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/ajos" element={<Ajos />} />
            <Route path="/seleccion-boutique" element={<SeleccionBoutique />} />
            <Route path="/otros-productos" element={<OtrosProductos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

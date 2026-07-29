import { Outlet } from 'react-router-dom'
import ScrollProgress from './ScrollProgress.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-hueso-100">
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

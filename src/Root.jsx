import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'
import Overlays from './components/Overlays.jsx'
import { Outlet } from 'react-router'

export default function App() {

  return (
    <>
      <Overlays />
      <div className='app'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
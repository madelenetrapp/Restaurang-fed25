import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet, useNavigation } from 'react-router'
import LoadingPage from './pages/LoadingPage.jsx'

export default function App() {

  const navigation = useNavigation()

  const isLoading = navigation.state === 'loading'

  return (

    <div className='app'>
      <Header />


      <main>
        {isLoading
          ? (<LoadingPage />)
          : (<Outlet />)
        }
      </main>
      {/* TODO ta bort footer i cart page? */}
      <Footer />
    </div>

  )
}
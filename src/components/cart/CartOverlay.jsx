import { NavLink } from 'react-router'
import { useState } from 'react'
import LoadingPage from '../../pages/LoadingPage.jsx'

export default function CartOverlay({ onDismiss }) {


  const [isLoading, setLoading] = useState(true)



  setTimeout(() => {
    setLoading(false)
  }, 2000)

  return (
    <div className='cart-page-relative-wrapper'>
      <div className='cart-overlay'>
        {isLoading === true
          ? <LoadingPage />


          : <>
            <h1>Success</h1>
            <NavLink to="/" className='button' onClick={() => onDismiss()}>Home</NavLink>
          </>
        }
      </div>
    </div>
  )
}
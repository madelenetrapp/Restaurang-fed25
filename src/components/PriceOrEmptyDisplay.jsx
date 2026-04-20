import { NavLink, Navigate } from 'react-router'
export default function PriceOrEmptyDisplay({ totalPrice, cart, handlePayment }) {

  // if (cart.length === 0) return <Navigate to="/menu" replace />

  return (
    cart.length !== 0
      ? (
        <>
          <h1>TOTAL: {totalPrice} SEK</h1>
          <button className='login-btn' onClick={handlePayment}>Auto pay?</button>
        </>
      )
      : (
        <div>
          <h2>Empty</h2>
          <h3> Back to Menu? </h3>
          <NavLink to='/menu' className='button'>Menu</NavLink>
        </div>
      )
  )
}
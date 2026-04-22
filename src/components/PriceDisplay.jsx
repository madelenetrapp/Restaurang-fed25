import { NavLink } from 'react-router'

export default function PriceDisplay({ totalPrice, cart, handlePayment }) {

  return (
    cart.length !== 0
      ? (
        <div className='price-display'>
          <p className='total-text'>TOTAL: {totalPrice} SEK</p>
          <div className='pay-btn-wrapper'>
          <button className='button' onClick={handlePayment}> Place Order </button>
          </div>
        </div>
          
      )
      : (
        <div className='price-display'>
          <h2>Empty</h2>
          <h3> Back to Menu? </h3>
          <NavLink to='/menu' className='button'>Menu</NavLink>
        </div>
      )
  )
}
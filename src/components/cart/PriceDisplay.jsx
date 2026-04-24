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
          <h2> Your cart is empty</h2>
          <h3> Add something delicious to get started </h3>
          <div className='pay-btn-wrapper'>
          <NavLink to='/menu' className='button'> View Menu</NavLink>
          </div>
        </div>
      )
  )
}
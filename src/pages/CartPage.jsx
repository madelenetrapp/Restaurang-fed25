import { useState } from 'react'
import { useCartStore } from '../hooks/useCartStore.js'
import { useTypeSort } from '../hooks/useTypeSort.js'
import CartItem from '../components/cart/CartItem.jsx'
import PriceDisplay from '../components/cart/PriceDisplay.jsx'
import CartOverlay from '../components/cart/CartOverlay.jsx'

export default function CartPage() {

  const { cart, totalPrice } = useCartStore()

  const menuTypes = useTypeSort(cart)

  const [paid, setPaid] = useState(false)


  const handlePayment = () => {
    setPaid(true)
  }

  return (
    <>
      {/* Use conditional rendering instead of CSS to show overlay.. and make it into a true overlay... */}
      <div className='anchor' data-show={paid ? 'displayed' : 'hidden'}>
        <CartOverlay />
      </div>

      <div className='anchor' data-show={paid ? 'hidden' : 'displayed'}>
        <h1>Cart</h1>

        <div className='cart-grid-box'>
          {menuTypes.map(type => (
            <div key={type} className='type-box' >

              <h2> {type} </h2>
              {cart.filter(s => s.type === type).map(item => (
                <CartItem key={item.name} item={item} />
              ))}
            </div>
          ))}
        </div>

        <PriceDisplay totalPrice={totalPrice} cart={cart} handlePayment={handlePayment} />
      </div>
    </>

  )
}
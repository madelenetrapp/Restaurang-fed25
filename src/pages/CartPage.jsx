import { useCartStore } from '../hooks/useCartStore.js'
import { useTypeSort } from '../hooks/useTypeSort.js'
import CartItem from '../components/CartItem.jsx'
import { NavLink } from 'react-router'

import { useState } from 'react'
import PriceOrEmptyDisplay from '../components/PriceOrEmptyDisplay.jsx'
import CartOverlay from '../components/CartOverlay.jsx'
export default function CartPage() {


  const { cart, totalPrice } = useCartStore()

  const menuTypes = useTypeSort(cart)


  const [paid, setPaid] = useState(false)

  const handlePayment = () => {
    setPaid(true)
  }

  return (

    <>
      {/* TODO move this out of CartPage into its own overlay component */}
      <div className='anchor' data-show={paid ? 'displayed' : 'hidden'}>
        <CartOverlay />
      </div>

      <div className='anchor' data-show={paid ? 'hidden' : 'displayed'}>
        <h1>Cart</h1>

        <div className='grid-box'>
          {menuTypes.map(type => (
            <div key={type} className='type-box' >

              <h2> {type} </h2>
              {cart.filter(s => s.type === type).map(item => (
                <CartItem key={item.name} item={item} />
              ))}
            </div>
          ))}
        </div>

        <PriceOrEmptyDisplay totalPrice={totalPrice} cart={cart} handlePayment={handlePayment} />
      </div>
    </>

  )
}
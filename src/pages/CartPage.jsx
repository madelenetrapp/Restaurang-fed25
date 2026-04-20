import { useCartStore } from '../hooks/useCartStore.js'
import { useTypeSort } from '../hooks/useTypeSort.js'
import CartItem from '../components/CartItem.jsx'
import { NavLink } from 'react-router'

import { useState } from 'react'
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
      <div className='anchor' data-show={paid ? 'displayed' : 'hidden'}>HELLO
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

        {cart.length !== 0
          ? (
            <>
              <h1>TOTAL: {totalPrice} SEK</h1>
              <button onClick={handlePayment}>Auto pay?</button>
            </>
          )
          : (
            <>
              <h1> Back to Menu? </h1>
              <NavLink to='/menu' className='navlink-button'>Menu</NavLink>
            </>
          )
        }
      </div>
    </>

  )
}
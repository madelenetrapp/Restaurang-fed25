import { useState } from 'react'
import { useCartStore } from '../hooks/useCartStore.js'
import { useTypeSort } from '../hooks/useTypeSort.js'
import CartItem from '../components/cart/CartItem.jsx'
import PriceDisplay from '../components/cart/PriceDisplay.jsx'
import CartOverlay from '../components/cart/CartOverlay.jsx'
import { useMenuStore } from '../hooks/useMenuStore.js'

export default function CartPage() {

  const { clearCart, cart, totalPrice } = useCartStore()

  const { menuTypes } = useMenuStore()

  const orderedMenuTypes = useTypeSort(cart, menuTypes)

  const [paid, setPaid] = useState(false)


  const handlePayment = () => setPaid(true)

  const handleDismiss = () => {
    setPaid(false)
    clearCart()
  }

  const totalPriceRounded = Math.round(totalPrice)

  return (

    <>

      <h1>Cart</h1>

      <div className='cart-grid-box'>
        {orderedMenuTypes.map(type => (
          <div key={type} className='type-box' >

            <h2> {type} </h2>
            {cart.filter(s => s.type === type).map(item => (
              <CartItem key={item.name} item={item} />
            ))}
          </div>
        ))}
      </div>

      <PriceDisplay totalPrice={totalPriceRounded} cart={cart} handlePayment={handlePayment} />

      <div className='extra-space'></div>
      {paid &&
        <>
          <div className='not-paid-dark'>
            <CartOverlay onDismiss={handleDismiss} />
          </div>
        </>}
    </>

  )
}
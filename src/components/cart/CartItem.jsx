import { useCartStore } from '../../hooks/useCartStore'

export default function CartItem({ item }) {


  const { addCartItem, removeCartItem } = useCartStore()

  const add = () => { addCartItem(item) }
  const subtract = () => { removeCartItem(item.name) }

  return (
    <div className='cart-card'>
      <div className='cart-card-top'>
        <span className='cart-item-name'>{item.name}</span>
        <span className='cart-item-price'>{item.price} SEK</span>
      </div>
      <div className='quantity-controls'>
        <button className="quantity-btn" onClick={subtract}>−</button>
        <p className="item-quantity">{item.quantity} {item.quantity === 1 ? 'item' : 'items'} </p>
        <button className="quantity-btn" onClick={add}>+</button>
      </div>
    </div>
  )
}
import { useCartStore } from '../hooks/useCartStore'

export default function CartItem({ item }) {


  const { addCartItem, removeCartItem } = useCartStore()

  const add = () => { addCartItem(item) }
  const subtract = () => { removeCartItem(item.name) }

  // return (
  //   <div className="card-container" key={item.name}>
  //     <div className='item-name-and-icons'>
  //       <h3 className="h3-header">{item.name}</h3>
  //       <h3 className='item-name'>T E S T I N G L E N G T H A N D W H E N T O W R A P</h3>
  //     </div>
  //     <p className="price"> {item.price} SEK</p>
  //     <p> {item.quantity}</p>
  //     <button onClick={subtract}>-</button>
  //     <button onClick={add}>+</button>
  //   </div>
  // )

  return (
    <div className='cart-card'>
      <div className='cart-card-top'>
        <span className='cart-item-name'>{item.name}</span>
        <span className='cart-item-price'>{item.price}</span>
      </div>
      <div className='quantity-controls'>
        <button className="quantity-btn" onClick={subtract}>−</button>
        <p className="item-quantity">{item.quantity} item(s)</p>
        <button className="quantity-btn" onClick={add}>+</button>
      </div>
    </div>
  )
}
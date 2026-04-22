import { useCartStore } from '../hooks/useCartStore'

export default function CartItem({ item }) {


  const { addToCart, removeItem } = useCartStore()

  const add = () => { addToCart(item) }
  const subtract = () => { removeItem(item.name) }

  return (
    <div className="card-container" key={item.name}>
      <div className='item-name-and-icons'>
        <h3 className="h3-header">{item.name}</h3>
        <h3 className='item-name'>T E S T I N G L E N G T H A N D W H E N T O W R A P</h3>
      </div>
      <p className="price"> {item.price} SEK</p>
      <p> {item.quantity}</p>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  )
}
import spicyIcon from '../../assets/icon-spicy.svg'
import veganIcon from '../../assets/icon-vegan.svg'
import glutenFreeIcon from '../../assets/icon-gluten-free.svg'
import { useCartStore } from '../../hooks/useCartStore.js'
export default function CartItem({ item }) {


  const { addCartItem, removeCartItem } = useCartStore()

  const add = () => { addCartItem(item) }
  const subtract = () => { removeCartItem(item.name) }

  return (
    <div className='cart-card'>
      <div className='cart-card-top'>
        <span className='cart-item-name'>{item.name}</span>
        <div>
          <div className='dietary-icons'>
            {item.tags.vegan && <img src={veganIcon} alt="vegan" />}
            {item.tags.glutenFree && <img src={glutenFreeIcon} alt="gluten free" />}
            {item.tags.spicy > 0 && Array.from({ length: item.tags.spicy }).map((_, i) => (
              <img key={i} src={spicyIcon} alt="spicy" />
            ))}
          </div>
        </div>
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
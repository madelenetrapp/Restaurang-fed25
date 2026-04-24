import { cartStore } from '../../store/cartStore.js'
import DietaryIcons from './DietaryIcons.jsx'

export default function UserMenu({ item }) {

  const { addCartItem } = cartStore()

  const add = () => {
    addCartItem(item)
  }

  return (
    <div className="card-container" key={item.name} onClick={add}>
      <div className='item-name-and-icons'>
        <DietaryIcons tags={item.tags} />
        <h3 className="h3-header">{item.name}</h3>
      </div>

      <div className='bread-text-area'>
        <p className="description"> {item.description}</p>
        <p className="price"> {item.price} SEK</p>
      </div>
    </div >
  )
}

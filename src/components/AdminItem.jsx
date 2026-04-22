import { cartStore } from '../store/cartStore.js'
import DietaryIcons from './DietaryIcons.jsx'

export default function AdminItem({ item, isLoggedIn, removeMenuItem }) {

  const { addCartItem } = cartStore()

  const add = () => {
    addCartItem(item)
  }

const handleRemoveItem = () => {
removeMenuItem(item.name)
}

  return (
    <div className="card-container" key={item.name} onClick={add}>
<button className='button admin-remove' onClick={handleRemoveItem}>X</button>
      <div className='item-name-and-icons'>
        <DietaryIcons tags={item.tags} />
        <h3 className="h3-header">{item.name}</h3>
        {/* <h3 className='item-name'>T E S T I N G L E N G T H A N D W H E N T O W R A P</h3> */}
      </div>

      <div className='bread-text-area'>
        <p className="description"> {item.description}</p>
        <p className="price"> {item.price} SEK</p>
      </div>



    </div >
  )
}

import { cartStore } from '../store/cartStore.js'
import DietaryIcons from './DietaryIcons.jsx'

export default function MenuItem({ item }) {

  const { addToCart } = cartStore()

  const add = () => {
    addToCart(item)
  }

  return (
    <div className="card-container" key={item.name} onClick={add}>
      <div className='item-name-and-icons'>
        <DietaryIcons tags={item.tags} />
        <h3 className="card-header">{item.name}</h3>
        {/* <h3 className='item-name'>T E S T I N G L E N G T H A N D W H E N T O W R A P</h3> */}
      </div>

      <div className='bread-text-area'>
        {/* <div className='remove-wrapper'> */}
        {/* <div className='remove-shape'></div> */}
        <p className="description"> {item.description}</p>
        {/* </div> */}
        <p className="price"> {item.price} SEK</p>
        {/* </div> */}

      </div>



    </div >
  )
}

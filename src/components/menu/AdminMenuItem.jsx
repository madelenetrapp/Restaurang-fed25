import { useState } from 'react'
import DietaryIcons from './DietaryIcons.jsx'
import { useMenuStore } from '../../hooks/useMenuStore.js'
import EditingMenuItem from './editingMenuItem.jsx'

export default function AdminMenuItem({ item }) {

  const { removeMenuItem } = useMenuStore()
  const [isEditing, setIsEditing] = useState(false)

  const handleRemoveItem = () => {

    //validerings medelande att spara innan man vill ta bort?
    // Är du säker popup? //TODO extra jobb :D
    //om ingen validering kör inline () => removeMenuItem(item.name)
    removeMenuItem(item.name)
  }

  return (
    <div className={`card-container ${isEditing ? "card-editing-col" : ''}`} key={item.name}>
      <button className='button admin-remove' onClick={(handleRemoveItem)}>X</button>


      {isEditing ? <EditingMenuItem item={item} setIsEditing={setIsEditing} /> :
        <>
          <div className='item-name-and-icons'>
            <DietaryIcons tags={item.tags} />
            <h3 className="h3-header">{item.name}</h3>
          </div>

          <div className='bread-text-area'>
            <p className="description"> {item.description}</p>

            <div className='cost-and-edit'>
              <button className='button edit-save-button' onClick={() => setIsEditing(true)}>Edit</button>
              <p className="price"> {item.price} SEK</p>
            </div>
          </div>
        </>
      }
    </div >
  )
}

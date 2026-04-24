import { useState } from 'react'
import DietaryIcons from './DietaryIcons.jsx'
import { useMenuStore } from '../../hooks/useMenuStore.js'
import EditingMenuItem from './editingMenuItem.jsx'

export default function AdminMenuItem({ item }) {

  const { removeMenuItem } = useMenuStore()
  const [isEditing, setIsEditing] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleRemoveItem = () => {
    setShowConfirm(true)
  }


  const handelConfirmRemove = () => {
    //validerings medelande att spara innan man vill ta bort?
    //om ingen validering kör inline () => removeMenuItem(item.name)
    removeMenuItem(item.name)
    setShowConfirm(false)
  }

  return (
    <div className={`card-container ${isEditing ? "card-editing-col" : ''}`} key={item.name}>
      <button className='button admin-remove' onClick={(handleRemoveItem)}>X</button>

      {showConfirm && (
        <div className='confirm-popup'>
          <p>Are you sure you want to remove this dish?</p>
            <div className='confirm-popup-buttons'>
              <button className='button confirm-button' onClick={handelConfirmRemove}>Yes</button>
              <button className='button cancel-button' onClick={() => setShowConfirm(false)}>No</button>
          
            </div>
        </div>
      )}


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

import { useState } from 'react'
import { useMenuStore } from '../../../hooks/useMenuStore.js'
import DietaryIcons from '../DietaryIcons.jsx'
import EditingMenuItem from './EditingMenuItem.jsx'

export default function AdminMenu({ item }) {

  const { removeMenuItem, saveZustandMenuToApi } = useMenuStore()
  const [isEditing, setIsEditing] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleConfirmedRemoval = () => {
    removeMenuItem(item.name)
    setShowConfirm(false)
    saveZustandMenuToApi()
  }

  return (
    <div className={`card-container ${isEditing ? "card-editing" : ''}`}>
      <button className='button admin-remove' onClick={() => setShowConfirm(true)}>X</button>

      {showConfirm && (
        <div className='confirm-popup'>
          <p>Are you sure you want to remove this {item.type === 'Beer & Cider' ? 'drink' : 'dish'} from the menu?</p>
          <div className='confirm-popup-buttons'>
            <button className='button' onClick={handleConfirmedRemoval}>Yes</button>
            <button className='button' onClick={() => setShowConfirm(false)}>No</button>

          </div>
        </div>
      )}


      {isEditing ?
        <EditingMenuItem item={item} setIsEditing={setIsEditing}
        />
        :
        <>
          <div className='item-name-and-icons'>
            <h3 className="h3-header">{item.name}</h3>
            <DietaryIcons tags={item.tags} />
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

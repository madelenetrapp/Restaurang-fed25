import { useState } from 'react'
import DietaryIcons from './DietaryIcons.jsx'
import { useMenuStore } from '../../hooks/useMenuStore.js'

export default function AdminMenuItem({ item }) {

  const [isEditing, setIsEditing] = useState(false)

  const { saveZustandMenuToApi, getMenuItemByName, editMenuItem, removeMenuItem } = useMenuStore()

  const handleRemoveItem = () => {

    //validerings medelande att spara innan man vill ta bort?
    // Är du säker popup? //TODO extra jobb :D
    //om ingen validering kör inline () => removeMenuItem(item.name)
    removeMenuItem(item.name)

  }

  const [draft, setDraft] = useState({
    name: item.name,
    type: item.type,
    price: item.price,
    description: item.description,
    tags: { ...item.tags }
  })

  const handleSaveUpdate = () => {

    //validering behövs här!

    const checkName = getMenuItemByName(draft.name) //får inte vara samma som draft.name
    if (checkName === draft.name) return 'invalidInput'

    setIsEditing(false)
    editMenuItem(item.name, draft)
    saveZustandMenuToApi()
  }

  return (
    <div className="card-container" key={item.name}>
      <button className='button admin-remove' onClick={(handleRemoveItem)}>X</button>

      {isEditing
        ? <>
          <div className='item-name-and-icons'>
            {/* <DietaryIcons tags={item.tags} /> */}

            {/* TODO dietaryEditing */}
            <input className="login-input"
              value={draft.name}
              onChange={e => setDraft(prev =>
                ({ ...prev, name: e.target.value }))}></input>
          </div>

          <div className='bread-text-area'>
            <textarea className="description"
              value={draft.description}
              onChange={e => setDraft(prev =>
                ({ ...prev, description: e.target.value }))}>
            </textarea>

            <div className='cost-and-edit'>
              <button className='button edit-save-button'
                onClick={handleSaveUpdate}>Save</button>
              <input className="login-input"
                value={draft.price}
                onChange={e => setDraft(prev =>
                  ({ ...prev, price: e.target.value })
                )}
              ></input>
            </div>
          </div>
        </>
        : <>
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

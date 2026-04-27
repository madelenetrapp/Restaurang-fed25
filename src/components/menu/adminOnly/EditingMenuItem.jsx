import { useMenuStore } from '../../../hooks/useMenuStore.js'
import { useState } from 'react'
import { validateMenuItem, checkDuplicateName } from '../../../utils/validation.js'
import EditDietaryIcons from './EditDietaryIcons.jsx'

export default function EditingMenuItem({ item, setIsEditing }) {
  const { saveZustandMenuToApi,
    getMenuItemByName,
    editMenuItem } = useMenuStore()

  const [errors, setErrors] = useState('')
  const [draft, setDraft] = useState(item)

  const handleSaveUpdate = () => {

    const fieldErrors = validateMenuItem(draft)

    const duplicateNameError = checkDuplicateName(draft, item, getMenuItemByName)
    if (duplicateNameError) {
      fieldErrors.name = duplicateNameError
    }

    if (Object.keys(fieldErrors).length > 0) {
      return setErrors(fieldErrors)
    }

    setErrors('')
    setIsEditing(false)
    editMenuItem(item.name, draft)
    saveZustandMenuToApi()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') e.target.blur()
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor={item.name} className='hidden'></label>
      <input
        id={item.name}
        type="text"
        className="input admin-card-title"
        value={draft.name}
        onChange={e =>
          setDraft(prev =>
            ({ ...prev, name: e.target.value }))}
        onKeyDown={handleKeyDown}
      ></input>
      <div className="error-tethering">
        {errors.name && <p className='error-message error-message-admin'>{errors.name}</p>}
      </div>
      <EditDietaryIcons
        tags={draft.tags}
        setTags={tags =>
          setDraft(prev => ({ ...prev, tags }))} />

      <div className='bread-text-area'>
        <label htmlFor={"item-description"} className='hidden'></label>
        <textarea
          id={"item-description"}
          className="description admin-text-area"
          spellCheck="true"
          value={draft.description}
          onChange={e => setDraft(prev =>
            ({ ...prev, description: e.target.value }))}>
        </textarea>
        <div className='error-tethering'>
          {errors.description && <p className='error-message error-message-admin'>{errors.description}</p>}
        </div>
        <div className='save-and-price-admin'>
          <div className='admin-price-adjust'>
            <label htmlFor={`${item.name}-price`} className='hidden'></label>
            <input
              id={`${item.name}-price`}
              className="input price admin-price-input"
              value={draft.price}
              onChange={e => setDraft(prev =>
                ({ ...prev, price: e.target.value })
              )}
              onKeyDown={handleKeyDown}
            />

            <p className='price admin-sek-adjust'>SEK</p>
          </div>
          <button
            type="button" className='button edit-save-button'
            onClick={handleSaveUpdate}>Save</button>
        </div>
        <div className='error-tethering'>
          {errors.price &&
            <p className='error-message error-message-admin'>{errors.price}</p>}
        </div>
      </div>
    </form >
  )
}
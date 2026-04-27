import { useState } from 'react'
import { checkDuplicateType } from '../../../utils/validation'
import { useMenuStore } from '../../../hooks/useMenuStore'
import { newMenuEntry } from '../../../utils/newMenuEntry'

export default function AddMenuCategory() {

  const { addMenuType, addMenuItem, getMenuItemByType, saveZustandMenuToApi } = useMenuStore()
  const [isAdding, setIsAdding] = useState(false)
  const [error, setError] = useState('')
  const [draft, setDraft] = useState(newMenuEntry)

  const handleAddNewCategory = () => {
    const trimmedType = draft.type.trim()
    const trimmedDraft = { ...draft, type: trimmedType, name: trimmedType }

    const duplicateTypeError = checkDuplicateType(trimmedDraft, getMenuItemByType)
    if (duplicateTypeError.type) {
      return setError(duplicateTypeError.type)
    }

    setError('')
    addMenuType(trimmedType)
    setIsAdding(false)
    addMenuItem(trimmedDraft)
    saveZustandMenuToApi()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAddNewCategory()
  }

  return (
    <div className='add-types-box'>
      {isAdding
        ?
        <>
          <label htmlFor="type-change">New Category</label>
          <input type="text"
            id="type-change"
            value={draft.type}
            className={`input ${error ? 'input-error' : ''}`}
            onChange={e =>
              setDraft(prev =>
                ({ ...prev, type: e.target.value, name: e.target.value }))} onKeyDown={handleKeyDown} />

          <div className='error-tethering'>
            {error && <p className="error-message error-message-category">{error}</p>}
          </div>

          <div className='add-category-buttons'>
            <button className='button' onClick={handleAddNewCategory}>Add</button>
            <button className='button' onClick={() => setIsAdding(false)}>cancel</button>
          </div>

        </>
        : <button className='button wide-button' onClick={() => setIsAdding(true)}>Add New Category</button>
      }
    </div>
  )
}
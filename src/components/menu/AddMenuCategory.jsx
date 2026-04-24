import { useState } from 'react'
import { checkDuplicateType } from '../../utils/validation'
import { useMenuStore } from '../../hooks/useMenuStore'
import { newMenuEntry } from '../../utils/newMenuEntry'

export default function AddMenuCategory() {

  const { addMenuType, addMenuItem, getMenuItemByType, saveZustandMenuToApi } = useMenuStore()
  const [isAdding, setIsAdding] = useState(false)
  const [errors, setErrors] = useState({})
  const [draft, setDraft] = useState(newMenuEntry)

  const handleAddNewCategory = () => {

    const duplicateTypeError = checkDuplicateType(draft, getMenuItemByType)
    if (duplicateTypeError) {
      console.log(errors)
      return setErrors(duplicateTypeError)
    }

    setErrors({})
    addMenuType(draft.type)
    setIsAdding(false)
    addMenuItem(draft)
    saveZustandMenuToApi()
    console.log(draft)
  }

  const handleKeyDown = (e) => e.key === 'Enter'

  return (
    <div>
      {isAdding
        ?
        <>
          <input type="text" value={draft.type} onChange={e => setDraft(prev =>
            ({ ...prev, type: e.target.value, name: e.target.value }))} onKeyDown={handleKeyDown} />
          <button className='button wide-button' onClick={handleAddNewCategory}>Add</button>
        </>
        : <button className='button wide-button' onClick={() => setIsAdding(true)}>Add New Category</button>
      }
    </div>
  )
}
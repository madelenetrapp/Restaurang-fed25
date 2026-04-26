import { useState } from 'react'
import { useMenuStore } from '../../../hooks/useMenuStore'
import { newMenuEntry } from '../../../utils/newMenuEntry'
import { validateMenuItem } from '../../../utils/validation.js'
export default function AddMenuItem({ type }) {

  const { addMenuItem, getMenuItemByName } = useMenuStore()

  // const [isWarned, setIsWarned] = useState(false)
  const { saveZustandMenuToApi } = useMenuStore()

  const [errors, setErrors] = useState('')

  const handleAdd = () => {
    const newEntry = {
      ...newMenuEntry,
      name: `NEW ${type} ENTRY`,
      type: type
    }
    const fieldErrors = validateMenuItem(newEntry)

    if (getMenuItemByName(newEntry.name)) {
      fieldErrors.name = 'Edit the newly created item before creating more'
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      setTimeout(() => {
        setErrors('')
      }, 4000)
      return
    }
    setErrors('')
    addMenuItem(newEntry)
    saveZustandMenuToApi()
  }

  return (
    <>
      <button className='button wide-button' onClick={handleAdd}>New <br /> {type} </button>
      <div className="error-tethering error-tethering-double">
        {errors.name && <p className='error-message'>{errors.name}</p>}
      </div>
    </>
  )
}
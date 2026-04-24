import { useState } from 'react'
import { useMenuStore } from '../../hooks/useMenuStore'
import { newMenuEntry } from '../../utils/newMenuEntry'
export default function AddMenuItem({ type }) {

  const { addMenuItem, getMenuItemByName } = useMenuStore()

  const [isWarned, setIsWarned] = useState(false)

  const handleAdd = () => {
    const newEntry = {
      ...newMenuEntry,
      name: `NEW ${type} ENTRY`,
      type: type
    }
    const exists = getMenuItemByName(`NEW ${type} ENTRY`)
    if (exists !== undefined) {
      setIsWarned(true)
      setTimeout(() => setIsWarned(false), 5000)

      console.log(exists, "set to true")
    }
    else {
      console.log(exists, "set to false")
      setIsWarned(false)
      addMenuItem(newEntry)
    }
  }

  return (

    <>
      <button className='button wide-button' onClick={handleAdd}>new <br /> {type} </button>
      <div className="error-tethering error-tethering-double">
        {isWarned && <p className='error-message error-message-admin'>{`NEW ${type} ENTRY already exists.`}<br /> Edit the existing entry before creating more</p>}
      </div>
    </>
  )
}
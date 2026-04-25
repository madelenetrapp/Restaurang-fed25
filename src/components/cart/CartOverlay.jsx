import { useState } from 'react'

export default function CartOverlay() {


  const [isLoading, setLoading] = useState(true)



  setTimeout(() => {
    setLoading(false)
  }, 4000)

  return (

    <div>
      {isLoading === true
        ? <p>loading</p>
        : <p> done!</p>}
    </div>


  )
}
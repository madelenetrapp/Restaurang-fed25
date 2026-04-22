import MenuItem from '../components/menu/MenuItem.jsx'
import { useLoaderData } from 'react-router';
import { useTypeSort } from '../hooks/useTypeSort.js';
import burger1 from '../assets/burger1.svg'
// import burger2 from '../assets/burger2.svg'
// import burger3 from '../assets/burger3.svg'

export default function MenuPage() {

  const menu = useLoaderData()
  const menuTypes = useTypeSort(menu)

  return (

    <div className='menu-background'>

      <div className='menu-layout-wrapper1'>
        <img src={burger1} className="burger left" />
      </div>

      <h1>Menu</h1>

      <div className='grid-box'>
        {menuTypes.map(type => (
          <div key={type} className='type-box' >


            <h2> {type} </h2>
            {menu.filter(s => s.type === type).map(item => (
              <MenuItem key={item.name} item={item} />
            ))}


            {/* <div className='menu-layout-wrapper2'>
              <img src={burger2} className="burger center" />
            </div>
            <div className='menu-layout-wrapper2'>
              <img src={burger3} className="burger right" />
            </div> */}

          </div>
        ))}
      </div>
    </div>
  )
}
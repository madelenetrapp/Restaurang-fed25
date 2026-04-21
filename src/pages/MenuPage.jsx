import MenuItem from '../components/MenuItem.jsx'
import DebugOverlay from '../debug/DebugOverlay.jsx';
import { useLoaderData } from 'react-router';
import { useTypeSort } from '../hooks/useTypeSort.js';

export default function MenuPage() {

  const menu = useLoaderData()
  const menuTypes = useTypeSort(menu)

  return (

    <div className='menu-background'>
      <DebugOverlay />

      <h1>Menu</h1>


      <div className='grid-box'>
        {menuTypes.map(type => (
          <div key={type} className='type-box' >

            <h2> {type} </h2>
            {menu.filter(s => s.type === type).map(item => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
// import { menuList } from '../api/menuList.js'
import MenuItem from '../components/MenuItem.jsx'
import DebugOverlay from '../debug/DebugOverlay.jsx';
// import { useInitMenu } from '../hooks/useInitMenu.js';
import { useLoaderData } from 'react-router';

export default function MenuPage() {




  //TODO byt från att använda menuList till att använda menu i menuStore

  const menuTypeOrder = ["Starter", "Main", "Dessert"];


  const menuList = useLoaderData()

  const menuTypes = menuTypeOrder.filter(type =>
    menuList.some(item => item.type === type));

  return (

    <>
      <DebugOverlay></DebugOverlay>
      <h1>Menu</h1>
      <div className='grid-box'>
        {menuTypes.map(type => (
          <div key={type} className='type-box' >

            <h2> {type} </h2>
            {menuList.filter(s => s.type === type).map(item => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
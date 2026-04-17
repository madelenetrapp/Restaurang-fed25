import { menuList } from '../api/menuList.js'
import MenuItem from '../components/MenuItem.jsx'
import DebugOverlay from '../debug/DebugOverlay.jsx';

export default function MenuPage() {




  //TODO byt från att använda menuList till att använda menu i menuStore
  // const menuTypes = ["Starter", "Main"]
  const menuTypeOrder = ["Starter", "Main", "Dessert"];

  const menuTypes = menuTypeOrder.filter(type =>
    menuList.some(item => item.type === type)
  );
  return (

    <>
      <DebugOverlay></DebugOverlay>
      <h1>Menu</h1>
      <div className='grid-box'>
        {menuTypes.map(type => (
          <div key={type} >

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
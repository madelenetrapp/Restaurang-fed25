import { menuList } from '../api/menuList.js'
import MenuItem from '../components/MenuItem.jsx'
import { Fragment } from 'react'
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
      <h1 className='menu-header'>Menu</h1>

      {menuTypes.map(type => (
        <Fragment key={type} >
          <h1 className='category-header'> {type} </h1>

          {menuList.filter(s => s.type === type).map(item => (
            <MenuItem key={item.name} item={item} />
          ))}
        </Fragment>
      ))}
    </>
  )
}
import { useLoaderData } from "react-router";
import MenuLayout from '../components/menu/MenuLayout';

export default function MenuPage() {
  useLoaderData()

  return (

    <div className='menu-background'>

      <div className='menu-layout-wrapper1'>
        <img src={burger2} className="burger left" />
      </div>

      <h1>Menu</h1>

      <div className='grid-box'>
        {menuTypes.map(type => (
          <div key={type} className='type-box' >
            <div className='menu-layout-wrapper2'>
              <img src={burger3} className="burger right" />
            </div>
            {/* <div className='menu-layout-wrapper3'>
              <img src={burger1} className="burger middle" />
            </div> */}
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
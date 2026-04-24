import { useAuthStore } from '../../hooks/useAuthStore';
import { useMenuStore } from '../../hooks/useMenuStore';
import { useTypeSort } from '../../hooks/useTypeSort';
import burgerTallRight from '../../assets/burger-tall.png'
import burgerTallLeft from '../../assets/burger-tall.png'
// import { useLoaderData } from 'react-router';
import MenuItem from './MenuItem'
import AdminMenuItem from './AdminMenuItem'
import { NavLink } from 'react-router';

export default function MenuLayout({ isAdmin }) {

  const { logout } = useAuthStore();
  const { menu } = useMenuStore();
  const menuTypes = useTypeSort(menu);

  // useLoaderData()

  return (
    <>
      {isAdmin
        ? <NavLink to="/" onClick={logout} className="button">Log out</NavLink>
        : ''}


      <img src={burgerTallRight} alt="" className="burger-tall-right" />
      <img src={burgerTallLeft} alt="" className="burger-tall-left" />
      <div className="menu-background">
{/* 
      <img src={burgerTall} alt="" />
      <div className="menu-background"> */}

      <h1>{isAdmin && "Admin "}Menu</h1>

      <div className='grid-box'>
        {menuTypes.map(type => (
          <div key={type} className='type-box' >

            <h2> {type} </h2>


            {isAdmin
              ? menu.filter((s) => s.type === type)
                .map((item) => (
                  <AdminMenuItem
                    key={item.name}
                    item={item}
                  />
                ))

              : menu.filter(s => s.type === type).map(item => (
                <MenuItem key={item.name} item={item} />
              ))}
          </div>
        ))}
      </div>
    </div >
    </>
  )
}
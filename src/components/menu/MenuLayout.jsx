import { useAuthStore } from '../../hooks/useAuthStore';
import { useMenuStore } from '../../hooks/useMenuStore';
import { useTypeSort } from '../../hooks/useTypeSort';
import burgerTallRight from '../../assets/burger-tall.png'
import burgerTallLeft from '../../assets/burger-tall.png'
import UserMenu from './UserMenu'
import AdminMenu from './AdminMenu'
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
                    <AdminMenu
                      key={item.name}
                      item={item}
                    />
                  ))

                : menu.filter(s => s.type === type).map(item => (
                  <UserMenu key={item.name} item={item} />
                ))}
            </div>
          ))}
        </div>
      </div>
    {/* </div > */}
    </>
  )
}
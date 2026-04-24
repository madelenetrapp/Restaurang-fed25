import { useAuthStore } from '../../hooks/useAuthStore';
import { useMenuStore } from '../../hooks/useMenuStore';
import { useTypeSort } from '../../hooks/useTypeSort';
import burgerTall from '../../assets/burger-tall.png'
import UserMenu from './UserMenu'
import AdminMenu from './AdminMenu'
import { NavLink } from 'react-router';
import AddMenuItem from './AddMenuItem';
import AddMenuCategory from './AddMenuCategory';

export default function MenuLayout({ isAdmin }) {

  const { logout } = useAuthStore();
  const { menu, saveZustandMenuToApi } = useMenuStore();
  const menuTypes = useTypeSort(menu);

  const handleLogout = () => {
    logout()
    saveZustandMenuToApi()
  }

  return (
    <>
      <img src={burgerTall} alt="" />
      <div className="menu-background">

        <h1>{isAdmin && "Admin "}Menu</h1>
        {isAdmin &&
          <div>
            <NavLink to="/" onClick={handleLogout} className="button logout-button">Log out</NavLink>
            <AddMenuCategory />
          </div>
        }

        <div className='grid-box'>
          {menuTypes.map(type => (
            <div key={type} className='type-box' >

              <h2> {type} </h2>

              {isAdmin
                ?
                <>
                  {menu.filter((s) => s.type === type)
                    .map((item) => (
                      <AdminMenu
                        key={item.name}
                        item={item}
                      />
                    ))}
                  <AddMenuItem type={type} />
                </>
                :
                <>
                  {menu.filter(s => s.type === type).map(item => (
                    <UserMenu key={item.name} item={item} />
                  ))}    </>
              }

            </div>
          ))}
        </div>
      </div >
    </>
  )
}
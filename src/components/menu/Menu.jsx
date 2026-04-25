import { useAuthStore } from '../../hooks/useAuthStore';
import { useMenuStore } from '../../hooks/useMenuStore';
import { useTypeSort } from '../../hooks/useTypeSort';
import burgerTallRight from '../../assets/burger-tall.png'
import burgerTallLeft from '../../assets/burger-tall.png'
import UserMenu from './UserMenu'
import AdminMenu from './adminOnly/AdminMenu'
import { NavLink } from 'react-router';
import AddMenuItem from './adminOnly/AddMenuItem';
import AddMenuCategory from './adminOnly/AddMenuCategory';
import { defaultMenuList } from '../../utils/defaultMenuList';

export default function Menu({ isAdmin }) {

  const { logout } = useAuthStore();
  const { menuTypes,
    reOrderMenuType,
    menu,
    saveZustandMenuToApi,
    setMenu } = useMenuStore();

  const sortedMenuTypes = useTypeSort(menu, menuTypes);

  const handleLogout = () => {
    logout()
    saveZustandMenuToApi()
  }

  return (
    <>
      <div className='overflow-wrapper'>
        <img src={burgerTallRight} alt="" className="burger-tall-right" />
        <img src={burgerTallLeft} alt="" className="burger-tall-left" />
      </div>
      <div className="menu-background">

        {isAdmin && <div className='top-admin-buttons'>
          <NavLink to="/" onClick={handleLogout} className="button">Log out</NavLink> <button className='button wide-button' onClick={() => setMenu(defaultMenuList)}>Reset Menu</button>
        </div>}

        <h1>{isAdmin && "Admin "}Menu</h1>

        {isAdmin && <AddMenuCategory />}

        <div className='grid-box'>
          {sortedMenuTypes.map((type, index) => (
            <div key={type} className='type-box' >

              <div className={`header-box ${isAdmin && 'remove-margin'}`}>
                {isAdmin && index !== 0 &&
                  <button className='up-down'
                    onClick={() => reOrderMenuType(type, 'up')}>▲</button>}

                <h2> {type} </h2>

                {isAdmin && index !== sortedMenuTypes.length - 1 && <button className='up-down'
                  onClick={() => reOrderMenuType(type, 'down')}>▼</button>}
              </div>
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
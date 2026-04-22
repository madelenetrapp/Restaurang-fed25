import { useLoaderData } from 'react-router';
import { useTypeSort } from '../hooks/useTypeSort';
import { NavLink } from 'react-router';
import { useAuthStore } from '../hooks/useAuthStore';
import MenuItem from '../components/MenuItem';

export default function AdminPage() {

  const { logout } = useAuthStore()

  const handleLogout = () => {
    logout()
  }
  const menu = useLoaderData()
  const menuTypes = useTypeSort(menu)

  return (
    <>
      <NavLink to='/' onClick={handleLogout} className='button'>Log out</NavLink>

      <div className='menu-background'>

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
    </>
  )
}
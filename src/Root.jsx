import { NavLink, Outlet } from 'react-router'

export default function App() {

  const navLinkClass = (base) => ({ isActive }) =>
    isActive ? `${base} active` : base;

  return (
    <div className='app'>
      <header className='header'>
        <nav className='header-nav'>
          <NavLink to='/' className={navLinkClass("header-nav-link")}> Home</NavLink>
          {/* <div>spacer?</div> */}
          <NavLink to='/menu' className={navLinkClass("header-nav-link")}>Menu</NavLink>
          <NavLink to='/cart' className={navLinkClass("header-nav-link")}>Cart</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
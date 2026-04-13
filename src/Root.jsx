
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { NavLink, Outlet } from 'react-router'
import './styles/index.css'

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
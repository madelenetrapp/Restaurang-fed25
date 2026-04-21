import { NavLink } from 'react-router'




export default function Header() {

  //TODO lägg till en kommentar här :D
  const navLinkClass = (base) => ({ isActive }) =>
    isActive ? `${base} active` : base;

  return (
    <header>
      <NavLink to='/' className={navLinkClass("header-navlink-logo")}>
        <img className="header-logo" src="./src/assets/lyan-header.webp" alt="logo" />
      </NavLink>

      <div className='phone-and-nav-box'>
        <p>0123 456 789</p>
        <nav>
          <NavLink to='/menu' className={navLinkClass("button")}>Menu</NavLink>
          <NavLink to='/cart' className={navLinkClass("button")}>Cart</NavLink>
        </nav>
      </div>
    </header>
  )
}
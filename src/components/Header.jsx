import { NavLink } from 'react-router'




export default function Header() {
  const navLinkClass = (base) => ({ isActive }) =>
    isActive ? `${base} active` : base;

  return (
    <header>
      <NavLink to='/' className={navLinkClass("header-navlink-logo")}>
        <img className="header-logo" src="./src/assets/lyan-header.webp" alt="test" />
      </NavLink>

      <div className='header-adjuster'>
        <p>0123 456 789</p>
        <nav className='header-nav'>
          <NavLink to='/menu' className={navLinkClass("navlink-button")}>Menu</NavLink>
          <NavLink to='/cart' className={navLinkClass("navlink-button")}>Cart</NavLink>
        </nav>
      </div>
    </header>
  )
}
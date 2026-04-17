export default function Footer() {
<<<<<<< Updated upstream


  return (
    <footer>i am footer!</footer>
  )
}
=======
  const navLinkClass =
    (base) =>
      ({ isActive }) =>
        isActive ? `${base} active` : base;

  return (
    <footer>
      <div className='footer-background'></div>
      {/* Logo */}
      <img className="footer-logo" src={logo} alt="Lyan logo" />

      {/* Address */}
      <div className="footer-address">
        <p>Sjöviksgatan 14B</p>
        <p>417 56</p>
        <p>Gothenburg</p>
        <p>Sweden</p>
      </div>

      {/* Contact */}
      <div className="footer-contact">
        <p>Contact us:</p>
        <p>070 123 45 67</p>
        <p>lyan@gmail.com</p>
      </div>

      {/* Menu */}
      <NavLink to="/menu" className={navLinkClass("navlink-button")}>
        Menu
      </NavLink>

      {/* Admin */}
      <span className="footer-admin">Admin</span>
    </footer>
  );
}
>>>>>>> Stashed changes

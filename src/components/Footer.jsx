import { NavLink } from "react-router";
import logo from "../assets/lyan-footer.webp";

export default function Footer() {
  const navLinkClass =
    (base) =>
      ({ isActive }) =>
        isActive ? `${base} active` : base;

  return (
    <footer>
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
      <NavLink to="/login" className="footer-admin">Admin</NavLink>
    </footer>
  );
}

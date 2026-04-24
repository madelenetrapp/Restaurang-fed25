import { NavLink } from 'react-router'
import headerLogo from "../assets/lyan-header.webp";

export default function Header() {

  return (
		<header>
			<NavLink to="/" className="header-navlink-logo">
				{/* <img
					className="header-logo"
					src="./src/assets/lyan-header.webp"
					alt="logo"
				/> */}
				<img src={headerLogo} className="header-logo" alt="logo" />
			</NavLink>

			<div className="phone-and-nav-box">
				<p>0123 456 789</p>
				{/* <nav> */}
				<NavLink to="/menu" className="button">
					Menu
				</NavLink>
				<NavLink to="/cart" className="button">
					Cart
				</NavLink>
				{/* </nav> */}
			</div>
		</header>
  );
}
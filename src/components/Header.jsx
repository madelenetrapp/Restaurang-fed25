import { NavLink } from 'react-router'
import headerLogo from "../assets/lyan-header.webp";
import { useCartStore } from '../hooks/useCartStore';

export default function Header() {

	const { totalItems } = useCartStore()

	return (
		<header>
			<NavLink to="/" className="header-navlink-logo">
				{/* <img */}
				<img src={headerLogo} className="header-logo" alt="logo" />
			</NavLink>

			<div className="phone-and-nav-box">
				<p>0123 456 789</p>
				{/* <nav> */}
				<NavLink to="/menu" role="button" className="button">
					Menu
				</NavLink>
				<NavLink to="/cart" className="button relative-cart-button">
					{totalItems > 0 && <div className='cart-counter' >{totalItems}</div>}
					Cart
				</NavLink>

				<NavLink to="/" className="button extra-home-button">
					Home
				</NavLink>
				{/* </nav> */}
			</div>
		</header>
	);
}
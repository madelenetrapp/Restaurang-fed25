import { NavLink } from "react-router";
import logo from "../assets/lyan-footer.webp";
import { useAuthStore } from "../hooks/useAuthStore";

export default function Footer() {
	const { isLoggedIn } = useAuthStore();

	return (
		<footer>
			{/* Logo */}
			<NavLink to="/" className="footer-navlink-logo">
				<img className="footer-logo" src={logo} alt="Lyan logo" />
			</NavLink>

			<div className="footer-content">

				<NavLink to="/menu" role="button" className="button button-footer-mobile">
					Menu
				</NavLink>

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
					<p>0123 456 789</p>
					<p>lyan@gmail.com</p>
				</div>

				<div className="footer-button-and-admin">
					{/* Menu */}
					<NavLink
						to="/menu"
						role="button"
						className="button button-footer-desktop"
					>
						Menu
					</NavLink>

					{/* Admin */}

					<NavLink to="/login" role="button" className="footer-admin">
						{isLoggedIn ? "admin" : "log in"}
					</NavLink>
				</div>
			</div>
		</footer>
	);
}

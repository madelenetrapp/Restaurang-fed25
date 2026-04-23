import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
	const location = useLocation();

	useEffect(() => {
		console.log("SCROLL TRIGGERED", location.pathname);
		// window.scrollTo(0, 0);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location.pathname]);

	return null;
}

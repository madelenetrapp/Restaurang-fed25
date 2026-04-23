import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet, useNavigation } from "react-router";
import LoadingPage from "./pages/LoadingPage.jsx";
import { useLocation } from "react-router";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";

	const location = useLocation();

	return (
		<div className="app">
			<ScrollToTop />
			<Header />

			<main>{isLoading ? <LoadingPage /> : <Outlet />}</main>
			{location.pathname !== "/cart" && <Footer />}
		</div>
	);
}

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet, useNavigation } from "react-router";
import LoadingPage from "./pages/LoadingPage.jsx";
import { useLocation } from "react-router";
import useScrollToTop from './hooks/useScrollToTop.js';

export default function App() {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";

	const location = useLocation();
	useScrollToTop()

	return (
		<div className="app">

			<Header />

			<main className={location.pathname == "/" ? "front-page-main" : ""}>{isLoading ? <LoadingPage /> : <Outlet />}
			</main>

			{location.pathname !== "/cart" && <Footer />}

		</div>
	);
}

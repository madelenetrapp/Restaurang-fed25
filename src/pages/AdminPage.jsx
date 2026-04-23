import { useLoaderData } from "react-router";
import { useTypeSort } from "../hooks/useTypeSort";
import { NavLink } from "react-router";
import { useAuthStore } from "../hooks/useAuthStore";
import AdminMenuItem from "../components/menu/AdminMenuItem"
import { useMenuStore } from "../hooks/useMenuStore";
import burger1 from '../assets/burger1.svg'
import burger2 from '../assets/burger2.svg'
import burger3 from '../assets/burger3.svg'

export default function AdminPage() {

	const { logout, isLoggedIn } = useAuthStore();
	const { menu, removeMenuItem } = useMenuStore();

	const handleLogout = () => {
		logout();
	};
	useLoaderData();
	const menuTypes = useTypeSort(menu);

	return (
		<>
			<NavLink to="/" onClick={handleLogout} className="button">
				Log out
			</NavLink>

			<div className="menu-background">
				<div className='menu-layout-wrapper1'>
					<img src={burger2} className="burger left" />
				</div>
				<h1>Menu</h1>
				<div className="grid-box">
					{menuTypes.map((type) => (
						<div key={type} className="type-box">
							<div className='menu-layout-wrapper2'>
								<img src={burger3} className="burger right" />
							</div>
							<div className='menu-layout-wrapper3'>
								<img src={burger1} className="burger middle" />
							</div>
							<h2> {type} </h2>
							{menu
								.filter((s) => s.type === type)
								.map((item) => (
									<AdminMenuItem
										key={item.name}
										item={item}
										removeMenuItem={removeMenuItem}
										isLoggedIn={isLoggedIn}
										menu={menu}
									/>
								))}
						</div>
					))}
				</div>
			</div>
		</>
	)
}

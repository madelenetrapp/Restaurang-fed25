import { useLoaderData } from "react-router";
import MenuLayout from '../components/menu/MenuLayout';

export default function AdminPage() {
	useLoaderData();
	return (
		<>
			<div className="admin-bg">
				<MenuLayout isAdmin={true} />
			</div>
		</>
	)
}
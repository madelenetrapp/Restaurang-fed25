import { useLoaderData } from "react-router";
import MenuLayout from '../components/menu/MenuLayout';

export default function AdminPage() {
	useLoaderData();
	return (
		<>
			<MenuLayout isAdmin={true} />
		</>
	)
}

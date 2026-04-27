import Menu from '../components/menu/Menu.jsx';

export default function AdminPage() {
	return (
		<div className="admin-bg">
			<Menu isAdmin={true} />
		</div>
	)
}
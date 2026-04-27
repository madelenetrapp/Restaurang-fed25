import Menu from '../components/menu/Menu';

export default function AdminPage() {
	return (
		<div className="admin-bg">
			<Menu isAdmin={true} />
		</div>
	)
}
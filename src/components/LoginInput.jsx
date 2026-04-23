export default function LoginInput({ id, label, type, value, onChange, error, onKeyDown }) {

	return (
		<div className="login-field">
			<label htmlFor={id} className="label">{label}</label>
			<input
				id={id}
				type={type}
				className={`input ${error ? 'input-error' : ''}`}
				value={value}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
		</div>
	)
}
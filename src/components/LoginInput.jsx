export default function LoginInput({ id, label, type, value, onChange, error, onKeyDown }) {

	return (
		<div className="login-field">
			<label htmlFor={id} className="login-label">{label}</label>
			<input
				type={type}
				id={id}
				className={`login-input ${error ? 'input-error' : ''}`}
				value={value}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
			{error && <p className="error-message">{error}</p>}
		</div>
	)
}
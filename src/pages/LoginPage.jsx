import { useState } from "react";
import { useNavigate, Navigate } from "react-router";
import LoginInput from "../components/LoginInput";
import { useAuthStore } from '../hooks/useAuthStore';
import { loginSchema } from '../utils/loginValidation'


export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, isLoggedIn } = useAuthStore()
  const navigate = useNavigate()
  
  
  const handleSubmit = () => {
    //abortEarly: false so both fields are validated even if the first one is wrong
    const { error: validationError } = loginSchema.validate({ username, password }, { abortEarly: false })
    if (validationError) {
      const isEmpty = username === '' || password === ''
      return setError(isEmpty ? 'Username and password are required' : 'Wrong username or password')
    }
    login()
    navigate('/admin')
  }
  
  const handleKeyDown = (e) => e.key === 'Enter' && handleSubmit()
  
  //If already logged in, redirect to admin page
  if (isLoggedIn) return <Navigate to="/admin" replace />
  return (
    <div className="login-page">
    
    <LoginInput
      id="username"
      label="Username"
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      
    />
    
    <LoginInput
      id="password"
      label="Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      onKeyDown={handleKeyDown}
    />
    
    {error && <p className="error-message">{error}</p>}

    <button className="button" onClick={handleSubmit}>Log in</button>
    </div>
  )
}

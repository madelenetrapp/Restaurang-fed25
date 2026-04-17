import Joi from "joi";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore";
import LoginInput from "../components/LoginInput";

const schema = Joi.object({
  username: Joi.string().valid('admin').required().messages({
    'any.only': 'Wrong username',
    'string.empty': 'Username is required'
  }),
  password: Joi.string().valid('mums').required().messages({
    'string.empty': 'Password is required',
    'any.only': 'Wrong password'
  })
})

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const handleSubmit = () => {
    const { error } = schema.validate({ username, password }, { abortEarly: false })
    if (error) {
      const fieldErrors = {}
      error.details.forEach((details) => {
        fieldErrors[details.path[0]] = details.message
      })
      return setErrors(fieldErrors)
    }
    login()
    navigate('/admin')
  }

  const handleKeyDown = (e) => e.key === 'Enter' && handleSubmit()

  return (
    <div className="login-page">

      <LoginInput
        id="username"
        label="Username"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
      />

      <LoginInput
        id="password"
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        onKeyDown={handleKeyDown}
      />

      <button className="login-btn" onClick={handleSubmit}>Log in</button>

    </div>
  )
}
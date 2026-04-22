import Joi from "joi";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router";
import LoginInput from "../components/LoginInput";
import { useAuthStore } from '../hooks/useAuthStore';

const schema = Joi.object({
  username: Joi.string().valid('admin').required().messages({
    'any.only': 'Wrong username',
    'string.empty': 'Username is required'
  }),
  //TODO ska alla användarnamn vara okej? DAVID

  password: Joi.string().valid('mums').required().messages({
    'string.empty': 'Password is required',
    'any.only': 'Wrong password'
    //TODO ska det vara till lower case?
  })
})

//TODO wrong username or password istället för att reagera individuellt
//båda behöver hänga ihop... läs JOI docs.
export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const { login, isLoggedIn } = useAuthStore()
  const navigate = useNavigate()

  //TODO behöver komma till admin page

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

  if (isLoggedIn) return <Navigate to="/admin" replace />
  return (
    <div className="login-page">

      <LoginInput
        id="username"
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
      />

      <LoginInput
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        onKeyDown={handleKeyDown}
      />
      {/* TODO min-height på taggen som visar felmedelandet. Knappen hoppar. */}
      <button className="button" onClick={handleSubmit}>Log in</button>

    </div>
  )
}
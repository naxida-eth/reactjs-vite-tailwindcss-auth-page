import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <p>Login</p>
      <button
        className="mt-4 border"
        onClick={() => {
          localStorage.setItem('token', 'abcd')
          navigate('/', { replace: true })
        }}
      >
        Login Button
      </button>
    </div>
  )
}

export default Login

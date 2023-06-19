import { useState } from 'react'
import { createBrowserHistory } from 'history'
import httpClient from '../services/http-client'
import Logo from '../components/Logo'
import Button from '../components/Button'
import Input from '../components/Input'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const history = createBrowserHistory({ forceRefresh: true })
  const ONE_SECOND = 1000

  const handleEmailChange = (event) => setEmail(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      email,
      senha: password
    }
    httpClient.post('/login', data)
      .then(({ data }) => {
        localStorage.setItem('token', data.token)
        history.replace('/dashboard')
        history.go(0)
      })
      .catch(_ => {
        setError(true)
      })
      .finally(_ => {
        setEmail('')
        setPassword('')
        setTimeout(() => setError(false), ONE_SECOND * 3)
      })
  }

  return (
    <div className='flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed  w-full h-screen bg-white dark:bg-gray-900'>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 px-6 py-4">

        <div className="flex items-center justify-center">
          <Logo />
        </div>

        <div className="w-full mt-4">
          <Input type="email" placeholder="Email" onChange={handleEmailChange} value={email} />
        </div>

        <div className="w-full mt-4">
          <Input type="password" placeholder="Senha" onChange={handlePasswordChange} value={password} />
        </div>

        {
          error && (
            <span className='text-red-500 text-xs italic mt-4'>
              Verifique se o email e a senha estão corretos
            </span>
          )
        }

        <div className="flex items-center justify-between mt-4">
          <Button type="submit" className='w-full' onClick={handleSubmit}>
            Login
          </Button>
        </div>

      </div>
    </div>
  )
}

export default Login
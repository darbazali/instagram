import React, { useContext, useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import FirebaseContext from '../context/firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const isInvalid = password === '' || email === ''

  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    document.title = 'Login - Instagram'
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      history.push(ROUTES.DASHBOARD)
    } catch (error) {
      setEmail('')
      setPassword('')
      setError(error.message)
    }
  }
  return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
      <div className='flex w-3/5'>
        <img
          src='/images/iphone-with-profile.jpg'
          alt='Iphone with Profile'
          className='max-w-full'
        />
      </div>

      <div className='flex flex-col w-2/5'>
        <div className='flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded'>
          <h1 className='flex justify-center w-full'>
            <img
              src='/images/logo.png'
              alt='Instagram'
              className='mt-2 w-6/12 mb-4'
            />
          </h1>

          {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

          <form onSubmit={handleLogin} method='post'>
            <input
              aria-label='Enter your email address'
              type='email'
              placeholder='Email Address'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              aria-label='Enter your password'
              type='password'
              placeholder='Password'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button
              disabled={isInvalid}
              type='submit'
              className={`bg-blue-medium text-white w-full rounded h-10 font-bold ${
                isInvalid && ' opacity-50'
              }`}
            >
              Login
            </button>
          </form>
        </div>
        <div className='flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary'>
          <p className='text-sm'>
            Don't have an accout?
            <Link className='font-bold text-blue-medium' to='/signup'>
              {' '}
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

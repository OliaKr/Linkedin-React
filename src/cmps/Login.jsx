import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../assets/css/Login.css'
import { ReactComponent as Linkedinloginicon } from '../assets/icons/linkedinloginicon.svg'
import { login } from '../features/userSlice'
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch
  const auth = getAuth()

  const loginToApp = async (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('found the user from DB', user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  const register = async () => {
    try {
      if (!name) {
        return alert('Please enter a full name')
      }
      await createUserWithEmailAndPassword(auth, email, password)
        .then((u) => {
          const user = u.user
          console.log('user', user)
        })
        .then((user) => {
          updateProfile(user, {
            displayName: name,
            photoURL: profilePic,
          })
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login'>
      <Linkedinloginicon
        className='linkedin-icon'
        height='70px'
        color='#0a66c2'
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full name (required if registering)'
          type='text'
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder='Profile pic URL (optional)'
          type='text'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type='text'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <button
          type='submit'
          onClick={loginToApp}
        >
          Sign In
        </button>
      </form>
      <p>Not a member?</p>
      <span
        className='login-register'
        onClick={register}
      >
        Register Now
      </span>
    </div>
  )
}

export default Login

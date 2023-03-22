import React, { useState } from 'react'
import '../assets/css/Login.css'
import { ReactComponent as Linkedinloginicon } from '../assets/icons/linkedinloginicon.svg'
import { auth } from '../firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')

  const loginToApp = (e) => {
    auth.preventDefault()
  }

  const register = () => {
    if (!name) {
      return alert('Please enter a full name')
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
    })
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

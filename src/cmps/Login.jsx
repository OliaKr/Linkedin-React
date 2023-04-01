import React, { useState } from 'react'
import { storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import '../assets/css/Login.css'
import { ReactComponent as Linkedinloginicon } from '../assets/icons/linkedinloginicon.svg'
import { login } from '../store/user.action'
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [picUrl, setPicUrl] = useState('')
  const auth = getAuth()

  const loginToApp = async (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('found the user from DB', user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const uploadImage = () => {
    if (profilePic == null) return
    const imageRef = ref(storage, `images/${profilePic.name + v4()}`)
    uploadBytes(imageRef, profilePic).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setPicUrl(url)
      })
    })
  }

  const register = async () => {
    uploadImage()
    if (!name) {
      return alert('Please enter a full name')
    }
    await createUserWithEmailAndPassword(auth, email, password)
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: picUrl,
    })
      .then(() => {
        console.log(auth.currentUser)
      })
      .catch((error) => console.log(error))

    setEmail('')
    setPassword('')
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
        {/* <button className='imgUploaderBtn'>
          <label htmlFor='imgUpload'>Profile pic URL (optional)</label>
        </button>
        <input
          type='file'
          id='imgUpload'
          hidden
          accept='image/*'
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.files[0])}
        /> */}
        <input
          type='file'
          multiple
          accept='image/*'
          onChange={(e) => setProfilePic(e.target.files[0])}
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
          className='loginBtn'
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

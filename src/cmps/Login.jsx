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
  const [picUrl, setPicUrl] = useState(null)
  const [picName, setPicName] = useState('Profile pic URL (optional)')
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

  const onHandleImg = async (e) => {
    e.preventDefault()
    setPicName(e.target.files[0].name)
    setProfilePic(e.target.files[0])
    await uploadImage(e)
  }

  const uploadImage = async (e) => {
    if (profilePic == null) return
    const imageRef = ref(storage, `images/${e.target.files[0].name + v4()}`)
    await uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setPicUrl(url)
      })
    })
  }

  const register = async () => {
    if (!name) {
      return alert('Please enter a full name')
    }
    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: picUrl,
    })
      .then(() => {
        login({
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          photoURL: auth.currentUser.photoURL,
        })
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

        <label
          htmlFor='imgUpload'
          className='imgUploaderBtn'
        >
          {picName.substring(0, 28)}
        </label>
        <input
          type='file'
          id='imgUpload'
          hidden
          accept='image/*'
          onChange={(e) => onHandleImg(e)}
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

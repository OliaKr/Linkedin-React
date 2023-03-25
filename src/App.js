import React from 'react'
import './App.css'
import Header from './cmps/Header'
import Sidebar from './cmps/Sidebar'
import Feed from './cmps/Feed'
import Login from './cmps/Login'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import { useEffect } from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import Widgets from './cmps/Widgets'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      console.log('from app', userAuth)
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className='app'>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app-body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  )
}

export default App

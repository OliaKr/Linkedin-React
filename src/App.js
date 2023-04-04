import React from 'react'
import './App.css'
import Header from './cmps/Header'
import Sidebar from './cmps/Sidebar'
import Feed from './cmps/Feed'
import Login from './cmps/Login'
import { useSelector } from 'react-redux'
import { login, logout } from './store/user.action'
import { useEffect } from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import Widgets from './cmps/Widgets'

function App() {
  const user = useSelector((storeState) => storeState.userModule.user)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        login({
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          photoURL: auth.currentUser.photoURL,
        })
      } else {
        logout()
      }
    })
  }, [auth])

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

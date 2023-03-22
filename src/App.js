import React from 'react'
import './App.css'
import Header from './cmps/Header'
import Sidebar from './cmps/Sidebar'
import Feed from './cmps/Feed'
import Login from './cmps/Login'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
  return (
    <div className='app'>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app-body'>
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  )
}

export default App

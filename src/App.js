import React from 'react'
import './App.css'
import Header from './cmps/Header'
import Sidebar from './cmps/Sidebar'
import Feed from './cmps/Feed'

function App() {
  return (
    <div className='app'>
      <Header />

      {/* App Body */}

      <div className='app-body'>
        <Sidebar />
        <Feed />
      </div>

      {/* Widgets */}
    </div>
  )
}

export default App

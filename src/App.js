import React from 'react'
import './App.css'
import Header from './cmps/Header'
import Sidebar from './cmps/Sidebar'

function App() {
  return (
    <div className='app'>
      <Header />

      {/* App Body */}

      <div className='app-body'>
        <Sidebar />
      </div>

      {/* Feed */}
      {/* Widgets */}
    </div>
  )
}

export default App

import React from 'react'
import '../assets/css/Sidebar.css'
import { Avatar } from '@material-ui/core'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img
          src=''
          alt=''
        />
        <Avatar className='sidebar-avatar' />
        <h2>Daniel Herman</h2>
        <h4>Fullstack Developer</h4>
      </div>

      <div className='sidebar-stats'>
        <div className='sidebar-stat'>
          <p>Who's viewed your profile</p>
          <p className='sidebar-statNumber'>2,543</p>
        </div>
        <div className='sidebar-stat'>
          <p>Impressions of your post</p>
          <p className='sidebar-statNumber'>2,488</p>
        </div>
      </div>

      <div className='sidebar-bottom'>
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar

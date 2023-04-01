import React from 'react'
import '../assets/css/Sidebar.css'
import Avatar from '@mui/material/Avatar'
import SidebarBottom from './SidebarBottom'
import { useSelector } from 'react-redux'

function Sidebar() {
  const user = useSelector((storeState) => storeState.userModule.user)
  console.log('sidebar', user)
  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img
          src='https://res.cloudinary.com/dsinv9pik/image/upload/v1676457790/IMG_6332_apt9pt.jpg'
          alt='background'
        />
        <Avatar
          className='sidebar-avatar'
          src={user.photoURL}
        />
        <h2>{user.displayName}</h2>
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
        <SidebarBottom title='Recent' />
        <SidebarBottom title='Groups' />
      </div>
    </div>
  )
}

export default Sidebar

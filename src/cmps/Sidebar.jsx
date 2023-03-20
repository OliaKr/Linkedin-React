import React from 'react'
import '../assets/css/Sidebar.css'
import Avatar from '@mui/material/Avatar'
import SidebarBottom from './SidebarBottom'

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar-recentItem'>
      <span className='sidebar-hash'></span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img
          src='https://res.cloudinary.com/dsinv9pik/image/upload/v1676457790/IMG_6332_apt9pt.jpg
          '
          alt='background'
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
        <SidebarBottom title='Recent' />
        <SidebarBottom title='Groups' />

        {/* {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengeineering')}
        {recentItem('design')}
        {recentItem('developer')} */}
      </div>
    </div>
  )
}

export default Sidebar

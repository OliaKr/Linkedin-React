import Avatar from '@mui/material/Avatar'
import React from 'react'
import '../assets/css/HeaderOption.css'

function HeaderOption({ avatar, icon, title }) {
  return (
    <div className='headerOption'>
      <div className='headerOption-icon'>
        {icon}
        {avatar && (
          <Avatar
            className='headerOption-icon'
            src={avatar}
          />
        )}
      </div>

      <div className='headerOption-title'>{title}</div>
    </div>
  )
}

export default HeaderOption

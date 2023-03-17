import React from 'react'
import '../assets/css/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { grey } from '@material-ui/core/colors'
import linkedin from '../assets/icons/linkedin.svg'
import HeaderOption from './HeaderOption'
import homeicon from '../assets/icons/homeicon.svg'
import networkicon from '../assets/icons/networkicon.svg'
import jobsicon from '../assets/icons/jobsicon.svg'
import messageicon from '../assets/icons/messageicon.svg'
import notificationsicon from '../assets/icons/notificationsicon.svg'

function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <img
          src={linkedin}
          alt='linkedin'
        />
        <div className='header-search'>
          <SearchIcon title='Home' />
          <input type='text' />
        </div>
      </div>
      <div className='header-right'>
        <HeaderOption
          title='Home'
          imgURL={homeicon}
        />
        <HeaderOption
          title='My Network'
          imgURL={networkicon}
        />
        <HeaderOption
          title='Jobs'
          imgURL={jobsicon}
        />
        <HeaderOption
          title='Messaging'
          imgURL={messageicon}
        />
        <HeaderOption
          title='Notifications'
          imgURL={notificationsicon}
        />
        <HeaderOption
          avatar='https://res.cloudinary.com/dsinv9pik/image/upload/v1679010480/daniel_b8yuzx.jpg'
          title='Me'
        />
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import '../assets/css/Header.css'
import SearchIcon from '@mui/icons-material/Search'
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg'
import HeaderOption from './HeaderOption'

import { ReactComponent as Network } from '../assets/icons/network.svg'
import { ReactComponent as Jobsicon } from '../assets/icons/jobsicon.svg'
import { ReactComponent as Messageicon } from '../assets/icons/messageicon.svg'
import { ReactComponent as Notificationsicon } from '../assets/icons/notificationsicon.svg'
import { ReactComponent as Homeicon } from '../assets/icons/homeicon.svg'

function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <Linkedin height='37px' />
        <div className='header-search'>
          <SearchIcon title='Home' />
          <input
            placeholder='Search'
            type='text'
          />
        </div>
      </div>
      <div className='header-right'>
        <HeaderOption
          title='Home'
          icon={<Homeicon />}
        />
        <HeaderOption
          title='My Network'
          icon={<Network />}
        />
        <HeaderOption
          title='Jobs'
          icon={<Jobsicon />}
        />
        <HeaderOption
          title='Messaging'
          icon={<Messageicon />}
        />
        <HeaderOption
          title='Notifications'
          icon={<Notificationsicon />}
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

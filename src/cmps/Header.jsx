import React from 'react'
import '../assets/css/Header.css'
import SearchIcon from '@mui/icons-material/Search'
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg'
import HeaderOption from './HeaderOption'
import { useSelector } from 'react-redux'
import { ReactComponent as Network } from '../assets/icons/network.svg'
import { ReactComponent as Jobsicon } from '../assets/icons/jobsicon.svg'
import { ReactComponent as Messageicon } from '../assets/icons/messageicon.svg'
import { ReactComponent as Notificationsicon } from '../assets/icons/notificationsicon.svg'
import { ReactComponent as Homeicon } from '../assets/icons/homeicon.svg'

function Header() {
  const user = useSelector((storeState) => storeState.userModule.user)
  const noUserImg =
    'https://www.seekpng.com/png/small/847-8474751_download-empty-profile.png'
  return (
    <div className='header'>
      <div className='header-content'>
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
            avatar={user?.photoURL ? user?.photoURL : noUserImg}
            title='Me'
          />
        </div>
      </div>
    </div>
  )
}

export default Header

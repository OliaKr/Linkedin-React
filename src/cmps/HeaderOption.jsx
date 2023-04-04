import Avatar from '@mui/material/Avatar'
import React from 'react'
import { useSelector } from 'react-redux'
import '../assets/css/HeaderOption.css'
import { Select, MenuItem } from '@mui/material'
import { logout } from '../store/user.action'
import { signOut, getAuth } from 'firebase/auth'

function HeaderOption({ avatar, icon, title }) {
  const user = useSelector((storeState) => storeState.userModule.user)

  const onLogout = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        console.log('you signout successfully')
      })
      .catch((err) => {
        console.log(err)
      })
    logout()
  }

  const handleChange = (event) => {
    console.log('logout')
  }

  return (
    <div className='headerOption'>
      <div className='headerOption-icon'>
        {icon}
        {avatar && (
          <div>
            <Avatar
              src={avatar}
              sx={{ height: '25px', width: '25px' }}
              className='header-avatar'
            />
            <div className='me-section'>
              <span className='meTxt'>Me</span>
              {user && (
                <Select
                  labelId='signout'
                  value=''
                  label='Signout'
                  onChange={handleChange}
                  sx={{
                    boxShadow: 'none',
                    marginLeft: '-16px',
                    '.MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                >
                  <MenuItem
                    onClick={onLogout}
                    value='Sign Out'
                    className='option'
                  >
                    Sign Out
                  </MenuItem>
                </Select>
              )}
            </div>
          </div>
        )}
      </div>
      {!avatar && <div className='headerOption-title'>{title}</div>}
    </div>
  )
}

export default HeaderOption

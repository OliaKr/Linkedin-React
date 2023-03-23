import Avatar from '@mui/material/Avatar'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/css/HeaderOption.css'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { logout, selectUser } from '../features/userSlice'
import { signOut, getAuth } from 'firebase/auth'

function HeaderOption({ avatar, icon, title }) {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const onLogout = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        console.log('you signout successfully')
      })
      .catch((err) => {
        console.log(err)
      })
    dispatch(logout())
  }
  return (
    <div className='headerOption'>
      <div className='headerOption-icon'>
        {icon}
        {avatar && (
          <div>
            <Avatar
              className='headerOption-icon'
              src={avatar}
            />
            <div style={{ display: 'flex', maxHeight: '30px' }}>
              <span>Me</span>
              {user && (
                <Select
                  sx={{
                    boxShadow: 'none',
                    '.MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                >
                  <MenuItem value={10}>
                    <Button onClick={onLogout}>Log Out</Button>
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

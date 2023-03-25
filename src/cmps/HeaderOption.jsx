import Avatar from '@mui/material/Avatar'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/css/HeaderOption.css'
import Select from '@mui/material/Select'
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
            <div className='me-section'>
              <span>Me</span>
              {user && (
                <Select
                  sx={{
                    boxShadow: 'none',
                    marginLeft: '-16px',
                    '.MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                >
                  <option className='option'>
                    <button onClick={onLogout}>Sign Out</button>
                  </option>
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

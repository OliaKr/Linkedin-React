import React from 'react'
import '../assets/css/PostIndex.css'
import Avatar from '@mui/material/Avatar'
import InputOption from '../cmps/InputOption.jsx'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

function PostIndex({ name, description, message, photoURL }) {
  return (
    <div className='post'>
      <div className='post-header'>
        <Avatar src={photoURL} />

        <div className='post-info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post-body'>
        <p>{message}</p>
      </div>

      <div className='post-buttons'>
        <InputOption
          Icon={ThumbUpOffAltIcon}
          title='Like'
          color='gray'
        />
        <InputOption
          Icon={CommentOutlinedIcon}
          title='Comment'
          color='gray'
        />

        <InputOption
          Icon={ShareOutlinedIcon}
          title='Repost'
          color='gray'
        />
        <InputOption
          Icon={SendOutlinedIcon}
          title='Send'
          color='gray'
        />
      </div>
    </div>
  )
}

export default PostIndex

import React, { useState } from 'react'
import '../assets/css/PostIndex.css'
import Avatar from '@mui/material/Avatar'
import InputOption from '../cmps/InputOption.jsx'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import { formatDateToMin } from '../utils/formatDateToMin'
import { useSelector } from 'react-redux'
import { db } from '../firebase'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
} from 'firebase/firestore'
import CommentDrawer from './CommentDrawer'

function PostIndex({
  id,
  name,
  description,
  message,
  photoURL,
  timestamp,
  likes,
  comments,
}) {
  const user = useSelector((storeState) => storeState.userModule.user)
  const [isOpen, setIsOpen] = useState(false)

  const addRemoveLike = async () => {
    const postRef = doc(db, 'posts', id)
    const likesRef = collection(postRef, 'likes')
    const q = await query(likesRef)
    const likes = await getDocs(q)
    let isDeleted = false
    likes.forEach((like) => {
      if (like.data().email === user.email) {
        console.log(like.id)
        deleteDoc(doc(db, 'posts', id, 'likes', like.id))
        isDeleted = true
      }
    })
    if (!isDeleted) {
      addDoc(likesRef, {
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      })
    }
  }

  const deletePost = async () => {
    await deleteDoc(doc(db, 'posts', id))
  }

  const toggleCommentDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='post'>
      <div className='post-header'>
        <Avatar src={photoURL} />
        <div className='post-header-content'>
          <div className='post-info'>
            <h2>{name}</h2>
            <p>{formatDateToMin(timestamp?.seconds * 1000)}</p>
          </div>
          <div onClick={deletePost}>
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className='post-body'>
        <p>{message}</p>
      </div>

      <div className='post-buttons'>
        <InputOption
          count={likes?.length}
          tooltipTxt='likes'
          Icon={ThumbUpOffAltIcon}
          title='Like'
          color='gray'
          onClick={addRemoveLike}
        />
        <InputOption
          count={comments?.length}
          tooltipTxt='comments'
          Icon={CommentOutlinedIcon}
          title='Comment'
          color='gray'
          onClick={toggleCommentDrawer}
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
      {isOpen && <CommentDrawer id={id} />}
    </div>
  )
}

export default PostIndex

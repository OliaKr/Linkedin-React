import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import { useSelector } from 'react-redux'
import { db } from '../firebase.js'
import { addDoc, collection, doc } from 'firebase/firestore'
import '../assets/css/CommentDrawer.css'

const CommentDrawer = ({ id }) => {
  const user = useSelector((storeState) => storeState.userModule.user)
  const [input, setInput] = useState('')

  const addComment = async () => {
    const postRef = doc(db, 'posts', id)

    const commentRef = collection(postRef, 'comments')
    await addDoc(commentRef, {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      comment: input,
    })
  }
  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
    console.log('input', input)
  }

  return (
    <div className='drawer-container'>
      <Avatar
        src={user?.photoURL}
        sx={{ width: '48px', height: '48px' }}
        className='feed-avatar'
      />
      <div className='feed-input'>
        <form>
          <input
            placeholder='Add a comment'
            value={input}
            onChange={(e) => handleChange(e)}
            type='text'
          />
          <button
            onClick={addComment}
            type='submit'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default CommentDrawer

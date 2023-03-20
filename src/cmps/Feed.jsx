import React, { useState, useEffect } from 'react'
import '../assets/css/Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import InputOption from '../cmps/InputOption.jsx'
import ImageIcon from '@mui/icons-material/Image'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import PostIndex from '../cmps/PostIndex.jsx'
import { db } from '../firebase.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import {
  addDoc,
  collection,
  Timestamp,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from 'firebase/firestore'

/////////

function Feed() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   db.collection('posts').onSnapshot((snapshot) =>
  //     setPosts(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   )
  // }, [])

  useEffect(() => {
    onSnapshot(collection(db, 'posts'), (snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    )
  }, [])

  // const sendPost = (e) => {
  //   e.preventDefault()
  //   db.collection('posts').add({
  //     name: 'Daniel Herman',
  //     description: 'this is a test',
  //     message: input,
  //     photoURL: '',
  //     // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     timestamp: serverTimestamp(),
  //   })
  // }

  const sendPost = async (e) => {
    e.preventDefault()
    const res = await addDoc(collection(db, 'posts'), {
      name: 'Daniel Herman',
      description: 'this is a test',
      message: input,
      photoURL: '',
      // timestamp: Timestamp.fromDate(new Date('December 10, 1815'))
      timestamp: serverTimestamp(),
    })
    setInput('')

    console.log(res.id)
  }

  return (
    <div className='feed'>
      <div className='feed-inputContainer'>
        <div className='feed-input'>
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
            />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed-inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#378fe9' />
          <InputOption Icon={SmartDisplayIcon} title='Video' color='#5f9b41' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#c37d16' />
          <InputOption
            Icon={CalendarViewDayIcon}
            title='Write article'
            color='#e16745'
          />
        </div>
      </div>
      <div>
        {/* Posts */}
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <PostIndex
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}

        {/* <PostIndex
          name='Daniel Herman'
          description='test'
          message='Wow this works!'
        /> */}
      </div>
    </div>
  )
}

export default Feed

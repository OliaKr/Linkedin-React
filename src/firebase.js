// import firebase from './firebase'

// const firebaseConfig = {
//   apiKey: 'AIzaSyDE11XLd7YMAh0uAR9HOAY8d3kyMhxHvwc',
//   authDomain: 'linkedin-clone-7bf6b.firebaseapp.com',
//   projectId: 'linkedin-clone-7bf6b',
//   storageBucket: 'linkedin-clone-7bf6b.appspot.com',
//   messagingSenderId: '57342158449',
//   appId: '1:57342158449:web:51ba710f44504532445dd0',
//   measurementId: 'G-R9H9JVB3NR',
// }
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.fireStore()
// const auth = firebase.auth()

// export default { db, auth }

///*******Try 2 */

import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyDE11XLd7YMAh0uAR9HOAY8d3kyMhxHvwc',
  authDomain: 'linkedin-clone-7bf6b.firebaseapp.com',
  projectId: 'linkedin-clone-7bf6b',
  storageBucket: 'linkedin-clone-7bf6b.appspot.com',
  messagingSenderId: '57342158449',
  appId: '1:57342158449:web:51ba710f44504532445dd0',
  measurementId: 'G-R9H9JVB3NR',
}
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

// Get a list of cities from your database
// async function getPosts(db) {
//   const postsCol = collection(db, 'posts')
//   const postSnapShot = await getDocs(postsCol)
//   const postsList = postSnapShot.docs.map((doc) => doc.data())
//   return postsList
// }
// export default { db, auth }

//*****try 3 */

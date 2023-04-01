import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

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
export const storage = getStorage(app)

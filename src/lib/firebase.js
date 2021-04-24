import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// import seeder
// import { seedDatabase } from '../seeder'

const config = {
  apiKey: 'AIzaSyAZTDQScYZHL1TZHkgjch7CJQMr_JtEf8w',
  authDomain: 'instagram-clone-e68ea.firebaseapp.com',
  projectId: 'instagram-clone-e68ea',
  storageBucket: 'instagram-clone-e68ea.appspot.com',
  messagingSenderId: '406204093706',
  appId: '1:406204093706:web:78eb38057d87e8368696f3',
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

// call the seeder

export { firebase, FieldValue }

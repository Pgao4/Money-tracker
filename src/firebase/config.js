import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyDEe5D81N6wTkB1eWMVFzOi_mB92lNZfuk",
    authDomain: "money-tracker-ba2c7.firebaseapp.com",
    projectId: "money-tracker-ba2c7",
    storageBucket: "money-tracker-ba2c7.appspot.com",
    messagingSenderId: "504365821546",
    appId: "1:504365821546:web:26d67372cd812919bde413"
  };


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp }
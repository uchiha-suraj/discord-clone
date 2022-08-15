import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeGMr55q9IxGqacu37i404ahPs2NzEIc8",

  authDomain: "discord-85e8a.firebaseapp.com",

  projectId: "discord-85e8a",

  storageBucket: "discord-85e8a.appspot.com",

  messagingSenderId: "965327821041",

  appId: "1:965327821041:web:0e3ebfc9ab5dbf419bb150"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

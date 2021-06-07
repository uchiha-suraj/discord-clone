import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJZxyWodCqHoXnFE3ZJBRuAPhOy0yIBQc",
  authDomain: "discord-a8360.firebaseapp.com",
  projectId: "discord-a8360",
  storageBucket: "discord-a8360.appspot.com",
  messagingSenderId: "674419226460",
  appId: "1:674419226460:web:315fbe48005db801cfb399",
  measurementId: "G-1KMGBQ68N5"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyA9VDhaovbY8hvhZUJyePyKH04DvnyUHtA",
  authDomain: "react-redux-firebase-6373d.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-6373d.firebaseio.com",
  projectId: "react-redux-firebase-6373d",
  storageBucket: "react-redux-firebase-6373d.appspot.com",
  messagingSenderId: "10626986620",
  appId: "1:10626986620:web:ebf986af060fb7dda9cff9",
  measurementId: "G-9EXQKDG7R1"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
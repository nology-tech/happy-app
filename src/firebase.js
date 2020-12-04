import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBta08ifXtszI3nFkSCCFLW3CkiQ2xmqgc",
  authDomain: "happy-app-dbb3b.firebaseapp.com",
  databaseURL: "https://happy-app-dbb3b.firebaseio.com",
  projectId: "happy-app-dbb3b",
  storageBucket: "happy-app-dbb3b.appspot.com",
  messagingSenderId: "403448054375",
  appId: "1:403448054375:web:b47470887743b54aad0ac2",
  measurementId: "G-P6KWD6DLP8"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
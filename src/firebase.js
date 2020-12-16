import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC8BkGlpjWpc2VPSAuHjmJBbY1sVORmGo",
  authDomain: "happy-app-86830.firebaseapp.com",
  projectId: "happy-app-86830",
  storageBucket: "happy-app-86830.appspot.com",
  messagingSenderId: "685498532245",
  appId: "1:685498532245:web:a80b513aa0c31e916c369c",
  measurementId: "G-ZV5XSWGHXR",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;

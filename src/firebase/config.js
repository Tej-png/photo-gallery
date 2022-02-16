// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import * as fireStorage from "firebase/storage";
import * as fireStore from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGGING_SENDER_ID,
  appId:  process.env.REACT_APP_FIREBASE_APP_KEY
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage =fireStorage
const projectFireStore = fireStore.getFirestore()


export {projectStorage, projectFireStore}
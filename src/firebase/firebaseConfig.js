// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKF3-S8cYw44tb3iaSI3NAXWRdX26TtD8",
  authDomain: "react-app-9596f.firebaseapp.com",
  projectId: "react-app-9596f",
  storageBucket: "react-app-9596f.appspot.com",
  messagingSenderId: "106953097556",
  appId: "1:106953097556:web:6294d1ca1ee7a3c0c788c1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}
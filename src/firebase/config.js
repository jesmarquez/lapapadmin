// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf3cNsPHqC_nEYMFnXAgdl4DzMx3b2JHc",
  authDomain: "lapapa-faabf.firebaseapp.com",
  projectId: "lapapa-faabf",
  storageBucket: "lapapa-faabf.appspot.com",
  messagingSenderId: "796571131167",
  appId: "1:796571131167:web:9391abbb710046312fe42a",
  measurementId: "G-GE0EJ7KGSW"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
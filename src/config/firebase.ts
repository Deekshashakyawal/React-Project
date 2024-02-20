// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaFQYeB8HkF2ErLMWf0jrqPDlEaCa5zQc",
  authDomain: "react-project-5087a.firebaseapp.com",
  projectId: "react-project-5087a",
  storageBucket: "react-project-5087a.appspot.com",
  messagingSenderId: "641363775648",
  appId: "1:641363775648:web:43ad2db105c9375380f9c5",
  measurementId: "G-0793JRGGKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const provider= new GoogleAuthProvider();
export const db=getFirestore(app);
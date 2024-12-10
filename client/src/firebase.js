// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-bd0dd.firebaseapp.com",
  projectId: "mern-auth-bd0dd",
  storageBucket: "mern-auth-bd0dd.firebasestorage.app",
  messagingSenderId: "125888704539",
  appId: "1:125888704539:web:1eb7c0e04bd7fc7d1d08be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
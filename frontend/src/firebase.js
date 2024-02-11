// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "form-practice-5d5bb.firebaseapp.com",
  projectId: "form-practice-5d5bb",
  storageBucket: "form-practice-5d5bb.appspot.com",
  messagingSenderId: "1092215262947",
  appId: "1:1092215262947:web:6ff4c885370da24173bfd6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
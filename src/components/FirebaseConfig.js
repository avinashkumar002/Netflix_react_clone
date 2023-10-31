// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBin3_W6nD9o9ywbbjql4Bd0y8Ct3z_dTg",
  authDomain: "netflix-auth-f9b6f.firebaseapp.com",
  projectId: "netflix-auth-f9b6f",
  storageBucket: "netflix-auth-f9b6f.appspot.com",
  messagingSenderId: "126385604183",
  appId: "1:126385604183:web:bb3aea86e63698fa5a8512",
  measurementId: "G-4VPQJ42CB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
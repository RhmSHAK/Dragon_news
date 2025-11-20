// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMBevYh-S45tdg0ERZWzxvaTawktlrKjU",
  authDomain: "dragon-news-cdf36.firebaseapp.com",
  projectId: "dragon-news-cdf36",
  storageBucket: "dragon-news-cdf36.firebasestorage.app",
  messagingSenderId: "288636392516",
  appId: "1:288636392516:web:b8ce82450e6c0a596d1811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
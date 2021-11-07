// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkMaS-LlH0MNvlDDsdFLhjfYb5Sd8VpHo",
  authDomain: "uber-nextjs.firebaseapp.com",
  projectId: "uber-nextjs",
  storageBucket: "uber-nextjs.appspot.com",
  messagingSenderId: "747237498787",
  appId: "1:747237498787:web:8969d5f7a97bc1a265c416",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };

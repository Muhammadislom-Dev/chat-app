// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAct8YV4e3OEMQg-WU7d1bhSY01wX1JsZ0",
  authDomain: "chat-app-d3dcf.firebaseapp.com",
  projectId: "chat-app-d3dcf",
  storageBucket: "chat-app-d3dcf.appspot.com",
  messagingSenderId: "112130035420",
  appId: "1:112130035420:web:357ed3203b6758339bee19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

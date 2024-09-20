// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDhFbLXj9Xxr6OGsVfTykTT0vDUj3CVjqg",

  authDomain: "crylst.firebaseapp.com",

  projectId: "crylst",

  storageBucket: "crylst.appspot.com",

  messagingSenderId: "437068067111",

  appId: "1:437068067111:web:d4cc4caaacb7ba5d36b902"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
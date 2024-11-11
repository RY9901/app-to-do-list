// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsrBq6KM2VDZhLcqNMqpTmWH7hPa07JUA",
    authDomain: "mobile-app-todolist.firebaseapp.com",
    projectId: "mobile-app-todolist",
    storageBucket: "mobile-app-todolist.firebasestorage.app",
    messagingSenderId: "1083805733183",
    appId: "1:1083805733183:web:fdc3b05932a9c28722438a",
    measurementId: "G-0082X9NVMJ"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
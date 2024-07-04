// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore"
import { REACT_APP_API_KEY } from '@env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "diferente-uniformes.firebaseapp.com",
  projectId: "diferente-uniformes",
  storageBucket: "diferente-uniformes.appspot.com",
  messagingSenderId: "252479258977",
  appId: "1:252479258977:web:69f2dd4c642b15e66f0520",
  measurementId: "G-LWCBY0LTN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
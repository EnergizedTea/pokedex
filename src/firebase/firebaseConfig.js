// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration NEVER REVEAL THIS SHIT DIEGO
const firebaseConfig = {
  apiKey: "AIzaSyB1KuBResmPuYPqWDAfX8qLIg1qU_GDYEU",
  authDomain: "pokedex-493b0.firebaseapp.com",
  projectId: "pokedex-493b0",
  storageBucket: "pokedex-493b0.appspot.com",
  messagingSenderId: "863289489944",
  appId: "1:863289489944:web:1599e89fb8d4a2b0df216d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
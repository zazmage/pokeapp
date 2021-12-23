// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn2_ydzn5jYNPTay_zv6qeINJxA3pGULo",
  authDomain: "pokeapp-9b5d9.firebaseapp.com",
  projectId: "pokeapp-9b5d9",
  storageBucket: "pokeapp-9b5d9.appspot.com",
  messagingSenderId: "928530880516",
  appId: "1:928530880516:web:5909e75e08999644d4bd51",
  measurementId: "G-ZWE8ZG42EE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authGoogle = new GoogleAuthProvider(app);
export const analytics = getAnalytics(app);

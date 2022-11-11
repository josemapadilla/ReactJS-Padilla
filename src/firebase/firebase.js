import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDOYeOsaunBleuOVhPvv1YHxnfwtHXfobg",
  authDomain: "curso-reactjs-c0ce3.firebaseapp.com",
  projectId: "curso-reactjs-c0ce3",
  storageBucket: "curso-reactjs-c0ce3.appspot.com",
  messagingSenderId: "695331219790",
  appId: "1:695331219790:web:e784475cc172769810561f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
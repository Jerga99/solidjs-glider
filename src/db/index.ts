
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClRttOUJdLjxImhSldJMjwaya_llM8SFM",
  authDomain: "glider-197b2.firebaseapp.com",
  projectId: "glider-197b2",
  storageBucket: "glider-197b2.appspot.com",
  messagingSenderId: "779541992064",
  appId: "1:779541992064:web:a9971e2cb53483b9b10c65"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);

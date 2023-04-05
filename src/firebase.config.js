import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "react-authrr.firebaseapp.com",
  projectId: "react-authrr",
  storageBucket: "react-authrr.appspot.com",
  messagingSenderId: "453346062314",
  appId: "1:453346062314:web:2f861cc4b6df727b134c93",
  measurementId: "G-YX4XMQQWGV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

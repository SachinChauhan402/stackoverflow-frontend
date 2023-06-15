import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWsNojkgoXPWhO5yH0oV1FcvXzomFIKsc",
  authDomain: "stackoverflow-c98d4.firebaseapp.com",
  projectId: "stackoverflow-c98d4",
  storageBucket: "stackoverflow-c98d4.appspot.com",
  messagingSenderId: "30541932141",
  appId: "1:30541932141:web:dd5fd3152840c50b08c164",
  measurementId: "G-98JJNHJY0W",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

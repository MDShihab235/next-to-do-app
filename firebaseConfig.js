import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAEn50eXNZ4slWD2x4U99VDZEAfMv0GY7U",
  authDomain: "next-to-do-app-intern.firebaseapp.com",
  projectId: "next-to-do-app-intern",
  storageBucket: "next-to-do-app-intern.appspot.com",
  messagingSenderId: "275232724408",
  appId: "1:275232724408:web:fe4009035dd3ba21f2ab4d",
};
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

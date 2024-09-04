// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHdREhUCLSUARfNWvxKz-dKZE4yvskHAw",
  authDomain: "myportfolio-f1748.firebaseapp.com",
  projectId: "myportfolio-f1748",
  storageBucket: "myportfolio-f1748.appspot.com",
  messagingSenderId: "362848566565",
  appId: "1:362848566565:web:573d29991436d63fbd6ecc" ,
  measurementId: "G-THPD3XXNBL",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth();
export const imageDb = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcnBInLp3CHUnQzOBsWEJ--nrZcuCMd4Q",
  authDomain: "fireapp-1280c.firebaseapp.com",
  projectId: "fireapp-1280c",
  storageBucket: "fireapp-1280c.appspot.com",
  messagingSenderId: "137901713202",
  appId: "1:137901713202:web:2ac42ab7ae1f541768192b",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

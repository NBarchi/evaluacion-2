// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvhqia44Y-XfjrwHR8cdyIcFNJiuVUt1c",
  authDomain: "nb-prueba.firebaseapp.com",
  databaseURL: "https://nb-prueba-default-rtdb.firebaseio.com",
  projectId: "nb-prueba",
  storageBucket: "nb-prueba.appspot.com",
  messagingSenderId: "692041372625",
  appId: "1:692041372625:web:4fd105c96a0b5099b086f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
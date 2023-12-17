// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAorCJ-aVAY8Wvv2rDKUEeaCAu3WFQl4n0",
  authDomain: "netflixgpt-6f12f.firebaseapp.com",
  projectId: "netflixgpt-6f12f",
  storageBucket: "netflixgpt-6f12f.appspot.com",
  messagingSenderId: "373588775179",
  appId: "1:373588775179:web:3111595b7e8aaf0cde120e",
  measurementId: "G-GSK0EZZ72C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

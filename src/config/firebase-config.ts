// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrwoIg5WWi-QMGqU4kAk1OxtvOOgBwwkY",
  authDomain: "nguyenanh-100304.firebaseapp.com",
  databaseURL: "https://nguyenanh-100304-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nguyenanh-100304",
  storageBucket: "nguyenanh-100304.appspot.com",
  messagingSenderId: "49615532709",
  appId: "1:49615532709:web:63f5e74fb12e3fffc2934c",
  measurementId: "G-61Q290KFEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
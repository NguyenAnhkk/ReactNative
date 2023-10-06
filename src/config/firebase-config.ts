
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrwoIg5WWi-QMGqU4kAk1OxtvOOgBwwkY",
  authDomain: "nguyenanh-100304.firebaseapp.com",
  databaseURL: "https://nguyenanh-100304-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nguyenanh-100304",
  storageBucket: "nguyenanh-100304.appspot.com",
  messagingSenderId: "49615532709",
  appId: "1:49615532709:web:63f5e74fb12e3fffc2934c",
  measurementId: "G-61Q290KFEY",
  webClientId:'49615532709-k705nc28tpmp28bnpr3to7j2brk59gmp.apps.googleusercontent.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
//android 49615532709-9tlf3rshajee72eh0sa4fu2pt44p6hdd.apps.googleusercontent.com
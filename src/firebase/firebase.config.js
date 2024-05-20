// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1F1F8fdb0XhJFtuJo69_6W6lbnRBLM30",
  authDomain: "ecommerceadvanced-b7838.firebaseapp.com",
  projectId: "ecommerceadvanced-b7838",
  storageBucket: "ecommerceadvanced-b7838.appspot.com",
  messagingSenderId: "1045249808274",
  appId: "1:1045249808274:web:128f2a8a9f9ea1bcced34b",
  measurementId: "G-PLVLT8FJZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
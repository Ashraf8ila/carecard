// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEl4UJpyPpfjO7atXaYPooXE4WsT3IJn0",
  authDomain: "carecard-b86f3.firebaseapp.com",
  projectId: "carecard-b86f3",
  storageBucket: "carecard-b86f3.firebasestorage.app",
  messagingSenderId: "809092318014",
  appId: "1:809092318014:web:13c5bd3744d603f65c226f",
  measurementId: "G-RCLQLVWE5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
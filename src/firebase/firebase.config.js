// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIYuSHuW09RJ48frY0W7yc8C49ty3LWZ0",
  authDomain: "captured-moments-institute.firebaseapp.com",
  projectId: "captured-moments-institute",
  storageBucket: "captured-moments-institute.appspot.com",
  messagingSenderId: "843485725726",
  appId: "1:843485725726:web:ae55a2593fd3d2cfdd9a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
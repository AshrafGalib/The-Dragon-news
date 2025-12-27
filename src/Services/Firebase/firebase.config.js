// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4F5LsJYNPF65DiIQBSyT79dJSHZUrTUY",
  authDomain: "the-dragon-news-fd48a.firebaseapp.com",
  projectId: "the-dragon-news-fd48a",
  storageBucket: "the-dragon-news-fd48a.firebasestorage.app",
  messagingSenderId: "133387051662",
  appId: "1:133387051662:web:542e2f1d09fbb839a1dfdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
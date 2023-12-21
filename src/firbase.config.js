// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfQXDetV5VCFAqXVEvH_HkLFiF59d4r4o",
  authDomain: "task-manager-website-84fc9.firebaseapp.com",
  projectId: "task-manager-website-84fc9",
  storageBucket: "task-manager-website-84fc9.appspot.com",
  messagingSenderId: "1009020064407",
  appId: "1:1009020064407:web:6620921f7ef851d0688fd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
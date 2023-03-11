// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_B2mQPYPiqTkthrjj8ah_zZanBaHsZFI",
  authDomain: "exam-project-5d13d.firebaseapp.com",
  projectId: "exam-project-5d13d",
  storageBucket: "exam-project-5d13d.appspot.com",
  messagingSenderId: "413517039958",
  appId: "1:413517039958:web:0a80f546b56af08e5d2ef7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
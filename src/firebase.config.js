// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtUiCATVI8DhLDjcYqiwH7QUxdOSJe7og",
  authDomain: "shopmate-b1be1.firebaseapp.com",
  projectId: "shopmate-b1be1",
  storageBucket: "shopmate-b1be1.appspot.com",
  messagingSenderId: "697771540146",
  appId: "1:697771540146:web:9ee1e461cbafca2c7993ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default firebaseConfig
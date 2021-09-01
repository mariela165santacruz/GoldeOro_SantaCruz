// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/compact/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBERGkxHtF5S0eA5mfo78p9-1qxeqirD2s",
  authDomain: "coderhose-react.firebaseapp.com",
  projectId: "coderhose-react",
  storageBucket: "coderhose-react.appspot.com",
  messagingSenderId: "682908540441",
  appId: "1:682908540441:web:286278aabd221be7929488"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore()


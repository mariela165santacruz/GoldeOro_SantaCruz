
  import firebase from "firebase/compat/app";
  import "firebase/compat/firestore";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBERGkxHtF5S0eA5mfo78p9-1qxeqirD2s",
    authDomain: "coderhose-react.firebaseapp.com",
    projectId: "coderhose-react",
    storageBucket: "coderhose-react.appspot.com",
    messagingSenderId: "682908540441",
    appId: "1:682908540441:web:286278aabd221be7929488"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  
  export const getFirestore = () => firebase.firestore()


 


import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router/Router";
import { CartProvider } from "./Components/Context/CartContext";
import './App.css';
import { CarouselItem } from "react-bootstrap";
import Slider from './Components/Slider';
import Footer from "./Components/Footer";
import Login from './Components/Login';
import {fire}  from "./Firebase/firebase";
import Hero from './Components/Hero';
import firebase from '@firebase/app';
require('firebase/auth');





function App() {
	const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccout, setHasAccout] = useState('false');

const clearImputs = () => {
  setEmail('');
  setPassword('');
}

const clearErrors = () =>{
  setEmailError('');
  setPasswordError('');
}

  const handleLogin = () =>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
        }
      });
  };

  const handleSignup = () =>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
        }
      });
  };

  const handleLogout = () => {
    fire
    .auth()
    .signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        clearImputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();

  },[])

	return ( 
		<div className='App'>
      {user ? (
        <Hero handleLogout={handleLogout}/>
      ) :(
        <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccout={hasAccout}
        setHasAccout={setHasAccout} 
        emailError={emailError}
        passwordError={passwordError}
        />
      )}

      <CartProvider>
     
      
        <Router />
      </CartProvider>
      <Footer />
		</div>
    
	)
}

export default App;


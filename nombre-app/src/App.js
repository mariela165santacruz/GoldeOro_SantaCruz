import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router/Router";
import { CartProvider } from "./Components/Context/CartContext";
import './App.css';

import { CarouselItem } from "react-bootstrap";
import Slider from './Components/Slider'
import Footer from "./Components/Footer";

function App() {
	

	return ( 
		<div className='App'>
       <CartProvider>
        <Router />
      </CartProvider>
      <Footer />
		</div>
    
	)
}

export default App;


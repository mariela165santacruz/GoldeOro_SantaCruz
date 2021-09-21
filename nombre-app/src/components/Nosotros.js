import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import "./Nosotros.css";

class App extends Component {
    render() {
      return (
        <div className="ReactPlayer"> 
        <h2 >SOBRE NOSOTROS</h2><br />
        <p >"Somos una tienda especializada en hacer felices a nuestros clientes, ofrecemoscalidad con nuestros productos y buenos precios, para que cualquiera pueda disfrutarlos.<br />
                Garantizamos buena atención y amabilidad, porque priorizamos las buenas personas. Queremos que nuestros productos sean vendidos y utilizados en todas las partes del mundo.<br />
                Nuesto principal objetivo es servir a nuestro clientes de forma concreta y con la mayor calidad posible. ”
            </p>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=Fv9zW06Z4Qo'
            className='react-player'
            playing
            width='1000px'
            height='400px'
          /> 
        </div> 
      );
    } 
  }

  export default App;
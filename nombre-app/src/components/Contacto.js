import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Row, Col, Form, Input, Label, FormGroup, Button, FormFeedback} from 'reactstrap';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      nombre: '',
      correo: '',
      edad: '',
      mensajeNombre: '',
      mensajeCorreo: '',
      mensajeEdad: '',
      invalidNombre: false,
      invalidCorreo: false,
      invalidEdad: false,
    }
    this.onChange = this.onChange.bind(this);
    this.enviarAlaBD = this.enviarAlaBD.bind(this);
  }

  onChange = e =>{
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  }
  enviarAlaBD = e  => {
    e.preventDefault();
    let valido = true;
    if(this.state.nombre === ''){
      this.setState({
        invalidNombre: true,
        mensajeNombre: 'El campo nombre es obligatorio, indica tu nombre',
      });
      valido = false;
    }
    if(this.state.correo === ''){
      this.setState({
        invalidCorreo: true,
        mensajeCorreo: 'Indica tu dirección de correo',
      });
      valido = false;
    }
    if(this.state.edad === ''){
      this.setState({
        invalidEdad: true,
        mensajeEdad: 'Realiza tu consulta',
      });
      valido = false;
    }
    if(valido){
      //Enviarlo a la base de datos o a otro componente
      console.log("Se envian los datos " + JSON.stringify(this.state));
    }
  }
  render(){
    
    return (
      <div>
          
        <Row>
        
          <Col xs="3"></Col>
          <Col xs="6">
            <h2>CONTACTATE CON NOSOTROS</h2><br/>
            <p>Si quieres información sobre cualquiera de nuestros productos o estás interesado en su distribución, rellena nuestro formulario y nos pondremos en contacto contigo lo antes posible. Muchas gracias! </p>
            <Form onSubmit={this.enviarAlaBD}>
              <FormGroup>
                <Label>Nombre</Label>
                <Input type="text" name="nombre" value={this.state.nombre} onChange={this.onChange} invalid={this.state.invalidNombre} />
                <FormFeedback>{this.state.mensajeNombre}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Correo</Label>
                <Input type="email" name="correo" value={this.state.correo} onChange={this.onChange} invalid={this.state.invalidCorreo}/>
                <FormFeedback>{this.state.mensajeCorreo}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Consulta</Label>
                <Input type="text" name="edad" className="col-2" value={this.state.edad} onChange={this.onChange} invalid={this.state.invalidEdad} />
                <FormFeedback>{this.state.mensajeEdad}</FormFeedback>
              </FormGroup>
              <FormGroup>
              <br/><Button color="success">ENVIAR</Button><br/><br/>
              <p> Sede central y oficinas: Av. Cabildo 2872 - Belgrano - CABA - Argentina <br/> Teléfono: (+54) 9 11 3986 6849 <br/> Administración: info@goldeoro.com - Comunicación y Marketing: marketing@goldeoro.com</p>
              </FormGroup> 
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

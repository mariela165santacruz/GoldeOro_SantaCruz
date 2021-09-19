import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../Components/ItemDetailContainer";
import ItemListContainer from "../Components/ItemListContainer";
import Navbar from "../Components/Navbar";
import Cart from "../Components/Cart";
import NotFound from "../Components/NotFound";

import { CarouselItem } from "react-bootstrap";
import Slider from '../Components/Slider'

const Router = () => {
  
  
  return (
    <BrowserRouter>
      <Navbar />
      <Slider images={images} />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:categoryId" component={ItemListContainer} />
        <Route path="/item/:itemId" component={ItemDetailContainer} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="/Nosotros" component={Nosotros}/>
        <Route path="/Contacto" component={Contacto}/> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const images = [
  {
    id: '1',
    title: 'NOS VOLVIMOS LOCOS!!!',
    image:
      'https://cdn.pixabay.com/photo/2016/03/21/21/20/nike-1271624_960_720.jpg',
  },
  {
    id: '2',
    title: '70% OFF EN NIKE',
    image:
      'https://cdn.pixabay.com/photo/2015/09/09/18/26/green-932350_960_720.jpg',
   
  },
  {
    id: '3',
    title: 'VESTÍ A TU EQUIPO CON LO MEJOR',
    image:
      'https://cdn.pixabay.com/photo/2016/07/21/18/11/football-1533210_960_720.jpg',
  },
  {
    id: '4',
    title: 'COMPRÁ EN GOL DE ORO',
    image:
      'https://cdn.pixabay.com/photo/2017/12/17/12/45/football-3024154_960_720.jpg',
  },
]

export default Router;
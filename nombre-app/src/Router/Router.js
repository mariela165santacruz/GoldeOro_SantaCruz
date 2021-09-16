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
    title: 'Awesome forest',
    image:
      'https://cdn.pixabay.com/photo/2020/11/18/10/18/goalkeeper-5754865_960_720.jpg',
  },
  {
    id: '2',
    title: 'A litle bird.',
    image:
      'https://cdn.pixabay.com/photo/2016/03/21/21/20/nike-1271624_960_720.jpg',
  },
  {
    id: '3',
    title: 'The best friend.',
    image:
      'https://cdn.pixabay.com/photo/2014/10/14/20/24/football-488714_960_720.jpg',
  },
  {
    id: '4',
    title: 'Beautiful desert.',
    image:
      'https://cdn.pixabay.com/photo/2016/07/21/18/11/football-1533210_960_720.jpg',
  },
]

export default Router;
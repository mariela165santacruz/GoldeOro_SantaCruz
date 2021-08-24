import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../Components/ItemDetailContainer";
import ItemListContainer from "../Components/ItemListContainer";
import Navbar from "../Components/Navbar";
import Cart from "../Components/Cart";
import NotFound from "../Components/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
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

export default Router;
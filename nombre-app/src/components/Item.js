import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



function Item({ id, title, price, images }) {
  
  return (
    <Card style={{ width: "20rem", height: "600px" }}>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>${price}</p>
        <Link to={`/item/${id}`}>
          <Button variant="btn btn-dark">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
    
  );
}

export default Item;
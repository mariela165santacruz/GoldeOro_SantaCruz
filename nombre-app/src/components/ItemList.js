import React from "react";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
function addItem({ id, price, title, pictureUrl, category }, index) {
  return (
    <Item
      key={index}
      id={id}
      title={title}
      price={price}
      pictureUrl={pictureUrl}
      category={category}
    />
  );
}
// acá creo un div para contener y poder darle flexibilidad a los items que se generan
function ItemList({ items }) {
  return (
    <div className="d-inline-flex">
      {items.map(item => {
        return (
          <Item
            key={item.index}
            id={item.id}
            title={item.title}
            price={item.price}
            pictureUrl={item.pictureUrl}
            category={item.category}
          />
        )
      })}
    </div>);
}
export default ItemList;
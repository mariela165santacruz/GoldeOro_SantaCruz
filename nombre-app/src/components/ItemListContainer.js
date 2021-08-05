import React from "react";
// IMPORTARLO DENTRO DE APP.JS

function ItemListContainer(props) {
  return <div className="fs-2 text-center">{props.greeting}</div>;
}

export default ItemListContainer;

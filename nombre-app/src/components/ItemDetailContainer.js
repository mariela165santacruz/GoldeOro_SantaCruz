import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

import { getProductById } from "../helpers/AllProducts";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [itemId]);

  return <ItemDetail className="" item={item} />;
  
}

export default ItemDetailContainer;

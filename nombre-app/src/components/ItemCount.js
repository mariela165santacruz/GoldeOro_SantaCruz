import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);
  
  return (
    <div className="d-flex flex-column ">
      <div className="d-inline-flex justify-content-center gap-5 py-4 ">
        <button
          className="btn btn-dark "
          onClick={() => {
            if (counter > initial) {
              
              setCounter(counter - 1);
            }
          }}
        >
          -
        </button>
        <p className="fs-6">{counter}</p>
        <button
          className="btn btn-dark"
          onClick={() => {
            if (counter < stock) {
              setCounter(counter + 1);
            }
          }}
        >
          +
        </button>
      </div>
      <button className="btn btn-dark " onClick={() => onAdd(counter)}>
        Agregar
      </button>
    </div>
  );
}

export default ItemCount;
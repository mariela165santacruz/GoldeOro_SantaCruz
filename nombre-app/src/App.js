import React from "react";
import Navbar from "./components/navBar"
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <navBar />{" "}
      <ItemListContainer greeting=" ItemListContainer provisional " />
    </div>
  );
}
export default App;
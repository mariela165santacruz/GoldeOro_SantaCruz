import React from "react";
import Navbar from "./components/navBar"
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />{" "}
      <ItemListContainer greeting=" ItemListContainer provisional " />
    </div>
  );
}
export default App;
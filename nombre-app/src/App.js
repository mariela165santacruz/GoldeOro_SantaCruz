import React from "react";
import NavBar from "./component/navbar/navBar";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />{" "}
      <ItemListContainer greeting=" ItemListContainer provisional " />
    </div>
  );
}
export default App;
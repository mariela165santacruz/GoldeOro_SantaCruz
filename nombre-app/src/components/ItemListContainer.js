import React from "react";
import reactDom from "react-dom";
// IMPORTARLO DENTRO DE APP.JS

function ItemListContainer(props) {
  return <div className="fs-2 text-center">{props.greeting}</div>;
}

export default ItemListContainer;

const { useState } = React
const Button = ({ increment, onClickFunction }) => {
const handleClick = () => {
onClickFunction(increment)
}
return <button onClick={handleClick}>+{increment}</button>
}


const App = () => {
const [count, setCount] = useState(0)


const incrementCount = increment => {
setCount(count + increment)
}


return (
  
<div>
<navBar />{" "}
      <ItemListContainer greeting=" CONTADOR " />
<Button increment={1} onClickFunction={incrementCount} />
<Button increment={10} onClickFunction={incrementCount} />
<Button increment={100} onClickFunction={incrementCount} />
<Button increment={1000} onClickFunction={incrementCount} />
<span>{count}</span>
</div>
)
}


reactDom.render(<App/>, document.getElementById('app'))

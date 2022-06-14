import "./App.css";
import {useState} from "react";

function App() {
  const[counter,setCounter] = useState(0);
  const handleCounter = (x) => {
     setCounter(counter+x);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2 data-testid="counter-value">{counter}</h2>
      <button data-testid="counter-decrement-button"  onClick={()=> handleCounter(1)}>+</button>
      <button data-testid="counter-increment-button" disabled={counter === 0 ? true : false} onClick={()=> handleCounter(-1)}>-</button>
    </div>
  );
}

export default App;

import "./App.css";
import {useState} from "react";

function App() {
  const[counter,setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      hello
      <h2 data-testid="counter-value">{counter}</h2>
      <button data-testid="counter-decrement-button"  onClick={()=> setCounter(counter+1)}>+</button>
      <button data-testid="counter-increment-button" disabled={counter === 0 ? true : false} onClick={()=> setCounter(counter-1)}>-</button>
    </div>
  );
}

export default App;

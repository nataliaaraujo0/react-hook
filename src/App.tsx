import reactLogo from "./assets/react.svg";
import "./App.css";
import { ButtonIncrement } from "./components/ButtonIncrement";
import { useState } from "react";

function App() {
  const [counter, setCount] = useState(0);

  const handleIncrementCounter = (num: number) => {
    setCount(counter + num);
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>useCallback</h1>
      <ButtonIncrement incrementButton={handleIncrementCounter} />
      <p className="read-the-docs">{counter}</p>
    </div>
  );
}

export default App;

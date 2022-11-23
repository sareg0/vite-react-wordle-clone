import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Board } from "./components/Board/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Board />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2
        style={{
          color: "black",
          backgroundColor: "yellow",
          borderStyle: "solid",
          borderWidth: "3px",
          padding: "10px",
        }}
      >
        WIP Alert! This app is being built in public. It may look weird
      </h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

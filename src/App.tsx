import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Pizzaria Gamma Coral</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Qauntas pizzas você vai querer? {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;

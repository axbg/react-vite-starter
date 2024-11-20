import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p class="colored-p">count is {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  )
}

export default App;

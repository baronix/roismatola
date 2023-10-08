import React, { useState, createElement } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      <h1>Alice</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

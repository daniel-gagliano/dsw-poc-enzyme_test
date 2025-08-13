import { useState } from 'react';
import './App.css';
import Form from '../Form/Form.jsx'; // Importo el componente Form

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev/" target="_blank" rel="noreferrer">          
          <img
            src="https://es.vite.dev/logo.svg"
            className="logo vite"
            alt="Vite logo"
            style={{ width: 120, height: 120 }}
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
           <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
            className="logo react"
            alt="React logo"
            style={{ width: 130, height: 120 }}
          />
        </a>

      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      <Form />
    </>
  );
}

export default App;

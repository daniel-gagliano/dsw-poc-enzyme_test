import { useState } from 'react';
import './App.css';
import Form from '../Form/Form.jsx'; // Importo el componente Form

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
           <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
            className="logo react"
            alt="Enzyme logo"
            style={{ width: 130, height: 120 }}
          />
        </a>
        <a href="https://enzymejs.github.io/enzyme/" target="_blank" rel="noreferrer">          
          <img
            src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iODU3NTM1NDE2NDQ4MDE2NGY3NGI5NGRiNDEzMzcxND9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.AahIIJfV6iMpI-NTCuPx1tkx1RNkCUgcRAlqW0RQk4E"
            className="logo enzyme"
            alt="Enzyme logo"
            style={{ width: 120, height: 120 }}
          />
        </a>
      </div>

      <h1>Testing de formulario con Enzyme</h1>

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

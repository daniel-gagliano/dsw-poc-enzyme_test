import { useState } from "react";
import React from 'react';


export default function Form() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() && email.trim() && edad.trim() && mensaje.trim()) {
      setEnviado(true);
    } else {
      setEnviado(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Tu edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        type="number"
      />
      <textarea
        placeholder="Tu mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button type="submit">Enviar</button>
      {enviado ? <p>Gracias, {nombre}!</p> : null}
    </form>
  );
}

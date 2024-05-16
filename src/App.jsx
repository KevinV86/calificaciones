import React, { useState } from 'react';
import './App.css';

function App() {
  const [notas, setNotas] = useState([]);
  const [nuevaNota, setNuevaNota] = useState('');

  const agregarNota = () => {
    const notaNumero = parseFloat(nuevaNota);
    if (!isNaN(notaNumero)) {
      setNotas([...notas, notaNumero]);
      setNuevaNota('');
    }
  };

  const calcularPromedio = () => {
    if (notas.length === 0) return 0;
    const suma = notas.reduce((a, b) => a + b, 0);
    return suma / notas.length;
  };

  return (
    <div className="App">
      <h1>Calculadora de Promedio de Notas</h1>
      <div>
        <input
          type="number"
          value={nuevaNota}
          onChange={(e) => setNuevaNota(e.target.value)}
          placeholder="Ingrese una nota"
        />
        <button onClick={agregarNota}>Agregar Nota</button>
      </div>
      <div>
        <h2>Notas Ingresadas:</h2>
        <ul>
          {notas.map((nota, index) => (
            <li key={index}>{nota}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Promedio:</h2>
        <p>{calcularPromedio()}</p>
      </div>
    </div>
  );
}

export default App;

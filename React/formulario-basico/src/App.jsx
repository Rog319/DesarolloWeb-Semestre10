import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Botones from './components/Botones';
import Cuadrado from './components/Cuadrado';
import Rectangulo from './components/Rectangulo';
import Triangulo from './components/Triangulo';

function App() {
  return (
    <div className='App'>
      <h1>Calculadora de areas</h1>
      <div className='botones'>
        <Cuadrado lado={4} />
        <Rectangulo base={5} altura={8} />
        <Triangulo base={7} altura={5} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';

const Botones = ({ base, altura }) => {
  const [valor, setValor] = useState(0);
  const area = (base, altura) => {
    setValor(base * altura);
  };

  return (
    <div>
      <h2>El area de la figura es: {valor > 0 ? valor : null}</h2>
      <button onClick={() => area(base, altura)}>Calcular Area</button>
    </div>
  );
};

export default Botones;

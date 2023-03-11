import React, { useState } from 'react';

const Cuadrado = ({ lado }) => {
  const [valor, setValor] = useState(0);
  const areaCuadrado = (lado) => {
    setValor(lado * lado);
  };
  return (
    <div>
      <button onClick={() => areaCuadrado(lado)}>
        Calcular area del cuadrado
      </button>
      <h2>Resultado ➡️ {valor > 0 ? valor : null}</h2>
    </div>
  );
};

export default Cuadrado;

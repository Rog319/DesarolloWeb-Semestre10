import React, { useState } from 'react';

const Triangulo = ({ base, altura }) => {
  const [valor, setValor] = useState(0);
  const areaTriangulo = (base, altura) => {
    setValor((base * altura) / 2);
  };
  return (
    <div>
      <button onClick={() => areaTriangulo(base, altura)}>
        Calcular area del triangulo
      </button>
      <h2>Resultado ➡️ {valor > 0 ? valor : null}</h2>
    </div>
  );
};

export default Triangulo;

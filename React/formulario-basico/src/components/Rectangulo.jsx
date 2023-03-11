import React, { useState } from 'react';

const Rectangulo = ({ base, altura }) => {
  const [valor, setValor] = useState(0);
  const areaRectangulo = (base, altura) => {
    setValor(base * altura);
  };
  return (
    <div>
      <button onClick={() => areaRectangulo(base, altura)}>
        Calcular area del rectangulo
      </button>
      <h2>Resultado ➡️{valor > 0 ? valor : null}</h2>
    </div>
  );
};

export default Rectangulo;

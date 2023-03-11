import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Contador = ({ contador }) => {
  const [valor, setValor] = useState(contador);

  const handleAdd = () => {
    setValor(valor + 1);
  };

  const handleMinus = () => {
    setValor(valor - 1);
  };

  const handleReset = () => {
    setValor(contador);
  };

  return (
    <div>
      <h1>Contador</h1>
      <h2>{valor}</h2>
      <button onClick={handleAdd}>Contador +1</button>
      <button onClick={handleMinus}>Contador -1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

Contador.propTypes = {
  contador: PropTypes.number.isRequired,
};

export default Contador;

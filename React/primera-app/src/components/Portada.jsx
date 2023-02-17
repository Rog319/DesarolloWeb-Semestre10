import React from 'react';
import PropTypes from 'prop-types';

const Portada = ({ titulo = 'Desarollo Web 1', fecha = '1900' }) => {
  const nuevoMensaje = {
    mensaje: 'Hola Desarrollo Web 1',
    title: 'Programacion Web',
  };
  return (
    <>
      <h1>{titulo}</h1>
      <h3>{fecha}</h3>
      <h4>{nuevoMensaje.title}</h4>
    </>
  );
};

Portada.propTypes = {
  titulo: PropTypes.string,
  fecha: PropTypes.string,
};

export default Portada;

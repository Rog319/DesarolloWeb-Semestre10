const Formulario = () => {
  return (
    <div className='container'>
      <h1>Formulario</h1>
      <form className='formulario'>
        <div className='campos'>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' id='nombre' placeholder='Tu nombre...' />
        </div>

        <div className='campos'>
          <label htmlFor='apellidos'>Apellidos</label>
          <input type='text' id='apellidos' placeholder='Tus apellidos...' />
        </div>

        <div className='campos'>
          <label htmlFor='email'>Correo Electronico</label>
          <input
            type='email'
            id='email'
            placeholder='Tu correo electronico...'
          />
        </div>

        <div className='campos'>
          <label htmlFor='password'>Contraseña</label>
          <input type='password' id='password' placeholder='Tu contraseña...' />
        </div>

        <input type='submit' />
      </form>
    </div>
  );
};

export default Formulario;

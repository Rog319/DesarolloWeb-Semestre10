import Cabecera from './components/Cabecera';
import Registros from './components/Registros';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className='App'>
      <Cabecera cabecera='Registro de Estudiantes' />
      <div className='contenido'>
        <Formulario className='conetnido--formulario' />
        <Registros />
      </div>
    </div>
  );
}

export default App;

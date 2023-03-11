import Contador from './components/Contador';
import Horario from './components/Horario';
import Portada from './components/Portada';

function App() {
  return (
    <>
      <Portada titulo='Aprendiendo React' fecha='16/02/2023' />
      <Horario />
      <Contador contador={50} />
    </>
  );
}

export default App;

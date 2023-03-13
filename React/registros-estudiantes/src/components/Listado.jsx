import Estudiante from './Estudiante'

const Listado = ({
  listaEstudiantes,
  setEstudiante,
  setListaEstudiantes,
  estudiante
}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 rounded-md p-4 pt-0 bg-[#FF9100] text-white md:overflow-auto'>
      <h1 className='text-center text-xl font-bold mb-12'>
        Listado de Estudiantes
      </h1>

      {listaEstudiantes.map((estudiante, key) => (
        <Estudiante
          key={key}
          estudiante={estudiante}
          setEstudiante={setEstudiante}
          listaEstudiantes={listaEstudiantes}
          setListaEstudiantes={setListaEstudiantes}
        />
      ))}
    </div>
  )
}

export default Listado

const Estudiante = ({
  estudiante,
  setEstudiante,
  setListaEstudiantes
}) => {
  const { nombre, carrera, semestre, promedio } = estudiante

  const handleDelete = () => {
    const estudianteEliminar = estudiante
    setListaEstudiantes((nuevaListaEstudiantes) => {
      return nuevaListaEstudiantes.filter(
        (estudianteAux) => estudianteAux.id !== estudianteEliminar.id
      )
    })
  }

  return (
    <div className='pl-2 py-4 shadow-md rounded-md flex justify-between'>
      <div className=''>
        <p>
          <span className='font-bold mr-2 uppercase'>Nombre:</span> {nombre}
        </p>
        <p>
          <span className='font-bold mr-2 uppercase'>Carrera:</span> {carrera}
        </p>
        <p>
          <span className='font-bold mr-2 uppercase'>Semestre:</span> {semestre}
        </p>
        <p>
          <span className='font-bold mr-2 uppercase'>Promedio:</span>
          {promedio}
        </p>
      </div>
      <div className='mr-3'>
        <button
          className='bg-green-500 p-2 m-1 font-bold'
          onClick={() => {
            setEstudiante(estudiante)
          }}
        >
          Editar
        </button>
        <button className='bg-red-700 p-2 m-1 font-bold' onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Estudiante

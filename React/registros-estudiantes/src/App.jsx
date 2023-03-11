import { useState, useEffect } from 'react'
import Cabecera from './components/Cabecera'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App () {
  const [listaEstudiantes, setListaEstudiantes] = useState([])
  const [estudiante, setEstudiante] = useState({})

  // Si LocalStorage esta vacio
  useEffect(() => {
    const data = localStorage.getItem('estudiantes')
    if (data) {
      setListaEstudiantes(JSON.parse(data))
    }
  }, [])

  // Guardar la informacion en LocalStorage
  useEffect(() => {
    localStorage.setItem('estudiantes', JSON.stringify(listaEstudiantes))
  }, [listaEstudiantes])

  return (
    <div className='container mx-auto'>
      <Cabecera />
      <div className='md:flex gap-4  mt-4'>
        <Formulario
          setListaEstudiantes={setListaEstudiantes}
          listaEstudiantes={listaEstudiantes}
          estudiante={estudiante}
        />
        <Listado
          setListaEstudiantes={setListaEstudiantes}
          listaEstudiantes={listaEstudiantes}
          setEstudiante={setEstudiante}
          estudiante={estudiante}
        />
      </div>
    </div>
  )
}

export default App

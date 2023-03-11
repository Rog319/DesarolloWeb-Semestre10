import { useEffect, useState } from 'react'

const Formulario = ({ setListaEstudiantes, listaEstudiantes, estudiante }) => {
  const [nombre, setNombre] = useState('')
  const [carrera, setCarrera] = useState('')
  const [semestre, setSemestre] = useState('')
  const [promedio, setPromedio] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    llenarCampos(
      estudiante.nombre,
      estudiante.carrera,
      estudiante.semestre,
      estudiante.promedio
    )
  }, [estudiante])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      [
        nombre.trim(),
        carrera.trim(),
        semestre.trim(),
        promedio.trim()
      ].includes('')
    ) {
      setError(true)
      return
    }
    setError(false)
    const estudianteGuardado = {
      nombre,
      carrera,
      semestre,
      promedio
    }
    if (Object.keys(estudiante).length !== 0) {
      listaEstudiantes.forEach((element, index) => {
        if (Object.is(element, estudiante)) {
          setListaEstudiantes((nuevaListaEstudiantes) => {
            return nuevaListaEstudiantes.map((element, i) => {
              return i === index ? (element = estudianteGuardado) : element
            })
          })
          limpiarCampos()
        }
      })
    } else {
      setListaEstudiantes([...listaEstudiantes, estudianteGuardado])
      limpiarCampos()
    }
  }

  const limpiarCampos = () => {
    setNombre('')
    setCarrera('')
    setSemestre('')
    setPromedio('')
  }

  const llenarCampos = (nombre, carrera, semestre, promedio) => {
    setNombre(nombre)
    setCarrera(carrera)
    setSemestre(semestre)
    setPromedio(promedio)
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 bg-[#7B2CBF] rounded-md p-4 pt-0 text-white'>
      <h1 className='text-center text-xl font-bold'>Datos del Estudiante</h1>
      <h2 className='font-bold text-center'>Agrega y Administra</h2>
      <form onSubmit={handleSubmit} className='flex flex-col mt-10 '>
        {error && (
          <div className='bg-red-500 mx-10 mb-2 p-1'>
            <p className='text-white text-center text-lg font-bold'>
              *Te faltan campos por llenar*
            </p>
          </div>
        )}
        <div className=''>
          <label className='mb-2' htmlFor=''>
            Nombre del Estudiante
          </label>
          <input
            placeholder='Nombre del estudiante...'
            type='text'
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value)
            }}
            className='border-2 p-1 w-full rounded-md text-black'
          />
        </div>
        <div className=''>
          <label className='mb-2' htmlFor=''>
            Carrera
          </label>
          <input
            placeholder='Carrera...'
            type='text'
            value={carrera}
            onChange={(e) => {
              setCarrera(e.target.value)
            }}
            className='border-2 p-1 w-full rounded-md text-black'
          />
        </div>
        <div className=''>
          <label className='mb-2' htmlFor=''>
            Semestre
          </label>
          <input
            placeholder='Semestre...'
            type='text'
            value={semestre}
            onChange={(e) => {
              setSemestre(e.target.value)
            }}
            className='border-2 p-1 w-full rounded-md text-black'
          />
        </div>
        <div className=''>
          <label className='mb-2' htmlFor=''>
            Promedio
          </label>
          <input
            placeholder='Promedio...'
            type='text'
            value={promedio}
            onChange={(e) => {
              setPromedio(e.target.value)
            }}
            className='border-2 p-1 w-full rounded-md text-black'
          />
        </div>
        <div>
          <input
            className='bg-[#FF8500] mt-2 uppercase w-full rounded-md p-2 font-bold hover:bg-[#FF6D00] hover:text-white cursor-pointer  '
            type='submit'
            value='Guardar'
          />
        </div>
      </form>
    </div>
  )
}

export default Formulario

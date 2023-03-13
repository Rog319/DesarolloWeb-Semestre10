import './App.css'
import styled from '@emotion/styled'

function App () {
  const Heading = styled.h1`
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  `
  return (
    <div className='App'>
      <Heading>Hola Mundo</Heading>
    </div>
  )
}

export default App

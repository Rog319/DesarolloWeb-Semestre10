import './App.css'
import imgCrypto from './img/crypto.png'
import { Container, Imagen, Heading } from './ComponentsStyled'
import Formulario from './components/Formulario'

function App () {
  return (
    <Container>
      <Imagen src={imgCrypto} alt='Logotipo de Crypto' />
      <div>
        <Heading>Crypto</Heading>
        <Formulario />
      </div>
    </Container>
  )
}

export default App

import './App.css'
import imgCrypto from './img/crypto.png'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'

function App () {
  const Heading = styled.h1`
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`
  const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2em;
    align-items: center;
  }
`

  const Imagen = styled.img`
  max-width: 150px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;

`
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

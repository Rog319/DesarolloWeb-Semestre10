import { useState } from 'react'
import styled from '@emotion/styled'
import useSelectorMonedas from '../hooks/useSelectorMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'
import Precio from './Precio'
import { useFetch } from '../hooks/useFetch'
import { ColorRing } from 'react-loader-spinner'

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`
const Formulario = () => {
  const { cryptos } = useFetch()
  const [error, setError] = useState(false)
  const [cotizacion, setCotizacion] = useState('')
  const [loading, setLoading] = useState(false)
  const [moneda, SelectorMonedas] = useSelectorMonedas(
    'Elige tu moneda',
    monedas
  )

  const [cryptomoneda, SelectorCryptos] = useSelectorMonedas(
    'Elige tu Cryptomoneda',
    cryptos
  )

  const cotizar = async (moneda, crypto) => {
    setLoading(true)
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${moneda}`
    const response = await fetch(url).then(response => response.json()).finally(() => setLoading(false))
    setCotizacion(response[moneda])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([moneda, cryptomoneda].includes('')) {
      setError(true)
      return
    }
    cotizar(moneda, cryptomoneda)
    setError(false)
  }

  return (
    <div>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectorMonedas />
        <SelectorCryptos />
        <InputSubmit type='submit' value='Cotizar' />
      </form>
      {loading
        ? <ColorRing
            visible
            height='80'
            width='80'
            ariaLabel='blocks-loading'
            wrapperStyle={{}}
            wrapperClass='blocks-wrapper'
            colors={['#55a630', '#bfd200', '#dddf00', '#ffff3f', '#007f5f']}
          />
        : cotizacion && <Precio>{`El precio actualmente es de: ${cotizacion} ${moneda}`}</Precio>}
    </div>
  )
}

export default Formulario

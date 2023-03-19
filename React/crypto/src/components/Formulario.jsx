import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectorMonedas from '../hooks/useSelectorMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
background-color: #9497FF;
border: none;
width: 100%;
padding: 10px;
color: #FFFFFF;
font-weight: 700;
font-size: 18px;
border-radius: 5px;
transition: background-color .3s ease;
&:hover { 
    background-color: #7a7dfe;
    cursor: pointer; 
}
`
const Formulario = () => {
  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(false)
  const [moneda, SelectorMonedas] = useSelectorMonedas('Elige tu moneda', monedas)
  const [cryptomoneda, SelectorCryptos] = useSelectorMonedas('Elige tu Cryptomoneda', cryptos)

  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const response = await fetch(url).then(response => response.json())

      const arrCryptos = response.Data.map(crypto => {
        const objCrypto = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName

        }
        return objCrypto
      })
      setCryptos(arrCryptos)
    }
    consultarApi()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(moneda)

    if ([moneda, cryptomoneda].includes('')) {
      console.log('Debes seleccionar un moneda y un cryptomoneda')
      setError(true)
    }
    // setError(false)
  }

  return (
    <div>
      {error && <p>Todos los campos son obligatorios</p>}
      <form onSubmit={handleSubmit}>
        <SelectorMonedas />
        <SelectorCryptos />
        <InputSubmit type='submit' value='Cotizar' />
      </form>
    </div>

  )
}

export default Formulario

import React from 'react'
import styled from '@emotion/styled'
import { useSelectorMonedas } from '../hooks/useSelectorMonedas'
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
  const [SelectorMonedas] = useSelectorMonedas('Elige tu moneda', monedas)

  return (
    <form>
      <SelectorMonedas />
      <InputSubmit type='submit' value='Cotizar' />
    </form>
  )
}

export default Formulario

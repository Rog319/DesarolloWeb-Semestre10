import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
color: white;
display: block;
font-family: 'Poppins', sans-serif;
font-size: 18px;
`
const Select = styled.select`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
`

const useSelectorMonedas = (label, divisas) => {
  const [state, setState] = useState('')
  const SelectorMonedas = () =>
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={e => setState(e.target.value)}>
        <option>Seleccionar una divisa</option>
        {divisas.map(option => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </Select>
    </>

  return [state, SelectorMonedas]
}

export default useSelectorMonedas

import styled from '@emotion/styled'

const Parrafo = styled.p`
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`
const Precio = ({ children }) => {
  return (
    <Parrafo>
      {children}
    </Parrafo>
  )
}

export default Precio

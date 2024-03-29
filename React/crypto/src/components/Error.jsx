import styled from '@emotion/styled'

const Parrafo = styled.p`
  background-color: red;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`

const Error = ({ children }) => {
  return (
    <Parrafo>{children}</Parrafo>
  )
}

export default Error

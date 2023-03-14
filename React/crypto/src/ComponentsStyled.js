import styled from '@emotion/styled'

export const Heading = styled.h1`
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
export const Container = styled.div`
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

export const Imagen = styled.img`
  max-width: 150px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;

`

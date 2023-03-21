import styled from '@emotion/styled'
import { Rings } from 'react-loader-spinner'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Loading = () => {
  return (
    <Container>
      <Rings
        height='80'
        width='80'
        color='#7a7dfe'
        radius='6'
        wrapperStyle={{}}
        wrapperClass=''
        visible
        ariaLabel='rings-loading'
      />
    </Container>
  )
}

export default Loading

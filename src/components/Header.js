import styled from 'styled-components'
import logo from '../images/logo.png'

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: white;
  margin: 24px 0 8px 0;

  img {
    width: 100px;
  }
`

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Planet Bike Logo"/>
    </Container>
  )
}
import styled from 'styled-components'
import logo from '../images/logo.png'

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: white;
  margin: 2.4rem 0 0.8rem 0;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
  }

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
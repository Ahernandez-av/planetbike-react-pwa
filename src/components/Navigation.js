import styled from 'styled-components'
import Button from './NavBtn'
import {Link} from 'react-scroll'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height:6.4rem;
  background-color: #333333;
  display: flex;
  justify-content: center;

  .container {
    max-width: 90rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`

export default function Navigation(props) {
  return (
    <Nav>
      <div className="container">
        <Link to="mounting" spy={true} smooth={true}>
          <Button
            text="Mounting"
            selected={props.mount}
          />
        </Link>
        <Link to="specifications" spy={true} smooth={true}>
          <Button
            text="Functions & Specifications"
            selected={props.specs}
          />
        </Link>
      </div>
    </Nav>
  )
}
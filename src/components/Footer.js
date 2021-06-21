import styled from 'styled-components'

const Segment = styled.footer`
  height: 5.8rem;
  background-color: #333;
  color: #FFF;
  display: flex;
  justify-content: center;

  .container{
    max-width: 90rem;
    display: flex;
    align-items: center;
  }
`

export default function Footer(){
  return (
    <Segment>
      <div className="container">
        <p>Derechos reservados</p>
      </div>
    </Segment>
  )
}
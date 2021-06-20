import styled from 'styled-components'

const Segment = styled.footer`
  height: 5.8rem;
  background-color: #333;
  color: #FFF;
  display: flex;
  justify-content: center;
  margin: 6.4rem 0 12.8rem 0;

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
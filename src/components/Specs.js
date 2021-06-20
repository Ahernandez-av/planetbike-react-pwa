import styled from 'styled-components'

const Segment = styled.div`
  padding-bottom: 3.2rem;
  border-bottom: solid 2px #E0E0E0;
  margin: 4.2rem 0;

  h4{
    margin-bottom: 4.0rem;
  }
`

export default function Spec( {title, text} ) {
  return(
    <Segment>
      <h4>{title}</h4>
      <p>{text}</p>
    </Segment>
  )
}
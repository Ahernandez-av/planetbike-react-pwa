import styled from 'styled-components'

const Btn = styled.button`
  height: 100%;
  padding: 0 2.4rem;
  margin: 0 2.4rem;
  border: 0;
  font-family: "Rajdhani", open sans;
  font-size: 2.4rem;
  background-color: ${props => props.selected ? "#FFDC00" : "#333333"};
  color: ${props => props.selected ? "#111" : "#FFF"};

  @media (max-width: 800px) {
    width: 100%;
    margin: 0 1.2rem;
    padding: 0 1.2rem;
    font-size: 1.8rem;
  }
`

export default function Button(props) {
  
  console.log(props.selected)
  return(
    <>
    {props.selected ? 
      <Btn selected>{props.text}</Btn>
    :
      <Btn>{props.text}</Btn>
    }
    </>
  )
}
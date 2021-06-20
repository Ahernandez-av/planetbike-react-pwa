import styled from 'styled-components'
import { useState } from 'react'

const Btn = styled.button`
  height: 100%;
  padding: 0 2.4rem;
  margin: 0 2.4rem;
  border: 0;
  font-family: "Rajdhani", open sans;
  font-size: 2.4rem;
  background-color: ${props => props.selected ? "#FFDC00" : "#333333"};
  color: ${props => props.selected ? "#111" : "#FFF"};
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
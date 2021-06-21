import styled from 'styled-components'
import Spec from './Specs'

const Segment = styled.div`

  .image{
    margin: 6.4rem 0;

    img{
      width: 100%;
    }
  }
`

export default function SpecsPanel( {image, features} ) {
  return(
    <Segment>
      <div className="image">
        <img src={image} alt="Protege functions & mode layout"/>
      </div>

      {features.map((elm, index) =>
        <Spec
          key= {index}
          title={elm.title}
          text={elm.text}
        />
      )}
    </Segment>
  )
}
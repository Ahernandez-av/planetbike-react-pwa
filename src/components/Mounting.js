import styled from 'styled-components'
import Parts from '../images/parts.png'
import StepImg from '../images/step.png'
import Step from './MountingSteps'

const Segment = styled.div`
  background-color: #FFDC00;
  display: flex;
  justify-content: center;
  padding: 6.4rem 0 12.8rem 0;

  .container {
    max-width: 90rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 4.2rem;
    }
  }
`

export default function Mounting() {

  return (
    <Segment>
      <div className="container">
        <h2>Mounting</h2>
        <img src={Parts} alt="Protege parts overview"/>
        
        <Step
          title= "Title"
          text= "Lorem Ipsum"
          image={StepImg}
        />
        <Step
          title= "Title"
          text= "Lorem Ipsum"
          image={StepImg}
        />
        <Step
          title= "Title"
          text= "Lorem Ipsum"
          image={StepImg}
        />
        <Step
          title= "Title"
          text= "Lorem Ipsum"
          image={StepImg}
        />

      </div>
    </Segment>
  )
}
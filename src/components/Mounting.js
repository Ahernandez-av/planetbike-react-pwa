import styled from 'styled-components'
import Parts from '../images/parts.png'
import Step1 from '../images/step-1.png'
import Step2 from '../images/step-2.png'
import Step3 from '../images/step-3.png'
import Step4 from '../images/step-4.png'
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

    li {
      padding: .8rem;
    }

    ul {
      margin-bottom: 6.4rem;
    }

    img {
      margin-bottom: 6.4rem;
    }

    @media (max-width: 800px) {
      margin: 0;
      padding: 0 2.4rem;
    }

    h2 {
      margin-bottom: 4.2rem;
    }

    h3 {
      margin-bottom: 4.2rem;
    }
  }
`

export default function Mounting() {

  return (
    <Segment>
      <div className="container">
        <h2>Mounting</h2>
        <h3>Parts List</h3>
        <img src={Parts} alt="Protege parts overview"/>

        <ul>
          <li><span>A.</span> Wheel Sensor</li>
          <li><span>B.</span> Mounting Nracket</li>
          <li><span>C.</span> Quick Ties</li>
          <li><span>D.</span> Wheel Magnet</li>
          <li><span>E.</span> Computer Case</li>
          <li><span>F.</span>Rubber Shims - 1mm & 2mm</li>
        </ul>
        
        <h3>Mounting Instructions</h3>

        <Step
          title= "Step 1"
          text= "Attach the wheel sensor(A) to the right or left fork using two quick ties(C)"
          image={Step1}
        />
        <Step
          title= "Step 2"
          text= "Attach magnet to spoke using screwdriver so magnet lines up directly across from one of the flat round dots"
          image={Step2}
        />
        <Step
          title= "Step 3"
          text= "Attach the computer bracket to the handlebars near the steam, tigthen the screw for security"
          image={Step3}
        />
        <Step
          title= "Step 4"
          text= "Rotate front wheel to test for the proper function of magnet/wheel sensor aligment"
          image={Step4}
        />

      </div>
    </Segment>
  )
}
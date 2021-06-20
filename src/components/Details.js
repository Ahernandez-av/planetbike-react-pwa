import styled from 'styled-components'
import Protege from '../images/pretege-logo.svg'
import ProductImage from '../images/product-image.png'

const Segment = styled.div`
  display: flex;
  justify-content: center;
  margin: 6.4rem 0 12.8rem 0;

  .container {
    max-width: 90rem;
    display: flex;

    .description {
      width: 50%;
      display:flex;
      flex-direction: column;
      
      img {
        width: 35rem;
      }
      
      .intro {
        text-align: left;
        margin-top: 4.2rem;
      }

      .pledge {
        background-color: #FFDC00;
        text-align: left;
        padding: 1.2rem;
        width: 42.6rem;
        margin-top: 4.2rem;

        h4 {
          margin-bottom: 1.2rem;
        }
      }
     }

    .product {
      width: 50%;
      margin-top: 6.4rem;

    }
  }

`

export default function Details() {
  return (
    <Segment>
      <div className="container">

        <div className="description">
          <img src={Protege} alt="Protegé 9.0 & 8.0 Instructions"/>
          <p className="intro">
          The protegé represents a breakthrought in bicycle Computer design and function. The <strong>MacroMonitor™</strong> LCD display.
          </p>
          <div className="pledge">
            <h4>Our Pledge!</h4>
            <p>Planet Bike wil donate 25% of our profits from this purchases and any other Planet Bike product you buy, to non-profit bicycle advocacy groups to further benefit your cycling experience.</p>
          </div>
        </div>

        <div className="product">
          <img src={ProductImage} alt="Protegé product"/>
        </div>

      </div>
    </Segment>
  )
}
import styled from 'styled-components'
import Protege from '../images/pretege-logo.svg'
import ProductImage from '../images/product-image.png'

const Segment = styled.div`
  display: flex;
  justify-content: center;
  margin: 6.4rem 0 6.4rem 0;
  width: 100%;

  @media (max-width: 800px) {
    margin: 0;
    margin: 3.2rem 0;
    padding: 0 2.4rem;
  }

  .details {
    max-width: 90rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
      width: 100%;
      flex-direction: column;
      margin: 0 4.2rem;
    }

    .details-container {
      width: 100%;
      display: flex;
      align-items: center;

      @media (max-width: 800px) {
          flex-direction: column;
        }

      .left{
        width: 50%;

        @media (max-width: 800px) {
          width: 100%;
        }

        .image-container {

          @media (max-width: 800px) {
            display: flex;
            justify-content: center;
          }

          img {
            max-width: 35rem;
            widht:100%;

            @media (max-width: 800px) {
              width: 60%;
            }
          }
        }

        .intro {
          text-align: left;
          margin-top: 4.2rem;

          @media (max-width: 800px) {
            text-align: center;
          }
        }
      }
      
      .right{
        width: 50%;

        @media (max-width: 800px) {
          width: 100%;
          display:flex;
          justify-content: center;
          margin-top: 3.2rem;
        }

        img {
          width: 100%;
        }
      }
    }

    .pledge-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 2.4rem;

      .pledge {
        background-color: #FFDC00;
        text-align: left;
        padding: 1.2rem;
        width: 42.6rem;
        margin-top: 4.2rem;

        @media (max-width: 800px) {
          padding-left: 2.4rem;
          padding-right: 2.4rem;
        }

        h4 {
          margin-bottom: 1.2rem;
        }
      }
    }
  }

`

export default function Details() {
  return (
    <Segment>
      <div className="details">

        <div className="details-container">   

          <div className="left">
            <div className= "image-container">
              <img src={Protege} alt="Protegé 9.0 & 8.0 Instructions"/>
            </div>
            <p className="intro">
            The protegé represents a breakthrought in bicycle Computer design and function. The <strong>MacroMonitor™</strong> LCD display.
            </p>
          </div>

          <div className="right">
            <img src={ProductImage} alt="Protegé product"/>
          </div>
        </div>

        <div className="pledge-container">
        
          <div className="pledge">
            <h4>Our Pledge!</h4>
            <p>Planet Bike wil donate 25% of our profits from this purchases and any other Planet Bike product you buy, to non-profit bicycle advocacy groups to further benefit your cycling experience.</p>
          </div>
        </div>

      </div>
    </Segment>
  )
}
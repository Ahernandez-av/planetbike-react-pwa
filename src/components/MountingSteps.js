import styled from 'styled-components'

const Fragment = styled.div`
  display: flex;
  width: 100%;
  margin: 4.2rem 0;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 2.4rem 0;
  }
  
  .text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      margin-top: 2.4rem;

      @media (max-width: 800px) {
        margin: 2.4rem 0;
      }
    }
  }

  .image {
    width: 50%;

    @media (max-width: 800px) {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
`

export default function Step( {title, text, image, isReverse} ) {
  return (
    <Fragment>
      <div className='text'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className='image'>
        <img src={image} alt="step illustration"/>
      </div>
    </Fragment>
  )
}
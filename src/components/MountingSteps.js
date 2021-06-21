import styled from 'styled-components'

const Fragment = styled.div`
  display: flex;
  width: 100%;
  margin: 1.8rem 0;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 2.4rem 0;
  }
  
  .text {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      margin-bottom: 1.8rem;
    }

    p {
      margin-bottom: 2.4rem;
    }
  }

  .image {
    width: 70%;
    padding: 0 2.4rem;

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
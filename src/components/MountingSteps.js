import styled from 'styled-components'

const Fragment = styled.div`
  display: flex;
  width: 100%;
  margin: 4.2rem 0;

  .text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      margin-top: 2.4rem;
    }
  }

  .image {
    width: 50%;

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
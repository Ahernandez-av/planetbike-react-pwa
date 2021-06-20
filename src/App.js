import { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import Header from './components/Header'
import Details from './components/Details'
import Navigation from './components/Navigation'
import Specifications from './components/Specifications'
import Mounting from './components/Mounting'
import Footer from './components/Footer'

function App() {

  const mountRef = useRef(null);
  const specsRef = useRef(null);
  const scrollY = useScrollPosition(60);

  const [scroll, setScroll] = useState(0);
  const [mountY, setMountY] = useState(1);
  const [specsY, setSpecsY] = useState(1);
  const [mountStatus, setMountStatus] = useState(false);
  const [specsStatus, setSpecsStatus] = useState(false);

  useLayoutEffect(() => {
    setMountY(mountRef.current.getBoundingClientRect().y)
    setSpecsY(specsRef.current.getBoundingClientRect().y)

  }, [])

  const handleCheckScroll = useCallback(() => {
    console.log(`${mountY} mount y`)

    if(scroll >= mountY && scroll < specsY){
      setMountStatus(true)
      setSpecsStatus(false)
    } else if(scroll >= specsY) {
      setMountStatus(false)
      setSpecsStatus(true)
    }else {
      setMountStatus(false)
      setSpecsStatus(false)
    }
  }, [mountY, specsY, scroll]);

  useEffect(() => {
    setScroll(scrollY)
    handleCheckScroll(scroll)

  }, [scroll, scrollY, handleCheckScroll])

  return (
    <div>
      <Header/>

      <Details/>

      <Navigation
        mount={mountStatus}
        specs={specsStatus}
      />

      <div id='mounting' ref={mountRef}>
        <Mounting/>
      </div>
      
      <div id='specifications' ref={specsRef} >
        <Specifications/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

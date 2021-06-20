import { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import logo from './logo.svg';
import Header from './components/Header'
import Details from './components/Details'
import Navigation from './components/Navigation'
import './App.css';

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
    <div className="App">
      <Header/>

      <Details/>

      <Navigation
        mount={mountStatus}
        specs={specsStatus}
      />

      <div id='mounting' ref={mountRef} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div id='specifications' ref={specsRef} style={{height: "1500px", width: "100%"}}>
        Hello
      </div>
    </div>
  );
}

export default App;

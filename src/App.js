import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Details from './components/Details'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Details/>
      <div className="App-header">
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
    </div>
  );
}

export default App;
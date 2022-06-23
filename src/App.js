import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import { UglyProvider } from './UglyContext';
import React from 'react';

function App() {

  return (
    <UglyProvider>
      <div className="app">
          <div className='nav'>
            <Nav />
          </div>
          <Body />
      </div>
    </UglyProvider>
  );
}

export default App;

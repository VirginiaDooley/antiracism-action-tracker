import React from 'react';
import logo from './nova.png';
import './App.css';
import LevelOne from './LevelOne.js';

function App() {

  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>

      <LevelOne/>
    </div>
  );
}

export default App;

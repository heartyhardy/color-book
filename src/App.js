import React from 'react';
import './App.css';

import Aux from './components/hoc/auxilary';
import Colors from './components/colors/colors';

function App() {
  return (
    <Aux
      className="App"
    >

      <header className="App-header">

        <div
          className="App-title"
        >
          <span
            className="App-icon"
            role="img"
            aria-label="color palette"
          >
            <i className="fas fa-palette"></i>
          </span>

          <h1
            className="App-heading"
          >
            COLOR BOOK
          </h1>
        </div>

        <div
          className="App-subtitle"
        >
          <p>
            Color book lets you save your favourite colors into a universal color library!
          </p>

        </div>

        <div
          className="App-scroll-hint"
        >
          <i className="fas fa-angle-double-down"></i>
        </div>

      </header>

      <Colors />

    </Aux>
  );
}

export default App;

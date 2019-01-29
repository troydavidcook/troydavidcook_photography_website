import React, { Component } from 'react';
import './App.css';
import Tiles from './Components/Tiles/Tiles'
import Links from './Components/Social Links/links';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Tiles />
        <Links />
        </header>
      </div>
    );
  }
}

export default App;

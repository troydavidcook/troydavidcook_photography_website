import React, { Component } from 'react';
import './App.css';
import Tiles from './Components/Tiles/Tiles'
import Links from './Components/Social Links/links';








class App extends Component {
 
  state = {
      // images
          landingPageImages: 
            [ 
          "https://i.imgur.com/kHmkftz.jpg",
          "https://i.imgur.com/WrpUgBY.jpg",
          "https://i.imgur.com/p26Pcs8.jpg",
          "https://i.imgur.com/TsCOafo.jpg",
          "https://i.imgur.com/tbrve0j.jpg",
          "https://i.imgur.com/EeUL98S.jpg",
          "https://i.imgur.com/co0Wj8n.jpg"
        
        ],
      
      sedonaShot: "https://i.imgur.com/BMWDOka.jpg",
      // end of images
      
      
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Tiles 
           sedona={ this.state.sedonaShot }/>
        <Links />
        </header>
      </div>
    );
  }
}

export default App;

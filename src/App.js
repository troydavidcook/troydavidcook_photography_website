import React, { Component } from 'react';
import './App.css';
import './Images.css'
import Navbar from './Components/Navbar/navbar';
import Banner from './Components/Banner/banner';
import Links from './Components/Social_Links/links';
import ImageTiles from'./Components/LandingPageTiles/landingPageTiles';


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

    //end of STATE
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <Navbar /> */}
          <Links />
          <ImageTiles
            tiles={this.state.landingPageImages} />
          <Banner
            sedona={this.state.sedonaShot} />
        </header>
      </div>
    )
  }
}

  export default App;

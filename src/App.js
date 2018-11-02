import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import locations from './data/locations.json';
import TransylvaniaMap from './components/TransylvaniaMap';



class App extends Component {
    state = {
        lat: 47.239043,
        lng:  25.590897,
        zoom: 14,
        all: locations
    }
    
    
  render = () => {
    return (
      <div className="App">
        
          <div>
        <h1>Transylvania's Fortified Churches</h1>
        </div>
          <TransylvaniaMap
        lat={this.state.lat}
        lng={this.state.lng}
        zoom={this.state.zoom}
        locations={this.state.all}/>
        </div>
    );
  }
}


export default App;

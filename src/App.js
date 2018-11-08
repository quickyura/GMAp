import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GMap from './Components/GMap/GMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GMap/>

      </div>
    );
  }
}

export default App;

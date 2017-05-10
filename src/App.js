import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherDisplay from './WeatherDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherDisplay zip={'12345'} />
      </div>
    );
  }
}

export default App;

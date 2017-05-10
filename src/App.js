import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherDisplay from './WeatherDisplay';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		activePlace : 0,
  	}
  }


  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
      <button
        key={index}
        onClick={() => {
          // console.log(`Clicked index ${index}`);
          this.setState({
          	activePlace : index
          })
        }}
      >
          {place.name}
      </button>
    ))}
        <WeatherDisplay
         key = {activePlace} 
	zip = {PLACES[activePlace].zip}
         />

      </div>
    );
  }
}

export default App;

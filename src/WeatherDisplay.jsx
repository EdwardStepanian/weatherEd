import React, {Component} from 'react';

class WeatherDisplay extends Component{
	render(){
		return(
				<h1> Displaying Weather for city { this.props.zip } !</h1>
			)
	}
}


export default WeatherDisplay;
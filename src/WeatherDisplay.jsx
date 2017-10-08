import React, {Component} from 'react';

class WeatherDisplay extends Component {
	constructor() {
		super();
		this.state = {
			weatherData: null
		};
	}
	componentDidMount() {
		const zip = this.props.zip;
		const place = this.props.place;
		console.log(this.props)
		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`;
		fetch(URL).then(res => res.json()).then(json => {
			this.setState({ weatherData: json });
		});
	}
	render() {
		const weatherData = this.state.weatherData;
		if (!weatherData) return <div>Loading...</div>;
		const weather = weatherData.weather[0];
		const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
		let weatherTempCelsius = (weatherData.main.temp - 32)*5/9;
		let weatherSpeed =weatherData.wind.speed*0.44704;
		return (
			<div>
				<h1>
					{weather.main} in {weatherData.name}
					<img src={iconUrl} alt={weatherData.description} />
				</h1>
				<p>Current: {weatherTempCelsius.toFixed(1)}°</p>
				<p>Wind Speed: {weatherSpeed.toFixed(1)} m/sec</p>
				<p>Humidity: {weatherData.main.humidity}%</p>
				<footerGrid />
			</div>
		);
	}
}


export default WeatherDisplay;

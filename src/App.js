import './App.css';
import React, { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput';
import CurrentDay from './components/CurrentDay';
import { currentHour } from './utils/helperFuncs';

function App() {
	const [location, setLocation] = useState('');
	const [currentWeather, setCurrentWeather] = useState({
		name: '',
		region: '',
		temp: '',
		low: '',
		high: '',
		humidity: '',
		feelsLike: '',
		condition: '',
		windSpeed: '',
		windDirection: '',
		windChill: '',
		sunrise: '',
		sunset: '',
	});
	useEffect(() => {
		console.log('fetched triggered');
		const locationData = {
			userLocation: location,
		};
		fetch('/getData', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(locationData),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					console.log('data recieved');
					console.log(data);
					const currentHrIdx = currentHour();
					setCurrentWeather({
						name: data.location.name,
						region: data.location.region,
						temp: data.current.temp_f,
						low: data.forecast.forecastday[0].day.mintemp_f,
						high: data.forecast.forecastday[0].day.maxtemp_f,
						humidity: data.current.humidity,
						rainChance:
							data.forecast.forecastday[0].day
								.daily_chance_of_rain,
						feelsLike: data.current.feelslike_f,
						condition: data.current.condition.text,
						windSpeed: data.current.wind_mph,
						windDirection:
							data.forecast.forecastday[0].hour[currentHrIdx]
								.wind_dir,
						windChill:
							data.forecast.forecastday[0].hour[currentHrIdx]
								.windchill_f,
						sunrise: data.forecast.forecastday[0].astro.sunrise,
						sunset: data.forecast.forecastday[0].astro.sunset,
					});
				} else {
					console.log(data.info);
				}
			})
			.catch((err) => {
				console.log('Fetch error: ' + err);
			});
	}, [location]);
	return (
		<>
			<SearchInput setUserLocation={setLocation} />

			<CurrentDay currentData={currentWeather} />
		</>
	);
}

export default App;

import './App.css';
import React, { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput';
import CurrentSection from './components/currentForecast/CurrentSection';
import HourlySection from './components/hourly/HourlySection';
import ExtenedSection from './components/extendedForecast/ExtendedSection';

function App() {
	const [location, setLocation] = useState('');
	const [forecastData, setForecastData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (location === '' || location === undefined) {
			return;
		}
		setIsLoading(true);
		console.log('fetched triggered');
		const locationData = {
			userLocation: location,
		};
		fetch('https://glacial-garden-65748.herokuapp.com/getData', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(locationData),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					setForecastData(data);
					setIsLoading(false);
					// console.log(forecastData);
				} else if (data.error) {
					console.log(data.error);
				}
			})
			.catch((err) => {
				console.log('Fetch error: ' + err);
			});
	}, [location]);
	return (
		<div className='app-wrapper'>
			<h1>Weather Search</h1>

			<SearchInput setUserLocation={setLocation} />

			{!isLoading && (
				<>
					<CurrentSection forecast={forecastData} />
					<HourlySection
						dailyForecast={forecastData.forecast.forecastday[0]}
					/>
					<ExtenedSection
						extendedForecast={forecastData.forecast.forecastday}
					/>
				</>
			)}
			<p>
				Powered by{' '}
				<a href='https://www.weatherapi.com/' title='Free Weather API'>
					WeatherAPI.com
				</a>
			</p>
		</div>
	);
}

export default App;

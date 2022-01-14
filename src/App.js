import './App.css';
import React, { useEffect, useState } from 'react';
import Spinner from './components/icons/Spinner';
import LandingPage from './components/LandingPage';
import { ForecastPage } from './components/forcastPage/ForecastPage';

function App() {
	const [location, setLocation] = useState('');
	const [forecastData, setForecastData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [searchSubmitted, setSearchSubmitted] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		if (location === '' || location === undefined) {
			return;
		}
		setError('');
		setIsLoading(true);
		setSearchSubmitted(true);
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
				if (data.msg) {
					setSearchSubmitted(false);
					setIsLoading(false);
					setError(data.msg);
				} else if (data.location) {
					setForecastData(data);
					setIsLoading(false);
				}
			})
			.catch((err) => {
				setSearchSubmitted(false);
				setIsLoading(false);
				setError('500 - Internal server error');
				console.log('Fetch error: ' + err);
			});
	}, [location]);

	useEffect(() => {
		const calcViewportUnits = () => {
			let vh = window.innerHeight;
			if (vh < 600) {
				vh = 600;
				document.documentElement.style.setProperty('--vh', vh + 'px');
			} else {
				vh = vh * 0.01;
				document.documentElement.style.setProperty('--vh', vh + 'px');
			}
		};
		calcViewportUnits();
		window.addEventListener('resize', calcViewportUnits);
	}, []);

	return (
		<div id='app-wrapper'>
			{!searchSubmitted ? (
				<LandingPage setUserLocation={setLocation} errors={error} />
			) : isLoading ? (
				<Spinner />
			) : (
				<ForecastPage
					setUserLocation={setLocation}
					errors={error}
					forecast={forecastData}
					dailyForecast={forecastData.forecast.forecastday[0]}
					tmrForecast={forecastData.forecast.forecastday[1]}
					extendedForecast={forecastData.forecast.forecastday}
				/>
			)}
		</div>
	);
}

export default App;

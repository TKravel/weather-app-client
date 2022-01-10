import './App.css';
import React, { useEffect, useState } from 'react';
import CurrentSection from './components/currentForecast/CurrentSection';
import HourlySection from './components/hourly/HourlySection';
import ExtenedSection from './components/extendedForecast/ExtendedSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/icons/Spinner';

function App() {
	const [location, setLocation] = useState('');
	const [forecastData, setForecastData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [searchSubmitted, setSearchSubmitted] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const savedLocation = localStorage.getItem('search');

		if (!savedLocation) {
			return;
		} else {
			setLocation(savedLocation);
		}
	}, []);

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
				if (data.location) {
					setForecastData(data);
					setIsLoading(false);
				} else if (data.msg) {
					setError(data.msg);
				}
			})
			.catch((err) => {
				setSearchSubmitted(false);
				setIsLoading(false);
				setError('500 - Internal server error');
				console.log('Fetch error: ' + err);
			});
	}, [location]);

	return (
		<div id='app-wrapper'>
			<Navbar setUserLocation={setLocation} errors={error} />

			{!searchSubmitted ? null : isLoading ? (
				<Spinner />
			) : (
				<>
					<CurrentSection forecast={forecastData} />
					<HourlySection
						dailyForecast={forecastData.forecast.forecastday[0]}
						tmrForecast={forecastData.forecast.forecastday[1]}
					/>
					<ExtenedSection
						extendedForecast={forecastData.forecast.forecastday}
					/>
				</>
			)}

			<Footer />
		</div>
	);
}

export default App;

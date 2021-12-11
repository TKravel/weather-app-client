import './App.css';
import React, { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput';
import CurrentDay from './components/CurrentDay';

function App() {
	const [location, setLocation] = useState('');
	const [currentWeather, setCurrentWeather] = useState('');
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

			<CurrentDay />
		</>
	);
}

export default App;

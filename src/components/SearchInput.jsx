import React, { useState } from 'react';
import GpsIcon from './GpsIcon';

const SearchInput = ({ setUserLocation }) => {
	const [userInput, setUserInput] = useState('');
	const [postion, setPosition] = useState('');

	const parseGeo = (longLat) => {
		console.log(longLat);
		console.log(longLat.coords.latitude);
		const lat = longLat.coords.latitude;
		const long = longLat.coords.longitude;

		const result = lat + ',' + long;
		console.log(result);
		setUserLocation(result);
		return result;
	};

	const handleChange = (e) => {
		setUserInput((prevValue) => {
			return e.target.value;
		});
		console.log(userInput);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setUserLocation(userInput);
		console.log('Form submitted: ' + userInput);
	};

	const handleClick = (e) => {
		console.log('clickeed');

		if (navigator.geolocation) {
			console.log('setPos');
			setPosition(() => {
				return navigator.geolocation.getCurrentPosition(parseGeo);
			});
			console.log('setLoc');
			setUserLocation(() => {
				return navigator.geolocation.getCurrentPosition(parseGeo);
			});
		} else {
			setPosition('Geolocation is not supported by this browser.');
		}
		console.log(postion);
	};
	return (
		<>
			<h2>Search using the following:</h2>
			<ul>
				<li>City Name</li>
				<li>US zip code</li>
				<li>UK postcode</li>
				<li>Canada postal code</li>
			</ul>
			<p>Or use find your location with the location button.</p>
			<div className='search-container'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						name='location'
						placeholder='E.g. Philadelphia or 90210'
						value={userInput}
						onChange={handleChange}
					/>
					<button type='submit'>Search</button>
				</form>
				<div onClick={handleClick} className='gps-btn'>
					<GpsIcon />
				</div>
			</div>
		</>
	);
};

export default SearchInput;

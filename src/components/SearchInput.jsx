import React, { useState } from 'react';
import GpsIcon from './GpsIcon';

const SearchInput = ({ setUserLocation, errors, writeError }) => {
	const [userInput, setUserInput] = useState('');
	const [postion, setPosition] = useState('');

	const saveUserLocationLocally = (string) => {
		const checkbox = document.getElementById('saveSearch');
		if (checkbox.checked) {
			localStorage.setItem('search', string);
		} else {
			return;
		}
	};

	// useEffect(() => {
	// 	if (navigator.geolocation) {
	// 		console.log('has geo');
	// 	} else {
	// 		console.log('Doesnt have geo');
	// 	}
	// }, []);

	const parseGeo = (longLat) => {
		const lat = longLat.coords.latitude;
		const long = longLat.coords.longitude;

		const result = lat + ',' + long;
		console.log(result);
		setPosition(result);
		setUserInput(lat + ', ' + long);
		setUserLocation(result);
		saveUserLocationLocally(lat + ', ' + long);
		return result;
	};

	const geoError = () => {
		console.log('error');
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
		saveUserLocationLocally(userInput);
		console.log('Form submitted: ' + userInput);
	};

	const handleClick = (e) => {
		console.log('clickeed');

		const options = {
			enableHighAccuracy: true,
		};

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				parseGeo,
				geoError,
				options
			);
		} else {
			writeError('Geolocation is not supported by this browser.');
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

			<form onSubmit={handleSubmit} className='search-container'>
				<input
					type='text'
					name='location'
					placeholder='E.g. Philadelphia or 90210'
					value={userInput}
					onChange={handleChange}
				/>
				<button type='submit'>Search</button>
				<button
					onClick={handleClick}
					className='gps-btn'
					aria-label='Find current location'
				>
					<GpsIcon />
				</button>
				<div className='form-checkbox'>
					<input type='checkbox' id='saveSearch' />
					<label htmlFor='saveSearch'>Remember location</label>
				</div>
				<p className='error-msg'>{errors && `Error: ${errors}!`}</p>
			</form>
		</>
	);
};

export default SearchInput;

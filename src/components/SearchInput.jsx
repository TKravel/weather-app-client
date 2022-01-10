import React, { useState } from 'react';
import SearchIcon from './icons/SearchIcon';
import GpsIcon from './icons/GpsIcon';

const SearchInput = ({ setUserLocation, errors, writeError }) => {
	const [userInput, setUserInput] = useState('');

	const saveUserLocationLocally = (string) => {
		const checkbox = document.getElementById('saveSearch');
		if (checkbox.checked) {
			localStorage.setItem('search', string);
		} else {
			return;
		}
	};

	const parseGeo = (longLat) => {
		const lat = longLat.coords.latitude;
		const long = longLat.coords.longitude;

		const result = lat + ',' + long;
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
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setUserLocation(userInput);
		saveUserLocationLocally(userInput);
	};

	const handleClick = () => {
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
	};

	return (
		<form onSubmit={handleSubmit} id='search-container'>
			<input
				className='search-input'
				type='text'
				name='location'
				placeholder='E.g. Philadelphia or 90210'
				value={userInput}
				onChange={handleChange}
			/>
			<button
				type='submit'
				className='search-btn'
				aria-label='Submit search'
			>
				<SearchIcon />
			</button>
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
	);
};

export default SearchInput;

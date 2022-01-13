import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from './icons/SearchIcon';
import GpsIcon from './icons/GpsIcon';

// Autocomplete code from Gapur Kassym found on medium
// Dynamicly injects script tag, connects to API sets feilds, handles autocomplete

let autoComplete;

const loadScript = (url, callback) => {
	let scriptLoaded = document.querySelector(`script[src="${url}"]`);
	if (scriptLoaded) {
		return;
	}
	let script = document.createElement('script');
	script.type = 'text/javascript';

	if (script.readyState) {
		script.onreadystatechange = function () {
			if (
				script.readyState === 'loaded' ||
				script.readyState === 'complete'
			) {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		script.onload = () => callback();
	}

	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
	autoComplete = new window.google.maps.places.Autocomplete(
		autoCompleteRef.current,
		{ types: ['(cities)'] }
	);
	autoComplete.setFields(['formatted_address']);
	autoComplete.addListener('place_changed', () =>
		handlePlaceSelect(updateQuery)
	);
}

async function handlePlaceSelect(updateQuery) {
	const addressObject = autoComplete.getPlace();
	const query = addressObject.formatted_address;
	updateQuery(query);
	console.log(addressObject);
}

const SearchInput = ({ setUserLocation, errors, writeError }) => {
	const [query, setQuery] = useState('');
	const autoCompleteRef = useRef(null);

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
		setQuery(lat + ', ' + long);
		setUserLocation(result);
		saveUserLocationLocally(lat + ', ' + long);
		return result;
	};

	const geoError = () => {
		console.log('error');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setUserLocation(query);
		saveUserLocationLocally(query);
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

	useEffect(() => {
		loadScript(
			`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_AUTOCOMPLETE}&libraries=places`,
			() => handleScriptLoad(setQuery, autoCompleteRef)
		);
	}, []);

	return (
		<form onSubmit={handleSubmit} id='search-container'>
			<input
				className='search-input'
				type='text'
				name='location'
				// placeholder='Enter location'
				// value={userInput}
				// onChange={handleChange}
				ref={autoCompleteRef}
				onChange={(event) => setQuery(event.target.value)}
				placeholder='Enter a City'
				value={query}
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

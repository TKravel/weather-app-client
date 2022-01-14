import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from './icons/SearchIcon';
import GpsIcon from './icons/GpsIcon';

const SearchInput = ({ setUserLocation, errors }) => {
	const [query, setQuery] = useState('');
	const [scriptLoaded, setScriptLoaded] = useState(false);
	const autoCompleteRef = useRef(null);
	let autoComplete;

	const parseGeo = (longLat) => {
		const lat = longLat.coords.latitude;
		const long = longLat.coords.longitude;

		const result = lat + ',' + long;
		setQuery(lat + ', ' + long);
		setQuery(result);
		setUserLocation(result);
		return result;
	};

	const geoError = () => {
		console.log('error');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setUserLocation(query);
	};

	const handleClick = (e) => {
		const options = {
			enableHighAccuracy: true,
		};

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				parseGeo,
				geoError,
				options
			);
		}
		e.preventDefault();
	};

	const handleScriptLoad = () => {
		if (!window.google) {
			return;
		}
		autoComplete = new window.google.maps.places.Autocomplete(
			autoCompleteRef.current,
			{ types: ['(regions)'] }
		);
		autoComplete.setFields(['formatted_address']);
		autoComplete.addListener('place_changed', () =>
			handlePlaceSelect(setQuery)
		);
	};

	async function handlePlaceSelect() {
		const addressObject = autoComplete.getPlace();
		const query = addressObject.formatted_address;
		setQuery(query);
		console.log(addressObject);
	}

	useEffect(() => {
		if (!scriptLoaded) {
			const googleScript = document.createElement('script');
			googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_AUTO_KEY}&libraries=places`;
			window.document.body.appendChild(googleScript);

			googleScript.addEventListener('load', setScriptLoaded(true));
		} else if (scriptLoaded) {
			handleScriptLoad(setQuery, autoCompleteRef);
		}
	}, [scriptLoaded, []]);

	return (
		<form onSubmit={handleSubmit} id='search-container'>
			<input
				className='search-input'
				type='text'
				name='location'
				ref={autoCompleteRef}
				onChange={(event) => setQuery(event.target.value)}
				placeholder='Enter a location'
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
			<p className='error-msg'>
				<strong>{errors && `Error: ${errors}!`}</strong>
			</p>
		</form>
	);
};

export default SearchInput;

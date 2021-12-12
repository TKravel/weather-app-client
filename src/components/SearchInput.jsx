import React, { useState } from 'react';

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
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='location'
					placeholder='Zip code or town'
					value={userInput}
					onChange={handleChange}
				/>
				<button type='submit'>Search</button>
			</form>
			<button onClick={handleClick}>GPS</button>
		</>
	);
};

export default SearchInput;

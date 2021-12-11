import React, { useState } from 'react';

const SearchInput = ({ setUserLocation }) => {
	const [userInput, setUserInput] = useState('');
	const [postion, setPosition] = useState('');

	const parseGeo = (longLat) => {
		console.log(longLat);
		console.log(longLat.coords.latitude);
		return longLat.coords.latitude + ',' + longLat.coords.longitude;
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

	const handleClick = () => {
		if (navigator.geolocation) {
			setPosition(() => {
				return navigator.geolocation.getCurrentPosition(parseGeo);
			});
		} else {
			setPosition('Geolocation is not supported by this browser.');
		}
		console.log(postion);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='location'
				placeholder='Zip code or town'
				value={userInput}
				onChange={handleChange}
			/>
			<button type='submit'>Search</button>
			<button onClick={handleClick}>GPS</button>
		</form>
	);
};

export default SearchInput;

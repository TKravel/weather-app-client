import React from 'react';
import CurrentCard from './CurrentCard';

const CurrentSection = ({ forecast }) => {
	return (
		<div id='current-container'>
			<CurrentCard forecast={forecast} />
			<p className='weatherApi-credit'>
				Powered by{' '}
				<a href='https://www.weatherapi.com/' title='Free Weather API'>
					WeatherAPI.com
				</a>
			</p>
		</div>
	);
};

export default CurrentSection;

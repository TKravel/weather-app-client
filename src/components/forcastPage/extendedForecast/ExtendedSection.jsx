import React from 'react';
import ExtendedCard from './ExtendedCard';

const ExtenedSection = ({ extendedForecast }) => {
	return (
		<div id='extended-container'>
			{extendedForecast.map((day, index) => {
				return <ExtendedCard key={index} cardData={day} />;
			})}
			<p className='weatherApi-credit'>
				Powered by{' '}
				<a href='https://www.weatherapi.com/' title='Free Weather API'>
					WeatherAPI.com
				</a>
			</p>
		</div>
	);
};
export default ExtenedSection;

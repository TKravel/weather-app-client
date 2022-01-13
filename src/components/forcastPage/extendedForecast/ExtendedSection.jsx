import React from 'react';
import ExtendedCard from './ExtendedCard';

const ExtenedSection = ({ extendedForecast }) => {
	return (
		<div id='extended-container'>
			{extendedForecast.map((day, index) => {
				return <ExtendedCard key={index} cardData={day} />;
			})}
		</div>
	);
};
export default ExtenedSection;

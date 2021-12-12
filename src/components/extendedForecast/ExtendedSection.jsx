import React from 'react';
import ExtendedCard from './ExtendedCard';

const ExtenedSection = ({ extendedForecast }) => {
	return (
		<div>
			<h2>Extended section</h2>
			{extendedForecast.map((day, index) => {
				return <ExtendedCard key={index} cardData={day} />;
			})}
		</div>
	);
};
export default ExtenedSection;

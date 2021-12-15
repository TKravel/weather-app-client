import React from 'react';
import ExtendedCard from './ExtendedCard';

const ExtenedSection = ({ extendedForecast }) => {
	return (
		<div id='3day' className='section-wrapper'>
			<h2>Extended forecast</h2>
			<div className='extended-container'>
				{extendedForecast.map((day, index) => {
					return <ExtendedCard key={index} cardData={day} />;
				})}
			</div>
		</div>
	);
};
export default ExtenedSection;

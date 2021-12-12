import React from 'react';
import CurrentCard from './currentForecast/CurrentCard';

const CurrentDay = ({ forecast }) => {
	return (
		<div className='section-wrapper'>
			<CurrentCard forecast={forecast} />
		</div>
	);
};

export default CurrentDay;

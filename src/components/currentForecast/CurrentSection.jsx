import React from 'react';
import CurrentCard from './CurrentCard';

const CurrentSection = ({ forecast }) => {
	return (
		<div id='current' className='section-wrapper'>
			<h2>Today's forecast</h2>
			<CurrentCard forecast={forecast} />
		</div>
	);
};

export default CurrentSection;

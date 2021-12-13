import React from 'react';
import CurrentCard from './CurrentCard';

const CurrentSection = ({ forecast }) => {
	return (
		<div className='section-wrapper'>
			<CurrentCard forecast={forecast} />
		</div>
	);
};

export default CurrentSection;

import React from 'react';
import CurrentCard from './CurrentCard';

const CurrentSection = ({ forecast }) => {
	return (
		<div id='current-container' data-testid='current-section'>
			<CurrentCard forecast={forecast} />
		</div>
	);
};

export default CurrentSection;

import React from 'react';
import HourlyCard from './HourlyCard';
import { getCurrentHour } from '../../utils/helperFuncs';

const HourlySection = ({ dailyForecast }) => {
	const currentHour = getCurrentHour();

	const dailyHrData = dailyForecast.hour;

	const displayableHrData = dailyHrData.filter((item, index) => {
		return index >= currentHour;
	});
	return (
		<div className='hourly-wrapper'>
			<h2>Hourly</h2>
			<div className='hourlyCard-container'>
				{displayableHrData.map((hour, index) => {
					return <HourlyCard key={index} hourlyData={hour} />;
				})}
			</div>
		</div>
	);
};

export default HourlySection;

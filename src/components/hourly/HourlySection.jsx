import React from 'react';
import HourlyCard from './HourlyCard';
import { getCurrentHour } from '../../utils/helperFuncs';

const HourlySection = ({ dailyForecast, tmrForecast }) => {
	const currentHour = getCurrentHour();

	const todaysHrData = dailyForecast.hour;
	const tomorrowsHrData = tmrForecast.hour;

	const todaysRemainingHrs = todaysHrData.filter((item, index) => {
		return index >= currentHour;
	});

	const tomorrowsHrs = tomorrowsHrData.filter((item, index) => {
		return index < currentHour;
	});

	const next24HrData = [...todaysRemainingHrs, ...tomorrowsHrs];

	return (
		<div id='hourly-container'>
			<div id='hourlyCard-container'>
				{next24HrData.map((hour, index) => {
					return <HourlyCard key={index} hourlyData={hour} />;
				})}
			</div>
		</div>
	);
};

export default HourlySection;

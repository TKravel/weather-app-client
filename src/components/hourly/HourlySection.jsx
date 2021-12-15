import React from 'react';
import HourlyCard from './HourlyCard';
import { getCurrentHour } from '../../utils/helperFuncs';

const HourlySection = ({ dailyForecast, tmrForecast }) => {
	console.log(dailyForecast);
	const currentHour = getCurrentHour();

	const todaysHrData = dailyForecast.hour;
	const tomorrowsHrData = tmrForecast.hour;

	const todaysRemainingHrs = todaysHrData.filter((item, index) => {
		return index >= currentHour;
	});

	const tomorrowsHrs = tomorrowsHrData.filter((item, index) => {
		return index <= currentHour;
	});

	const next24HrData = [...todaysRemainingHrs, ...tomorrowsHrs].slice(0, 24);

	console.log(next24HrData);
	return (
		<div id='24hr' className='hourly-wrapper'>
			<h2>24 hour forecast</h2>
			<div className='hourlyCard-container'>
				{next24HrData.map((hour, index) => {
					return <HourlyCard key={index} hourlyData={hour} />;
				})}
			</div>
		</div>
	);
};

export default HourlySection;

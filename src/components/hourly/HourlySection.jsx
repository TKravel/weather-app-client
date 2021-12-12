import React from 'react';
import HourlyCard from './HourlyCard';
import { getCurrentHour } from '../../utils/helperFuncs';

const HourlySection = ({ dailyForecast }) => {
	const currentHour = getCurrentHour();

	const dailyHrData = dailyForecast.hour;

	const displayableHrData = dailyHrData.filter((item, index) => {
		return index >= currentHour;
	});
	console.log(displayableHrData);
	console.log(dailyHrData);
	console.log(dailyForecast.hour);
	return (
		<div>
			<h2>Hourly</h2>
			{displayableHrData.map((hour, index) => {
				return <HourlyCard key={index} hourlyData={hour} />;
			})}
		</div>
	);
};

export default HourlySection;

import React from 'react';
import { convertTo12Hr, getIconPath } from '../../utils/helperFuncs';

const HourlyCard = ({ hourlyData }) => {
	// console.log(typeof hourlyData.condition.icon);
	console.log(getIconPath(hourlyData.condition.icon));
	const icon = '/icons' + getIconPath(hourlyData.condition.icon);
	const iconUrl = `process.env.PUBLIC_URL${icon}`;
	return (
		<div>
			<h3>{convertTo12Hr(hourlyData.time)}</h3>
			<div>
				<p>
					{hourlyData.temp_f}
					{'\u00B0'}
				</p>
				<img src={icon} />
				<p>Rain chance: {hourlyData.chance_of_rain}%</p>
				<p>Expand</p>
			</div>
			<div>
				<p>
					Wind: {hourlyData.wind_mph} MPH {hourlyData.wind_dir}
				</p>
				<p>Humidity: {hourlyData.humidity}%</p>
				<p>Rain amount: {hourlyData.precip_in}"</p>
			</div>
		</div>
	);
};

export default HourlyCard;

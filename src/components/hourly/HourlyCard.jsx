import React from 'react';
import { convertTo12Hr, getIconPath } from '../../utils/helperFuncs';

const HourlyCard = ({ hourlyData }) => {
	const icon = '/icons' + getIconPath(hourlyData.condition.icon);
	const iconBackground = hourlyData.is_day
		? 'icon-wrapper-day'
		: 'icon-wrapper-night';
	return (
		<div className='hourly-card'>
			<h3>{convertTo12Hr(hourlyData.time)}</h3>
			<div className={iconBackground}>
				<img src={icon} alt={hourlyData.condition.text} />
			</div>

			<p>
				{hourlyData.temp_f}
				{'\u00B0'}
			</p>

			<p>Rain chance: {hourlyData.chance_of_rain}%</p>
			<p>Rain amount: {hourlyData.precip_in}"</p>

			<p>
				Wind: {hourlyData.wind_mph} MPH {hourlyData.wind_dir}
			</p>
			<p>Humidity: {hourlyData.humidity}%</p>
		</div>
	);
};

export default HourlyCard;

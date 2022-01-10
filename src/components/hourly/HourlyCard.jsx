import React from 'react';
import RainDrop from '../icons/RainDrop';
import { convertTo12Hr, getIconPath } from '../../utils/helperFuncs';
import ArrowIcon from '../icons/ArrowIcon';

const HourlyCard = ({ hourlyData }) => {
	const icon = '/icons' + getIconPath(hourlyData.condition.icon);
	// const iconBackground = hourlyData.is_day
	// 	? 'icon-wrapper-day'
	// 	: 'icon-wrapper-night';
	const getWindDirClass = () => {
		const direction = hourlyData.wind_dir;
		if (direction === '') {
			return 'no-wind';
		} else if (direction) {
			return direction;
		}
	};
	return (
		<div className='hourly-card'>
			<p className='hourly-temp'>
				{parseInt(hourlyData.temp_f)}
				{'\u00B0'}
			</p>

			{/* <div className={iconBackground}>
				
			</div> */}
			<div className={getWindDirClass()}>
				<ArrowIcon />
			</div>
			<span className='drop-icon'>
				<RainDrop />
				{hourlyData.precip_in}"
			</span>
			<img
				className='hourly-icon'
				src={icon}
				alt={hourlyData.condition.text}
			/>
			<h4>{convertTo12Hr(hourlyData.time)}</h4>

			{/* <div className='hourly-card-section'>
				<p>Rain chance: {hourlyData.chance_of_rain}%</p>
				<p>Rain amount: {hourlyData.precip_in}"</p>

				<p>Wind: {hourlyData.wind_mph} MPH</p>
				<p>{hourlyData.wind_dir}</p>
				<p>Humidity: {hourlyData.humidity}%</p>
			</div> */}
		</div>
	);
};

export default HourlyCard;

import React from 'react';
import RainDrop from '../../icons/RainDrop';
import { convertTo12Hr, getIconPath } from '../../../utils/helperFuncs';
import ArrowIcon from '../../icons/ArrowIcon';

const HourlyCard = ({ hourlyData }) => {
	const icon = '/icons' + getIconPath(hourlyData.condition.icon);
	const getWindDirClass = () => {
		const direction = hourlyData.wind_dir;
		if (direction === '') {
			return 'no-wind';
		} else if (direction) {
			return direction;
		}
	};
	return (
		<div className='hourly-card' data-testid='hr-card'>
			<p className='hourly-temp'>
				{parseInt(hourlyData.temp_f)}
				{'\u00B0'}
			</p>
			<div
				id='wind-arrow-hourly'
				data-testid='wind-direction'
				className={getWindDirClass()}
			>
				<ArrowIcon />
			</div>
			<span className='drop-icon'>
				<RainDrop />
				{hourlyData.precip_in}"
			</span>
			<img
				className='hourly-icon'
				data-testid='hrIcon'
				src={icon}
				alt={hourlyData.condition.text}
			/>
			<h4>{convertTo12Hr(hourlyData.time)}</h4>
		</div>
	);
};

export default HourlyCard;

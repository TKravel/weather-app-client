import React from 'react';
import { getCurrentHour, getIconPath } from '../../../utils/helperFuncs';
import ArrowIcon from '../../icons/ArrowIcon';

const CurrentCard = ({ forecast }) => {
	const currentHrIdx = getCurrentHour();
	const icon = '/icons' + getIconPath(forecast.current.condition.icon);

	const getWindDirClass = () => {
		const direction = forecast.current.wind_dir;
		if (direction === '') {
			return 'no-wind';
		} else if (direction) {
			return direction;
		}
	};

	return (
		<div id='current-card'>
			<h1>
				{forecast.location.name}, {forecast.location.region}
			</h1>

			<div id='icon-temp-flexbox'>
				<div id='current-icon-wrapper'>
					<img
						id='current-icon'
						src={icon}
						alt={forecast.current.condition.text}
					/>
				</div>
				<div>
					<p id='hourly-temp'>
						{parseInt(forecast.current.temp_f)}
						{'\u00B0'}
					</p>
					<p>{forecast.current.condition.text}</p>
				</div>
			</div>
			<div id='wind-flexbox'>
				<p>Wind {forecast.current.wind_mph} MPH </p>

				<div id='wind-arrow-current' className={getWindDirClass()}>
					<ArrowIcon />
				</div>
			</div>

			<div id='bottom-current-card'>
				<div className='additional-details-flexbox'>
					<p>
						Feels like: {parseInt(forecast.current.feelslike_f)}
						{'\u00B0'}
					</p>
					<p>Humidity: {forecast.current.humidity}%</p>
				</div>
				<div className='additional-details-flexbox'>
					<p>
						Rain chance:{' '}
						{
							forecast.forecast.forecastday[0].day
								.daily_will_it_rain
						}
						%
					</p>
					<p>
						Wind chill:{' '}
						{parseInt(
							forecast.forecast.forecastday[0].hour[currentHrIdx]
								.windchill_f
						)}
						{'\u00B0'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CurrentCard;

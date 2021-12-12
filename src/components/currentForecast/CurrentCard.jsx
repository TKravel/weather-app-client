import React from 'react';
import { getCurrentHour, getIconPath } from '../../utils/helperFuncs';

const CurrentCard = ({ forecast }) => {
	const currentHrIdx = getCurrentHour();
	const icon = '/icons' + getIconPath(forecast.current.condition.icon);
	return (
		<div className='current-card'>
			<div>
				<div>
					<h1>{forecast.location.name}</h1>
					<span>{forecast.location.region}</span>
				</div>
				<img src={icon} />
				<p>Currently</p>
				<p>
					{forecast.current.temp_f}
					{'\u00B0'}
				</p>
				<p>
					Feels like: {forecast.current.feelslike_f}
					{'\u00B0'}
				</p>

				<span>{forecast.current.condition.text}</span>
				<div>
					<div>
						<p>
							Wind {forecast.current.wind_mph} MPH{' '}
							{forecast.current.wind_dir}
						</p>
					</div>
					<div>
						<p>
							Rain:{' '}
							{
								forecast.forecast.forecastday[0].day
									.daily_will_it_rain
							}
							%
						</p>
					</div>
				</div>
			</div>
			<div>
				<p>
					Todays Low: {forecast.forecast.forecastday[0].day.mintemp_f}
					{'\u00B0'}
				</p>
				<p>
					Todays High:{' '}
					{forecast.forecast.forecastday[0].day.maxtemp_f}
					{'\u00B0'}
				</p>
				<p>Humidity: {forecast.current.humidity}%</p>
				<p>
					Wind chill:{' '}
					{
						forecast.forecast.forecastday[0].hour[currentHrIdx]
							.windchill_f
					}
					{'\u00B0'}
				</p>
				<p>Sunrise: {forecast.forecast.forecastday[0].astro.sunrise}</p>
				<p>Sunset: {forecast.forecast.forecastday[0].astro.sunset}</p>
			</div>
		</div>
	);
};

export default CurrentCard;

import React from 'react';

const CurrentDay = ({ currentData }) => {
	return (
		<>
			<div>
				<div>
					<h1>{currentData.name}</h1>
					<span>{currentData.region}</span>
				</div>

				<p>Currently</p>
				<p>
					{currentData.temp}
					{'\u00B0'}
				</p>
				<p>
					Feels like: {currentData.feelsLike}
					{'\u00B0'}
				</p>

				<span>{currentData.condition}</span>
				<div>
					<div>
						<p>
							Wind {currentData.windSpeed} MPH{' '}
							{currentData.windDirection}
						</p>
					</div>
					<div>
						<p>Rain: {currentData.dailyRainChance}%</p>
					</div>
				</div>
			</div>
			<div>
				<p>
					Todays Low: {currentData.low}
					{'\u00B0'}
				</p>
				<p>
					Todays High: {currentData.high}
					{'\u00B0'}
				</p>
				<p>Humidity: {currentData.humidity}%</p>
				<p>
					Wind chill: {currentData.windChill}
					{'\u00B0'}
				</p>
				<p>Sunrise: {currentData.sunrise}</p>
				<p>Sunset: {currentData.sunset}</p>
			</div>
		</>
	);
};

export default CurrentDay;

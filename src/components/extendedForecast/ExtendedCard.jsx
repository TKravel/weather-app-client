import React from 'react';
import { getIconPath } from '../../utils/helperFuncs';

const ExtendedCard = ({ cardData }) => {
	const icon = '/icons' + getIconPath(cardData.day.condition.icon);
	return (
		<div>
			<h3>{cardData.date}</h3>
			<div>
				<p>
					High: {cardData.day.maxtemp_f}
					{'\u00B0'} Low: {cardData.day.mintemp_f}
					{'\u00B0'}
				</p>
				<img src={icon} alt={cardData.day.condition.text} />
				<p>
					{cardData.day.avgtemp_f}
					{'\u00B0'}
				</p>
				<p>{cardData.day.condition.text}</p>
				<p>Rain chance: {cardData.day.daily_chance_of_rain}%</p>
			</div>
			<div>
				<p>Max wind: {cardData.day.maxwind_mph} MPH</p>
				<p>Humidity: {cardData.day.avghumidity}%</p>
				<p>Precip amount: {cardData.day.totalprecip_in}"</p>
				<p>Visibility: {cardData.day.avgvis_miles} miles</p>
				<p>Sunrise: {cardData.astro.sunrise}</p>
				<p>Sunset: {cardData.astro.sunset}</p>
				<p>Moonrise: {cardData.astro.moonrise}</p>
				<p>Moonset: {cardData.astro.moonset}</p>
			</div>
		</div>
	);
};

export default ExtendedCard;
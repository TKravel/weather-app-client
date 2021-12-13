import React, { useState } from 'react';
import { getIconPath } from '../../utils/helperFuncs';
import ToggleButton from '../ToggleButton';

const ExtendedCard = ({ cardData }) => {
	const [expandedDisplay, setExpandedDisplay] = useState(false);
	const icon = '/icons' + getIconPath(cardData.day.condition.icon);
	let cardDate = cardData.date;
	cardDate = cardDate.splice(5);
	return (
		<div className='extended-card'>
			<h3>{cardDate}</h3>
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
			<div className={expandedDisplay ? 'expanded' : 'collapsed'}>
				<p>Max wind: {cardData.day.maxwind_mph} MPH</p>
				<p>Humidity: {cardData.day.avghumidity}%</p>
				<p>Precip amount: {cardData.day.totalprecip_in}"</p>
				<p>Visibility: {cardData.day.avgvis_miles} miles</p>
				<p>Sunrise: {cardData.astro.sunrise}</p>
				<p>Sunset: {cardData.astro.sunset}</p>
				<p>Moonrise: {cardData.astro.moonrise}</p>
				<p>Moonset: {cardData.astro.moonset}</p>
			</div>
			<ToggleButton
				openStatus={expandedDisplay}
				setStatus={setExpandedDisplay}
			/>
		</div>
	);
};

export default ExtendedCard;

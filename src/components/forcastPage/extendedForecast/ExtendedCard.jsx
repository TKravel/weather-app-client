import React from 'react';
import { getIconPath } from '../../../utils/helperFuncs';

const ExtendedCard = ({ cardData }) => {
	const icon = '/icons' + getIconPath(cardData.day.condition.icon);

	let cardDate = cardData.date.slice(5);

	return (
		<div className='extended-card' data-testid='extended-test-card'>
			<h3>
				{cardDate} {cardData.day.condition.text}
			</h3>

			<div className='extended-info'>
				<img
					src={icon}
					alt={cardData.day.condition.text}
					data-testid='extended-card'
				/>

				<p className='hourly-temp'>
					{parseInt(cardData.day.avgtemp_f)}
					{'\u00B0'}
				</p>

				<div>
					<p>
						High: {parseInt(cardData.day.maxtemp_f)}
						{'\u00B0'}
					</p>{' '}
					<p>
						Low: {parseInt(cardData.day.mintemp_f)}
						{'\u00B0'}
					</p>
				</div>
				<p>Rain chance: {cardData.day.daily_chance_of_rain}%</p>
			</div>
		</div>
	);
};

export default ExtendedCard;

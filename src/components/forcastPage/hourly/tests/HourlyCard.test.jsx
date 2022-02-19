import { render, screen, waitFor } from '@testing-library/react';
import HourlyCard from '../HourlyCard';
import { data } from '../../../../mocks/mockData';

const MockHourlySection = ({ data }) => {
	return (
		<div>
			{data.forecast.forecastday[0].hour.map((hour, idx) => {
				return <HourlyCard key={idx} hourlyData={hour} />;
			})}
		</div>
	);
};

describe('hourly card', () => {
	render(<MockHourlySection data={data} />);
	it('should render 24 cards', () => {
		const hourlyCards = screen.getAllByTestId(/hr-card/i);
		expect(hourlyCards.length).toEqual(24);
	});
	it('should display an img in each card', () => {
		waitFor(async () => {
			const hourlyCardIcons = await screen.findAllByTestId(/hrIcon/i);
			expect(hourlyCardIcons.length).toEqual(24);
		});
	});
	it('should display wind direction', async () => {
		waitFor(async () => {
			const windDir = await screen.findAllByTestId(/wind-direction/i);
			windDir.forEach((hour) => {
				expect(hour.classList.contains('')).not.toBe(true);
			});
		});
	});
});

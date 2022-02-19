import { render, screen, waitFor } from '@testing-library/react';
import ExtendedCard from '../ExtendedCard';
import { data } from '../../../../mocks/mockData';

const MockExtendedCard = ({ data }) => {
	return (
		<>
			{data.forecast.forecastday.map((day, idx) => {
				return <ExtendedCard key={idx} cardData={day} />;
			})}
		</>
	);
};

describe('current card', () => {
	render(<MockExtendedCard data={data} />);
	it('should render three days', () => {
		const card = screen.getAllByTestId(/extended-test-card/i);
		expect(card.length).toEqual(3);
	});
	it('should have an img in each card', () => {
		waitFor(async () => {
			const weatherIcons = await screen.findAllByTestId(/extended-icon/i);
			expect(weatherIcons.length).toEqual(3);
		});
	});
});

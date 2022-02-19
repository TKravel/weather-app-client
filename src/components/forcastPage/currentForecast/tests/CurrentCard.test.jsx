import { render, screen, waitFor } from '@testing-library/react';
import CurrentCard from '../CurrentCard';
import { data } from '../../../../mocks/mockData';

const MockCurrentCard = ({ data }) => {
	return <CurrentCard forecast={data} />;
};

describe('current card', () => {
	render(<MockCurrentCard data={data} />);
	// screen.debug();
	it('should render', () => {
		const card = screen.getByTestId(/current-card/i);
		expect(card).toBeInTheDocument();
	});
	it('should have an img', () => {
		waitFor(async () => {
			const weatherIcon = await screen.findByTestId(/current-icon/i);
			expect(weatherIcon).toBeInTheDocument();
		});
	});
	it('should have a wind direction class', () => {
		waitFor(async () => {
			const windDirection = await screen.findByTestId(
				/wind-arrow-current/i
			);
			expect(windDirection.classList.contains('')).not.toBe(true);
		});
	});
});

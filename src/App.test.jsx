import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import React from 'react';

describe('landing page on load', () => {
	test('Should render landing page', () => {
		render(<App />);

		const searchBar = screen.getByRole('textbox', {
			placeholder: /enter a location/i,
		});

		expect(searchBar).toBeInTheDocument();

		const sub_Btn = screen.getByRole('button', { name: /submit search/i });
		const gps_Btn = screen.getByRole('button', { name: /submit search/i });

		expect(sub_Btn).toBeInTheDocument();
		expect(gps_Btn).toBeInTheDocument();

		const heading = screen.getByRole('heading', {
			name: /forecasts for you/i,
		});

		expect(heading).toBeInTheDocument();
	});
});

describe('loading', () => {
	beforeEach(() => {
		const MockApp = () => {
			return <App isLoading={true} searchSubmitted={true} />;
		};
		render(<MockApp />);
	});

	it('should display loader while loading', async () => {
		waitFor(async () => {
			const loader = await screen.findByTestId(/spinner/i);

			expect(loader).toBeInTheDocument();
		});
	});
	it('should not display landing page', () => {
		const heading = screen.findAllByRole('heading');
		expect(heading).not.toBeNull();
	});
	it('should not display forecasts', () => {
		const current = screen.queryAllByTestId(/current-section/i);
		const hourly = screen.queryAllByTestId(/hourly-section/i);
		const extended = screen.queryAllByTestId(/extended-section/i);

		expect(current).not.toBeNull();
		expect(hourly).not.toBeNull();
		expect(extended).not.toBeNull();
	});
});

describe('forecasts load', () => {
	test('submit search renders forecasts on sucessful fetch', async () => {
		const user = userEvent.setup();
		render(<App />);

		const searchBar = screen.getByRole('textbox', {
			placeholder: /enter a location/i,
		});
		const subBtn = screen.getByRole('button', { name: /submit search/i });

		await user.type(searchBar, 'Philadelphia');
		expect(searchBar.value).toBe('Philadelphia');

		await user.click(subBtn);
		waitFor(async () => {
			expect(
				await screen.findByTestId(/current-section/i)
			).toBeInTheDocument();
			expect(
				await screen.findByTestId(/hourly-section/i)
			).toBeInTheDocument();
			expect(
				await screen.findByTestId(/extended-section/i)
			).toBeInTheDocument();
		});
	});
});

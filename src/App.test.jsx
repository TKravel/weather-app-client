import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import React from 'react';

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

	const heading = screen.getByRole('heading', { name: /forecasts for you/i });

	expect(heading).toBeInTheDocument();
});

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
	expect(
		await screen.findByRole('heading', { name: /philadelphia/i })
	).toBeInTheDocument();
});

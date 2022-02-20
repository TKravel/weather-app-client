import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '../SearchInput';

describe('input', () => {
	it('should render', () => {
		render(<SearchInput />);
		expect(
			screen.getByRole('textbox', {
				placeholder: /enter a location/i,
			})
		).toBeInTheDocument();
	});
	it('should accept input', async () => {
		const user = userEvent.setup();
		render(<SearchInput />);
		const input = screen.getByRole('textbox', {
			placeholder: /enter a location/i,
		});

		await user.type(input, 'testing');
		expect(input.value).toEqual('testing');
	});
});

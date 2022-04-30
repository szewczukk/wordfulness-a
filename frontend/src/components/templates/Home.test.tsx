import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Testing Home template', () => {
	it("It doesn't render empty array", () => {
		const { getByText } = render(
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			<Home />,
		);

		getByText(/No courses!/);
	});

	it('It renders array with courses', () => {
		const { getByText } = render(
			<Home
				courses={[
					{ id: 0, name: 'Hello' },
					{ id: 1, name: 'World' },
				]}
			/>,
			{ wrapper: MemoryRouter },
		);

		getByText(/Hello/);
		getByText(/World/);
	});
});

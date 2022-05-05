import React from 'react';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './HomeTemplate';

describe('Testing Home template', () => {
	it("It doesn't render empty array", () => {
		render(<Home />);

		screen.getByText(/No courses!/);
	});

	it('It renders array with courses', () => {
		render(
			<Home
				courses={[
					{ id: '0', name: 'Hello' },
					{ id: '1', name: 'World' },
				]}
			/>,
			{ wrapper: MemoryRouter },
		);

		screen.getByText(/Courses:/);
		screen.getByText(/Hello/);
		screen.getByText(/World/);
	});
});

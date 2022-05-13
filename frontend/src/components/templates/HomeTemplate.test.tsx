import React from 'react';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './HomeTemplate';

describe('HomeTemplate', () => {
	it("It doesn't render empty array and without username", () => {
		render(<Home />);

		screen.getByText(/No courses!/);
		screen.getByText(/Not logged in/);
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

	it('It renders username', () => {
		render(<Home username="Jan" />, { wrapper: MemoryRouter });

		screen.getByText(/Hello, Jan!/);
	});
});

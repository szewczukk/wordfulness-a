import React from 'react';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import CoursesList from './CoursesList';
import { MemoryRouter } from 'react-router-dom';

describe('Testing CoursesList', () => {
	it('It renders an empty array without an error', () => {
		render(<CoursesList courses={[]} />);
	});

	it('It renders array with courses and links to them', () => {
		render(
			<CoursesList
				courses={[
					{ id: '0', name: 'Hello' },
					{ id: '1', name: 'World' },
				]}
			/>,
			{ wrapper: MemoryRouter },
		);

		expect(screen.getByText(/Hello/).parentElement).toHaveAttribute(
			'href',
			'/courses/0',
		);
		expect(screen.getByText(/World/).parentElement).toHaveAttribute(
			'href',
			'/courses/1',
		);
	});
});

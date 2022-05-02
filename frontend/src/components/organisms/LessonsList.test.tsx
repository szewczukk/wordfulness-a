import React from 'react';
import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import LessonsList from './LessonsList';
import { MemoryRouter } from 'react-router-dom';

describe('Testing LessonsList', () => {
	it('It renders an empty array without an error', () => {
		render(<LessonsList lessons={[]} />);
	});

	it('It renders array with courses and links to them', () => {
		render(
			<LessonsList
				lessons={[
					{ id: '0', name: 'Hello' },
					{ id: '1', name: 'World' },
				]}
			/>,
			{ wrapper: MemoryRouter },
		);

		expect(screen.getByText(/Hello/).parentElement).toHaveAttribute(
			'href',
			'/lessons/0',
		);
		expect(screen.getByText(/World/).parentElement).toHaveAttribute(
			'href',
			'/lessons/1',
		);
	});
});

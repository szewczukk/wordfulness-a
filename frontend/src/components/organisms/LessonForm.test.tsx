import React from 'react';
import { describe, it, vi } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import LessonForm from './LessonForm';

describe('Testing LessonForm', () => {
	it('Should contain name text field', () => {
		render(<LessonForm onSubmit={vi.fn()} />);

		expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
	});

	it('It should render an error while submitting empty form', async () => {
		render(<LessonForm onSubmit={vi.fn()} />);

		fireEvent.click(screen.getByRole('button'));

		await screen.findByText(/Name required!/);
	});

	it('It should reset the form after successful submit', async () => {
		render(<LessonForm onSubmit={vi.fn()} />);

		fireEvent.change(screen.getByLabelText(/Name/), {
			target: { value: 'aaa' },
		});

		fireEvent.click(screen.getByRole('button'));

		const name = await screen.findByLabelText(/Name/);
		expect(name).toHaveDisplayValue('');
	});
});

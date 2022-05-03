import React from 'react';
import { describe, it, vi } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import FlashcardForm from './FlashcardForm';

describe('Testing FlashcardForm', () => {
	it('Should contain front and back text fields', () => {
		render(<FlashcardForm onSubmit={vi.fn()} />);

		expect(screen.getByLabelText(/Front/)).toBeInTheDocument();
		expect(screen.getByLabelText(/Back/)).toBeInTheDocument();
	});

	it('It should render an error while submitting empty form', async () => {
		render(<FlashcardForm onSubmit={vi.fn()} />);

		fireEvent.click(screen.getByRole('button'));

		screen.getByText(/Submit/).click();

		await screen.findByText(/Front required!/);
		await screen.findByText(/Back required!/);
	});

	it('It should reset the form after successful submit', async () => {
		render(<FlashcardForm onSubmit={vi.fn()} />);

		fireEvent.change(screen.getByLabelText(/Front/), {
			target: { value: 'aaa' },
		});
		fireEvent.change(screen.getByLabelText(/Back/), {
			target: { value: 'bbb' },
		});

		fireEvent.click(screen.getByRole('button'));

		const front = await screen.findByLabelText(/Front/);
		expect(front).toHaveDisplayValue('');

		const back = await screen.findByLabelText(/Back/);
		expect(back).toHaveDisplayValue('');
	});
});

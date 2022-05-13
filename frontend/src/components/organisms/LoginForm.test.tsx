import React from 'react';
import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
	it('It renders LoginForm with correct inputs', () => {
		render(<LoginForm onSubmit={vi.fn()} />);

		expect(screen.getByLabelText(/Username/)).toHaveAttribute('type', 'text');
		expect(screen.getByLabelText(/Password/)).toHaveAttribute(
			'type',
			'password',
		);
	});

	it('It should render an error while submitting empty form', async () => {
		render(<LoginForm onSubmit={vi.fn()} />);

		fireEvent.click(screen.getByRole('button'));

		await screen.findByText(/Username required!/);
		await screen.findByText(/Password required!/);
	});

	it('It should reset the form after successful submit', async () => {
		render(<LoginForm onSubmit={vi.fn()} />);

		fireEvent.change(screen.getByLabelText(/Username/), {
			target: { value: 'aaa' },
		});

		fireEvent.change(screen.getByLabelText(/Password/), {
			target: { value: 'aaa' },
		});

		fireEvent.click(screen.getByRole('button'));

		const username = await screen.findByLabelText(/Username/);
		expect(username).toHaveDisplayValue('');

		const password = await screen.findByLabelText(/Password/);
		expect(password).toHaveDisplayValue('');
	});
});

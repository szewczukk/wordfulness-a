import React from 'react';
import { describe, it, vi } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import FormField from './FormField';

describe('Testing FormField', () => {
	it('It associates the label with input', () => {
		render(
			<FormField
				label="Hello World"
				type="text"
				name="hello"
				onChange={vi.fn()}
				value="world"
			/>,
		);

		expect(screen.getByLabelText('Hello World')).toHaveDisplayValue('world');
	});

	it('It render red error', () => {
		render(
			<FormField
				label="Hello World"
				type="text"
				name="hello"
				onChange={vi.fn()}
				value="world"
				error="This is an error"
			/>,
		);

		const error = screen.getByText('This is an error');

		expect(error).toBeInTheDocument();
		expect(error.className).toContain('text-red-400');
	});

	it('It changes the value on typing', () => {
		render(
			<FormField
				label="Hello World"
				type="text"
				name="hello"
				onChange={vi.fn()}
			/>,
		);

		const input = screen.getByLabelText('Hello World');
		fireEvent.change(input, { target: { value: 'aaa' } });

		expect(input).toHaveValue('aaa');
	});
});

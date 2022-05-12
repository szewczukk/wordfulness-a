import React from 'react';
import { describe, it } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
	it('It renders the input', () => {
		render(<Input placeholder="Hello World" type="text" />);

		expect(screen.getByPlaceholderText('Hello World')).toBeInTheDocument();
	});

	it('It changes the value on typing', () => {
		render(<Input placeholder="Hello World" type="text" />);

		const input = screen.getByPlaceholderText('Hello World');
		fireEvent.change(input, { target: { value: 'aaa' } });

		expect(input).toHaveValue('aaa');
	});
});

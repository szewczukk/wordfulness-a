import React from 'react';
import { describe, expect, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import Button from './Button';

describe('Testing Button atom', () => {
	it('It renders info button properly', () => {
		render(<Button role="info">Click me!</Button>);

		const button = screen.getByText(/Click me!/);

		expect(button.className).toContain('bg-blue-500');
	});

	it('It renders danger button properly', () => {
		render(<Button role="danger">Click me!</Button>);

		const button = screen.getByText(/Click me!/);

		expect(button.className).toContain('bg-red-500');
	});

	it('It renders danger button properly', () => {
		render(<Button role="success">Click me!</Button>);

		const button = screen.getByText(/Click me!/);

		expect(button.className).toContain('bg-green-500');
	});
});

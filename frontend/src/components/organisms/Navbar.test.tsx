import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
	it('It renders all the necessary links', () => {
		render(<Navbar />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Home/)).toHaveAttribute('href', '/');
		expect(screen.getByText(/Login/)).toHaveAttribute('href', '/login');
	});
});

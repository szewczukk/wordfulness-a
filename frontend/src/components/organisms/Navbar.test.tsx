import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
	it('isAuthenticated=false', () => {
		render(<Navbar onLogoutClick={vi.fn()} />, { wrapper: MemoryRouter });

		expect(screen.getByText(/Home/)).toHaveAttribute('href', '/');
		expect(screen.getByText(/Login/)).toHaveAttribute('href', '/login');
	});

	it('isAuthenticated=true', () => {
		render(<Navbar onLogoutClick={vi.fn()} isAuthenticated />, {
			wrapper: MemoryRouter,
		});

		expect(screen.getByText(/Home/)).toHaveAttribute('href', '/');
		expect(screen.getByText(/Logout/)).toBeInTheDocument();
	});
});

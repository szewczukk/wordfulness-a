import React from 'react';
import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import LoginTemplate from './LoginTemplate';

describe('LoginTemplate', () => {
	it('It renders LoginTemplate', () => {
		render(<LoginTemplate onSubmit={vi.fn()} />);
	});
});

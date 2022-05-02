import React from 'react';
import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import DetailedCourseTemplate from './DetailedCourseTemplate';
import { MemoryRouter } from 'react-router-dom';

describe('Testing DetailedCourse template', () => {
	it("It doesn't render empty array", () => {
		const { getByText } = render(<DetailedCourseTemplate onSubmit={vi.fn()} />);

		getByText(/No lessons!/);
	});

	it('It renders array with lessons', () => {
		const { getByText } = render(
			<DetailedCourseTemplate
				onSubmit={vi.fn()}
				lessons={[
					{ id: '0', name: 'Hello' },
					{ id: '1', name: 'World' },
				]}
			/>,
			{ wrapper: MemoryRouter },
		);

		getByText(/Lessons:/);
		getByText(/Hello/);
		getByText(/World/);
	});
});

import React, { FC } from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import DetailedLessonTemplate from './DetailedLessonTemplate';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';

describe('Testing DetailedLesson template', () => {
	it("It doesn't render empty array", () => {
		const { getByText } = render(
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			<DetailedLessonTemplate onSubmit={() => {}} />,
		);

		getByText(/No flashcards!/);
	});

	it('It renders array with flashcards', () => {
		const wrapper: FC = ({ children }) => (
			<MockedProvider>
				<MemoryRouter>{children}</MemoryRouter>
			</MockedProvider>
		);

		const { getByText } = render(
			<DetailedLessonTemplate
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				onSubmit={() => {}}
				flashcards={[
					{ id: '0', front: 'Hello', back: 'World' },
					{ id: '1', front: 'World', back: 'Hello' },
				]}
			/>,
			{ wrapper },
		);

		getByText(/Flashcards:/);
		getByText(/1 - Hello - World/);
		getByText(/2 - World - Hello/);
	});
});

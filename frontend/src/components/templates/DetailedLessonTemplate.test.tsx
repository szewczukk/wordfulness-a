import React, { FC } from 'react';
import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import DetailedLessonTemplate from './DetailedLessonTemplate';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';

describe('Testing DetailedLesson template', () => {
	it("It doesn't render empty array", () => {
		const { getByText } = render(
			<DetailedLessonTemplate onSubmit={vi.fn()} onDeleteFlashcard={vi.fn()} />,
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
				onSubmit={vi.fn()}
				onDeleteFlashcard={vi.fn()}
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
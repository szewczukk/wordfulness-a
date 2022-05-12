import React, { FC } from 'react';
import { describe, it, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import DetailedLessonTemplate from './DetailedLessonTemplate';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';

describe('DetailedLessonTemplate', () => {
	it("It doesn't render empty array", () => {
		render(
			<DetailedLessonTemplate onSubmit={vi.fn()} onDeleteFlashcard={vi.fn()} />,
		);

		screen.getByText(/No flashcards!/);
	});

	it('It renders array with flashcards', () => {
		const wrapper: FC = ({ children }) => (
			<MockedProvider>
				<MemoryRouter>{children}</MemoryRouter>
			</MockedProvider>
		);

		render(
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

		screen.getByText(/Flashcards:/);
		screen.getByText(/1 - Hello - World/);
		screen.getByText(/2 - World - Hello/);
	});
});

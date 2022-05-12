import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FlashcardList from './FlashcardList';

describe('FlashcardList', () => {
	it('It renders an empty array without an error', () => {
		render(<FlashcardList flashcards={[]} onDeleteFlashcard={vi.fn()} />);
	});

	it('It renders array with flashcards', () => {
		render(
			<FlashcardList
				flashcards={[
					{ id: '0', front: 'Hello', back: 'World' },
					{ id: '1', front: 'World', back: 'Hello' },
				]}
				onDeleteFlashcard={vi.fn()}
			/>,
		);

		expect(screen.getByText(/1 - Hello - World/)).toBeInTheDocument();
		expect(screen.getByText(/2 - World - Hello/)).toBeInTheDocument();
	});
});

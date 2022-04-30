import React, { FC } from 'react';
import { Flashcard } from 'src/generated/graphql';
import Button from '../atoms/Button';

interface FlashcardListProps {
	flashcards: Omit<Flashcard, 'lesson'>[];
	onDeleteFlashcard: (id: string) => void;
}

const FlashcardList: FC<FlashcardListProps> = ({
	flashcards,
	onDeleteFlashcard,
}) => (
	<div>
		<ul className="flex flex-col gap-2">
			{flashcards.map((flashcard, i) => (
				<li key={flashcard.id}>
					<span className="mr-2">
						{i + 1} - {flashcard.front} - {flashcard.back}
					</span>
					<Button role="danger" onClick={() => onDeleteFlashcard(flashcard.id)}>
						Delete
					</Button>
				</li>
			))}
		</ul>
	</div>
);

export default FlashcardList;

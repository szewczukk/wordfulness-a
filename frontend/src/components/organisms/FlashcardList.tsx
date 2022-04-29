import React, { FC } from 'react';
import { Flashcard } from 'src/generated/graphql';
import DeleteFlashcardButton from '../molecules/DeleteFlashcardButton';

interface FlashcardListProps {
	flashcards: Omit<Flashcard, 'lesson'>[];
}

const FlashcardList: FC<FlashcardListProps> = ({ flashcards }) => {
	return (
		<div>
			<ul className="flex flex-col gap-2">
				{flashcards.map((flashcard, i) => (
					<li key={flashcard.id}>
						<span className="mr-2">
							{i + 1} - {flashcard.front} - {flashcard.back}
						</span>
						<DeleteFlashcardButton id={flashcard.id} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default FlashcardList;

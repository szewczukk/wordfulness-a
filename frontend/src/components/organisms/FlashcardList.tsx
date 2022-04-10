import React, { FC } from 'react';
import { useFetchFlashcardsQuery } from 'src/generated/graphql';
import DeleteFlashcardButton from '../molecules/DeleteFlashcardButton';

const FlashcardList: FC = () => {
	const { data } = useFetchFlashcardsQuery();

	return (
		<div>
			{data?.flashcards && (
				<ul>
					{data.flashcards.map((flashcard, i) => (
						<li key={flashcard.id}>
							<span className="mr-2">
								{i} - {flashcard.front} - {flashcard.back}
							</span>
							<DeleteFlashcardButton id={flashcard.id} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default FlashcardList;

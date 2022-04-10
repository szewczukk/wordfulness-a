import { FC } from 'react';
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
							{i} - {flashcard.front} - {flashcard.back}
							<DeleteFlashcardButton id={flashcard.id} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default FlashcardList;

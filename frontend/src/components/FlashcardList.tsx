import { FC } from 'react';
import { useFetchFlashcardsQuery } from 'src/generated/graphql';

const FlashcardList: FC = () => {
	const { data } = useFetchFlashcardsQuery();

	return (
		<div>
			{data?.flashcards && (
				<ul>
					{data.flashcards.map((flashcard, i) => (
						<li key={flashcard.id}>
							{i} - {flashcard.front} - {flashcard.back}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default FlashcardList;

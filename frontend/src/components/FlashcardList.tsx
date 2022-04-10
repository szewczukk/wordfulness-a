import { FC } from 'react';
import { useFetchFlashcardsQuery } from '../generated/graphql';

const FlashcardList: FC = () => {
	const { data } = useFetchFlashcardsQuery();

	return (
		<div className="container mx-auto">
			<h1 className="mb-4 text-2xl font-semibold">Flashcards:</h1>
			{data?.flashcards && (
				<ul>
					{data.flashcards.map((flashcard) => (
						<li key={flashcard.id}>
							{flashcard.front} {flashcard.back}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default FlashcardList;

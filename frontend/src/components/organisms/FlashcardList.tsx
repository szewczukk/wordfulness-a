import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchLessonQuery } from 'src/generated/graphql';
import DeleteFlashcardButton from '../molecules/DeleteFlashcardButton';

const FlashcardList: FC = () => {
	const { id } = useParams();
	const { data } = useFetchLessonQuery({
		variables: { id: id as string },
	});

	return (
		<div>
			{data?.lesson && (
				<ul className="flex flex-col gap-2">
					{data.lesson.flashcards.map((flashcard, i) => (
						<li key={flashcard.id}>
							<span className="mr-2">
								{i + 1} - {flashcard.front} - {flashcard.back}
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

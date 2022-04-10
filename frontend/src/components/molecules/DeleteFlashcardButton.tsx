import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
	FetchLessonDocument,
	FetchLessonQuery,
	useRemoveFlashcardMutation,
} from 'src/generated/graphql';
import Button from '../atoms/Button';

interface DeleteFlashcardButtonProps {
	id: string;
}

const DeleteFlashcardButton: FC<DeleteFlashcardButtonProps> = ({ id }) => {
	const { id: lessonId } = useParams();
	const [removeFlashcard] = useRemoveFlashcardMutation();

	const handleClick = () => {
		removeFlashcard({
			variables: { id },

			update: (store) => {
				const data = store.readQuery<FetchLessonQuery>({
					query: FetchLessonDocument,
					variables: { id: lessonId },
				});

				if (data?.lesson) {
					store.writeQuery<FetchLessonQuery>({
						query: FetchLessonDocument,
						data: {
							lesson: {
								...data.lesson,
								flashcards: data.lesson.flashcards.filter(
									({ id: flashcardId }) => flashcardId !== id,
								),
							},
						},
					});
				} else {
					console.error('Error while updating cache');
				}
			},
		});
	};

	return (
		<Button onClick={handleClick} role="danger">
			Remove
		</Button>
	);
};

export default DeleteFlashcardButton;

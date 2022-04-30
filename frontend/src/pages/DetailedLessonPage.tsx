import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
	FetchDetailedLessonDocument,
	FetchDetailedLessonQuery,
	useCreateFlashcardMutation,
	useFetchDetailedLessonQuery,
	useRemoveFlashcardMutation,
} from 'src/generated/graphql';
import DetailedLessonTemplate from 'src/components/templates/DetailedLessonTemplate';

const DetailedLessonPage: FC = () => {
	const { id } = useParams();
	const [removeFlashcard] = useRemoveFlashcardMutation();
	const [createFlashcard] = useCreateFlashcardMutation();
	const { data } = useFetchDetailedLessonQuery({
		variables: { id: id as string },
	});

	const handleSubmit = (values: { front: string; back: string }) => {
		createFlashcard({
			variables: { ...values, lessonId: id as string },
			update: (store, { data: response }) => {
				const data = store.readQuery<FetchDetailedLessonQuery>({
					query: FetchDetailedLessonDocument,
					variables: { id },
				});

				if (data?.lesson && response?.createFlashcard) {
					store.writeQuery<FetchDetailedLessonQuery>({
						query: FetchDetailedLessonDocument,
						data: {
							lesson: {
								...data.lesson,
								flashcards: [
									...data.lesson.flashcards,
									response.createFlashcard,
								],
							},
						},
					});
				} else {
					console.error('Error while updating cache');
				}
			},
		});
	};
	const handleDeleteFlashcard = (flashcardId: string) => {
		removeFlashcard({
			variables: { id: flashcardId },
			update: (store) => {
				const data = store.readQuery<FetchDetailedLessonQuery>({
					query: FetchDetailedLessonDocument,
					variables: { id },
				});

				if (data?.lesson) {
					store.writeQuery<FetchDetailedLessonQuery>({
						query: FetchDetailedLessonDocument,
						data: {
							lesson: {
								...data.lesson,
								flashcards: data.lesson.flashcards.filter(
									({ id: cachedFlashcardId }) =>
										cachedFlashcardId !== flashcardId,
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
		<DetailedLessonTemplate
			flashcards={data?.lesson.flashcards}
			onSubmit={handleSubmit}
			onDeleteFlashcard={handleDeleteFlashcard}
		/>
	);
};

export default DetailedLessonPage;

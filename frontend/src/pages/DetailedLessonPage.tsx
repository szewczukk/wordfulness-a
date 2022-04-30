import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
	FetchDetailedLessonDocument,
	FetchDetailedLessonQuery,
	useCreateFlashcardMutation,
	useFetchDetailedLessonQuery,
} from 'src/generated/graphql';
import DetailedLessonTemplate from 'src/components/templates/DetailedLessonTemplate';

const DetailedLessonPage: FC = () => {
	const { id } = useParams();
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

	return (
		<DetailedLessonTemplate
			flashcards={data?.lesson.flashcards}
			onSubmit={handleSubmit}
		/>
	);
};

export default DetailedLessonPage;

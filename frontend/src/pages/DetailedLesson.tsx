import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
	FetchLessonDocument,
	FetchLessonQuery,
	useCreateFlashcardMutation,
	useFetchLessonQuery,
} from 'src/generated/graphql';
import DetailedLessonTemplate from 'src/components/templates/DetailedLesson';

const DetailedLessonPage: FC = () => {
	const { id } = useParams();
	const [createFlashcard] = useCreateFlashcardMutation();
	const { data } = useFetchLessonQuery({ variables: { id: id as string } });

	const handleSubmit = (values: { front: string; back: string }) => {
		createFlashcard({
			variables: { ...values, lessonId: id as string },
			update: (store, { data: response }) => {
				const data = store.readQuery<FetchLessonQuery>({
					query: FetchLessonDocument,
					variables: { id },
				});

				if (data?.lesson && response?.createFlashcard) {
					store.writeQuery<FetchLessonQuery>({
						query: FetchLessonDocument,
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

import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
	FetchLessonDocument,
	FetchLessonQuery,
	useCreateFlashcardMutation,
} from 'src/generated/graphql';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

const FlashcardForm: FC = () => {
	const { id: lessonId } = useParams();
	const [createFlashcard] = useCreateFlashcardMutation();
	const formik = useFormik({
		initialValues: { front: '', back: '' },
		onSubmit: (values) => {
			createFlashcard({
				variables: { ...values, lessonId: lessonId as string },
				update: (store, { data: response }) => {
					const data = store.readQuery<FetchLessonQuery>({
						query: FetchLessonDocument,
						variables: { id: lessonId },
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
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="flex flex-col gap-2 items-start mt-4"
		>
			<FormField name="front" label="Front" onChange={formik.handleChange} />
			<FormField name="back" label="Back" onChange={formik.handleChange} />
			<Button type="submit" role="info">
				Submit
			</Button>
		</form>
	);
};

export default FlashcardForm;

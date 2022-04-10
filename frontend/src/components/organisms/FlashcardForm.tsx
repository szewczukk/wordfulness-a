import { useFormik } from 'formik';
import React, { FC } from 'react';
import {
	FetchFlashcardsDocument,
	FetchFlashcardsQuery,
	useCreateFlashcardMutation,
} from 'src/generated/graphql';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

const FlashcardForm: FC = () => {
	const [createFlashcard] = useCreateFlashcardMutation();
	const formik = useFormik({
		initialValues: { front: '', back: '' },
		onSubmit: (values) => {
			createFlashcard({
				variables: values,
				update: (store, { data: response }) => {
					const data = store.readQuery<FetchFlashcardsQuery>({
						query: FetchFlashcardsDocument,
					});

					if (data?.flashcards && response?.createFlashcard) {
						store.writeQuery<FetchFlashcardsQuery>({
							query: FetchFlashcardsDocument,
							data: {
								flashcards: [...data.flashcards, response.createFlashcard],
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

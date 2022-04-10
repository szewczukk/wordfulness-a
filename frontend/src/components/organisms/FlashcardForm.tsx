import { useFormik } from 'formik';
import React, { FC } from 'react';
import {
	FetchFlashcardsDocument,
	FetchFlashcardsQuery,
	useCreateFlashcardMutation,
} from 'src/generated/graphql';
import Input from '../atoms/Input';

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

					store.writeQuery<FetchFlashcardsQuery>({
						query: FetchFlashcardsDocument,
						data: {
							flashcards: [...data!.flashcards, response!.createFlashcard],
						},
					});
				},
			});
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="flex flex-col gap-2 items-start mt-4"
		>
			<Input
				type="text"
				name="front"
				id="front"
				placeholder="Front"
				onChange={formik.handleChange}
			/>
			<Input
				type="text"
				name="back"
				id="back"
				placeholder="Back"
				onChange={formik.handleChange}
			/>
			<button
				type="submit"
				className="bg-green-500 py-2 px-4 rounded text-white"
			>
				Submit
			</button>
		</form>
	);
};

export default FlashcardForm;

import { useFormik } from 'formik';
import React, { FC } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

export interface FlashcardFormValues {
	front: string;
	back: string;
}

interface FlashcardFormProps {
	onSubmit: (values: FlashcardFormValues) => void;
}

const FlashcardForm: FC<FlashcardFormProps> = ({ onSubmit }) => {
	const formik = useFormik<FlashcardFormValues>({
		initialValues: { front: '', back: '' },
		onSubmit,
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

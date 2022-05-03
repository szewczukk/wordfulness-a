import { useFormik } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

export interface FlashcardFormValues {
	front: string;
	back: string;
}

interface FlashcardFormProps {
	onSubmit: (values: FlashcardFormValues) => void;
}

const schema = Yup.object().shape({
	front: Yup.string().required('Front required!'),
	back: Yup.string().required('Back required!'),
});

const FlashcardForm: FC<FlashcardFormProps> = ({ onSubmit }) => {
	const formik = useFormik<FlashcardFormValues>({
		initialValues: { front: '', back: '' },
		validationSchema: schema,
		onSubmit: (values, { resetForm }) => {
			onSubmit(values);
			resetForm();
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="flex flex-col gap-2 items-start mt-4"
		>
			<FormField
				name="front"
				label="Front"
				value={formik.values.front}
				error={formik.errors.front}
				onChange={formik.handleChange}
			/>
			<FormField
				name="back"
				label="Back"
				value={formik.values.back}
				error={formik.errors.back}
				onChange={formik.handleChange}
			/>
			<Button type="submit" role="info">
				Submit
			</Button>
		</form>
	);
};

export default FlashcardForm;

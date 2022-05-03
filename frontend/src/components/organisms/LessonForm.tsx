import { useFormik } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

export interface LessonsFormValues {
	name: string;
}

interface LessonsFormProps {
	onSubmit: (values: LessonsFormValues) => void;
}

const schema = Yup.object().shape({
	name: Yup.string().required('Name required!'),
});

const LessonsForm: FC<LessonsFormProps> = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues: { name: '' },
		validationSchema: schema,
		onSubmit: (values, { resetForm }) => {
			onSubmit(values);
			resetForm({ values: { name: '' } });
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="flex flex-col gap-2 items-start mt-4"
		>
			<FormField
				name="name"
				label="Name"
				onChange={formik.handleChange}
				value={formik.values.name}
				error={formik.errors.name}
			/>
			<Button type="submit" role="info">
				Submit
			</Button>
		</form>
	);
};

export default LessonsForm;

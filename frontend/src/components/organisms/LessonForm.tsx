import { useFormik } from 'formik';
import React, { FC } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

export interface LessonsFormValues {
	name: string;
}

interface LessonsFormProps {
	onSubmit: (values: LessonsFormValues) => void;
}

const LessonsForm: FC<LessonsFormProps> = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues: { name: '' },
		onSubmit,
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="flex flex-col gap-2 items-start mt-4"
		>
			<FormField name="name" label="Name" onChange={formik.handleChange} />
			<Button type="submit" role="info">
				Submit
			</Button>
		</form>
	);
};

export default LessonsForm;

import { useFormik } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

export interface LoginFormValues {
	username: string;
	password: string;
}

interface LoginFormProps {
	onSubmit: (values: LoginFormValues) => void;
}

const schema = Yup.object().shape({
	username: Yup.string().required('Username required!'),
	password: Yup.string().required('Password required!'),
});

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
	const formik = useFormik({
		validationSchema: schema,
		onSubmit: (values, { resetForm }) => {
			onSubmit(values);
			resetForm();
		},
		initialValues: { password: '', username: '' },
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="flex flex-col gap-2 items-start mt-4"
		>
			<FormField
				label="Username"
				name="username"
				onChange={formik.handleChange}
				value={formik.values.username}
				error={formik.errors.username}
			/>
			<FormField
				label="Password"
				name="password"
				onChange={formik.handleChange}
				value={formik.values.password}
				error={formik.errors.password}
				type="password"
			/>
			<Button role="info" type="submit">
				Submit
			</Button>
		</form>
	);
};

export default LoginForm;

import { useFormik } from 'formik';
import React, { FC } from 'react';
import {
	FetchAllLessonsDocument,
	FetchAllLessonsQuery,
	useCreateLessonMutation,
} from 'src/generated/graphql';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

const LessonsForm: FC = () => {
	const [createLesson] = useCreateLessonMutation();
	const formik = useFormik({
		initialValues: { name: '' },
		onSubmit: (values) => {
			createLesson({
				variables: values,
				update: (store, { data: response }) => {
					const data = store.readQuery<FetchAllLessonsQuery>({
						query: FetchAllLessonsDocument,
					});

					if (data?.lessons && response?.createLesson) {
						store.writeQuery<FetchAllLessonsQuery>({
							query: FetchAllLessonsDocument,
							data: {
								lessons: [...data.lessons, response.createLesson],
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
			<FormField name="name" label="Name" onChange={formik.handleChange} />
			<Button type="submit" role="info">
				Submit
			</Button>
		</form>
	);
};

export default LessonsForm;

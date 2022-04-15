import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
	FetchCourseDocument,
	FetchCourseQuery,
	useCreateLessonMutation,
} from 'src/generated/graphql';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

const LessonsForm: FC = () => {
	const { id: courseId } = useParams();
	const [createLesson] = useCreateLessonMutation();
	const formik = useFormik({
		initialValues: { name: '' },
		onSubmit: (values) => {
			createLesson({
				variables: { ...values, courseId: courseId as string },
				update: (store, { data: response }) => {
					const data = store.readQuery<FetchCourseQuery>({
						query: FetchCourseDocument,
						variables: { id: courseId },
					});

					if (data?.course && response?.createLesson) {
						store.writeQuery<FetchCourseQuery>({
							query: FetchCourseDocument,
							data: {
								course: {
									...data.course,
									lessons: [...data.course.lessons, response.createLesson],
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
			<FormField name="name" label="Name" onChange={formik.handleChange} />
			<Button type="submit" role="info">
				Submit
			</Button>
		</form>
	);
};

export default LessonsForm;

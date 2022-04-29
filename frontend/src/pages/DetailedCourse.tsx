import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { LessonsFormValues } from 'src/components/organisms/LessonForm';
import DetailedCourseTemplate from 'src/components/templates/DetailedCourse';
import {
	FetchCourseDocument,
	FetchCourseQuery,
	useCreateLessonMutation,
	useFetchCourseQuery,
} from 'src/generated/graphql';

const DetailedCoursePage: FC = () => {
	const { id } = useParams();
	const [createLesson] = useCreateLessonMutation();
	const { data } = useFetchCourseQuery({
		variables: { id: id as string },
	});

	const handleSubmit = (values: LessonsFormValues) => {
		createLesson({
			variables: { ...values, courseId: id as string },
			update: (store, { data: response }) => {
				const data = store.readQuery<FetchCourseQuery>({
					query: FetchCourseDocument,
					variables: { id },
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
	};

	return (
		<DetailedCourseTemplate
			lessons={data?.course.lessons}
			onSubmit={handleSubmit}
		/>
	);
};

export default DetailedCoursePage;

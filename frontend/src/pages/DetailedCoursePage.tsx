import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { LessonsFormValues } from 'src/components/organisms/LessonForm';
import DetailedCourseTemplate from 'src/components/templates/DetailedCourseTemplate';
import {
	FetchDetailedCourseDocument,
	FetchDetailedCourseQuery,
	useCreateLessonMutation,
	useFetchDetailedCourseQuery,
} from 'src/generated/graphql';

const DetailedCoursePage: FC = () => {
	const { id } = useParams();
	const [createLesson] = useCreateLessonMutation();
	const { data } = useFetchDetailedCourseQuery({
		variables: { id: id as string },
	});

	const handleSubmit = (values: LessonsFormValues) => {
		createLesson({
			variables: { ...values, courseId: id as string },
			update: (store, { data: response }) => {
				const data = store.readQuery<FetchDetailedCourseQuery>({
					query: FetchDetailedCourseDocument,
					variables: { id },
				});

				if (data?.course && response?.createLesson) {
					store.writeQuery<FetchDetailedCourseQuery>({
						query: FetchDetailedCourseDocument,
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

import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { LessonsFormValues } from 'src/components/organisms/LessonForm';
import DetailedCourseTemplate from 'src/components/templates/DetailedCourseTemplate';
import {
	FetchCurrentUserDocument,
	FetchCurrentUserQuery,
	FetchDetailedCourseDocument,
	FetchDetailedCourseQuery,
	useCreateLessonMutation,
	useFetchCurrentUserQuery,
	useFetchDetailedCourseQuery,
	useLogoutMutation,
} from 'src/generated/graphql';

const DetailedCoursePage: FC = () => {
	const { id } = useParams();
	const [logout] = useLogoutMutation();
	const { data: currentUserData } = useFetchCurrentUserQuery();
	const [createLesson] = useCreateLessonMutation();
	const { data: detailedCourseData } = useFetchDetailedCourseQuery({
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

	const handleLogoutClick = () => {
		logout({
			update: (store) => {
				store.writeQuery<FetchCurrentUserQuery>({
					query: FetchCurrentUserDocument,
					data: { me: null },
				});
			},
		});
	};

	return (
		<DetailedCourseTemplate
			lessons={detailedCourseData?.course.lessons}
			isAuthenticated={currentUserData?.me !== null}
			onSubmit={handleSubmit}
			onLogoutClick={handleLogoutClick}
		/>
	);
};

export default DetailedCoursePage;

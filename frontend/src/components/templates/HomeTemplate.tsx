import React, { FC } from 'react';
import CoursesList from 'src/components/organisms/CoursesList';
import { Course } from 'src/generated/graphql';

interface HomeTemplateProps {
	courses?: Omit<Course, 'lessons'>[];
}

const HomeTemplate: FC<HomeTemplateProps> = ({ courses }) => (
	<>
		{courses && courses.length ? (
			<>
				<h1>Courses:</h1>
				<CoursesList courses={courses} />
			</>
		) : (
			<h1>No courses!</h1>
		)}
	</>
);

export default HomeTemplate;

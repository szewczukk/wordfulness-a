import React, { FC } from 'react';
import CoursesList from 'src/components/organisms/CoursesList';
import { Course } from 'src/generated/graphql';

interface HomeTemplateProps {
	username?: string;
	courses?: Omit<Course, 'lessons'>[];
}

const HomeTemplate: FC<HomeTemplateProps> = ({ courses, username }) => (
	<>
		<h2 className="text-2xl font-bold pb-8">
			{username ? `Hello, ${username}!` : 'Not logged in'}
		</h2>
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

import React, { FC } from 'react';
import CoursesList from 'src/components/organisms/CoursesList';
import { Course } from 'src/generated/graphql';

interface HomeTemplateProps {
	courses?: Omit<Course, 'lessons'>[];
}

const HomeTemplate: FC<HomeTemplateProps> = ({ courses }) => (
	<>
		<h1>Courses: </h1>
		{courses && <CoursesList courses={courses} />}
	</>
);

export default HomeTemplate;

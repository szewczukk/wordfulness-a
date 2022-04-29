import React, { FC } from 'react';
import CoursesList from 'src/components/organisms/CoursesList';

const HomeTemplate: FC = () => {
	return (
		<>
			<h1>Courses: </h1>
			<CoursesList />
		</>
	);
};

export default HomeTemplate;

import React, { FC } from 'react';
import CoursesList from '../organisms/CoursesList';

const Home: FC = () => {
	return (
		<>
			<h1>Courses: </h1>
			<CoursesList />
		</>
	);
};

export default Home;

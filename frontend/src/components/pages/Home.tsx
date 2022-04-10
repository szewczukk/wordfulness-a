import React, { FC } from 'react';
import LessonsForm from '../organisms/LessonForm';
import LessonsList from '../organisms/LessonsList';

const Home: FC = () => {
	return (
		<>
			<LessonsList />
			<LessonsForm />
		</>
	);
};

export default Home;

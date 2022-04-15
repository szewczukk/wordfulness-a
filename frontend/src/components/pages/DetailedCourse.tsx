import React, { FC } from 'react';
import LessonsForm from '../organisms/LessonForm';
import LessonsList from '../organisms/LessonsList';

const DetailedCourse: FC = () => (
	<>
		<h1>Lessons</h1>
		<LessonsList />
		<LessonsForm />
	</>
);

export default DetailedCourse;

import React, { FC } from 'react';
import LessonsForm from '../organisms/LessonForm';
import LessonsList from '../organisms/LessonsList';

const DetailedCourseTemplate: FC = () => (
	<>
		<h1>Lessons</h1>
		<LessonsList />
		<LessonsForm />
	</>
);

export default DetailedCourseTemplate;

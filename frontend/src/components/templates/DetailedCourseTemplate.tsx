import React, { FC } from 'react';
import { Lesson } from 'src/generated/graphql';
import LessonsForm, { LessonsFormValues } from '../organisms/LessonForm';
import LessonsList from '../organisms/LessonsList';
import Navbar from '../organisms/Navbar';

interface DetailedCourseTemplateProps {
	isAuthenticated?: boolean;
	onLogoutClick: () => void;
	lessons?: Omit<Lesson, 'flashcards' | 'course'>[];
	onSubmit: (values: LessonsFormValues) => void;
}

const DetailedCourseTemplate: FC<DetailedCourseTemplateProps> = ({
	lessons,
	onSubmit,
	onLogoutClick,
	isAuthenticated,
}) => (
	<>
		<Navbar isAuthenticated={isAuthenticated} onLogoutClick={onLogoutClick} />
		{lessons && lessons.length ? (
			<>
				<h1>Lessons:</h1>
				<LessonsList lessons={lessons} />
			</>
		) : (
			<h1>No lessons!</h1>
		)}
		<LessonsForm onSubmit={onSubmit} />
	</>
);

export default DetailedCourseTemplate;

import React, { FC } from 'react';
import { Lesson } from 'src/generated/graphql';
import LessonsForm, { LessonsFormValues } from '../organisms/LessonForm';
import LessonsList from '../organisms/LessonsList';

interface DetailedCourseTemplateProps {
	lessons?: Omit<Lesson, 'flashcards' | 'course'>[];
	onSubmit: (values: LessonsFormValues) => void;
}

const DetailedCourseTemplate: FC<DetailedCourseTemplateProps> = ({
	lessons,
	onSubmit,
}) => (
	<>
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

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
		<h1>Lessons</h1>
		{lessons && <LessonsList lessons={lessons} />}
		<LessonsForm onSubmit={onSubmit} />
	</>
);

export default DetailedCourseTemplate;

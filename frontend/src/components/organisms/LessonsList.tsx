import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Lesson } from 'src/generated/graphql';

interface LessonsListProps {
	lessons: Omit<Lesson, 'flashcards' | 'course'>[];
}

const LessonsList: FC<LessonsListProps> = ({ lessons }) => (
	<ul>
		{lessons.map((lesson) => (
			<Link
				key={lesson.id}
				className="hover:underline cursor-pointer"
				to={`/lessons/${lesson.id}`}
			>
				<li>{lesson.name}</li>
			</Link>
		))}
	</ul>
);

export default LessonsList;

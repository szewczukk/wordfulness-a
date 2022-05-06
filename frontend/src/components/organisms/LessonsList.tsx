import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Lesson } from 'src/generated/graphql';

interface LessonsListProps {
	lessons: Omit<Lesson, 'flashcards' | 'course'>[];
}

const LessonsList: FC<LessonsListProps> = ({ lessons }) => (
	<ul>
		{lessons.map((lesson) => (
			<li key={lesson.id}>
				<Link
					className="hover:underline cursor-pointer"
					to={`/lessons/${lesson.id}`}
				>
					{lesson.name}
				</Link>
			</li>
		))}
	</ul>
);

export default LessonsList;

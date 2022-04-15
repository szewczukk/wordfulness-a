import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchCourseQuery } from 'src/generated/graphql';

const LessonsList: FC = () => {
	const { id } = useParams();
	const { data } = useFetchCourseQuery({
		variables: { id: id as string },
	});

	return (
		<ul>
			{data?.course.lessons &&
				data.course.lessons.map((lesson) => (
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
};

export default LessonsList;

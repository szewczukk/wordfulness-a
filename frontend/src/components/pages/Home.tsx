import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFetchAllLessonsQuery } from 'src/generated/graphql';
import LessonsForm from '../organisms/LessonForm';

const Home: FC = () => {
	const { data } = useFetchAllLessonsQuery();

	return (
		<>
			<ul>
				{data?.lessons &&
					data.lessons.map((lesson) => (
						<Link
							key={lesson.id}
							className="hover:underline cursor-pointer"
							to={`/${lesson.id}`}
						>
							<li>{lesson.name}</li>
						</Link>
					))}
			</ul>
			<LessonsForm />
		</>
	);
};

export default Home;

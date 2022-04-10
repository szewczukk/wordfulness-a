import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFetchAllLessonsQuery } from 'src/generated/graphql';

const Home: FC = () => {
	const { data } = useFetchAllLessonsQuery();

	return (
		<>
			<h1>All lessons:</h1>
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
		</>
	);
};

export default Home;

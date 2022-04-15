import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFetchAllCoursesQuery } from 'src/generated/graphql';

const CoursesList: FC = () => {
	const { data } = useFetchAllCoursesQuery();

	return (
		<ul>
			{data?.courses &&
				data.courses.map((course) => (
					<Link
						key={course.id}
						className="hover:underline cursor-pointer"
						to={`/courses/${course.id}`}
					>
						<li>{course.name}</li>
					</Link>
				))}
		</ul>
	);
};

export default CoursesList;

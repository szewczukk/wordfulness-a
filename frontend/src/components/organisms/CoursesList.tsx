import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Course } from 'src/generated/graphql';

interface CoursesListProps {
	courses: Omit<Course, 'lessons'>[];
}

const CoursesList: FC<CoursesListProps> = ({ courses }) => (
	<ul>
		{courses.map((course) => (
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

export default CoursesList;

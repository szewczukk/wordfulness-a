import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Course } from 'src/generated/graphql';

interface CoursesListProps {
	courses: Omit<Course, 'lessons'>[];
}

const CoursesList: FC<CoursesListProps> = ({ courses }) => (
	<ul>
		{courses.map((course) => (
			<li key={course.id}>
				<Link
					className="hover:underline cursor-pointer"
					to={`/courses/${course.id}`}
				>
					{course.name}
				</Link>
			</li>
		))}
	</ul>
);

export default CoursesList;

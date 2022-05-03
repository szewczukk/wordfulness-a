import React, { FC } from 'react';
import HomeTemplate from 'src/components/templates/HomeTemplate';
import { useFetchAllCoursesQuery } from 'src/generated/graphql';

const HomePage: FC = () => {
	const { data } = useFetchAllCoursesQuery();

	return <HomeTemplate courses={data?.courses} />;
};

export default HomePage;
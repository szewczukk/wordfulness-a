import React, { FC } from 'react';
import HomeTemplate from 'src/components/templates/HomeTemplate';
import {
	useFetchAllCoursesQuery,
	useFetchCurrentUserQuery,
} from 'src/generated/graphql';

const HomePage: FC = () => {
	const { data: currentUserData } = useFetchCurrentUserQuery();
	const { data: allCoursesData } = useFetchAllCoursesQuery();

	return (
		<HomeTemplate
			courses={allCoursesData?.courses}
			username={currentUserData?.me.username}
		/>
	);
};

export default HomePage;

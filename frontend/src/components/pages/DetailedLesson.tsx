import React, { FC } from 'react';
import FlashcardForm from '../organisms/FlashcardForm';
import FlashcardList from '../organisms/FlashcardList';

const DetailedLesson: FC = () => (
	<>
		<FlashcardList />
		<FlashcardForm />
	</>
);

export default DetailedLesson;

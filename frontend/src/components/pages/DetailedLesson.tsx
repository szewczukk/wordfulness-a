import React, { FC } from 'react';
import FlashcardForm from '../organisms/FlashcardForm';
import FlashcardList from '../organisms/FlashcardList';

const DetailedLesson: FC = () => (
	<>
		<h1>Flashcards:</h1>
		<FlashcardList />
		<FlashcardForm />
	</>
);

export default DetailedLesson;

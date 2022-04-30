import React, { FC } from 'react';
import { Flashcard } from 'src/generated/graphql';
import FlashcardList from '../organisms/FlashcardList';
import FlashcardForm, { FlashcardFormValues } from '../organisms/FlashcardForm';

interface DetailedLessonTemplateProps {
	flashcards?: Omit<Flashcard, 'lesson'>[];
	onSubmit: (values: FlashcardFormValues) => void;
}

const DetailedLessonTemplate: FC<DetailedLessonTemplateProps> = ({
	flashcards,
	onSubmit,
}) => (
	<>
		{flashcards && flashcards.length ? (
			<>
				<h1>Flashcards:</h1>
				<FlashcardList flashcards={flashcards} />
			</>
		) : (
			<h1>No flashcards!</h1>
		)}
		<FlashcardForm onSubmit={onSubmit} />
	</>
);

export default DetailedLessonTemplate;

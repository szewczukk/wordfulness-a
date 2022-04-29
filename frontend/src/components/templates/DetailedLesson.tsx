import React, { FC } from 'react';
import FlashcardForm, {
	FlashcardFormValues,
} from 'src/components/organisms/FlashcardForm';
import FlashcardList from 'src/components/organisms/FlashcardList';
import { Flashcard } from 'src/generated/graphql';

interface DetailedLessonTemplateProps {
	flashcards?: Omit<Flashcard, 'lesson'>[];
	onSubmit: (values: FlashcardFormValues) => void;
}

const DetailedLessonTemplate: FC<DetailedLessonTemplateProps> = ({
	flashcards,
	onSubmit,
}) => {
	return (
		<>
			<h1>Flashcards:</h1>
			{flashcards && <FlashcardList flashcards={flashcards} />}
			<FlashcardForm onSubmit={onSubmit} />
		</>
	);
};

export default DetailedLessonTemplate;

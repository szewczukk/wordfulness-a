import React, { FC } from 'react';
import {
	FetchFlashcardsDocument,
	FetchFlashcardsQuery,
	useRemoveFlashcardMutation,
} from 'src/generated/graphql';
import Button from '../atoms/Button';

interface DeleteFlashcardButtonProps {
	id: string;
}

const DeleteFlashcardButton: FC<DeleteFlashcardButtonProps> = ({ id }) => {
	const [removeFlashcard] = useRemoveFlashcardMutation();

	const handleClick = () => {
		removeFlashcard({
			variables: { id },

			update: (store) => {
				const data = store.readQuery<FetchFlashcardsQuery>({
					query: FetchFlashcardsDocument,
				});

				store.writeQuery<FetchFlashcardsQuery>({
					query: FetchFlashcardsDocument,
					data: {
						flashcards: data.flashcards.filter(
							({ id: flashcardId }) => flashcardId !== id,
						),
					},
				});
			},
		});
	};

	return (
		<Button onClick={handleClick} role="danger">
			Remove
		</Button>
	);
};

export default DeleteFlashcardButton;

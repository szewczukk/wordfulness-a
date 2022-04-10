import React, { FC } from 'react';
import {
	FetchFlashcardsDocument,
	FetchFlashcardsQuery,
	useRemoveFlashcardMutation,
} from 'src/generated/graphql';

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
						flashcards: data!.flashcards.filter(
							({ id: flashcardId }) => flashcardId !== id,
						),
					},
				});
			},
		});
	};

	return (
		<button
			onClick={handleClick}
			className="ml-2 bg-red-600 px-4 py-2 text-white rounded"
		>
			Remove
		</button>
	);
};

export default DeleteFlashcardButton;

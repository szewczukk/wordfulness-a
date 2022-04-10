import { CreateFlashcardInput } from './create-flashcard.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFlashcardInput extends PartialType(CreateFlashcardInput) {
	@Field(() => ID)
	id: number;
}

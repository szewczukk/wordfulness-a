import { CreateFlashcardInput } from './create-flashcard.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFlashcardInput extends PartialType(CreateFlashcardInput) {
	@Field(() => Int)
	id: number;
}

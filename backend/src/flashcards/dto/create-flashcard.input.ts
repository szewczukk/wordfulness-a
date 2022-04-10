import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFlashcardInput {
	@Field()
	front: string;

	@Field()
	back: string;
}

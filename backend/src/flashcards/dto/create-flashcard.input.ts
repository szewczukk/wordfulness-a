import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFlashcardInput {
	@Field()
	front: string;

	@Field()
	back: string;
}

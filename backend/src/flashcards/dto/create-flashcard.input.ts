import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateFlashcardInput {
	@Field()
	front: string;

	@Field()
	back: string;

	@Field(() => ID)
	lessonId: number;
}

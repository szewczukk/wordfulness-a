import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateLessonInput {
	@Field()
	name: string;

	@Field(() => ID)
	courseId: number;
}

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CredentialsInput {
	@Field()
	username: string;

	@Field()
	password: string;
}

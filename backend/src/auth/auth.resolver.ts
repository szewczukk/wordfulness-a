import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { CredentialsInput } from './dto/credentialsInput';

@Resolver()
export class AuthResolver {
	constructor(
		private readonly authService: AuthService,
		private readonly usersSerivce: UsersService,
	) {}

	@Mutation(() => User)
	async login(
		@Args('credentials') credentials: CredentialsInput,
		@Context() context,
	) {
		const user = await this.authService.authenticate(credentials);
		context.req.userId = user.id;
		return user;
	}

	@Query(() => User)
	async me(@Context() context) {
		return this.usersSerivce.findOne(context.req.userId);
	}
}

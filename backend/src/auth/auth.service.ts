import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { CredentialsInput } from './dto/credentialsInput';

@Injectable()
export class AuthService {
	constructor(private readonly usersSerivce: UsersService) {}

	async authenticate(credentials: CredentialsInput) {
		const user = await this.usersSerivce.findOneByUsername(
			credentials.username,
		);

		if (!user) {
			throw new HttpException('Not found', HttpStatus.NOT_FOUND);
		}

		const isAuthenticated = await bcrypt.compare(
			credentials.password,
			user.password,
		);

		if (!isAuthenticated) {
			throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
		}

		return user;
	}
}

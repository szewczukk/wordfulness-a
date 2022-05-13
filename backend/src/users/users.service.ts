import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) {}

	async create(createUserInput: CreateUserInput) {
		const hashed = await bcrypt.hash(createUserInput.password, 10);

		return this.usersRepository.save({
			...createUserInput,
			password: hashed,
		});
	}

	findAll() {
		return this.usersRepository.find({});
	}

	findOne(id: number) {
		return this.usersRepository.findOne({ where: { id } });
	}

	findOneByUsername(username: string) {
		return this.usersRepository.findOne({ where: { username } });
	}

	async update(id: number, updateUserInput: UpdateUserInput) {
		if (updateUserInput.password) {
			const password = await bcrypt.hash(updateUserInput.password, 10);
			await this.usersRepository.update(
				{ id },
				{ ...updateUserInput, password },
			);
		} else {
			await this.usersRepository.update({ id }, { ...updateUserInput });
		}

		return this.findOne(id);
	}

	async remove(id: number) {
		const result = await this.usersRepository.delete({ id });
		return result.affected !== 0;
	}
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
	constructor(
		@InjectRepository(Course)
		private coursesRepository: Repository<Course>,
	) {}

	create(createCourseInput: CreateCourseInput) {
		return this.coursesRepository.save(createCourseInput);
	}

	findAll() {
		return this.coursesRepository.find({
			relations: ['lessons', 'lessons.flashcards'],
		});
	}

	findOne(id: number) {
		return this.coursesRepository.findOne({
			where: { id },
			relations: ['lessons', 'lessons.flashcards'],
		});
	}

	async update(id: number, updateCourseInput: UpdateCourseInput) {
		await this.coursesRepository.update({ id }, { ...updateCourseInput });
		return this.findOne(updateCourseInput.id);
	}

	remove(id: number) {
		return `This action removes a #${id} course`;
	}
}

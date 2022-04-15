import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonsService {
	constructor(
		@InjectRepository(Lesson)
		private lessonsRepository: Repository<Lesson>,
	) {}

	create(createLessonInput: CreateLessonInput) {
		return this.lessonsRepository.save({
			...createLessonInput,
			course: { id: createLessonInput.courseId },
		});
	}

	findAll() {
		return this.lessonsRepository.find({ relations: ['flashcards'] });
	}

	async findOne(id: number) {
		return this.lessonsRepository.findOne({
			where: { id },
			relations: ['flashcards'],
		});
	}

	async update(updateLessonInput: UpdateLessonInput) {
		// TODO: REFACTOR THIS TO ONE QUERY
		await this.lessonsRepository.update(
			{ id: updateLessonInput.id },
			{ ...updateLessonInput },
		);
		return this.findOne(updateLessonInput.id);
	}

	async remove(id: number) {
		const result = await this.lessonsRepository.delete({ id });
		return result.affected !== 0;
	}
}

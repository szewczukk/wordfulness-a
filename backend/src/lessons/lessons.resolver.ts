import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { LessonsService } from './lessons.service';
import { Lesson } from './entities/lesson.entity';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';

@Resolver(() => Lesson)
export class LessonsResolver {
	constructor(private readonly lessonsService: LessonsService) {}

	@Mutation(() => Lesson)
	createLesson(
		@Args('createLessonInput') createLessonInput: CreateLessonInput,
	) {
		return this.lessonsService.create(createLessonInput);
	}

	@Query(() => [Lesson], { name: 'lessons' })
	findAll() {
		return this.lessonsService.findAll();
	}

	@Query(() => Lesson, { name: 'lesson' })
	findOne(@Args('id', { type: () => ID }) id: number) {
		return this.lessonsService.findOne(id);
	}

	@Mutation(() => Lesson)
	updateLesson(
		@Args('updateLessonInput') updateLessonInput: UpdateLessonInput,
	) {
		return this.lessonsService.update(updateLessonInput.id, updateLessonInput);
	}

	@Mutation(() => Boolean)
	removeLesson(@Args('id', { type: () => ID }) id: number) {
		return this.lessonsService.remove(id);
	}
}

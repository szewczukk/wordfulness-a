import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Course } from 'src/courses/entities/course.entity';
import { Flashcard } from 'src/flashcards/entities/flashcard.entity';
import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Lesson {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id: number;

	@Field()
	@Column({ unique: true })
	name: string;

	@OneToMany(() => Flashcard, (flashcard) => flashcard.lesson)
	@Field(() => [Flashcard])
	flashcards: Flashcard[];

	@ManyToOne(() => Course, (course) => course.lessons)
	@Field(() => Course)
	course: Course;
}

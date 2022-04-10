import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Flashcard {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id: number;

	@Column()
	@Field()
	front: string;

	@Column()
	@Field()
	back: string;

	@ManyToOne(() => Lesson, (lesson) => lesson.flashcards)
	@Field(() => Lesson)
	lesson: Lesson;
}

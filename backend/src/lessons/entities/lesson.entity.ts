import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Flashcard } from 'src/flashcards/entities/flashcard.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
}

import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

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
}

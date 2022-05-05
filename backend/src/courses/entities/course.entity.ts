import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Course {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id: number;

	@Field()
	@Column()
	name: string;

	@OneToMany(() => Lesson, (lesson) => lesson.course)
	@Field(() => [Lesson])
	lessons: Lesson[];
}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { LessonsModule } from './lessons/lessons.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			debug: true,
			playground: true,
			autoSchemaFile: 'schema.gql',
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: '127.0.0.1',
			port: 5432,
			username: 'wordfulness',
			password: 'zaq',
			database: 'wordfulness',
			autoLoadEntities: true,
			synchronize: true,
		}),
		FlashcardsModule,
		LessonsModule,
	],
})
export class AppModule {}

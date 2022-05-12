import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { LessonsModule } from './lessons/lessons.module';
import { CoursesModule } from './courses/courses.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			debug: true,
			playground: true,
			autoSchemaFile: 'schema.gql',
		}),
		TypeOrmModule.forRootAsync({
			inject: [ConfigService],
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				url: configService.get<string>('DATABASE_URL'),
				autoLoadEntities: true,
				synchronize: true,
			}),
		}),
		ConfigModule.forRoot(),
		FlashcardsModule,
		LessonsModule,
		CoursesModule,
		UsersModule,
		AuthModule,
	],
})
export class AppModule {}

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true });

	const configService = await app.get<ConfigService>(ConfigService);

	app.use(
		session({
			secret: configService.get('SESSION_SECRET'),
			saveUninitialized: false,
			resave: false,
			cookie: { maxAge: 1000 * 60 * 60 * 24 },
		}),
	);

	await app.listen(3000);
}
bootstrap();

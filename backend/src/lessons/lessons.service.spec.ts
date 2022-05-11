import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { LessonsService } from './lessons.service';

describe('LessonsService', () => {
	let service: LessonsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				LessonsService,
				{
					provide: getRepositoryToken(Lesson),
					useValue: {
						findOne: jest.fn(),
						findAll: jest.fn(),
						create: jest.fn(),
						update: jest.fn(),
						remove: jest.fn(),
					},
				},
			],
		}).compile();

		service = module.get<LessonsService>(LessonsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});

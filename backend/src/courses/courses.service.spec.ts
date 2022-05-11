import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';

describe('CoursesService', () => {
	let service: CoursesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				CoursesService,
				{
					provide: getRepositoryToken(Course),
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

		service = module.get<CoursesService>(CoursesService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});

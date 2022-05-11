import { Test, TestingModule } from '@nestjs/testing';
import { CoursesResolver } from './courses.resolver';
import { CoursesService } from './courses.service';

describe('CoursesResolver', () => {
	let resolver: CoursesResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				CoursesResolver,
				{
					provide: CoursesService,
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

		resolver = module.get<CoursesResolver>(CoursesResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});

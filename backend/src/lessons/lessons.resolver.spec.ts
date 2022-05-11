import { Test, TestingModule } from '@nestjs/testing';
import { LessonsResolver } from './lessons.resolver';
import { LessonsService } from './lessons.service';

describe('LessonsResolver', () => {
	let resolver: LessonsResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				LessonsResolver,
				{
					provide: LessonsService,
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

		resolver = module.get<LessonsResolver>(LessonsResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});

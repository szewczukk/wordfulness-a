import { Test, TestingModule } from '@nestjs/testing';
import { FlashcardsResolver } from './flashcards.resolver';
import { FlashcardsService } from './flashcards.service';

describe('FlashcardsResolver', () => {
	let resolver: FlashcardsResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				FlashcardsResolver,
				{
					provide: FlashcardsService,
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

		resolver = module.get<FlashcardsResolver>(FlashcardsResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';
import { FlashcardsService } from './flashcards.service';

describe('FlashcardsService', () => {
	let service: FlashcardsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				FlashcardsService,
				{
					provide: getRepositoryToken(Flashcard),
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

		service = module.get<FlashcardsService>(FlashcardsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});

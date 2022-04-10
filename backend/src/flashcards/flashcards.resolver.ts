import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { FlashcardsService } from './flashcards.service';
import { Flashcard } from './entities/flashcard.entity';
import { CreateFlashcardInput } from './dto/create-flashcard.input';
import { UpdateFlashcardInput } from './dto/update-flashcard.input';

@Resolver(() => Flashcard)
export class FlashcardsResolver {
	constructor(private readonly flashcardsService: FlashcardsService) {}

	@Mutation(() => Flashcard)
	createFlashcard(
		@Args('createFlashcardInput') createFlashcardInput: CreateFlashcardInput,
	) {
		return this.flashcardsService.create(createFlashcardInput);
	}

	@Query(() => [Flashcard], { name: 'flashcards' })
	findAll() {
		return this.flashcardsService.findAll();
	}

	@Query(() => Flashcard, { name: 'flashcard' })
	findOne(@Args('id', { type: () => ID }) id: number) {
		return this.flashcardsService.findOne(id);
	}

	@Mutation(() => Flashcard)
	updateFlashcard(
		@Args('updateFlashcardInput') updateFlashcardInput: UpdateFlashcardInput,
	) {
		return this.flashcardsService.update(updateFlashcardInput);
	}

	@Mutation(() => Boolean)
	removeFlashcard(@Args('id', { type: () => ID }) id: number) {
		return this.flashcardsService.remove(id);
	}
}

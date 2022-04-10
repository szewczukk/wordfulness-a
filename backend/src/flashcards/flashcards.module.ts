import { Module } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { FlashcardsResolver } from './flashcards.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Flashcard])],
	providers: [FlashcardsResolver, FlashcardsService],
})
export class FlashcardsModule {}

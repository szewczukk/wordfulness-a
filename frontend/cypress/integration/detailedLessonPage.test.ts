describe('Test DetailedLesson page', () => {
	it('Test whether navigation to this page works', () => {
		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedCoursePage/with_lessons.json' },
		).as('graphql');

		cy.visit('/courses/0');

		cy.wait('@graphql');

		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedLessonPage/no_flashcards.json' },
		).as('graphql');

		cy.contains('Lesson #1').should('have.attr', 'href', '/lessons/0').click();

		cy.url().should('contain', '/lessons/0');
	});

	it('Should render empty flashcards array', () => {
		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedLessonPage/no_flashcards.json' },
		).as('graphql');

		cy.visit('/lessons/0');

		cy.wait('@graphql');

		cy.get('h1').should('contain', 'No flashcards!');
	});

	it('Should render with flashcard array', () => {
		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedLessonPage/with_flashcards.json' },
		).as('graphql');

		cy.visit('/lessons/0');

		cy.wait('@graphql');

		cy.get('ul').children().should('have.length', 2);
		cy.contains('1 - F1Front - F2Back').should('exist');
		cy.contains('2 - F2Front - F2Back').should('exist');
	});

	it('Should be able to create new lesson', () => {
		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedLessonPage/with_flashcards.json' },
		).as('graphql');

		cy.visit('/lessons/0');

		cy.wait('@graphql');

		cy.get('input[name=front]').type('F3Front');
		cy.get('input[name=back]').type('F3Back');

		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedLessonPage/new_flashcard.json' },
		).as('graphql');

		cy.contains('Submit').click();

		cy.wait('@graphql');

		cy.get('ul').children().should('have.length', 3);
		cy.contains('3 - F3Front - F3Back').should('exist');
	});
});

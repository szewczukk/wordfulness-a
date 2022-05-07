describe('Test DetailedCourse page', () => {
	it('Test whether navigation to this page works', () => {
		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'HomePage/courses_list.json' },
		).as('graphql');

		cy.visit('/');

		cy.wait('@graphql');

		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedCoursePage/no_lessons.json' },
		).as('graphql');

		cy.contains('Hello').should('have.attr', 'href', '/courses/0').click();

		cy.url().should('contain', '/courses/0');
	});

	it('Should render empty lessons array', () => {
		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedCoursePage/no_lessons.json' },
		).as('graphql');

		cy.visit('/courses/0');

		cy.wait('@graphql');

		cy.get('h1').should('contain', 'No lessons!');
	});

	it('Should render with lessons', () => {
		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedCoursePage/with_lessons.json' },
		).as('graphql');

		cy.visit('/courses/0');

		cy.wait('@graphql');

		cy.get('ul')
			.children()
			.should('have.length', 2)
			.each((el) => {
				cy.wrap(el)
					.children('a')
					.should('have.attr', 'href')
					.and('match', /\/lessons\/\d/);
			});
		cy.contains('Lesson #1').should('exist');
		cy.contains('Lesson #2').should('exist');
	});

	it('Should be able to create new lesson', () => {
		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedCoursePage/with_lessons.json' },
		).as('graphql');

		cy.visit('/courses/0');

		cy.wait('@graphql');

		cy.get('input[name=name]').type('Lesson #3');

		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'DetailedCoursePage/new_lesson.json' },
		).as('graphql');

		cy.get('button').click();

		cy.wait('@graphql');

		cy.get('input[name=name]').should('have.value', '');
		cy.contains('Lesson #3').should('exist');
	});
});

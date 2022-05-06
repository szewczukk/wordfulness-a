describe('Home page', () => {
	it('No courses', () => {
		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'HomePage/empty_courses_list.json' },
		).as('graphql');

		cy.visit('/');

		cy.wait('@graphql');

		cy.get('h1').should('contain', 'No courses!');
	});

	it('List of courses', () => {
		cy.intercept(
			{ method: 'POST', url: 'http://localhost:3000/graphql' },
			{ fixture: 'HomePage/courses_list.json' },
		).as('graphql');

		cy.visit('/');

		cy.wait('@graphql');

		cy.get('ul')
			.children()
			.should('have.length', 2)
			.each((el) => {
				cy.wrap(el)
					.children('a')
					.should('have.attr', 'href')
					.and('match', /\/courses\/\d/);
			});
	});
});

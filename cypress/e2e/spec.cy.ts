describe('My First Test', () => {
  it('Visits the most important pages', () => {
    cy.visit('/');

    cy.url().should('include', '/people/1');
    cy.url().should('not.include', '/person/');
    cy.url().should('not.include', '/planet/');

    cy.contains('Star Wars Universe');

    const paginationLinks = cy.get('app-pagination a');
    paginationLinks.eq(1).click();
    cy.url().should('include', '/people/2');

    const personLinks = cy.get('ng-component a.link');
    personLinks.should('have.length', 10);

    personLinks.first().click();

    cy.url().should('include', '/person/');

    const planetLink = cy.contains('Planet #');
    planetLink.click();

    cy.url().should('include', '/planet/');
    cy.get('app-breadcrumbs a').should('have.length', 2);
  });
});

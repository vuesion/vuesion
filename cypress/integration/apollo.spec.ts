describe('apollo', () => {
  it('should render apollo page', () => {
    cy.visit('http://localhost:3000/example/apollo');

    cy.title().should('include', 'vuesion - Apollo Example');
    cy.contains('Rick Sanchez');
  });
});

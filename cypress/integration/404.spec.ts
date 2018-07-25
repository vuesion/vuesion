describe('404', () => {

  it('should return display not-found page', () => {
    cy.visit('http://localhost:3000/test', { failOnStatusCode: false });
    cy.title().should('include', 'page not found');
  });

});

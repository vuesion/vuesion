describe('404', () => {

  it('should return display not-found page', () => {
    cy.visit('http://localhost:3000/test', { failOnStatusCode: false });
    cy.title().should('include', 'page not found');
  });

  it('should respond with correct status code', (done) => {
    cy.request({
      url:              'http://localhost:3000/test',
      failOnStatusCode: false,
    })
      .then((res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });

});

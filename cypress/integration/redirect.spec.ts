describe('redirect', () => {

  it('should redirect /redirect to /', () => {
    cy.visit('http://localhost:3000/redirect', { failOnStatusCode: false });
    cy.location('pathname').should('eq', '/');
  });

  it('should respond with correct status code', (done) => {
    cy.request({
      url:              'http://localhost:3000/redirect',
      failOnStatusCode: false,
      followRedirect:   false,
    })
      .then((res) => {
        expect(res.status).to.equal(302);
        done();
      });
  });

});

describe('auth guard', () => {
  it('should redirect /example/dashboard to /', () => {
    cy.visit('http://localhost:3000/example/dashboard', { failOnStatusCode: false });
    cy.location('pathname').should('eq', '/');
  });

  it('should respond with correct status code and location', async () => {
    const res = await cy.request({
      url: 'http://localhost:3000/example/dashboard',
      failOnStatusCode: false,
      followRedirect: false,
    });

    expect(res.status).to.equal(302);
  });
});

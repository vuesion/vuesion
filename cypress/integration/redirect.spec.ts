describe('routes config', () => {

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

describe('auth guard', () => {

  it('should redirect /requires-auth to /login', () => {
    cy.visit('http://localhost:3000/requires-auth', { failOnStatusCode: false });
    cy.location('pathname').should('eq', '/login');
  });

  it('should respond with correct status code and location', (done) => {
    cy.request({
      url:              'http://localhost:3000/requires-auth',
      failOnStatusCode: false,
      followRedirect:   false,
    })
      .then((res) => {
        expect(res.status).to.equal(302);
        expect(res.headers.location).to.equal('http://localhost:3000/login?redirect=%2Frequires-auth');
        done();
      });
  });

});

describe('routes config', () => {
  it('should redirect /redirect to /', () => {
    cy.visit('http://localhost:3000/redirect', { failOnStatusCode: false });
    cy.location('pathname').should('eq', '/');
  });

  it('should respond with correct status code', async () => {
    const res = await cy.request({
      url: 'http://localhost:3000/redirect',
      failOnStatusCode: false,
      followRedirect: false,
    });

    expect(res.status).to.equal(302);
  });
});

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
    expect(res.headers.location).to.equal('http://localhost:3000/?redirect=%2Fexample%2Fdashboard');
  });
});

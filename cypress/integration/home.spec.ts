describe('home', () => {
  context('mobile', () => {
    it('e2e', () => {
      cy.viewport(320, 480);
      cy.visit('http://localhost:3000');
      cy.title().should('include', 'Vuesion');
    });
  });

  context('tablet portrait', () => {
    it('e2e', () => {
      cy.viewport(768, 1024);
      cy.visit('http://localhost:3000');
      cy.title().should('include', 'Vuesion');
    });
  });

  context('tablet landscape', () => {
    it('e2e', () => {
      cy.viewport(1024, 768);
      cy.visit('http://localhost:3000');
      cy.title().should('include', 'Vuesion');
    });
  });

  context('small desktop', () => {
    it('e2e', () => {
      cy.viewport(1200, 1024);
      cy.visit('http://localhost:3000');
      cy.title().should('include', 'Vuesion');
    });
  });

  context('large desktop', () => {
    it('e2e', () => {
      cy.viewport(1440, 1200);
      cy.visit('http://localhost:3000');
      cy.title().should('include', 'Vuesion');
    });
  });
});

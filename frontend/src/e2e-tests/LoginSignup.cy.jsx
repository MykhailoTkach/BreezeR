describe('Home Page E2E Test', () => {
    it('should visit the home page and display the main components', () => {
      cy.visit('/login');
      cy.url().should('include', '/login');
    });
  
    it('should display the error message', () => {
        cy.visit('/login');
        cy.url().should('include', '/login');
        cy.get('[data-testid="testlogin"]', { timeout: 20_000 }).should('exist');
    });
  });
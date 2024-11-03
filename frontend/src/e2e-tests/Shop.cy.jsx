describe('Home Page E2E Test', () => {
    it('should display the "NEW ARRIVALS ONLY" heading', () => {
      cy.visit('/'); 
      cy.get('h2').contains('NEW ARRIVALS ONLY').should('be.visible');
    });
  });
  
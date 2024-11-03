
describe('Shop Category Page E2E Test', () => {
    it('should display the "Showing 1-12" element', () => {
        cy.visit('/mens'); 
        cy.contains('span', 'Showing 1-12').should('be.visible');
      });
    });

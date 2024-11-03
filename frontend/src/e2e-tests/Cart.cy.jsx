describe('Cart Page E2E Test', () => {
    it('should display all required elements on the cart page', () => {
      cy.visit('/cart'); 

      cy.contains('p', 'Products').should('be.visible');
      cy.contains('p', 'Title').should('be.visible');
      cy.contains('p', 'Price').should('be.visible');
      cy.contains('p', 'Quantity').should('be.visible');
      cy.contains('p', 'Total').should('be.visible');
      cy.contains('p', 'Remove').should('be.visible');
    });
  });
  
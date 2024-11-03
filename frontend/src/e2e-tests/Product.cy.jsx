describe('Mens Page E2E Test', () => {
    it('should navigate to the product page when clicking on an item', () => {
    cy.visit('/mens');
    cy.get('[data-testid="item"]').first().click();
  });
});

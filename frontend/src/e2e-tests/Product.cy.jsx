describe('Home Page E2E Test', () => {
  it('should visit the home page and display the main components', () => {
    cy.visit('/');
    cy.get('[data-testid="testproduct"]').first().click();
    cy.url().should('include', '/product/');
  });
});

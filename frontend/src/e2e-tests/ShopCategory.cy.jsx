describe('ShopCategory Component', () => {
    beforeEach(() => {
      // Відвідуємо сторінку магазину
      cy.visit('/shop');
      
      // Створюємо моки для контексту ShopContext
      cy.intercept('GET', '/api/products', {
        fixture: 'all_product.json' // Файл з фіктивними даними для all_product
      }).as('getProducts');
    });
  
    it('renders ShopCategory component with banner and product list', () => {
      // Очікуємо на завантаження даних про продукти
      cy.wait('@getProducts');
  
      // Перевіряємо, чи відображається банер
      cy.get('[data-testid="category-banner"]').should('exist').and('be.visible');
      
      // Перевіряємо, чи відображається індекс сортування
      cy.get('[data-testid="index-sort"]').should('exist').and('contain', 'Showing 1-12');
  
      // Перевіряємо, чи відображаються продукти певної категорії
      cy.get('[data-testid="products-list"]').within(() => {
        cy.get('[data-testid^="product-item-"]').should('have.length.at.least', 1); // перевіряємо, чи є продукти
      });
    });
  
    it('interacts with sort dropdown and load more button', () => {
      // Вибираємо сортування та перевіряємо результат
      cy.get('[data-testid="sort-dropdown"]').click();
      cy.get('.dropdown-option').contains('Price: Low to High').click();
      
      // Перевіряємо, чи кнопка "Explore more" працює
      cy.get('[data-testid="load-more"]').click();
      cy.url().should('include', '/explore-more');
    });
  });
  
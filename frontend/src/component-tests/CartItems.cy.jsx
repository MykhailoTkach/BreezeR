import React from 'react';
import { CartItems } from '../Components/CartItems/CartItems';
import { ShopContext } from '../Context/ShopContext';

describe('<CartItems />', () => {
  it('renders with products', () => {
    const testProducts = [
      { id: 1, name: "Product 1", image: "image_url_1", new_price: 100 },
      { id: 2, name: "Product 2", image: "image_url_2", new_price: 150 }
    ];

    const testCartItems = {
      1: 2,
      2: 1
    };

    const testContextValue = {
      all_product: testProducts,
      cartItems: testCartItems,
      removeFromCart: cy.stub().as('removeFromCart'),
      getTotalCartAmount: () => 350
    };

    cy.mount(
      <ShopContext.Provider value={testContextValue}>
        <CartItems />
      </ShopContext.Provider>
    );

    cy.get('img.product-image').should('have.length', testProducts.length);
    cy.contains("Cart Totals").should("exist");
    cy.contains("Total").should("contain", "$350");
  });
});

import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { ShopContext } from '../Context/ShopContext';

describe('<Navbar />', () => {
  it('renders', () => {
    // Створюємо mock-дані для контексту
    const testContextValue = {
      getTotalCartItems: () => 2, // Задаємо кількість товарів у кошику
    };

    // Змонтируємо Navbar з контекстом
    cy.mount(
      <ShopContext.Provider value={testContextValue}>
        <Navbar />
      </ShopContext.Provider>
    );

    // Додаткові перевірки
    cy.contains('Breezer').should('exist'); // Перевіряємо, що логотип є на сторінці
    cy.get('.navCartCount').should('contain', '2'); // Перевіряємо відображення кількості товарів у кошику
  });
});

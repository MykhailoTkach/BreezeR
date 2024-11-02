// RelatedProducts.cy.jsx
import React from 'react';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

const mockData = [
  { id: 1, name: 'Product 1', image: 'image1.jpg', new_price: 100, old_price: 120 },
  { id: 2, name: 'Product 2', image: 'image2.jpg', new_price: 150, old_price: 170 },
];

describe('<RelatedProducts />', () => {
  it('renders', () => {
    cy.mount(<RelatedProducts data_product={mockData} />);
  });
});

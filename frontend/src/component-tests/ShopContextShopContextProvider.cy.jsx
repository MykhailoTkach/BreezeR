import React from 'react'
import ShopContextProvider from '../Context/ShopContext'

describe('<ShopContextProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ShopContextProvider />)
  })
})
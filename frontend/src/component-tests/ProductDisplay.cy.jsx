import React from 'react'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'

describe('<ProductDisplay />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductDisplay />)
  })
})
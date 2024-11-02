import React from 'react'
import { Offers } from '../Components/Offers/Offers'

describe('<Offers />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Offers />)
  })
})
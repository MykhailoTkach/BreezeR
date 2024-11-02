import React from 'react'
import { Popular } from '../Components/Popular/Popular'

describe('<Popular />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Popular />)
  })
})
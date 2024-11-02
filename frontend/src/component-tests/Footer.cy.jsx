import React from 'react'
import { Footer } from '../Components/Footer/Footer'

describe('<Footer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />)
  })
})
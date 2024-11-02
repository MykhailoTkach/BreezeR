import React from 'react'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'

describe('<NewsLetter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NewsLetter />)
  })
})
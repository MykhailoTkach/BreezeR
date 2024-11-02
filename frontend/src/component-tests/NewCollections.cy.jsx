import React from 'react'
import { NewCollections } from '../Components/NewCollections/NewCollections'

describe('<NewCollections />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NewCollections />)
  })
})